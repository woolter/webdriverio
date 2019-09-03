import fs from 'fs'
import path from 'path'
import EventEmitter from 'events'
import axios from 'axios'
import istanbul from 'istanbul'
import { promisify } from 'util'

import logger from '@wdio/logger'

const log = logger('@wdio/devtools-service:CoverageGatherer')
const CAPTURE_INTERVAL = 1000
const COVERAGE_FILENAME = 'coverage-all.json'

export default class CoverageGatherer extends EventEmitter {
    constructor (driver, coverageLogDir) {
        super()
        this.coverageLogDir = path.resolve(process.cwd(), coverageLogDir)
        this.driver = driver
        this.coverage = {}
        this.capturedData = false
        this.instrumenter = new istanbul.Instrumenter()
        console.log(require.resolve('istanbul'))
        process.exit(1)

        this.driver.getActivePage().then((page) => {
            this.page = page
            page.on('request', ::this.handleRequests)
            page.on('load', ::this.captureCoverage)
            return page.setRequestInterception(true)
        })
    }

    async handleRequests (req) {
        const requestUrl = req.url()

        if (!requestUrl.endsWith('.js')) {
            return req.continue()
        }

        const source = await axios.get(requestUrl)
        this.storeSourceFile(requestUrl, source.data)
        const instrumentedSource = this.instrumenter.instrumentSync(source.data, requestUrl)
        log.info(`Instrumented ${requestUrl}`)
        return req.respond({
            status: 200,
            body: instrumentedSource
        })
    }

    storeSourceFile (requestUrl, source) {
        const url = new URL(requestUrl)
        const fullPath = path.join(this.coverageLogDir, 'files', url.hostname, url.pathname)
        const dirPath = path.dirname(fullPath)

        /**
         * create dir if not existing
         */
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true })
        }

        fs.writeFileSync(fullPath, source, 'utf8')
    }

    clearCaptureInterval () {
        clearInterval(this.captureInterval)
        delete this.captureInterval
    }

    captureCoverage () {
        this.capturedData = false

        if (this.captureInterval) {
            this.clearCaptureInterval()
        }

        this.captureInterval = setInterval(async () => {
            log.info('capturing coverage data')

            try {
                const pageCoverage = await this.page.evaluate(
                    // eslint-disable-next-line no-undef
                    () => window['__coverage__'])

                this.capturedData = true
                log.info(`Captured coverage data of ${Object.entries(pageCoverage).length} files`)
                this.coverage = pageCoverage
            } catch (e) {
                log.warn(`Couldn't capture data: ${e.message}`)
                this.clearCaptureInterval()
            }
        }, CAPTURE_INTERVAL)
    }

    async logCoverage () {
        if (!this.coverageLogDir) {
            return
        }

        /**
         * if no coverage data was captured yet, wait until it was
         */
        if (!this.capturedData) {
            log.info('No coverage data collected, waiting...')
            await new Promise((resolve) => setTimeout(resolve, CAPTURE_INTERVAL))
            return this.logCoverage()
        }

        this.clearCaptureInterval()
        const filename = path.join(this.coverageLogDir, COVERAGE_FILENAME)
        log.info(`Store coverage log file at ${filename}`)
        const data = Object.values(this.coverage)
            .map((coverageData) => {
                const url = new URL(coverageData.path)
                const fullPath = path.join(this.coverageLogDir, 'files', url.hostname, url.pathname)
                coverageData.path = fullPath
                return [fullPath, coverageData]
            })
            .reduce((obj, [path, coverageData]) => {
                obj[path] = coverageData
                return obj
            }, {})
        return promisify(fs.writeFile)(filename, JSON.stringify(data), 'utf8')
    }
}

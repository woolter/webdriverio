---
id: saucelabs
title: Sauce Labs
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/wdio-protocols/protocols/saucelabs.json
---

---

## getPageLogs


Get webpage specific log information based on the last page load.<br><br>Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands#CustomSauceLabsWebDriverExtensionsforNetworkandLogCommands-ExtendedDebuggingTools).

##### Usage

```js
browser.getPageLogs(type)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>type</var></code> | string | log type (e.g. sauce:network&#39;, &#39;sauce:performance&#39;) |




##### Examples

```js
// Get Network Logs
console.log(browser.getPageLogs('sauce:network'));
/**
 * outputs:
 * [{
 *   "url": "https://app.saucelabs.com/dashboard",
 *   "statusCode": 200,
 *   "method": "GET",
 *   "requestHeaders": {
 *     ...
 *   },
 *   "responseHeaders": {
 *     ...
 *   },
 *   "timing": {
 *     ...
 *   }
 * }, {,
 *   ...
 * }]
 */
```

```js
// Get Performance Logs (needs capturePerformance capability see: https://wiki.saucelabs.com/display/DOCS/Measure+Page+Load+Performance+Using+Test+Automation#MeasurePageLoadPerformanceUsingTestAutomation-EnableYourScript)
console.log(browser.getPageLogs('sauce:performance'));
/**
 * outputs:
 * {
 *   "speedIndex": 1472.023,
 *   "timeToFirstInteractive": 1243.214,
 *   "firstMeaningfulPaint": 892.643,
 *   ...
 * }
 */
```




##### Returns

- **&lt;Object&gt; <code><var>log</var></code>:** log output of desired type (see example)






---

## throttleNetwork


With network conditioning you can test your site on a variety of network connections, including Edge, 3G, and even offline. You can throttle the data throughput, including the maximum download and upload throughput, and use latency manipulation to enforce a minimum delay in connection round-trip time (RTT).<br><br>Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands#CustomSauceLabsWebDriverExtensionsforNetworkandLogCommands-ThrottleNetworkCapabilities).

##### Usage

```js
browser.throttleNetwork(condition)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>condition</var></code> | string, object | network condition to set (e.g. &#39;online&#39;, &#39;offline&#39;, &#39;GPRS&#39;, &#39;Regular 2G&#39;, &#39;Good 2G&#39;, &#39;Regular 3G&#39;, &#39;Good 3G&#39;, &#39;Regular 4G&#39;, &#39;DSL&#39;, &#39;Wifi&#39;) |




##### Examples

```js
// predefined network condition
browser.throttleNetwork('offline')
```

```js
// custom network condition
browser.throttleNetwork({
  download: 1000,
  upload: 500,
  latency: 40'
})
```









---

## throttleCPU


You can throttle the CPU in DevTools to understand how your page performs under that constraint.<br><br>Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands#CustomSauceLabsWebDriverExtensionsforNetworkandLogCommands-ThrottleCPUCapabilities).

##### Usage

```js
browser.throttleCPU(rate)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>rate</var></code> | number | Rate on how much the CPU should get throttled. |




##### Examples

```js
// throttle CPU and make it run 4x slower
browser.throttleCPU(4)
```

```js
// reset CPU throttling
browser.throttleCPU(0)
```









---

## interceptRequest


Allows modifying any request made by the browser. You can blacklist, modify, or redirect these as required for your tests.<br><br>Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands#CustomSauceLabsWebDriverExtensionsforNetworkandLogCommands-InterceptNetworkRequests).

##### Usage

```js
browser.interceptRequest(rule)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>rule</var></code> | object | A rule describing the request interception. |




##### Examples

```js
// redirect a request
browser.interceptRequest({
  url: 'https://saucelabs.com',
  redirect: 'https://google.com'
})
```

```js
// Blacklist requests to 3rd party vendors
browser.interceptRequest({
  url: 'https://api.segment.io/v1/p',
  error: 'Failed'
})
```

```js
// Modify requests to REST API (Mock REST API response)
browser.interceptRequest({
  url: 'http://sampleapp.appspot.com/api/todos',
  response: {
    headers: {
      'x-custom-headers': 'foobar'
    },
    body: [{
      title: 'My custom todo',
      order: 1,
      completed: false,
      url: 'http://todo-backend-express.herokuapp.com/15727'
    }]
  }
})
```









---

## assertPerformance


Assert against the performance baseline of your app.<br><br>Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands).

##### Usage

```js
browser.assertPerformance(name, metrics)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>name</var></code> | string | Name of the job you created your baseline with. |
| <code><var>metrics</var></code><br><span class="label labelWarning">optional</span> | string[] | Name of metrics you want to assert agains the baseline. |




##### Example

```js
// test performance for a page
browser.url('https://webdriver.io')
const hasRegression = browser.assertPerformance({
  name: 'my performance test', // make sure that the name is also set in the sauce options in your capabilities
  metrics: ['score', 'firstPaint']
})
```




##### Returns

- **&lt;Object&gt; <code><var>hasRegression</var></code>:** An object containing the result as well as metrics about the result.






---

## jankinessCheck


Perform a scroll test that evaluates the jankiness of the application.<br><br>Sauce Labs command. More details can be found in the [official protocol docs](https://wiki.saucelabs.com/display/DOCS/Custom+Sauce+Labs+WebDriver+Extensions+for+Network+and+Log+Commands).

##### Usage

```js
browser.jankinessCheck()
```




##### Example

```js
// test performance for a page
browser.url('https://webdriver.io')
browser.jankinessCheck()
```




##### Returns

- **&lt;Object&gt; <code><var>testResults</var></code>:** An object containing the score as well as metrics around how smooth the UX of the page was during the test.






/**
 *
 * Move the mouse by an offset of the specified element. If no element is specified,
 * the move is relative to the current mouse cursor. If an element is provided but
 * no offset, the mouse will be moved to the center of the element. If the element
 * is not visible, it will be scrolled into view.
 *
 * @param {Number=} xoffset  X offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element.
 * @param {Number=} yoffset  Y offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element.
 *
 * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidmoveto
 * @type protocol
 */

import { getElementRect, getScrollPosition } from '../../utils'

export default async function swipe (xoffset, yoffset) {
    if (!this.isW3C) {
        throw Error('This command is only supported in WebDriver, please update your browser driver')
    }

    /**
     * get rect of element
     */
    const { x, y, width, height } = await getElementRect(this)
    const { scrollX, scrollY } = await getScrollPosition(this)
    const elementXoffset = parseInt(x + (width / 2), 10) - scrollX
    const elementYoffset = parseInt(y + (height / 2), 10) - scrollY

    /**
     * use touch actions for mobile
     */
    if (this.isMobile) {
        return this.touchAction([
            'press',
            { action: 'moveTo', x: elementXoffset, y: elementYoffset },
            'release'
        ])
    }

    return this.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'mouse' },
        actions: [
            { type: 'pointerMove', duration: 0, x: elementXoffset, y: elementYoffset },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 3000 },
            { type: 'pointerMove', duration: 0, origin: 'pointer', x: xoffset, y: yoffset },
            { type: 'pointerUp', button: 0 },
        ]
    }]).then(() => this.releaseActions())
}

---
id: click
title: click
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/click.js
---

Click on an element.

Note: This issues a Webdriver `click` command for the selected element, which generally scrolls to and then clicks the
selected element. However, if you have fixed-position elements (such as a fixed header or footer) that cover up the
selected element after it is scrolled within the viewport, the click will be issued at the given coordinates, but will
be received by your fixed (overlaying) element. In these cased the following error is thrown:

```
Element is not clickable at point (x, x). Other element would receive the click: ..."
```

To work around this, try to find the overlaying element and remove it via `execute` command so it doesn't interfere
the click. You also can try to scroll to the element yourself using `scroll` with an offset appropriate for your
scenario.

##### Usage

```js
$(selector).click({ button, x, y })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>options</var></code><br><span class="label labelWarning">optional</span> | <code>ClickOptions</code> | click options (optional) |
| <code><var>options.button</var></code><br><span class="label labelWarning">optional</span> | <code>string, number</code> | can be one of [0, "left", 1, "middle", 2, "right"] (optional) |
| <code><var>options.x</var></code><br><span class="label labelWarning">optional</span> | <code>number</code> | Number (optional) |
| <code><var>options.y</var></code><br><span class="label labelWarning">optional</span> | <code>number</code> | Number (optional) |

##### Examples

```html example.html
<button id="myButton" onclick="document.getElementById('someText').innerHTML='I was clicked'">Click me</button>
<div id="someText">I was not clicked</div>
```

```js click.js
it('should demonstrate the click command', () => {
    const myButton = $('#myButton')
    myButton.click()
    const myText = $('#someText')
    const text = myText.getText()
    assert(text === 'I was clicked') // true
})
```

```js example.js
it('should fetch menu links and visit each page', () => {
    const links = $$('#menu a')
    links.forEach((link) => {
        link.click()
    })
})

```

```html example.html
<button id="myButton">Click me</button>
```

```js example.js
it('should demonstrate a click using an offset', () => {
    const myButton = $('#myButton')
    myButton.click({ x: 30 }) // clicks 30 horizontal pixels away from location of the button
})

```

```html example.html
<button id="myButton">Click me</button>
```

```js example.js
it('should demonstrate a right click passed as string', () => {
    const myButton = $('#myButton')
    myButton.click({ button: 'right' }) // opens the contextmenu at the location of the button
})
it('should demonstrate a right click passed as number while adding an offset', () => {
    const myButton = $('#myButton')
    myButton.click({ button: 2, x: 30, y: 40 }) // opens the contextmenu 30 horizontal and 40 vertical pixels away from location of the button
})
```


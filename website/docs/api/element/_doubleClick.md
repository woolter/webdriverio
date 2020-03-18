---
id: doubleClick
title: doubleClick
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/doubleClick.js
---

Double-click on an element.

##### Usage

```js
$(selector).doubleClick()
```

##### Examples

```html example.html
<button id="myButton" ondblclick="document.getElementById('someText').innerHTML='I was dblclicked'">Click me</button>
<div id="someText">I was not clicked</div>
```

```js doubleClick.js
it('should demonstrate the doubleClick command', () => {
    const myButton = $('#myButton')
    myButton.doubleClick()

    const value = myButton.getText()
    assert(value === 'I was dblclicked') // true
})
```


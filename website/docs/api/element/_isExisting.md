---
id: isExisting
title: isExisting
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/isExisting.js
---

Returns true if element exists in the DOM

##### Usage

```js
$(selector).isExisting()
```

##### Examples

```html index.html
<div id="notDisplayed" style="display: none"></div>
<div id="notVisible" style="visibility: hidden"></div>
<div id="notInViewport" style="position:absolute; left: 9999999"></div>
<div id="zeroOpacity" style="opacity: 0"></div>
```

```js isExisting.js
it('should detect if elements are existing', () => {
    let elem = $('#someRandomNonExistingElement')
    let isExisting = elem.isExisting()
    console.log(isExisting); // outputs: false

    elem = $('#notDisplayed')
    isExisting = elem.isExisting()
    console.log(isExisting); // outputs: true

    elem = $('#notVisible')
    isExisting = elem.isExisting()
    console.log(isExisting); // outputs: true

    elem = $('#notInViewport')
    isExisting = elem.isExisting()
    console.log(isExisting); // outputs: true

    elem = $('#zeroOpacity')
    isExisting = elem.isExisting()
    console.log(isExisting); // outputs: true
});
```


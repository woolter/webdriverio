---
id: isDisplayed
title: isDisplayed
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/isDisplayed.js
---

Return true if the selected DOM-element is displayed.

##### Usage

```js
$(selector).isDisplayed()
```

##### Examples

```html index.html
<div id="notDisplayed" style="display: none"></div>
<div id="notVisible" style="visibility: hidden"></div>
<div id="notInViewport" style="position:absolute; left: 9999999"></div>
<div id="zeroOpacity" style="opacity: 0"></div>
```

```js isDisplayed.js
it('should detect if an element is displayed', () => {
    let elem = $('#notDisplayed');
    let isDisplayed = elem.isDisplayed();
    console.log(isDisplayed); // outputs: false

    elem = $('#notVisible');

    isDisplayed = elem.isDisplayed();
    console.log(isDisplayed); // outputs: false

    elem = $('#notExisting');
    isDisplayed = elem.isDisplayed();
    console.log(isDisplayed); // outputs: false

    elem = $('#notInViewport');
    isDisplayed = elem.isDisplayed();
    console.log(isDisplayed); // outputs: true

    elem = $('#zeroOpacity');
    isDisplayed = elem.isDisplayed();
    console.log(isDisplayed); // outputs: true
});
```


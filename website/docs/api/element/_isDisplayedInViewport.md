---
id: isDisplayedInViewport
title: isDisplayedInViewport
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/isDisplayedInViewport.js
---

Return true if the selected DOM-element found by given selector is partially visible and within the viewport.

##### Usage

```js
$(selector).isDisplayedInViewport()
```

##### Examples

```html index.html
<div id="notDisplayed" style="display: none"></div>
<div id="notVisible" style="visibility: hidden"></div>
<div id="notInViewport" style="position:absolute; left: 9999999"></div>
<div id="zeroOpacity" style="opacity: 0"></div>
```

```js isDisplayed.js
it('should detect if an element is visible', () => {
    let isDisplayedInViewport = $('#notDisplayed').isDisplayedInViewport();
    console.log(isDisplayedInViewport); // outputs: false

    isDisplayedInViewport = $('#notVisible').isDisplayedInViewport();
    console.log(isDisplayedInViewport); // outputs: false

    isDisplayedInViewport = $('#notExisting').isDisplayedInViewport();
    console.log(isDisplayedInViewport); // outputs: false

    isDisplayedInViewport = $('#notInViewport').isDisplayedInViewport();
    console.log(isDisplayedInViewport); // outputs: false

    isDisplayedInViewport = $('#zeroOpacity').isDisplayedInViewport();
    console.log(isDisplayedInViewport); // outputs: false
});
```


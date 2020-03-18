---
id: saveScreenshot
title: saveScreenshot
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/saveScreenshot.js
---

Save a screenshot of an element to a PNG file on your OS.

##### Usage

```js
$(selector).saveScreenshot(filename)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>filename</var></code> | <code>String</code> | path to the generated image (`.png` suffix is required) relative to the execution directory |

##### Example

```js saveScreenshot.js
it('should save a screenshot of the browser view', function () {
    const elem = $('#someElem');
    elem.saveScreenshot('./some/path/elemScreenshot.png');
});
```


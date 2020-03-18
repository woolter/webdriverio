---
id: saveScreenshot
title: saveScreenshot
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/browser/saveScreenshot.js
---

Save a screenshot of the current browsing context to a PNG file on your OS. Be aware that
some browser drivers take screenshots of the whole document (e.g. Geckodriver with Firefox)
and others only of the current viewport (e.g. Chromedriver with Chrome).

##### Usage

```js
browser.saveScreenshot(filepath)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>filepath</var></code> | <code>String</code> | path to the generated image (`.png` suffix is required) relative to the execution directory |

##### Example

```js saveScreenshot.js
it('should save a screenshot of the browser view', function () {
    browser.saveScreenshot('./some/path/screenshot.png');
});
```


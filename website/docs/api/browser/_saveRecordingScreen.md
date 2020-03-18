---
id: saveRecordingScreen
title: saveRecordingScreen
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/browser/saveRecordingScreen.js
---

Appium only. Save a video started by startRecordingScreen command to file.
See [Appium docs](http://appium.io/docs/en/commands/device/recording-screen/start-recording-screen/)

##### Usage

```js
browser.saveRecordingScreen(filepath)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>filepath</var></code> | <code>String</code> | full or relative to the execution directory path to the generated video |

##### Example

```js saveRecordingScreen.js
it('should save a video', () => {
    browser.startRecordingScreen();
    $('~BUTTON').click();
    browser.saveRecordingScreen('./some/path/video.mp4');
});
```


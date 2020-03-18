---
id: pause
title: pause
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/browser/pause.js
---

Pauses execution for a specific amount of time. It is recommended to not use this command to wait for an
element to show up. In order to avoid flaky test results it is better to use commands like
[`waitForExist`](/docs/api/element/waitForExist.html) or other waitFor* commands.

##### Usage

```js
browser.pause(milliseconds)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>milliseconds</var></code> | <code>Number</code> | time in ms |

##### Example

```js pause.js
it('should pause the execution', () => {
    const starttime = new Date().getTime()
    browser.pause(3000)
    const endtime = new Date().getTime()
    console.log(endtime - starttime) // outputs: 3000
});
```


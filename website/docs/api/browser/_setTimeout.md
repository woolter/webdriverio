---
id: setTimeout
title: setTimeout
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/browser/setTimeout.js
---

Sets the timeouts associated with the current session, timeout durations control such
behaviour as timeouts on script injection, document navigation, and element retrieval.
For more information and examples, see [timeouts guide](https://webdriver.io/docs/timeouts.html#selenium-timeouts).

##### Usage

```js
browser.setTimeout({ implicit, pageLoad, script })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>timeouts</var></code> | <a href="Timeouts.html">Timeouts</a> | Object containing session timeout values |
| <code><var>timeouts.implicit</var></code><br><span class="label labelWarning">optional</span> | <code>Number</code> | Time in milliseconds to retry the element location strategy when finding an element. |
| <code><var>timeouts.pageLoad</var></code><br><span class="label labelWarning">optional</span> | <code>Number</code> | Time in milliseconds to wait for the document to finish loading. |
| <code><var>timeouts.script</var></code><br><span class="label labelWarning">optional</span> | <code>Number</code> | Scripts injected with [`execute`](https://webdriver.io/docs/api/browser/execute.html) or [`executeAsync`](https://webdriver.io/docs/api/browser/executeAsync.html) will run until they hit the script timeout duration, which is also given in milliseconds. |

##### Example

```js setTimeout.js
it('should change timeout duration for session with long code duration', () => {
    browser.setTimeout({
        'pageLoad': 10000,
        'script': 60000
    });
    // Execute code which takes a long time
    browser.executeAsync((done) => {
        console.log('Wake me up before you go!');
        setTimeout(done, 59000);
    });
});
```


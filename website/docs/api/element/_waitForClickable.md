---
id: waitForClickable
title: waitForClickable
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/waitForClickable.js
---

Wait for an element for the provided amount of
milliseconds to be clickable or not clickable.

##### Usage

```js
$(selector).waitForClickable({ timeout, reverse, timeoutMsg, interval })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>options</var></code><br><span class="label labelWarning">optional</span> | <code>WaitForOptions</code> | waitForEnabled options (optional) |
| <code><var>options.timeout</var></code><br><span class="label labelWarning">optional</span> | <code>Number</code> | time in ms (default: 500) |
| <code><var>options.reverse</var></code><br><span class="label labelWarning">optional</span> | <code>Boolean</code> | if true it waits for the opposite (default: false) |
| <code><var>options.timeoutMsg</var></code><br><span class="label labelWarning">optional</span> | <code>String</code> | if exists it overrides the default error message |
| <code><var>options.interval</var></code><br><span class="label labelWarning">optional</span> | <code>Number</code> | interval between checks (default: `waitforInterval`) |

##### Example

```js waitForClickable.js
it('should detect when element is clickable', () => {
    const elem = $('#elem')
    elem.waitForClickable({ timeout: 3000 });
});
it('should detect when element is no longer clickable', () => {
    const elem = $('#elem')
    elem.waitForClickable({ reverse: true });
});
```


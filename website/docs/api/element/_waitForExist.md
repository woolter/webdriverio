---
id: waitForExist
title: waitForExist
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/waitForExist.js
---

Wait for an element for the provided amount of
milliseconds to be present within the DOM. Returns true if the selector
matches at least one element that exists in the DOM, otherwise throws an
error. If the reverse flag is true, the command will instead return true
if the selector does not match any elements.

##### Usage

```js
$(selector).waitForExist({ timeout, reverse, timeoutMsg, interval })
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

```js waitForExistSyncExample.js
it('should display a notification message after successful form submit', function () {
    const form = $('form');
    const notification = $('.notification');
    form.$(".send").click();
    notification.waitForExist({ timeout: 5000 });
    expect(notification.getText()).to.be.equal('Data transmitted successfully!')
});
it('should remove a message after successful form submit', function () {
    const form = $('form');
    const message = $('.message');
    form.$(".send").click();
    // passing 'undefined' allows us to keep the default timeout value without overwriting it
    message.waitForExist({ reverse: true });
});
```


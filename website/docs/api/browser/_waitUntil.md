---
id: waitUntil
title: waitUntil
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/browser/waitUntil.js
---

This wait command is your universal weapon if you want to wait on something. It expects a condition
and waits until that condition is fulfilled with a truthy value. If you use the WDIO testrunner the
commands within the condition are getting executed synchronously like in your test.

A common example is to wait until a certain element contains a certain text (see example).

##### Usage

```js
browser.waitUntil({ options, timeout, timeoutMsg, interval })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>condition</var></code> | <code>?</code> | condition to wait on |
| <code><var>options</var></code><br><span class="label labelWarning">optional</span> | <code>WaitUntilOptions</code> | command options |
| <code><var>options.timeout</var></code><br><span class="label labelWarning">optional</span> | <code>Number</code> | timeout in ms (default: 5000) |
| <code><var>options.timeoutMsg</var></code><br><span class="label labelWarning">optional</span> | <code>String</code> | error message to throw when waitUntil times out |
| <code><var>options.interval</var></code><br><span class="label labelWarning">optional</span> | <code>Number</code> | interval between condition checks (default: 500) |

##### Examples

```html example.html
<div id="someText">I am some text</div>
<script>
  setTimeout(() => {
    $('#someText').html('I am now different');
  }, 1000);
</script>

```

```js waitUntil.js
it('should wait until text has changed', () => {
    browser.waitUntil(
        () => $('#someText').getText() === 'I am now different',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );
});
```


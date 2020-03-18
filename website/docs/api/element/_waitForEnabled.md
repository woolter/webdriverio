---
id: waitForEnabled
title: waitForEnabled
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/waitForEnabled.js
---

Wait for an element (selected by css selector) for the provided amount of
milliseconds to be (dis/en)abled. If multiple elements get queried by given
selector, it returns true if at least one element is (dis/en)abled.

##### Usage

```js
$(selector).waitForEnabled({ timeout, reverse, timeoutMsg, interval })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>options</var></code><br><span class="label labelWarning">optional</span> | <code>WaitForOptions</code> | waitForEnabled options (optional) |
| <code><var>options.timeout</var></code><br><span class="label labelWarning">optional</span> | <code>Number</code> | time in ms (default: 500) |
| <code><var>options.reverse</var></code><br><span class="label labelWarning">optional</span> | <code>Boolean</code> | if true it waits for the opposite (default: false) |
| <code><var>options.timeoutMsg</var></code><br><span class="label labelWarning">optional</span> | <code>String</code> | if exists it overrides the default error message |
| <code><var>options.interval</var></code><br><span class="label labelWarning">optional</span> | <code>Number</code> | interval between checks (default: `waitforInterval`) |

##### Examples

```html index.html
<input type="text" id="username" value="foobar" disabled="disabled"></input>
<script type="text/javascript">
    setTimeout(() => {
        document.getElementById('username').disabled = false
    }, 2000);
</script>
```

```js waitForEnabledExample.js
it('should detect when element is enabled', () => {
    $('#username').waitForEnabled({ timeout: 3000 });
});

it('should detect when element is disabled', () => {
    elem = $('#username');
    elem.waitForEnabled({ reverse: true })
});
```


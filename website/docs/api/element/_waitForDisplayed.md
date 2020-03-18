---
id: waitForDisplayed
title: waitForDisplayed
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/waitForDisplayed.js
---

Wait for an element for the provided amount of
milliseconds to be displayed or not displayed.

##### Usage

```js
$(selector).waitForDisplayed({ timeout, reverse, timeoutMsg, interval })
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
<div id="elem" style="visibility: hidden;">Hello World!</div>
<script type="text/javascript">
    setTimeout(() => {
        document.getElementById('elem').style.visibility = 'visible';
    }, 2000);
</script>
```

```js waitForVisibleExample.js
it('should detect when element is visible', () => {
    const elem = $('#elem')
    elem.waitForDisplayed({ timeout: 3000 });
});
it('should detect when element is no longer visible', () => {
    const elem = $('#elem')
    // passing 'undefined' allows us to keep the default timeout value without overwriting it
    elem.waitForDisplayed({ reverse: true });
});
```


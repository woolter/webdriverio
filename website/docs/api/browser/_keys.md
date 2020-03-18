---
id: keys
title: keys
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/browser/keys.js
---

Send a sequence of key strokes to the active element. You can also use characters like
"Left arrow" or "Back space". WebdriverIO will take care of translating them into unicode
characters. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions).
To do that, the value has to correspond to a key from the table.

Modifier like Ctrl, Shift, Alt and Meta will stay pressed so you need to trigger them again to release them.

##### Usage

```js
browser.keys(value)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>value</var></code> | <code>String</code>, <code>Array</code>.&lt;<code>String</code>&gt; | The sequence of keys to type. An array or string must be provided. |

##### Example

```js keys.js
it('copies text out of active element', () => {
    // copies text from an input element
    const input = $('#username')
    input.setValue('anonymous')

    browser.keys(['Meta', 'a'])
    browser.keys(['Meta', 'c'])
});
```


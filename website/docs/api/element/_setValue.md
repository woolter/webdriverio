---
id: setValue
title: setValue
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/setValue.js
---

Send a sequence of key strokes to an element (clears value before). If the element
doesn't need to be cleared first then use addValue. You can also use
unicode characters like Left arrow or Back space. WebdriverIO will take care of
translating them into unicode characters. You’ll find all supported characters
[here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions).
To do that, the value has to correspond to a key from the table.

##### Usage

```js
$(selector).setValue(value)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>value</var></code> | <code>string</code>, <code>number</code>, <code>boolean</code>, <code>object</code>, <code>Array</code>.&lt;<a href="any.html">any</a>&gt; | Value to be added |

##### Example

```js setValue.js
it('should set value for a certain element', () => {
    const input = $('.input');
    input.setValue('test123');

    console.log(input.getValue()); // outputs: 'test123'
});
```


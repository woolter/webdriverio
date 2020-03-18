---
id: addValue
title: addValue
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/addValue.js
---

Add a value to an object found by given selector. You can also use unicode
characters like Left arrow or Back space. WebdriverIO will take care of
translating them into unicode characters. You’ll find all supported characters
[here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions).
To do that, the value has to correspond to a key from the table.

##### Usage

```js
$(selector).addValue(value)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>value</var></code> | <code>string</code>, <code>number</code>, <code>boolean</code>, <code>object</code>, <code>Array</code>.&lt;<a href="any.html">any</a>&gt; | value to be added |

##### Example

```js addValue.js
it('should demonstrate the addValue command', () => {
    let input = $('.input')
    input.addValue('test')
    input.addValue(123)

    value = input.getValue()
    assert(value === 'test123') // true
})
```


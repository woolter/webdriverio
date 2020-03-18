---
id: selectByAttribute
title: selectByAttribute
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/selectByAttribute.js
---

Select option with a specific value.

##### Usage

```js
$(selector).selectByAttribute(attribute, value)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>attribute</var></code> | <code>String</code> | attribute of option element to get selected |
| <code><var>value</var></code> | <code>String</code> | value of option element to get selected |

##### Examples

```html example.html
<select id="selectbox">
    <option value="someValue0">uno</option>
    <option value="someValue1">dos</option>
    <option value="someValue2">tres</option>
    <option value="someValue3">cuatro</option>
    <option value="someValue4">cinco</option>
    <option name="someName5" value="someValue5">seis</option>
</select>
```

```js selectByAttribute.js
it('Should demonstrate the selectByAttribute command', () => {
    const selectBox = $('#selectbox');
    const value = selectBox.getValue();
    console.log(value); // returns "someValue0"

    selectBox.selectByAttribute('value', 'someValue3');
    console.log(selectBox.getValue()); // returns "someValue3"

    selectBox.selectByAttribute('name', 'someName5');
    console.log(selectBox.getValue()); // returns "someValue5"
});
```


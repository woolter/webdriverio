---
id: selectByIndex
title: selectByIndex
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/selectByIndex.js
---

Select option with a specific index.

##### Usage

```js
$(selector).selectByIndex(index)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>index</var></code> | <code>Number</code> | option index |

##### Examples

```html example.html
<select id="selectbox">
    <option value="someValue0">uno</option>
    <option value="someValue1">dos</option>
    <option value="someValue2">tres</option>
    <option value="someValue3">cuatro</option>
    <option value="someValue4">cinco</option>
    <option value="someValue5">seis</option>
</select>
```

```js selectByIndex.js
it('Should demonstrate the selectByIndex command', () => {
    const selectBox = $('#selectbox');
    console.log(selectBox.getValue()); // returns "someValue0"
    selectBox.selectByIndex(4);
    console.log(selectBox.getValue()); // returns "someValue4"
});
```


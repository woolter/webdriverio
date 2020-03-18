---
id: selectByVisibleText
title: selectByVisibleText
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/selectByVisibleText.js
---

Select option with displayed text matching the argument.

##### Usage

```js
$(selector).selectByVisibleText(text)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>text</var></code> | <code>String</code> | text of option element to get selected |

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

```js selectByVisibleText.js
it('demonstrate the selectByVisibleText command', () => {
    const selectBox = $('#selectbox');
    console.log(selectBox.getText('option:checked')); // returns "uno"
    selectBox.selectByVisibleText('cuatro');
    console.log(selectBox.getText('option:checked')); // returns "cuatro"
})
```


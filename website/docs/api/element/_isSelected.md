---
id: isSelected
title: isSelected
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/isSelected.js
---

Will return true or false whether or not an `<option>` or `<input>` element of type
checkbox or radio is currently selected.

##### Usage

```js
$(selector).isSelected()
```

##### Examples

```html index.html
<select name="selectbox" id="selectbox">
    <option value="John Doe">John Doe</option>
    <option value="Layla Terry" selected="selected">Layla Terry</option>
    <option value="Bill Gilbert">Bill Gilbert"</option>
</select>

```

```js isSelected.js
it('should detect if an element is selected', () => {
    let element = $('[value="Layla Terry"]');
    console.log(element.isSelected()); // outputs: true

    element = $('[value="Bill Gilbert"]')
    console.log(element.isSelected()); // outputs: false
});
```


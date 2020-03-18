---
id: getValue
title: getValue
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/getValue.js
---

Get the value of a `<textarea>`, `<select>` or text `<input>` found by given selector.
If multiple elements are found via the given selector, an array of values is returned instead.
For input with checkbox or radio type use isSelected.

##### Usage

```js
$(selector).getValue()
```

##### Examples

```html index.html
<input type="text" value="John Doe" id="username">
```

```js getValue.js
it('should demonstrate the getValue command', () => {
    const inputUser = $('#username');
    const value = inputUser.getValue();
    console.log(value); // outputs: "John Doe"
});
```


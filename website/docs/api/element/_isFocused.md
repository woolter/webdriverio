---
id: isFocused
title: isFocused
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/isFocused.js
---

Return true or false if the selected DOM-element currently has focus. If the selector matches
multiple elements, it will return true if one of the elements has focus.

##### Usage

```js
$(selector).isFocused()
```

##### Examples

```html index.html
<input name="login" autofocus="" />
```

```js hasFocus.js
it('should detect the focus of an element', () => {
    browser.url('/');
    const loginInput = $('[name="login"]');
    console.log(loginInput.isFocused()); // outputs: false

    loginInput.click();
    console.log(loginInput.isFocused()); // outputs: true
})
```


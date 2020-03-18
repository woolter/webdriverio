---
id: isEnabled
title: isEnabled
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/isEnabled.js
---

Return true or false if the selected DOM-element is enabled.

##### Usage

```js
$(selector).isEnabled()
```

##### Examples

```html index.html
<input type="text" name="inputField" class="input1">
<input type="text" name="inputField" class="input2" disabled>
<input type="text" name="inputField" class="input3" disabled="disabled">

```

```js isEnabled.js
it('should detect if an element is enabled', () => {
    let elem = $('.input1')
    let isEnabled = elem.isEnabled();
    console.log(isEnabled); // outputs: true

    elem = $('.input2')
    isEnabled = elem.isEnabled();
    console.log(isEnabled2); // outputs: false

    elem = $('.input3')
    isEnabled = elem.isEnabled();
    console.log(isEnabled3); // outputs: false
});
```


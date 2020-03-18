---
id: clearValue
title: clearValue
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/clearValue.js
---

Clear a `<textarea>` or text `<input>` element’s value. Make sure you can interact with the
element before using this command. You can't clear an input element that is disabled or in
readonly mode.

##### Usage

```js
$(selector).clearValue()
```

##### Example

```js clearValue.js
it('should demonstrate the clearValue command', function () {
    const elem = $('.input')
    elem.setValue('test123')

    const value = elem.getValue()
    console.log(value) // returns 'test123'

    elem.clearValue()
    value = elem.getValue()
    assert(value === ''); // true
})
```


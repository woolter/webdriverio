---
id: isEqual
title: isEqual
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/isEqual.js
---

Return true if the selected element matches with the provided one.

##### Usage

```js
$(selector).isEqual(el)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>el</var></code> | <code>Element</code> | element to compare with |

##### Example

```js isEqual.js
it('should detect if an element is clickable', () => {
    const el = $('#el')
    const sameEl = $('#el')
    const anotherEl = $('#anotherEl')

    el.isEqual(sameEl) // outputs: true

    el.isEqual(anotherEl) // outputs: false
});
```


---
id: shadow$$
title: shadow$$
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/shadow$$.js
---

Access elements inside a given element's shadowRoot

##### Usage

```js
$(selector).shadow$$(selector)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>selector</var></code> | <code>String</code>, <code>Function</code> | selector or JS Function to fetch a certain element |

##### Example

```js shadow$$.js
it('should return elements inside a shadowRoot', () => {
    const innerEl = $('.input').shadow$$('#innerEl');
    console.log(innerEl.getValue()); // outputs: 'test123'
});
```


---
id: getProperty
title: getProperty
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/getProperty.js
---

The Get Element Property command will return the result of getting a property of an element.

##### Usage

```js
$(selector).getProperty(property)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>property</var></code> | <code>String</code> | name of the element property |

##### Example

```js getProperty.js
it('should demonstrate the getProperty command', () => {
    var elem = $('body')
    var tag = elem.getProperty('tagName')
    console.log(tag) // outputs: "BODY"
})
```


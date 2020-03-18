---
id: getAttribute
title: getAttribute
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/getAttribute.js
---

Get an attribute from a DOM-element based on the attribute name.

##### Usage

```js
$(selector).getAttribute(attributeName)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>attributeName</var></code> | <code>String</code> | requested attribute |

##### Examples

```html index.html
<form action="/submit" method="post" class="loginForm">
    <input type="text" name="name" placeholder="username"></input>
    <input type="text" name="password" placeholder="password"></input>
    <input type="submit" name="submit" value="submit"></input>
</form>
```

```js getAttribute.js
it('should demonstrate the getAttribute command', () => {
    const form = $('form')
    const attr = form.getAttribute('method')
    console.log(attr) // outputs: "post"
})
```


---
id: getTagName
title: getTagName
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/getTagName.js
---

Get tag name of a DOM-element.

##### Usage

```js
$(selector).getTagName()
```

##### Examples

```html index.html
<div id="elem">Lorem ipsum</div>

```

```js getTagName.js
it('should demonstrate the getTagName command', () => {
    const elem = $('#elem');

    const tagName = elem.getTagName();
    console.log(tagName); // outputs: "div"
})
```


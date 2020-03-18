---
id: getHTML
title: getHTML
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/getHTML.js
---

Get source code of specified DOM element by selector.

##### Usage

```js
$(selector).getHTML({  })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>includeSelectorTag</var></code><br><span class="label labelWarning">optional</span> | <code>Boolean</code> | if true it includes the selector element tag (default: true) |

##### Examples

```html index.html
<div id="test">
    <span>Lorem ipsum dolor amet</span>
</div>
```

```js getHTML.js
it('should get html for certain elements', () => {
    var outerHTML = $('#test').getHTML();
    console.log(outerHTML);
    // outputs:
    // "<div id="test"><span>Lorem ipsum dolor amet</span></div>"

    var innerHTML = $('#test').getHTML(false);
    console.log(innerHTML);
    // outputs:
    // "<span>Lorem ipsum dolor amet</span>"
});
```


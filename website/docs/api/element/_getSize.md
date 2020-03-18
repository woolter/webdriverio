---
id: getSize
title: getSize
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/getSize.js
---

Get the width and height for an DOM-element.

##### Usage

```js
$(selector).getSize({  })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>prop</var></code><br><span class="label labelWarning">optional</span> | <code>String</code> | size to receive [optional] ("width" or "height") |

##### Example

```js getSize.js
it('should demonstrate the getSize command', () => {
    browser.url('http://github.com')
    const logo = $('.octicon-mark-github')

    const size = logo.getSize()
    console.log(size) // outputs: { width: 32, height: 32 }

    const width = logo.getSize('width')
    console.log(width) // outputs: 32

    const height = logo.getSize('height')
    console.log(height) // outputs: 32
})
```


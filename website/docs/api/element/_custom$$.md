---
id: custom$$
title: custom$$
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/custom$$.js
---

The `customs$$` allows you to use a custom strategy declared by using `browser.addLocatorStrategy`

##### Usage

```js
$(selector).custom$$(strategyName, strategyArguments)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>strategyName</var></code> | <code>String</code> |  |
| <code><var>strategyArguments</var></code> | <a href="Any.html">Any</a> |  |

##### Example

```js example.js
it('should get all the plugin wrapper buttons', () => {
    browser.url('https://webdriver.io')
    browser.addLocatorStrategy('myStrat', (selector) => {
        return document.querySelectorAll(selector)
    })

    const pluginRowBlock = browser.custom$('myStrat', '.pluginRowBlock')
    const pluginWrapper = pluginRowBlock.custom$$('myStrat', '.pluginWrapper')

    console.log(pluginWrapper.length) // 4
})
```


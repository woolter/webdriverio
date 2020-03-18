---
id: custom$
title: custom$
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/browser/custom$.js
---

The `custom$` allows you to use a custom strategy declared by using `browser.addLocatorStrategy`

##### Usage

```js
browser.custom$(strategyName, strategyArguments)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>strategyName</var></code> | <code>String</code> |  |
| <code><var>strategyArguments</var></code> | <a href="Any.html">Any</a> |  |

##### Example

```js example.js
it('should fetch the project title', () => {
    browser.url('https://webdriver.io')
    browser.addLocatorStrategy('myStrat', (selector) => {
        return document.querySelectorAll(selector)
    })

    const projectTitle = browser.custom$('myStrat', '.projectTitle')

    console.log(projectTitle.getText()) // WEBDRIVER I/O
})
```


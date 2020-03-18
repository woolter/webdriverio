---
id: switchWindow
title: switchWindow
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/browser/switchWindow.js
---

Switch focus to a particular tab / window.

##### Usage

```js
browser.switchWindow(urlOrTitleToMatch)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>urlOrTitleToMatch</var></code> | <code>String</code>, <code>RegExp</code> | String or regular expression that matches the title or url of the page |

##### Example

```js switchWindow.js
it('should switch to another window', () => {
    // open url
    browser.url('https://google.com')
    // create new window
    browser.newWindow('https://webdriver.io')

    // switch back via url match
    browser.switchWindow('google.com')

    // switch back via title match
    browser.switchWindow('Next-gen WebDriver test framework')
});
```


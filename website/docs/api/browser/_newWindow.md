---
id: newWindow
title: newWindow
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/browser/newWindow.js
---

Open new window in browser. This command is the equivalent function to `window.open()`. This command does not
work in mobile environments.

__Note:__ When calling this command you automatically switch to the new window.

##### Usage

```js
browser.newWindow({ options, windowName, windowFeatures })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>url</var></code> | <code>String</code> | website URL to open |
| <code><var>options</var></code><br><span class="label labelWarning">optional</span> | <code>NewWindowOptions</code> | newWindow command options |
| <code><var>options.windowName</var></code><br><span class="label labelWarning">optional</span> | <code>String</code> | name of the new window |
| <code><var>options.windowFeatures</var></code><br><span class="label labelWarning">optional</span> | <code>String</code> | features of opened window (e.g. size, position, scrollbars, etc.) |

##### Example

```js newWindowSync.js
it('should open a new tab', () => {
    browser.url('http://google.com')
    console.log(browser.getTitle()) // outputs: "Google"

    browser.newWindow('https://webdriver.io', 'WebdriverIO window', 'width=420,height=230,resizable,scrollbars=yes,status=1')
    console.log(browser.getTitle()) // outputs: "WebdriverIO · Next-gen WebDriver test framework for Node.js"

    browser.closeWindow()
    console.log(browser.getTitle()) // outputs: "Google"
});
```


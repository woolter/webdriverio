---
id: deleteCookies
title: deleteCookies
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/browser/deleteCookies.js
---

Delete cookies visible to the current page. By providing a cookie name it just removes the single cookie or more when multiple names are passed.

##### Usage

```js
browser.deleteCookies({  })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>names</var></code><br><span class="label labelWarning">optional</span> | <code>String, Array.&lt;String&gt;</code> | names of cookies to be deleted |

##### Example

```js deleteCookie.js
it('should delete cookies', () => {
    browser.setCookies([
        {name: 'test', value: '123'},
        {name: 'test2', value: '456'},
        {name: 'test3', value: '789'}
    ])

    let cookies = browser.getCookies()
    console.log(cookies)
    // outputs:
    // [
    //     { name: 'test', value: '123' },
    //     { name: 'test2', value: '456' }
    //     { name: 'test3', value: '789' }
    // ]

    browser.deleteCookies(['test3'])
    cookies = browser.getCookies()
    console.log(cookies)
    // outputs:
    // [
    //     { name: 'test', value: '123' },
    //     { name: 'test2', value: '456' }
    // ]

    browser.deleteCookies()
    cookies = browser.getCookies()
    console.log(cookies) // outputs: []
})
```


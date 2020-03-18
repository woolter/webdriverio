---
id: getCookies
title: getCookies
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/browser/getCookies.js
---

Retrieve a [cookie](https://w3c.github.io/webdriver/webdriver-spec.html#cookies)
visible to the current page. You can query a specific cookie by providing the cookie name or
retrieve all.

##### Usage

```js
browser.getCookies({  })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>names</var></code><br><span class="label labelWarning">optional</span> | <code>Array.&lt;String&gt;, String</code> | names of requested cookies (if omitted, all cookies will be returned) |

##### Example

```js getCookies.js
it('should return a cookie for me', () => {
    browser.setCookies([
        {name: 'test', value: '123'},
        {name: 'test2', value: '456'}
    ])
    const testCookie = browser.getCookies(['test'])
    console.log(testCookie); // outputs: [{ name: 'test', value: '123' }]

    const allCookies = browser.getCookies()
    console.log(allCookies);
    // outputs:
    // [
    //    { name: 'test', value: '123' },
    //    { name: 'test2', value: '456' }
    // ]
})
```


---
id: setCookies
title: setCookies
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/browser/setCookies.js
---

Sets one or more [cookies](https://w3c.github.io/webdriver/#cookies) for the current page. Make sure you are
on the page that should receive the cookie. You can't set a cookie for an arbitrary page without
being on that page.

##### Usage

```js
browser.setCookies({ name, value, path, domain, secure, httpOnly, expiry, sameSite })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>cookie</var></code> | <code>Array</code>.&lt;<a href="WebDriver.Cookie.html">WebDriver.Cookie</a>&gt;, <a href="WebDriver.Cookie.html">WebDriver.Cookie</a> | cookie object or object array. |
| <code><var>cookie.name</var></code><br><span class="label labelWarning">optional</span> | <code>String</code> | The name of the cookie. |
| <code><var>cookie.value</var></code><br><span class="label labelWarning">optional</span> | <code>String</code> | The cookie value. |
| <code><var>cookie.path</var></code><br><span class="label labelWarning">optional</span> | <code>String</code> | The cookie path. Defaults to "/" if omitted when adding a cookie. |
| <code><var>cookie.domain</var></code><br><span class="label labelWarning">optional</span> | <code>String</code> | The domain the cookie is visible to. Defaults to the current browsing context’s active document’s URL domain if omitted when adding a cookie. |
| <code><var>cookie.secure</var></code><br><span class="label labelWarning">optional</span> | <code>Boolean</code> | Whether the cookie is a secure cookie. Defaults to false if omitted when adding a cookie. |
| <code><var>cookie.httpOnly</var></code><br><span class="label labelWarning">optional</span> | <code>Boolean</code> | Whether the cookie is an HTTP only cookie. Defaults to false if omitted when adding a cookie. |
| <code><var>cookie.expiry</var></code><br><span class="label labelWarning">optional</span> | <code>Number</code> | When the cookie expires, specified in seconds since Unix Epoch. Must not be set if omitted when adding a cookie. |
| <code><var>cookie.sameSite</var></code><br><span class="label labelWarning">optional</span> | <code>String</code> | Whether the cookie applies to a SameSite policy. Defaults to None if omitted when adding a cookie. Can be set to either "Lax" or "Strict". |

##### Example

```js setCookies.js
it('should set a cookie for the page', () => {
    browser.url('/')

    // set a single cookie
    browser.setCookies({
        name: 'test1',
        value: 'one'
        // The below options are optional
        // path: '/foo', // The cookie path. Defaults to "/"
        // domain: '.example.com', // The domain the cookie is visible to. Defaults to the current browsing context’s active document’s URL domain
        // secure: true, // Whether the cookie is a secure cookie. Defaults to false
        // httpOnly: true, // Whether the cookie is an HTTP only cookie. Defaults to false
        // expiry: 1551393875 // When the cookie expires, specified in seconds since Unix Epoch
    })

    // set multiple cookies
    browser.setCookies([
        {name: 'test2', value: 'two'},
        {name: 'test3', value: 'three'}
    ])

    const cookies = browser.getCookies()
    console.log(cookies);
    // outputs:
    // [
    //      {name: 'test1', value: 'one', domain: 'www.example.com'},
    //      {name: 'test2', value: 'two', domain: 'www.example.com'},
    //      {name: 'test3', value: 'three', domain: 'www.example.com'}
    // ]
});
```


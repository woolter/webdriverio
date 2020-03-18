---
id: url
title: url
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/browser/url.js
---

Protocol binding to load the URL of the browser. If a baseUrl is
specified in the config, it will be prepended to the url parameter using
node's url.resolve() method.

##### Usage

```js
browser.url({  })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>url</var></code><br><span class="label labelWarning">optional</span> | <code>String</code> | the URL to navigate to |

##### Examples

```js url.js
// navigate to a new URL
browser.url('https://webdriver.io');
// receive url
console.log(browser.getUrl()); // outputs: "https://webdriver.io"

```

```js baseUrlResolutions.js
// With a base URL of http://example.com/site, the following url parameters resolve as such:
// When providing a scheme:
// https://webdriver.io
browser.url('https://webdriver.io');
// When not starting with a slash, the URL resolves relative to the baseUrl
// http://example.com/site/relative
browser.url('relative');
// When starting with a slash, the URL resolves relative to the root path of the baseUrl
// http://example.com/rootRelative
browser.url('/rootRelative');
```


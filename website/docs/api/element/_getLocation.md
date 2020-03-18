---
id: getLocation
title: getLocation
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/getLocation.js
---

Determine an element’s location on the page. The point (0, 0) refers to
the upper-left corner of the page.

##### Usage

```js
$(selector).getLocation(prop)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>prop</var></code> | <code>String</code> | can be "x" or "y" to get a result value directly for easier assertions |

##### Example

```js getLocation.js
it('should demonstrate the getLocation function', () => {
    browser.url('http://github.com');
    const logo = $('.octicon-mark-github')
    const location = logo.getLocation();
    console.log(location); // outputs: { x: 150, y: 20 }

    const xLocation = logo.getLocation('x')
    console.log(xLocation); // outputs: 150

    const yLocation = logo.getLocation('.octicon-mark-github', 'y')
    console.log(yLocation); // outputs: 20
});
```


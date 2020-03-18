---
id: isClickable
title: isClickable
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/isClickable.js
---

Return true if the selected DOM-element:
- exists;
- is visible;
- is within viewport (if not try scroll to it);
- its center is not overlapped with another element;
- is not disabled.

otherwise return false.

Please note that `isClickable` works only in web and webviews, it doesn't work in mobile app native context.

##### Usage

```js
$(selector).isClickable()
```

##### Example

```js isClickable.js
it('should detect if an element is clickable', () => {
    const el = $('#el')
    let clickable = el.isClickable();
    console.log(clickable); // outputs: true or false

    // wait for element to be clickable
    browser.waitUntil(() => el.isClickable())
});
```


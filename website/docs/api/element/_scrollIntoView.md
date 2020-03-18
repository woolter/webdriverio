---
id: scrollIntoView
title: scrollIntoView
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/scrollIntoView.js
---

Scroll element into viewport ([MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)).

##### Usage

```js
$(selector).scrollIntoView({  })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>scrollIntoViewOptions</var></code><br><span class="label labelWarning">optional</span> | <code>object, boolean</code> | options for `Element.scrollIntoView()` (default: `true`) |

##### Example

```js scrollIntoView.js
it('should demonstrate the scrollIntoView command', () => {
    const elem = $('#myElement');
    // scroll to specific element
    elem.scrollIntoView();
});
```


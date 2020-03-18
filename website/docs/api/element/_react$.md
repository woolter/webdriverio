---
id: react$
title: react$
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/react$.js
---

The `react$` command is a useful command to query React Components by their
actual name and filter them by props and state.

**NOTE:** the command only works with applications using React v16.x

##### Usage

```js
$(selector).react$({ options, props, state })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>selector</var></code> | <code>String</code> | of React component |
| <code><var>options</var></code><br><span class="label labelWarning">optional</span> | <code>ReactSelectorOptions</code> | React selector options |
| <code><var>options.props</var></code><br><span class="label labelWarning">optional</span> | <code>Object</code> | React props the element should contain |
| <code><var>options.state</var></code><br><span class="label labelWarning">optional</span> | <code>Array.&lt;any&gt;, number, string, object, boolean</code> | React state the element should be in |

##### Example

```js pause.js
it('should calculate 7 * 6', () => {
    browser.url('https://ahfarmer.github.io/calculator/');
    const appWrapper = browser.$('div#root')

    browser.react$('t', {
        props: { name: '7' }
    }).click()
    browser.react$('t', {
        props: { name: 'x' }
    }).click()
    browser.react$('t', {
        props: { name: '6' }
    }).click()
    browser.react$('t', {
        props: { name: '=' }
    }).click()

    console.log($('.component-display').getText()); // prints "42"
});
```


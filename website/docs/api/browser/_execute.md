---
id: execute
title: execute
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/browser/execute.js
---

Inject a snippet of JavaScript into the page for execution in the context of the currently selected frame.
The executed script is assumed to be synchronous and the result of evaluating the script is returned to
the client.

The script argument defines the script to execute in the form of a function body. The value returned by
that function will be returned to the client. The function will be invoked with the provided args array
and the values may be accessed via the arguments object in the order specified.

Arguments may be any JSON-primitive, array, or JSON object. JSON objects that define a WebElement
reference will be converted to the corresponding DOM element. Likewise, any WebElements in the script
result will be returned to the client as WebElement JSON objects.

##### Usage

```js
browser.execute(script, arguments)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>script</var></code> | <code>String</code>, <code>Function</code> | The script to execute. |
| <code><var>arguments</var></code><br><span class="label labelWarning">optional</span> | <code>*</code> | script arguments |

##### Example

```js execute.js
it('should inject javascript on the page', () => {
    const result = browser.execute((a, b, c, d) => {
        // browser context - you may not access client or console
        return a + b + c + d
    }, 1, 2, 3, 4)
    // node.js context - client and console are available
    console.log(result) // outputs: 10
});
```


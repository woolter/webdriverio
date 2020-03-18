---
id: webdriver
title: Webdriver Protocol
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/wdio-protocols/protocols/webdriver.json
---

---

## newSession


The New Session command creates a new WebDriver session with the endpoint node. If the creation fails, a session not created error is returned.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-new-sessions).

##### Usage

```js
browser.newSession(capabilities)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>capabilities</var></code> | object | a JSON object, the set of capabilities that was ultimately merged and matched in the capability processing algorithm |






##### Returns

- **&lt;Object&gt; <code><var>session</var></code>:** Object containing sessionId and capabilities of created WebDriver session.






---

## deleteSession


The Delete Session command closes any top-level browsing contexts associated with the current session, terminates the connection, and finally closes the current session.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-delete-session).

##### Usage

```js
browser.deleteSession()
```











---

## status


The Status command returns information about whether a remote end is in a state in which it can create new sessions and can additionally include arbitrary meta information that is specific to the implementation.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-status).

##### Usage

```js
browser.status()
```






##### Returns

- **&lt;Object&gt; <code><var>status</var></code>:** Object containing status of the driver status.






---

## getTimeouts


The Get Timeouts command gets timeout durations associated with the current session.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-timeouts).

##### Usage

```js
browser.getTimeouts()
```






##### Returns

- **&lt;Object&gt; <code><var>timeouts</var></code>:** Object containing timeout durations for `script`, `pageLoad` and `implicit` timeouts.






---

## setTimeouts


The Set Timeouts command sets timeout durations associated with the current session. The timeouts that can be controlled are listed in the table of session timeouts below.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-set-timeouts).

##### Usage

```js
browser.setTimeouts(implicit, pageLoad, script)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>implicit</var></code><br><span class="label labelWarning">optional</span> | number | integer in ms for session implicit wait timeout |
| <code><var>pageLoad</var></code><br><span class="label labelWarning">optional</span> | number | integer in ms for session page load timeout |
| <code><var>script</var></code><br><span class="label labelWarning">optional</span> | number | integer in ms for session script timeout |











---

## getUrl


The Get Current URL command returns the URL of the current top-level browsing context.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-current-url).

##### Usage

```js
browser.getUrl()
```






##### Returns

- **&lt;string&gt; <code><var>url</var></code>:** current top-level browsing context’s active document’s document URL






---

## navigateTo


The navigateTo (go) command is used to cause the user agent to navigate the current top-level browsing context a new location.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-navigate-to).

##### Usage

```js
browser.navigateTo(url)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>url</var></code> | string | string representing an absolute URL (beginning with http(s)), possibly including a fragment (#...), could also be a local scheme (about: etc) |






##### Returns

- **&lt;String&gt; <code><var>url</var></code>:** current document URL of the top-level browsing context.






---

## back


The Back command causes the browser to traverse one step backward in the joint session history of the current top-level browsing context. This is equivalent to pressing the back button in the browser chrome or calling `window.history.back`.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-back).

##### Usage

```js
browser.back()
```











---

## forward


The Forward command causes the browser to traverse one step forwards in the joint session history of the current top-level browsing context.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-forward).

##### Usage

```js
browser.forward()
```











---

## refresh


The Refresh command causes the browser to reload the page in current top-level browsing context.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-refresh).

##### Usage

```js
browser.refresh()
```











---

## getTitle


The Get Title command returns the document title of the current top-level browsing context, equivalent to calling `document.title`.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-title).

##### Usage

```js
browser.getTitle()
```






##### Returns

- **&lt;String&gt; <code><var>title</var></code>:** Returns a string which is the same as `document.title` of the current top-level browsing context.






---

## getWindowHandle


The Get Window Handle command returns the window handle for the current top-level browsing context. It can be used as an argument to Switch To Window.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-window-handle).

##### Usage

```js
browser.getWindowHandle()
```






##### Returns

- **&lt;String&gt; <code><var>handle</var></code>:** Returns a string which is the window handle for the current top-level browsing context.






---

## closeWindow


The Close Window command closes the current top-level browsing context. Once done, if there are no more top-level browsing contexts open, the WebDriver session itself is closed.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-close-window).

##### Usage

```js
browser.closeWindow()
```











---

## switchToWindow


The Switch To Window command is used to select the current top-level browsing context for the current session, i.e. the one that will be used for processing commands.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-switch-to-window).

##### Usage

```js
browser.switchToWindow(handle)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>handle</var></code> | string | a string representing a window handle, should be one of the strings that was returned in a call to getWindowHandles |











---

## createWindow


Create a new top-level browsing context.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#new-window).

##### Usage

```js
browser.createWindow(type)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>type</var></code> | string | Set to &#39;tab&#39; if the newly created window shares an OS-level window with the current browsing context, or &#39;window&#39; otherwise. |






##### Returns

- **&lt;Object&gt; <code><var>window</var></code>:** New window object containing &#39;handle&#39; with the value of the handle and &#39;type&#39; with the value of the created window type






---

## getWindowHandles


The Get Window Handles command returns a list of window handles for every open top-level browsing context. The order in which the window handles are returned is arbitrary.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-window-handles).

##### Usage

```js
browser.getWindowHandles()
```






##### Returns

- **&lt;String[]&gt; <code><var>handles</var></code>:** An array which is a list of window handles.






---

## switchToFrame


The Switch To Frame command is used to select the current top-level browsing context or a child browsing context of the current browsing context to use as the current browsing context for subsequent commands.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-switch-to-frame).

##### Usage

```js
browser.switchToFrame(id)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>id</var></code> | number, object, null | one of three possible types: null: this represents the top-level browsing context (i.e., not an iframe), a Number, representing the index of the window object corresponding to a frame, an Element object received using `findElement`. |











---

## switchToParentFrame


The Switch to Parent Frame command sets the current browsing context for future commands to the parent of the current browsing context.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-switch-to-parent-frame).

##### Usage

```js
browser.switchToParentFrame()
```











---

## getWindowRect


The Get Window Rect command returns the size and position on the screen of the operating system window corresponding to the current top-level browsing context.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-window-rect).

##### Usage

```js
browser.getWindowRect()
```






##### Returns

- **&lt;Object&gt; <code><var>windowRect</var></code>:** A JSON representation of a &#34;window rect&#34; object. This has 4 properties: `x`, `y`, `width` and `height`.






---

## setWindowRect


The Set Window Rect command alters the size and the position of the operating system window corresponding to the current top-level browsing context.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-set-window-rect).

##### Usage

```js
browser.setWindowRect(x, y, width, height)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>x</var></code> | number, null | the screenX attribute of the window object |
| <code><var>y</var></code> | number, null | the screenY attribute of the window object |
| <code><var>width</var></code> | number, null | the width of the outer dimensions of the top-level browsing context, including browser chrome etc... |
| <code><var>height</var></code> | number, null | the height of the outer dimensions of the top-level browsing context, including browser chrome etc... |






##### Returns

- **&lt;Object&gt; <code><var>windowRect</var></code>:** A JSON representation of a &#34;window rect&#34; object based on the new window state.






---

## maximizeWindow


The Maximize Window command invokes the window manager-specific "maximize" operation, if any, on the window containing the current top-level browsing context. This typically increases the window to the maximum available size without going full-screen.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-maximize-window).

##### Usage

```js
browser.maximizeWindow()
```






##### Returns

- **&lt;Object&gt; <code><var>windowRect</var></code>:** A JSON representation of a &#34;window rect&#34; object based on the new window state.






---

## minimizeWindow


The Minimize Window command invokes the window manager-specific "minimize" operation, if any, on the window containing the current top-level browsing context. This typically hides the window in the system tray.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-minimize-window).

##### Usage

```js
browser.minimizeWindow()
```






##### Returns

- **&lt;Object&gt; <code><var>windowRect</var></code>:** A JSON representation of a &#34;window rect&#34; object of the (new) current top-level browsing context.






---

## fullscreenWindow


The Fullscreen Window command invokes the window manager-specific “full screen” operation, if any, on the window containing the current top-level browsing context. This typically increases the window to the size of the physical display and can hide browser chrome elements such as toolbars.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-fullscreen-window).

##### Usage

```js
browser.fullscreenWindow()
```






##### Returns

- **&lt;Object&gt; <code><var>windowRect</var></code>:** A JSON representation of a &#34;window rect&#34; object of the (new) current top-level browsing context.






---

## findElement


The Find Element command is used to find an element in the current browsing context that can be used for future commands.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-find-element).

##### Usage

```js
browser.findElement(using, value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>using</var></code> | string | a valid element location strategy |
| <code><var>value</var></code> | string | the actual selector that will be used to find an element |






##### Returns

- **&lt;String&gt; <code><var>element</var></code>:** A JSON representation of an element object.






---

## findElements


The Find Elements command is used to find elements in the current browsing context that can be used for future commands.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-find-elements).

##### Usage

```js
browser.findElements(using, value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>using</var></code> | string | a valid element location strategy |
| <code><var>value</var></code> | string | the actual selector that will be used to find an element |






##### Returns

- **&lt;String[]&gt; <code><var>elements</var></code>:** A (possibly empty) JSON list of representations of an element object.






---

## findElementFromElement


The Find Element From Element command is used to find an element from a web element in the current browsing context that can be used for future commands.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-find-element-from-element).

##### Usage

```js
browser.findElementFromElement(elementId, using, value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |
| <code><var>using</var></code> | string | a valid element location strategy |
| <code><var>value</var></code> | string | the actual selector that will be used to find an element |






##### Returns

- **&lt;String&gt; <code><var>element</var></code>:** A JSON representation of an element object.






---

## findElementsFromElement


The Find Elements From Element command is used to find elements from a web element in the current browsing context that can be used for future commands.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-find-elements-from-element).

##### Usage

```js
browser.findElementsFromElement(elementId, using, value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |
| <code><var>using</var></code> | string | a valid element location strategy |
| <code><var>value</var></code> | string | the actual selector that will be used to find an element |






##### Returns

- **&lt;String[]&gt; <code><var>elements</var></code>:** A (possibly empty) JSON list of representations of an element object.






---

## getActiveElement


Get Active Element returns the active element of the current browsing context’s document element.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-active-element).

##### Usage

```js
browser.getActiveElement()
```






##### Returns

- **&lt;String&gt; <code><var>element</var></code>:** A JSON representation of an element object.






---

## isElementSelected


Is Element Selected determines if the referenced element is selected or not. This operation only makes sense on input elements of the Checkbox- and Radio Button states, or option elements.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-is-element-selected).

##### Usage

```js
browser.isElementSelected(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |






##### Returns

- **&lt;Boolean&gt; <code><var>isSelected</var></code>:** `true` or `false` based on the selected state.






---

## isElementDisplayed


Is Element Displayed determines the visibility of an element which is guided by what is perceptually visible to the human eye. In this context, an element's displayedness does not relate to the `visibility` or `display` style properties.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#element-displayedness).

##### Usage

```js
browser.isElementDisplayed(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |






##### Returns

- **&lt;Boolean&gt; <code><var>isDisplayed</var></code>:** `true` or `false` based on the visible state.






---

## getElementAttribute


The Get Element Attribute command will return the attribute of a web element.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-element-attribute).

##### Usage

```js
browser.getElementAttribute(elementId, name)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |
| <code><var>name</var></code> | String | name of the attribute value to retrieve |






##### Returns

- **&lt;String&gt; <code><var>attribute</var></code>:** The named attribute of the element.






---

## getElementProperty


The Get Element Property command will return the result of getting a property of an element.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-element-property).

##### Usage

```js
browser.getElementProperty(elementId, name)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |
| <code><var>name</var></code> | String | name of the attribute property to retrieve |






##### Returns

- **&lt;String&gt; <code><var>property</var></code>:** The named property of the element, accessed by calling GetOwnProperty on the element object.






---

## getElementCSSValue


The Get Element CSS Value command retrieves the computed value of the given CSS property of the given web element.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-element-css-value).

##### Usage

```js
browser.getElementCSSValue(elementId, propertyName)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |
| <code><var>propertyName</var></code> | String | name of the CSS property to retrieve |






##### Returns

- **&lt;String&gt; <code><var>cssValue</var></code>:** The computed value of the parameter corresponding to property name from the element&#39;s style declarations (unless the document type is xml, in which case the return value is simply the empty string).






---

## getElementText


The Get Element Text command intends to return an element’s text "as rendered". An element's rendered text is also used for locating a elements by their link text and partial link text.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-element-text).

##### Usage

```js
browser.getElementText(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |






##### Returns

- **&lt;String&gt; <code><var>text</var></code>:** The visible text of the element (including child elements), following the algorithm defined in the Selenium Atoms for [`bot.dom.getVisibleText`](https://github.com/SeleniumHQ/selenium/blob/e09e28f016c9f53196cf68d6f71991c5af4a35d4/javascript/atoms/dom.js#L981).






---

## getElementTagName


The Get Element Tag Name command returns the qualified element name of the given web element.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-element-tag-name).

##### Usage

```js
browser.getElementTagName(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |






##### Returns

- **&lt;String&gt; <code><var>text</var></code>:** The tagName attribute of the element.






---

## getElementRect


The Get Element Rect command returns the dimensions and coordinates of the given web element.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-element-rect).

##### Usage

```js
browser.getElementRect(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |






##### Returns

- **&lt;Object&gt; <code><var>elementRect</var></code>:** A JSON object representing the position and bounding rect of the element.






---

## isElementEnabled


Is Element Enabled determines if the referenced element is enabled or not. This operation only makes sense on form controls.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-is-element-enabled).

##### Usage

```js
browser.isElementEnabled(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |






##### Returns

- **&lt;Boolean&gt; <code><var>isEnabled</var></code>:** If the element is in an xml document, or is a disabled form control: `false`, otherwise, `true`.






---

## elementClick


The Element Click command scrolls into view the element if it is not already pointer-interactable, and clicks its in-view center point. If the element's center point is obscured by another element, an element click intercepted error is returned. If the element is outside the viewport, an element not interactable error is returned.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-element-click).

##### Usage

```js
browser.elementClick(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |











---

## elementClear


The Element Clear command scrolls into view an editable or resettable element and then attempts to clear its selected files or text content.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-element-clear).

##### Usage

```js
browser.elementClear(elementId)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |











---

## elementSendKeys


The Element Send Keys command scrolls into view the form control element and then sends the provided keys to the element. In case the element is not keyboard-interactable, an element not interactable error is returned.<br><br>The key input state used for input may be cleared mid-way through "typing" by sending the null key, which is U+E000 (NULL).<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-element-send-keys).

##### Usage

```js
browser.elementSendKeys(elementId, text, value)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |
| <code><var>text</var></code> | string | string to send as keystrokes to the element |
| <code><var>value</var></code><br><span class="label labelWarning">optional</span> | string[] | The sequence of keys to type. Workaround https://github.com/appium/appium/issues/12085 |











---

## getPageSource


The Get Page Source command returns a string serialization of the DOM of the current browsing context active document.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-page-source).

##### Usage

```js
browser.getPageSource()
```






##### Returns

- **&lt;string&gt; <code><var>pageSource</var></code>:** the DOM of the current browsing context active document






---

## executeScript


The Execute Script command executes a JavaScript function in the context of the current browsing context and returns the return value of the function.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-execute-script).

##### Usage

```js
browser.executeScript(script, args)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>script</var></code> | string | a string, the Javascript function body you want executed |
| <code><var>args</var></code><br><span class="label labelWarning">optional</span> | string, object, number, boolean, undefined[] | an array of JSON values which will be deserialized and passed as arguments to your function |






##### Returns

- **&lt;*&gt; <code><var>result</var></code>:** Either the return value of your script, the fulfillment of the Promise returned by your script, or the error which was the reason for your script&#39;s returned Promise&#39;s rejection.






---

## executeAsyncScript


The Execute Async Script command causes JavaScript to execute as an anonymous function. Unlike the Execute Script command, the result of the function is ignored. Instead an additional argument is provided as the final argument to the function. This is a function that, when called, returns its first argument as the response.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-execute-async-script).

##### Usage

```js
browser.executeAsyncScript(script, args)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>script</var></code> | string | a string, the Javascript function body you want executed |
| <code><var>args</var></code> | string, object, number, boolean, undefined[] | an array of JSON values which will be deserialized and passed as arguments to your function |






##### Returns

- **&lt;*&gt; <code><var>result</var></code>:** Either the return value of your script, the fulfillment of the Promise returned by your script, or the error which was the reason for your script&#39;s returned Promise&#39;s rejection.






---

## getAllCookies


The Get All Cookies command returns all cookies associated with the address of the current browsing context’s active document.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-all-cookies).

##### Usage

```js
browser.getAllCookies()
```






##### Returns

- **&lt;Object[]&gt; <code><var>cookies</var></code>:** A list of serialized cookies. Each serialized cookie has a number of optional fields which may or may not be returned in addition to `name` and `value`.






---

## addCookie


The Add Cookie command adds a single cookie to the cookie store associated with the active document's address.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-adding-a-cookie).

##### Usage

```js
browser.addCookie(cookie)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>cookie</var></code> | object | A JSON object representing a cookie. It must have at least the name and value fields and could have more, including expiry-time and so on |











---

## deleteAllCookies


The Delete All Cookies command allows deletion of all cookies associated with the active document's address.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-delete-all-cookies).

##### Usage

```js
browser.deleteAllCookies()
```











---

## getNamedCookie


The Get Named Cookie command returns the cookie with the requested name from the associated cookies in the cookie store of the current browsing context's active document. If no cookie is found, a no such cookie error is returned.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-named-cookie).

##### Usage

```js
browser.getNamedCookie(name)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>name</var></code> | String | name of the cookie to retrieve |






##### Returns

- **&lt;Object&gt; <code><var>cookie</var></code>:** A serialized cookie, with name and value fields. There are a number of optional fields like `path`, `domain`, and `expiry-time` which may also be present.






---

## deleteCookie


The Delete Cookie command allows you to delete either a single cookie by parameter name, or all the cookies associated with the active document's address if name is undefined.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-delete-cookie).

##### Usage

```js
browser.deleteCookie(name)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>name</var></code> | String | name of the cookie to retrieve |











---

## performActions


The Perform Actions command is used to execute complex user actions. See [spec](https://github.com/jlipps/simple-wd-spec#perform-actions) for more details.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-perform-actions).

##### Usage

```js
browser.performActions(actions)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>actions</var></code> | object[] | a list of objects, each of which represents an input source and its associated actions |











---

## releaseActions


The Release Actions command is used to release all the keys and pointer buttons that are currently depressed. This causes events to be fired as if the state was released by an explicit series of actions. It also clears all the internal state of the virtual devices.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-release-actions).

##### Usage

```js
browser.releaseActions()
```











---

## dismissAlert


The Dismiss Alert command dismisses a simple dialog if present, otherwise error. A request to dismiss an alert user prompt, which may not necessarily have a dismiss button, has the same effect as accepting it.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-dismiss-alert).

##### Usage

```js
browser.dismissAlert()
```











---

## acceptAlert


The Accept Alert command accepts a simple dialog if present, otherwise error.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-accept-alert).

##### Usage

```js
browser.acceptAlert()
```











---

## getAlertText


The Get Alert Text command returns the message of the current user prompt. If there is no current user prompt, it returns an error.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-get-alert-text).

##### Usage

```js
browser.getAlertText()
```






##### Returns

- **&lt;String&gt; <code><var>alertText</var></code>:** The message of the user prompt.






---

## sendAlertText


The Send Alert Text command sets the text field of a window.prompt user prompt to the given value.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-send-alert-text).

##### Usage

```js
browser.sendAlertText(text)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>text</var></code> | string | string to set the prompt to |











---

## takeScreenshot


The Take Screenshot command takes a screenshot of the top-level browsing context's viewport.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-take-screenshot).

##### Usage

```js
browser.takeScreenshot()
```






##### Returns

- **&lt;String&gt; <code><var>screenshot</var></code>:** The base64-encoded PNG image data comprising the screenshot of the initial viewport.






---

## takeElementScreenshot


The Take Element Screenshot command takes a screenshot of the visible region encompassed by the bounding rectangle of an element.<br><br>Webdriver Protocol command. More details can be found in the [official protocol docs](https://w3c.github.io/webdriver/#dfn-take-element-screenshot).

##### Usage

```js
browser.takeElementScreenshot(elementId, scroll)
```


##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>elementId</var></code> | String | the id of an element returned in a previous call to Find Element(s) |
| <code><var>scroll</var></code><br><span class="label labelWarning">optional</span> | boolean | scroll into view the element. Default: true |






##### Returns

- **&lt;String&gt; <code><var>screenshot</var></code>:** The base64-encoded PNG image data comprising the screenshot of the visible region of an element’s bounding rectangle after it has been scrolled into view.






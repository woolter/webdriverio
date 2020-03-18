---
id: uploadFile
title: uploadFile
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/browser/uploadFile.js
---

Uploads a file to the Selenium Standalone server or other browser driver
(e.g. Chromedriver) by using the [`file`](/api/protocol/file.html) command.
_Note:_ that this command is only supported if you use a Selenium Hub or
Chromedriver directly.

##### Usage

```js
browser.uploadFile(localPath)
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>localPath</var></code> | <code>String</code> | local path to file |

##### Example

```js touchAction.js
const path = require('path');

it('should upload a file', function () {
    const filePath = path.join(__dirname, '/local/path/to/your/file');

    const remoteFilePath = browser.uploadFile(filePath);
    $('.upload-data-file-input').setValue(remoteFilePath);
});
```


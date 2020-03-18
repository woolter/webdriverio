---
id: dragAndDrop
title: dragAndDrop
custom_edit_url: https://github.com/webdriverio/webdriverio/edit/master/packages/webdriverio/src/commands/element/dragAndDrop.js
---

Drag an item to a destination element.

##### Usage

```js
$(selector).dragAndDrop({ options, duration })
```

##### Parameters

| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>target</var></code> | <code>Element</code> | destination selector |
| <code><var>options</var></code><br><span class="label labelWarning">optional</span> | <code>DragAndDropOptions</code> | dragAndDrop command options |
| <code><var>options.duration</var></code><br><span class="label labelWarning">optional</span> | <code>Number</code> | how long the drag should take place |

##### Example

```test example.test.js
it('should demonstrate the doubleClick command', () => {
    const elem = $('#someElem')
    const target = $('#someTarget')
    elem.dragAndDrop(target)
})
```


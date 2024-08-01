---
title: Drag and Drop
layout: "docs.html"
---

Feathers UI provides a [`DragDropManager`](https://api.feathersui.com/current/feathers/dragDrop/DragDropManager.html) to support drag-and-drop of children and data between UI components.

## Built-in drag and drop

The [`ListView`](./list-view.md) and [`GridView`](./grid-view.md) data containers can enable drag-and-drop gestures by setting certain properties. The user can pick up an item or row with the pointer (either on mouse down or touch start), drag it, and then drop by releasing the pointer (on mouse up or touch end).

- Set the [`dragEnabled`](https://api.feathersui.com/current/feathers/controls/ListView.html#dragEnabled) property to `true` to enable an item or row to be picked up by the user's pointer on mouse down or touch start.

- Set the [`dropEnabled`](https://api.feathersui.com/current/feathers/controls/ListView.html#dropEnabled) property to `true` to allow the user to drop an item on the container and add it to the data provider.

- Set the [`removeOnDragDropComplete`](https://api.feathersui.com/current/feathers/controls/ListView.html#removeOnDragDropComplete) to `true` to remove the dragged item from its original data provider when it is successfully dropped elsewhere.

```haxe
var listView = new ListView();
listView.dragEnabled = true;
listView.dropEnabled = true;
listView.removeOnDragDropComplete = true;
```

> See the [`list-view-drag-and-drop` sample](https://github.com/feathersui/feathersui-openfl/tree/v{% include "feathersui-openfl-version.html" %}/samples/list-view-drag-and-drop) for a demonstration of how to enable drag-and-drop in a [`ListView`](./list-view.md) component.

## Custom drag and drop

If a UI component implements the [`IDragSource`](https://api.feathersui.com/current/feathers/dragDrop/IDragSource.html), it may call [`DragDropManager.startDrag()`](https://api.feathersui.com/current/feathers/dragDrop/DragDropManager.html#startDrag) to begin a drag-and-drop action in response to a user gesture (such as `MouseEvent.MOUSE_DOWN` or `MouseEvent.MOUSE_MOVE`).

If a UI component implements the [`IDropTarget`](https://api.feathersui.com/current/feathers/dragDrop/IDropTarget.html) interface, it may call [`DragDropManager.acceptDrag()`](https://api.feathersui.com/current/feathers/dragDrop/DragDropManager.html#acceptDrag) to allow the user to drop an object on mouse up or touch end.

### Drag data

Data passed in a drag-and-drop gesture is stored in a [`DragData`](https://api.feathersui.com/current/feathers/dragDrop/DragData.html) instance. This class works similarly to a map, allowing it to store multiple items with string keys. The values may be any Haxe object or class instance, similarly to items that might be added to a [data collection](./data-collections.md).

```haxe
var item = {a: 123, b: true};
var dragData = new DragData();
dragData.set("my-custom-drag-format", item);
DragDropManager.startDrag(this, dragData);
```

### Drag and drop events

After a drag is started, and the user moves the pointer around, each [`IDropTarget`](https://api.feathersui.com/current/feathers/dragDrop/IDropTarget.html) will automatically dispatch certain events that they can listen for by adding listeners to themselves.

- [`DragDropEvent.DRAG_ENTER`](https://api.feathersui.com/current/feathers/events/DragDropEvent.html#DRAG_ENTER) is dispatched when the pointer move over the [`IDropTarget`](https://api.feathersui.com/current/feathers/dragDrop/IDropTarget.html).

    ```haxe
    addEventListener(DragDropEvent.DRAG_ENTER, event ->
    {
        if (!event.dragData.exists("my-custom-drag-format"))
        {
            return;
        }
        event.acceptDrag(this);
    });
    ```

- [`DragDropEvent.DRAG_MOVE`](https://api.feathersui.com/current/feathers/events/DragDropEvent.html#DRAG_MOVE) is dispatched when the pointer that is over the [`IDropTarget`](https://api.feathersui.com/current/feathers/dragDrop/IDropTarget.html) moves to a new location.

- [`DragDropEvent.DRAG_EXIT`](https://api.feathersui.com/current/feathers/events/DragDropEvent.html#DRAG_EXIT) is dispatched when the pointer is no longer over the [`IDropTarget`](https://api.feathersui.com/current/feathers/dragDrop/IDropTarget.html).

- [`DragDropEvent.DRAG_DROP`](https://api.feathersui.com/current/feathers/events/DragDropEvent.html#DRAG_DROP) is dispatched on mouse up or touch end, the pointer is over the [`IDropTarget`](https://api.feathersui.com/current/feathers/dragDrop/IDropTarget.html), and the [`IDropTarget`](https://api.feathersui.com/current/feathers/dragDrop/IDropTarget.html) has called [`DragDropManager.acceptDrag()`](https://api.feathersui.com/current/feathers/dragDrop/DragDropManager.html#acceptDrag).

The [`IDragSource`](https://api.feathersui.com/current/feathers/dragDrop/IDragSource.html) will also dispatch some events.

- [`DragDropEvent.DRAG_START`](https://api.feathersui.com/current/feathers/events/DragDropEvent.html#DRAG_START) is dispatched when the drag gesture starts in response to a call to [`DragDropManager.startDrag()`](https://api.feathersui.com/current/feathers/dragDrop/DragDropManager.html#startDrag).

- [`DragDropEvent.DRAG_COMPLETE`](https://api.feathersui.com/current/feathers/events/DragDropEvent.html#DRAG_COMPLETE) is dispatched either when the data is dropped, or when the drag gesture is cancelled without being accepted.

> See the [`drag-and-drop` sample](https://github.com/feathersui/feathersui-openfl/tree/v{% include "feathersui-openfl-version.html" %}/samples/drag-and-drop) for a demonstration of how to enable drag-and-drop in a [custom UI component](./custom-ui-components.md).

## Layout support for drag and drop

If a layout implements the [`IDragDropLayout`](https://api.feathersui.com/current/feathers/layout/IDragDropLayout.html) interface, the container can pass the position of a drop to the layout to calculate the drop index of the item. This interface has two methods.

- [`getDragDropIndex()`](https://api.feathersui.com/current/feathers/layout/IDragDropLayout.html#getDragDropIndex) calculates the index of the dropped item from the drop position.

- [`getDragDropRegion()`](https://api.feathersui.com/current/feathers/layout/IDragDropLayout.html#getDragDropRegion) returns the region where the container can position an indicator to show the user where the drop will occur.

## Related Links

- [`feathers.dragDrop.DragDropManager` API Documentation](https://api.feathersui.com/current/feathers/dragDrop/DragDropManager.html)
- [Sample: `ListView` Drag and Drop](https://github.com/feathersui/feathersui-openfl/tree/v{% include "feathersui-openfl-version.html" %}/samples/list-view-drag-and-drop)
- [Sample: Custom Drag and Drop](https://github.com/feathersui/feathersui-openfl/tree/v{% include "feathersui-openfl-version.html" %}/samples/drag-and-drop)
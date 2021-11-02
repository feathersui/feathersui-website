---
title: Create class-based custom item renderers for Feathers UI data containers
sidebar_label: Class-based item renderers
---

> 🚧 **Under construction!** This documentation is still being written.

Developers may subclass one of the core Feathers UI types, such as [`LayoutGroup`](./layout-group.md) or [`FeathersControl`](https://api.feathersui.com/current/feathers/core/FeathersControl.html), to create a [custom item renderer](custom-item-renderers.md) for a data container. A class-based item renderer provides the most control over how an item renderer looks and behaves, but it also requires a bit more advanced knowledge of UI component archictecture and internals than is required for using `DisplayObjectRecycler` alone.

> It's highly recommended to read through [How to create a custom UI component](./custom-ui-components.md) to familiarize yourself with the UI component lifecycle the low-level APIs that are available.

## Special interfaces

If a class-based custom item renderers implements certain interfaces, the data container will populate some properties automatically. The following interfaces are supported by all data containers.

- [`IDataRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IDataRenderer.html) - The data container automatically sets the item renderer's `data` property to an item from the [collection](./data-collections.md).
- [`ILayoutIndexObject`](https://api.feathersui.com/current/feathers/layout/ILayoutIndexObject.html) The data container automatically updates the `layoutIndex` property.
- [`IToggle`](https://api.feathersui.com/current/feathers/core/IToggle.html) - The data container automatically updates the item renderer's `selected` property when the selected item changes.
- [`ITriggerView`](https://api.feathersui.com/current/feathers/controls/ITriggerView.html) - The data container will listen for `TriggerEvent.TRIGGER` instead of `MouseEvent.CLICK` and `TouchEvent.TOUCH_TAP` to determine when selection changes.
- [`IUIControl`](https://api.feathersui.com/current/feathers/core/IUIControl.html) automatically updates the `enabled` property.

A few more interfaces are designed for a specific container only and will be ignored by other containers.

### GridView

- [`IGridViewCellRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IGridViewCellRenderer.html) - The [`GridView`](./grid-view) automatically updates the `columnIndex`, `rowIndex`, `column`, and `gridViewOwner` properties.
- [`IGridViewHeaderRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IGridViewHeaderRenderer.html) - The [`GridView`](./grid-view) automatically updates the `columnIndex`, `column`, and `gridViewOwner` properties.
- [`IPointerDelegate`](https://api.feathersui.com/current/feathers/core/IPointerDelegate.html) - The [`GridView`](./grid-view) automatically updates the `pointerTarget` property so that all cell renderers in a row react to the same mouse and touch events.

### `GroupListView`

- [`IGroupListViewItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IGroupListViewItemRenderer.html) - The [`GroupListView`](./group-list-view) automatically updates the `location` and `groupListViewOwner` properties.

### `ListView`

- [`IListViewItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IListViewItemRenderer.html) - The [`ListView`](./list-view) automatically updates the `index` and `listViewOwner` properties.

### `TreeView`

- [`ITreeViewItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ITreeViewItemRenderer.html) - The [`TreeView`](./tree-view) automatically updates the `location`, `branch` and `treeViewOwner` properties.

## Related Links

- [Create custom item renderers for data containers](custom-item-renderers.md)

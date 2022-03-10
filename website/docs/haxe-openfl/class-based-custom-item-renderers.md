---
title: Create class-based custom item renderers for Feathers UI data containers
sidebar_label: Class-based item renderers
---

> 🚧 **Under construction!** This documentation is still being written.

Developers may subclass one of the core Feathers UI types, such as [`LayoutGroup`](./layout-group.md) or [`FeathersControl`](https://api.feathersui.com/current/feathers/core/FeathersControl.html), to create a [custom item renderer](custom-item-renderers.md) for a data container. A class-based item renderer provides the most control over how an item renderer looks and behaves, but it also requires a bit more advanced knowledge of UI component archictecture and internals than is required for using [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) alone.

> It's highly recommended to read through [How to create a custom UI component](./custom-ui-components.md) to familiarize yourself with the UI component lifecycle the low-level APIs that are available.

## Special interfaces

If a class-based custom item renderers implements certain interfaces, the data container will populate some properties automatically. The following interfaces are supported by all data containers.

- [`IDataRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IDataRenderer.html) - The data container automatically sets the item renderer's [`data`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IDataRenderer.html#data) property to an item from the [collection](./data-collections.md).
- [`ILayoutIndexObject`](https://api.feathersui.com/current/feathers/layout/ILayoutIndexObject.html) The data container automatically updates the [`layoutIndex`](https://api.feathersui.com/current/feathers/layout/ILayoutIndexObject.html#layoutIndex) property to indicate where the item is located within the layout's order.
- [`IToggle`](https://api.feathersui.com/current/feathers/core/IToggle.html) - The data container automatically updates the item renderer's [`selected`](https://api.feathersui.com/current/feathers/core/IToggle.html#selected) property when the selected item changes.
- [`ITriggerView`](https://api.feathersui.com/current/feathers/controls/ITriggerView.html) - The data container will listen for `TriggerEvent.TRIGGER` instead of `MouseEvent.CLICK` and `TouchEvent.TOUCH_TAP` to determine when selection changes.
- [`IUIControl`](https://api.feathersui.com/current/feathers/core/IUIControl.html) automatically updates the [`enabled`](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled) property.

A few more interfaces are designed for a specific container only and will be ignored by other containers.

### `GridView`

- [`IGridViewCellRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IGridViewCellRenderer.html) - The [`GridView`](./grid-view) automatically updates the [`columnIndex`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IGridViewCellRenderer.html#columnIndex), [`rowIndex`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IGridViewCellRenderer.html#rowIndex), [`column`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IGridViewCellRenderer.html#column), and [`gridViewOwner`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IGridViewCellRenderer.html#gridViewOwner) properties.
- [`IGridViewHeaderRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IGridViewHeaderRenderer.html) - The [`GridView`](./grid-view) automatically updates the [`columnIndex`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IGridViewHeaderRenderer.html#columnIndex), [`column`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IGridViewHeaderRenderer.html#column), and [`gridViewOwner`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IGridViewHeaderRenderer.html#gridViewOwner) properties.
- [`IPointerDelegate`](https://api.feathersui.com/current/feathers/core/IPointerDelegate.html) - The [`GridView`](./grid-view) automatically updates the [`pointerTarget`](https://api.feathersui.com/current/feathers/core/IPointerDelegate.html#pointerTarget) property so that all cell renderers in a row react to the same mouse and touch events.

### `GroupListView`

- [`IGroupListViewItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IGroupListViewItemRenderer.html) - The [`GroupListView`](./group-list-view) automatically updates the [`location`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IGroupListViewItemRenderer.html#location) and [`groupListViewOwner`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IGroupListViewItemRenderer.html#groupListViewOwner) properties.

### `ListView`

- [`IListViewItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IListViewItemRenderer.html) - The [`ListView`](./list-view) automatically updates the [`index`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IListViewItemRenderer.html#index) and [`listViewOwner`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IListViewItemRenderer.html#listViewOwner) properties.

### `TreeView`

- [`IHierarchicalItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IHierarchicalItemRenderer.html) - The [`TreeView`](./tree-view) automatically updates the [`branch`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IHierarchicalItemRenderer.html#branch) property.
- [`ITreeViewItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ITreeViewItemRenderer.html) - The [`TreeView`](./tree-view) automatically updates the [`location`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ITreeViewItemRenderer.html#location), [`branch`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ITreeViewItemRenderer.html#branch), and [`treeViewOwner`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ITreeViewItemRenderer.html#treeViewOwner) properties.

### `TreeGridView`

- [`IHierarchicalItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IHierarchicalItemRenderer.html) - The [`TreeGridView`](./tree-grid-view) automatically updates the [`branch`](https://api.feathersui.com/current/feathers/controls/dataRenderers/IHierarchicalItemRenderer.html#branch) property.
- [`ITreeGridViewCellRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ITreeGridViewCellRenderer.html) - The [`TreeGridView`](./tree-grid-view) automatically updates the [`columnIndex`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ITreeGridViewCellRenderer.html#columnIndex), [`rowLocation`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ITreeGridViewCellRenderer.html#rowLocation), [`column`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ITreeGridViewCellRenderer.html#column), and [`treeGridViewOwner`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ITreeGridViewCellRenderer.html#treeGridViewOwner) properties.
- [`ITreeGridViewHeaderRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ITreeGridViewHeaderRenderer.html) - The [`TreeGridView`](./tree-grid-view) automatically updates the [`columnIndex`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ITreeGridViewHeaderRenderer.html#columnIndex), [`column`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ITreeGridViewHeaderRenderer.html#column), and [`treeGridViewOwner`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ITreeGridViewHeaderRenderer.html#treeGridViewOwner) properties.
- [`IPointerDelegate`](https://api.feathersui.com/current/feathers/core/IPointerDelegate.html) - The [`TreeGridView`](./tree-grid-view) automatically updates the [`pointerTarget`](https://api.feathersui.com/current/feathers/core/IPointerDelegate.html#pointerTarget) property so that all cell renderers in a row react to the same mouse and touch events.

## Related Links

- [Create custom item renderers for data containers](custom-item-renderers.md)

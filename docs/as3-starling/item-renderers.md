---
title: Creating custom item renderers for the Feathers List, DataGrid, Tree and GroupedList components (Starling version)
sidebar_label: Custom item renderers
---

The [default item renderers](./default-item-renderers.md) provide an abundance of customization options to display up to three children with a variety of layouts. However, sometimes, you need more children or more advanced layout capabilities to translate a design to code for a customized list. In those situations, you may need to create a custom item renderer class.

Custom item renderers are basically [custom Feathers components](./component-properties-methods.md). When you create a custom item renderer, you will be working at a low level inside the Feathers architecture. Ideally, you should understand the internals of Feathers components before proceeding.

## Getting Started

- [FAQ: What is layout virtualization?](./faq/layout-virtualization.md)

- [Custom Item Renderers with `LayoutGroup`](./layout-group-item-renderers.md)

- [Custom Item Renderers with `FeathersControl` and `IListItemRenderer`](./feathers-control-item-renderers.md)

## Further Reading

- [Cookbook: Adding a background skin to a custom item renderer based on `FeathersControl` and `IListItemRenderer`](./cookbook/item-renderer-background-skin.md)

- [Cookbook: Handling touch states in a custom item renderer](./cookbook/item-renderer-touch-states.md)

- [Cookbook: Selecting a custom item renderer on tap or click](./cookbook/item-renderer-select-on-tap.md)

- [Cookbook: Dispatching a triggered event from a custom item renderer](./cookbook/item-renderer-triggered-on-tap.md)

- [Cookbook: Dispatching a long press event from an item renderer](./cookbook/item-renderer-long-press.md)

- [Cookbook: Prevent a `List` from scrolling when a child of a custom item renderer is touched](./cookbook/item-renderer-stop-scrolling.md)

## Related Links

- [How to use the `List` component](./list.md)

- [How to use the `DataGrid` component](./data-grid.md)

- [How to use the `Tree` component](./list.md)

- [How to use the `GroupedList` component](./grouped-list.md)

- [How to use the Default Item Renderers](./default-item-renderers.md)

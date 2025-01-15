---
title: What is layout virtualization in Feathers? (AS3/Starling version)
layout: "docs.html"
---

By default, all built-in layout classes in Feathers have *layout virtualization* enabled when used in a component that supports this type of layout. For instance, this feature is used by the [`List`](../list.md), [`Tree`](../tree.md), and [`GroupedList`](../grouped-list.md) components to limit the number of item renderer instances that are created at any given time. This means that a list with one thousand items can perform nearly as fast as a list with only ten items because only the visible item renderers will be created.

The list will also **reuse** the item renderers as the list scrolls and different items come into view. If you need to create a custom item renderer, you are responsible for ensuring that the item renderer will handle the situation where it is currently displaying one item from the data provider, and the list asks it to display a completely different item. You should not assume that the first item an item renderer receives in its `data` setter will be only item it will ever need to display.

If you fail to design your item renderer in a way that allows it to update its appearance when the list asks it to display a new item, you may observe unwanted side effects. The items may appear in the wrong order, and you may see duplicate items that aren't supposed to be there.

Most layouts that support virtualization have a [`useVirtualLayout`](/api-reference/feathers/layout/IVirtualLayout.html#useVirtualLayout) property that may be set to `false`. However, unless the number of items in the list's data provider is very small, this may have a severe impact on performance. In general, `useVirtualLayout` should not be disabled.

## Related Links

- [Feathers Frequently Asked Questions (Starling version)](./index.md)

- [Creating virtualized custom Feathers layouts](../virtual-custom-layouts.md)

- [Introduction to custom item renderers](../item-renderers.md)

- [How to use the List component](../list.md)

- [How to use the Grouped List component](../grouped-list.md)



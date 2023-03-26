---
title: How to set additional properties on the tabs in a TabBar (Starling version)
layout: "docs.html"
---

[`TabBar`](../tab-bar.md) supports setting a number of properties on its tabs through its [`dataProvider`](/api-reference/feathers/controls/TabBar.html#dataProvider) property, like [`label`](/api-reference/feathers/controls/Button.html#label) and [`isEnabled`](/api-reference/feathers/core/FeathersControl.html#isEnabled). Sometimes, we may need to set additional properties on the tabs. `TabBar` makes it easy to customize how its `dataProvider` is interpreted with the [`tabInitializer`](/api-reference/feathers/controls/TabBar.html#dataProvider) property.

The `tabInitializer` is a function that is called for each item in the data provider. The `TabBar` passes in a [`ToggleButton`](../toggle-button.md) and an item from the data provider. The function signature looks like this:

```actionscript
function( tab:ToggleButton, item:Object ):void
```

If we want the `TabBar` to support additional properties on its tabs, we can pass in a custom `tabInitializer`. First, though, let's save a reference to the default `tabInitializer` in a variable because we want to preserve the default behavior:

```actionscript
var group:TabBar = new TabBar();
var defaultTabInitializer:Function = group.tabInitializer;
```

Now, we can create our own custom `tabInitializer` function that sets additional properties:

```actionscript
function customTabInitializer( tab:ToggleButton, item:Object ):void
{
	// keep the default behavior
	defaultTabInitializer( tab, item );

	// then add new properties!
	tab.scaleWhenDown = item.scaleWhenDown;
}

group.tabInitializer = customTabInitializer;
```

Notice that we call the `defaultTabInitializer` first. We still want to set properties like `label` and `isEnabled`.

Afterwards, we've also chosen to copy the `scaleWhenDown` property from the item to the tab.

If we wanted to make some properties optional, we could call `hasOwnProperty()` before setting them, like this:

```actionscript
if( item.hasOwnProperty( "scaleWhenDown" ) )
{
	tab.scaleWhenDown = item.scaleWhenDown;
}
```

## Related Links

- [Feathers Cookbook (Starling version)](./index.md)
- [How to use the `TabBar` component](../tab-bar.md)

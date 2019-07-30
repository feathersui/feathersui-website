---
title: How to use the Feathers Check component (Starling version)
sidebar_label: Check
---

The [`Check`](/api-reference/feathers/controls/Check.html) component is actually a [`ToggleButton`](./toggle-button.md) component, but it is given a different visual appearance.

<figure>
<img src="/learn/as3-starling/images/check.png" srcset="/learn/as3-starling/images/check@2x.png 2x" alt="Screenshot of Feathers a Check component" />
<figcaption><code>Check</code> components skinned with <code>MetalWorksMobileTheme</code></figcaption>
</figure>

- [The Basics](#the-basics)

- [Skinning a `Check`](#skinning-a-check)

## The Basics

A `Check` component can be created much like a `ToggleButton`:

```actionscript
var check:Check = new Check();
check.label = "Click Me";
check.isSelected = true;
this.addChild( check );
```

See [How to use the Feathers `ToggleButton` component](./toggle-button.md) for a more detailed look at this component's capabilities.

## Skinning a `Check`

A skinned `Check` component usually has no background (or a transparent one) and the touch states of the check are displayed through the icon skins. For full details about which properties are available, see the [`Check` API reference](/api-reference/feathers/controls/Check.html).

> As mentioned above, `Check` is a subclass of `ToggleButton`. For more detailed information about the skinning options available to `Check`, see [How to use the Feathers `ToggleButton` component](./toggle-button.md).

## Related Links

- [`feathers.controls.Check` API Documentation](/api-reference/feathers/controls/Check.html)

- [How to use the Feathers `ToggleButton` component](./toggle-button.md)

- [How to use the Feathers `ToggleSwitch` component](./toggle-switch.md)

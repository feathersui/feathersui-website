---
title: How to stop a Callout from closing automatically after touch or keyboard input (Starling version)
---

Normally, a [`Callout`](../callout.md) component will close itself when the user touches anywhere else on stage or when they press the back button on Android or the `Esc` key on desktop. You may modify this default behavior so that the `Callout` may only be closed programatically, if needed.

Let's start by creating a `Callout`. In this case, we probably want to ensure that it isn't modal, so that touches can reach components below the `Callout`. That's why we pass the `false` at the end.

```actionscript
var callout:Callout = Callout.show( content, origin, Callout.DIRECTION_ANY, false );
```

Now, let's ensure that the `Callout` doesn't close when touching anywhere else:

```actionscript
callout.closeOnTouchBeganOutside = false;
callout.closeOnTouchEndedOutside = false;
```

We simply set the [`closeOnTouchBeganOutside`](/api-reference/feathers/controls/Callout.html#closeOnTouchBeganOutside) and [`closeOnTouchEndedOutside`](/api-reference/feathers/controls/Callout.html#closeOnTouchEndedOutside) properties to `false`.

Next, let's make sure that the keyboard cannot close the `Callout` either:

```actionscript
callout.closeOnKeys = null;
```

The [`closeOnKeys`](/api-reference/feathers/controls/Callout.html#closeOnKeys) property is normally a `Vector.<int>`, but we can set it to `null` to say that no keys can close the `Callout`.

## Related Links

- [Feathers Cookbook (Starling version)](./index.md)
- [How to use the `Callout` component](../callout.md)
- [Feathers Cookbook: How to close a `Callout` without disposing it (or without disposing its content)](./callout-restrict-disposal.md)

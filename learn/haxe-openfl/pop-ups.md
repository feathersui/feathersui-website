---
title: Displaying pop-ups and modals above other content in Feathers UI
layout: "docs.html"
sidebarTitle: Displaying pop-ups
---

[Feathers UI](/) includes a [`PopUpManager`](https://api.feathersui.com/current/feathers/core/PopUpManager.html) that allows content to be displayed over the rest of the application. It provides options to make the pop-up _modal_, meaning that mouse and touch events will be prevented from reaching the rest of the application unless the pop-up is removed. Additionally, if [focus management](./focus.md) is enabled, modal pop-ups will be given exclusive access to focus while they are open, and focus cannot be passed to components below the modal overlay.

## Add a pop-up

[`PopUpManager.addPopUp()`](https://api.feathersui.com/current/feathers/core/PopUpManager.html#addPopUp) may be used to add any UI component as a pop-up over the rest of the application.

```haxe
var panel = new Panel();
panel.header = new Header("Warning");
panel.addChild(new Label("This is a very important message"));
panel.addChild(new Button("OK"));
PopUpManager.addPopUp(panel, parent, true, true);
```

The first argument is the display object that should be added as a pop-up. It is not required to be a Feathers UI component, and it may include any type of simple OpenFL display object, such as a [`Sprite`](https://api.openfl.org/openfl/display/Sprite.html) or a [`Bitmap`](https://api.openfl.org/openfl/display/Bitmap.html).

The second argument is the origin display object that the pop-up should be associated with. This argument is used to determine which [`Stage`](https://api.openfl.org/openfl/display/Stage.html) the pop-up should be added to. This becomes important when multiple windows are open in desktop applications.

The third argument is an optional `Bool` value that determines if the pop-up is _modal_ or not. When a pop-up is modal, mouse and touch events cannot be passed to the rest of the application below, and keyboard focus changes will be kept within the modal pop-up. If a pop-up is not modal, the user may interact with the rest of the application normally.

The fourth argument an optional `Bool` value that determines if the pop-up should be _centered_ within the stage bounds. When a pop-up is centered in this way, the [`PopUpManager`](https://api.feathersui.com/current/feathers/core/PopUpManager.html) will automatically reposition the pop-up if the stage (or the pop-up itself) resizes.

## Remove a pop-up

To remove a pop-up, call [`PopUpManager.removePopUp()`](https://api.feathersui.com/current/feathers/core/PopUpManager.html#removePopUp).

```haxe
PopUpManager.removePopUp(popUp);
```

To remove all pop-ups, call [`PopUpManager.removeAllPopUps()`](https://api.feathersui.com/current/feathers/core/PopUpManager.html#removeAllPopUps).

```haxe
PopUpManager.removeAllPopUps();
```

## Center a pop-up

There are two different ways to center pop-ups, depending on your needs.

The first way to center a pop-up is to pass a value of `true` to the fourth argument of [`PopUpManager.addPopUp()`](https://api.feathersui.com/current/feathers/core/PopUpManager.html#addPopUp). In this case, the pop-up will be centered immediately when it is added to the display list. Then, if the stage resizes or if the pop-up itself resizes, the pop-up will be repositioned in order to remain centered.

> The pop-up manager can only detect when the pop-up resizes if it is a Feathers UI component. Simple OpenFL display objects, such as [`Sprite`](https://api.openfl.org/openfl/display/Sprite.html) or [`Shape`](https://api.openfl.org/openfl/display/Sprite.html), do not dispatch any event to indicate that they have been resized.

If you choose not to center a pop-up when you call [`PopUpManager.addPopUp()`](https://api.feathersui.com/current/feathers/core/PopUpManager.html#addPopUp), you can center it manually by calling [`PopUpManager.centerPopUp()`](https://api.feathersui.com/current/feathers/core/PopUpManager.html#centerPopUp). This will center the pop-up immediately. However, if the pop-up resizes or the stage resizes, you will need to call [`PopUpManager.centerPopUp()`](https://api.feathersui.com/current/feathers/core/PopUpManager.html#centerPopUp) again to reposition it so that it remains centered.

## Related Links

- [`feathers.core.PopUpManager` API Documentation](https://api.feathersui.com/current/feathers/core/PopUpManager.html)

---
title: How to display a context menu with Feathers (AS3/Starling version)
layout: "docs.html"
---

> This will only work in Adobe AIR. It will not work in Adobe Flash Player.

First, let's create a simple [`flash.ui.ContextMenu`](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/ui/ContextMenu.html).

```actionscript
function item_menuItemSelectHandler(event:ContextMenuEvent):void
{
    trace("menu item selected");
}

this._menu = new ContextMenu();
this._menu.hideBuiltInItems();
var item:ContextMenuItem = new ContextMenuItem("Do something");
item.addEventListener(ContextMenuEvent.MENU_ITEM_SELECT, item_menuItemSelectHandler);
this._menu.customItems.push(item);
```

Next, we want to know when the right mouse button is pressed:

```actionscript
Starling.current.nativeStage.addEventListener(MouseEvent.RIGHT_MOUSE_DOWN, nativeStage_rightMouseDownHandler, false, 0, true);
```

In the listener, simply display the context menu at the appropriate location:

```actionscript
private function nativeStage_rightMouseDownHandler(event:MouseEvent):void
{
    this._menu.display(Starling.current.nativeStage, event.stageX, event.stageY);
}
```

If we wanted to limit the context menu to a specific Feathers component, we could translate the native stage coordinates to Starling coordinates and do a simple hit test before calling `display()` on the `ContextMenu`.

## Related Links

- [Feathers Cookbook (Starling version)](./index.md)

---
title: How to use the Drawer component
sidebar_label: Drawer
---

The [`Drawer`](https://api.feathersui.com/current/feathers/controls/Drawer.html) class is a container that adds a special _drawer_ that may be opened or closed with a swipe gesture from one of the four edges of its primary content.

## The Basics

Start by creating a [`Drawer`](https://api.feathersui.com/current/feathers/controls/Drawer.html) control, and add it to the [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var container = new Drawer();
this.addChild(container);
```

The container's width and height may be set, but it will automatically resize itself to fill the entire stage if no explicit dimensions are provided.

The container's [`content`](https://api.feathersui.com/current/feathers/controls/Drawer.html#content) property is used to add a child to the container:

```hx
var content = new LayoutGroup();
var contentLayout = new VerticalLayout();
contentLayout.horizontalAlign = CENTER;
contentLayout.verticalAlign = MIDDLE;
content.layout = contentLayout;
var openDrawerButton = new Button();
openDrawerButton.text = "Open Drawer";
content.addChild(openDrawerButton);

container.content = content;
```

The container's [`drawer`](https://api.feathersui.com/current/feathers/controls/Drawer.html#drawer) property is used to specify the display object that is displayed when the drawer opens.

```hx
var drawer = new LayoutGroup();
var drawerLayout = new VerticalLayout();
drawerLayout.horizontalAlign = CENTER;
drawerLayout.verticalAlign = MIDDLE;
drawer.layout = drawerLayout;
var closeDrawerButton = new Button();
closeDrawerButton.text = "Close Drawer";
drawer.addChild(closeDrawerButton);

container.drawer = content;
```

## Open or close the drawer programatically

If you want to programmatically open or close the drawer, set the [`opened`](https://api.feathersui.com/current/feathers/controls/Drawer.html#opened) property.

```hx
openDrawerButton.addEventListener(TriggerEvent.TRIGGER, (event) -> {
  container.opened = true;
});

closeDrawerButton.addEventListener(TriggerEvent.TRIGGER, (event) -> {
  container.opened = false;
});
```

## Related Links

- [`feathers.controls.Drawer` API Documentation](https://api.feathersui.com/current/feathers/controls/Drawer.html)

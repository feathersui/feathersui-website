---
title: How to use the Drawer component
sidebar_label: Drawer
---

The [`Drawer`](https://api.feathersui.com/current/feathers/controls/Drawer.html) class is container that adds a special _drawer_ that slides in and out, above all other content. It may be opened or closed with a swipe gesture from one of the four edges.

<figure>
<iframe src="/learn/haxe-openfl/samples/drawer.html" width="100%" height="150"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/Drawer.html"><code>Drawer</code></a> component</figcaption>
</figure>

## The Basics

Start by creating a [`Drawer`](https://api.feathersui.com/current/feathers/controls/Drawer.html) control, and add it to the [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var container = new Drawer();
addChild(container);
```

The container's width and height may be set, but it will automatically resize itself to fill the entire stage if no explicit dimensions are provided.

The container's [`content`](https://api.feathersui.com/current/feathers/controls/Drawer.html#content) property is used to add a child to the container:

```haxe
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

```haxe
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

```haxe
openDrawerButton.addEventListener(TriggerEvent.TRIGGER, (event) -> {
  container.opened = true;
});

closeDrawerButton.addEventListener(TriggerEvent.TRIGGER, (event) -> {
  container.opened = false;
});
```

## Related Links

- [`feathers.controls.Drawer` API Documentation](https://api.feathersui.com/current/feathers/controls/Drawer.html)

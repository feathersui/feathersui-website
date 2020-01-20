---
title: How to use the Feathers UI Graphics API skins
sidebar_label: Graphics API Skins
---

Feathers UI offers a number of skin classes that are built on top of OpenFL's [`Graphics` API](https://api.openfl.org/openfl/display/Graphics.html) class to allow skins to be customized programmatically with a few property changes. These skins automatically redraw when resized or if the state of their parent component changes.

> Skinning in Feathers UI is not limited to the classes described below. Most components accept any OpenFL display object as a skin. With that in mind, you can use primitives like [`Bitmap`](https://api.openfl.org/openfl/display/Bitmap.html) or [`Sprite`](https://api.openfl.org/openfl/display/Sprite.html), if you prefer, or you can extend these classes to add your own customizations.

## Skin Classes

- [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html)
- [`EllipseSkin`](https://api.feathersui.com/current/feathers/skins/EllipseSkin.html)
- [`CircleSkin`](https://api.feathersui.com/current/feathers/skins/CircleSkin.html)
- [`UnderlineSkin`](https://api.feathersui.com/current/feathers/skins/UnderlineSkin.html)
- [`OverAndUnderlineSkin`](https://api.feathersui.com/current/feathers/skins/OverAndUnderlineSkin.html)

## Fill

The [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enum

- [`SolidColor`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html#SolidColor)
- [`Gradient`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html#Gradient)
- [`Bitmap`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html#Bitmap)

## Border

The [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) enum

- [`SolidColor`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html#SolidColor)
- [`Gradient`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html#Gradient)

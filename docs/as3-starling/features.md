---
title: Feathers Features (Starling version)
sidebar_label: Features
---

Feathers is an open source library of user interface components for [Starling Framework](http://gamua.com/starling/). Let's take a look at some of what Feathers has to offer.

## Overview

- Dozens of user interface components for apps and games.

- Hardware-accelerated graphics.

- Target iOS, Android, Windows, macOS, and Android TV.

- Built on top of Starling Framework and Adobe AIR.

- Backed by Adobe and the community.

## Cross Platform

- Create user interfaces for desktop, mobile, and smart TV apps.

- Easy to scale your app for different screen dimensions and densities with [`ScreenDensityScaleFactorManager`](/api-reference/feathers/utils/ScreenDensityScaleFactorManager.html).

- Support for fluid layouts (using anchors and percentages) that fit to a wide variety of screen sizes.

- Choose between scrolling with touch physics including elastic, springy edges or traditional desktop scroll bars and the mouse scroll wheel.

- Support for keyboard focus navigation using the tab key, with the ability to disable focus on individual components or children of specific container. Includes full control over focus order.

## Skinning

- All components may be skinned using regular Starling display objects, like `Image` or `Quad`.

- Resizable skins using `scale9Grid` and `tileGrid`.

- Strictly-typed properties for all skins and properties that affect visual styling. No vague `getStyle()` or `setStyle()` look-ups with string keys.

- [`ImageSkin`](/api-reference/feathers/skins/ImageSkin.html) can change color and texture when a component's state changes.

- Supports [themes](./themes.md) that separate all skinning code from the application logic.

## Robust Architecture

- Invalidation. Queues property changes until Starling render phase to maximize performance.

- Easy to understand for anyone familiar with Apache Flex or the AS3 components from Adobe Animate CC.

- If no width or height is provided, components will resize themselves automatically based on their skins or their sub-components.

- Factories and interfaces allow you to customize sub-components. For instance, select the type of sub-component best suited for phone, tablet, or desktop.

- Choice of [text rendering](./text-renderers.md) between bitmap fonts or vector fonts drawn to textures. Vector fonts may be rendered with either `flash.text.TextField` or Flash Text Engine.

## Containers

- Several built-in layouts, and support for [custom layouts](./custom-layouts.md).

- [`LayoutGroup`](./layout-group.md) is a lightweight Feathers container with support for layouts.

- [`ScrollContainer`](./scroll-container.md) supports scrolling and layouts.

- [`Panel`](./panel.md) supports a header and an optional footer, in addition to scrolling and layouts.

- [`Drawers`](./drawers.md) provides slide-out drawers to display menus and other actions.

## Lists

- The [`List`](./list.md) component supports displaying a data provider using item renderers inside a scrollable container.

- Support for hierarchical data using [`Tree`](./tree.md) and [`GroupedList`](./grouped-list.md).

- Display a table of data using the [`DataGrid`](./data-grid.md) component.

- [`PickerList`](./picker-list.md) supports displaying a list as a pop-up triggered by a [`Button`](./button.md).

- Several built-in layouts, including [`VerticalLayout`](./vertical-layout.md), [`HorizontalLayout`](./horizontal-layout.md), and [`TiledRowsLayout`](./tiled-rows-layout.md).

- Support for [custom layouts](./custom-layouts.md).

- Layout virtualization for improved performance (creates and reuses renderers only for visible data).

- Support for selecting an item, including optional multiple selection.

- A robust [default item renderer](./default-item-renderers.md) with up to three sub-views with full control over how they are positioned relative to each other.

- Support for [custom item renderers](./item-renderers.md).

- Variable item renderer dimensions.

- Collection classes for various types of data, such as [`ArrayCollection`](/api-reference/feathers/data/ArrayCollection.html), [`VectorCollection`](/api-reference/feathers/data/VectorCollection.html), or [`XMLListCollection`](/api-reference/feathers/data/XMLListCollection.html).

- Optionally split items into multiple pages, and snap to each page when scrolling.

## Menus and Navigation

- Create menus and navigate between screens using [`StackScreenNavigator`](./stack-screen-navigator.md) or [`TabNavigator`](./tab-navigator.md).

- Push and pop screens using a history stack that easily supports a back button.

- [Animate the transition](./transitions.md) between screens. Push and pop actions may use separate transitions, and individual screens may optionally be given their own unique transitions.

- Support for custom transitions.

- Dispatch events to trigger navigation between screens.

- Inject properties into screens to quickly configure them.

## More!

- Buttons, sliders, radio buttons, check boxes, toggle switches, steppers, text inputs, tabs, and tons of other common UI controls.

- A manager for drag and drop.

- Add [pop-ups](./pop-ups.md) above all other content in the app. Includes support for modal pop-ups that display an overlay between the pop-up and everything under it.

- Create media players for [video](./video-player.md) and [audio](./sound-player.md).

## Sound useful?

[Download Feathers](./installation.md), and [get started](./getting-started.md) building cross-platform, hardware-accelerated user interfaces for apps and games with Starling Framework and Feathers.

---
title: "Feathers UI Roadmap"
layout: "docs.html"
---

What big new features are currently planned for the next release of [Feathers UI](/)? Find out here!

> Please consider all details below subject to change. Things may get bumped to future releases, or dropped entirely. Additionally, this should not be considered a complete list of what will be included, but more of a high level overview. Bug fixes and minor features may be omitted for brevity.

To learn what's new in the [current Feathers UI stable release](/learn/haxe-openfl/installation), including changes in all previous releases, see the [feathersui-openfl CHANGELOG.md](https://github.com/feathersui/feathersui-openfl/blob/master/CHANGELOG.md) on GitHub.

## 1.3.0 (2024)

- Adding a new `dispose()` method to `FeathersControl`. May be used to clean up sub-components, data providers, and other resources. Calling it is completely optional, but it can be helpful to ensure efficient garbage collection.
- Adding a new `DragDropManager` to support drag-and-drop with both mouse and touch.
- Adding new properties to data containers like `ListView` and `GridView` to allow item renderers to be dragged and dropped (both within the same container, and between different containers).
- Adding a new `IDragDropLayout` interface to create layouts that support drag-and-drop.
- Adding a new `Collapsible` component with a header and content below. Clicking or tapping the header will toggle the visibility of the content.
- Data providers for containers like `ListView` will be allowed to contain simple `String` values, while they required either class instances or anonymous structures before. Developers will need to be careful to avoid duplicate strings!
- Adding new optional increment and decrement buttons to `HScrollBar` and `VScrollBar`.
- Adding a new `bringToFront()` method on `PopUpManager` to change a pop-up's depth to the top.
- Adding new `indeterminate` and `indeterminateFillSkin` properties to `HProgressBar` and `VProgressBar`.
- Adding a new `readjustLayout()` property to force a layout update on `LayoutGroup` and `ScrollContainer`.
- Adding new `onText` and `offText` properties to `ToggleSwitch` to optionally display text on each side.
- Adding an optional new corner skin to bottom right of scrolling containers, when both scroll bars are visible.
- Adding an optional new corner skin to the top right of `GridView` and `TreeGridView` between the headers and the vertical scroll bar.
- The default theme will auto-size components a bit smaller for desktop computers, instead of sharing the same larger sizing on both mobile and desktop.

## Future

The items below are being considered for future releases. There is no timeline on when they may be started or completed.

- Declarative XML components, similar to MXML in Adobe Flex or XAML in .NET.
- A drag-and-drop GUI builder.
- A web store that sells premium UI components that are a bit more advanced and specialized than what is included in the free, open source framework.
- A themes gallery.
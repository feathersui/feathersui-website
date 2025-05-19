---
title: "Feathers UI Roadmap"
layout: "docs.html"
---

What big new features are currently planned for the next release of [Feathers UI](/)? Find out here!

> Please consider all details below subject to change. Things may get bumped to future releases, or dropped entirely. Additionally, this should not be considered a complete list of what will be included, but more of a high level overview. Bug fixes and minor features may be omitted for brevity.

To learn what's new in the [current Feathers UI stable release](/learn/haxe-openfl/installation), including changes in all previous releases, see the [feathersui-openfl CHANGELOG.md](https://github.com/feathersui/feathersui-openfl/blob/v{% include "feathersui-openfl-version.html" %}/CHANGELOG.md) on GitHub.

## 1.4.0 (estimated 2025)

- New `MenuBar` and `Menu` components.
- New `HRule` and `VRule` components.
- New `BitmapImage` component.
- `VARIANT_QUIET` added to `Button` and `ToggleButton` (no "up" skin, perfect for tool bars).
- `NumericStepper` and scroll bars have a new `repeatDelay` property to allow repeating while buttons are held down.
- `DrillDownItemRenderer` displays a drill down icon on the right side (in addition to the existing icon and accessory).
- `Tree` and `TreeGridView` get `BRANCH_OPENING` and `BRANCH_CLOSING` cancelable events.
- `HSlider` and `VSlider` expose styles to offset the position of the thumb.
- Text components have new `textAlpha` and `disabledTextAlpha` properties.
- `HierarchicalSubCollection` wraps another collection to display only a subset.
- `ComboBox` gets new `selectRange()`, `selectAll()`, `selectionAnchorIndex`, and `selectionActiveIndex` members for its text input.
- Currently in planning stages. Stay tuned for additional updates!

## Future

The items below are being considered for future releases. There is no timeline on when they may be started or completed.

- Declarative XML components, similar to MXML in Adobe Flex or XAML in .NET.
- A drag-and-drop GUI builder.
- A web store that sells premium UI components that are a bit more advanced and specialized than what is included in the free, open source framework.
- A themes gallery.
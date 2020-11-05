---
id: ui-components
title: Intro to UI components
---

[Feathers UI](/) includes many different types of UI components — from basics like buttons, sliders, and inputs, to scrolling containers, navigation managers, and more.

## Basic UI components

- [`AssetLoader`](./asset-loader.md) displays images and other assets.
- [`Button`](./button.md) is a standard push button that may be clicked or tapped.
- [`Check`](./check.md) is a check box that may be selected and deselected with a click/tap.
- [`Label`](./label.md) displays text in a single line or multiple lines.
- [`HSlider` and `VSlider`](./slider.md) display a numeric value with a thumb that may be dragged along a track.
- [`HProgressBar` and `VProgressBar`](./progress-bar.md) displays a numeric value with a simple linear fill.
- [`Radio`](./radio.md) belongs to a group where only one may be selected.
- [`TextArea`](./text-area.md) displays editable multiline text.
- [`TextInput`](./text-input.md) displays editable text on a single line.
- [`ToggleButton`](./toggle-button.md) may be clicked or tapped to change selection.
- [`ToggleSwitch`](./toggle-switch.md) may be clicked, tapped, or dragged to change selection.

## Layout containers

Containers that support layout, with additional capabilities like scrolling and extra chrome like headers and footers.

- [`LayoutGroup`](./layout-group.md) is the most basic container that supports layout.
- [`ScrollContainer`](./scroll-container.md) supports layout and scrolling.
- [`Panel`](./panel.md) adds a header and footer to a scrolling container.

## Data containers

Containers that display data from [collections](./data-collections.md), with layout and scrolling.

- [`ComboBox`](./combo-box.md) pops up a list of data, with a text input for filtering.
- [`GridView`](./grid-view.md) displays a flat collection of data in multiple columns.
- [`GroupListView`](./group-list-view.md) displays a hierarchical collection of data in a scrollable region.
- [`ListView`](./list-view.md) displays a flat collection of data in a scrollable region.
- [`PopUpListView`](./pop-up-list-view.md) pops up a list of data when clicking or tapping a button.
- [`TabBar`](./tab-bar.md) displays a row of tabs, where only one may be selected.
- [`TreeView`](./tree-view.md) displays hierarchical data in a list, and branches may be opened and closed.

## Navigators

Containers that support navigation between different views.

- [`PageNavigator`](./page-navigator.md) navigates among views using a [`PageIndicator`](./page-indicator.md).
- [`RouterNavigator`](./router-navigator.md) navigates among views with web browser's history API integration.
- [`StackNavigator`](./stack-navigator.md) navigates among views with built-in history tracking.
- [`TabNavigator`](./tab-navigator.md) navigates among views using a [`TabBar`](./tab-bar.md).

## Miscellaneous

Various other UI components that don't necessarily fit in one of the above categories.

- [`Callout`](./callout.md) displays content as a pop-up with an arrow pointing at another component.
- [`Drawer`](./drawer.md) slides in a view above other content.
- [`HDividedBox` and `VDividedBox`](./divided-box.md) displays views horizontally or vertically, with resizing handles between them.
- [`PageIndicator`](./page-indicator.md) selects a page index with a basic row of symbols.
- [`TextCallout`](./text-callout.md) displays text as a pop-up with an arrow pointing at another component.

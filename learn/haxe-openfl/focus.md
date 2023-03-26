---
title: Keyboard focus management in Feathers UI
layout: "docs.html"
sidebarTitle: Focus management
---

In desktop apps, users expect to be able to use the <kbd>Tab</kbd> key to navigate between focusable UI components, and they expect to be able to use the <kbd>Space</kbd> or <kbd>Enter</kbd> key trigger buttons, or the arrow keys to adjust sliders, numeric steppers, and scroll bars. On smart TVs and game consoles, the remote or gamepad typically provides a d-pad or another input method for passing focus up, down, to the left, or to the right.

## Enabling the Focus Manager

Feathers UI automatically enables focus management when the main entrypoint is a subclass of the [`Application`](./application.md) component.

```haxe
import feathers.controls.Application;

class MyProject extends Application {
  public function new() {
    super();
  }
}
```

However, if a project isn't using the [`Application`](./application.md) component, focus management may be enabled manually by calling [`FocusManager.addRoot()`](https://api.feathersui.com/current/feathers/core/FocusManager.html#addRoot) when the project first starts up.

```haxe
// only when not using the Application component
FocusManager.addRoot(stage);
```

## Changing Focus Programmatically

Call the static method [`FocusManager.setFocus()`](https://api.feathersui.com/current/feathers/core/FocusManager.html#setFocus) to change focus manually.

```haxe
FocusManager.setFocus(component);
```

> The UI component passed to [`FocusManager.setFocus()`](https://api.feathersui.com/current/feathers/core/FocusManager.html#setFocus) must implement the [`IFocusObject`](https://api.feathersui.com/current/feathers/core/IFocusObject.html) interface, and its [`focusManager`](https://api.feathersui.com/current/feathers/core/IFocusManagerAware.html#focusManager) property must not be `null`. If the focus manager is enabled, this property will be automatically populated when a UI component is added to the stage.

## Disabling focus

To allow a component to receive focus from mouse or touch only, but to be skipped when changing focus with the keyboard, set the [`tabEnabled`](https://api.openfl.org/openfl/display/InteractiveObject.html#tabEnabled) property to `false`.

```haxe
component.tabEnabled = false;
```

In rare cases, it may be necessary to completely disable the ability of a UI component to receive focus. Set the [`focusEnabled`](https://api.feathersui.com/current/feathers/core/IFocusObject.html#focusEnabled) property to `false` to prevent a component from receiving focus at all.

```haxe
component.focusEnabled = false;
```

## Related Links

- [`feathers.core.FocusManager` API Documentation](https://api.feathersui.com/current/feathers/core/FocusManager.html)

---
title: Displaying tool-tips on hover over Feathers UI components
sidebar_label: Tool-tips
---

In desktop apps, users expect to be able to hover their mouse over a UI component to display a tool-tip with some descriptive text about the component.

## Enabling the Tool-Tip Manager

Feathers UI automatically enables tool-tip support when your main class extends the [`Application`](./application.md) component.

```haxe
import feathers.controls.Application;

class MyProject extends Application {
  public function new() {
    super();
  }
}
```

However, if a project isn't using the [`Application`](./application.md) component, tool-tip support may be enabled manually by calling [`ToolTipManager.addRoot()`](https://api.feathersui.com/current/feathers/core/ToolTipManager.html#addRoot) when the project first starts up.

```haxe
// only when not using the Application component
ToolTipManager.addRoot(stage);
```

## Setting a component's tool-tip

In the following example, a [`Button`](./button.md) is given a tool-tip.

```haxe
var button = new Button();
button.text = "Click Me";
button.toolTip = "Some useful information";
addChild(button);
```

All Feathers UI components have a [`toolTip`](https://api.feathersui.com/current/feathers/core/IUIControl.html#toolTip) property.

## Related Links

- [`feathers.core.ToolTipManager` API Documentation](https://api.feathersui.com/current/feathers/core/ToolTipManager.html)
- [`IUIControl.toolTip` API Documentation](https://api.feathersui.com/current/feathers/core/IUIControl.html#toolTip)

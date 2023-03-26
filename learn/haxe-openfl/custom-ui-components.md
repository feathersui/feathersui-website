---
title: Create custom UI components for Feathers UI
layout: "docs.html"
sidebarTitle: Custom UI components
---

> 🚧 **Under construction!** This documentation is still being written.

[Feathers UI](/) includes dozens of built-in [UI components](./ui-components.md), but sometimes, a project will need a specialized component that isn't included in the framework by default. Developers may fill in these gaps by creating their own, custom UI components from scratch by extending the appropriate class and hooking into the available APIs.

At the heart of all UI components is the [`FeathersControl`](https://api.feathersui.com/current/feathers/core/FeathersControl.html) class. This abstract base class provides much of the core functionality shared by most UI components in the framework, including hooks for _validation_, _styling_, _measurement_, and _focus_. The most advanced custom UI components will generally extend this class.

> Some custom UI components don't require much integration with low-level API hooks in the framework. For instance, a particular custom component might simply need to display several other components as children in a layout. In those cases, it may make sense to extend one of the [simple containers](./layouts-and-containers.md#simple-containers), like [`LayoutGroup`](./layout-group.md), [`ScrollContainer`](./scroll-container.md), or [`Panel`](./panel.md), instead of [`FeathersControl`](https://api.feathersui.com/current/feathers/core/FeathersControl.html). Many of the techniques below still apply to container subclasses, but you may be able to skip certain things, like manually measuring children and laying them out.

## A basic `FeathersControl` subclass template

A typical subclass of [`FeathersControl`](https://api.feathersui.com/current/feathers/core/FeathersControl.html) will include a constructor, an override of [`initialize()`](https://api.feathersui.com/current/feathers/core/FeathersControl.html#initialize), and an override of [`update()`](https://api.feathersui.com/current/feathers/core/ValidatingSprite.html#update).

```haxe
class MyComponent extends FeathersControl {
    public function new() {
        super();
    }

    override private function initialize():Void {
        super.initialize();
    }

    override private function update():Void {
        super.update();
    }
}
```

> See [UI component lifecycle](./ui-component-lifecycle.md) for more information about these methods and other methods that are called during the lifetime of a UI component instance.

## Adding children

Typically, children are added in override of the [`initialize()`](https://api.feathersui.com/current/feathers/core/FeathersControl.html#initialize) method.

```haxe
private var okButton:Button;

override private function initialize():Void {
    super.initialize();

    if (okButton == null) {
        okButton = new Button();
        okButton.text = "OK";
        addChild(okButton);
    }
}
```

When creating an override of `initialize()`, always remember to call `super.initialize()`. The superclass may also have important code that needs to run to work properly.

Before creating a child, it's often a good practice to check whether it might have already been created. Another developer (or _you_ in the future!) may need to create a subclass of the component, and this allows them to customize the children.

## Updating after property changes

Many UI components expose properties that allow developers to customize the component's appearance and behavior. Generally, it's a good idea to assume that developers might change multiple properties at once. To improve performance, a component should wait until all property changes are done before updating itself. A [`FeathersControl`](https://api.feathersui.com/current/feathers/core/FeathersControl.html) can queue an update for later by calling [`setInvalid()`](https://api.feathersui.com/current/feathers/core/ValidatingSprite.html#setInvalid). Then, it can process all updates together in an override of [`update()`](https://api.feathersui.com/current/feathers/core/ValidatingSprite.html#update).

```haxe
public var okButtonText(default, set):String = "OK";

private function set_okButtonText(value:String):String {
  if (okButtonText == value) {
      return okButtonText;
  }
  okButtonText = value;
  setInvalid(DATA);
  return okButtonText;
}
```

```haxe
override private function update():Void {
    var dataInvalid = isInvalid(DATA);

    if (dataInvalid) {
      okButton.text = okButtonText;
    }

    super.update();
}
```

## Styles

To allow a custom UI component to be styled by a theme, add `@:styleContext` metadata to the class.

```haxe
@:styleContext
class MyComponent extends FeathersControl {}
```

```haxe
@:style
public var horizontalAlign:TextFormat = CENTER;
```

A property with `@:style` metadata must be `public` and it must be initialized with a default value. This allows the component to easily reset its styles back to their defaults, such as when the theme changes.

When using `@:style` metadata, a setter function is automatically generated, and one of the things this function does is call `setInvalid(STYLES)`. You can process this invalidation flag in an override of [`update()`](https://api.feathersui.com/current/feathers/core/ValidatingSprite.html#update)

```haxe
override private function update():Void {
    var stylesInvalid = isInvalid(STYLES);

    if (stylesInvalid) {
      // handle style changes
    }

    super.update();
}
```

## Related Links

- [UI component lifecycle](./ui-component-lifecycle.md)
- [Create custom item renderers for data containers](./custom-item-renderers.md)

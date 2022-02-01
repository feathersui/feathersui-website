---
title: The Feathers UI component lifecycle
sidebar_label: Component lifecycle
---

To develop [custom UI components](./custom-ui-components.md) for Feathers UI, you should understand the basics of the Feathers UI component lifecycle. A component goes through a number of distinct stages between when it is created and when it is destroyed.

## Instantiation / Constructor

A UI component instance is created with the [`new`](https://haxe.org/manual/expression-new.html) keyword, and its [constructor](https://haxe.org/manual/types-class-constructor.html) will be called.

```hx
var instance = new MyComponent();
```

Generally, code in a UI component's constructor should be kept to a minimum. It's okay to add event listeners and set some properties, but save more expensive things (such as the creation of children) until _initialization_.

```hx
public function new() {
    super();
    addEventListener(Event.ADDED_TO_STAGE, onAddedToStage);
}
```

After the constructor returns, the UI component has not yet been added to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html), and it is not completely initialized. However, the UI component's public properties may be changed, and their values will be stored for later.

## Initialization

When a UI component is added to the display list for the first time, its [`initialize()`](https://api.feathersui.com/current/feathers/core/FeathersControl.html#initialize) method will be called.

> To force a UI component to initialize before adding it to the display list, you may call [`initializeNow()`](https://api.feathersui.com/current/feathers/core/IUIControl.html#initializeNow).

The [`initialize()`](https://api.feathersui.com/current/feathers/core/FeathersControl.html#initialize) method is intended for any code that should run only one time before a UI component is rendered. Most often, [`initialize()`](https://api.feathersui.com/current/feathers/core/FeathersControl.html#initialize) is used to create the UI component's children.

```hx
private var myChild:Button;

override private function initialize() {
  super.initialize();

  myChild = new Button();
  addChild(myChild);
}
```

After [`initialize()`](https://api.feathersui.com/current/feathers/core/FeathersControl.html#initialize) returns, the UI component will dispatch [`FeathersEvent.INITIALIZE`](https://api.feathersui.com/current/feathers/events/FeathersEvent.html#INITIALIZE).

## Invalidation

Any time one of a UI component's properties is changed, it should call the [`setInvalid()`](https://api.feathersui.com/current/feathers/core/ValidatingSprite.html#setInvalid) method.

```hx
public var someProperty(default, set):Bool = false;

private function set_someProperty(value:Bool):Bool {
  if(someProperty == value) {
    return someProperty;
  }
  someProperty = value;
  setInvalid(DATA);
  return someProperty
}
```

Calls to [`setInvalid()`](https://api.feathersui.com/current/feathers/core/ValidatingSprite.html#setInvalid) may optionally include an [`InvalidationFlag`](https://api.feathersui.com/current/feathers/core/InvalidationFlag.html) to clarify exactly what is invalid. When the UI component updates, it can use the flags to determine which code needs to be run. In other words, it may be able to skip some of the update code if certain properties have not been changed.

The exact meaning of each invalidation flag is not enforced in any way, and UI component developers may choose to interpret each flag differently. These flags are meant to be an internal implementation detail and not something that should be exposed as a public API. Ideally, only developers creating custom UI Components will ever need to call [`setInvalid()`](https://api.feathersui.com/current/feathers/core/ValidatingSprite.html#setInvalid) and use invalidation flags.

After being set invalid, the UI component will wait to update its layout and appearance until just before it is rendered by OpenFL. This allows multiple properties to be changed at once, and the changes will be batched in a single update, which improves performance.

## Update

Before a UI component is rendered to the screen, it will update its layout and appearance.

> To force a UI component to update at any time, you may call [`validateNow()`](https://api.feathersui.com/current/feathers/core/IValidating.html#validateNow).

When a component validates, its [`update()`](https://api.feathersui.com/current/feathers/core/FeathersControl.html#update) method is called. In [`update()`](https://api.feathersui.com/current/feathers/core/FeathersControl.html#update), a UI component will generally handle any changes that have been made to its properties, calculate its ideal width and height, and update its internal layout.

```hx
override private function update():Void {
  super.update();

  var dataInvalid = isInvalid(DATA);
  var stylesInvalid = isInvalid(STYLES);

  if(dataInvalid) {
    // do something if InvalidationFlag.DATA is set
  }

  if(stylesInvalid) {
    // do something if InvalidationFlag.STYLES is set
  }

  if(dataInvalid || stylesInvalid) {
    // do something if either flag is set
  }
}
```

A UI component will typically make one or more calls to [`isInvalid()`](https://api.feathersui.com/current/feathers/core/ValidatingSprite.html#isInvalid) to determine what it needs to update.

## Creation complete

After a UI component updates for the first time, it will dispatch [`FeathersEvent.CREATION_COMPLETE`](https://api.feathersui.com/current/feathers/events/FeathersEvent.html#CREATION_COMPLETE). This event will be dispatched just one time in a UI component's lifecycle.

## Render

All UI components extend the [`openfl.display.Sprite`](https://api.openfl.org/openfl/display/Sprite.html) class, and rendering is handled by [OpenFL](https://openfl.org/).

## Invalidation -> Update -> Render

The process of 1) invalidation, 2) update, and 3) rendering will repeat indefinitely until the component is removed from the display list.

## Removal from display list

When a UI component is removed from the display list, it will no longer update automatically. Any additional property changes will be stored, but they will not be committed unless the UI component is added to the display list again.

## Garbage collection

After all references to the UI component instance have been removed (for instance, by setting variables to `null`), it becomes eligible for garbage collection. The component's lifecycle has completed.

## Related Links

- [Create custom UI components](./custom-ui-components.md)

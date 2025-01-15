---
title: The Feathers user interface component lifecycle (AS3/Starling version)
layout: "docs.html"
sidebarTitle: Component lifecycle
---

To develop custom components for Feathers, one should understand the basics of the Feathers component lifecycle. A component goes through a number of distinct stages between when it is created and when it is destroyed.

## Instantiation

The component instance is created with the `new` keyword. It has not yet been added to the display list. Properties may be changed, and the new values will be saved, but the component will not automatically react to those changes until after it has been added to the display list. This ensures that the Feathers component doesn't run its drawing code too often.

## Initialization

The component is added to the display list and its `initialize()` function is called. `FeathersEventType.INITIALIZE` will be dispatched after `initialize()` returns.

## Apply theme styles

If the component has a style provider from a [theme](./themes.md), the theme's styles will be applied to the component immediately after `FeathersEventType.INITIALIZE` is dispatched.

## Validation

The component will validate for the first time, doing a complete redraw as if every single property has been invalidated (see _Invalidation_ below). After the first validation `FeathersEventType.CREATION_COMPLETE` will be dispatched.

When a component validates, its `draw()` function is called. The component should handle any changes that have been made to its properties inside `draw()`. Then, if the component's dimensions have not been specified manually, it should automatically calculate ideal width and height values (along with minimum values). These calculated values should be passed to `saveMeasurements()` where the final dimensions used for layout are calculated. Finally, the component should position and resize its children, as needed.

Read [Anatomy of a Feathers Component](./component-properties-methods.md) for more detailed information about the various "width" and "height" properties and variables that are available on a Feathers component.

## Render

A Feathers component is a Starling display object, so it has a `render()` function that is automatically called by Starling every frame. Feathers components typically don't override Starling's `render()` function.

Component will always be validated before `render()` is called.

## Invalidation

Any time a property changes, the component should call `invalidate()` while passing in a flag (or multiple flags) to specify the type of invalidation. Examples of invalidation types include size, layout, and selection. Each component may have its own internal categorization of properties as invalidation flags, but a number of useful generic flags are defined on `FeathersControl` as `protected` constants. How these flags are used is not enforced in any way. Feel free call `invalidate()` without flags and use private `Boolean` variables to track state, if you prefer.

After being invalidated, the component will wait to validate in case other properties need to be changed. Before Starling asks the component to render again, it will validate to ensure that all changes have been committed.

The process of 1) invalidation, 2) validation, 3) rendering will repeat indefinitely until the component is removed from the display list. It will start again if the component is removed and re-added.

## Removal

The component is removed from the display list. Unless it is added to the display list again, it will no longer validate automatically. Property changes will be saved, but not committed. To force the component to validate after property changes while it is not on the stage, call `validate()` manually.

## Disposal

Like all Starling display objects, Feathers components have a `dispose()` function that may be used to do things like remove external event listeners and dispose children or textures.

Once a Feathers component is disposed, it cannot be validated again. A disposed component should never be added to the display list. It may result in runtime errors or undefined behavior. Most disposed components will be completely unresponsive to user interaction.

## Garbage Collection

After all references to the component have been removed, it becomes eligible for garbage collection to be handled by the runtime. The component's life has completed.

## Related Links

- [Anatomy of a Feathers Component](./component-properties-methods.md)

- [Feathers Component Validation with `draw()`](./component-validation.md)

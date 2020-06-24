---
title: How to use the RouterNavigator component
sidebar_label: RouterNavigator
---

The [`RouterNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html) class supports navigation between views by integrating with the [HTML History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). On other targets, Feathers UI emulates the behavior of the HTML History API to provide a consistent experience across all platforms.

> [`RouterNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html) is designed for use in web browsers, but it is supported on all platform targets. If your app is not intended for deployment to the web, you might consider using [`StackNavigator`](./stack-navigator.md) instead, which offers more powerful features that are not supported by the HTML History API.

## The Basics

Start by creating a [`RouterNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html), and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var navigator = new RouterNavigator();
this.addChild(navigator);
```

A view can be a Feathers UI component or any OpenFL display object. The following example creates a simple view with a [label](./label.md).

```hx
class HelloView extends LayoutGroup {
    public function new() {
        super();

        var message = new Label();
        message.text = "Hello World";
        this.addChild(message);
    }
}
```

To add a new view that the navigator can show, create a [`Route`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html) and pass it to the navigator's [`addRoute()`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html#addRoute) method.

```hx
var route = Route.withClass("/", HelloView);
navigator.addRoute(route);
```

The first argument passed to [`Route.withClass()`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html#withClass) is the _pathname_ to use for the view. A pathname must start with a forward slash `/` character. `/settings`, `/`, and `/users/list` are all examples of valid pathnames.

> The _pathname_ is one of several parts of a [URL](https://developer.mozilla.org/en-US/docs/Web/API/Location), as demonstrated in the following table.
>
> | protocol | hostname       | port | pathname | search         | hash |
> | -------- | -------------- | ---- | -------- | -------------- | ---- |
> | https:   | www.google.com | 443  | /search  | ?q=feathers+ui | #nav |
>
> **/search** is the pathname for _https://www.google.com:443/search?q=feathers+ui#nav_.

The second argument is the `HelloView` class from earlier. The navigator will automatically create an instance of this class when the view needs to be shown.

> The [`Route`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html) class defines three static functions for creating items.
>
> - [`withClass()`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html#withClass) accepts any subclass of `DisplayObject`. Each time that the view is shown, a new instance of the class will be instantiated.
> - [`withFunction()`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html#withFunction) accepts a function that returns a display object. Each time that the view is shown, this function will be called. Using a function can be useful for adding children to a view or setting its properties before showing it in the navigator.
> - [`withDisplayObject()`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html#withDisplayObject) accepts an already-instantiated display object. When the view is shown, the same instance will always be reused. _This one can allocate a lot of memory if overused, so be careful!_

## Navigation

In a [`RouterNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html) component, navigating to a new view adds a new entry to the web browser's history. When the user navigates back or forward, the page's URL will be updated, and the [`RouterNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html) will update the currently displayed view to match.

Navigation may be triggered progammatically by calling functions like [`push()`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html#push) and [`goBack()`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html#goBack) on the navigator.

```hx
navigator.push("/users/list");
```

However, the real power of [`RouterNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html) comes from using events to trigger navigation.

### Navigate with events

The navigator can [listen for events](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) dispatched by the active view to automatically trigger navigation to other views. Custom events may be registered with a [`Route`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html), and a variety of different actions are available, including the ability to _push_ new locations or to _go back_ in history.

Consider the following two views, `ViewA` and `ViewB`.

```hx
class ViewA extends LayoutGroup {
    public static final PATHNAME = "/";

    public function new() {
        super();
        this.layout = new VerticalLayout();

        var label = new Label();
        label.text = "A";
        this.addChild(label);

        var button = new Button();
        button.text = "Push B";
        button.addEventListener(TriggerEvent.TRIGGER, button_triggerHandler);
        this.addChild(button);
    }

    private function button_triggerHandler(event:TriggerEvent):Void {
        this.dispatchEvent(new Event(Event.CHANGE));
    }
}
```

`ViewA` displays a label with the text "A" and a button with the text "Push B". When the button is triggered, `ViewA` dispatches `Event.CHANGE`. The pathname of `ViewA` is `/`.

```hx
class ViewB extends LayoutGroup {
    public static final PATHNAME = "/b";

    public function new() {
        super();
        this.layout = new VerticalLayout();

        var label = new Label();
        label.text = "B";
        this.addChild(label);

        var button = new Button();
        button.text = "Go back to A";
        button.addEventListener(TriggerEvent.TRIGGER, button_triggerHandler);
        this.addChild(button);
    }

    private function button_triggerHandler(event:TriggerEvent):Void {
        this.dispatchEvent(new Event(Event.COMPLETE));
    }
}
```

`ViewB` displays a label with the text "B" and a button with the text "Go back to A". When the button is triggered, `ViewB` dispatches `Event.COMPLETE`. The pathname of `ViewB` is `/b`.

In the next example, the two views are added to the navigator using their pathnames.

```hx
var routeA = Route.withClass(ViewA.PATHNAME, ViewA, [
    Event.CHANGE => Push(ViewB.PATHNAME)
]);
navigator.addRoute(routeA);

var routeB = Route.withClass(ViewB.PATHNAME, ViewB, [
    Event.COMPLETE => Push(ViewA.PATHNAME)
]);
navigator.addRoute(routeB);
```

When creating a [`Route`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html), a mapping of events to actions may be optionally provided. The available actions are defined on the [`RouterAction`](https://api.feathersui.com/current/feathers/controls/navigators/RouterAction.html) enum.

In the example above, when `ViewA` dispatches `Event.CHANGE`, the navigator will create a new history entry for the pathname of `ViewB`. The [`Push()`](https://api.feathersui.com/current/feathers/controls/navigators/RouterAction.html#Push) action accepts the pathname of the view to push. In this case, it's `ViewB.PATHNAME`.

Similarly, when `ViewB` dispatches `Event.COMPLETE`, the navigator will create a new history entry for `ViewA.PATHNAME`.

> **Why does B navigating back to A use `Push()` too? Shouldn't it use `GoBack()` instead?**
>
> Consider how you would create a simple HTML website. You want _a.html_ to link to _b.html_, so you'd add `<a href="b.html">Push B</a>`. Similarly, if _b.html_ should link to _a.html_, you'd add `<a href="a.html">Go back to A</a>`.
>
> Links in HTML don't go backwards. They always add a new history entry. For a Feathers UI app to feel native to the web, its navigation should feel similar to using links in HTML.
>
> Additionally, consider that your routes are accessible as public URLs, which allows another website to link directly to _any_ of your internal routes. If your view has a back button, and it should always go to a specific route in your app, that will only work if you use [`Push()`](https://api.feathersui.com/current/feathers/controls/navigators/RouterAction.html#Push) because [`GoBack()`](https://api.feathersui.com/current/feathers/controls/navigators/RouterAction.html#GoBack) could return anywhere, depending on how the user originally arrived at the route.
>
> Regardless, [`RouterNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html) is capable of using a [`GoBack()`](https://api.feathersui.com/current/feathers/controls/navigators/RouterAction.html#GoBack) action, if desired:
>
> ```hx
> Route.withClass(ViewB.PATHNAME, ViewB, [
>     Event.COMPLETE => GoBack()
> ]);
> ```
>
> Just be careful how you use it.

## Pass data between views

> 🚧 Data passing will be supported, but it has not been completely implemented yet.

## Related Links

- [`feathers.controls.navigators.RouterNavigator` API Documentation](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html)
- [HTML History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

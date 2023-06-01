---
title: How to use the RouterNavigator component
layout: "docs.html"
sidebarTitle: RouterNavigator
---

The [`RouterNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html) class supports navigation between views by integrating with the [HTML History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). On other targets, Feathers UI emulates the behavior of the HTML History API to provide a consistent experience across all platforms.

Navigation can be enhanced with animation, called a _transition_. Feathers UI provides a number of [animated transitions](./navigator-transitions.md) out of the box, and a simple API allows anyone to create [custom transitions](./custom-navigator-transitions.md).

> [`RouterNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html) is designed for use with URLs and the HTML history API in web browsers. However, these features are emulated on all platforms, and it is suitable for deployment anywhere.

> ⚠️ **Beta Notice**: This component is still quite new to Feathers UI. It was included in the latest release because it should be stable enough for production use. However, some APIs may go through minor changes in upcoming releases — based on feedback from developers like you. [Learn more about Beta APIs.](./semver.md#beta-apis)

## The Basics

Start by creating a [`RouterNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html), and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var navigator = new RouterNavigator();
addChild(navigator);
```

A view can be a Feathers UI component or any OpenFL display object. The following example creates a simple view with a [label](./label.md).

```haxe
class HelloView extends LayoutGroup {
    public function new() {
        super();

        var message = new Label();
        message.text = "Hello World";
        addChild(message);
    }
}
```

To add a new view that the navigator can show, create a [`Route`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html) and pass it to the navigator's [`addRoute()`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html#addRoute) method.

```haxe
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

```haxe
navigator.push("/users/list");
```

However, the real power of [`RouterNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html) comes from using events to trigger navigation.

### Navigate with events

The navigator can [listen for events](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) dispatched by the active view to automatically trigger navigation to other views. Custom events may be registered with a [`Route`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html), and a variety of different actions are available, including the ability to _push_ new locations or to _go back_ in history.

Consider the following two views, `ViewA` and `ViewB`.

```haxe
class ViewA extends LayoutGroup {
    public static final PATHNAME = "/";

    public function new() {
        super();
        layout = new VerticalLayout();

        var label = new Label();
        label.text = "A";
        addChild(label);

        var button = new Button();
        button.text = "Push B";
        button.addEventListener(TriggerEvent.TRIGGER, button_triggerHandler);
        addChild(button);
    }

    private function button_triggerHandler(event:TriggerEvent):Void {
        dispatchEvent(new Event(Event.CHANGE));
    }
}
```

`ViewA` displays a label with the text "A" and a button with the text "Push B". When the button is triggered, `ViewA` dispatches `Event.CHANGE`. The pathname of `ViewA` is `/`.

```haxe
class ViewB extends LayoutGroup {
    public static final PATHNAME = "/b";

    public function new() {
        super();
        layout = new VerticalLayout();

        var label = new Label();
        label.text = "B";
        addChild(label);

        var button = new Button();
        button.text = "Go back to A";
        button.addEventListener(TriggerEvent.TRIGGER, button_triggerHandler);
        addChild(button);
    }

    private function button_triggerHandler(event:TriggerEvent):Void {
        dispatchEvent(new Event(Event.COMPLETE));
    }
}
```

`ViewB` displays a label with the text "B" and a button with the text "Go back to A". When the button is triggered, `ViewB` dispatches `Event.COMPLETE`. The pathname of `ViewB` is `/b`.

In the next example, the two views are added to the navigator using their pathnames.

```haxe
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
> ```haxe
> Route.withClass(ViewB.PATHNAME, ViewB, [
>     Event.COMPLETE => GoBack()
> ]);
> ```
>
> Just be careful how you use it.

### Navigate with `htmlText` links

> **Note:** This feature requires OpenFL 9.2.0 or newer

To create a link that navigates to a different view, set the [`htmlText`](https://api.openfl.org/openfl/text/TextField.html#htmlText) property of a [`TextField`](https://api.openfl.org/openfl/text/TextField.html) or a Feathers UI [`Label`](./label.md) component. Create an `<a>` element where the `href` attribute starts with `event:router:`, followed by the pathname of the view to push.

The following link navigates to `/users/daredevil`.

```haxe
label.htmlText = '<a href="event:router:/users/daredevil">Matt Murdock</a>';
```

When the link is clicked, the [`TextField`](https://api.openfl.org/openfl/text/TextField.html) dispatches [`TextEvent.LINK`](https://api.openfl.org/openfl/events/TextEvent.html#LINK), which is a bubbling event. The [`RouterNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html) listens for this event from the currently active view, and if the `href` text starts with `event:router:`, it automatically creates a [`Push()`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html#Push) action with the specified pathname.

## Redirects

If a route has moved, and you want to automatically redirect users to a new pathname, use [`Route.withRedirect()`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html#withRedirect).

```haxe
var redirect = Route.withRedirect("/oldpath", "/newpath");
navigator.addRoute(redirect);
```

## Pass data between views

Sometimes, when pushing a new view onto the history stack, the old view needs to pass additional data to the new view. For instance, consider an app for managing contacts. It might have an `AllContactsView` that contains a list of contacts and a `ContactDetailsView` that lists more information about a single contact. When a contact is selected by the user in `AllContactsView`, the app should navigate to `ContactDetailsView` and pass in the selected contact.

The example below contains simplified versions of `AllContactsView` and `ContactDetailsView`. Most of the necessary code has been omitted to focus specifically on passing data between these views.

```haxe
class AllContactsView extends LayoutGroup {
    public static final PATHNAME = "/contacts";
}

class ContactDetailsView extends LayoutGroup {
    public static final PATHNAME = "/contact-details";

    public var contact:Contact;
}
```

The `ContactDetailsView` has a public property named `contact` that is used to specify which contact's details should be displayed. The `Contact` type might contain the contact's name, their email address, and any other relevant details that are necessary.

```haxe
typedef Contact = {
    var id:Int;
    var name:String;
    var email:String;
}
```

> Why `Contact` is defined as a [`typedef`](https://haxe.org/manual/type-system-typedef.html) for an [anonymous structure](https://haxe.org/manual/types-anonymous-structure.html) instead of [`class`](https://haxe.org/manual/types-class-instance.html) will be explained in a moment.

Somewhere inside `AllContactsView`, it dispatches `ContactEvent.VIEW_CONTACT`. Perhaps, the event is dispatched when the [`selectedItem`](https://api.feathersui.com/current/feathers/controls/ListView.html#selectedItem) property of a [`ListView`](./list-view.md) changes.

```haxe
// somewhere in AllContactsView
var contact = cast(listView.selectedItem, Contact);
dispatchEvent(new ContactEvent(ContactEvent.VIEW_CONTACT, contact));
```

`ContactEvent` is a custom event that might be implemented like this:

```haxe
import openfl.events.Event;

class ContactEvent extends Event {
    public static final VIEW_CONTACT:String = "viewContact";

    public function new(type:String, contact:Contact) {
        super(type, false, false);
        this.contact = contact;
    }

    public var contact:Contact;
}
```

To simply push a new view, and do nothing else, it's easy to create a [`Push()`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html#Push) action for `ContactEvent.VIEW_CONTACT`.

```haxe
var allContactsRoute = Route.withClass(AllContactsView.PATHNAME, AllContactsView, [
    // this pushes without data. something more powerful is needed.
    ContactEvent.VIEW_CONTACT => Push(ContactDetailsView.PATHNAME)
]);
```

However, [`Push()`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html#Push) doesn't automatically know how to pass information about the `Contact` to the `ContactDetailsView`.

Instead, use [`NewAction()`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html#NewAction) to dynamically create a [`Push()`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html#Push) action that includes a new history state for `ContactDetailsView`.

```haxe
var allContactsRoute = Route.withClass(AllContactsView.PATHNAME, AllContactsView, [
    ContactEvent.VIEW_CONTACT => NewAction((event:ContactEvent) -> {
        // this is the contact from AllContactsView
        var contact = event.contact;

        // return a Push() action with the Contact as the new history state
        return Push(ContactDetailsView.PATHNAME, contact);
    }
]);
```

> Remember how `Contact` is defined with a [`typedef`](https://haxe.org/manual/type-system-typedef.html) referencing an [anonymous structure](https://haxe.org/manual/types-anonymous-structure.html) instead of declaring a [`class`](https://haxe.org/manual/types-class-instance.html)? The reason for this is because [`RouterNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html) uses the [HTML History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API), which is not aware of Haxe classes and interfaces.
>
> If you were to pass a class instance as the state data in a [`Push()`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html#Push) or [`Replace()`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html#Replace) action, the browser's JavaScript engine would serialize it into a simpler object. There's no way to deserialize that new, simpler object back into a Haxe class instance again.
>
> By using a [`typedef`](https://haxe.org/manual/type-system-typedef.html) to define value objects (VOs), developers can still treat [anonymous structures](https://haxe.org/manual/types-anonymous-structure.html) as belonging to a type. This means that the compiler will still provide some validation that we're writing correct code, and editors or IDEs can still give helpful code intelligence about the type definition.

To access the history state in the new view, define an [`updateState()`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html#updateState) method on the [`Route`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html) object, and use that to pass the data to a property on the view.

```haxe
var contactDetailsRoute = Route.withClass(ContactDetailsView.PATHNAME, ContactDetailsView);
contactDetailsRoute.updateState = (view:ContactDetailsView, state:RouteState) -> {
    if (state.historyState == null) {
        // nothing to pass to the view
        return;
    }
    var contact = (state.historyState : Contact);
    view.contact = contact;
};
```

The [`updateState()`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html#updateState) method will receive an instance of the view, along with a [`RouteState`](https://api.feathersui.com/current/feathers/data/RouteState.html) object, as arguments. The [`RouteState`](https://api.feathersui.com/current/feathers/data/RouteState.html) has several properties, but it's the [`historyState`](https://api.feathersui.com/current/feathers/data/RouteState.html#historyState) property that holds the data passed from the previous view with the [`Push()`](https://api.feathersui.com/current/feathers/controls/navigators/Route.html#Push) action. Cast it to the `Contact` type definition and pass it to the `contact` property defined on `ContactDetailsView`.

## Related Links

- [`feathers.controls.navigators.RouterNavigator` API Documentation](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html)
- [HTML History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [Animated transitions for view navigators](./navigator-transitions.md)
- [Custom transitions for view navigators](./custom-navigator-transitions.md)
- [Sample: RouterNavigator Data Passing Between Views](https://github.com/feathersui/feathersui-openfl/tree/v1.2.0/samples/router-navigator-pass-data-between-views/)
- [Sample: RouterNavigator Save and Restore Data](https://github.com/feathersui/feathersui-openfl/tree/v1.2.0/samples/router-navigator-save-and-restore/)
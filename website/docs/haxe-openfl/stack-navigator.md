---
title: How to use the StackNavigator component
sidebar_label: StackNavigator
---

The [`StackNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/StackNavigator.html) class supports navigation between views, with a history stack that makes it simple to return to the previous screen. Events dispatched from the active screen can be used to push a new screen onto the stack, to pop the active screen, or even to call a function. When a new screen is pushed onto the stack, the previous screen may save its current state to be restored later.

Navigation can be enhanced with animation, called a _transition_. Feathers UI provides a number of [animated transitions](./navigator-transitions.md) out of the box, and a simple API allows anyone to create [custom transitions](./custom-navigator-transitions.md).

> If your project will be deployed to the web, consider using [`RouterNavigator`](./router-navigator.md) instead. [`RouterNavigator`](./router-navigator.md) integrates with URLs and the HTML history API, with full support for the browser's back button.

## The Basics

Start by creating a [`StackNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/StackNavigator.html), and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var navigator = new StackNavigator();
addChild(navigator);
```

A view can be a Feathers UI component or any OpenFL display object. The following example creates a simple view with a [label](./label.md).

```haxe
class HelloView extends LayoutGroup {
    public static final ID = "hello-view";

    public function new() {
        super();

        var message = new Label();
        message.text = "Hello World";
        addChild(message);
    }
}
```

The static `ID` constant will be used later when the view is added to the navigator.

To add a new view that the navigator can show, create a [`StackItem`](https://api.feathersui.com/current/feathers/controls/navigators/StackItem.html) and pass it to the navigator's [`addItem()`](https://api.feathersui.com/current/feathers/controls/navigators/StackNavigator.html#addItem) method.

```haxe
var item = StackItem.withClass(HelloView.ID, HelloView);
navigator.addItem(item);
```

The first argument passed to [`StackItem.withClass()`](https://api.feathersui.com/current/feathers/controls/navigators/StackItem.html#withClass) is a unique identifier for the view, which can be referenced later when defining [navigation](#navigation) actions. The second argument is the `HelloView` class from earlier. The navigator will automatically create an instance of this class when the view needs to be shown.

> The [`StackItem`](https://api.feathersui.com/current/feathers/controls/navigators/StackItem.html) class defines three static functions for creating items.
>
> - [`withClass()`](https://api.feathersui.com/current/feathers/controls/navigators/StackItem.html#withClass) accepts any subclass of `DisplayObject`. Each time that the view is shown, a new instance of the class will be instantiated.
> - [`withFunction()`](https://api.feathersui.com/current/feathers/controls/navigators/StackItem.html#withFunction) accepts a function that returns a display object. Each time that the view is shown, this function will be called. Using a function can be useful for adding children to a view or setting its properties before showing it in the navigator.
> - [`withDisplayObject()`](https://api.feathersui.com/current/feathers/controls/navigators/StackItem.html#withDisplayObject) accepts an already-instantiated display object. When the view is shown, the same instance will always be reused. _This one can allocate a lot of memory if overused, so be careful!_

To show the new view, set the navigator's [`rootItemID`](https://api.feathersui.com/current/feathers/controls/navigators/StackNavigator.html#rootItemID) property to the view's identifier.

```haxe
navigator.rootItemID = HelloView.ID;
```

## Navigation

In a [`StackNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/StackNavigator.html) component, each new view is _pushed_ onto a stack, which makes it easy for the navigator to keep track of the navigation history. When the user wants to go back, the view at the top of the stack is _popped_ and the previous view is restored.

Navigation may be triggered progammatically by calling functions like [`pushItem()`](https://api.feathersui.com/current/feathers/controls/navigators/StackNavigator.html#pushItem) and [`popItem()`](https://api.feathersui.com/current/feathers/controls/navigators/StackNavigator.html#pushItem) on the navigator.

```haxe
navigator.pushItem(HelloView.ID);
```

However, the real power of [`StackNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/StackNavigator.html) comes from using events to trigger navigation.

### Navigate with events

The navigator can [listen for events](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) dispatched by the active view to automatically trigger navigation to other views. Custom events may be registered with a [`StackItem`](https://api.feathersui.com/current/feathers/controls/navigators/StackItem.html), and a variety of different actions are available, including the ability to _push_ and _pop_ views on the stack.

Consider the following two views, `ViewA` and `ViewB`.

```haxe
class ViewA extends LayoutGroup {
    public static final ID = "a";

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

`ViewA` displays a label with the text "A" and a button with the text "Push B". When the button is triggered, `ViewA` dispatches `Event.CHANGE`.

```haxe
class ViewB extends LayoutGroup {
    public static final ID = "b";

    public function new() {
        super();
        layout = new VerticalLayout();

        var label = new Label();
        label.text = "B";
        addChild(label);

        var button = new Button();
        button.text = "Pop to A";
        button.addEventListener(TriggerEvent.TRIGGER, button_triggerHandler);
        addChild(button);
    }

    private function button_triggerHandler(event:TriggerEvent):Void {
        dispatchEvent(new Event(Event.COMPLETE));
    }
}
```

`ViewA` displays a label with the text "B" and a button with the text "Pop to A". When the button is triggered, `ViewB` dispatches `Event.COMPLETE`.

In the next example, the two views are added to the navigator and the [`rootItemID`](https://api.feathersui.com/current/feathers/controls/navigators/StackNavigator.html#rootItemID) displays the initial view.

```haxe
var itemA = StackItem.withClass(ViewA.ID, ViewA, [
    Event.CHANGE => Push(ViewB.ID)
]);
navigator.addItem(itemA);

var itemB = StackItem.withClass(ViewB.ID, ViewB, [
    Event.COMPLETE => Pop()
]);
navigator.addItem(itemB);

navigator.rootItemID = ViewA.ID;
```

When creating a [`StackItem`](https://api.feathersui.com/current/feathers/controls/navigators/StackItem.html), a mapping of events to actions may be optionally provided. The available actions are defined on the [`StackAction`](https://api.feathersui.com/current/feathers/controls/navigators/StackAction.html) enum.

In the example above, when `ViewA` dispatches `Event.CHANGE`, the navigator will push `ViewB` onto the stack. The [`Push()`](https://api.feathersui.com/current/feathers/controls/navigators/StackAction.html#Push) action accepts an identifier of the view to push. In this case, it's `ViewB.ID`.

When `ViewB` dispatches `Event.COMPLETE`, the navigator will pop `ViewB` from the stack and return to `ViewA` using the [`Pop()`](https://api.feathersui.com/current/feathers/controls/navigators/StackAction.html#Pop) action.

## Pass data between views

### Pass data on push

Sometimes, when pushing a new view onto the stack, the old view needs to pass additional data to the new view. For instance, consider an app for managing contacts. It might have an `AllContactsView` that contains a list of contacts and a `ContactDetailsView` that lists more information about a single contact. When a contact is selected by the user in `AllContactsView`, the app should navigate to `ContactDetailsView` and pass in the selected contact.

The example below contains simplified versions of `AllContactsView` and `ContactDetailsView`. Most of the necessary code has been omitted to focus specifically on passing data between these views.

```haxe
class AllContactsView extends LayoutGroup {
    public static final ID = "all-contacts";
}

class ContactDetailsView extends LayoutGroup {
    public static final ID = "contact-details";

    public var contact:Contact;
}
```

The `ContactDetailsView` has a public property named `contact` that is used to specify which contact's details should be displayed. The `Contact` class might contain the contact's name, their email address, and any other relevant details that are necessary.

```haxe
class Contact {
    public var name:String;
    public var email:String;
}
```

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

To simply push a new view, and do nothing else, it's easy to create a [`Push()`](https://api.feathersui.com/current/feathers/controls/navigators/StackAction.html#Push) action for `ContactEvent.VIEW_CONTACT`.

```haxe
StackItem.withClass(AllContactsView.ID, AllContactsView, [
    // this pushes without data. something more powerful is needed.
    ContactEvent.VIEW_CONTACT => Push(ContactDetailsView.ID)
]);
```

However, [`Push()`](https://api.feathersui.com/current/feathers/controls/navigators/StackAction.html#Push) doesn't automatically know how to pass the `Contact` to the `ContactDetailsView`.

Instead, use [`NewAction()`](https://api.feathersui.com/current/feathers/controls/navigators/StackAction.html#NewAction) to dynamically create a [`Push()`](https://api.feathersui.com/current/feathers/controls/navigators/StackAction.html#Push) action that includes an _inject_ function for `ContactDetailsView`. Inside that function, the `contact` property of the `ContactDetailsView` can be set.

```haxe
StackItem.withClass(AllContactsView.ID, AllContactsView, [
    ContactEvent.VIEW_CONTACT => NewAction((event:ContactEvent) -> {
        // this is the contact from AllContactsView
        var contact = event.contact;

        // a custom inject function passes data to the ContactDetailsView
        var inject = (target:ContactDetailsView) ->
        {
            target.contact = contact;
        };

        // return a Push() action with the custom inject function
        return Push(ContactDetailsView.ID, inject);
    }
]);
```

### Pass data on pop

Sometimes, when popping a view from the stack, it needs to pass additional data to the previous view in the stack's history. For instance, consider an app that can send private messages between users. It might have a `ComposeMessageView` where a user writes a message to a specific contact, and a `ChooseContactView` that displays a list of contacts to choose from. When the user needs to choose the message's recipient in `ComposeMessageView`, the app should navigate to `ContactDetailsView`. When a contact is chosen in `ContactDetailsView`, app should navigate back to `ComposeMessageView` while returning the contact at the same time.

The example below contains simplified versions of `ComposeMessageView` and `ChooseContactView`. Most of the necessary code has been omitted to focus specifically on passing data between these views.

```haxe
class ChooseContactView extends LayoutGroup {
    public static final ID = "choose-contact";
}

class ComposeMessageView extends LayoutGroup {
    public static final ID = "compose-message";

    public var contact:Contact;
}
```

The `ComposeMessageView` has a public property named `contact` that is used to reference the message recipient. The `Contact` class might contain the contact's name, their email address, and any other relevant details that are necessary.

```haxe
class Contact {
    public var name:String;
    public var email:String;
}
```

To understand how data is passed on pop, it's better to start with `ChooseContactView` and work backwards.

Somewhere inside `ChooseContactView`, it dispatches `ContactEvent.CHOOSE_CONTACT` with the selected `Contact` from a [`ListView`](./list-view.md).

```haxe
// somewhere in ChooseContactView
var contact = cast(listView.selectedItem, Contact);
dispatchEvent(new ContactEvent(ContactEvent.CHOOSE_CONTACT, contact));
```

`ContactEvent` is a custom event that might be implemented like this:

```haxe
import openfl.events.Event;

class ContactEvent extends Event {
    public static final CHOOSE_CONTACT:String = "chooseContact";
    public static final REQUEST_CONTACT:String = "requestContact";

    public function new(type:String, ?contact:Contact) {
        super(type, false, false);
        this.contact = contact;
    }

    public var contact:Contact;
}
```

To simply pop to the previous view, and do nothing else, it's easy to create a [`Pop()`](https://api.feathersui.com/current/feathers/controls/navigators/StackAction.html#Pop) action for `ContactEvent.CHOOSE_CONTACT`.

```haxe
StackItem.withClass(ChooseContactView.ID, ChooseContactView, [
    // this pops without data. something more powerful is needed.
    ContactEvent.CHOOSE_CONTACT => Pop()
]);
```

However, [`Pop()`](https://api.feathersui.com/current/feathers/controls/navigators/StackAction.html#Pop) doesn't automatically know how to pass the `Contact` back to the `ComposeMessageView`.

Instead, use [`NewAction()`](https://api.feathersui.com/current/feathers/controls/navigators/StackAction.html#NewAction) to dynamically create a [`Pop()`](https://api.feathersui.com/current/feathers/controls/navigators/StackAction.html#Pop) action that includes a _returned object_. Later, that returned object can be passed to the `contact` property of the `ComposeMessageView`.

```haxe
StackItem.withClass(ChooseContactView.ID, ChooseContactView, [
    ContactEvent.CHOOSE_CONTACT => NewAction((event:ContactEvent) -> {
        // this is the contact from ChooseContactView
        var contact = event.contact;

        // return a Pop() action with the custom returned object
        return Pop(contact);
    }
]);
```

Somewhere inside `ComposeMessageView`, it dispatches `ContactEvent.REQUEST_CONTACT`. Perhaps, the event is dispatched when a [`Button`](./button.md) is triggered.

```haxe
// somewhere in ComposeMessageView
dispatchEvent(new ContactEvent(ContactEvent.REQUEST_CONTACT));
```

Create a [`Push()`](https://api.feathersui.com/current/feathers/controls/navigators/StackAction.html#Push) action for `ContactEvent.REQUEST_CONTACT` that navigates to `ChooseContactView`. This mapping contains no special handling of the returned object from `ChooseContactView`.

```haxe
StackItem.withClass(ComposeMessageView.ID, ComposeMessageView, [
    ContactEvent.REQUEST_CONTACT => Push(ChooseContactView.ID)
]);
```

To handled the returned object from `ChooseContactView`, another, optional argument can be used to set up mappings that parse returned objects from different views that are popped. In this case, the returned object from `ChooseContactView` is passed to `ComposeMessageView`.

```haxe
StackItem.withClass(ComposeMessageView.ID, ComposeMessageView, [
    ContactEvent.REQUEST_CONTACT => Push(ChooseContactView.ID)
], [
    ChooseContactView.ID => (view:ComposeMessageView, returnedObject:Contact) => {
        view.contact = returnedObject;
    }
]);
```

## Related Links

- [`feathers.controls.navigators.StackNavigator` API Documentation](https://api.feathersui.com/current/feathers/controls/navigators/StackNavigator.html)
- [Animated transitions for view navigators](./navigator-transitions.md)
- [Custom transitions for view navigators](./custom-navigator-transitions.md)

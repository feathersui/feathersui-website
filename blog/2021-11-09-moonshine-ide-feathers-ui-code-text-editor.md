---
title: Moonshine IDE's code editor powered by Feathers UI
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorImageURL: /img/authors/josh.jpg
layout: "blog-post.html"
permalink: "{{ page | blog_permalink }}"
tags: ["blog"]
---

Over the last year or so, the team working on [Moonshine IDE](https://moonshine-ide.com/) have been converting the application's interface to run on [Feathers UI](https://feathersui.com/). In the recent 3.2 update of Moonshine, the IDE includes an all new code editor — rewritten in Haxe as a Feathers UI component. Best of all: [The new code editor is open source.](https://github.com/Moonshine-IDE/moonshine-feathersui-text-editor)

![Code editor demonstrating the completion list view](/blog/img/moonshine-feathersui-text-editor-completion.png)

For those unfamiliar, [Moonshine IDE](https://moonshine-ide.com/) is an open source development environment that aims to get your projects up and running as quickly as possible, allowing you to easily install SDKs and tools, configure SCM like Git, and, of course, compile and debug to a variety of platforms. It supports creating projects with Haxe/OpenFL, AS3 with Flex or Royale, Java, Groovy/Grails, PrimeFaces and more.

> The Moonshine team's goal is to migrate the entire IDE from Apache Flex, Adobe AIR, and ActionScript 3.0 to Feathers UI, OpenFL, and Haxe. With Feathers UI, it's possible to convert individual views within the existing Flex application one by one — so that Flex and Feathers UI are running side by side. The conversion from one framework to another can happen incrementally, instead of requring a complete rewrite all at once.
>
> When the time comes, Moonshine's developers will be able to basically flip a switch, and the app will no longer run on Adobe AIR. At the point, it will be pure OpenFL, running natively with HXCPP on Windows, macOS, and Linux.

## Code editor features

![Code editor demonstrating code actions](/blog/img/moonshine-feathersui-text-editor-code-actions.png)

Some highlights of the features that this new text editor component provides.

- **Syntax highlighting**. Programming language syntax, like keywords, strings, numbers, etc. are highlighted in different colors, and you can set custom colors too.

- **Optimized scrolling**. The code editor is powered internally by the Feathers UI [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view) component, which uses a _virtualized_ layout to optimize scrolling performance.

- **Diagnostics** may be used to display compiler errors and warnings as colorful ~squiggly~ underlines.

- **Completion** pops up a list of suggestions as you type. It can be triggered either by a keyboard shortcut, or by typing certain characters in the editor.

- **Signature Help** provides parameter information for method calls.

- **Code Actions** can provide quick fixes and other automated source changes.

- **Go To Definition** allows `Ctrl+Click` jumping to where a class, interface, method, or variable is defined.

- **Hover** your mouse over a symbol to see more context, including Markdown-formatted documentation.

- **Breakpoints** may be added for debugging, including highlighting the line where the debugger is currently paused.

- **A whole lot more**, like find/replace, line ending detection, increase/decrease indentation, auto-closing bracket pairs, and toggle line/block comments.

![Code editor demonstrating diagnostics](/blog/img/moonshine-feathersui-text-editor-diagnostics.png)

## Language Server Protocol support

The library actually contains two main components: `TextEditor` and `LspTextEditor`. The `TextEditor` component provides the basics, like editing, selection, syntax highlighting, and find/replace. Meanwhile the `LspTextEditor` subclass provides the more advanced code intelligence features, like completion, signature help, jump to definition, and things like that.

The API of the `LspTextEditor` is based on the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/), which allows a _client_ (the editor or IDE) to request code intelligence data from a _server_ (generally, a separate program that gets launched by the editor). This protocol was originally pioneered by Microsoft in their Visual Studio Code editor, but it's now supported in a variety of editors and IDEs across the developer ecosystem.

The Language Server Protocol defines a number of primitives for returning data when responding to code intelligence requests, such as returning arrays of _completion items_ after you type the `.` character for member access, or showing function _signature help_ when you type the `(` character to call a method.

`LspTextEditor` doesn't know how to speak with the server directly. It simply understands how to use the Language Server Protocol primitives as its value objects. You can actually hook `LspTextEditor` up to any source of code intelligence data, as long as you map the results to the expected format. The editor will dispatch appropriate events, and you can return the results in a simple callback.

```hx
textEditor.addEventListener(
    LspTextEditorLanguageRequestEvent.REQUEST_COMPLETION,
    completionHandler);

function completionHandler(event):Void {
    var item = new CompletionItem();
    item.label = "parent";
    item.kind = Field;
    item.detail = "openfl.display.DisplayObjectContainer";
    item.documentation = "Indicates the DisplayObjectContainer object that contains this display object.";
    var completion = new CompletionList([item]);
    event.callback(completion);
}
```

If you want to use a real language server that speaks the protocol, you can combine `LspTextEditor` with the `LanguageClient` class from a sister project, [Moonshine-IDE/moonshine-openfl-language-client](https://github.com/Moonshine-IDE/moonshine-openfl-language-client).

## Open source

Moonshine's new code editor powered by Feathers UI is completely open source, and you can find the [Moonshine-IDE/moonshine-feathersui-text-editor](https://github.com/Moonshine-IDE/moonshine-feathersui-text-editor) repository on Github. Apache licensed for both open source and commercial use.

You can embed this code editor in any Feathers UI or OpenFL application. For instance, if you were building some kind of developer tool, you might want to display read-only code samples with syntax highlighting. With that idea in mind, I recently added the code editor to the [Feathers UI Transitions "Story Explorer"](https://feathersui.com/samples/haxe-openfl/story-explorer/transitions/) demo to display how each "story" was created. You can see a screenshot of how it was integrated below:

![Screenshot of Story Explorer](/blog/img/feathersui-transitions-story-explorer-code-sample.png)

## Installation and more

You can run the following commands in your terminal to install both [moonshine-feathersui-text-editor](https://github.com/Moonshine-IDE/moonshine-feathersui-text-editor) and [moonshine-openfl-language-client](https://github.com/Moonshine-IDE/moonshine-openfl-language-client).

```sh
haxelib git moonshine-openfl-language-client https://github.com/Moonshine-IDE/moonshine-openfl-language-client.git
haxelib git moonshine-feathersui-text-editor https://github.com/Moonshine-IDE/moonshine-feathersui-text-editor.git
```

Next, be sure to check out a variety of [sample projects](https://github.com/Moonshine-IDE/moonshine-feathersui-text-editor/tree/master/samples) in the repository that demonstrate how to use each feature. At the time of this writing, there are examples for breakpoints, completion, jump to definition, diagnostics, displaying details/documentation on hover, and signature help. There's also an example called "simple text editor" that creates a basic app that can open, edit, and save text files, with syntax highlighting for several languages.

To keep up with the latest news and updates about [Moonshine IDE](https://moonshine-ide.com/), follow the team's announcements on [Twitter](https://twitter.com/MoonshineIDE), [Facebook](https://www.facebook.com/MoonshineIDE/) or [LinkedIn](https://www.linkedin.com/groups/8464960/).

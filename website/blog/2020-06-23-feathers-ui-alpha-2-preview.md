---
title: Feathers UI alpha.2 preview build on Haxelib
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Today, Feathers UI **alpha.2** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui). This is the second of multiple preview builds that are planned for 2020. These preview builds are intended to give the community an opportunity to see how development of Feathers UI is progressing — and to give everyone a chance to start prototyping some cool, new projects!

![](/blog/img/feathersui-alpha-2.png)

[Feathers UI](https://feathersui.com/) is an open source framework of [user interface components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/) — a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux (and even publish your project to the web!) using the same Haxe codebase.

> 🚨 Please note that this version of Feathers UI is considered to be **alpha** quality. Many of the planned UI components and features are still missing, and some APIs are likely to change in future builds. Use in production is not yet recommended.

Feathers UI has reached this milestone thanks the very generous support of all of the backers from the [Feathers UI Kickstarter campaign](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl), which completed successfully in the summer of 2019. A big, enthusastic thank you to everyone who has supported the project, whether you are a backer, shared the Kickstarter with your friends on social media, or simply encouraged me ([Josh](https://twitter.com/joshtynjala)) to keep up the good work!

## What's new in alpha.2?

Let's take a look at some of the new UI components and features that are included with Feathers UI alpha.2.

### New UI Components

- [`GridView`](https://feathersui.com/learn/haxe-openfl/grid-view) renders a table of data that may be scrolled. ([Live Demo](https://feathersui.com/samples/haxe-openfl/components-explorer/grid-view))

  <div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/grid-view"><img src="/blog/img/alpha-2-feathersui-grid-view.png" style="width:450px"></a></div>

- [`TreeView`](https://feathersui.com/learn/haxe-openfl/tree-view) displays hierarchical data in a list with branches that may be opened and closed. ([Live Demo](https://feathersui.com/samples/haxe-openfl/components-explorer/tree-view))

  <div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/tree-view"><img src="/blog/img/alpha-2-feathersui-tree-view.png" style="width:450px"></a></div>

- [`PageNavigator`](https://feathersui.com/learn/haxe-openfl/page-navigator) supports navigation between views using a [`PageIndicator`](https://feathersui.com/learn/haxe-openfl/page-indicator) component. ([Live Demo](https://feathersui.com/samples/haxe-openfl/components-explorer/page-navigator))

  <div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/page-navigator"><img src="/blog/img/alpha-2-feathersui-page-navigator.png" style="width:450px"></a></div>

- [`TabNavigator`](https://feathersui.com/learn/haxe-openfl/tab-navigator) supports navigation between views using a [`TabBar`](https://feathersui.com/learn/haxe-openfl/tab-bar) component. ([Live Demo](https://feathersui.com/samples/haxe-openfl/components-explorer/tab-navigator))

  <div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/tab-navigator"><img src="/blog/img/alpha-2-feathersui-tab-navigator.png" style="width:450px"></a></div>

- [`TextArea`](https://feathersui.com/learn/haxe-openfl/text-area) displays editable text wrapped over multiple lines — and it supports scrolling vertically. ([Live Demo](https://feathersui.com/samples/haxe-openfl/components-explorer/text-area))

  <div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/tab-navigator"><img src="/blog/img/alpha-2-feathersui-text-area.png" style="width:450px"></a></div>

### CLI new-project

The new [CLI interface](https://feathersui.com/learn/haxe-openfl/cli) makes it possible to create a new Feathers UI project from your terminal in a single command.

```sh
haxelib run feathersui new-project HelloWorld
```

The command above creates a new project in a folder named _HelloWorld_ using a simple template that includes an [OpenFL _project.xml_ file](https://lime.software/docs/project-files/xml-format/), a main class that extends [`Application`](https://feathersui.com/learn/haxe-openfl/application), and a default icon.

Additionally, if you add the `--vscode` flag, it will create supporting configuration files for [Visual Studio Code](https://feathersui.com/learn/haxe-openfl/visual-studio-code), and you can easily open your project from the command line.

```sh
haxelib run feathersui new-project HelloWorld --vscode
code ./HelloWorld
```

This will add [_.vscode/tasks.json_](https://code.visualstudio.com/docs/editor/tasks) with a default Lime/OpenFL build task and [_./vscode/launch.json_](https://code.visualstudio.com/docs/editor/debugging) with a Lime/OpenFL launch configuration.

### ListView optimizations

A proper list view UI component needs to be able to display thousands or millions of items without requiring a ridiculous amount of memory or maxing out the CPU.

Typically, this means that a small subset of the items from its data provider are rendered at any given time, and as the list view scrolls, some items are no longer rendered and new ones take their place. This is known as _layout virtualization_.

In the alpha.2 build, the [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view) component can display larger data providers by using three new layouts:

- [`HorizontalListLayout`](https://feathersui.com/learn/haxe-openfl/horizontal-list-layout) optimizes for items positioned from left to right, in a single row. Each item may have a different width.
- [`VerticalListLayout`](https://feathersui.com/learn/haxe-openfl/vertical-list-layout) optimizes lists with items positioned from top to bottom, in a single column. Each item may have a different height. This layout is the **default** used by [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view).
- [`VerticalListFixedRowLayout`](https://feathersui.com/learn/haxe-openfl/vertical-list-fixed-row-layout) is similar to `VerticalListLayout` — except all items must have the exact same height. This layout offers better performance by reducing the height lookups associated with variable item heights.

### Keyboard focus management

Many people navigate through user interfaces without a mouse or touchscreen. They might be power users, they may have limited motor function, or maybe they're using a game controller or a TV remote control. It's important for many apps to have the option available to navigate between UI controls without using some kind of pointer.

The alpha.2 build includes a new focus manager that supports navigation with <kbd>Tab</kbd> and <kbd>Shift</kbd>+<kbd>Tab</kbd>. In a future update, the default focus manager will also support directional pads (D-pads) on game controllers and TV remote controls.

<div style="text-align:center;"><a href="https://feathersui.com/samples/haxe-openfl/login-form"><img src="/blog/img/alpha-2-login-form-sample.png" style="width:450px"></a></div>

Loading up the new [Login Form sample](https://feathersui.com/samples/haxe-openfl/login-form) is an easy way to try out using the tab key to navigate between UI components in a simple form.

Additionally, it's worth mentioning that I also made several commits upstream to [OpenFL](https://openfl.org/) to improve keyboard focus management for all OpenFL projects — not just those that use the Feathers UI focus manager. Those enhancements will be available in an upcoming update to OpenFL.

## Install Feathers UI alpha.2

Feathers UI may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib**](https://lib.haxe.org/documentation/using-haxelib/) command in your terminal.

```sh
haxelib install feathersui
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up supported editors and IDEs.

## Documentation

- The [Feathers UI Manual](https://feathersui.com/learn/haxe-openfl/) teaches you how to use all of the components in Feathers UI.
- The [v1.0.0-alpha.2 API Reference](https://api.feathersui.com/v1.0.0-alpha.2/) includes descriptions of all APIs available on Feathers UI components, layouts, utility functions, and more.

## Community

- Start a thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh and others in the community.

## Questions or comments?

Everyone, I just want to say thank you again for your support. I'm looking forward to hearing what you think of the new Feathers UI so far. If you create anything with this build — even a simple prototype — I'd love it if you could share your experiences (and maybe even a screenshot 🖼!).

I've created an [official discussion thread](https://community.feathersui.com/d/31-feathers-ui-alpha2-preview-build-on-haxelib) in the forums. Head over there to leave a comment!

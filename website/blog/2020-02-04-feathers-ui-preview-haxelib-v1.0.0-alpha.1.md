---
title: Feathers UI alpha preview build on Haxelib (v1.0.0-alpha.1)
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Today, for very the first time, Feathers UI may be installed [from Haxelib](https://lib.haxe.org/p/feathersui). This is the first of multiple preview builds that are planned for 2020. These preview builds are intended to give the community an opportunity to see how development of Feathers UI is progressing — and to give everyone a chance to start prototyping!

[Feathers UI](https://feathersui.com/) is an open source framework of [user interface components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/) — a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux (and even publish your project to the web!) using the same Haxe codebase.

> 🚨 Please note that this version of Feathers UI is considered to be **alpha** quality. Many of the planned UI components and features are still missing, and some APIs are likely to change in future builds. It is _not_ ready for production yet.

Feathers UI has reached this first big milestone thanks the very generous support of all of the backers from the [Feathers UI Kickstarter campaign](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl), which completed successfully in the summer of 2019. A big, enthusastic thank you to everyone who has supported the project, whether you are a backer, shared the Kickstarter with your friends on social media, or simply encouraged me ([Josh](https://twitter.com/joshtynjala)) to keep it up!

Let's take a look at a few of the [samples](https://feathersui.com/samples/haxe-openfl/) that are included with Feathers UI. Each one includes a live web demo that you can try out in your browser.

The [_calculator_ sample](https://github.com/feathersui/feathersui-openfl/tree/v1.0.0-alpha.1/samples/calculator/) demonstrates how to build a simple app, which uses the [`Application`](https://feathersui.com/learn/haxe-openfl/application), [`LayoutGroup`](https://feathersui.com/learn/haxe-openfl/layout-group), [`Button`](https://feathersui.com/learn/haxe-openfl/button) and [`Label`](https://feathersui.com/learn/haxe-openfl/label) components. This sample also includes a simple custom _theme_ that changes the appearance of the app's components to look different from the default styles.

[![Screenshot of "calculator" sample](/blog/img/alpha-1-calculator.png)](https://feathersui.com/samples/haxe-openfl/calculator/)

The [_components-explorer_ sample](https://feathersui.com/samples/haxe-openfl/components-explorer/) includes a basic demo of every component currently supported by Feathers UI.

It also shows how Feathers UI may be used to build _single-page apps_ with deep linking. This sample uses the [`RouterNavigator`](https://feathersui.com/learn/haxe-openfl/router-navigator) component, which integrates with the HTML History API so that each view has its own custom URL. As you navigate through the app, watch as your browser's current location updates automatically.

Finally, as you can see in the screenshot below, this sample shows how the default styles in Feathers UI support both light and dark modes.

([Project on Github](https://github.com/feathersui/feathersui-openfl/tree/v1.0.0-alpha.1/samples/components-explorer/))

[![Screenshot of "components-explorer" sample](/blog/img/alpha-1-light-and-dark-modes.png)](https://feathersui.com/samples/haxe-openfl/components-explorer/)

The [_horizontal-layout-percentage-sizing_ sample](https://feathersui.com/samples/haxe-openfl/horizontal-layout-percentage-sizing/) demonstrates how layouts included with Feathers UI allow components to be sized using a percentage of their parent container's size. ([Project on Github](https://github.com/feathersui/feathersui-openfl/tree/v1.0.0-alpha.1/samples/horizontal-layout-percentage-sizing/))

[![Screenshot of "horizontal-layout-percentage-sizing" sample](/blog/img/alpha-1-percents.png)](https://feathersui.com/samples/haxe-openfl/horizontal-layout-percentage-sizing/)

The [_list-view-data-provider-collection-sorting_ sample](https://feathersui.com/samples/haxe-openfl/list-view-data-provider-collection-sorting/) demonstrates how data collections displayed by components like [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view) support real-time changes to their sorting. ([Project on Github](https://github.com/feathersui/feathersui-openfl/tree/v1.0.0-alpha.1/samples/list-view-data-provider-collection-sorting/))

[![Screenshot of "list-view-data-provider-collection-sorting" sample](/blog/img/alpha-1-list-view-sorting.png)](https://feathersui.com/samples/haxe-openfl/list-view-data-provider-collection-sorting/)

## Install Feathers UI

Feathers UI may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib**](https://lib.haxe.org/documentation/using-haxelib/) command in your terminal.

```sh
haxelib install feathersui
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up your editor or IDE.

## Documentation

- The [Feathers UI Manual](https://feathersui.com/learn/haxe-openfl/) teaches you how to use all of the components in Feathers UI.
- The [v1.0.0-alpha.1 API Reference](https://api.feathersui.com/v1.0.0-alpha.1/) includes descriptions of all APIs available on Feathers UI components, layouts, utility functions, and more.

## Community

- Start a thread in the [Feathers UI Community forums](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh and others in the community.

## Questions or comments?

Everyone, I just want to say thank you again for your support. I'm looking forward to hearing what you think of the new Feathers UI so far. If you create anything with this build — even a simple prototype — I'd love it if you could share your experiences (and maybe a screenshot!).

I've created an [official discussion thread](https://community.feathersui.com/d/20-feathers-ui-alpha-preview-build-v1-0-0-alpha-1) in the forums. Head over there to leave a comment!

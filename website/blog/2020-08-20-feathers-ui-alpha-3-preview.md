---
title: Feathers UI alpha.3 preview build on Haxelib
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Today, Feathers UI **alpha.3** is now official available [on Haxelib](https://lib.haxe.org/p/feathersui). This is the third of multiple preview builds that are planned for 2020. These preview builds are intended to give the community an opportunity to see how development of Feathers UI is progressing — and to give everyone a chance to start prototyping some cool, new projects!

![](/blog/img/feathersui-alpha-3.png)

[Feathers UI](https://feathersui.com/) is an open source framework of user interface components for creative, cross-platform projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/) — a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux (and even publish your project to the web!) using the same Haxe codebase.

> 🚨 Please note that this version of Feathers UI is considered to be **alpha** quality. Many of the planned UI components and features are still missing, and some APIs are likely to change in future builds. Use in production is not yet recommended.

Feathers UI has reached this milestone thanks the very generous support of all of the backers from the [Feathers UI Kickstarter campaign](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl), which completed successfully in the summer of 2019. A big, enthusastic thank you to everyone who has supported the project, whether you are a backer, shared the Kickstarter with your friends on social media, or simply encouraged me ([Josh](https://twitter.com/joshtynjala)) to keep up the good work!

## What's new in alpha.3?

Let's take a look at some of the new UI components and features that are included with Feathers UI alpha.3.

### New UI Components

- [`GroupListView`](https://feathersui.com/learn/haxe-openfl/group-list-view) renders a collection of data, similar to a [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view), but items are also divided into groups with headers.

  <div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/group-list-view"><img src="/blog/img/alpha-3-feathersui-group-list-view.png" style="width:450px"></a></div>

### Stability improvements

As you can see above, this release doesn't include a lot of new components or major new features. The core focus this time around was around improving stability and fixing bugs. There are community projects that want to use Feathers UI in production, but alpha.2 wasn't quite ready for that yet.

With alpha.3, things are really coming together — with critical stability improvements to [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view), [`TreeView`](https://feathersui.com/learn/haxe-openfl/tree-view), [`TextInput`](https://feathersui.com/learn/haxe-openfl/text-input), [`TextArea`](https://feathersui.com/learn/haxe-openfl/text-input), programmatic skinning, and scrolling behavior.

One project that is starting to adopt Feathers UI is [Moonshine IDE](https://moonshine-ide.com/). I've been working closely with the team to migrate a number of dialogs and views in the app from Apache Flex (and ActionScript 3) to Feathers UI (and Haxe). This collaboration with the Moonshine IDE team is what drove many of the stability improvements in alpha.3, and it really made a big difference.

> The goal with Moonshine IDE is to eventually replace the entire codebase with Haxe and compile it as a native app. In the meantime, it's likely that you'll soon see a release of Moonshine IDE that runs a mix of both Flex and Feathers UI side-by-side inside the existing Adobe AIR app. As a migration path for legacy Flex apps, it's really nice that Feathers UI makes it possible to do things incrementally instead of requiring a complete rewrite that's all-or-nothing.

As development continues in Moonshine IDE and other projects that are starting to adopt Feathers UI, you can expect future update to bring even more important bug fixes, performance boosts, and other improvements to stability.

## Install Feathers UI alpha.3

Feathers UI may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib**](https://lib.haxe.org/documentation/using-haxelib/) command in your terminal.

```sh
haxelib install feathersui
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up supported editors and IDEs.

## Documentation

- The [Feathers UI Manual](https://feathersui.com/learn/haxe-openfl/) teaches you how to use all of the components in Feathers UI.
- The [v1.0.0-alpha.3 API Reference](https://api.feathersui.com/v1.0.0-alpha.3/) includes descriptions of all APIs available on Feathers UI components, layouts, utility functions, and more.

## Community

- Start a thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh and others in the community.

## Questions or comments?

Everyone, I just want to say thank you again for your support. I'm looking forward to hearing what you think of the new Feathers UI so far. If you create anything with this build — even a simple prototype — I'd love it if you could share your experiences (and maybe even a screenshot 🖼!).

I've created an [official alpha.3 discussion thread](https://community.feathersui.com/d/37-feathers-ui-alpha3-preview-build-on-haxelib) in the community forums. Head over there to leave a comment!

---
title: "Feathers UI v1.3.1: A ton of bug fixes"
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorImageURL: /img/authors/josh.jpg
layout: "blog-post.html"
permalink: "{{ page | blog_permalink }}"
tags: ["blog"]
ogDescription: The new Feathers UI v1.3.1 update is now officially available on Haxelib
ogImageURL: /blog/img/feathersui-v1.3.1-og.png
---

Today, Feathers UI **v1.3.1** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui/1.3.0). This is a patch release that includes a ton of bug fixes. It's been quite a while since the previous version, and I need a bit more time to finish up documentation for the new components and features that will be included in v1.4.0 later this year. So I decided that it was a good time to push out a smaller update filled with bug fixes to help make your projects more stable.

<img src="/blog/img/feathers-ui-1-3-1-update-release.png">

If you're not aware, [Feathers UI](https://feathersui.com/) is an [open source](https://github.com/feathersui/feathersui-openfl) framework of [graphical user interface (GUI) components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/) — a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux (and even publish your project to the web!) all using the same Haxe codebase.

## What's new in 1.3.1

As mentioned above, this is a patch release that contains only bug fixes, and no new components or features. When you update, you'll get fixes for components calculating their ideal measurements, keyboard focus changes, `NaN` values messing up animated transitions, updating the `enabled` property of sub-components, cleaning up memory leaks, and a whole lot more!

## Install Feathers UI v1.3.1

Feathers UI v1.3.1 may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui 1.3.1
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up supported editors and IDEs.

## Documentation

- The [Feathers UI Getting Started guide](https://feathersui.com/learn/haxe-openfl/getting-started) provides the most essential links for creating your first Feathers UI project. Start there to learn about all of the [UI components](https://feathersui.com/learn/haxe-openfl/ui-components), [layouts](https://feathersui.com/learn/haxe-openfl/layouts-and-containers/), [skins](https://feathersui.com/learn/haxe-openfl/shape-skins/), and the many other features that are available in the framework.
- The [v1.3.1 API Reference](https://api.feathersui.com/v1.3.1/) includes descriptions of all classes, interfaces, enums, utility functions, and the various other APIs available to developers working with Feathers UI.

## Community

- Start a new thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with other developers using Feathers UI and OpenFL.

## How to help the project

Feathers UI is an open source project developed primarily by one individual, [Josh Tynjala](https://joshblog.net). This project doesn't have the deep pockets of a big corporation supporting its development. It's a labor of love by a single developer. If you use any Feathers UI components in your projects, consider a monthly or one-time financial donation to support the continued development of future versions.

Josh has profiles on several different sites that you may used to donate:

- [GitHub Sponsors](https://github.com/sponsors/joshtynjala)
- [Liberapay](https://liberapay.com/joshtynjala)
- [Ko-Fi](https://ko-fi.com/joshtynjala)

Not all companies have a process or budget options for supporting open source projects. In that case, consider purchasing a [Premium Support](https://feathersui.com/premium-support/) contract instead, which more companies accept as a valid expense. You'll not only be able to justify financially supporting the project to your boss, but if you run into any serious issues, you can email Josh directly and get a priority response, guaranteed within two business days.

## Questions or comments?

I've created an [official v1.3.1 discussion thread](https://community.feathersui.com/d/195-feathers-ui-v131-update-for-haxe-and-openfl) in the community forums. Do you love one of the new features? Ran into a strange bug that wasn't in the last release? Head over there to leave a comment about this release!

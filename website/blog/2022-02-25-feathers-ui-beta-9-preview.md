---
title: Feathers UI beta.9 preview build on Haxelib
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Today, Feathers UI **beta.9** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui). This is the **final** beta build before the first stable release of Feathers UI for Haxe and OpenFL. The next build should be _Release Candidate 1 (rc.1)_, which will probably be released in late March or early April. If all goes well, the stable 1.0 release should be in May or June.

![](/blog/img/feathersui-beta-9.png)

[Feathers UI](https://feathersui.com/) is an [open source](https://github.com/feathersui/feathersui-openfl) framework of [graphical user interface (GUI) components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/), a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux… and even publish your project to the web — all using the same Haxe codebase.

> 🚨 Please note that this is a **beta** version of Feathers UI. You may still occasionally encounter minor bugs.

Feathers UI continues to achieve each new milestone thanks the very generous support from the contributors on [Github Sponsors](https://github.com/sponsors/joshtynjala), and everyone who backed the successful [2019 Feathers UI Kickstarter campaign](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl). A big, enthusastic thank you to you all!

## What's new in beta.9

Let's take a look at some of the new features that are included with Feathers UI beta.9.

In particular, [`RouterNavigator`](https://feathersui.com/learn/haxe-openfl/router-navigator/) includes a number of improvements. Let's look at a few.

- [`Route`](https://api.feathersui.com/v1.0.0-beta.9/feathers/controls/navigators/Route.html) now supports URL parameters. You probably wouldn't want to manually add separate routes for all user generated content from your database. That could be hundreds, thousands, or millions of URLs. Instead, your URLs probably follow a particular pattern, and you want to be able to make certain parts of those URLs into dynamic parameters.

  As an example, you might want to allow navigation to individual user profiles. You can specify a parameter starting with the `:` character, so `/users/:id` has an parameter named `id`. If someone navigates to "/users/coolguy12" or "/users/mrs_megan", the `id` parameter would extract the "coolguy12" and "mrs_megan" strings, respectively, and you could use that to load different user data using a single, shared route.

- The new [`Route.withRedirect()`](https://api.feathersui.com/v1.0.0-beta.9/feathers/controls/navigators/Route.html#withRedirect) static method allows developers to specify a route that redirects to another. For example, you might want to redirect from "/users" to "/users/list", or you might change how URLs work in your website, and you want to redirect existing users from their old bookmarks to the new URLs.

- [`RouterNavigator`](https://feathersui.com/learn/haxe-openfl/router-navigator/) now listens for [`TextEvent.LINK`](https://api.openfl.org/openfl/events/TextEvent.html#LINK) If the event text starts with "router:", the router will navigate to the specified URL. For instance, you could pass `<a href="event:router:/users/neo">Thomas Anderson</a>` to the `htmlText` property of a component like [`Label`](https://feathersui.com/learn/haxe-openfl/label/), the [`RouterNavigator`](https://feathersui.com/learn/haxe-openfl/router-navigator/) will detect when that link is clicked and navigate to "/users/neo" automatically.

- The [`Route`](https://api.feathersui.com/v1.0.0-beta.9/feathers/controls/navigators/Route.html) class has a new [`updateState()`](https://api.feathersui.com/v1.0.0-beta.9/feathers/controls/navigators/Route.html#updateState) method that is called when a new route is displayed. The navigator passes a [`RouteState`](https://api.feathersui.com/v1.0.0-beta.9/feathers/data/RouteState.html) object, which contains all of the information about the URL, including parameters, history data, and query arguments parsed as [`URLVariables`](https://api.openfl.org/openfl/net/URLVariables.html).

<div style="text-align:center;"><img src="/blog/img/beta-9-hn-reader-and-todomvc.png" width="550"></div>

Additionally, this build includes two new sample projects.

- [`hn-reader`](https://feathersui.com/samples/haxe-openfl/hn-reader/) displays feeds from the Hacker News website, and it shows how to use many of the new [`RouterNavigator`](https://feathersui.com/learn/haxe-openfl/router-navigator/) features mentioned above. ([Source Code](https://github.com/feathersui/feathersui-openfl/tree/v1.0.0-beta.9/samples/hn-reader))
- [`todomvc`](https://feathersui.com/samples/haxe-openfl/todomvc/) implements the iconic [todomvc.com](https://todomvc.com/) app using Feathers UI. ([Source Code](https://github.com/feathersui/feathersui-openfl/tree/v1.0.0-beta.9/samples/todomvc))

For complete details about what's new in this build, check out the [beta.9 CHANGELOG](https://github.com/feathersui/feathersui-openfl/blob/v1.0.0-beta.9/CHANGELOG.md).

## Install Feathers UI beta.9

Feathers UI beta.9 may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui 1.0.0-beta.9
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up supported editors and IDEs.

## Documentation

- The [Feathers UI Getting Started guide](https://feathersui.com/learn/haxe-openfl/getting-started) provides the most essential links for creating your first Feathers UI project and learning about all of the features and [UI components](https://feathersui.com/learn/haxe-openfl/ui-components) that are available in the framework.
- The [v1.0.0-beta.9 API Reference](https://api.feathersui.com/v1.0.0-beta.9/) includes descriptions of all APIs available on Feathers UI components, layouts, utility functions, and more.

## Community

- Start a thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh and others in the community.

## How to help the project

Want to help keep the lights on and servers running? Make a monthly (or one-time) contribution on [Github Sponsors](https://github.com/sponsors/joshtynjala).

## Questions or comments?

Everyone, I just want to say thank you again for your support. I'm looking forward to hearing what you think of the new Feathers UI so far. If you create anything with this build — even a simple prototype — I'd love it if you could share your experiences (and maybe even a screenshot 🖼!).

I've created an [official beta.9 discussion thread](https://community.feathersui.com/d/83-feathers-ui-beta9-preview-build-on-haxelib-the-final-beta) in the community forums. Head over there to leave a comment!

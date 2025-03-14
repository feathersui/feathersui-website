---
title: "Kickstarter Devlog Roundup: October 2019"
author: Josh Tynjala
authorURL: http://bowlerhat.dev/
authorImageURL: /img/authors/josh.jpg
layout: "blog-post.html"
permalink: "{{ page | blog_permalink }}"
tags: ["blog"]
---

Every three to four weeks, I've been posting [updates on Kickstarter](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts) that summarize what I've been adding to the [Haxe/OpenFL version of Feathers UI](https://feathersui.com/openfl/) recently. To be sure that no one has missed any of these updates, I'm going to occasionally post a quick roundup here on the Feathers UI blog. Let's jump right in…

<!-- truncate -->

- [2019-08-16: Layouts, AssetLoader, and CI](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts/2597300) talks about the first basic layouts for containers, introduces the `AssetLoader` component, and mentions the initial efforts to set up [continuous integration](https://travis-ci.org/feathersui/feathersui-openfl) and [user documentation](https://feathersui.com/learn/haxe-openfl/).

- [2019-09-10: Style metadata, PopUpManager, and PopUpList](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts/2618021) mentions new `@:style` and `@:styleContext` metadata used by some macros to generate code and reduce boilerplate in custom Feathers UI components. It also introduces a `PopUpManager` implementation and the first UI component based on it.

- [2019-10-07: Custom item renderers and mobile scrolling](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts/2645538) introduces a new API for custom item renderers that is more flexible that the AS3/Starling version. Now, ListBox item renderers can be any display object from a `LayoutGroup` to a `Sprite`, and passing data to them is more powerful.

Every few months, I'll try to do another roundup of the Kickstarter updates here on the blog. However, if you'd like to see these updates sooner, [subscribe to my Kickstarter Atom feed](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts.atom).

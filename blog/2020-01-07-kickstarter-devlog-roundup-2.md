---
title: "Kickstarter Devlog Roundup 2: January 2020"
author: Josh Tynjala
authorURL: http://bowlerhat.dev/
authorImageURL: /img/authors/josh.jpg
layout: "blog-post.html"
permalink: "{{ page | blog_permalink }}"
tags: ["blog"]
---

Every three to four weeks, I've been posting [updates on Kickstarter](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts) that summarize what I've been adding to the [Haxe/OpenFL version of Feathers UI](https://feathersui.com/openfl/) recently. To be sure that no one has missed any of these updates, I'm going to occasionally post a quick roundup here on the Feathers UI blog. Let's jump right in…

<!-- truncate -->

- [2019-10-25: Collections, pure JS bundle, touch vs. mouse scrolling, and CI enhancements](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts/2663916) talks about enhancements to `ArrayCollection`, `Scroller`, and `BaseScrollContainer`, looks at some work that I've done to bundle up Feathers UI as a pure JavaScript library, and includes updates about how Feathers UI (and its [API documentation](https://api.feathersui.com/)) is built using [continuous integration](https://travis-ci.org/feathersui/feathersui-openfl).

- [2019-11-14: Collection filtering/sorting, TabBar, Callout, ComboBox, and layouts with percent sizing](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts/2683719) introduces filtering and sorting to `ArrayCollection`, adds the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) class for item renderers, creates the initial implementations of `Callout`, `TabBar`, `ComboBox`, and `VProgressBar`, and adds percentage sizing to `VerticalLayout` and `HorizontalLayout` with a [new sample](https://github.com/feathersui/feathersui-openfl/tree/master/samples/horizontal-layout-percentage-sizing).

- [2019-12-12: Preparing for first alpha build, expanded documentation, and new sample projects](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts/2709199) goes into my plans to focus on documentation and polish for a month or two because I'm preparing to release the **first alpha build** of Feathers UI for Haxe/OpenFL soon. I also introduced the new [calculator](https://github.com/feathersui/feathersui-openfl/tree/master/samples/calculator) and [custom-theme](https://github.com/feathersui/feathersui-openfl/tree/master/samples/custom-theme) samples.

Every few months, I'll try to do another roundup of the Kickstarter updates here on the blog. However, if you'd like to see these updates sooner, [subscribe to my Kickstarter Atom feed](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts.atom).

---
title: "Kickstarter Devlog Roundup: April 2021"
author: Josh Tynjala
authorURL: http://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
layout: "blog-post.html"
permalink: "{{ page | blog_permalink }}"
tags: ["blog"]
---

Every three to four weeks, I've been posting [updates on Kickstarter](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts) that summarize what I've been adding to the [Haxe/OpenFL version of Feathers UI](https://feathersui.com/openfl/) recently. To be sure that no one has missed any of these updates, I'm going to occasionally post a quick roundup here on the Feathers UI blog. Let's jump right in…

<!-- truncate -->

- [2020-11-04: Drawer, HDividedBox and VDividedBox, GridView column resizing, focus management improvements, and ResponsiveGridLayout](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts/3009633) introduces the new [`Drawer`](https://feathersui.com/learn/haxe-openfl/drawer/) slide-out container, [`HDividedBox` and `VDividedBox`](https://feathersui.com/learn/haxe-openfl/divided-box/) containers with a resizing handle between children, and [`ResponsiveGridLayout`](https://api.feathersui.com/v1.0.0-beta.3/feathers/layout/ResponsiveGridLayout.html), which gives you a 12 column layout that can change appearance based on device screen width — similar to Bootstrap and other web frameworks.

    <div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/divided-box/"><img src="/blog/img/beta-1-feathersui-horizontal-divided-box.png" style="width:450px"/></a></div>

- [2021-01-15: Form, FormItem, ButtonBar and another look at what was in beta.2](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts/3074409) introduces the new [`Form` and `FormItem`](https://feathersui.com/learn/haxe-openfl/form/), and [`ButtonBar`](https://feathersui.com/learn/haxe-openfl/button-bar/) components, along with a look back at some things that were in beta.2 but hadn't yet appeared in a devlog.
    <div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/form/"><img src="/blog/img/beta-3-feathersui-form.png" style="width:450px"/></a></div>

- [2021-02-05: Alert, Header, scrolling pixel snapping, and setPadding()](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts/3093080) introduces the new [`Alert`](https://feathersui.com/learn/haxe-openfl/alert/) and [`Header`](https://feathersui.com/learn/haxe-openfl/header/) UI components, along with the new `setPadding()` method that sets `paddingTop`, `paddingRight`, `paddingBottom`, and `paddingLeft` in one method call on any class that has these four properties.

    <div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/alert/"><img src="/blog/img/beta-3-feathersui-alert.png" style="width:450px"/></a></div>

- [2021-04-09: Helping with Lime/OpenFL release, ArrayHierarchicalCollection with filtering/sorting, automated testing with UTest and OpenFL](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts/3155336) introduces the new [`ArrayHierarchicalCollection`](https://api.feathersui.com/current/feathers/data/ArrayHierarchicalCollection.html) class that makes it easier to provide data to [`TreeView`](https://feathersui.com/learn/haxe-openfl/tree-view/) and [`GroupListView`](https://feathersui.com/learn/haxe-openfl/group-list-view/). It also links to a [sample project to run UTest automated tests with OpenFL](https://github.com/joshtynjala/openfl-utest-sample) that I wanted to share with the community.

Every few months, I'll try to do another roundup of the Kickstarter updates here on the blog. However, if you'd like to see these updates sooner, [subscribe to my Kickstarter Atom feed](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts.atom).

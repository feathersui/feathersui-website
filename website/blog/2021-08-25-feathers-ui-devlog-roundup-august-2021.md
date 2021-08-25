---
title: "Kickstarter Devlog Roundup: August 2021"
author: Josh Tynjala
authorURL: http://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Every three to four weeks, I've been posting [updates on Kickstarter](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts) that summarize what I've been adding to the [Haxe/OpenFL version of Feathers UI](https://feathersui.com/openfl/) recently. To be sure that no one has missed any of these updates, I'm going to occasionally post a quick roundup here on the Feathers UI blog. Let's jump right in…

<!-- truncate -->

- [2021-05-21: NumericStepper, app scaling, item renderer accessories, TextInput errorString](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts/3196384) introduces the new [`NumericStepper`](https://feathersui.com/learn/haxe-openfl/numeric-stepper/) component, the [`IScaleManager`](https://api.feathersui.com/current/feathers/core/IScaleManager.html) interface to customize how the [`Application`](https://feathersui.com/learn/haxe-openfl/application/) component scales. Item renderers may now display an "accessory" view on the right side, and the [`TextInput`](https://feathersui.com/learn/haxe-openfl/text-input/) component may display an `errorString` on focus, with a customizable error background skin.

    <div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/numeric-stepper/"><img src="/blog/img/beta-4-feathersui-numeric-stepper.png" style="width:450px"></a></div>

- [2021-07-01: Polishing things up for beta.4, to be released in July](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts/3235298) previews user-customizable values in the [`ComboBox`](https://feathersui.com/learn/haxe-openfl/combo-box/) component, column and header dividers in the [`GridView`](https://feathersui.com/learn/haxe-openfl/grid-view/) component, and the latest updates about `Alert`, `NumericStepper`, `AssetLoader`, and more.

    <div style="text-align:center;"><a href="https://api.feathersui.com/current/feathers/controls/GridView.html#sortableColumns"><img src="/blog/img/beta-4-feathersui-grid-view-sortable-columns.png" style="width:450px"></a></div>

- [2021-08-10: Tiled layouts, page snapping, mask skins, data container keyboard navigation, d-pad focus management, and bug fix bonanza!](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts/3269601) shows off the new "tiled" layouts, including the ability to customize keyboard navigation in components like [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view/) with the new [`IKeyboardNavigationLayout`](https://api.feathersui.com/current/feathers/layout/IKeyboardNavigationLayout.html) interface, along with the ability to customize snapping positions in scrolling containers with the new [`ISnapLayout`](https://api.feathersui.com/current/feathers/layout/ISnapLayout.html) interface.

    <div style="text-align:center;"><a href="https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html"><img src="/blog/img/beta-5-feathersui-tiled-rows-layout.png" style="width:450px"></a></div>

Every few months, I'll try to do another roundup of the Kickstarter updates here on the blog. However, if you'd like to see these updates sooner, [subscribe to my Kickstarter Atom feed](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl/posts.atom).

---
title: OpenFL Plugin for Vite 1.0
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

[Vite](https://vitejs.dev) is a relatively new build tool in the JavaScript and web ecosystem that's growing in popularity, and organizations that use Vite may want to integrate an [OpenFL](https://openfl.org/) or [Feathers UI](https://feathersui.com/) frontend into their existing build process. With that in mind, today, I'm releasing a new [OpenFL Plugin for Vite](https://www.npmjs.com/package/vite-plugin-openfl).

This is just one of many projects that I'm releasing as part of the [Feathers UI v1.0 release week celebration](http://feathersui.com/blog/2022/09/01/feathers-ui-version-1-0-haxe-openfl-stable-release/).

![](/blog/img/vite-plugin-openfl-v1.0.0.png)

Haxe and OpenFL already bundle all of the generated JavaScript into a single minified file already, so why would you want to use Vite? ([or Webpack?](http://feathersui.com/blog/2022/09/09/webpack-openfl-loader-plugin-1-0-0/))

- In an organization already making heavy use of Vite, it is helpful if there's a way to integrate OpenFL into common workflows.
- The Vite ecosystem offers a ton of [plugins](https://vitejs.dev/plugins/) to process and enhance JavaScript, HTML, and CSS files. These tools make it possible to go beyond the default capabilities of the Haxe compiler when targeting the web.
- Many modern teams have switched to [JS modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), which are enhanced by some of Vite's more advanced capabilities, like [code splitting](https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting) and [tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking). With Haxe, you can use a library like [Genes](https://lib.haxe.org/p/genes) to modify the output of the compiler to generate JS modules instead of a classic script — allowing you to take advantage of everything that Vite has to offer.

## Using vite-plugin-openfl v1.0.0

You need to install a few [npm](https://npmjs.org/) dependencies and then configure the plugin in your [_vite.config.js_](https://vitejs.dev/config/) file. Then, build normally with Vite.

First, install dependencies from npm:

```sh
npm install --save-dev vite vite-plugin-openfl
```

Then, configure your a _vite.config.js_ file to use _vite-plugin-openfl_:

```js
import { defineConfig } from "vite";
import openflPlugin from "vite-plugin-openfl";

export default defineConfig({
  plugins: [openflPlugin()],
});
```

Additionally, there are a couple of [sample projects on Github](https://github.com/feathersui/vite-plugin-openfl/tree/master/samples) to help you get started. The [_basic_ project](https://github.com/feathersui/vite-plugin-openfl/tree/master/samples/basic) uses the default output from the Haxe compiler, and the [_genes_ project](https://github.com/feathersui/vite-plugin-openfl/tree/master/samples/genes) uses [Genes](https://lib.haxe.org/p/genes) to generate JS modules and load a code-split module at runtime. There's also a [_rollup_ project](https://github.com/feathersui/vite-plugin-openfl/tree/master/samples/rollup) sample that demonstrates how to uses the plugin with [Rollup](https://rollupjs.org/) instead of Vite (Vite and Rollup have similar APIs, and plugins can be made compatible with both).

## Questions or comments?

If you need some help, or want to give feedback, feel free to create a thread in either the [Feathers UI Community forum](https://community.feathersui.com/) or the [OpenFL Community forum](https://community.openfl.org/).

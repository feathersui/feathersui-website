---
title: Webpack OpenFL Loader 1.0
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

[Webpack](https://webpack.js.org) is a very popular build tool in the JavaScript and web ecosystem, and organizations that use Webpack may want to integrate an [OpenFL](https://openfl.org/) or [Feathers UI](https://feathersui.com/) frontend into their existing build process. With that in mind, today, I'm releasing a new [Webpack OpenFL Loader](https://www.npmjs.com/package/openfl-loader).

This is just one of many projects that I'm releasing as part of the [Feathers UI v1.0 release week celebration](http://feathersui.com/blog/2022/09/01/feathers-ui-version-1-0-haxe-openfl-stable-release/).

![](/blog/img/webpack-openfl-loader-v1.0.0.png)

Haxe and OpenFL already bundle all of the generated JavaScript into a single minified file already, so why would you want to use Webpack? ([or Vite?](http://feathersui.com/blog/2022/09/13/vite-openfl-plugin-1-0-0/))

- In an organization already making heavy use of Webpack, it is helpful if there's a way to integrate OpenFL into common workflows.
- The Webpack ecosystem offers a ton of [plugins](https://webpack.js.org/plugins/) and [loaders](https://webpack.js.org/loaders/) to process and enhance JavaScript, HTML, and CSS files. These tools make it possible to go beyond the default capabilities of the Haxe compiler when targeting the web.
- Many modern teams have switched to [JS modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), which are enhanced by some of Webpack's more advanced capabilities, like [code splitting](https://webpack.js.org/guides/code-splitting/) and [tree shaking](https://webpack.js.org/guides/tree-shaking/). With Haxe, you can use a library like [Genes](https://lib.haxe.org/p/genes) to modify the output of the compiler to generate JS modules instead of a classic script — allowing you to take advantage of everything that Webpack has to offer.

## Using webpack-openfl-loader v1.0.0

See the project [_README.md_](https://github.com/feathersui/webpack-openfl-loader/tree/master/README.md) for complete details, but basically, you need to install a few [npm](https://npmjs.org/) dependencies and then configure the loader in your [_webpack.config.js_](https://webpack.js.org/configuration/) file. Then, build normally with Webpack.

First, install dependencies from npm:

```sh
npm install --save-dev webpack-cli webpack-dev-server openfl-loader
```

Then, configure your a _webpack.config.js_ file to indicate that your OpenFL _project.xml_ is the entry point and should be handled by _openfl-loader_:

```js
module.exports = {
  entry: "./project.xml",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\/project\.xml$/,
        use: [
          {
            loader: "openfl-loader",
          },
        ],
      },
    ],
  },
};
```

Again, check the [_README.md_](https://github.com/feathersui/webpack-openfl-loader/tree/master/README.md) for more details. Additionally, there are a couple of [sample projects on Github](https://github.com/feathersui/webpack-openfl-loader/tree/master/samples) to help you get started. The [_basic_ project](https://github.com/feathersui/webpack-openfl-loader/tree/master/samples/basic) uses the default output from the Haxe compiler, and the [_genes_ project](https://github.com/feathersui/webpack-openfl-loader/tree/master/samples/genes) uses [Genes](https://lib.haxe.org/p/genes) to generate JS modules and load a code-split module at runtime.

## Questions or comments?

If you need some help, or want to give feedback, feel free to create a thread in either the [Feathers UI Community forum](https://community.feathersui.com/) or the [OpenFL Community forum](https://community.openfl.org/).

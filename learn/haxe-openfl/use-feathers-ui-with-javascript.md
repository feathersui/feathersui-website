---
title: Use Feathers UI with JavaScript in web browsers
sidebarTitle: Use with JavaScript
layout: "docs.html"
---

While Feathers UI and OpenFL are written in the [Haxe programming language](https://haxe.org), both projects are available on the [npm package registry](https://www.npmjs.com/), allowing [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) developers to create projects without Haxe.

- [Feathers UI on npm](https://www.npmjs.com/package/feathersui-openfl)
- [OpenFL on npm](https://www.npmjs.com/package/openfl)

## Installation

### Option 1: Install with npm

In a JavaScript project, you can install Feathers UI using [**npm install**](https://docs.npmjs.com/cli/v10/commands/npm-install). OpenFL will be installed automatically as a dependency.

```sh
npm install feathersui-openfl
```

### Option 2: Load from a CDN

If you prefer, you can load Feathers UI and OpenFL directly from the [unpkg CDN](https://unpkg.com/) in any HTML file.

```html
<script src="https://unpkg.com/openfl@9.3.4/dist/openfl.min.js"></script>
<script src="https://unpkg.com/actuate@1.9.0/dist/actuate.min.js"></script>
<script src="https://unpkg.com/feathersui-openfl@1.3.0/dist/feathersui-openfl.min.js"></script>
```

The following sample code demonstrates a simple Hello World project:

```js
class HelloWorld extends feathers.controls.Application {
  constructor() {
    super();

    this.layout = new feathers.layout.AnchorLayout();

    this.button = new feathers.controls.Button();
    this.button.layoutData = feathers.layout.AnchorLayoutData.center();
    this.button.text = "Click Me";
    this.button.addEventListener(
      feathers.events.TriggerEvent.TRIGGER,
      this.button_triggerHandler
    );
    this.addChild(this.button);
  }

  button_triggerHandler = (event) => {
    feathers.controls.TextCallout.show("Hello World", this.button);
  };
}

var stage = new openfl.display.Stage(0, 0, null, null, {
  allowHighDPI: true,
});
document.body.appendChild(stage.element);
stage.addChild(new HelloWorld());
```
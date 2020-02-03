const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const sampleItems = [
  {
    title: "[Calculator](/samples/haxe-openfl/calculator/)",
    content: `A sample calculator application.

<div class="buttonWrapper">
  <a class="button" href="/samples/haxe-openfl/calculator/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-openfl/tree/master/examples/calculator/">Source Code</a>
</div>`
  },
  {
    title: "[Components Explorer](/samples/haxe-openfl/components-explorer/)",
    content: `A listing of all of the UI components available in Feathers UI.

<div class="buttonWrapper">
  <a class="button" href="/samples/haxe-openfl/components-explorer/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-openfl/tree/master/examples/components-explorer/">Source Code</a>
</div>`
  },
  {
    title: "[Custom Theme](/samples/haxe-openfl/custom-theme/)",
    content: `An example of how to create a custom theme that gives custom styles to Feathers UI components.

<div class="buttonWrapper">
  <a class="button" href="/samples/haxe-openfl/custom-theme/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-openfl/tree/master/examples/custom-theme/">Source Code</a>
</div>`
  },
  {
    title:
      "[Percentage Sizing](/samples/haxe-openfl/horizontal-layout-percentage-sizing/)",
    content: `Demonstrates how layouts support sizing UI component based on a percentage of their parent's size.

<div class="buttonWrapper">
  <a class="button" href="/samples/haxe-openfl/horizontal-layout-percentage-sizing/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-openfl/tree/master/examples/horizontal-layout-percentage-sizing/">Source Code</a>
</div>`
  },
  {
    title:
      "[Collection Sorting](/samples/haxe-openfl/list-view-data-provider-collection-sorting/)",
    content: `Sort the items in a collection rendered by the Feathers UI \`ListView\` component.

<div class="buttonWrapper">
  <a class="button" href="/samples/haxe-openfl/list-view-data-provider-collection-sorting/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-openfl/tree/master/examples/list-view-data-provider-collection-sorting/">Source Code</a>
</div>`
  },
  {
    title:
      "[Navigation Data Passing](/samples/haxe-openfl/stack-navigator-pass-data-between-views/)",
    content: `When navigating between views in a \`StackNavigator\` component, data may be passed forward or back.

<div class="buttonWrapper">
  <a class="button" href="/samples/haxe-openfl/stack-navigator-pass-data-between-views/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-openfl/tree/master/examples/stack-navigator-pass-data-between-views/">Source Code</a>
</div>`
  }
];

const Samples = props => {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Samples</h1>
            <p>
              Sample projects built with <a href="/">Feathers UI</a>,{" "}
              <a href="https://openfl.org/">OpenFL</a>, and the{" "}
              <a href="https://haxe.org/">Haxe</a> programming language.
            </p>
          </header>
          <GridBlock contents={sampleItems} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
};
Samples.title = "Samples";

module.exports = Samples;

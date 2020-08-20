const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const samplesBaseUrl = "/samples/haxe-openfl/";
const githubSamplesBaseUrl =
  "https://github.com/BowlerHatLLC/feathersui-openfl/tree/master/samples/";

//screenshots: 720x450
//this.stage.nativeWindow.width = 720 + (this.stage.nativeWindow.width - this.stage.stageWidth);
//this.stage.nativeWindow.height = 450 + (this.stage.nativeWindow.height - this.stage.stageHeight);
const sampleItems = [
  {
    title: `[Calculator](${samplesBaseUrl}calculator/)`,
    image: `${samplesBaseUrl}img/calculator.png`,
    imageAlign: "top",
    imageLink: `${samplesBaseUrl}calculator/`,
    content: `A sample calculator application.

<div class="buttonWrapper">
  <a class="button" href="${samplesBaseUrl}calculator/">Online Demo</a>
  <a class="button" href="${githubSamplesBaseUrl}calculator/">Source Code</a>
</div>`,
  },
  {
    title: `[Collection Sorting](${samplesBaseUrl}list-view-data-provider-collection-sorting/)`,
    image: `${samplesBaseUrl}img/list-view-data-provider-collection-sorting.png`,
    imageAlign: "top",
    imageLink: `${samplesBaseUrl}list-view-data-provider-collection-sorting/`,
    content: `Sort the items in a collection rendered by the Feathers UI \`ListView\` component.

<div class="buttonWrapper">
  <a class="button" href="${samplesBaseUrl}list-view-data-provider-collection-sorting/">Online Demo</a>
  <a class="button" href="${githubSamplesBaseUrl}list-view-data-provider-collection-sorting/">Source Code</a>
</div>`,
  },
  {
    title: `[Components Explorer](${samplesBaseUrl}components-explorer/)`,
    image: `${samplesBaseUrl}img/components-explorer.png`,
    imageAlign: "top",
    imageLink: `${samplesBaseUrl}components-explorer/`,
    content: `A listing of all of the UI components available in Feathers UI.

<div class="buttonWrapper">
  <a class="button" href="${samplesBaseUrl}components-explorer/">Online Demo</a>
  <a class="button" href="${githubSamplesBaseUrl}components-explorer/">Source Code</a>
</div>`,
  },
  {
    title: `[Custom Theme](${samplesBaseUrl}custom-theme/)`,
    image: `${samplesBaseUrl}img/custom-theme.png`,
    imageAlign: "top",
    imageLink: `${samplesBaseUrl}custom-theme/`,
    content: `An example of how to create a custom theme that gives custom styles to Feathers UI components.

<div class="buttonWrapper">
  <a class="button" href="${samplesBaseUrl}custom-theme/">Online Demo</a>
  <a class="button" href="${githubSamplesBaseUrl}custom-theme/">Source Code</a>
</div>`,
  },
  {
    title: `[Login Form](${samplesBaseUrl}login-form/)`,
    image: `${samplesBaseUrl}img/login-form.png`,
    imageAlign: "top",
    imageLink: `${samplesBaseUrl}login-form/`,
    content: `Creates a simple login form with the Feathers UI \`TextInput\` component.

<div class="buttonWrapper">
  <a class="button" href="${samplesBaseUrl}login-form/">Online Demo</a>
  <a class="button" href="${githubSamplesBaseUrl}login-form/">Source Code</a>
</div>`,
  },
  {
    title: `[Percentage Sizing](${samplesBaseUrl}horizontal-layout-percentage-sizing/)`,
    image: `${samplesBaseUrl}img/horizontal-layout-percentage-sizing.png`,
    imageAlign: "top",
    imageLink: `${samplesBaseUrl}horizontal-layout-percentage-sizing/`,
    content: `Demonstrates how layouts support sizing UI component based on a percentage of their parent's size.

<div class="buttonWrapper">
  <a class="button" href="${samplesBaseUrl}horizontal-layout-percentage-sizing/">Online Demo</a>
  <a class="button" href="${githubSamplesBaseUrl}horizontal-layout-percentage-sizing/">Source Code</a>
</div>`,
  },
  {
    title: `[RouterNavigator Data Passing](${samplesBaseUrl}router-navigator-pass-data-between-views/)`,
    image: `${samplesBaseUrl}img/router-navigator-pass-data-between-views.png`,
    imageAlign: "top",
    imageLink: `${samplesBaseUrl}router-navigator-pass-data-between-views/`,
    content: `When navigating between views in a \`RouterNavigator\` component, data may be passed from view to view.

<div class="buttonWrapper">
  <a class="button" href="${samplesBaseUrl}router-navigator-pass-data-between-views/">Online Demo</a>
  <a class="button" href="${githubSamplesBaseUrl}router-navigator-pass-data-between-views/">Source Code</a>
</div>`,
  },
  {
    title: `[StackNavigator Data Passing](${samplesBaseUrl}stack-navigator-pass-data-between-views/)`,
    image: `${samplesBaseUrl}img/stack-navigator-pass-data-between-views.png`,
    imageAlign: "top",
    imageLink: `${samplesBaseUrl}stack-navigator-pass-data-between-views/`,
    content: `When navigating between views in a \`StackNavigator\` component, data may be passed forward or back.

<div class="buttonWrapper">
  <a class="button" href="${samplesBaseUrl}stack-navigator-pass-data-between-views/">Online Demo</a>
  <a class="button" href="${githubSamplesBaseUrl}stack-navigator-pass-data-between-views/">Source Code</a>
</div>`,
  },
];

const Samples = (props) => {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Samples</h1>
            <p>
              Official sample projects built with <a href="/">Feathers UI</a>,{" "}
              <a href="https://openfl.org/">OpenFL</a>, and the{" "}
              <a href="https://haxe.org/">Haxe</a> programming language.
            </p>
          </header>
          <GridBlock contents={sampleItems} layout="threeColumn" />
          <h2>Additional Samples</h2>
          <p>
            The following sample projects have been shared by the Feathers UI
            developer community.
          </p>
          <ul>
            <li>
              <a href="https://github.com/BowlerHatLLC/feathersui-7guis">
                7GUIs for Feathers UI
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
Samples.title = "Samples";

module.exports = Samples;

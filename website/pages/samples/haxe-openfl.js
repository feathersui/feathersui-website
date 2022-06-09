const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const samplesBaseUrl = "/samples/haxe-openfl/";
const githubSamplesBaseUrl =
  "https://github.com/feathersui/feathersui-openfl/tree/v1.0.0-rc.1/samples/";

//screenshots: 720x450
//this.stage.nativeWindow.width = 720 + (this.stage.nativeWindow.width - this.stage.stageWidth);
//this.stage.nativeWindow.height = 450 + (this.stage.nativeWindow.height - this.stage.stageHeight);
const applicationSampleItems = [
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
    title: `[HN Reader](${samplesBaseUrl}hn-reader/)`,
    image: `${samplesBaseUrl}img/hn-reader.png`,
    imageAlign: "top",
    imageLink: `${samplesBaseUrl}hn-reader/`,
    content: `A sample application that demonstrates the <code>RouterNavigator</code> component by displaying Hacker News feeds.

<div class="buttonWrapper">
  <a class="button" href="${samplesBaseUrl}hn-reader/">Online Demo</a>
  <a class="button" href="${githubSamplesBaseUrl}hn-reader/">Source Code</a>
</div>`,
  },
  {
    title: `[TodoMVC](${samplesBaseUrl}todomvc/)`,
    image: `${samplesBaseUrl}img/todomvc.png`,
    imageAlign: "top",
    imageLink: `${samplesBaseUrl}todomvc/`,
    content: `A sample application that recreates the iconic <a href="https://todomvc.com/"/>TodoMVC</a> project.

<div class="buttonWrapper">
  <a class="button" href="${samplesBaseUrl}todomvc/">Online Demo</a>
  <a class="button" href="${githubSamplesBaseUrl}todomvc/">Source Code</a>
</div>`,
  },
];
const featureSampleItems = [
  {
    title: `[Animated Tween Skin](${samplesBaseUrl}animated-tween-skin/)`,
    image: `${samplesBaseUrl}img/animated-tween-skin.png`,
    imageAlign: "top",
    imageLink: `${samplesBaseUrl}animated-tween-skin/`,
    content: `Create a custom skin for a button that includes an animated effect.

<div class="buttonWrapper">
  <a class="button" href="${samplesBaseUrl}animated-tween-skin/">Online Demo</a>
  <a class="button" href="${githubSamplesBaseUrl}animated-tween-skin/">Source Code</a>
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
    title: `[Custom Programmatic Skin](${samplesBaseUrl}custom-programmatic-skin/)`,
    image: `${samplesBaseUrl}img/custom-programmatic-skin.png`,
    imageAlign: "top",
    imageLink: `${samplesBaseUrl}custom-programmatic-skin/`,
    content: `Use code to draw a custom background skin.

<div class="buttonWrapper">
  <a class="button" href="${samplesBaseUrl}custom-programmatic-skin/">Online Demo</a>
  <a class="button" href="${githubSamplesBaseUrl}custom-programmatic-skin/">Source Code</a>
</div>`,
  },
  {
    title: `[Custom Programmatic Skin with States](${samplesBaseUrl}custom-programmatic-skin-with-states/)`,
    image: `${samplesBaseUrl}img/custom-programmatic-skin-with-states.png`,
    imageAlign: "top",
    imageLink: `${samplesBaseUrl}custom-programmatic-skin-with-states/`,
    content: `Create a custom button skin that changes appearance when the mouse is over or down.

<div class="buttonWrapper">
  <a class="button" href="${samplesBaseUrl}custom-programmatic-skin-with-states/">Online Demo</a>
  <a class="button" href="${githubSamplesBaseUrl}custom-programmatic-skin-with-states/">Source Code</a>
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
    title: `[Hello world](${samplesBaseUrl}hello-world/)`,
    image: `${samplesBaseUrl}img/hello-world.png`,
    imageAlign: "top",
    imageLink: `${samplesBaseUrl}hello-world/`,
    content: `Every project needs a "Hello World" to get you started!

<div class="buttonWrapper">
  <a class="button" href="${samplesBaseUrl}hello-world/">Online Demo</a>
  <a class="button" href="${githubSamplesBaseUrl}hello-world/">Source Code</a>
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
          <h2>Application Samples</h2>
          <p>Full sample application projects built using Feathers UI.</p>
          <GridBlock contents={applicationSampleItems} layout="threeColumn" />
          <h2>Feature Samples</h2>
          <p>
            Demonstrations of specific features offered by Feathers UI
            components.
          </p>
          <GridBlock contents={featureSampleItems} layout="threeColumn" />
          <h2>Additional Samples</h2>
          <p>
            The following sample projects have been shared by the Feathers UI
            developer community.
          </p>
          <ul>
            <li>
              <a href="https://github.com/feathersui/puremvc-haxe-feathersui-demos">
                PureMVC Haxe Demos for Feathers UI
              </a>
            </li>
            <li>
              <a href="https://github.com/feathersui/feathersui-7guis">
                7GUIs for Feathers UI
              </a>
            </li>
            <li>
              <a href="https://github.com/teotigraphix/haxe-feathersui-webaudio">
                Feathers UI Web Audio Samples
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

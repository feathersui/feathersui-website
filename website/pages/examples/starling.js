const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const exampleItems = [
  {
    title: "[Components Explorer](/examples/components-explorer/)",
    content: `Try out each of the user interface components included with Feathers, presented in a mobile application.

<div class="buttonWrapper">
  <a class="button" href="/examples/components-explorer/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-starling/tree/master/examples/ComponentsExplorer/">Source Code</a>
</div>`
  },
  {
    title: "[Transitions Explorer](/examples/transitions-explorer/)",
    content: `See all of the animated transitions provided by Feathers for the \`StackScreenNavigator\` and \`ScreenNavigator\` components.

<div class="buttonWrapper">
  <a class="button" href="/examples/transitions-explorer/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-starling/tree/master/examples/TransitionsExplorer/">Source Code</a>
</div>`
  },
  {
    title: "[Magic 8 Chat](/examples/magic-8-chat/)",
    content: `Demonstrates how to create a mobile chat app using the \`TextInput\` and \`List\` controls.

<div class="buttonWrapper">
  <a class="button" href="/examples/magic-8-chat/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-starling/tree/master/examples/Magic8Chat/">Source Code</a>
</div>`
  },
  {
    title: "[Tabs](/examples/tabs/)",
    content: `Displays tabs in different views using the \`TabNavigator\` container.

<div class="buttonWrapper">
  <a class="button" href="/examples/tabs/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-starling/tree/master/examples/Tabs/">Source Code</a>
</div>`
  },
  {
    title: "[Hello World](/examples/hello-world/)",
    content: `The example used to introduce Feathers in the Getting Started tutorial.

<div class="buttonWrapper">
  <a class="button" href="/examples/hello-world/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-starling/tree/master/examples/HelloWorld/">Source Code</a>
</div>`
  },
  {
    title: "[To-Dos](/examples/todos/)",
    content: `A simple app to manage a to-do list.

<div class="buttonWrapper">
  <a class="button" href="/examples/todos/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-starling/tree/master/examples/Todos/">Source Code</a>
</div>`
  },
  {
    title:
      "[StackScreenNavigator Explorer](/examples/stack-screen-navigator-explorer/)",
    content: `Navigate between different screens or menus using the \`StackScreenNavigator\` container, including a history stack to go back to the previous screen.

<div class="buttonWrapper">
  <a class="button" href="/examples/stack-screen-navigator-explorer/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-starling/tree/master/examples/StackScreenNavigatorExplorer/">Source Code</a>
</div>`
  },
  {
    title: "[Layout Explorer](/examples/layout-explorer/)",
    content: `Demonstrates each of the layouts available to \`List\`, \`LayoutGroup\`, and \`ScrollContainer\` with configurable properties.

<div class="buttonWrapper">
  <a class="button" href="/examples/layout-explorer/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-starling/tree/master/examples/LayoutExplorer/">Source Code</a>
</div>`
  },
  {
    title: "[Tile List](/examples/tile-list/)",
    content: `An example that configures the List control with a \`TiledRowsLayout\` and customizes the appearance of the item renderers.

<div class="buttonWrapper">
  <a class="button" href="/examples/tile-list/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-starling/tree/master/examples/TileList/">Source Code</a>
</div>`
  },
  {
    title: "[Drag and Drop](/examples/drag-and-drop/)",
    content: `A simple example of using the Feathers \`DragDropManager\`.

<div class="buttonWrapper">
  <a class="button" href="/examples/drag-and-drop/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-starling/tree/master/examples/DragAndDrop/">Source Code</a>
</div>`
  },
  {
    title: "[Drawers Explorer](/examples/drawers-explorer/)",
    content: `Demos the \`Drawers\` container for mobile-style slide out lists.

<div class="buttonWrapper">
  <a class="button" href="/examples/drawers-explorer/">Online Demo</a>
  <a class="button" href="https://github.com/BowlerHatLLC/feathersui-starling/tree/master/examples/DrawersExplorer/">Source Code</a>
</div>`
  }
];

const StarlingExamples = props => {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Examples (Starling version)</h1>
            <p>
              The online demo apps require the{" "}
              <a href="https://www.adobe.com/go/getflashplayer">
                Adobe Flash Player
              </a>{" "}
              plugin.
            </p>
          </header>
          <GridBlock contents={exampleItems} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
};
StarlingExamples.title = "Starling examples";

module.exports = StarlingExamples;

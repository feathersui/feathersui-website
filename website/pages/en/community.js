const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Community(props) {
  const { config: siteConfig } = props;
  const { baseUrl } = siteConfig;

  const supportLinks = [
    {
      title: "Community Forum",
      content: `Get help, show off your projects, find jobs, and more on the [Feathers UI community forum](https://community.feathersui.com/).`,
      image: `${baseUrl}img/undraw_ideas_s70l.svg`,
      imageAlign: "top",
      imageLink: "https://community.feathersui.com/"
    },
    {
      title: "Discord",
      content: `Chat with fellow developers in real time on the [Feathers UI Discord server](https://discord.feathersui.com/).`,
      image: `${baseUrl}img/discord-logo-color.svg`,
      imageAlign: "top",
      imageLink: "https://discord.feathersui.com/"
    },
    {
      title: "Stack Overflow",
      content: `Use the [\`feathersui\`](https://stackoverflow.com/questions/tagged/feathersui) tag when you ask questions on [Stack Overflow](https://stackoverflow.com/).`,
      image: `${baseUrl}img/stack-overflow-icon.svg`,
      imageAlign: "top",
      imageLink: "https://stackoverflow.com/questions/tagged/feathersui"
    }
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Join the Feathers UI community</h1>
          </header>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Community;

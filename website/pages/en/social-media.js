const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Community(props) {
  const { config: siteConfig } = props;
  const { baseUrl } = siteConfig;

  const supportLinks = [
    {
      title: "[Twitter](https://twitter.com/feathersui)",
      content: `Follow [@feathersui](https://twitter.com/feathersui) on Twitter to get tweets about the latest news and announcements.
<div class="buttonWrapper">
  <a class="button" href="https://twitter.com/feathersui">Follow on Twitter</a>
</div>`,
      image: `${baseUrl}img/twitter-logo.png`,
      imageAlign: "top",
      imageLink: "https://twitter.com/feathersui"
    },
    {
      title: "[Facebook](https://facebook.com/feathersui)",
      content: `Like [the Feathers UI page](https://facebook.com/feathersui) on Facebook to stay up to date — right in your news feed.
<div class="buttonWrapper">
  <a class="button" href="https://facebook.com/feathersui">Like on Facebook</a>
</div>`,
      image: `${baseUrl}img/facebook-logo.png`,
      imageAlign: "top",
      imageLink: "https://facebook.com/feathersui"
    }
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Follow Feathers UI on social media</h1>
          </header>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Community;

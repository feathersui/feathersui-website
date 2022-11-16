const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Community(props) {
  const { config: siteConfig } = props;
  const { baseUrl } = siteConfig;

  const socialLinks = [
    {
      title: "[Twitter](https://twitter.com/feathersui)",
      content: `Follow [@feathersui](https://twitter.com/feathersui) on Twitter to get tweets about the latest news and announcements.
<div class="buttonWrapper">
  <a class="button" href="https://twitter.com/feathersui">Follow on Twitter</a>
</div>`,
      image: `${baseUrl}img/twitter-logo.png`,
      imageAlign: "top",
      imageLink: "https://twitter.com/feathersui",
    },
    {
      title: "[Mastodon](https://fosstodon.org/@feathersui)",
      content: `Follow [@feathersui@fosstodon.org](https://fosstodon.org/@feathersui) on Mastodon to get informed about the latest news and announcements.
<div class="buttonWrapper">
  <a class="button" href="https://fosstodon.org/@feathersui">Follow on Mastodon</a>
</div>`,
      image: `${baseUrl}img/mastodon-logo.png`,
      imageAlign: "top",
      imageLink: "https://fosstodon.org/@feathersui",
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Follow Feathers UI on social media</h1>
          </header>
          <GridBlock contents={socialLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Community;

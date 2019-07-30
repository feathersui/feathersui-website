const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const MarkdownBlock = CompLibrary.MarkdownBlock;

const ThankYou = props => (
  <div className="mainContainer">
    <Container>
      <div className="prose">
        <MarkdownBlock>
          {`
# Thank you for the donation!

It's the amazing community members like you that make Feathers UI so fun to work on every day.

## I wish I could thank you in person

With your help, Feathers UI will continue to be the best library that I know how to build. The community has provided so much great feedback and support, and Feathers UI wouldn't be where it is today without that kind of enthusiasm. Thank you so much, and happy coding!

Josh Tynjala, creator of Feathers UI`}
        </MarkdownBlock>
      </div>
    </Container>
  </div>
);
ThankYou.title = "Thank you for your donation!";

module.exports = ThankYou;

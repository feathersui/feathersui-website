const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const MarkdownBlock = CompLibrary.MarkdownBlock;

const Contact = (props) => (
  <div className="mainContainer documentContainer">
    <Container>
      <div className="prose">
        <MarkdownBlock>
          {`
# Contact us
        
A few different ways to get in touch.

## Need some help?

Do you need some help troubleshooting, do you have any questions about how to use Feathers UI? Head on over to [the community forum](https://community.feathersui.com/) and start a new thread, or you can ask the community on [Discord](https://discord.feathersui.com/).

- [Community Forum](https://community.feathersui.com/)
- [Discord chat](https://discord.feathersui.com/)

## Report bugs or request new features

Did you find a bug? Does it seem like a useful feature is missing? Create an issue on Github.

- [feathersui-starling Issues](https://github.com/feathersui/feathersui-starling/issues)
- [feathersui-openfl Issues](https://github.com/feathersui/feathersui-openfl/issues)`}
        </MarkdownBlock>
      </div>
    </Container>
  </div>
);
Contact.title = "Contact us";

module.exports = Contact;

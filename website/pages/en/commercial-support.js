const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const MarkdownBlock = CompLibrary.MarkdownBlock;

const CommercialSupport = (props) => (
  <div className="mainContainer documentContainer">
    <Container>
      <div className="prose">
        <MarkdownBlock>
          {`
# Commercial support for Feathers UI

While [Feathers UI](/) is free and open source, businesses and enterprises can
gain additional benefits by signing up for a commercial support contract.

- Priority email support (guaranteed response within two business days)
- Access to private VIP forum and chat communities
- Sponsor logo on the feathersui.com website
        
For more details, contact **sales@feathersui.com**.
`}
        </MarkdownBlock>
      </div>
    </Container>
  </div>
);
CommercialSupport.title = "Commercial support";

module.exports = CommercialSupport;

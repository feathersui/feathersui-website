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
# Premium support for Feathers UI

While the core [Feathers UI](/) framework is free and open source, businesses and enterprises can
gain additional benefits by signing up for a premium commercial support contract.

- Access to core framework developers
- Priority email support (guaranteed response within two business days)
- Exclusive VIP forum and chat communities
- Sponsor logo on the feathersui.com website
        
For more details, contact **sales@feathersui.com**.
`}
        </MarkdownBlock>
      </div>
    </Container>
  </div>
);
CommercialSupport.title = "Premium support";

module.exports = CommercialSupport;

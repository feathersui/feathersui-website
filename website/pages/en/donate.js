const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const MarkdownBlock = CompLibrary.MarkdownBlock;

const Donate = props => (
  <div className="mainContainer documentContainer">
    <Container>
      <div className="prose">
        <MarkdownBlock>
          {`
# Donate to Feathers UI

If Feathers UI has saved you time or money, please consider a donation to show your appreciation. Even if it's just enough for a beer, your support helps me continue to improve Feathers UI with new features, more extensive documentation, and timely forum support right from the source. Cheers!

Josh Tynjala, creator of Feathers UI`}
        </MarkdownBlock>

        <form
          id="donate"
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="RKMKQKP678CWY" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
            border="0"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
    </Container>
  </div>
);
Donate.title = "Donate to the Feathers UI open source project";

module.exports = Donate;

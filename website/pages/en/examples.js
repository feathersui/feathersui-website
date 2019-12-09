const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

const Examples = props => {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl } = siteConfig;
  const langPart = `${language ? `${language}/` : ""}`;
  const pageUrl = doc => `${baseUrl}${langPart}${doc}`;

  return (
    <div className="mainContainer documentContainer">
      <Container>
        <div className="prose">
          <h1>Examples</h1>
          <p>
            Sample projects built with the <a href="/">Feathers UI</a> open
            source UI components.
          </p>
        </div>
        <div className="prose">
          <h2>ActionScript / Starling</h2>
          <ul>
            <li>
              <a href={pageUrl("examples/starling")}>
                Feathers Examples (Starling version)
              </a>
            </li>
          </ul>
          <h2>Haxe / OpenFL (preview)</h2>
          <ul>
            <li>
              <a href="https://github.com/BowlerHatLLC/feathersui-openfl/tree/master/examples/">
                Feathers Examples (OpenFL version)
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

module.exports = Examples;

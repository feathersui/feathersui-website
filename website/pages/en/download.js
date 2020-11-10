const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

const Download = (props) => {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  return (
    <div className="mainContainer documentContainer">
      <Container>
        <div className="prose">
          <h1>Downloads</h1>
          <p>
            Get the latest version of all <a href="/">Feathers UI</a> open
            source projects.
          </p>
        </div>
        <div className="prose">
          <h2>Haxe / OpenFL (preview)</h2>
          <ul>
            <li>
              <a href={docUrl("haxe-openfl/installation")}>
                Feathers UI for Haxe and OpenFL
              </a>
            </li>
          </ul>
          <h2>ActionScript / Starling (legacy)</h2>
          <ul>
            <li>
              <a href={docUrl("as3-starling/installation")}>
                Feathers (Starling version)
              </a>
            </li>
            <li>
              <a href={docUrl("as3-starling/sdk/installation-instructions")}>
                Feathers SDK Installation
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

module.exports = Download;

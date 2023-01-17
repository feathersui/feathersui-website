// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const path = require("path");

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "Red Minnow",
    image: "/img/sponsors/redminnow.png",
    infoLink: "https://redminnow.com/",
    pinned: true,
    github: true,
  },
  {
    caption: "InnoGames",
    image: "/img/sponsors/innogames.png",
    infoLink: "https://www.innogames.com/",
    pinned: true,
    kickstarter: true,
  },
  {
    caption: "Spellweaver TCG",
    image: "/img/sponsors/spellweaver.png",
    infoLink: "https://spellweaver-tcg.com",
    pinned: true,
    kickstarter: true,
  },
  {
    caption: "Moonshine IDE",
    // You will need to prepend the image path with your baseUrl
    // if it is not "/", like: "/test-site/img/image.jpg".
    image: "/img/sponsors/moonshine-ide.png",
    infoLink: "https://moonshine-ide.com/",
    pinned: true,
    kickstarter: true,
  },
];

const siteConfig = {
  title: "Feathers UI", // Title for your website.
  tagline:
    "Cross-platform user interface components for creative frontend projects",
  url: "https://feathersui.com", // Your website URL
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: "https://facebook.github.io",
  //   baseUrl: "/test-site/",

  // Used for publishing and more
  projectName: "feathersui-website",
  organizationName: "BowlerHatLLC",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: "JoelMarcey"

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "haxe-openfl/getting-started", label: "Docs" },
    { href: "https://api.feathersui.com/", label: "API" },
    { page: "showcase", label: "Showcase" },
    { blog: true, label: "Blog" },
    { page: "community", label: "Community" },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/feathers-ui-logo-black.png",
  footerIcon: "img/feathers-ui-icon-color.png",
  favicon: "img/favicon.png",

  /* Colors for website */
  colors: {
    primaryColor: "#f08209",
    secondaryColor: "#ffc28c",
    headerColor: "#ffa759",
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Bowler Hat LLC`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "agate",
  },

  enableUpdateTime: true,
  editUrl:
    "https://github.com/feathersui/feathersui-website/edit/master/website/docs/",

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/feathers-openfl-haxe-og.png",
  twitterImage: "img/feathers-openfl-haxe-og.png",

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/feathersui/feathersui-website",

  twitterUsername: "feathersui",
  docsUrl: "learn",
  customDocsPath: "website/docs",
  disableHeaderTitle: true,
  docsSideNavCollapsible: true,
  separateCss: [
    `/static/api-reference/`,
    `\\static\\api-reference\\`,
    `/static/openfl/`,
    `\\static\\openfl\\`,
    `/static/examples/`,
    `\\static\\examples\\`,
  ],
  gaTrackingId: "UA-34854617-1",
};

module.exports = siteConfig;

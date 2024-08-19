const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginToc = require("eleventy-plugin-toc");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "static/root": ".",
    "static/api-reference": "api-reference",
    "static/beta": "beta",
    "static/blog": "blog",
    "static/commercial-support": "commercial-support",
    "static/documentation": "documentation",
    "static/download": "download",
    "static/examples": "examples",
    "static/img": "img",
    "static/fnt": "fnt",
    "static/learn": "learn",
    "static/openfl": "openfl",
    "static/samples": "samples",
    "static/sdk": "sdk",
    "static/ui-components": "ui-components",
    "static/js": "js",
  });
  eleventyConfig.addPlugin(pluginToc);
  eleventyConfig.setLibrary(
    "md",
    markdownIt({ html: true }).use(markdownItAnchor)
  );
  eleventyConfig.addFilter("dateToISOString", function (date) {
    return date.toISOString();
  });
  eleventyConfig.addLiquidFilter(
    "rss_getNewestCollectionItemDate",
    pluginRss.getNewestCollectionItemDate
  );
  eleventyConfig.addLiquidFilter("rss_dateToRfc3339", pluginRss.dateToRfc3339);
  eleventyConfig.addLiquidFilter("rss_dateToRfc822", pluginRss.dateToRfc822);
  eleventyConfig.addLiquidFilter("rss_absoluteUrl", pluginRss.absoluteUrl);
  eleventyConfig.addLiquidFilter(
    "rss_htmlToAbsoluteUrls",
    pluginRss.convertHtmlToAbsoluteUrls
  );
  eleventyConfig.addFilter("getSliceOfCollectionItems", function (value) {
    return value.slice(0, Math.min(value.length, 3));
  });
  eleventyConfig.addFilter("htmlToExcerpt", (post) => {
    const index = post.lastIndexOf(" ", 325);
    if (index < 0) {
      return post;
    }
    return post.substr(0, index) + "...";
  });
  eleventyConfig.addFilter("utc_date", (date) => {
    return date.toUTCString();
  });
  // for debugging purposes
  eleventyConfig.addFilter("log_value", (value) => {
    console.log(value, typeof value);
    return value;
  });
  eleventyConfig.addFilter("utc_date", (/** @type Date */ date) => {
    var pageUtcDate = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
      date.getUTCMilliseconds()
    );
    return pageUtcDate;
  });
  eleventyConfig.addFilter("blog_permalink", (page) => {
    const /** @type Date */ pageDate = page.date;
    var pageUtcDate = new Date(
      pageDate.getUTCFullYear(),
      pageDate.getUTCMonth(),
      pageDate.getUTCDate(),
      pageDate.getUTCHours(),
      pageDate.getUTCMinutes(),
      pageDate.getUTCSeconds()
    );
    const year = pageUtcDate.getFullYear();
    const month = (pageUtcDate.getMonth() + 1).toString().padStart(2, "0");
    const date = pageUtcDate.getDate().toString().padStart(2, "0");
    return `/blog/${year}/${month}/${date}/${page.fileSlug}/`;
  });
  eleventyConfig.addShortcode(
    "create_blog_sidebar",
    function (/** @type any[] */ posts) {
      posts = posts.slice().reverse();
      let result = `<ul class="sidebar">`;
      result += `<li>Recent Posts<ul>`;
      const length = Math.min(posts.length, 5);
      for (let i = 0; i < length; i++) {
        const post = posts[i];
        result += `<li><a${
          post.fileSlug === this.page.fileSlug ? ' class="current-page"' : ""
        } href="${post.url}">${post.data.title}</a></li>`;
      }
      result += `</ul></li>`;
      result += `<li>Subscribe to Feed<ul>`;
      result += `<li><a href="/blog/feed.xml">RSS</a></li>`;
      result += `<li><a href="/blog/atom.xml">Atom</a></li>`;
      result += `</ul></li>`;
      result += `</ul>`;
      return result;
    }
  );
  eleventyConfig.addShortcode(
    "create_docs_sidebar",
    function (sidebar, /** @type any[] */ all) {
      let sectionName = null;
      if (this.page.filePathStem.endsWith("/index")) {
        sectionName = this.page.filePathStem.substring(
          1,
          this.page.filePathStem.length - 6
        );
      } else {
        sectionName = this.page.filePathStem.substring(
          1,
          this.page.filePathStem.length - this.page.fileSlug.length - 1
        );
      }
      if (!(sectionName in sidebar)) {
        return null;
      }
      const section = sidebar[sectionName];
      let result = `<ul class="sidebar">`;
      for (var category in section) {
        result += generateSidebarCategory(
          category,
          sectionName,
          section[category],
          this.page,
          all
        );
      }
      result += `</ul>`;
      return result;
    }
  );
  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async function (inputContent) {
      return async () => {
        return inputContent;
      };
    },
  });
  eleventyConfig.addTransform("rewritedotmd", function (content) {
    if (
      this.inputPath &&
      this.inputPath.startsWith("./") &&
      this.inputPath.endsWith(".md") &&
      this.outputPath &&
      this.outputPath.endsWith(".html")
    ) {
      const lastSlashIndex = this.inputPath.lastIndexOf("/");
      const startURL = this.inputPath.substring(1, lastSlashIndex + 1);
      const lastLastSlashIndex = this.inputPath.lastIndexOf(
        "/",
        lastSlashIndex - 1
      );
      const startURLParent =
        lastLastSlashIndex !== -1
          ? this.inputPath.substring(1, lastLastSlashIndex + 1)
          : startURL;
      return content
        .replace(
          /<a( class="[\w\-]+")? href="\.\/([\w\-\/]+)\.md(#[\w+\-]+)?"/g,
          `<a$1 href="${startURL}$2/$3"`
        )
        .replace(
          /<a( class="[\w\-]+")? href="\.\.\/([\w\-\/]+)\.md(#[\w+\-]+)?"/g,
          `<a$1 href="${startURLParent}$2/$3"`
        )
        .replace("/index/", "/");
    }
    return content;
  });
  eleventyConfig.addTransform("htmlmin", function (content) {
    if (this.outputPath && this.outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
      });
    }
    return content;
  });
  eleventyConfig.addTransform("cssmin", function (content) {
    if (this.outputPath && this.outputPath.endsWith(".css")) {
      return new CleanCSS({}).minify(content).styles;
    }
    return content;
  });
};

function generateSidebarCategory(categoryName, categoryRoot, items, page, all) {
  var result = `<li>${categoryName}`;
  result += `<ul>`;
  for (var item of items) {
    if (item.type === "subcategory") {
      result += generateSidebarCategory(
        item.label,
        categoryRoot,
        item.ids,
        page,
        all
      );
    } else {
      const link = generateSidebarLink(
        "/" + categoryRoot + "/" + item,
        page,
        all
      );
      if (link) {
        result += link;
      }
    }
  }
  result += `</ul></li>`;
  return result;
}

function generateSidebarLink(item, page, all) {
  for (var other of all) {
    if (item === other.filePathStem) {
      const title = other.data.sidebarTitle
        ? other.data.sidebarTitle
        : other.data.title;
      return `<li><a${
        other.filePathStem === page.filePathStem ? ' class="current-page"' : ""
      } href="${other.url}">${title}</a></li>`;
    }
  }
  return null;
}

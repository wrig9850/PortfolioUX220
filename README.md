# ES6 Static Site Renderer ... With Markdown

Simplest way that I could think of to generate a static site with ES6 templates.

## Quick Start

With [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

```
npm install
npm start

```

Right click over `index.html` and Open with Live Server.

## How to include your own content

The basic format of a page is a .js file with the same name as the .html file that you want to have generated. For instance:

``` index.js

const Page = require("./partials/Page");

module.exports = class extends Page {
    render(sPage) {
        return `
${this.requireMarkdown('./pages/index.md`)}
        `;
    }
}

```

In the above case the generated html lacks the structure of a proper .html file. There is a more complete example of a multi-page site in this repository.

Of course this could also be used for a single page site just by using 1 template.
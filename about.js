const Page = require("./partials/Page");
const Head = require("./partials/Head");
const Header = require("./partials/Header");
const Nav = require("./partials/Nav");
const Footer = require("./partials/Footer");

module.exports = class extends Page {
    render(sPage) {
        return `
<!DOCTYPE html>
<html lang="en" class="${sPage}">
    <head>
    ${new Head().render()}
    <title>About</title>
    </head>
    <body>
    ${new Header().render()}
    ${new Nav().render()}
    ${this.requireMarked('pages/about.md')}
    ${new Footer().render()}
    </body>
</html>
        `;
    }
}
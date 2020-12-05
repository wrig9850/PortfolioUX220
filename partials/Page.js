const marked = require('marked');
const fs = require('fs')

module.exports = class{
    constructor(){
        this.sName = "Richard Hildred";
    }
    requireMarked(sFname){
        const sDir = process.cwd()
        const sContents = fs.readFileSync(`${sDir}/${sFname}`, 'utf8');
        return marked(sContents);
    }
}

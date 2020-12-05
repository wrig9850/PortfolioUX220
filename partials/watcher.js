fs = require('fs');

const sDir = process.cwd();

const fGenerate = () => {
  fs.readdirSync(sDir).forEach((sFile) => {
    const oStat = fs.statSync(`${sDir}/${sFile}`);
    let aFile = sFile.split('.');
    if (!oStat.isDirectory() && aFile.pop() === 'js') {
      // Only do .js files in the current folder
      const sPage = aFile.join('.');
      aFile.push('html');
      const sOut = aFile.join('.');
      try {
        const Page = require(`${sDir}/${sFile}`);
        // new Page().render(sPage) is the business. You can see how it works in the sample js files
        fs.writeFileSync(`${sDir}/${sOut}`, new Page().render(sPage), { mode: 0o644 });
      } catch (err) {
        // An error occurred
        console.error(err);
      }
    }
  });

}

// generate all html from all js files in the project folder the first time
fGenerate();
// generate in 3 seconds if there is a change

fWatcher = (sNewDir)=>{
  const stats = fs.statSync(`${sDir}/index.html`);
  fs.readdirSync(sNewDir).forEach((sFile) => {
    const fStats = fs.statSync(`${sNewDir}/${sFile}`);
    if(fStats.isDirectory()){
      fWatcher(`${sNewDir}/${sFile}`);
    } else if(fStats.mtimeMs > stats.mtimeMs){
      fGenerate();
      console.log(`change to ${sNewDir}/${sFile}`);
      return;      
    }
  });
}

setInterval(()=>{
  fWatcher(sDir);
}, 3000);

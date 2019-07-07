const fs = require('fs');
const path = require('path');
const folderPath = '/Downloads/Video';

const isFile = fileName => {
  // console.log(fs.lstatSync(fileName))
  return fs.lstatSync(fileName).isFile()
}

const isSrt = fileName => {
  return (path.extname(fileName) === '.srt')
}

const list = fs.readdirSync(folderPath).map(item => {

  return path.join(folderPath, item)
})
.filter(isFile)
.filter(isSrt)


console.log(list);

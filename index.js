const fs = require('fs');
const express = require('express');
const process = require('process');
const path = require('path');
const folderPath = '/Downloads/Video';

const port = 3000;

const app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req,res) => res.render('index'))

app.get('/files', (req,res) => {
  res.send('wheee')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// const isFile = fileName => {
//   // console.log(fs.lstatSync(fileName))
//   return fs.lstatSync(fileName).isFile()
// }

// const isSrt = fileName => {
//   return (path.extname(fileName) === '.srt')
// }

// const list = fs.readdirSync(folderPath).map(item => {
  
//   return path.join(folderPath, item)
// })
// .filter(isFile)
// .filter(isSrt)

// if(process.argv.includes('rename')){
//   console.log('Renaming files');
  
// }

// console.log(list);

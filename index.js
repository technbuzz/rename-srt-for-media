const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const process = require('process');
const path = require('path');
const folderPath = '/Downloads/Video';

const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'));

const isFile = fileName => {
  // console.log(fs.lstatSync(fileName))
  return fs.lstatSync(fileName).isFile();
};

const isSrt = fileName => {
  return path.extname(fileName) === '.srt';
};

app.post('/files', (req, res) => {
  const { folderName } = req.body;
  const list = fs
    .readdirSync(folderPath)
    .map(item => {
      return path.join(folderPath, item);
    })
    .filter(isFile)
    .filter(isSrt);

  res.json(list);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// if(process.argv.includes('rename')){
//   console.log('Renaming files');

// }

// console.log(list);

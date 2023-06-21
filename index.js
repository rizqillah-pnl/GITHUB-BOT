const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const FILE_PATH = './data.json';
let i = 1;

const makeCommit = n => {
  if (n == 0) return simpleGit().push();

  const x = Math.floor(Math.random() * 7);
  const y = Math.floor(Math.random() * 365);
  // Atur Tahun Disini
  const minY = Math.floor(Math.random() * 1);
  const DATE = moment().subtract(minY, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format();

  // console.log(DATE);
  const data = {
    date: DATE
  }
  console.log(`${i++} |  ${DATE}`);

  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, makeCommit.bind(this, --n));
  });
}

makeCommit(500);



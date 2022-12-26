const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
// import {random} from 'random';
const FILE_PATH = './data.json';

const makeCommit = n => {
  if(n==0) return simpleGit().push();

  const x = 20;
  const y = 8;
  const DATE = moment().subtract(1, 'y').add(1,'d').add(x, 'w').add(y,'d').format();

  const data = {
    date: DATE
  }
  console.log(DATE);

  jsonfile.writeFile(FILE_PATH, data, ()=>{
    simpleGit().add([FILE_PATH]).commit(DATE, {'--date':DATE},makeCommit.bind(this, n--));
  });
}

makeCommit(2);



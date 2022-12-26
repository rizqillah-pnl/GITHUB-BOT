const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
// import {random} from 'random';
const FILE_PATH = './data.json';

const makeCommit = n => {
  if(n==0) return simpleGit().push();
  const res = [jsonfile.readFile(FILE_PATH)];

  const x = Math.floor(Math.random()*54);
  const y = Math.floor(Math.random()*12);
  const DATE = moment().subtract(1, 'y').add(1,'d').add(x, 'w').add(y,'d').format();

  const data = {
    date: DATE
  }
  console.log(DATE);

  res.push(data);

  jsonfile.writeFile(FILE_PATH, res, ()=>{
    simpleGit().add([FILE_PATH]).commit(DATE, {'--date':DATE},makeCommit.bind(this, --n));
  });
}

makeCommit(2);



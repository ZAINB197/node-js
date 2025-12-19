const path = require ('path')
const fs = require ('fs').promises


const myPath = 'D:\\node.js\\assignments\\assignment2.js'


console.log(__dirname);
console.log(__filename);

console.log(path.basename(myPath));


const formatPath = {
  root: '',
  dir: './',
  base: 'assignment2.js',
  ext: '.js',
  name: 'assignment2'
}

console.log(path.format(formatPath));

console.log(path.extname(myPath));


console.log(path.parse(myPath));

console.log(path.isAbsolute(myPath));


const x = '.\\index.js'

const y = 'D:\\node.js'

console.log(path.join(x,y));

console.log(path.relative(y,x));

from = 'D:\\SQL2025\\CTP2.0\\Evaluation_ENU'
to = 'D:\\SQL2025\\CTP2.0\\RulesEng'

console.log(path.join(from,to));

let deleteFile = async (del)=>{
    try {
        await fs.unlink(del);
        console.log("file is deleted!");
        
    }catch (err) {
        console.log("error occurred, file is not deleted");
        
    }
}

deleteFile ('./toDelete.txt')


let createFile = (create) => {
    try {
        fs.mkdirSync(create)
        console.log("success!");
        
    }catch (err) {
        console.log("error");
        
    }
}

createFile ('.\\newFile')







// const path = require ('path');
// const fs = require ('fs')
// const { EventEmitter } = require('events');
// const events = new EventEmitter()
// const os = require ('os')


// const myPath = 'D:\\node.js\\assignments\\assignment2.js'

// //ques 1
// console.log(__dirname);
// console.log(__filename);

// //ques 2
// console.log(path.basename(myPath));

// //ques 3
// const formatPath = {
//   root: '',
//   dir: './',
//   base: 'assignment2.js',
//   ext: '.js',
//   name: 'assignment2'
// }

// console.log(path.format(formatPath));

// //ques 4
// console.log(path.extname(myPath));

// //ques 5
// console.log(path.parse(myPath));

// //ques 6
// console.log(path.isAbsolute(myPath));


// const x = '.\\index.js'
// const y = 'D:\\node.js'

// // ques 7
// console.log(path.join(x,y));

// //ques 8
// console.log(path.relative(y,x));

// //ques 9
// from = 'D:\\SQL2025\\CTP2.0\\Evaluation_ENU'
// to = 'D:\\SQL2025\\CTP2.0\\RulesEng'
// console.log(path.join(from,to));


// //ques 10
// let deleteFile = async (del)=>{
//     try {
//         await fs.unlink(del);
//         console.log("file is deleted!");
        
//     }catch (err) {
//         console.log("error occurred, file is not deleted");
        
//     }
// }

// deleteFile ('./toDelete.txt')


// //ques 11
// let createFile = (create) => {
//     try {
//         fs.mkdirSync(create)
//         console.log("success!");
        
//     }catch (err) {
//         if (err.code === 'EEXIST'){
//             console.log('this directory aleardy exists');
//         }else {
//         console.log("error");
//         }
//     }
// }

// createFile ('.\\newDir')


// //ques 12
// events.on ('start' , (msg)=> {
//     console.log(msg);
    
// })
// events.emit('start' , 'welcome, first event')


// //ques 13
// events.on ("login" , (userName)=>{
//     console.log(`User logged in is ${userName}`);
    
// })

// events.emit ('login', 'ahmed')


// //ques 14
// let notes = (noteFile)=>{
//     try {
//         const readTest = fs.readFileSync(noteFile,'utf-8')
//         console.log(`here is your file "${readTest}"`);        
//     } catch (err) {
//         console.log("can not read this file");
        
//     }  
// }

// notes ('.\\note.txt')


// //ques 15
// const fs = require ('fs').promises
// let writeTry = async (file,data) => {
//     try {
//        await fs.writeFile(file, data)
//         console.log("async save");
        
//     }catch (err){
//         console.log('error data is not written');
        
//     }
// }

// writeTry ('.\\write.txt', 'well, data is written')


// //ques 16
// const dirName = '.\\newDir'

// if (fs.existsSync(dirName)) {
//     console.log('Directory Exists!');
    
// } else {
//     console.log('Directory does not exists');
    
// }


// //ques 17
// let plat = os.platform();
// let arch = os.arch();

// console.log(`operating system is ${plat}`);
// console.log(`CPU architecture ${arch}`);


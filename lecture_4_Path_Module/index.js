import path from "path";

//join two or more file
// index.py, jafar.java here only join path not code

const fullPath = path.join("./path", "index.py", "jafar.java");
// console.log("file join = ", fullPath);

//check absolute path
const absolute = path.resolve();
// console.log("we are currently working on = ",absolute);

//extension name 

const extname = path.extname('resume.doxc')

console.log("extname = ",extname)

if(extname == '.pdf'){
    console.log("ok")
}else{
    console.log("not supported")
}


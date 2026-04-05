import { readFile, writeFile, appendFile, mkdir } from 'fs/promises';

//1. Read file
const read_file = async (fileName) => {
    const data = await readFile(fileName, 'utf-8');
    console.log(data);

}
// read_file('sample.txt');

//2. Create File
const write_file = async (fileName, content) => {
    await writeFile(fileName, content);
    console.log("File created successfully...");
    
}
// write_file("test.py", "This is a testing file");
// write_file("App.jsx", "This is a react file");

//3. add content to file
const append_file = async (fileName, content) =>{
    await appendFile(fileName, content);
    console.log("New data added successfully...");
    
}
// append_file('App.jsx', " This is a new added data.")

// 4. create folder

const create_file = async (dir) =>{
    await mkdir(dir, {recursive: true});
}
// create_file("components");
// create_file("src/component/java");
// create_file("src/jafar");

//for creating this type of file (src/component/java) we need to enable "{recursive: true}"





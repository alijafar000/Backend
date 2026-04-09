import express from 'express';
import path from 'path';

const app = express();

const product = [
    { title: "I-Phone 18", price: 80000 },
    { title: "Realme Narzo", price: 18000 },
    { title: "One plus", price: 40000 },
]
//Send response JSON
app.get('/', (req, res) => {
    res.json({
        messege: "fetched all products",
        jo_chahe: "de sakte hai",
        product: product,
        success: true
    });
});

//Send response html
app.get('/html', (req, res)=>{
    res.send('<h1>This is a heading first</h1>');
})

//Send response html_file
app.get('/htmlfile', (req, res)=>{
    const dir = path.resolve();
    console.log("my path = ", dir);
    
    const url = path.join(dir, './index.html')
    console.log("full path = ", url);
    
    res.sendFile(url)
})


const port = 1000;

app.listen(port, () => console.log(`Server is running at port ${port}`)
)
import express from 'express';

const app = express();

const product = [
    { title: "I-Phone 18", price: 80000 },
    { title: "Realme Narzo", price: 18000 },
    { title: "One plus", price: 40000 },
]

app.get('/', (req, res)=>{
    let name = "Jafar";
    res.render('index.ejs', {name, product})
})


const port = 2000;

app.listen(port, ()=> console.log(`Server is running at port ${port}`)
);
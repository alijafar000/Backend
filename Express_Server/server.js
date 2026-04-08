import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send("You are requested to home route");
})

app.get('/about', (req, res)=>{
    res.send("<h2>You are requested to about page</h2>")
})

const port = 2000;
app.listen(port, ()=>console.log(`Server is running at port ${port}`))
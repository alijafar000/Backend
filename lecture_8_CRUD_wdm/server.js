import express from 'express';

const app = express();
// C - Create => POST(method)
// R - Read => GET(method)
// U - Update => PUT(method)
// D - Delete => DELETE(method)

app.get('/jafar', (req, res)=>{
    res.send("Hello from Express");
})

app.post('/instagram_post', (req, res)=>{
    
})

const port = 2000;

app.listen(port, ()=> console.log(`Server is running at port ${port}`)
)
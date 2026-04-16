import express from 'express'

const app = express();

//
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
   res.render('index.ejs')
})

app.post('/form-submit', (req, res)=>{
    console.log(req.body);
    
    res.json({
        Messege: "Form Submit Successfully",
        Success: true
    })
})

const port = 1000;

app.listen(port, ()=> console.log(`Server is running at port ${port}`))
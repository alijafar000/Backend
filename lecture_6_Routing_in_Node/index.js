import http from 'http';

const server = http.createServer((req, res)=>{
    // console.log(req);
    
    // res.end('<h1>Your requested has been accepted</h1>')

    //routing 
    if(req.url === '/wdm'){
        res.end("Welcome to the web dev mastery course");
    } else if(req.url === '/srk'){
        res.end("SRK is a most powerfull bollywood actor in the world")
    } else{
        res.end("Invalid request")
    }
})

const port = 1000;

server.listen(port, ()=> console.log(`Server is running at port ${port}`)
)
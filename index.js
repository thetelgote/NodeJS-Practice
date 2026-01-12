const http = require("http");


const myServer = http.createServer((req,res)=>{
    console.log("New Request rec");
    res.end("hello from server");
});


myServer.listen(8000, () => console.log("Server Started on port 8000"));

const http = require ('http');

//create server onject
http.createServer ((req,res) =>{
    //response
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end()
})
.listen(5000,()=>console.log('server running....'));


// Server Create :

const http = require('http');


http.createServer(function(req,res){


    //Basic 3 Steps Of Response:
    res.writeHead(200, {'Content-Type':'text/html'})
    //res.write('Hello I am From Server Body'); // <=====THIS LINE IS NOT MANDATORY!!!
    res.end('Hello I am From Server END');


}).listen(8000,function(){
    console.log("Server IS Running")
})

const http = require('http')
const fs=require('fs')
const port =3000
/*
const server = http.createServer(function(req,res){
   // res.write('Hello Node')
   res.writeHead(200,{'Content-Type': 'text/html'})
   fs.readFile('index.html', function(error, data){
       if(error){
           res.writeHead(404)
           res.write('Error: File Not Found')
       } else{
           res.write(data)
       }
       res.end()
   }) 
   //res.end()
})
*/
const server =http.createServer(function (req, res) {
    //console.log(__dirname+"_____"+req.url+"____"+__filename)
    if(req.url=="/")
    {
    fs.readFile(__dirname + "/index.html", function (err,data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
           return;
        }
            res.writeHead(200);
            res.end(data);
        });
    }
    else{
    fs.readFile(__dirname + req.url, function (err,data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
        });
    }
  })

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    } else{
        console.log('Server is listening on port '+ port)
    }
})
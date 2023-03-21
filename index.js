var http = require("http");
var fs = require("fs");
var url = require("url");

//port value 0- 65535
//protocol - tcp/udp/ftp/smtp
// developer- 0 - 1024 no use other ports use (1024-65535)

http.createServer((req,res)=>{
    
    var pathname = req.url;

    if (pathname === "/") {
        res.write(fs.readFileSync("index.html",).toString());     
    }
    else if(pathname === "/about")
    {
        res.write(fs.readFileSync("about.html",).toString());     
    }
    else{
        res.write(fs.readFileSync("pnf.html",).toString());     
    }

   
    res.end();

}).listen(8081);
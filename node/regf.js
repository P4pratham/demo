var http= require('http');
var fs=require('fs');
var query=require('querystring');
var url=require('url');
function process(req,res)
{
    var u=url.parse(req.url);
    //console.log(u);
    switch(u.pathname)
    {
        case "/":
       var data=fs.readFileSync("regform.html");
       res.write(data);
       res.end();
        break;
        case"/submit":
        var q=query.parse(u.query);
        res.write("<h1>"+q.fname+" "+q.lname+" is Register Sucessfully...</h1>");
        res.end();
        break;
    }
    res.end();
}

var server=http.createServer(process);
server.listen(8000);
console.log("running at 8000");
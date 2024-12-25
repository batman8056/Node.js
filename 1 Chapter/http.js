
import http from 'http';

http.createServer(function (req, res) { //create http server object
    res.writeHead(200, {"Content-type" : "text/plain"});
    res.write("hello world");
    res.end();

}).listen(8080);//http server listen object can list to port http://localhost:8080/
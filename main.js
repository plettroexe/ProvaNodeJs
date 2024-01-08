let http = require("http"); //dichiara una variabile => al posto di import - richiedo libreria http 

http.createServer(function(request, response){ //creazione server
    response.writeHead(200,{
        "content-type": "text/plain" //scritta head
    });
    response.end("Hello world\n"); //sctitta finale end
}).listen(8081);

console.log("Server running on port 8081"); 
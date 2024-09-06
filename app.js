const http = require('http');

const port = 3000;

const server = http.createServer((req, res) =>{
    //res.writeHead(200, {'Content-type' : 'text/html charset=utf-8'});
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
    res.end('¡Hola Mundo Node JS! ñ Ñ');
});

server.listen(port, ()=>{
    console.log('Servidor escuchando http://localhost:3000');
});


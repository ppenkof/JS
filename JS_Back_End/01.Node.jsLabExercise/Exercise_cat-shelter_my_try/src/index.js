import http from 'http';

const server =http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, Cat Shelter!');
});

server.listen(5000);
console.log('Server is lintening on port 5000...');
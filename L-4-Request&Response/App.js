const http = require('http');

// const server = http.createServer( (req, res) =>{
// console.log(req);
// process.exit(); 
// });




const server = http.createServer( (req, res) =>{


// aab ham bass kuch ko  hi lock karunga
console.log(req.headers, req.url, req.method);






// ye hai client ke pass  response vejna
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Page</title></head>')
res.write('<body><h1>Welcome To My First Page</h1></body>')
res.write('</html>');
res.end();

});


// server.listen(3000 );

const port = 3000;

server.listen(port,()=>{
  console.log(`Server runing on address http: //localhost${port}`)
} );






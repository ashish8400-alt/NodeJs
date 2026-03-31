const http = require('http');

// const server = http.createServer( (req, res) =>{
// console.log(req);
// process.exit(); 
// });




const server = http.createServer( (req, res) =>{



console.log(req.headers, req.url, req.method);



// for Routes or Means Routing

if(req.url === '/'){
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Page</title></head>')
res.write('<body><h1>Welcome To Home</h1></body>')
res.write('</html>');

// return jaruri hai
return res.end();
}


else if(req.url === '/products'){
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Page</title></head>')
res.write('<body><h1>Check Out Products</h1></body>')
res.write('</html>');
return res.end();
}


else {
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Page</title></head>')
res.write('<body><h1>No Its Your Fault</h1></body>')
res.write('</html>');
return res.end();
}



});




const port = 3000;

server.listen(port,()=>{
  console.log(`Server runing on address http: //localhost${port}`)
} );






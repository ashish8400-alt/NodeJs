const http = require('http');
const fs = require('fs');

// const server = http.createServer( (req, res) =>{
// console.log(req);
// process.exit(); 
// });




const server = http.createServer( (req, res) =>{



console.log(req.headers, req.url, req.method);





if(req.url === '/'){
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Page</title></head>')
res.write('<body><h1>Enter Your Details:</h1>')

// this is action field means data kaha le jana hai

res.write('<form action="/submit-details" method="POST">')

// for user input


res.write('<input type="text" name="username" placeholder="Enter your name"><br>');

// for male

res.write('<label for="male">Male</label>')
res.write('<input type="radio" id="male" name="gender" value="male" />');



// for female

res.write('<label for="female">Female</label>')
res.write('<input type="radio" id="female" name="gender" value="female" />');
// res.write('</form>')

//submit button

res.write('<br><input type="submit" value="submit">');



  res.write('</body>')
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
else if(req.url.toLowerCase() === "/submit-details" && req.method  == "POST"){
  fs.writeFileSync('user.txt', 'Ashish tiwari');
  res.statusCode = 302;
  res.setHeader('location', '/');
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




const port = 3001;

server.listen(port,()=>{
  console.log(`Server runing on address http://localhost${port}`)
} );






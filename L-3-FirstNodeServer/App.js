const http = require('http');


// 1st method

// function requestListener(req, res){
// console.log(req);
// }

// http.createServer(requestListener)

// 2nd method

// http.createServer(function (req, res){
// console.log(req);
// })

// 3rd method

const server = http.createServer( (req, res) =>{
console.log(req);
});


// server.listen(3000 );

const port = 3000;

server.listen(port,()=>{
  console.log(`Server runing on address http: //localhost${port}`)
} );
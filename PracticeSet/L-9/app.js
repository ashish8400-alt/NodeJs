const express = require('express');


const app = express();

app.use((req, res, next) => {
  console.log("first dummy middleware", req.method, req.url);
  next();
  })


app.use((req, res, next) => {
  console.log("second dummy middleware", req.method, req.url);
  next();
  })


// isko isilye comment kar diya hai kyuki ye response bhej raha hai aur next() nahi call kar raha hai, isliye ye middleware chain ko tod raha hai aur agle middleware tak nahi jaa pa raha hai. Agar aap chahte hain ki ye middleware chain ko tod na kare aur agle middleware tak jaa sake, to aapko next() function ko call karna hoga.

// app.use((req, res, next) => {
//   console.log("third dummy middleware", req.method, req.url);
//   res.send("<h1>Response from the server</h1>");
//   })


app.get("/", (req,res, next)=>{
  console.log("This is the GET request for the root path", req.method, req.url);
  res.send("<h1>Response from the GET request for the root path</h1>");
})


app.get("/contact-us", (req,res, next)=>{
  console.log("This is the GET request for the root path", req.method, req.url);
  res.send(
    
    `<h1>Please give details</h1>
    <form action='/contact-us' method='POST'>
      <input type='text' name='name' placeholder='Enter your name' />
      <input type='email' name='email' placeholder='Enter your email' />
      <button type='submit'>Submit</button>
    </form>
    
    `);
})


app.post("/contact-us", (req,res, next)=>{
  console.log("This is the POST request for the contact-us path", req.method, req.url);
  res.send("<h1>Response from the POST request for the contact-us path</h1>");
})


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
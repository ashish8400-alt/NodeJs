const express = require('express');

const app = express();

// 🔥 Body Parser (MOST IMPORTANT)
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("first dummy middleware", req.method, req.url);
  next();
});

app.use((req, res, next) => {
  console.log("second dummy middleware", req.method, req.url);
  next();
});

app.get("/", (req, res, next) => {
  console.log("This is the GET request for the root path", req.method, req.url);
  res.send("<h1>Response from the GET request for the root path</h1>");
});

app.get("/contact-us", (req, res, next) => {
  res.send(`
    <h1>Please give details</h1>
    <form action='/contact-us' method='POST'>
      <input type='text' name='name' placeholder='Enter your name' />
      <input type='email' name='email' placeholder='Enter your email' />
      <button type='submit'>Submit</button>
    </form>
  `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Form Data 👉", req.body); // 🔥 ab data milega
  res.send("<h1>Form Submitted Successfully</h1>");
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
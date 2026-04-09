
const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>Welcome</h1><a href="/calculate">Go</a>`);
    return res.end();
  }

  else if (req.url === '/calculate') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <form action="/calculate-result" method="POST">
        <input name="first" placeholder="Enter first number">
        <input name="second" placeholder="Enter second number">
        <button>Sum</button>
      </form>
    `);
    return res.end();
  }

  else if (req.url === '/calculate-result' && req.method === 'POST') {
    return sumRequestHandler(req, res);
  }

  res.end("404");
};

module.exports = requestHandler;
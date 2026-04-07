// const sumRequestHandler = (req, res) => {
// console.log("In sum Request Handler", req.url);
// const body = [];
// req.on('data', chunk =>  body.push(chunk));
// req.on('end', () => {
//   const parsedBody = Buffer.concat(body).toString();
//   console.log(parsedBody);
//   const params = new URLSearchParams(parsedBody);
//   const bodyObject = Object.fromEntries(params);
//   const result = Number(bodyObject.first) + Number(bodyObject.second);
//   console.log(result);
// });
// }

// exports.sumRequestHandler = sumRequestHandler;



const sumRequestHandler = (req, res) => {
  const body = [];

  req.on('data', chunk => body.push(chunk));

  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(parsedBody);
    const bodyObject = Object.fromEntries(params);

    const result = Number(bodyObject.first) + Number(bodyObject.second);

    res.write(`<h1>Result: ${result}</h1>`);
    res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;




const sumRequestHandler = (req, res) => {
  console.log("1. Sum Request Handler", req.url)
  const body = [];
  let result;

  req.on('data', chunk => {body.push(chunk);
    console.log("2.Chunk Came")
  });

  req.on('end', () => {
    console.log("3. Request ")
    const parsedBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(parsedBody);
    const bodyObject = Object.fromEntries(params);

   result = Number(bodyObject.first) + Number(bodyObject.second);

    
  });

  console.log(" 4. sending the respond")

  res.write(`<h1>Result: ${result}</h1>`);
    res.end();
};

exports.sumRequestHandler = sumRequestHandler;
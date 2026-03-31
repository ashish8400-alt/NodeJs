console.log("Ashish is the best");

const fs = require('fs');

fs.writeFile("output.txt", "Writing File",(err)=>{
  if(err) console.log("Error occured");
  else console.log('file written successfully')
});
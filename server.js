const express = require('express');
const app = express();

function getData(str) {
  var arr = [];
  var append = false;
  for (let c of str) {
    if (c === '(') {
      arr.push('');
      append = true;
    } else if (c === ')')
      append = false;
    else if (append)
      arr[arr.length-1] += c;
  }
  return arr;
}

app.get("/", (req, res) => {
  res.json({
    IP: req.ip.match(/\d.+/)[0],
    Lang: req.headers["accept-language"].split(',')[0],
    OS: getData(req.headers['user-agent'])[0],
  });
  res.end();
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log('listening on port' + port)
});

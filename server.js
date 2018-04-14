const os = require('os');
const express = require('express');
const app = express();

function getData(str) {
  var arr = [''];
  var append = false;
  for (let c of str) {
    if (append) arr[arr.length-1] += c;
    if (c === '(') {
      append = true;
    } else if (c === ')') {
      arr.push('');
      append = false;
    }
  }
}

app.get("/", (req, res) => {
  res.json({
    IP: req.ip.match(/\d.+/),
    Lang: req.headers["accept-language"].split(',')[0],
    OS: req.headers['user-agent'].match(/\(.+\)/),
  });
  res.end();
});


const listener = app.listen(process.env.PORT, () => {
  console.log(`listening on port ${listener.address().port}`)
});

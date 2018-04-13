const express = require('express')
const app = express()

app.get("/", (req, res) => {
  res.json({
    IP: req.socket.remoteAddress.match(/\d\S+/),
    Lang: null,
    OS: null,
  });
  res.end();
});


const listener = app.listen(process.env.PORT, () => {
  console.log(`listening on port ${listener.address().port}`)
})

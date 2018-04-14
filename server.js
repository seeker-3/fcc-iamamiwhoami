const os = require('os');
const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.json({
    IP: req.iheaders['x-forwarded-for'].split(',')[0],
    Lang: req.headers["accept-language"].split(',')[0],
    OS: req.headers['user-agent'] //os.platform() + ' ' + os.release(),
  });
  res.end();
});


const listener = app.listen(process.env.PORT, () => {
  console.log(`listening on port ${listener.address().port}`)
});

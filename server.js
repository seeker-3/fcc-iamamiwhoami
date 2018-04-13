const express = require('express')
const app = express()

app.get("/", (req, res) => {
  res.json({});
  res.end();
});


const listener = app.listen(process.env.PORT, () => {
  console.log(`listening on port ${listener.address().port}`)
})

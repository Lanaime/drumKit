const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

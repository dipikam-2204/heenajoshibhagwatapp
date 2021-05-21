const express = require('express')
const cors = require('cors')
const path = require('path')

// Create the server
const app = express()
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))


// Anything that doesn't match the above, send back the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})

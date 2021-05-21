const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const helmet = require('helmet') // creates headers that protect from attacks (security)
const cors = require('cors')  // allows/disallows cross-site communication

const {Pool} = require("pg");
const pool = new Pool({
 connectionString: "postgres://yiqxtbupdrhxbz:b06b24af6ab097c93f21dd2c74ac6b54d98604a8e9784ab97d97bf1dff31cb7a@ec2-23-22-191-232.compute-1.amazonaws.com:5432/dfheeiffbtv6al",
 ssl: {
 rejectUnauthorized: false
 }
});

// Create the server
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


// Anything that doesn't match the above, send back the index.html file
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

// An api endpoint that returns a short list of items
app.get('/api/getList', (request,response) => {
  pool.query('SELECT * FROM response_data', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
});

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})

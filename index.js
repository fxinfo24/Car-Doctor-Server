const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5009;

app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send('Coffee server is running');
  });
  
  // Start the server
  app.listen(port, (err, res) => {
    console.log(`Coffee server is running on ${port}`);
  });
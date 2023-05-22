// Step 1:
const express = require('express');
const cors = require('cors');

// Step 7:
// dotenv config from https://www.npmjs.com/package/dotenv
require('dotenv').config()
console.log(process.env)

// Step 2:
const app = express();
const port = process.env.PORT || 5009;

// Step 5: Middleware
app.use(cors());
app.use(express.json());

// Step 6:
// MongoDB config from MongoDB/Database/connect/driver Starts

// Note: Convert URI to template string and use process.env.
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.S3_BUCKET}:${process.env.SECRET_KEY}@cluster0.bsjngpi.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Mongodb Config ends here

// Step 3: Default route
app.get('/', (req, res) => {
    res.send('Car Doctor server is running');
  });
  
  // Step 4: Start the server
  app.listen(port, (err, res) => {
    console.log(`Car Doctor server is running on ${port}`);
  });
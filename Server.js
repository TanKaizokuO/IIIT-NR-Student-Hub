// server.js
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

// MongoDB connection URI
const uri = "your-mongodb-connection-string";

// API to fetch data from MongoDB
app.get('/api/data', async (req, res) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    await client.connect();
    const collection = client.db("your-db").collection("your-collection");
    const data = await collection.find({}).toArray();
    res.json(data); // Send data to frontend
  } catch (err) {
    res.status(500).send("Error fetching data");
  } finally {
    client.close();
  }
});

// Run server
app.listen(3000, () => console.log('Server running on port 3000'));

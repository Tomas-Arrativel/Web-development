const { MongoClient, ServerApiVersion } = require('mongodb');
// Replace the placeholder with your Atlas connection string
const uri = 'mongodb://localhost:27017';
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    const database = client.db('fruitsDB');
    const collection = database.collection('fruits');

    // Insert many files
    /*  await collection.insertMany([
      {
        name: 'Apple',
        score: 8,
        review: 'Great fruit',
      },
      {
        name: 'Orange',
        score: 5,
        review: 'Kinda sour',
      },
      {
        name: 'Banana',
        score: 10,
        review: 'The best fruit ever',
      },
    ]);

    console.log(`documents were inserted.`);*/

    // Find Files
    const findResult = await collection.find();
    for await (const fruit of findResult) {
      console.log(fruit);
    }

    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!',
    );
  } finally {
    // Ensures that the client will close when you finish/error

    await client.close();
  }
}
run().catch(console.dir);

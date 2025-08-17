const { MongoClient } = require("mongodb");

const uri = "";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db("bettingApp");
    const bets = db.collection("bets");

    // Insert some fake bets
    const result = await bets.insertMany([
      { team: "Eagles", stake: 50, odds: -340, result: "win" },
      { team: "Chargers", stake: 20, odds: +142, result: "loss" },
      { team: "Cardinals", stake: 75, odds: -238, result: "pending" }
    ]);

    console.log(`Inserted ${result.insertedCount} bets`);
  } finally {
    await client.close();
  }
}

run().catch(console.error);

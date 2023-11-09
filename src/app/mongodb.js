import { MongoClient } from "mongodb";

const uri = "************************";

let cachedClient = null;

export async function connectToDatabase() {
    if (cachedClient) {
        return cachedClient.db("test");
    }

    const client = new MongoClient(uri);

    await client.connect();

    cachedClient = client;

    return client.db("test");
}

import { MongoClient } from "mongodb";

//const connectionString = process.env.ATLAS_URI;
const connectionString = "mongodb+srv://ayurisingh2924:Passw0rd1@cluster0.okwhgf2.mongodb.net/"
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("sucessfully log in the db")
} catch(e) {
  console.error(e);
}

let db = conn.db("apds");

export default db;
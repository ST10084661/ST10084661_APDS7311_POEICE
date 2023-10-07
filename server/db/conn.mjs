import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const variable = process.env.MONGO_CONN_STRING
console.log(variable);
//const connectionString = "mongodb+srv://ayuri_singh:Smakoskippyangel29@cluster0.okwhgf2.mongodb.net/" ;
//console.log(connectionString);
//const connectionString = process.env.ATLAS_URI;
//console.log(connectionString);

//const client = new MongoClient(connectionString);
const client = new MongoClient(variable);
let conn;
try {
  conn = await client.connect();
  console.log("successfully connected to Db")
} catch(e) {
  console.error(e);
}
  let db = conn.db("apds");

  export default db;
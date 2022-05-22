
import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}
const password = process.env.PASSWORD
const url: string = `mongodb+srv://eloiacono:${password}@cluster0.cotde.mongodb.net/test`;

mongoose.connect(url).then(() => {
  console.log("connected")
}).catch(err => {
  console.error(err)
})

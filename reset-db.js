const db = require("./db-config");
import Items from "./models/items";

const collection = db.collection("items");

async function reset() {
  await collection.deleteMany({});
  await Items.createItem({
    category: "test",
    content: "test",
    done: false,
  });
}

reset();

const db = require("../db-config");
const { ObjectId } = require("mongodb");

const collection = db.collection("items");

// GET ALL
async function getItems(category) {
  const items = await collection.find(category).toArray();
  return items;
}

// GET ONE
async function getOneItem(itemId) {
  const item = await collection.find({ _id: ObjectId(itemId) }).next();
  return item;
}

// UPDATE
async function updateItem({ itemId, done }) {
  console.log("update item", itemId, done);
  // const newAttributes = {
  //   category: body.category,
  //   content: body.content,
  //   done: body.done,
  // };

  return collection.updateOne(
    { _id: ObjectId(itemId) },
    {
      $set: { done: done },
    }
  );
}

// POST
async function createItem({ category, content, done }) {
  return collection.insertOne({
    category,
    content,
    done,
  });
}

// DELETE
const deleteItem = (itemId) => {
  return collection.deleteOne({ _id: ObjectId(itemId) });
};

module.exports = {
  getItems,
  getOneItem,
  createItem,
  deleteItem,
  updateItem,
};

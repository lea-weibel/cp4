const db = require("../db-config");
const { ObjectId } = require("mongodb");

const collection = db.collection("lists");

// GET ALL
async function getLists() {
  const lists = await collection.find().toArray();
  return lists;
}

// // GET ONE
// async function getOneItem(itemId) {
//   const item = await collection.find({ _id: ObjectId(itemId) }).next();
//   return item;
// }

// // UPDATE
// async function updateItem({ itemId, done }) {
//   console.log("update item", itemId, done);
//   return collection.updateOne(
//     { _id: ObjectId(itemId) },
//     {
//       $set: { done: done },
//     }
//   );
// }

// POST
async function createList(name) {
  return collection.insertOne({
    name: name,
  });
}

// DELETE
const deleteList = (listId) => {
  return collection.deleteOne({ _id: ObjectId(listId) });
};

module.exports = {
  getLists,
  //getOneItem,
  createList,
  deleteList,
  //updateItem,
};

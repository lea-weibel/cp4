import base from "../../../middlewares/common";
import Lists from "../../../models/lists";

const handleGet = async (req, res) => {
  res.send(await Lists.getLists());
};

async function handlePost(req, res) {
  if (req.body) {
    const newList = await Lists.createList(req.body.name);
    res.status(201).send(newList);
  }
}

// async function handlePatch(req, res) {
//   if (req.body) {
//     console.log("handle patch", req.body);
//     const modifiedData = await Items.updateItem(req.body);
//     res.status(200).send(modifiedData);
//   }
// }

async function handleDelete(req, res) {
  if (req.body) {
    const deletedList = await Lists.deleteList(req.body.listId);
    res.status(200).send(deletedList);
  }
}

export default base()
  .get(handleGet)
  .post(handlePost)
  //.patch(handlePatch)
  .delete(handleDelete);

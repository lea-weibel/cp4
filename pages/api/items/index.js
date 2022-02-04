import base from "../../../middlewares/common";
import Items from "../../../models/items";

const handleGet = async (req, res) => {
  res.send(await Items.getItems(req.query));
};

async function handlePost(req, res) {
  if (req.body) {
    console.log(req.body);
    const newItem = await Items.createItem(req.body);
    res.status(201).send(newItem);
  }
}

async function handlePut(req, res) {
  if (req.body) {
    console.log("handle patch", req.body);
    const modifiedData = await Items.updateItem(req.body);
    res.status(200).send(modifiedData);
  }
}

async function handleDelete(req, res) {
  if (req.body) {
    const deletedData = await Items.deleteItem(req.body.itemId);
    res.status(200).send(deletedData);
  }
}

export default base()
  .get(handleGet)
  .post(handlePost)
  .put(handlePut)
  .delete(handleDelete);

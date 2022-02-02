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

export default base().get(handleGet).post(handlePost);

const BURGERS = require("../model/jazzymodel");

const create_burger = async (req, res) => {
  const { title, description, image, category, price } = req.body;
  const Burgers = new BURGERS({
    title,
    description,
    image,
    category,
    price,
  });
  try {
    if (!title || !description || !image || !category || !price) {
      res.status(404).json({ err: "All input fields should be filled!" });
    }
    if (title || description || image || category || price) {
      const savedBurgers = await Burgers.save();
      res.status(200).json(savedBurgers);
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const find_burger = async (req, res) => {
  try {
    const allBurgers = await BURGERS.find();
    res.status(200).json(allBurgers);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const delete_burger = async (req, res) => {
  try {
    const deleteBurger = await BURGERS.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json(deleteBurger);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const update_burger = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const updateBurger = await BURGERS.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.status(200).json(updateBurger);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const single_Burger = async (req, res) => {
  const id = req.params.id;
  try {
    const singleBurger = await BURGERS.findById(id);
    res.status(200).json(singleBurger);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = {
  create_burger,
  find_burger,
  delete_burger,
  update_burger,
  single_Burger,
};

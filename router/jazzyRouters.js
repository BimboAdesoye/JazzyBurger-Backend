const express = require("express");
const router = express.Router();

const {
  create_burger,
  find_burger,
  delete_burger,
  update_burger,
  single_Burger,
} = require("../controller/jazzyControllers.js");

router.post("/create", create_burger);

router.get("/findAll", find_burger);

router.delete("/delete/:id", delete_burger);

router.patch("/update/:id", update_burger);

router.get("/single/:id", single_Burger);

module.exports = router;

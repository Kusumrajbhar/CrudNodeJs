const express = require("express");
const router = express.Router();
const crudModel = require("../models/CrudModel");

router.get("/", async (res, req) => {
  try {
    const crud = await crudModel.find();
    res.status(200).json({ success: true, res: crud });
  } catch (err) {
    console.log("err", err);
    res.status(400).json({ success: false, message: "not registered" });
  }
});

router.post("/", async (req, res) => {
  const crud = new Crud({
    name: req.body.name,
    tech: req.body.tech,
  });
  try {
    const a1 = await crud.save();
    res.status(200).json(a1);
  } catch (err) {
    res.status(400).json({ success: false });
  }
});

module.exports = router;

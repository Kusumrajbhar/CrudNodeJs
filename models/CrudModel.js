const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tech: {
    type: String,
    required: true,
  },
});

const firstCrud = mongoose.model("firstCrud", crudSchema);

module.exports = firstCrud;

const { model, Schema } = require("mongoose");

const userSchema = {
  username: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: { type: String, required: true, min: 6 },
  isAdmin: { type: Boolean, default: false },
};

const schema = new Schema(userSchema, { timestamps: true });

const User = model("user", schema);

module.exports = User;
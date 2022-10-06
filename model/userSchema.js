import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    min: 4,
    max: 20,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    min: 4,
    max: 20,
  },
  password: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);

export default user;

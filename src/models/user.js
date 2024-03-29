import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  about: String,
  profileURL: String,
});

// Check if the model is already defined, otherwise define it
export const User = mongoose.connection.models.users || mongoose.model("users", UserSchema);

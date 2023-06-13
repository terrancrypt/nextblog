import mongoose, { Schema } from "mongoose";

// Document interface
interface User {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

// Schema
const userSchema = new Schema<User>(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
import mongoose, { Document, Schema } from "mongoose";

// Document interface
interface Post extends Document {
  title: string;
  desc?: string;
  image?: string;
  content: string;
  username: string;
}

// Schema
const postSchema = new Schema<Post>(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    image: { type: String },
    content: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);

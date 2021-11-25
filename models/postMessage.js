import Mongoose from "mongoose"

const postSchema = Mongoose.Schema({
  title: { type: String, required: true },
  message: {type: String, required: true},
  name: { type: String, required: true },
  creator: {type: String, required: true},
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const PostMessage = Mongoose.model("PostMessage", postSchema)

export default PostMessage

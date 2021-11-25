import Mongoose from "mongoose"

const userSchema = Mongoose.Schema({
  name: { type: String , required: true },
  email: { type: String , required: true },
  password: { type: String , required: true },
  id: { type: String },
})

var User = Mongoose.model("User", userSchema)

export default User

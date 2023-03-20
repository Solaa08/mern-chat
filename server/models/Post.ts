import mongoose from 'mongoose';
const Schema = mongoose.Schema
// const ObjectId = mongoose.Types.ObjectId

const PostSchema = new Schema ({
    title: String,
    content: String
})

const PostModel = mongoose.model("Post", PostSchema)

export default PostModel
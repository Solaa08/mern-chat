import mongoose from "mongoose"

const db = mongoose.connect(process.env.MONGO_ACCESS)

export default db
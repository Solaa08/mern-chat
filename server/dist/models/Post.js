"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
// const ObjectId = mongoose.Types.ObjectId
const PostSchema = new Schema({
    title: String,
    content: String
});
const PostModel = mongoose_1.default.model("Post", PostSchema);
exports.default = PostModel;
//# sourceMappingURL=Post.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const Post_1 = __importDefault(require("../models/Post"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 5000;
app.post('/Posts', async (req, res) => {
    const newPost = new Post_1.default({
        title: req.body.title,
        content: req.body.content
    });
    const createdPost = await newPost.save();
    res.json(createdPost);
});
db_1.default.then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db = mongoose_1.default.connect("mongodb+srv://admin:admin3256@cluster0.g6cb5qc.mongodb.net/mern-chat?retryWrites=true&w=majority");
exports.default = db;
//# sourceMappingURL=db.js.map
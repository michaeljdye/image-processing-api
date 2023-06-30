"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resize_1 = __importDefault(require("./routes/resize"));
var app = (0, express_1.default)();
app.use('/api/resize', resize_1.default);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    // eslint-disable-next-line no-console
    console.log("Server running on port ".concat(PORT));
});
exports.default = app;

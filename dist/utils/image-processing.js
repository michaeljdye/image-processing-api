"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = void 0;
var sharp_1 = __importDefault(require("sharp"));
var resizeImage = function (image, height, width, thumbPath) {
    return (0, sharp_1.default)(image)
        .resize(height, width)
        .toFile(thumbPath)
        .then(function () { return "Success"; }).catch(function () { return "Error resizing image"; });
};
exports.resizeImage = resizeImage;

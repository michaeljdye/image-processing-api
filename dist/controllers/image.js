"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processImage = void 0;
var path_1 = __importDefault(require("path"));
var promises_1 = __importDefault(require("fs/promises"));
var image_processing_1 = require("../utils/image-processing");
var processImage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, width, _c, height, _d, filename, thumbPath, thumbImage, errorIfThumbImageNotFound_1, imagePath, image, message, errorIfImageNotFound_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = req.query, _b = _a.width, width = _b === void 0 ? 200 : _b, _c = _a.height, height = _c === void 0 ? 100 : _c, _d = _a.filename, filename = _d === void 0 ? 'mountain' : _d;
                thumbPath = path_1.default.resolve("src/assets/images/thumb/".concat(String(filename), "_thumb_").concat(String(width), "_").concat(String(height), ".jpg"));
                _e.label = 1;
            case 1:
                _e.trys.push([1, 3, , 9]);
                return [4 /*yield*/, promises_1.default.readFile(thumbPath)];
            case 2:
                thumbImage = _e.sent();
                if (thumbImage) {
                    res.sendFile(thumbPath);
                }
                return [3 /*break*/, 9];
            case 3:
                errorIfThumbImageNotFound_1 = _e.sent();
                _e.label = 4;
            case 4:
                _e.trys.push([4, 7, , 8]);
                imagePath = path_1.default.resolve("src/assets/images/full/".concat(String(filename), ".jpg"));
                return [4 /*yield*/, promises_1.default.readFile(imagePath)];
            case 5:
                image = _e.sent();
                return [4 /*yield*/, (0, image_processing_1.resizeImage)(image, +width, +height, thumbPath)];
            case 6:
                message = _e.sent();
                if (message === 'Success') {
                    res.contentType('image/jpg').sendFile(thumbPath);
                }
                else {
                    res.status(500).send(message);
                }
                return [3 /*break*/, 8];
            case 7:
                errorIfImageNotFound_1 = _e.sent();
                res.status(404).send('Image not found');
                return [3 /*break*/, 8];
            case 8: return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.processImage = processImage;

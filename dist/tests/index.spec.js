"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = __importDefault(require("../middleware"));
describe('sayHello', function () {
    it('should return hello', function () {
        expect((0, middleware_1.default)()).toBe('hello');
    });
});

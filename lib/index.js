"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSampleJWTToken = void 0;
var jwt = require('jsonwebtoken');
var jsonwebtoken_1 = require("jsonwebtoken");
/**
 * 与えられた値から適当なJWTトークンを作成する
 * @param value
 */
var generateSampleJWTToken = function (value) {
    var token = jsonwebtoken_1.sign({ value: value }, "aaaaaa");
    console.log(token);
};
exports.generateSampleJWTToken = generateSampleJWTToken;

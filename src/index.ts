var jwt = require('jsonwebtoken');
import {sign} from "jsonwebtoken";

/**
 * 与えられた値から適当なJWTトークンを作成する
 * @param value 
 */
export const generateSampleJWTToken = (value: number) => {
    const token = sign({value: value}, "aaaaaa");
    console.log(token);
}
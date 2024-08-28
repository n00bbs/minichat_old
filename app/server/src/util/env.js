"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnv = getEnv;
function getEnv(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
}

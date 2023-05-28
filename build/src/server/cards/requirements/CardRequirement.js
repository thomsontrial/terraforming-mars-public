"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardRequirement = void 0;
class CardRequirement {
    constructor(amount = 1, options) {
        var _a, _b;
        this.isMax = false;
        this.isAny = false;
        this.text = undefined;
        this.amount = amount;
        this.isMax = (_a = options === null || options === void 0 ? void 0 : options.max) !== null && _a !== void 0 ? _a : false;
        this.isAny = (_b = options === null || options === void 0 ? void 0 : options.all) !== null && _b !== void 0 ? _b : false;
        this.text = options === null || options === void 0 ? void 0 : options.text;
    }
}
exports.CardRequirement = CardRequirement;

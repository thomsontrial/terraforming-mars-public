"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InequalityRequirement = void 0;
const CardRequirement_1 = require("./CardRequirement");
class InequalityRequirement extends CardRequirement_1.CardRequirement {
    satisfies(player) {
        const score = this.getScore(player);
        if (this.isMax) {
            return score <= this.amount;
        }
        return score >= this.amount;
    }
}
exports.InequalityRequirement = InequalityRequirement;

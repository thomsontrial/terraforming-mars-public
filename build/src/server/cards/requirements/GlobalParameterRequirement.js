"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalParameterRequirement = void 0;
const InequalityRequirement_1 = require("./InequalityRequirement");
class GlobalParameterRequirement extends InequalityRequirement_1.InequalityRequirement {
    constructor() {
        super(...arguments);
        this.scale = 1;
    }
    getScore(player) {
        const playerRequirementsBonus = player.getRequirementsBonus(this.parameter) * this.scale;
        const level = this.getGlobalValue(player);
        if (this.isMax) {
            return level - playerRequirementsBonus;
        }
        else {
            return level + playerRequirementsBonus;
        }
    }
}
exports.GlobalParameterRequirement = GlobalParameterRequirement;

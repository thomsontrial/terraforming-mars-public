"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreeneriesRequirement = void 0;
const InequalityRequirement_1 = require("./InequalityRequirement");
const RequirementType_1 = require("../../../common/cards/RequirementType");
class GreeneriesRequirement extends InequalityRequirement_1.InequalityRequirement {
    constructor() {
        super(...arguments);
        this.type = RequirementType_1.RequirementType.GREENERIES;
    }
    getScore(player) {
        return player.game.getGreeneriesCount(this.isAny ? undefined : player);
    }
}
exports.GreeneriesRequirement = GreeneriesRequirement;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRRequirement = void 0;
const InequalityRequirement_1 = require("./InequalityRequirement");
const RequirementType_1 = require("../../../common/cards/RequirementType");
class TRRequirement extends InequalityRequirement_1.InequalityRequirement {
    constructor() {
        super(...arguments);
        this.type = RequirementType_1.RequirementType.TR;
    }
    getScore(player) {
        return player.getTerraformRating();
    }
}
exports.TRRequirement = TRRequirement;

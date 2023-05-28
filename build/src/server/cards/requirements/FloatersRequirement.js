"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatersRequirement = void 0;
const CardResource_1 = require("../../../common/CardResource");
const InequalityRequirement_1 = require("./InequalityRequirement");
const RequirementType_1 = require("../../../common/cards/RequirementType");
class FloatersRequirement extends InequalityRequirement_1.InequalityRequirement {
    constructor() {
        super(...arguments);
        this.type = RequirementType_1.RequirementType.FLOATERS;
    }
    getScore(player) {
        return player.getResourceCount(CardResource_1.CardResource.FLOATER);
    }
}
exports.FloatersRequirement = FloatersRequirement;

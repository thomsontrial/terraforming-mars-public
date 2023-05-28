"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColoniesRequirement = void 0;
const InequalityRequirement_1 = require("./InequalityRequirement");
const RequirementType_1 = require("../../../common/cards/RequirementType");
class ColoniesRequirement extends InequalityRequirement_1.InequalityRequirement {
    constructor() {
        super(...arguments);
        this.type = RequirementType_1.RequirementType.COLONIES;
    }
    getScore(player) {
        return player.game.colonies
            .map((colony) => colony.colonies.filter((owner) => owner === player.id).length)
            .reduce((sum, colonyCount) => sum + colonyCount);
    }
}
exports.ColoniesRequirement = ColoniesRequirement;

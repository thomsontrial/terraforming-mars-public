"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesRequirement = void 0;
const InequalityRequirement_1 = require("./InequalityRequirement");
const RequirementType_1 = require("../../../common/cards/RequirementType");
class CitiesRequirement extends InequalityRequirement_1.InequalityRequirement {
    constructor() {
        super(...arguments);
        this.type = RequirementType_1.RequirementType.CITIES;
    }
    getScore(player) {
        return player.game.getCitiesCount(this.isAny ? undefined : player);
    }
}
exports.CitiesRequirement = CitiesRequirement;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemovedPlantsRequirement = void 0;
const CardRequirement_1 = require("./CardRequirement");
const RequirementType_1 = require("../../../common/cards/RequirementType");
class RemovedPlantsRequirement extends CardRequirement_1.CardRequirement {
    constructor() {
        super(...arguments);
        this.type = RequirementType_1.RequirementType.REMOVED_PLANTS;
    }
    satisfies(player) {
        return player.game.someoneHasRemovedOtherPlayersPlants;
    }
}
exports.RemovedPlantsRequirement = RemovedPlantsRequirement;

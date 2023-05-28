"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OxygenRequirement = void 0;
const GlobalParameterRequirement_1 = require("./GlobalParameterRequirement");
const GlobalParameter_1 = require("../../../common/GlobalParameter");
const RequirementType_1 = require("../../../common/cards/RequirementType");
const constants_1 = require("../../../common/constants");
class OxygenRequirement extends GlobalParameterRequirement_1.GlobalParameterRequirement {
    constructor(amount, options) {
        if (amount < constants_1.MIN_OXYGEN_LEVEL || amount > constants_1.MAX_OXYGEN_LEVEL) {
            throw new Error('Oxygen must be above ' + constants_1.MIN_OXYGEN_LEVEL + ' and below ' + constants_1.MAX_OXYGEN_LEVEL);
        }
        super(amount, options);
        this.type = RequirementType_1.RequirementType.OXYGEN;
        this.parameter = GlobalParameter_1.GlobalParameter.OXYGEN;
        this.scale = 1;
    }
    getGlobalValue(player) {
        return player.game.getOxygenLevel();
    }
}
exports.OxygenRequirement = OxygenRequirement;

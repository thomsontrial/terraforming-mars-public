"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabitatRateRequirement = void 0;
const MoonExpansion_1 = require("../../moon/MoonExpansion");
const GlobalParameterRequirement_1 = require("./GlobalParameterRequirement");
const GlobalParameter_1 = require("../../../common/GlobalParameter");
const RequirementType_1 = require("../../../common/cards/RequirementType");
class HabitatRateRequirement extends GlobalParameterRequirement_1.GlobalParameterRequirement {
    constructor() {
        super(...arguments);
        this.type = RequirementType_1.RequirementType.HABITAT_RATE;
        this.parameter = GlobalParameter_1.GlobalParameter.MOON_HABITAT_RATE;
    }
    getGlobalValue(player) {
        return MoonExpansion_1.MoonExpansion.moonData(player.game).colonyRate;
    }
}
exports.HabitatRateRequirement = HabitatRateRequirement;

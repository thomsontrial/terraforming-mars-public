"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenusRequirement = void 0;
const GlobalParameterRequirement_1 = require("./GlobalParameterRequirement");
const GlobalParameter_1 = require("../../../common/GlobalParameter");
const RequirementType_1 = require("../../../common/cards/RequirementType");
const constants_1 = require("../../../common/constants");
class VenusRequirement extends GlobalParameterRequirement_1.GlobalParameterRequirement {
    constructor(amount, options) {
        if (amount < constants_1.MIN_VENUS_SCALE || amount > constants_1.MAX_VENUS_SCALE) {
            throw new Error('Venus must be above ' + constants_1.MIN_VENUS_SCALE + ' and below ' + constants_1.MAX_VENUS_SCALE);
        }
        super(amount, options);
        this.type = RequirementType_1.RequirementType.VENUS;
        this.parameter = GlobalParameter_1.GlobalParameter.VENUS;
        this.scale = 2;
    }
    getGlobalValue(player) {
        return player.game.getVenusScaleLevel();
    }
}
exports.VenusRequirement = VenusRequirement;

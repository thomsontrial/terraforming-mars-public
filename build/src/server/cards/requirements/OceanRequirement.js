"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OceanRequirement = void 0;
const GlobalParameterRequirement_1 = require("./GlobalParameterRequirement");
const constants_1 = require("../../../common/constants");
const GlobalParameter_1 = require("../../../common/GlobalParameter");
const RequirementType_1 = require("../../../common/cards/RequirementType");
class OceanRequirement extends GlobalParameterRequirement_1.GlobalParameterRequirement {
    constructor(amount, options) {
        if (amount <= 0 || amount > constants_1.MAX_OCEAN_TILES) {
            throw new Error('Ocean tiles must be above 0 and below ' + constants_1.MAX_OCEAN_TILES);
        }
        super(amount, options);
        this.type = RequirementType_1.RequirementType.OCEANS;
        this.parameter = GlobalParameter_1.GlobalParameter.OCEANS;
    }
    getGlobalValue(player) {
        return player.game.board.getOceanCount({ upgradedOceans: true, wetlands: true });
    }
}
exports.OceanRequirement = OceanRequirement;

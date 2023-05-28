"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemperatureRequirement = void 0;
const GlobalParameterRequirement_1 = require("./GlobalParameterRequirement");
const GlobalParameter_1 = require("../../../common/GlobalParameter");
const RequirementType_1 = require("../../../common/cards/RequirementType");
const constants_1 = require("../../../common/constants");
class TemperatureRequirement extends GlobalParameterRequirement_1.GlobalParameterRequirement {
    constructor(amount, options) {
        if (amount < constants_1.MIN_TEMPERATURE || amount > constants_1.MAX_TEMPERATURE) {
            throw new Error('Temperature must be above ' + constants_1.MIN_TEMPERATURE + ' and below ' + constants_1.MAX_TEMPERATURE);
        }
        if (amount % 2 !== 0) {
            throw new Error('Temperature must be even');
        }
        super(amount, options);
        this.type = RequirementType_1.RequirementType.TEMPERATURE;
        this.parameter = GlobalParameter_1.GlobalParameter.OCEANS;
        this.scale = 2;
    }
    getGlobalValue(player) {
        return player.game.getTemperature();
    }
}
exports.TemperatureRequirement = TemperatureRequirement;

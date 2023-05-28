"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductionRequirement = void 0;
const InequalityRequirement_1 = require("./InequalityRequirement");
const RequirementType_1 = require("../../../common/cards/RequirementType");
class ProductionRequirement extends InequalityRequirement_1.InequalityRequirement {
    constructor(resource, amount, options) {
        super(amount, options);
        this.type = RequirementType_1.RequirementType.PRODUCTION;
        this.resource = resource;
    }
    getScore(player) {
        return player.production[this.resource];
    }
}
exports.ProductionRequirement = ProductionRequirement;

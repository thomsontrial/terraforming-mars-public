"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceTypeRequirement = void 0;
const Resource_1 = require("../../../common/Resource");
const InequalityRequirement_1 = require("./InequalityRequirement");
const RequirementType_1 = require("../../../common/cards/RequirementType");
class ResourceTypeRequirement extends InequalityRequirement_1.InequalityRequirement {
    constructor() {
        super(...arguments);
        this.type = RequirementType_1.RequirementType.RESOURCE_TYPES;
    }
    getScore(player) {
        const standardResources = Resource_1.ALL_RESOURCES.filter((res) => player.getResource(res) > 0).length;
        const nonStandardResources = new Set(player.getCardsWithResources().map((card) => card.resourceType)).size;
        return standardResources + nonStandardResources;
    }
}
exports.ResourceTypeRequirement = ResourceTypeRequirement;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabitatTilesRequirement = void 0;
const TileType_1 = require("../../../common/TileType");
const MoonExpansion_1 = require("../../moon/MoonExpansion");
const InequalityRequirement_1 = require("./InequalityRequirement");
const RequirementType_1 = require("../../../common/cards/RequirementType");
class HabitatTilesRequirement extends InequalityRequirement_1.InequalityRequirement {
    constructor() {
        super(...arguments);
        this.type = RequirementType_1.RequirementType.HABITAT_TILES;
    }
    getScore(player) {
        return MoonExpansion_1.MoonExpansion.spaces(player.game, TileType_1.TileType.MOON_HABITAT, { surfaceOnly: true, ownedBy: this.isAny ? undefined : player }).length;
    }
}
exports.HabitatTilesRequirement = HabitatTilesRequirement;

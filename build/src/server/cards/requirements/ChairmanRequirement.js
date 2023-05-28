"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChairmanRequirement = void 0;
const Turmoil_1 = require("../../turmoil/Turmoil");
const CardRequirement_1 = require("./CardRequirement");
const RequirementType_1 = require("../../../common/cards/RequirementType");
class ChairmanRequirement extends CardRequirement_1.CardRequirement {
    constructor() {
        super(0);
        this.type = RequirementType_1.RequirementType.CHAIRMAN;
    }
    satisfies(player) {
        return Turmoil_1.Turmoil.getTurmoil(player.game).chairman === player.id;
    }
}
exports.ChairmanRequirement = ChairmanRequirement;

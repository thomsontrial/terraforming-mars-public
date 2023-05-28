"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyRequirement = void 0;
const Turmoil_1 = require("../../turmoil/Turmoil");
const CardRequirement_1 = require("./CardRequirement");
const RequirementType_1 = require("../../../common/cards/RequirementType");
class PartyRequirement extends CardRequirement_1.CardRequirement {
    constructor(party) {
        super();
        this.party = party;
        this.type = RequirementType_1.RequirementType.PARTY;
        this.party = party;
    }
    satisfies(player) {
        return Turmoil_1.Turmoil.getTurmoil(player.game).canPlay(player, this.party);
    }
}
exports.PartyRequirement = PartyRequirement;

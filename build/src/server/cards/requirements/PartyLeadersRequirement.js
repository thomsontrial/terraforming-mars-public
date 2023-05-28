"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyLeadersRequirement = void 0;
const Turmoil_1 = require("../../turmoil/Turmoil");
const InequalityRequirement_1 = require("./InequalityRequirement");
const RequirementType_1 = require("../../../common/cards/RequirementType");
class PartyLeadersRequirement extends InequalityRequirement_1.InequalityRequirement {
    constructor() {
        super(...arguments);
        this.type = RequirementType_1.RequirementType.PARTY_LEADERS;
    }
    getScore(player) {
        const turmoil = Turmoil_1.Turmoil.getTurmoil(player.game);
        return turmoil.parties.filter((party) => party.partyLeader === player.id).length;
    }
}
exports.PartyLeadersRequirement = PartyLeadersRequirement;

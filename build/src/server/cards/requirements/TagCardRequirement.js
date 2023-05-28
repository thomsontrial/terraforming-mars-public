"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCardRequirement = void 0;
const Tag_1 = require("../../../common/cards/Tag");
const InequalityRequirement_1 = require("./InequalityRequirement");
const RequirementType_1 = require("../../../common/cards/RequirementType");
class TagCardRequirement extends InequalityRequirement_1.InequalityRequirement {
    constructor(tag, amount, options) {
        super(amount, options);
        this.type = RequirementType_1.RequirementType.TAG;
        this.tag = tag;
    }
    getScore(player) {
        const mode = this.isMax !== true ? 'default' : 'raw';
        let tagCount = player.tags.count(this.tag, mode);
        if (this.isAny) {
            player.game.getPlayers().forEach((p) => {
                if (p.id !== player.id) {
                    tagCount += p.tags.count(this.tag, 'raw');
                }
            });
        }
        if (this.tag === Tag_1.Tag.SCIENCE && player.hasTurmoilScienceTagBonus)
            tagCount += 1;
        return tagCount;
    }
}
exports.TagCardRequirement = TagCardRequirement;

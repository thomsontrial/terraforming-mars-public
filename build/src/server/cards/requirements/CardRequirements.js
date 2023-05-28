"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardRequirements = void 0;
const RequirementType_1 = require("../../../common/cards/RequirementType");
const ChairmanRequirement_1 = require("./ChairmanRequirement");
const CitiesRequirement_1 = require("./CitiesRequirement");
const ColoniesRequirement_1 = require("./ColoniesRequirement");
const FloatersRequirement_1 = require("./FloatersRequirement");
const GreeneriesRequirement_1 = require("./GreeneriesRequirement");
const HabitatRateRequirement_1 = require("./HabitatRateRequirement");
const HabitatTilesRequirement_1 = require("./HabitatTilesRequirement");
const LogisticsRateRequirement_1 = require("./LogisticsRateRequirement");
const MiningRateRequirement_1 = require("./MiningRateRequirement");
const MiningTilesRequirement_1 = require("./MiningTilesRequirement");
const OceanRequirement_1 = require("./OceanRequirement");
const OxygenRequirement_1 = require("./OxygenRequirement");
const PartyLeadersRequirement_1 = require("./PartyLeadersRequirement");
const PartyRequirement_1 = require("./PartyRequirement");
const ProductionRequirement_1 = require("./ProductionRequirement");
const RemovedPlantsRequirement_1 = require("./RemovedPlantsRequirement");
const ResourceTypeRequirement_1 = require("./ResourceTypeRequirement");
const RoadTilesRequirement_1 = require("./RoadTilesRequirement");
const TRRequirement_1 = require("./TRRequirement");
const TagCardRequirement_1 = require("./TagCardRequirement");
const TemperatureRequirement_1 = require("./TemperatureRequirement");
const VenusRequirement_1 = require("./VenusRequirement");
class CardRequirements {
    constructor(requirements) {
        this.requirements = requirements;
    }
    static builder(f) {
        const builder = new Builder();
        f(builder);
        return builder.build();
    }
    satisfies(player) {
        const tags = [];
        this.requirements.forEach((requirement) => {
            if ((requirement.type === RequirementType_1.RequirementType.TAG) &&
                requirement.isAny !== true && requirement.isMax !== true) {
                tags.push(requirement.tag);
            }
        });
        if (tags.length > 1 && !player.tags.playerHas(tags)) {
            return false;
        }
        return this.requirements.every((requirement) => requirement.satisfies(player));
    }
}
exports.CardRequirements = CardRequirements;
class Builder {
    constructor() {
        this.reqs = [];
    }
    build() {
        return new CardRequirements(this.reqs);
    }
    oceans(amount = 1, options) {
        this.reqs.push(new OceanRequirement_1.OceanRequirement(amount, options));
        return this;
    }
    oxygen(amount = 1, options) {
        this.reqs.push(new OxygenRequirement_1.OxygenRequirement(amount, options));
        return this;
    }
    temperature(amount = 1, options) {
        this.reqs.push(new TemperatureRequirement_1.TemperatureRequirement(amount, options));
        return this;
    }
    venus(amount = 1, options) {
        this.reqs.push(new VenusRequirement_1.VenusRequirement(amount, options));
        return this;
    }
    tr(amount = 1, options) {
        this.reqs.push(new TRRequirement_1.TRRequirement(amount, options));
        return this;
    }
    chairman() {
        this.reqs.push(new ChairmanRequirement_1.ChairmanRequirement());
        return this;
    }
    resourceTypes(amount = 1, options) {
        this.reqs.push(new ResourceTypeRequirement_1.ResourceTypeRequirement(amount, options));
        return this;
    }
    greeneries(amount = 1, options) {
        this.reqs.push(new GreeneriesRequirement_1.GreeneriesRequirement(amount, options));
        return this;
    }
    cities(amount = 1, options) {
        this.reqs.push(new CitiesRequirement_1.CitiesRequirement(amount, options));
        return this;
    }
    colonies(amount = 1, options) {
        this.reqs.push(new ColoniesRequirement_1.ColoniesRequirement(amount, options));
        return this;
    }
    floaters(amount = 1, options) {
        this.reqs.push(new FloatersRequirement_1.FloatersRequirement(amount, options));
        return this;
    }
    partyLeaders(amount = 1, options) {
        this.reqs.push(new PartyLeadersRequirement_1.PartyLeadersRequirement(amount, options));
        return this;
    }
    tag(tag, amount = 1, options) {
        this.reqs.push(new TagCardRequirement_1.TagCardRequirement(tag, amount, options));
        return this;
    }
    production(resource, amount = 1, options) {
        this.reqs.push(new ProductionRequirement_1.ProductionRequirement(resource, amount, options));
        return this;
    }
    party(party) {
        this.reqs.push(new PartyRequirement_1.PartyRequirement(party));
        return this;
    }
    plantsRemoved() {
        this.reqs.push(new RemovedPlantsRequirement_1.RemovedPlantsRequirement());
        return this;
    }
    habitatRate(amount = 1, options) {
        this.reqs.push(new HabitatRateRequirement_1.HabitatRateRequirement(amount, options));
        return this;
    }
    miningRate(amount = 1, options) {
        this.reqs.push(new MiningRateRequirement_1.MiningRateRequirement(amount, options));
        return this;
    }
    logisticRate(amount = 1, options) {
        this.reqs.push(new LogisticsRateRequirement_1.LogisticsRateRequirement(amount, options));
        return this;
    }
    habitatTiles(amount = 1, options) {
        this.reqs.push(new HabitatTilesRequirement_1.HabitatTilesRequirement(amount, options));
        return this;
    }
    miningTiles(amount = 1, options) {
        this.reqs.push(new MiningTilesRequirement_1.MiningTilesRequirement(amount, options));
        return this;
    }
    roadTiles(amount = 1, options) {
        this.reqs.push(new RoadTilesRequirement_1.RoadTilesRequirement(amount, options));
        return this;
    }
}

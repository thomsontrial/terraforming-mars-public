"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagneticFieldGeneratorsAres = void 0;
const CardName_1 = require("../../../common/cards/CardName");
const SpaceBonus_1 = require("../../../common/boards/SpaceBonus");
const TileType_1 = require("../../../common/TileType");
const CardRenderer_1 = require("../render/CardRenderer");
const Options_1 = require("../Options");
const MagneticFieldGeneratorsPromo_1 = require("../promo/MagneticFieldGeneratorsPromo");
class MagneticFieldGeneratorsAres extends MagneticFieldGeneratorsPromo_1.MagneticFieldGeneratorsPromo {
    constructor() {
        super(CardName_1.CardName.MAGNETIC_FIELD_GENERATORS_ARES, { bonus: [SpaceBonus_1.SpaceBonus.PLANT, SpaceBonus_1.SpaceBonus.MICROBE] }, {
            cardNumber: 'Axx',
            renderData: CardRenderer_1.CardRenderer.builder((b) => {
                b.production((pb) => {
                    pb.minus().energy(4, { digit: Options_1.digit }).br;
                    pb.plus().plants(2);
                }).br;
                b.tr(3, { digit: Options_1.digit });
                b.tile(TileType_1.TileType.MAGNETIC_FIELD_GENERATORS, false, true).asterix().br;
            }),
            description: 'Decrease your energy production 4 steps and increase your plant production 2 steps. Raise your TR 3 steps. Place this tile. It provides adjacency bonus of 1 plant and 1 microbe.',
        });
    }
}
exports.MagneticFieldGeneratorsAres = MagneticFieldGeneratorsAres;

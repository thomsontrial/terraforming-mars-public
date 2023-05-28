"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crashlanding = void 0;
const Card_1 = require("../Card");
const CardName_1 = require("../../../common/cards/CardName");
const SelectSpace_1 = require("../../inputs/SelectSpace");
const TileType_1 = require("../../../common/TileType");
const CardType_1 = require("../../../common/cards/CardType");
const CardRenderer_1 = require("../render/CardRenderer");
const Board_1 = require("../../boards/Board");
const Size_1 = require("../../../common/cards/render/Size");
const OrOptions_1 = require("../../inputs/OrOptions");
const CardResource_1 = require("../../../common/CardResource");
const SelectOption_1 = require("../../inputs/SelectOption");
const CrashlandingBonus_1 = require("../../pathfinders/CrashlandingBonus");
class Crashlanding extends Card_1.Card {
    constructor() {
        super({
            type: CardType_1.CardType.EVENT,
            name: CardName_1.CardName.CRASHLANDING,
            cost: 20,
            behavior: {
                addResourcesToAnyCard: [
                    { type: CardResource_1.CardResource.DATA, count: 1, autoSelect: true },
                    { type: undefined, count: 1, autoSelect: true },
                ],
            },
            metadata: {
                cardNumber: 'Pf48',
                renderData: CardRenderer_1.CardRenderer.builder((b) => {
                    b.tile(TileType_1.TileType.CRASHLANDING, false, true).asterix().data().asterix().wild(1).asterix().br;
                    b.text('(Place AND ORIENT this tile on a non-reserved space adjacent to no more than 1 city.', Size_1.Size.TINY, false, false).br;
                    b.text('Crashsite grants an ADJACENCY BONUS of 1 data, and either 1 steel or 1 titanium.', Size_1.Size.TINY, false, false).br;
                    b.text('When placing Crashsite, for each tile you own next it, gain those bonuses.', Size_1.Size.TINY, false, false).br;
                    b.text('Add 1 data to any card. Add 1 resource to any card.)', Size_1.Size.TINY, false, false).br;
                }),
            },
        });
    }
    playableSpaces(player) {
        const board = player.game.board;
        const spaces = board.getAvailableSpacesOnLand(player);
        return spaces.filter((space) => board.getAdjacentSpaces(space).filter(Board_1.Board.isCitySpace).length <= 1);
    }
    canPlay(player) {
        return this.playableSpaces(player).length > 0;
    }
    bespokePlay(player) {
        return new SelectSpace_1.SelectSpace('Select space for Crashlanding tile', this.playableSpaces(player), (space) => {
            space.adjacency = { bonus: ['callback'] };
            const tile = {
                tileType: TileType_1.TileType.CRASHLANDING,
                card: this.name,
            };
            player.game.addTile(player, space, tile);
            const orOptions = new OrOptions_1.OrOptions(new SelectOption_1.SelectOption('Leave as it is', '', () => {
                tile.rotated = undefined;
                this.grantPlacementBonuses(player, space);
                return undefined;
            }), new SelectOption_1.SelectOption('Rotate Crashlanding', '', () => {
                tile.rotated = true;
                this.grantPlacementBonuses(player, space);
                return undefined;
            }));
            orOptions.title = 'Orient Crashlanding';
            return orOptions;
        });
    }
    grantPlacementBonuses(player, space) {
        const game = player.game;
        for (const adjacentSpace of game.board.getAdjacentSpaces(space)) {
            if (adjacentSpace.player === player && adjacentSpace.tile !== undefined) {
                const bonuses = CrashlandingBonus_1.CrashlandingBonus.onTilePlacedAdjacentToCrashlanding(game, space, adjacentSpace);
                for (const bonus of bonuses) {
                    game.grantSpaceBonus(player, bonus);
                }
            }
        }
    }
}
exports.Crashlanding = Crashlanding;

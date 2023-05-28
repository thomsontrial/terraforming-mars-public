"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcadianCommunities = void 0;
const Card_1 = require("../Card");
const SelectSpace_1 = require("../../inputs/SelectSpace");
const CardName_1 = require("../../../common/cards/CardName");
const CardType_1 = require("../../../common/cards/CardType");
const CardRenderer_1 = require("../render/CardRenderer");
const Size_1 = require("../../../common/cards/render/Size");
const Options_1 = require("../Options");
class ArcadianCommunities extends Card_1.Card {
    constructor() {
        super({
            type: CardType_1.CardType.CORPORATION,
            name: CardName_1.CardName.ARCADIAN_COMMUNITIES,
            startingMegaCredits: 40,
            initialActionText: 'Place a community (player marker) on a non-reserved area',
            behavior: {
                stock: { steel: 10 },
            },
            metadata: {
                cardNumber: 'R44',
                description: 'You start with 40 M€ and 10 steel. AS YOUR FIRST ACTION, PLACE A COMMUNITY [PLAYER MARKER] ON A NON-RESERVED AREA.',
                renderData: CardRenderer_1.CardRenderer.builder((b) => {
                    b.br;
                    b.megacredits(40).nbsp.steel(10, { digit: Options_1.digit }).nbsp.community().asterix();
                    b.corpBox('action', (ce) => {
                        ce.text('ACTION: PLACE A COMMUNITY (PLAYER MARKER) ON A NON-RESERVED AREA ADJACENT TO ONE OF YOUR TILES OR MARKED AREAS.', Size_1.Size.TINY, true);
                        ce.vSpace(Size_1.Size.MEDIUM);
                        ce.text('EFFECT: MARKED AREAS ARE RESERVED FOR YOU. WHEN YOU PLACE A TILE THERE, GAIN 3 M€.', Size_1.Size.TINY, true);
                    });
                }),
            },
        });
    }
    initialAction(player) {
        return new SelectSpace_1.SelectSpace('Select space for claim', player.game.board.getAvailableSpacesOnLand(player), (space) => {
            space.player = player;
            player.game.log('${0} placed a Community (player marker)', (b) => b.player(player));
            return undefined;
        });
    }
    getAvailableSpacesForMarker(player) {
        const board = player.game.board;
        const candidateSpaces = board.getAvailableSpacesOnLand(player);
        const spaces = candidateSpaces.filter((space) => {
            if (space.player !== undefined)
                return false;
            const adjacentSpaces = board.getAdjacentSpaces(space);
            return adjacentSpaces.find((adj) => adj.player === player) !== undefined;
        });
        return spaces.filter((space, index) => spaces.indexOf(space) === index);
    }
    canAct(player) {
        return this.getAvailableSpacesForMarker(player).length > 0;
    }
    action(player) {
        return new SelectSpace_1.SelectSpace('Select space for claim', this.getAvailableSpacesForMarker(player), (space) => {
            space.player = player;
            return undefined;
        });
    }
}
exports.ArcadianCommunities = ArcadianCommunities;

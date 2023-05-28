"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrashlandingBonus = void 0;
const SpaceBonus_1 = require("../../common/boards/SpaceBonus");
class CrashlandingBonus {
    static onTilePlacedAdjacentToCrashlanding(game, crashlandingSpace, newTileSpace) {
        var _a;
        const position = this.getAdjacentPosition(game.board, crashlandingSpace, newTileSpace);
        if (position === -1)
            return [];
        const mod = ((_a = crashlandingSpace.tile) === null || _a === void 0 ? void 0 : _a.rotated) ? 1 : 0;
        return [SpaceBonus_1.SpaceBonus.DATA, (position % 2 === mod) ? SpaceBonus_1.SpaceBonus.STEEL : SpaceBonus_1.SpaceBonus.TITANIUM];
    }
    static getAdjacentPosition(board, a, b) {
        const spaces = board.getAdjacentSpacesClockwise(a);
        return spaces.findIndex((space) => (space === null || space === void 0 ? void 0 : space.id) === b.id);
    }
}
exports.CrashlandingBonus = CrashlandingBonus;

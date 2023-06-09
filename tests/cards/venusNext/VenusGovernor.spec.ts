import {expect} from 'chai';
import {VenusGovernor} from '../../../src/server/cards/venusNext/VenusGovernor';
import {testGame} from '../../TestGame';

describe('VenusGovernor', function() {
  it('Should play', function() {
    const card = new VenusGovernor();
    const [, player] = testGame(1);

    player.tagsForTest = {venus: 1};
    expect(player.simpleCanPlay(card)).is.not.true;
    player.tagsForTest = {venus: 2};
    expect(player.simpleCanPlay(card)).is.true;

    const action = card.play(player);
    expect(action).is.undefined;
    expect(player.production.megacredits).to.eq(2);
  });
});

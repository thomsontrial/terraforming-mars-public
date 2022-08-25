import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Units} from '../../../common/Units';

export class FueledGenerators extends Card implements IProjectCard {
  public migrated = true;
  constructor() {
    super({
      cardType: CardType.AUTOMATED,
      name: CardName.FUELED_GENERATORS,
      tags: [Tag.ENERGY, Tag.BUILDING],
      cost: 1,
      productionBox: Units.of({energy: 1, megacredits: -1}),

      metadata: {
        cardNumber: '100',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().megacredits(1).br;
            pb.plus().energy(1);
          });
        }),
        description: 'Decrease your M€ production 1 step and increase your Energy production 1 steps.',
      },
    });
  }

  public play() {
    return undefined;
  }
}
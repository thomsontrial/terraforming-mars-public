import {CardName} from '../../../common/cards/CardName';
import {ModuleManifest} from '../ModuleManifest';
import {Airliners} from '../venusNext/Airliners';
import {Aridor} from './Aridor';
import {Arklight} from './Arklight';
import {CryoSleep} from './CryoSleep';
import {EcologyResearch} from './EcologyResearch';
import {IceMoonColony} from './IceMoonColony';
import {InterplanetaryColonyShip} from './InterplanetaryColonyShip';
import {MarketManipulation} from './MarketManipulation';
import {MiningColony} from './MiningColony';
import {MinorityRefuge} from './MinorityRefuge';
import {MolecularPrinting} from './MolecularPrinting';
import {PioneerSettlement} from './PioneerSettlement';
import {Polyphemos} from './Polyphemos';
import {Poseidon} from './Poseidon';
import {ProductiveOutpost} from './ProductiveOutpost';
import {QuantumCommunications} from './QuantumCommunications';
import {ResearchColony} from './ResearchColony';
import {RimFreighters} from './RimFreighters';
import {SpacePort} from './SpacePort';
import {SpacePortColony} from './SpacePortColony';
import {StormCraftIncorporated} from './StormCraftIncorporated';
import {TitanFloatingLaunchPad} from './TitanFloatingLaunchPad';
import {TradeEnvoys} from './TradeEnvoys';
import {TradingColony} from './TradingColony';
import {BuildColonyStandardProject} from './BuildColonyStandardProject';

export const COLONIES_CARD_MANIFEST = new ModuleManifest({
  module: 'colonies',

  projectCards: {
    [CardName.AIRLINERS]: {Factory: Airliners},
    [CardName.CRYO_SLEEP]: {Factory: CryoSleep},
    [CardName.ECOLOGY_RESEARCH]: {Factory: EcologyResearch},
    [CardName.ICE_MOON_COLONY]: {Factory: IceMoonColony},
    [CardName.INTERPLANETARY_COLONY_SHIP]: {Factory: InterplanetaryColonyShip},
    [CardName.MARKET_MANIPULATION]: {Factory: MarketManipulation},
    [CardName.MINING_COLONY]: {Factory: MiningColony},
    [CardName.MINORITY_REFUGE]: {Factory: MinorityRefuge},
    [CardName.MOLECULAR_PRINTING]: {Factory: MolecularPrinting},
    [CardName.PIONEER_SETTLEMENT]: {Factory: PioneerSettlement},
    [CardName.PRODUCTIVE_OUTPOST]: {Factory: ProductiveOutpost},
    [CardName.QUANTUM_COMMUNICATIONS]: {Factory: QuantumCommunications},
    [CardName.RESEARCH_COLONY]: {Factory: ResearchColony},
    [CardName.RIM_FREIGHTERS]: {Factory: RimFreighters},
    [CardName.SPACE_PORT]: {Factory: SpacePort},
    [CardName.SPACE_PORT_COLONY]: {Factory: SpacePortColony},
    [CardName.TITAN_FLOATING_LAUNCHPAD]: {Factory: TitanFloatingLaunchPad},
    [CardName.TRADING_COLONY]: {Factory: TradingColony},
    [CardName.TRADE_ENVOYS]: {Factory: TradeEnvoys},
  },
  standardProjects: {
    [CardName.BUILD_COLONY_STANDARD_PROJECT]: {Factory: BuildColonyStandardProject},
  },
  corporationCards: {
    [CardName.ARIDOR]: {Factory: Aridor, compatibility: 'colonies'},
    [CardName.ARKLIGHT]: {Factory: Arklight},
    [CardName.POLYPHEMOS]: {Factory: Polyphemos},
    [CardName.POSEIDON]: {Factory: Poseidon, compatibility: 'colonies'},
    [CardName.STORMCRAFT_INCORPORATED]: {Factory: StormCraftIncorporated},
  },
});

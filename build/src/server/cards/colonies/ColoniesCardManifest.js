"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLONIES_CARD_MANIFEST = void 0;
const CardName_1 = require("../../../common/cards/CardName");
const ModuleManifest_1 = require("../ModuleManifest");
const Airliners_1 = require("../venusNext/Airliners");
const Aridor_1 = require("./Aridor");
const Arklight_1 = require("./Arklight");
const CryoSleep_1 = require("./CryoSleep");
const EcologyResearch_1 = require("./EcologyResearch");
const IceMoonColony_1 = require("./IceMoonColony");
const InterplanetaryColonyShip_1 = require("./InterplanetaryColonyShip");
const MarketManipulation_1 = require("./MarketManipulation");
const MiningColony_1 = require("./MiningColony");
const MinorityRefuge_1 = require("./MinorityRefuge");
const MolecularPrinting_1 = require("./MolecularPrinting");
const PioneerSettlement_1 = require("./PioneerSettlement");
const Polyphemos_1 = require("./Polyphemos");
const Poseidon_1 = require("./Poseidon");
const ProductiveOutpost_1 = require("./ProductiveOutpost");
const QuantumCommunications_1 = require("./QuantumCommunications");
const ResearchColony_1 = require("./ResearchColony");
const RimFreighters_1 = require("./RimFreighters");
const SkyDocks_1 = require("./SkyDocks");
const SpacePort_1 = require("./SpacePort");
const SpacePortColony_1 = require("./SpacePortColony");
const StormCraftIncorporated_1 = require("./StormCraftIncorporated");
const TitanFloatingLaunchPad_1 = require("./TitanFloatingLaunchPad");
const TradeEnvoys_1 = require("./TradeEnvoys");
const TradingColony_1 = require("./TradingColony");
const UrbanDecomposers_1 = require("./UrbanDecomposers");
const BuildColonyStandardProject_1 = require("./BuildColonyStandardProject");
exports.COLONIES_CARD_MANIFEST = new ModuleManifest_1.ModuleManifest({
    module: 'colonies',
    projectCards: {
        [CardName_1.CardName.AIRLINERS]: { Factory: Airliners_1.Airliners },
        [CardName_1.CardName.CRYO_SLEEP]: { Factory: CryoSleep_1.CryoSleep },
        [CardName_1.CardName.ECOLOGY_RESEARCH]: { Factory: EcologyResearch_1.EcologyResearch },
        [CardName_1.CardName.ICE_MOON_COLONY]: { Factory: IceMoonColony_1.IceMoonColony },
        [CardName_1.CardName.INTERPLANETARY_COLONY_SHIP]: { Factory: InterplanetaryColonyShip_1.InterplanetaryColonyShip },
        [CardName_1.CardName.MARKET_MANIPULATION]: { Factory: MarketManipulation_1.MarketManipulation },
        [CardName_1.CardName.MINING_COLONY]: { Factory: MiningColony_1.MiningColony },
        [CardName_1.CardName.MINORITY_REFUGE]: { Factory: MinorityRefuge_1.MinorityRefuge },
        [CardName_1.CardName.MOLECULAR_PRINTING]: { Factory: MolecularPrinting_1.MolecularPrinting },
        [CardName_1.CardName.PIONEER_SETTLEMENT]: { Factory: PioneerSettlement_1.PioneerSettlement },
        [CardName_1.CardName.PRODUCTIVE_OUTPOST]: { Factory: ProductiveOutpost_1.ProductiveOutpost },
        [CardName_1.CardName.QUANTUM_COMMUNICATIONS]: { Factory: QuantumCommunications_1.QuantumCommunications },
        [CardName_1.CardName.RESEARCH_COLONY]: { Factory: ResearchColony_1.ResearchColony },
        [CardName_1.CardName.RIM_FREIGHTERS]: { Factory: RimFreighters_1.RimFreighters },
        [CardName_1.CardName.SKY_DOCKS]: { Factory: SkyDocks_1.SkyDocks },
        [CardName_1.CardName.SPACE_PORT]: { Factory: SpacePort_1.SpacePort },
        [CardName_1.CardName.SPACE_PORT_COLONY]: { Factory: SpacePortColony_1.SpacePortColony },
        [CardName_1.CardName.TITAN_FLOATING_LAUNCHPAD]: { Factory: TitanFloatingLaunchPad_1.TitanFloatingLaunchPad },
        [CardName_1.CardName.TRADING_COLONY]: { Factory: TradingColony_1.TradingColony },
        [CardName_1.CardName.TRADE_ENVOYS]: { Factory: TradeEnvoys_1.TradeEnvoys },
        [CardName_1.CardName.URBAN_DECOMPOSERS]: { Factory: UrbanDecomposers_1.UrbanDecomposers },
    },
    standardProjects: {
        [CardName_1.CardName.BUILD_COLONY_STANDARD_PROJECT]: { Factory: BuildColonyStandardProject_1.BuildColonyStandardProject },
    },
    corporationCards: {
        [CardName_1.CardName.ARIDOR]: { Factory: Aridor_1.Aridor, compatibility: 'colonies' },
        [CardName_1.CardName.ARKLIGHT]: { Factory: Arklight_1.Arklight },
        [CardName_1.CardName.POLYPHEMOS]: { Factory: Polyphemos_1.Polyphemos },
        [CardName_1.CardName.POSEIDON]: { Factory: Poseidon_1.Poseidon, compatibility: 'colonies' },
        [CardName_1.CardName.STORMCRAFT_INCORPORATED]: { Factory: StormCraftIncorporated_1.StormCraftIncorporated },
    },
});

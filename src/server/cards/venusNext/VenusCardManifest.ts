import {CardName} from '../../../common/cards/CardName';
import {ModuleManifest} from '../ModuleManifest';
import {AerialMappers} from './AerialMappers';
import {AerosportTournament} from './AerosportTournament';
import {AirScrappingStandardProject} from './AirScrappingStandardProject';
import {AirScrappingExpedition} from './AirScrappingExpedition';
import {Aphrodite} from './Aphrodite';
import {AtalantaPlanitiaLab} from './AtalantaPlanitiaLab';
import {Atmoscoop} from './Atmoscoop';
import {Celestic} from './Celestic';
import {CometForVenus} from './CometForVenus';
import {CorroderSuits} from './CorroderSuits';
import {DawnCity} from './DawnCity';
import {DeuteriumExport} from './DeuteriumExport';
import {Dirigibles} from './Dirigibles';
import {ExtractorBalloons} from './ExtractorBalloons';
import {Extremophiles} from './Extremophiles';
import {FloatingHabs} from './FloatingHabs';
import {ForcedPrecipitation} from './ForcedPrecipitation';
import {FreyjaBiodomes} from './FreyjaBiodomes';
import {GHGImportFromVenus} from './GHGImportFromVenus';
import {GiantSolarShade} from './GiantSolarShade';
import {Gyropolis} from './Gyropolis';
import {HydrogenToVenus} from './HydrogenToVenus';
import {IoSulphurResearch} from './IoSulphurResearch';
import {IshtarMining} from './IshtarMining';
import {JetStreamMicroscrappers} from './JetStreamMicroscrappers';
import {LocalShading} from './LocalShading';
import {LunaMetropolis} from './LunaMetropolis';
import {LuxuryFoods} from './LuxuryFoods';
import {Manutech} from './Manutech';
import {MaxwellBase} from './MaxwellBase';
import {MiningQuota} from './MiningQuota';
import {MorningStarInc} from './MorningStarInc';
import {NeutralizerFactory} from './NeutralizerFactory';
import {Omnicourt} from './Omnicourt';
import {OrbitalReflectors} from './OrbitalReflectors';
import {RotatorImpacts} from './RotatorImpacts';
import {SisterPlanetSupport} from './SisterPlanetSupport';
import {Solarnet} from './Solarnet';
import {SpinInducingAsteroid} from './SpinInducingAsteroid';
import {SponsoredAcademies} from './SponsoredAcademies';
import {Stratopolis} from './Stratopolis';
import {StratosphericBirds} from './StratosphericBirds';
import {SulphurEatingBacteria} from './SulphurEatingBacteria';
import {SulphurExports} from './SulphurExports';
import {TerraformingContract} from './TerraformingContract';
import {Thermophiles} from './Thermophiles';
import {VenusGovernor} from './VenusGovernor';
import {VenusianAnimals} from './VenusianAnimals';
import {VenusianInsects} from './VenusianInsects';
import {VenusianPlants} from './VenusianPlants';
import {VenusMagnetizer} from './VenusMagnetizer';
import {VenusSoils} from './VenusSoils';
import {VenusWaystation} from './VenusWaystation';
import {Viron} from './Viron';
import {WaterToVenus} from './WaterToVenus';
import {AirScrappingStandardProjectVariant} from './AirScrappingStandardProjectVariant';
import {Airliners} from './Airliners';
import {AirRaid} from './AirRaid';
import {AtmoCollectors} from './AtmoCollectors';
import {CommunityServices} from './CommunityServices';
import {Conscription} from './Conscription';
import {CoronaExtractor} from './CoronaExtractor';
import {EarthElevator} from './EarthElevator';
import {FloaterLeasing} from './FloaterLeasing';
import {FloaterPrototypes} from './FloaterPrototypes';
import {FloaterTechnology} from './FloaterTechnology';
import {GalileanWaystation} from './GalileanWaystation';
import {HeavyTaxation} from './HeavyTaxation';
import {ImpactorSwarm} from './ImpactorSwarm';
import {JovianLanterns} from './JovianLanterns';
import {JupiterFloatingStation} from './JupiterFloatingStation';
import {LunaGovernor} from './LunaGovernor';
import {LunarExports} from './LunarExports';
import {LunarMining} from './LunarMining';
import {MartianZoo} from './MartianZoo';
import {NitrogenFromTitan} from './NitrogenFromTitan';
import {RedSpotObservatory} from './RedSpotObservatory';
import {RefugeeCamps} from './RefugeeCamps';
import {SolarProbe} from './SolarProbe';
import {SolarReflectors} from './SolarReflectors';
import {SpinoffDepartment} from './SpinoffDepartment';
import {SubZeroSaltFish} from './SubZeroSaltFish';
import {TitanAirScrapping} from './TitanAirScrapping';
import {TitanShuttles} from './TitanShuttles';
import {WarpDrive} from './WarpDrive';

export const VENUS_CARD_MANIFEST = new ModuleManifest({
  module: 'venus',
  projectCards: {
    [CardName.AERIAL_MAPPERS]: {Factory: AerialMappers},
    [CardName.AEROSPORT_TOURNAMENT]: {Factory: AerosportTournament},
    [CardName.AIR_SCRAPPING_EXPEDITION]: {Factory: AirScrappingExpedition},
    [CardName.ATALANTA_PLANITIA_LAB]: {Factory: AtalantaPlanitiaLab},
    [CardName.ATMOSCOOP]: {Factory: Atmoscoop},
    [CardName.COMET_FOR_VENUS]: {Factory: CometForVenus},
    [CardName.CORRODER_SUITS]: {Factory: CorroderSuits},
    [CardName.DAWN_CITY]: {Factory: DawnCity},
    [CardName.DEUTERIUM_EXPORT]: {Factory: DeuteriumExport},
    [CardName.DIRIGIBLES]: {Factory: Dirigibles},
    [CardName.EXTRACTOR_BALLOONS]: {Factory: ExtractorBalloons},
    [CardName.EXTREMOPHILES]: {Factory: Extremophiles},
    [CardName.FLOATING_HABS]: {Factory: FloatingHabs},
    [CardName.FORCED_PRECIPITATION]: {Factory: ForcedPrecipitation},
    [CardName.FREYJA_BIODOMES]: {Factory: FreyjaBiodomes},
    [CardName.GIANT_SOLAR_SHADE]: {Factory: GiantSolarShade},
    [CardName.GHG_IMPORT_FROM_VENUS]: {Factory: GHGImportFromVenus},
    [CardName.GYROPOLIS]: {Factory: Gyropolis},
    [CardName.HYDROGEN_TO_VENUS]: {Factory: HydrogenToVenus},
    [CardName.IO_SULPHUR_RESEARCH]: {Factory: IoSulphurResearch},
    [CardName.ISHTAR_MINING]: {Factory: IshtarMining},
    [CardName.JET_STREAM_MICROSCRAPPERS]: {Factory: JetStreamMicroscrappers},
    [CardName.LUNA_METROPOLIS]: {Factory: LunaMetropolis},
    [CardName.LOCAL_SHADING]: {Factory: LocalShading},
    [CardName.MAXWELL_BASE]: {Factory: MaxwellBase},
    [CardName.ROTATOR_IMPACTS]: {Factory: RotatorImpacts},
    [CardName.SISTER_PLANET_SUPPORT]: {Factory: SisterPlanetSupport},
    [CardName.SOLARNET]: {Factory: Solarnet},
    [CardName.SPIN_INDUCING_ASTEROID]: {Factory: SpinInducingAsteroid},
    [CardName.SPONSORED_ACADEMIES]: {Factory: SponsoredAcademies},
    [CardName.STRATOPOLIS]: {Factory: Stratopolis},
    [CardName.STRATOSPHERIC_BIRDS]: {Factory: StratosphericBirds},
    [CardName.SULPHUR_EATING_BACTERIA]: {Factory: SulphurEatingBacteria},
    [CardName.SULPHUR_EXPORTS]: {Factory: SulphurExports},
    [CardName.TERRAFORMING_CONTRACT]: {Factory: TerraformingContract},
    [CardName.THERMOPHILES]: {Factory: Thermophiles},
    [CardName.VENUS_GOVERNOR]: {Factory: VenusGovernor},
    [CardName.VENUSIAN_ANIMALS]: {Factory: VenusianAnimals},
    [CardName.VENUSIAN_INSECTS]: {Factory: VenusianInsects},
    [CardName.VENUSIAN_PLANTS]: {Factory: VenusianPlants},
    [CardName.VENUS_MAGNETIZER]: {Factory: VenusMagnetizer},
    [CardName.VENUS_SOILS]: {Factory: VenusSoils},
    [CardName.VENUS_WAYSTATION]: {Factory: VenusWaystation},
    [CardName.WATER_TO_VENUS]: {Factory: WaterToVenus},
    [CardName.LUXURY_FOODS]: {Factory: LuxuryFoods},
    [CardName.NEUTRALIZER_FACTORY]: {Factory: NeutralizerFactory},
    [CardName.ORBITAL_REFLECTORS]: {Factory: OrbitalReflectors},
    [CardName.OMNICOURT]: {Factory: Omnicourt},
    [CardName.MINING_QUOTA]: {Factory: MiningQuota},
    [CardName.AIRLINERS]: {Factory: Airliners},
    [CardName.AIR_RAID]: {Factory: AirRaid},
    [CardName.ATMO_COLLECTORS]: {Factory: AtmoCollectors},
    [CardName.COMMUNITY_SERVICES]: {Factory: CommunityServices},
    [CardName.CONSCRIPTION]: {Factory: Conscription},
    [CardName.CORONA_EXTRACTOR]: {Factory: CoronaExtractor},
    [CardName.EARTH_ELEVATOR]: {Factory: EarthElevator},
    [CardName.FLOATER_LEASING]: {Factory: FloaterLeasing},
    [CardName.FLOATER_PROTOTYPES]: {Factory: FloaterPrototypes},
    [CardName.FLOATER_TECHNOLOGY]: {Factory: FloaterTechnology},
    [CardName.GALILEAN_WAYSTATION]: {Factory: GalileanWaystation},
    [CardName.HEAVY_TAXATION]: {Factory: HeavyTaxation},
    [CardName.IMPACTOR_SWARM]: {Factory: ImpactorSwarm},
    [CardName.JOVIAN_LANTERNS]: {Factory: JovianLanterns},
    [CardName.JUPITER_FLOATING_STATION]: {Factory: JupiterFloatingStation},
    [CardName.LUNA_GOVERNOR]: {Factory: LunaGovernor},
    [CardName.LUNAR_EXPORTS]: {Factory: LunarExports},
    [CardName.LUNAR_MINING]: {Factory: LunarMining},
    [CardName.MARTIAN_ZOO]: {Factory: MartianZoo},
    [CardName.NITROGEN_FROM_TITAN]: {Factory: NitrogenFromTitan},
    [CardName.RED_SPOT_OBSERVATORY]: {Factory: RedSpotObservatory},
    [CardName.REFUGEE_CAMPS]: {Factory: RefugeeCamps},
    [CardName.SOLAR_PROBE]: {Factory: SolarProbe},
    [CardName.SOLAR_REFLECTORS]: {Factory: SolarReflectors},
    [CardName.SPINOFF_DEPARTMENT]: {Factory: SpinoffDepartment},
    [CardName.SUBZERO_SALT_FISH]: {Factory: SubZeroSaltFish},
    [CardName.TITAN_AIRSCRAPPING]: {Factory: TitanAirScrapping},
    [CardName.TITAN_SHUTTLES]: {Factory: TitanShuttles},
    [CardName.WARP_DRIVE]: {Factory: WarpDrive},
  },
  standardProjects: {
    [CardName.AIR_SCRAPPING_STANDARD_PROJECT]: {Factory: AirScrappingStandardProject},
    [CardName.AIR_SCRAPPING_STANDARD_PROJECT_VARIANT]: {Factory: AirScrappingStandardProjectVariant},
  },

  corporationCards: {
    [CardName.APHRODITE]: {Factory: Aphrodite, compatibility: 'venus'},
    [CardName.CELESTIC]: {Factory: Celestic, compatibility: 'venus'},
    [CardName.MANUTECH]: {Factory: Manutech},
    [CardName.MORNING_STAR_INC]: {Factory: MorningStarInc, compatibility: 'venus'},
    [CardName.VIRON]: {Factory: Viron},
  },
});

import type { ConcernPage } from './types';

import { concern as babyArmyCrawlingOnly } from './baby-army-crawling-only';
import { concern as babyAsymmetricBodyMovement } from './baby-asymmetric-body-movement';
import { concern as babyAsymmetricCrawlingPattern } from './baby-asymmetric-crawling-pattern';
import { concern as babyAsymmetricTonicNeckPersistent } from './baby-asymmetric-tonic-neck-persistent';
import { concern as babyAtaxiaSigns } from './baby-ataxia-signs';
import { concern as babyBearWalking } from './baby-bear-walking';
import { concern as babyBilateralCoordinationPoor } from './baby-bilateral-coordination-poor';
import { concern as babyBodyStiffeningEpisodes } from './baby-body-stiffening-episodes';
import { concern as babyBottomShuffling } from './baby-bottom-shuffling';
import { concern as babyBreastBoneProtrusion } from './baby-breast-bone-protrusion';
import { concern as babyBunnyHoppingCrawl } from './baby-bunny-hopping-crawl';
import { concern as babyCantGetIntoSitting } from './baby-cant-get-into-sitting';
import { concern as babyChestIndentationPectus } from './baby-chest-indentation-pectus';
import { concern as babyClickingJoints } from './baby-clicking-joints';
import { concern as babyCrossingMidlineDifficulty } from './baby-crossing-midline-difficulty';
import { concern as babyCruisingNotWalking } from './baby-cruising-not-walking';
import { concern as babyCurvedSpinePosture } from './baby-curved-spine-posture';
import { concern as babyDisproportionateHeadBody } from './baby-disproportionate-head-body';
import { concern as babyDystoniaMovementPatterns } from './baby-dystonia-movement-patterns';
import { concern as babyFlatFeetNormal } from './baby-flat-feet-normal';
import { concern as babyFlexibleJointsHypermobility } from './baby-flexible-joints-hypermobility';
import { concern as babyFontanelleClosingEarly } from './baby-fontanelle-closing-early';
import { concern as babyFontanelleClosingLate } from './baby-fontanelle-closing-late';
import { concern as babyFootTurnedInward } from './baby-foot-turned-inward';
import { concern as babyFootTurnedOutward } from './baby-foot-turned-outward';
import { concern as babyFurnitureWalkingOneDirection } from './baby-furniture-walking-one-direction';
import { concern as babyGalantReflexPersistent } from './baby-galant-reflex-persistent';
import { concern as babyGenuVarumBowedLegsPersistent } from './baby-genu-varum-bowed-legs-persistent';
import { concern as babyGrowthPercentileDropping } from './baby-growth-percentile-dropping';
import { concern as babyGrowthPercentileJumping } from './baby-growth-percentile-jumping';
import { concern as babyHandDominanceTooEarly } from './baby-hand-dominance-too-early';
import { concern as babyHandWringingRepetitive } from './baby-hand-wringing-repetitive';
import { concern as babyHeadBobbingUnsupported } from './baby-head-bobbing-unsupported';
import { concern as babyHeadControlDelayed } from './baby-head-control-delayed';
import { concern as babyHeadGrowthTooFast } from './baby-head-growth-too-fast';
import { concern as babyHeadGrowthTooSlow } from './baby-head-growth-too-slow';
import { concern as babyHighArchesFeet } from './baby-high-arches-feet';
import { concern as babyHypertoniaMovementImpact } from './baby-hypertonia-movement-impact';
import { concern as babyHypotoniaFeedingImpact } from './baby-hypotonia-feeding-impact';
import { concern as babyInvoluntaryMovements } from './baby-involuntary-movements';
import { concern as babyLargeHeadFamilyTrait } from './baby-large-head-family-trait';
import { concern as babyLegsStiffWhenHeldStanding } from './baby-legs-stiff-when-held-standing';
import { concern as babyLengthPercentileDropping } from './baby-length-percentile-dropping';
import { concern as babyMouthExploringEverything } from './baby-mouth-exploring-everything';
import { concern as babyMouthingObjectsAfter12Months } from './baby-mouthing-objects-after-12-months';
import { concern as babyMuscleToneFluctuating } from './baby-muscle-tone-fluctuating';
import { concern as babyMuscleWastingSigns } from './baby-muscle-wasting-signs';
import { concern as babyNotBangingToysTogether } from './baby-not-banging-toys-together';
import { concern as babyNotLiftingHead45Degrees } from './baby-not-lifting-head-45-degrees';
import { concern as babyNotRakingSmallObjects } from './baby-not-raking-small-objects';
import { concern as babyNotReleasingObjects } from './baby-not-releasing-objects';
import { concern as babyNotRollingBackToFront } from './baby-not-rolling-back-to-front';
import { concern as babyNotSquattingFromStanding } from './baby-not-squatting-from-standing';
import { concern as babyNotTurningPages } from './baby-not-turning-pages';
import { concern as babyNotWeightBearingArmsTummy } from './baby-not-weight-bearing-arms-tummy';
import { concern as babyOccupationalTherapySigns } from './baby-occupational-therapy-signs';
import { concern as babyOrthopedicReferralSigns } from './baby-orthopedic-referral-signs';
import { concern as babyPalmarGraspReflexPersistent } from './baby-palmar-grasp-reflex-persistent';
import { concern as babyPhysicalTherapyWhenNeeded } from './baby-physical-therapy-when-needed';
import { concern as babyPlantarReflexPersistent } from './baby-plantar-reflex-persistent';
import { concern as babyPrimitiveReflexNotIntegrating } from './baby-primitive-reflex-not-integrating';
import { concern as babyPullingToStandLate } from './baby-pulling-to-stand-late';
import { concern as babyRibFlaring } from './baby-rib-flaring';
import { concern as babyRollingAsTransport } from './baby-rolling-as-transport';
import { concern as babyRollingOneDirectionOnly } from './baby-rolling-one-direction-only';
import { concern as babyShortStatureBothParents } from './baby-short-stature-both-parents';
import { concern as babySittingAlwaysPropped } from './baby-sitting-always-propped';
import { concern as babySittingFallingBackward } from './baby-sitting-falling-backward';
import { concern as babySittingWPosition } from './baby-sitting-w-position';
import { concern as babySkippingCrawlingWalking } from './baby-skipping-crawling-walking';
import { concern as babySmallHeadFamilyTrait } from './baby-small-head-family-trait';
import { concern as babySpasticitySigns } from './baby-spasticity-signs';
import { concern as babyStandingLegsCrossed } from './baby-standing-legs-crossed';
import { concern as babyStandingOnToesOnly } from './baby-standing-on-toes-only';
import { concern as babyTallForAgeConcerns } from './baby-tall-for-age-concerns';
import { concern as babyTeethEruptionEarly } from './baby-teeth-eruption-early';
import { concern as babyTeethEruptionOutOfOrder } from './baby-teeth-eruption-out-of-order';
import { concern as babyTeethEruptionVeryLate } from './baby-teeth-eruption-very-late';
import { concern as babyTonicLabyrinthineReflex } from './baby-tonic-labyrinthine-reflex';
import { concern as babyWalkingLate18Months } from './baby-walking-late-18-months';
import { concern as babyWalkingOnOutsideFeet } from './baby-walking-on-outside-feet';
import { concern as babyWalkingStiffLegged } from './baby-walking-stiff-legged';
import { concern as babyWalkingWideGait } from './baby-walking-wide-gait';
import { concern as babyWalkingWithArmsUp } from './baby-walking-with-arms-up';
import { concern as babyWeightGainTooRapid } from './baby-weight-gain-too-rapid';
import { concern as babyWeightPlateau } from './baby-weight-plateau';
import { concern as babyWontPutFeetDown } from './baby-wont-put-feet-down';
import { concern as fineMotorDelayGeneral } from './fine-motor-delay-general';
import { concern as toddlerBalanceBeamDifficulty } from './toddler-balance-beam-difficulty';
import { concern as toddlerBikeRidingReadiness } from './toddler-bike-riding-readiness';
import { concern as toddlerCantCatchBall } from './toddler-cant-catch-ball';
import { concern as toddlerCantClimbStairs } from './toddler-cant-climb-stairs';
import { concern as toddlerCantJumpTwoFeet } from './toddler-cant-jump-two-feet';
import { concern as toddlerCantKickBall } from './toddler-cant-kick-ball';
import { concern as toddlerCantPedalTricycle } from './toddler-cant-pedal-tricycle';
import { concern as toddlerCantStringBeads } from './toddler-cant-string-beads';
import { concern as toddlerCantThrowBall } from './toddler-cant-throw-ball';
import { concern as toddlerCantTurnDoorknob } from './toddler-cant-turn-doorknob';
import { concern as toddlerCantUnscrewLids } from './toddler-cant-unscrew-lids';
import { concern as toddlerCantUseScissors } from './toddler-cant-use-scissors';
import { concern as toddlerClimbingEverything } from './toddler-climbing-everything';
import { concern as toddlerClumsyCoordination } from './toddler-clumsy-coordination';
import { concern as toddlerCoordinationGettingWorse } from './toddler-coordination-getting-worse';
import { concern as toddlerDevelopmentalCoordinationDisorder } from './toddler-developmental-coordination-disorder';
import { concern as toddlerDifficultyWithButtons } from './toddler-difficulty-with-buttons';
import { concern as toddlerDyspraxiaSigns } from './toddler-dyspraxia-signs';
import { concern as toddlerGenuValgumKnockKneesSevere } from './toddler-genu-valgum-knock-knees-severe';
import { concern as toddlerGrowingPainsLegs } from './toddler-growing-pains-legs';
import { concern as toddlerGrowthSpurtBehavior } from './toddler-growth-spurt-behavior';
import { concern as toddlerHandTremorFineMotor } from './toddler-hand-tremor-fine-motor';
import { concern as toddlerJawAlignmentConcerns } from './toddler-jaw-alignment-concerns';
import { concern as toddlerJointSwelling } from './toddler-joint-swelling';
import { concern as toddlerLegLengthDiscrepancy } from './toddler-leg-length-discrepancy';
import { concern as toddlerLimpingAfterNap } from './toddler-limping-after-nap';
import { concern as toddlerNoSafetyAwarenessHeights } from './toddler-no-safety-awareness-heights';
import { concern as toddlerNotScribbling } from './toddler-not-scribbling';
import { concern as toddlerNotStackingTwoBlocks } from './toddler-not-stacking-two-blocks';
import { concern as toddlerNotUsingShapeSorter } from './toddler-not-using-shape-sorter';
import { concern as toddlerPlaygroundFear } from './toddler-playground-fear';
import { concern as toddlerPoorPencilGrip } from './toddler-poor-pencil-grip';
import { concern as toddlerRefusingToWalkPain } from './toddler-refusing-to-walk-pain';
import { concern as toddlerRegressionMotorSkills } from './toddler-regression-motor-skills';
import { concern as toddlerRunningAwkwardGait } from './toddler-running-awkward-gait';
import { concern as toddlerSensoryMotorPlayAvoidance } from './toddler-sensory-motor-play-avoidance';
import { concern as toddlerSportsReadiness } from './toddler-sports-readiness';
import { concern as toddlerSwimmingReadinessSkills } from './toddler-swimming-readiness-skills';
import { concern as toddlerSwingFear } from './toddler-swing-fear';
import { concern as toddlerTeethGrindingDamage } from './toddler-teeth-grinding-damage';
import { concern as toddlerToeWalkingIntermittent } from './toddler-toe-walking-intermittent';
import { concern as toddlerTrippingFallingOften } from './toddler-tripping-falling-often';

export const physicalMotorConcerns: ConcernPage[] = [
  babyArmyCrawlingOnly,
  babyAsymmetricBodyMovement,
  babyAsymmetricCrawlingPattern,
  babyAsymmetricTonicNeckPersistent,
  babyAtaxiaSigns,
  babyBearWalking,
  babyBilateralCoordinationPoor,
  babyBodyStiffeningEpisodes,
  babyBottomShuffling,
  babyBreastBoneProtrusion,
  babyBunnyHoppingCrawl,
  babyCantGetIntoSitting,
  babyChestIndentationPectus,
  babyClickingJoints,
  babyCrossingMidlineDifficulty,
  babyCruisingNotWalking,
  babyCurvedSpinePosture,
  babyDisproportionateHeadBody,
  babyDystoniaMovementPatterns,
  babyFlatFeetNormal,
  babyFlexibleJointsHypermobility,
  babyFontanelleClosingEarly,
  babyFontanelleClosingLate,
  babyFootTurnedInward,
  babyFootTurnedOutward,
  babyFurnitureWalkingOneDirection,
  babyGalantReflexPersistent,
  babyGenuVarumBowedLegsPersistent,
  babyGrowthPercentileDropping,
  babyGrowthPercentileJumping,
  babyHandDominanceTooEarly,
  babyHandWringingRepetitive,
  babyHeadBobbingUnsupported,
  babyHeadControlDelayed,
  babyHeadGrowthTooFast,
  babyHeadGrowthTooSlow,
  babyHighArchesFeet,
  babyHypertoniaMovementImpact,
  babyHypotoniaFeedingImpact,
  babyInvoluntaryMovements,
  babyLargeHeadFamilyTrait,
  babyLegsStiffWhenHeldStanding,
  babyLengthPercentileDropping,
  babyMouthExploringEverything,
  babyMouthingObjectsAfter12Months,
  babyMuscleToneFluctuating,
  babyMuscleWastingSigns,
  babyNotBangingToysTogether,
  babyNotLiftingHead45Degrees,
  babyNotRakingSmallObjects,
  babyNotReleasingObjects,
  babyNotRollingBackToFront,
  babyNotSquattingFromStanding,
  babyNotTurningPages,
  babyNotWeightBearingArmsTummy,
  babyOccupationalTherapySigns,
  babyOrthopedicReferralSigns,
  babyPalmarGraspReflexPersistent,
  babyPhysicalTherapyWhenNeeded,
  babyPlantarReflexPersistent,
  babyPrimitiveReflexNotIntegrating,
  babyPullingToStandLate,
  babyRibFlaring,
  babyRollingAsTransport,
  babyRollingOneDirectionOnly,
  babyShortStatureBothParents,
  babySittingAlwaysPropped,
  babySittingFallingBackward,
  babySittingWPosition,
  babySkippingCrawlingWalking,
  babySmallHeadFamilyTrait,
  babySpasticitySigns,
  babyStandingLegsCrossed,
  babyStandingOnToesOnly,
  babyTallForAgeConcerns,
  babyTeethEruptionEarly,
  babyTeethEruptionOutOfOrder,
  babyTeethEruptionVeryLate,
  babyTonicLabyrinthineReflex,
  babyWalkingLate18Months,
  babyWalkingOnOutsideFeet,
  babyWalkingStiffLegged,
  babyWalkingWideGait,
  babyWalkingWithArmsUp,
  babyWeightGainTooRapid,
  babyWeightPlateau,
  babyWontPutFeetDown,
  fineMotorDelayGeneral,
  toddlerBalanceBeamDifficulty,
  toddlerBikeRidingReadiness,
  toddlerCantCatchBall,
  toddlerCantClimbStairs,
  toddlerCantJumpTwoFeet,
  toddlerCantKickBall,
  toddlerCantPedalTricycle,
  toddlerCantStringBeads,
  toddlerCantThrowBall,
  toddlerCantTurnDoorknob,
  toddlerCantUnscrewLids,
  toddlerCantUseScissors,
  toddlerClimbingEverything,
  toddlerClumsyCoordination,
  toddlerCoordinationGettingWorse,
  toddlerDevelopmentalCoordinationDisorder,
  toddlerDifficultyWithButtons,
  toddlerDyspraxiaSigns,
  toddlerGenuValgumKnockKneesSevere,
  toddlerGrowingPainsLegs,
  toddlerGrowthSpurtBehavior,
  toddlerHandTremorFineMotor,
  toddlerJawAlignmentConcerns,
  toddlerJointSwelling,
  toddlerLegLengthDiscrepancy,
  toddlerLimpingAfterNap,
  toddlerNoSafetyAwarenessHeights,
  toddlerNotScribbling,
  toddlerNotStackingTwoBlocks,
  toddlerNotUsingShapeSorter,
  toddlerPlaygroundFear,
  toddlerPoorPencilGrip,
  toddlerRefusingToWalkPain,
  toddlerRegressionMotorSkills,
  toddlerRunningAwkwardGait,
  toddlerSensoryMotorPlayAvoidance,
  toddlerSportsReadiness,
  toddlerSwimmingReadinessSkills,
  toddlerSwingFear,
  toddlerTeethGrindingDamage,
  toddlerToeWalkingIntermittent,
  toddlerTrippingFallingOften,
];

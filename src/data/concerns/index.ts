import type { ConcernPage, ConcernCategory } from './types';

import { concern as abdominalDistensionBaby } from './abdominal-distension-baby';
import { concern as abnormalHeadShape } from './abnormal-head-shape';
import { concern as accentVsSpeechDisorderToddler } from './accent-vs-speech-disorder-toddler';
import { concern as achondroplasiaBaby } from './achondroplasia-baby';
import { concern as adenoidHypertrophyBreathing } from './adenoid-hypertrophy-breathing';
import { concern as aggressivePlayVsNormalPlay } from './aggressive-play-vs-normal-play';
import { concern as aggressiveTowardPets } from './aggressive-toward-pets';
import { concern as airQualityPollutionBabyHealth } from './air-quality-pollution-baby-health';
import { concern as allergenIntroductionTiming } from './allergen-introduction-timing';
import { concern as altitudeSicknessBaby } from './altitude-sickness-baby';
import { concern as amblyopiaLazyEyeTreatmentTiming } from './amblyopia-lazy-eye-treatment-timing';
import { concern as amblyopiaSigns } from './amblyopia-signs';
import { concern as analFissureBaby } from './anal-fissure-baby';
import { concern as anaphylaxisSignsInBaby } from './anaphylaxis-signs-in-baby';
import { concern as angelmanSyndromeSigns } from './angelman-syndrome-signs';
import { concern as anisocoriaUnequalPupils } from './anisocoria-unequal-pupils';
import { concern as apneaSpellsBaby } from './apnea-spells-baby';
import { concern as aspirationDuringFeeding } from './aspiration-during-feeding';
import { concern as asthmaDiagnosisBabyToddler } from './asthma-diagnosis-baby-toddler';
import { concern as asymmetricMovement } from './asymmetric-movement';
import { concern as attachmentConcerns } from './attachment-concerns';
import { concern as attachmentParentingBurnout } from './attachment-parenting-burnout';
import { concern as auditoryProcessingDisorderToddler } from './auditory-processing-disorder-toddler';
import { concern as babyAcne } from './baby-acne';
import { concern as babyAllergicReactionMedicine } from './baby-allergic-reaction-medicine';
import { concern as babyAllergicReactionToFood } from './baby-allergic-reaction-to-food';
import { concern as babyAllergicToPetDander } from './baby-allergic-to-pet-dander';
import { concern as babyAnimalBite } from './baby-animal-bite';
import { concern as babyAntibioticSideEffects } from './baby-antibiotic-side-effects';
import { concern as babyArchingAndCryingDuringFeeding } from './baby-arching-and-crying-during-feeding';
import { concern as babyArchingBack } from './baby-arching-back';
import { concern as babyBeeWaspSting } from './baby-bee-wasp-sting';
import { concern as babyBitingNippleWhileNursing } from './baby-biting-nipple-while-nursing';
import { concern as babyBlisterOnLipFromNursing } from './baby-blister-on-lip-from-nursing';
import { concern as babyBlistersOnSkin } from './baby-blisters-on-skin';
import { concern as babyBlueLipsWhenCold } from './baby-blue-lips-when-cold';
import { concern as babyBodyOdor } from './baby-body-odor';
import { concern as babyBornWithTeeth } from './baby-born-with-teeth';
import { concern as babyBottleRotCavities } from './baby-bottle-rot-cavities';
import { concern as babyBreathingFast } from './baby-breathing-fast';
import { concern as babyBreathingPatternsNormal } from './baby-breathing-patterns-normal';
import { concern as babyBrokenBoneFractureSigns } from './baby-broken-bone-fracture-signs';
import { concern as babyBruiseThatWontGoAway } from './baby-bruise-that-wont-go-away';
import { concern as babyBruisesEasily } from './baby-bruises-easily';
import { concern as babyBurnTreatment } from './baby-burn-treatment';
import { concern as babyCarseatSafetyAfterAccident } from './baby-carseat-safety-after-accident';
import { concern as babyCatnapping30Minutes } from './baby-catnapping-30-minutes';
import { concern as babyChestRetractions } from './baby-chest-retractions';
import { concern as babyChinRashFromDrool } from './baby-chin-rash-from-drool';
import { concern as babyChokingOnFood } from './baby-choking-on-food';
import { concern as babyChokingOnLiquids } from './baby-choking-on-liquids';
import { concern as babyChokingVsGaggingDifference } from './baby-choking-vs-gagging-difference';
import { concern as babyCircumcisionCare } from './baby-circumcision-care';
import { concern as babyClenchingFistsAfter3Months } from './baby-clenching-fists-after-3-months';
import { concern as babyCloggedMilkDuct } from './baby-clogged-milk-duct';
import { concern as babyColdHandsAndFeet } from './baby-cold-hands-and-feet';
import { concern as babyColdVsFluDifference } from './baby-cold-vs-flu-difference';
import { concern as babyColdWhenToWorry } from './baby-cold-when-to-worry';
import { concern as babyConcussionSigns } from './baby-concussion-signs';
import { concern as babyConjunctivitisViralVsBacterial } from './baby-conjunctivitis-viral-vs-bacterial';
import { concern as babyCoughingALot } from './baby-coughing-a-lot';
import { concern as babyCoughingAtNight } from './baby-coughing-at-night';
import { concern as babyCoughingWhileFeeding } from './baby-coughing-while-feeding';
import { concern as babyCovidSymptoms } from './baby-covid-symptoms';
import { concern as babyCoxsackieVirus } from './baby-coxsackie-virus';
import { concern as babyCriesWhenPutDownToSleep } from './baby-cries-when-put-down-to-sleep';
import { concern as babyCurlingToes } from './baby-curling-toes';
import { concern as babyCutBleedingWound } from './baby-cut-bleeding-wound';
import { concern as babyDarkCirclesUnderEyes } from './baby-dark-circles-under-eyes';
import { concern as babyDaycareIllnessFrequency } from './baby-daycare-illness-frequency';
import { concern as babyDaylightSavingTimeSleep } from './baby-daylight-saving-time-sleep';
import { concern as babyDelayedToothEruption } from './baby-delayed-tooth-eruption';
import { concern as babyDentalInjuryChippedTooth } from './baby-dental-injury-chipped-tooth';
import { concern as babyDislocatedElbowNursemaids } from './baby-dislocated-elbow-nursemaids';
import { concern as babyDryCrackedSkinHands } from './baby-dry-cracked-skin-hands';
import { concern as babyDryPatchesOnCheeks } from './baby-dry-patches-on-cheeks';
import { concern as babyDryScalpFlakes } from './baby-dry-scalp-flakes';
import { concern as babyEarInfectionVsTeething } from './baby-ear-infection-vs-teething';
import { concern as babyEarPulling } from './baby-ear-pulling';
import { concern as babyEarWaxBuildup } from './baby-ear-wax-buildup';
import { concern as babyEatingNonFoodPica } from './baby-eating-non-food-pica';
import { concern as babyEatingTooMuch } from './baby-eating-too-much';
import { concern as babyEczemaVsDrySkin } from './baby-eczema-vs-dry-skin';
import { concern as babyEggAllergySigns } from './baby-egg-allergy-signs';
import { concern as babyElectricalShock } from './baby-electrical-shock';
import { concern as babyExcessiveBurping } from './baby-excessive-burping';
import { concern as babyExcessiveCryingNoReason } from './baby-excessive-crying-no-reason';
import { concern as babyExcessiveGasAfterSolids } from './baby-excessive-gas-after-solids';
import { concern as babyEyeColorChangeTimeline } from './baby-eye-color-change-timeline';
import { concern as babyEyeDischargeYellowGreen } from './baby-eye-discharge-yellow-green';
import { concern as babyEyesSensitiveToLight } from './baby-eyes-sensitive-to-light';
import { concern as babyFallingAsleepWhileNursing } from './baby-falling-asleep-while-nursing';
import { concern as babyFallsAsleepOnlyInCar } from './baby-falls-asleep-only-in-car';
import { concern as babyFavoringOneLeg } from './baby-favoring-one-leg';
import { concern as babyFavoritismOneParent } from './baby-favoritism-one-parent';
import { concern as babyFeedingTooFast } from './baby-feeding-too-fast';
import { concern as babyFellDownStairs } from './baby-fell-down-stairs';
import { concern as babyFellOffBed } from './baby-fell-off-bed';
import { concern as babyFightingSleep } from './baby-fighting-sleep';
import { concern as babyFirstAidKitEssentials } from './baby-first-aid-kit-essentials';
import { concern as babyFirstDentalVisitTiming } from './baby-first-dental-visit-timing';
import { concern as babyFlatAffectNoExpression } from './baby-flat-affect-no-expression';
import { concern as babyFluSymptoms } from './baby-flu-symptoms';
import { concern as babyFoodHeavyMetalsConcern } from './baby-food-heavy-metals-concern';
import { concern as babyForeignObjectInEar } from './baby-foreign-object-in-ear';
import { concern as babyForeignObjectInNose } from './baby-foreign-object-in-nose';
import { concern as babyGaggingOnTextures } from './baby-gagging-on-textures';
import { concern as babyGrindingTeethSleep } from './baby-grinding-teeth-sleep';
import { concern as babyGrindingTeeth } from './baby-grinding-teeth';
import { concern as babyGrowingTooFast } from './baby-growing-too-fast';
import { concern as babyGrowingTooSlow } from './baby-growing-too-slow';
import { concern as babyGulpingAir } from './baby-gulping-air';
import { concern as babyHairNotGrowing } from './baby-hair-not-growing';
import { concern as babyHairTourniquet } from './baby-hair-tourniquet';
import { concern as babyHandFlapping } from './baby-hand-flapping';
import { concern as babyHandFootMouthContagiousPeriod } from './baby-hand-foot-mouth-contagious-period';
import { concern as babyHeadTiltToOneSide } from './baby-head-tilt-to-one-side';
import { concern as babyHeartMurmur } from './baby-heart-murmur';
import { concern as babyHiccups } from './baby-hiccups';
import { concern as babyHickeyLikeMarkOnSkin } from './baby-hickey-like-mark-on-skin';
import { concern as babyHighFeverOver104 } from './baby-high-fever-over-104';
import { concern as babyHighPitchedScream } from './baby-high-pitched-scream';
import { concern as babyHitHeadWhenToWorry } from './baby-hit-head-when-to-worry';
import { concern as babyHoldingFoodInMouth } from './baby-holding-food-in-mouth';
import { concern as babyHoneyExposure } from './baby-honey-exposure';
import { concern as babyIbuprofenDosingSafety } from './baby-ibuprofen-dosing-safety';
import { concern as babyIngrownToenail } from './baby-ingrown-toenail';
import { concern as babyJerkyMovements } from './baby-jerky-movements';
import { concern as babyLactoseIntoleranceSigns } from './baby-lactose-intolerance-signs';
import { concern as babyLactoseOverload } from './baby-lactose-overload';
import { concern as babyLedWeaningSafety } from './baby-led-weaning-safety';
import { concern as babyLegsShakingWhenStanding } from './baby-legs-shaking-when-standing';
import { concern as babyLiceTreatment } from './baby-lice-treatment';
import { concern as babyLimping } from './baby-limping';
import { concern as babyLosingWords } from './baby-losing-words';
import { concern as babyLumpOnHeadAfterBirth } from './baby-lump-on-head-after-birth';
import { concern as babyMoaningInSleep } from './baby-moaning-in-sleep';
import { concern as babyMoldExposureSymptoms } from './baby-mold-exposure-symptoms';
import { concern as babyMonitorAnxietyParent } from './baby-monitor-anxiety-parent';
import { concern as babyMonitorSafety } from './baby-monitor-safety';
import { concern as babyMouthBreathing } from './baby-mouth-breathing';
import { concern as babyNailPeeling } from './baby-nail-peeling';
import { concern as babyNappingTooMuch } from './baby-napping-too-much';
import { concern as babyNearDrowning } from './baby-near-drowning';
import { concern as babyNeedsRockingToSleep } from './baby-needs-rocking-to-sleep';
import { concern as babyNonFebrileSeizure } from './baby-non-febrile-seizure';
import { concern as babyNosebleed } from './baby-nosebleed';
import { concern as babyNotBabbling } from './baby-not-babbling';
import { concern as babyNotBearingWeightOnArms } from './baby-not-bearing-weight-on-arms';
import { concern as babyNotBringingHandsToMidline } from './baby-not-bringing-hands-to-midline';
import { concern as babyNotDrinkingEnoughMilk } from './baby-not-drinking-enough-milk';
import { concern as babyNotDrinkingEnoughWater } from './baby-not-drinking-enough-water';
import { concern as babyNotEatingAfterIllness } from './baby-not-eating-after-illness';
import { concern as babyNotGainingHeight } from './baby-not-gaining-height';
import { concern as babyNotGraspingObjects } from './baby-not-grasping-objects';
import { concern as babyNotHoldingHeadSteady } from './baby-not-holding-head-steady';
import { concern as babyNotImitatingActions } from './baby-not-imitating-actions';
import { concern as babyNotInterestedInFood } from './baby-not-interested-in-food';
import { concern as babyNotInterestedInPeople } from './baby-not-interested-in-people';
import { concern as babyNotKickingLegs } from './baby-not-kicking-legs';
import { concern as babyNotLaughingAtPeekABoo } from './baby-not-laughing-at-peek-a-boo';
import { concern as babyNotMakingEyeContactVision } from './baby-not-making-eye-contact-vision';
import { concern as babyNotMakingVowelSounds } from './baby-not-making-vowel-sounds';
import { concern as babyNotPlayingIndependently } from './baby-not-playing-independently';
import { concern as babyNotPlayingWithToys } from './baby-not-playing-with-toys';
import { concern as babyNotPoopingForAWeek } from './baby-not-pooping-for-a-week';
import { concern as babyNotPushingUpOnTummy } from './baby-not-pushing-up-on-tummy';
import { concern as babyNotRespondingToFacialExpressions } from './baby-not-responding-to-facial-expressions';
import { concern as babyNotRespondingToMusic } from './baby-not-responding-to-music';
import { concern as babyNotRespondingToOwnNameConsistently } from './baby-not-responding-to-own-name-consistently';
import { concern as babyNotSelfFeeding } from './baby-not-self-feeding';
import { concern as babyNotShowingAffection } from './baby-not-showing-affection';
import { concern as babyNotSittingIndependently } from './baby-not-sitting-independently';
import { concern as babyNotSleepingEnough } from './baby-not-sleeping-enough';
import { concern as babyNotStackingBlocks } from './baby-not-stacking-blocks';
import { concern as babyNotTakingTurnsInConversation } from './baby-not-taking-turns-in-conversation';
import { concern as babyNotTrackingObjectsWithEyes } from './baby-not-tracking-objects-with-eyes';
import { concern as babyNotTurningToSounds } from './baby-not-turning-to-sounds';
import { concern as babyNotUsingOneArm } from './baby-not-using-one-arm';
import { concern as babyOnlySleepsBeingHeld } from './baby-only-sleeps-being-held';
import { concern as babyPeanutAllergySigns } from './baby-peanut-allergy-signs';
import { concern as babyPersistentEczema } from './baby-persistent-eczema';
import { concern as babyPinkEye } from './baby-pink-eye';
import { concern as babyPinworms } from './baby-pinworms';
import { concern as babyPoisoningSigns } from './baby-poisoning-signs';
import { concern as babyPoopColorChangesWithSolids } from './baby-poop-color-changes-with-solids';
import { concern as babyPreferringOneParent } from './baby-preferring-one-parent';
import { concern as babyQuietNotVocalizing } from './baby-quiet-not-vocalizing';
import { concern as babyRaisedBumpsOnSkin } from './baby-raised-bumps-on-skin';
import { concern as babyRashAfterSwimming } from './baby-rash-after-swimming';
import { concern as babyRashAroundMouth } from './baby-rash-around-mouth';
import { concern as babyRashInSkinFolds } from './baby-rash-in-skin-folds';
import { concern as babyRashWontGoAway } from './baby-rash-wont-go-away';
import { concern as babyRaspberriesButNoWords } from './baby-raspberries-but-no-words';
import { concern as babyRectalBleeding } from './baby-rectal-bleeding';
import { concern as babyRedBirthmarkGrowing } from './baby-red-birthmark-growing';
import { concern as babyRedRingRash } from './baby-red-ring-rash';
import { concern as babyRefusingOneBreast } from './baby-refusing-one-breast';
import { concern as babyRefusingSippyCup } from './baby-refusing-sippy-cup';
import { concern as babyRefusingWater } from './baby-refusing-water';
import { concern as babyRegressionAfterStartingDaycare } from './baby-regression-after-starting-daycare';
import { concern as babyRollingOntoStomachSleep } from './baby-rolling-onto-stomach-sleep';
import { concern as babyRubbingEyesExcessively } from './baby-rubbing-eyes-excessively';
import { concern as babyScalpCradleCapPersistent } from './baby-scalp-cradle-cap-persistent';
import { concern as babyScratchMarksOnFace } from './baby-scratch-marks-on-face';
import { concern as babyScreamingInSleep } from './baby-screaming-in-sleep';
import { concern as babySeasonalAllergies } from './baby-seasonal-allergies';
import { concern as babySeparationAnxietyAtDaycare } from './baby-separation-anxiety-at-daycare';
import { concern as babyShakingHeadSideToSide } from './baby-shaking-head-side-to-side';
import { concern as babySkinInfectionStaph } from './baby-skin-infection-staph';
import { concern as babySkinRashAfterNewFood } from './baby-skin-rash-after-new-food';
import { concern as babySleepAssociations } from './baby-sleep-associations';
import { concern as babySleepRegression24Months } from './baby-sleep-regression-24-months';
import { concern as babySleepScheduleDisruptedByTravel } from './baby-sleep-schedule-disrupted-by-travel';
import { concern as babySleepTrainingWhenToStart } from './baby-sleep-training-when-to-start';
import { concern as babySleepingFaceDown } from './baby-sleeping-face-down';
import { concern as babySleepingInCarSeatDanger } from './baby-sleeping-in-car-seat-danger';
import { concern as babySleepingMouthOpen } from './baby-sleeping-mouth-open';
import { concern as babySleepingOnIncline } from './baby-sleeping-on-incline';
import { concern as babySneezingALot } from './baby-sneezing-a-lot';
import { concern as babySpittingOutSolids } from './baby-spitting-out-solids';
import { concern as babyStartingSolidsWhenReady } from './baby-starting-solids-when-ready';
import { concern as babyStartledEasily } from './baby-startled-easily';
import { concern as babyStomachGurglingLoud } from './baby-stomach-gurgling-loud';
import { concern as babyStrainingButSoftPoop } from './baby-straining-but-soft-poop';
import { concern as babyStrangerAnxietyExtreme } from './baby-stranger-anxiety-extreme';
import { concern as babyStrepThroat } from './baby-strep-throat';
import { concern as babyStridorNoisyBreathing } from './baby-stridor-noisy-breathing';
import { concern as babyStrongSmellingUrine } from './baby-strong-smelling-urine';
import { concern as babySunburnPrevention } from './baby-sunburn-prevention';
import { concern as babySunscreenWhenToUse } from './baby-sunscreen-when-to-use';
import { concern as babySupplementingWithFormula } from './baby-supplementing-with-formula';
import { concern as babySwallowedBattery } from './baby-swallowed-battery';
import { concern as babySwallowedMagnet } from './baby-swallowed-magnet';
import { concern as babySwallowedSomethingDangerous } from './baby-swallowed-something-dangerous';
import { concern as babySweatingALot } from './baby-sweating-a-lot';
import { concern as babySweatingDuringSleep } from './baby-sweating-during-sleep';
import { concern as babySwollenEye } from './baby-swollen-eye';
import { concern as babySwollenFingerToe } from './baby-swollen-finger-toe';
import { concern as babyTeethComingInWrongOrder } from './baby-teeth-coming-in-wrong-order';
import { concern as babyTeethDiscoloredGray } from './baby-teeth-discolored-gray';
import { concern as babyTeethGapSpacing } from './baby-teeth-gap-spacing';
import { concern as babyTeethNotFallingOut } from './baby-teeth-not-falling-out';
import { concern as babyTeethYellowStaining } from './baby-teeth-yellow-staining';
import { concern as babyTeethingFeverMyth } from './baby-teething-fever-myth';
import { concern as babyTickBite } from './baby-tick-bite';
import { concern as babyTongueColorChanges } from './baby-tongue-color-changes';
import { concern as babyTooQuietNeverCries } from './baby-too-quiet-never-cries';
import { concern as babyTravelAltitudeEars } from './baby-travel-altitude-ears';
import { concern as babyTremors } from './baby-tremors';
import { concern as babyTwitchingInSleep } from './baby-twitching-in-sleep';
import { concern as babyUnevenCrawling } from './baby-uneven-crawling';
import { concern as babyVitaminSupplementOverdose } from './baby-vitamin-supplement-overdose';
import { concern as babyVomitingAfterCrying } from './baby-vomiting-after-crying';
import { concern as babyVomitingAtNightOnly } from './baby-vomiting-at-night-only';
import { concern as babyVomitingBile } from './baby-vomiting-bile';
import { concern as babyVomitingNoFever } from './baby-vomiting-no-fever';
import { concern as babyWakingAt5am } from './baby-waking-at-5am';
import { concern as babyWakingEveryHour } from './baby-waking-every-hour';
import { concern as babyWaterWhenToIntroduce } from './baby-water-when-to-introduce';
import { concern as babyWhitePatchesOnSkin } from './baby-white-patches-on-skin';
import { concern as babyWhiteTongue } from './baby-white-tongue';
import { concern as babyWontSleepInCrib } from './baby-wont-sleep-in-crib';
import { concern as babyWontSwallow } from './baby-wont-swallow';
import { concern as bassinetVsCribSafety } from './bassinet-vs-crib-safety';
import { concern as beachSafetyBabyToddler } from './beach-safety-baby-toddler';
import { concern as bedwettingEnuresisToddler } from './bedwetting-enuresis-toddler';
import { concern as biliaryAtresiaSigns } from './biliary-atresia-signs';
import { concern as bilingualSpeechDelay } from './bilingual-speech-delay';
import { concern as birthmarks } from './birthmarks';
import { concern as bitingDuringBreastfeeding } from './biting-during-breastfeeding';
import { concern as biting } from './biting';
import { concern as blackPoop } from './black-poop';
import { concern as blockedTearDuct } from './blocked-tear-duct';
import { concern as bloodInDiaperNewborn } from './blood-in-diaper-newborn';
import { concern as bloodInMucusBaby } from './blood-in-mucus-baby';
import { concern as bloodyStool } from './bloody-stool';
import { concern as bondingDifficultyWithBaby } from './bonding-difficulty-with-baby';
import { concern as bottleAversion } from './bottle-aversion';
import { concern as bottlePreference } from './bottle-preference';
import { concern as bowleggedBaby } from './bowlegged-baby';
import { concern as breastBudsNewborn } from './breast-buds-newborn';
import { concern as breastfeedingGriefWhenStopping } from './breastfeeding-grief-when-stopping';
import { concern as breastfeedingToFormulaTransition } from './breastfeeding-to-formula-transition';
import { concern as breathHoldingSpells } from './breath-holding-spells';
import { concern as bronchiolitisBaby } from './bronchiolitis-baby';
import { concern as bronchiolitisVsPneumonia } from './bronchiolitis-vs-pneumonia';
import { concern as cafeAuLaitSpots } from './cafe-au-lait-spots';
import { concern as calciumNeedsToddler } from './calcium-needs-toddler';
import { concern as caputSuccedaneumHeadSwelling } from './caput-succedaneum-head-swelling';
import { concern as carSicknessBabyToddler } from './car-sickness-baby-toddler';
import { concern as catchUpGrowthPrematureBaby } from './catch-up-growth-premature-baby';
import { concern as cellulitisBaby } from './cellulitis-baby';
import { concern as cephalohematomaNewborn } from './cephalohematoma-newborn';
import { concern as cervicalInsufficiency } from './cervical-insufficiency';
import { concern as chickenPoxBaby } from './chicken-pox-baby';
import { concern as childNotAskingWhyQuestions } from './child-not-asking-why-questions';
import { concern as childNotFollowingDirections } from './child-not-following-directions';
import { concern as childNotTellingSimpleStories } from './child-not-telling-simple-stories';
import { concern as childNotUsingPastTense } from './child-not-using-past-tense';
import { concern as chokingHazardFoodsList } from './choking-hazard-foods-list';
import { concern as cholestasisOfPregnancy } from './cholestasis-of-pregnancy';
import { concern as cholesteatomaBaby } from './cholesteatoma-baby';
import { concern as chronicCongestion } from './chronic-congestion';
import { concern as chronicCoughToddler } from './chronic-cough-toddler';
import { concern as circadianRhythmBaby } from './circadian-rhythm-baby';
import { concern as circumcisionHealingComplications } from './circumcision-healing-complications';
import { concern as cleftLipPalateBaby } from './cleft-lip-palate-baby';
import { concern as clubfootBaby } from './clubfoot-baby';
import { concern as clusterFeedingNewborn } from './cluster-feeding-newborn';
import { concern as cmpaVsLactoseIntolerance } from './cmpa-vs-lactose-intolerance';
import { concern as coParentingDifferentStyles } from './co-parenting-different-styles';
import { concern as coarctationOfAortaBaby } from './coarctation-of-aorta-baby';
import { concern as coldWeatherBabyOutdoorSafety } from './cold-weather-baby-outdoor-safety';
import { concern as colicVsGas } from './colic-vs-gas';
import { concern as colic } from './colic';
import { concern as colobomaEyeBaby } from './coloboma-eye-baby';
import { concern as comparisonAnxietySocialMedia } from './comparison-anxiety-social-media';
import { concern as confusionalArousals } from './confusional-arousals';
import { concern as congenitalCataractsBaby } from './congenital-cataracts-baby';
import { concern as congenitalHearingLossTypes } from './congenital-hearing-loss-types';
import { concern as congenitalHeartDefectSigns } from './congenital-heart-defect-signs';
import { concern as congenitalHypothyroidism } from './congenital-hypothyroidism';
import { concern as constipationFromMedicationBaby } from './constipation-from-medication-baby';
import { concern as constipation } from './constipation';
import { concern as constitutionalGrowthDelay } from './constitutional-growth-delay';
import { concern as contactDermatitisBaby } from './contact-dermatitis-baby';
import { concern as cosleepingSafety } from './cosleeping-safety';
import { concern as cosleepingToCribTransition } from './cosleeping-to-crib-transition';
import { concern as cowsMilkTransitionIssues } from './cows-milk-transition-issues';
import { concern as cradleCap } from './cradle-cap';
import { concern as craniosynostosisSigns } from './craniosynostosis-signs';
import { concern as crawlingBackwards } from './crawling-backwards';
import { concern as crossedEyes } from './crossed-eyes';
import { concern as croupBaby } from './croup-baby';
import { concern as croupVsWhoopingCough } from './croup-vs-whooping-cough';
import { concern as curvedSpineBaby } from './curved-spine-baby';
import { concern as cyanosisBaby } from './cyanosis-baby';
import { concern as cysticFibrosisBabySigns } from './cystic-fibrosis-baby-signs';
import { concern as dacryocystitisTearDuctInfection } from './dacryocystitis-tear-duct-infection';
import { concern as daycareIllnessFrequencyNormal } from './daycare-illness-frequency-normal';
import { concern as daycareNapStruggles } from './daycare-nap-struggles';
import { concern as daycareReadinessSigns } from './daycare-readiness-signs';
import { concern as daycareSeparationCryingDuration } from './daycare-separation-crying-duration';
import { concern as defiantToddler } from './defiant-toddler';
import { concern as dehydrationSignsBaby } from './dehydration-signs-baby';
import { concern as delayedAllergicReactionBaby } from './delayed-allergic-reaction-baby';
import { concern as delayedCrawling } from './delayed-crawling';
import { concern as delayedFineMotor } from './delayed-fine-motor';
import { concern as delayedHandDominance } from './delayed-hand-dominance';
import { concern as delayedHandPreference } from './delayed-hand-preference';
import { concern as delayedLanguageInBilingualChild } from './delayed-language-in-bilingual-child';
import { concern as delayedMeconiumPassage } from './delayed-meconium-passage';
import { concern as delayedPincerGraspDevelopment } from './delayed-pincer-grasp-development';
import { concern as delayedPretendPlay } from './delayed-pretend-play';
import { concern as delayedReceptiveLanguage } from './delayed-receptive-language';
import { concern as delayedWalkingOnTiptoes } from './delayed-walking-on-tiptoes';
import { concern as diaperRashNotClearing } from './diaper-rash-not-clearing';
import { concern as diaperRash } from './diaper-rash';
import { concern as diarrhea } from './diarrhea';
import { concern as difficultyUsingUtensils } from './difficulty-using-utensils';
import { concern as difficultyWithConsonants } from './difficulty-with-consonants';
import { concern as disproportionateGrowthBaby } from './disproportionate-growth-baby';
import { concern as downSyndromeBabyDevelopment } from './down-syndrome-baby-development';
import { concern as dreamFeeds } from './dream-feeds';
import { concern as drinkingTooMuchMilk } from './drinking-too-much-milk';
import { concern as droolingWhileTalking } from './drooling-while-talking';
import { concern as droppingFromTwoNapsToOne } from './dropping-from-two-naps-to-one';
import { concern as drySkin } from './dry-skin';
import { concern as dustMiteAllergyBaby } from './dust-mite-allergy-baby';
import { concern as earDischargeOtorrheaBaby } from './ear-discharge-otorrhea-baby';
import { concern as earInfections } from './ear-infections';
import { concern as earPainNoInfectionBaby } from './ear-pain-no-infection-baby';
import { concern as earTubeSurgeryBaby } from './ear-tube-surgery-baby';
import { concern as earlyChildhoodCavities } from './early-childhood-cavities';
import { concern as earlyHandPreference } from './early-hand-preference';
import { concern as earlyMorningWaking } from './early-morning-waking';
import { concern as earlySignsOfAutismBaby } from './early-signs-of-autism-baby';
import { concern as echolalia } from './echolalia';
import { concern as ectopicPregnancyWarningSigns } from './ectopic-pregnancy-warning-signs';
import { concern as eczemaAndFoodAllergyLink } from './eczema-and-food-allergy-link';
import { concern as eczemaFlareTriggers } from './eczema-flare-triggers';
import { concern as eczema } from './eczema';
import { concern as educationalAppsEffectivenessToddler } from './educational-apps-effectiveness-toddler';
import { concern as ehlersDanlosSyndromeBaby } from './ehlers-danlos-syndrome-baby';
import { concern as engorgementReliefBreastfeeding } from './engorgement-relief-breastfeeding';
import { concern as enlargedHead } from './enlarged-head';
import { concern as eoeEosinophilicEsophagitisBaby } from './eoe-eosinophilic-esophagitis-baby';
import { concern as epiglottitisWarningSigns } from './epiglottitis-warning-signs';
import { concern as epiphoraExcessiveTearingBaby } from './epiphora-excessive-tearing-baby';
import { concern as erythemaToxicum } from './erythema-toxicum';
import { concern as excessiveDrooling } from './excessive-drooling';
import { concern as excessiveFruitJuiceToddler } from './excessive-fruit-juice-toddler';
import { concern as excessiveGasBaby } from './excessive-gas-baby';
import { concern as excessiveJuiceConsumption } from './excessive-juice-consumption';
import { concern as excessiveNightFeeding } from './excessive-night-feeding';
import { concern as excessiveScreenTimeEffects } from './excessive-screen-time-effects';
import { concern as excessiveWeightGainBaby } from './excessive-weight-gain-baby';
import { concern as extremeClinginess } from './extreme-clinginess';
import { concern as extremeHeatBabySafety } from './extreme-heat-baby-safety';
import { concern as eyeAlignmentIssuesInfant } from './eye-alignment-issues-infant';
import { concern as eyeRollingBaby } from './eye-rolling-baby';
import { concern as failureToThriveBreastfedBaby } from './failure-to-thrive-breastfed-baby';
import { concern as failureToThriveSigns } from './failure-to-thrive-signs';
import { concern as fearOfBathBaby } from './fear-of-bath-baby';
import { concern as fearOfLoudNoises } from './fear-of-loud-noises';
import { concern as febrileSeizure } from './febrile-seizure';
import { concern as feedingAversion } from './feeding-aversion';
import { concern as feverWithRash } from './fever-with-rash';
import { concern as fiberNeedsToddlerConstipation } from './fiber-needs-toddler-constipation';
import { concern as fifthDiseaseRash } from './fifth-disease-rash';
import { concern as fightingNaps } from './fighting-naps';
import { concern as flatFeet } from './flat-feet';
import { concern as flatHead } from './flat-head';
import { concern as floppyBabySyndrome } from './floppy-baby-syndrome';
import { concern as fluorideToothpasteBabySafety } from './fluoride-toothpaste-baby-safety';
import { concern as flyingWithBabyEarPressure } from './flying-with-baby-ear-pressure';
import { concern as foamyPoop } from './foamy-poop';
import { concern as fontanelleBulging } from './fontanelle-bulging';
import { concern as fontanelleSunken } from './fontanelle-sunken';
import { concern as foodAllergySigns } from './food-allergy-signs';
import { concern as foremilkHindmilkImbalance } from './foremilk-hindmilk-imbalance';
import { concern as formulaIntoleranceSigns } from './formula-intolerance-signs';
import { concern as fortifiedFormulaWhenNeeded } from './fortified-formula-when-needed';
import { concern as foulSmellingPoop } from './foul-smelling-poop';
import { concern as fpiesDiagnosisManagement } from './fpies-diagnosis-management';
import { concern as fpiesFoodProtein } from './fpies-food-protein';
import { concern as fragileXSyndromeSigns } from './fragile-x-syndrome-signs';
import { concern as freeRangeParentingSafety } from './free-range-parenting-safety';
import { concern as frequentColds } from './frequent-colds';
import { concern as frequentFalling } from './frequent-falling';
import { concern as frequentNightWakings } from './frequent-night-wakings';
import { concern as frequentPooping } from './frequent-pooping';
import { concern as fungalRash } from './fungal-rash';
import { concern as gaggingOnSolids } from './gagging-on-solids';
import { concern as galactosemiaBaby } from './galactosemia-baby';
import { concern as gentleParentingWhenNotWorking } from './gentle-parenting-when-not-working';
import { concern as gestationalDiabetesRisk } from './gestational-diabetes-risk';
import { concern as gestationalHypertension } from './gestational-hypertension';
import { concern as glueEarOtitisMediaEffusion } from './glue-ear-otitis-media-effusion';
import { concern as grandparentBoundaryConflicts } from './grandparent-boundary-conflicts';
import { concern as grazingAllDayToddler } from './grazing-all-day-toddler';
import { concern as greenPoop } from './green-poop';
import { concern as groupBStrepPregnancy } from './group-b-strep-pregnancy';
import { concern as growthHormoneDeficiencySigns } from './growth-hormone-deficiency-signs';
import { concern as growthPlateInjuryToddler } from './growth-plate-injury-toddler';
import { concern as growthSpurtFussinessBaby } from './growth-spurt-fussiness-baby';
import { concern as gruntingBabySyndrome } from './grunting-baby-syndrome';
import { concern as guiltReturningToWork } from './guilt-returning-to-work';
import { concern as hairPullingBaby } from './hair-pulling-baby';
import { concern as handFootMouth } from './hand-foot-mouth';
import { concern as handTremorsBaby } from './hand-tremors-baby';
import { concern as hardPebblePoop } from './hard-pebble-poop';
import { concern as headBanging } from './head-banging';
import { concern as headCircumferenceTooLarge } from './head-circumference-too-large';
import { concern as headCircumferenceTooSmall } from './head-circumference-too-small';
import { concern as headLag } from './head-lag';
import { concern as headSweatingDuringSleep } from './head-sweating-during-sleep';
import { concern as hearingAidFittingBaby } from './hearing-aid-fitting-baby';
import { concern as hearingLossSignsBaby } from './hearing-loss-signs-baby';
import { concern as heatRash } from './heat-rash';
import { concern as heightWeightPercentileDropping } from './height-weight-percentile-dropping';
import { concern as helicopterParentingEffects } from './helicopter-parenting-effects';
import { concern as hellpSyndromeSigns } from './hellp-syndrome-signs';
import { concern as hemangiomaGrowing } from './hemangioma-growing';
import { concern as henochSchonleinPurpuraBaby } from './henoch-schonlein-purpura-baby';
import { concern as herniaBulgingWhenCrying } from './hernia-bulging-when-crying';
import { concern as herpeticGingivostomatitisBaby } from './herpetic-gingivostomatitis-baby';
import { concern as hiccupsWontStop } from './hiccups-wont-stop';
import { concern as highChokingRiskFoodsBaby } from './high-choking-risk-foods-baby';
import { concern as highNeedsBaby } from './high-needs-baby';
import { concern as hipDysplasia } from './hip-dysplasia';
import { concern as hirschsprungDiseaseSigns } from './hirschsprung-disease-signs';
import { concern as hitting } from './hitting';
import { concern as hives } from './hives';
import { concern as hoarseVoiceBaby } from './hoarse-voice-baby';
import { concern as homemadeVsStoreBabyFood } from './homemade-vs-store-baby-food';
import { concern as honeyBeforeOneBotulism } from './honey-before-one-botulism';
import { concern as hotelBabyProofingTips } from './hotel-baby-proofing-tips';
import { concern as hydroceleBaby } from './hydrocele-baby';
import { concern as hyperemesisGravidarum } from './hyperemesis-gravidarum';
import { concern as hypoallergenicFormulaWhenNeeded } from './hypoallergenic-formula-when-needed';
import { concern as hypospadias } from './hypospadias';
import { concern as identityLossAfterBaby } from './identity-loss-after-baby';
import { concern as impetigoBaby } from './impetigo-baby';
import { concern as infantTylenolDosingConcerns } from './infant-tylenol-dosing-concerns';
import { concern as infantileGlaucomaSigns } from './infantile-glaucoma-signs';
import { concern as infantileSpasmsWestSyndrome } from './infantile-spasms-west-syndrome';
import { concern as inguinalHerniaBaby } from './inguinal-hernia-baby';
import { concern as insectBitesBaby } from './insect-bites-baby';
import { concern as insectRepellentSafetyBaby } from './insect-repellent-safety-baby';
import { concern as insectStingAllergyBaby } from './insect-sting-allergy-baby';
import { concern as intrauterineGrowthRestriction } from './intrauterine-growth-restriction';
import { concern as introducingCommonAllergensSafely } from './introducing-common-allergens-safely';
import { concern as introducingCowsMilk } from './introducing-cows-milk';
import { concern as intussusceptionSigns } from './intussusception-signs';
import { concern as ironDeficiencyAnemiaBaby } from './iron-deficiency-anemia-baby';
import { concern as ironDeficiencyFromMilk } from './iron-deficiency-from-milk';
import { concern as ironRichFoodsForBaby } from './iron-rich-foods-for-baby';
import { concern as jargonSpeechToddler } from './jargon-speech-toddler';
import { concern as jaundice } from './jaundice';
import { concern as jetLagBabySleepAdjustment } from './jet-lag-baby-sleep-adjustment';
import { concern as kawasakiDiseaseSigns } from './kawasaki-disease-signs';
import { concern as keratosisPilarisBaby } from './keratosis-pilaris-baby';
import { concern as klinefelterSyndromeSigns } from './klinefelter-syndrome-signs';
import { concern as knockKnees } from './knock-knees';
import { concern as labialAdhesion } from './labial-adhesion';
import { concern as largeForGestationalAgeBaby } from './large-for-gestational-age-baby';
import { concern as laryngomalaciaFloppyAirway } from './laryngomalacia-floppy-airway';
import { concern as lateTalker } from './late-talker';
import { concern as lateTeething } from './late-teething';
import { concern as latexAllergyBaby } from './latex-allergy-baby';
import { concern as leadExposureBaby } from './lead-exposure-baby';
import { concern as legTremorsBaby } from './leg-tremors-baby';
import { concern as leukocoriaWhitePupilReflex } from './leukocoria-white-pupil-reflex';
import { concern as limitedVocabulary } from './limited-vocabulary';
import { concern as liningUpToys } from './lining-up-toys';
import { concern as lipTie } from './lip-tie';
import { concern as lowMilkSupplySigns } from './low-milk-supply-signs';
import { concern as lowMuscleToneArms } from './low-muscle-tone-arms';
import { concern as lowMuscleTone } from './low-muscle-tone';
import { concern as lowTemperatureBaby } from './low-temperature-baby';
import { concern as marfanSyndromeBaby } from './marfan-syndrome-baby';
import { concern as mastCellActivationBaby } from './mast-cell-activation-baby';
import { concern as mastitisWarningSigns } from './mastitis-warning-signs';
import { concern as meconiumAspirationSyndrome } from './meconium-aspiration-syndrome';
import { concern as meconiumIleus } from './meconium-ileus';
import { concern as medicationAllergyBaby } from './medication-allergy-baby';
import { concern as meningitisSignsBaby } from './meningitis-signs-baby';
import { concern as microcephalySigns } from './microcephaly-signs';
import { concern as microtiaAtresiaEarBaby } from './microtia-atresia-ear-baby';
import { concern as middleEarInfectionRecurrent } from './middle-ear-infection-recurrent';
import { concern as miliaBaby } from './milia-baby';
import { concern as milkProteinAllergy } from './milk-protein-allergy';
import { concern as mixingUpWords } from './mixing-up-words';
import { concern as molarPregnancySigns } from './molar-pregnancy-signs';
import { concern as moldAllergyBaby } from './mold-allergy-baby';
import { concern as molluscum } from './molluscum';
import { concern as mongolianSpots } from './mongolian-spots';
import { concern as monotoneSpeech } from './monotone-speech';
import { concern as montessoriAtHomeConcerns } from './montessori-at-home-concerns';
import { concern as mucusInStool } from './mucus-in-stool';
import { concern as multipleFoodAllergiesBaby } from './multiple-food-allergies-baby';
import { concern as muscleSpasmsBaby } from './muscle-spasms-baby';
import { concern as nannyCamTrustIssues } from './nanny-cam-trust-issues';
import { concern as nasalCongestionNewborn } from './nasal-congestion-newborn';
import { concern as nasalSpeech } from './nasal-speech';
import { concern as natalTeethBornWithTeeth } from './natal-teeth-born-with-teeth';
import { concern as necrotizingEnterocolitisSigns } from './necrotizing-enterocolitis-signs';
import { concern as neuroblastomaSignsBaby } from './neuroblastoma-signs-baby';
import { concern as newSiblingAdjustmentRegression } from './new-sibling-adjustment-regression';
import { concern as newbornBloodSugarLow } from './newborn-blood-sugar-low';
import { concern as newbornDayNightConfusion } from './newborn-day-night-confusion';
import { concern as newbornExcessiveWeightLoss } from './newborn-excessive-weight-loss';
import { concern as newbornEyeSwellingAfterBirth } from './newborn-eye-swelling-after-birth';
import { concern as newbornFeverUnder3Months } from './newborn-fever-under-3-months';
import { concern as newbornHearingScreeningFailed } from './newborn-hearing-screening-failed';
import { concern as newbornHypothermiaRisk } from './newborn-hypothermia-risk';
import { concern as newbornNotLatchingAtAll } from './newborn-not-latching-at-all';
import { concern as newbornScreeningAbnormalResults } from './newborn-screening-abnormal-results';
import { concern as newbornSleepingTooMuch } from './newborn-sleeping-too-much';
import { concern as newbornTongueColorWhiteCoating } from './newborn-tongue-color-white-coating';
import { concern as newbornWithdrawalSymptomsNas } from './newborn-withdrawal-symptoms-nas';
import { concern as nicuParentTrauma } from './nicu-parent-trauma';
import { concern as nightTerrors } from './night-terrors';
import { concern as noJointAttention } from './no-joint-attention';
import { concern as noSocialSmile } from './no-social-smile';
import { concern as noiseInducedHearingDamageBaby } from './noise-induced-hearing-damage-baby';
import { concern as norovirusBaby } from './norovirus-baby';
import { concern as notAskingQuestions } from './not-asking-questions';
import { concern as notBabblingAt9Months } from './not-babbling-at-9-months';
import { concern as notBearingWeightOnLegs } from './not-bearing-weight-on-legs';
import { concern as notBondingWithParent } from './not-bonding-with-parent';
import { concern as notChewing } from './not-chewing';
import { concern as notClapping } from './not-clapping';
import { concern as notCombiningWords } from './not-combining-words';
import { concern as notCooing } from './not-cooing';
import { concern as notCrawling } from './not-crawling';
import { concern as notCruising } from './not-cruising';
import { concern as notDrinkingEnough } from './not-drinking-enough';
import { concern as notFollowingCommands } from './not-following-commands';
import { concern as notFollowingTwoStepCommands } from './not-following-two-step-commands';
import { concern as notImitatingSounds } from './not-imitating-sounds';
import { concern as notInterestedInOtherChildren } from './not-interested-in-other-children';
import { concern as notLaughing } from './not-laughing';
import { concern as notMakingEyeContact } from './not-making-eye-contact';
import { concern as notNamingObjects } from './not-naming-objects';
import { concern as notNarratingPlay } from './not-narrating-play';
import { concern as notPickingUpSmallObjects } from './not-picking-up-small-objects';
import { concern as notPointing } from './not-pointing';
import { concern as notPoopingDaily } from './not-pooping-daily';
import { concern as notPullingUp } from './not-pulling-up';
import { concern as notReachingForToys } from './not-reaching-for-toys';
import { concern as notRespondingToName } from './not-responding-to-name';
import { concern as notRespondingToSounds } from './not-responding-to-sounds';
import { concern as notRollingOver } from './not-rolling-over';
import { concern as notSayingMamaDada } from './not-saying-mama-dada';
import { concern as notSittingUp } from './not-sitting-up';
import { concern as notSleepingThroughNight } from './not-sleeping-through-night';
import { concern as notSmiling } from './not-smiling';
import { concern as notStanding } from './not-standing';
import { concern as notTalking } from './not-talking';
import { concern as notTransferringObjects } from './not-transferring-objects';
import { concern as notUnderstandingNo } from './not-understanding-no';
import { concern as notUsingGestures } from './not-using-gestures';
import { concern as notUsingPincerGrasp } from './not-using-pincer-grasp';
import { concern as notWalking } from './not-walking';
import { concern as notWaving } from './not-waving';
import { concern as nuchalCordConcerns } from './nuchal-cord-concerns';
import { concern as nursingStrike } from './nursing-strike';
import { concern as nystagmusBaby } from './nystagmus-baby';
import { concern as obstructiveSleepApneaToddler } from './obstructive-sleep-apnea-toddler';
import { concern as oligohydramniosLowAmnioticFluid } from './oligohydramnios-low-amniotic-fluid';
import { concern as omega3ImportanceBabyBrain } from './omega-3-importance-baby-brain';
import { concern as onlyChildSocializationConcerns } from './only-child-socialization-concerns';
import { concern as onlyContactNapping } from './only-contact-napping';
import { concern as oralAversionBaby } from './oral-aversion-baby';
import { concern as oralRehydrationBaby } from './oral-rehydration-baby';
import { concern as orangePoop } from './orange-poop';
import { concern as organicVsConventionalBabyFood } from './organic-vs-conventional-baby-food';
import { concern as osteogenesisImperfectaBaby } from './osteogenesis-imperfecta-baby';
import { concern as outerEarInfectionSwimmersEarBaby } from './outer-ear-infection-swimmers-ear-baby';
import { concern as overstimulationSigns } from './overstimulation-signs';
import { concern as oversupplySymptoms } from './oversupply-symptoms';
import { concern as overtiredBabySigns } from './overtired-baby-signs';
import { concern as overtiredBabyWontSleep } from './overtired-baby-wont-sleep';
import { concern as oxygenSaturationBabyNormal } from './oxygen-saturation-baby-normal';
import { concern as pacedBottleFeedingConcerns } from './paced-bottle-feeding-concerns';
import { concern as painfulBreastfeeding } from './painful-breastfeeding';
import { concern as pallorBaby } from './pallor-baby';
import { concern as parallelPlayConcerns } from './parallel-play-concerns';
import { concern as parallelPlayVsInteractivePlay } from './parallel-play-vs-interactive-play';
import { concern as parentalBurnoutSigns } from './parental-burnout-signs';
import { concern as parentingAnxietyConstantWorry } from './parenting-anxiety-constant-worry';
import { concern as patentDuctusArteriosus } from './patent-ductus-arteriosus';
import { concern as pectusDeformityBaby } from './pectus-deformity-baby';
import { concern as peelingSkinNewborn } from './peeling-skin-newborn';
import { concern as perioralDermatitisBaby } from './perioral-dermatitis-baby';
import { concern as periorbitalCellulitisBaby } from './periorbital-cellulitis-baby';
import { concern as persistentFeverBaby } from './persistent-fever-baby';
import { concern as pertussisWhoopingCoughBaby } from './pertussis-whooping-cough-baby';
import { concern as petAllergyManagementWithBaby } from './pet-allergy-management-with-baby';
import { concern as petechiaeBaby } from './petechiae-baby';
import { concern as phenylketonuriaPkuBaby } from './phenylketonuria-pku-baby';
import { concern as phimosisBaby } from './phimosis-baby';
import { concern as pickyEating } from './picky-eating';
import { concern as pigeonToed } from './pigeon-toed';
import { concern as placentaPreviaDiagnosis } from './placenta-previa-diagnosis';
import { concern as placentalAbruptionSigns } from './placental-abruption-signs';
import { concern as plantBasedDietBabySafety } from './plant-based-diet-baby-safety';
import { concern as pneumoniaSignsBaby } from './pneumonia-signs-baby';
import { concern as polydactylyExtraFingersToes } from './polydactyly-extra-fingers-toes';
import { concern as polyhydramniosExcessAmnioticFluid } from './polyhydramnios-excess-amniotic-fluid';
import { concern as poolWaterSafetyBaby } from './pool-water-safety-baby';
import { concern as poopWithholdingToddler } from './poop-withholding-toddler';
import { concern as poorBalanceToddler } from './poor-balance-toddler';
import { concern as poorHandEyeCoordination } from './poor-hand-eye-coordination';
import { concern as poorTrunkControl } from './poor-trunk-control';
import { concern as portWineStain } from './port-wine-stain';
import { concern as possetingBaby } from './posseting-baby';
import { concern as postVaccineFever } from './post-vaccine-fever';
import { concern as postVaccineFussiness } from './post-vaccine-fussiness';
import { concern as postVaccineRash } from './post-vaccine-rash';
import { concern as postpartumDepressionInPartners } from './postpartum-depression-in-partners';
import { concern as postpartumOcdIntrusiveThoughts } from './postpartum-ocd-intrusive-thoughts';
import { concern as postpartumPsychosisWarningSigns } from './postpartum-psychosis-warning-signs';
import { concern as postpartumPtsdBirthTrauma } from './postpartum-ptsd-birth-trauma';
import { concern as postpartumRageAnger } from './postpartum-rage-anger';
import { concern as pottyTrainingRefusal } from './potty-training-refusal';
import { concern as pottyTrainingRegression } from './potty-training-regression';
import { concern as praderWilliSyndromeSigns } from './prader-willi-syndrome-signs';
import { concern as preauricularPit } from './preauricular-pit';
import { concern as preauricularTagBaby } from './preauricular-tag-baby';
import { concern as preeclampsiaWarningSigns } from './preeclampsia-warning-signs';
import { concern as pregnancyLossGriefSupport } from './pregnancy-loss-grief-support';
import { concern as prematureBabyAdjustedAgeMilestones } from './premature-baby-adjusted-age-milestones';
import { concern as preschoolReadinessAssessment } from './preschool-readiness-assessment';
import { concern as pretermLaborSigns } from './preterm-labor-signs';
import { concern as probioticsForBaby } from './probiotics-for-baby';
import { concern as projectileVomitingBaby } from './projectile-vomiting-baby';
import { concern as pronounReversal } from './pronoun-reversal';
import { concern as proteinIntakeToddler } from './protein-intake-toddler';
import { concern as psoriasisBaby } from './psoriasis-baby';
import { concern as ptosisDroopingEyelid } from './ptosis-drooping-eyelid';
import { concern as pumpingOutputConcerns } from './pumping-output-concerns';
import { concern as pyloricStenosisSigns } from './pyloric-stenosis-signs';
import { concern as pyloricStenosis } from './pyloric-stenosis';
import { concern as rapidHeadGrowthBaby } from './rapid-head-growth-baby';
import { concern as rashAfterAntibiotics } from './rash-after-antibiotics';
import { concern as reactiveAirwayDiseaseToddler } from './reactive-airway-disease-toddler';
import { concern as reflux } from './reflux';
import { concern as refusingBottle } from './refusing-bottle';
import { concern as refusingBreast } from './refusing-breast';
import { concern as refusingSolids } from './refusing-solids';
import { concern as regressionAfterNewSibling } from './regression-after-new-sibling';
import { concern as regressionInSpeech } from './regression-in-speech';
import { concern as relationshipStrainAfterBaby } from './relationship-strain-after-baby';
import { concern as retinoblastomaSignsBaby } from './retinoblastoma-signs-baby';
import { concern as retinopathyOfPrematurity } from './retinopathy-of-prematurity';
import { concern as rhIncompatibilityPregnancy } from './rh-incompatibility-pregnancy';
import { concern as ringwormVsEczema } from './ringworm-vs-eczema';
import { concern as rockingBackAndForth } from './rocking-back-and-forth';
import { concern as rollingInSleep } from './rolling-in-sleep';
import { concern as roseolaRash } from './roseola-rash';
import { concern as rotavirusSigns } from './rotavirus-signs';
import { concern as rsvBaby } from './rsv-baby';
import { concern as sacralDimple } from './sacral-dimple';
import { concern as scabiesBaby } from './scabies-baby';
import { concern as scarletFeverBaby } from './scarlet-fever-baby';
import { concern as scootingInsteadOfCrawling } from './scooting-instead-of-crawling';
import { concern as screenTimeAddictionToddler } from './screen-time-addiction-toddler';
import { concern as sebaceousCystBaby } from './sebaceous-cyst-baby';
import { concern as secondaryInfertilityEmotionalImpact } from './secondary-infertility-emotional-impact';
import { concern as secondhandSmokeExposureBaby } from './secondhand-smoke-exposure-baby';
import { concern as selectiveMutism } from './selective-mutism';
import { concern as sensoryAvoidingBaby } from './sensory-avoiding-baby';
import { concern as sensorySeekingBaby } from './sensory-seeking-baby';
import { concern as separationAnxietyBedtime } from './separation-anxiety-bedtime';
import { concern as separationAnxiety } from './separation-anxiety';
import { concern as sharingBabyPhotosOnlineSafety } from './sharing-baby-photos-online-safety';
import { concern as shortNaps } from './short-naps';
import { concern as shortStatureBaby } from './short-stature-baby';
import { concern as shortStatureFamilyHistory } from './short-stature-family-history';
import { concern as siblingRivalryToddler } from './sibling-rivalry-toddler';
import { concern as sickleCellDiseaseBaby } from './sickle-cell-disease-baby';
import { concern as sidsRiskFactors } from './sids-risk-factors';
import { concern as singleParentOverwhelm } from './single-parent-overwhelm';
import { concern as skinPickingToddler } from './skin-picking-toddler';
import { concern as skinTagsBaby } from './skin-tags-baby';
import { concern as sleepApneaSigns } from './sleep-apnea-signs';
import { concern as sleepDeprivationEffectsParent } from './sleep-deprivation-effects-parent';
import { concern as sleepRegression12Months } from './sleep-regression-12-months';
import { concern as sleepRegression18Months } from './sleep-regression-18-months';
import { concern as sleepRegression4Months } from './sleep-regression-4-months';
import { concern as sleepRegression8Months } from './sleep-regression-8-months';
import { concern as sleepSafeEnvironmentChecklist } from './sleep-safe-environment-checklist';
import { concern as sleepTalkingToddler } from './sleep-talking-toddler';
import { concern as sleepTrainingGuiltMethods } from './sleep-training-guilt-methods';
import { concern as sleepwalkingToddler } from './sleepwalking-toddler';
import { concern as slowWeightGainBreastfedBaby } from './slow-weight-gain-breastfed-baby';
import { concern as snoring } from './snoring';
import { concern as sodiumSaltIntakeBaby } from './sodium-salt-intake-baby';
import { concern as softSpotConcerns } from './soft-spot-concerns';
import { concern as soyAllergyBaby } from './soy-allergy-baby';
import { concern as speechArticulationDisorder } from './speech-articulation-disorder';
import { concern as speechDelayFromHearingLoss } from './speech-delay-from-hearing-loss';
import { concern as speechDelay } from './speech-delay';
import { concern as spinaBifidaSignsBaby } from './spina-bifida-signs-baby';
import { concern as spinalMuscularAtrophyBaby } from './spinal-muscular-atrophy-baby';
import { concern as spinningInCircles } from './spinning-in-circles';
import { concern as spitUpVsVomit } from './spit-up-vs-vomit';
import { concern as spittingUp } from './spitting-up';
import { concern as stevensJohnsonSyndromeSigns } from './stevens-johnson-syndrome-signs';
import { concern as stiffBabyHypertonia } from './stiff-baby-hypertonia';
import { concern as strabismusIntermittent } from './strabismus-intermittent';
import { concern as strainingToPoop } from './straining-to-poop';
import { concern as strangerAnxiety } from './stranger-anxiety';
import { concern as strawberryHemangioma } from './strawberry-hemangioma';
import { concern as stuttering } from './stuttering';
import { concern as subchorionicHematoma } from './subchorionic-hematoma';
import { concern as subconjunctivalHemorrhageNewborn } from './subconjunctival-hemorrhage-newborn';
import { concern as subgalealHemorrhageNewborn } from './subgaleal-hemorrhage-newborn';
import { concern as sugarIntakeBabyToddler } from './sugar-intake-baby-toddler';
import { concern as sunburnBaby } from './sunburn-baby';
import { concern as sunscreenForBabiesUnder6Months } from './sunscreen-for-babies-under-6-months';
import { concern as switchingFormulaBrands } from './switching-formula-brands';
import { concern as swollenGlandsBaby } from './swollen-glands-baby';
import { concern as swollenLymphNodesBaby } from './swollen-lymph-nodes-baby';
import { concern as tabletDependencyToddler } from './tablet-dependency-toddler';
import { concern as tantrums } from './tantrums';
import { concern as teethingOrderTimeline } from './teething-order-timeline';
import { concern as teethingPainReliefSafeMethods } from './teething-pain-relief-safe-methods';
import { concern as tetralogyOfFallotBaby } from './tetralogy-of-fallot-baby';
import { concern as throwingFood } from './throwing-food';
import { concern as thrush } from './thrush';
import { concern as tinnitusInToddlers } from './tinnitus-in-toddlers';
import { concern as tippyToeStanding } from './tippy-toe-standing';
import { concern as toddlerAbdominalPain } from './toddler-abdominal-pain';
import { concern as toddlerAfraidOfDark } from './toddler-afraid-of-dark';
import { concern as toddlerAfraidOfPotty } from './toddler-afraid-of-potty';
import { concern as toddlerAggressiveAtDaycare } from './toddler-aggressive-at-daycare';
import { concern as toddlerAggressiveHittingKicking } from './toddler-aggressive-hitting-kicking';
import { concern as toddlerBadBreath } from './toddler-bad-breath';
import { concern as toddlerBedtimeBattles } from './toddler-bedtime-battles';
import { concern as toddlerBedtimeStalling } from './toddler-bedtime-stalling';
import { concern as toddlerBitingAtDaycare } from './toddler-biting-at-daycare';
import { concern as toddlerBitingSelf } from './toddler-biting-self';
import { concern as toddlerBossinessControl } from './toddler-bossiness-control';
import { concern as toddlerBulliedAtDaycare } from './toddler-bullied-at-daycare';
import { concern as toddlerChronicDiarrhea } from './toddler-chronic-diarrhea';
import { concern as toddlerClimbingOutOfCrib } from './toddler-climbing-out-of-crib';
import { concern as toddlerConstantMeltdowns } from './toddler-constant-meltdowns';
import { concern as toddlerConstipationFromDairy } from './toddler-constipation-from-dairy';
import { concern as toddlerControllingBehavior } from './toddler-controlling-behavior';
import { concern as toddlerDelayedPottyAwareness } from './toddler-delayed-potty-awareness';
import { concern as toddlerDelayedSocialSkills } from './toddler-delayed-social-skills';
import { concern as toddlerDestroyingThings } from './toddler-destroying-things';
import { concern as toddlerDifficultyMakingFriends } from './toddler-difficulty-making-friends';
import { concern as toddlerDrinkingTooMuchWater } from './toddler-drinking-too-much-water';
import { concern as toddlerDroppingBeginningSounds } from './toddler-dropping-beginning-sounds';
import { concern as toddlerDroppingNap } from './toddler-dropping-nap';
import { concern as toddlerDryCrackedLips } from './toddler-dry-cracked-lips';
import { concern as toddlerEatingTooMuchSalt } from './toddler-eating-too-much-salt';
import { concern as toddlerEatingTooMuchSugar } from './toddler-eating-too-much-sugar';
import { concern as toddlerEmotionalDysregulation } from './toddler-emotional-dysregulation';
import { concern as toddlerExclusionByPeers } from './toddler-exclusion-by-peers';
import { concern as toddlerExtremeShyness } from './toddler-extreme-shyness';
import { concern as toddlerFearOfDogsAnimals } from './toddler-fear-of-dogs-animals';
import { concern as toddlerFoodJag } from './toddler-food-jag';
import { concern as toddlerGenitalSelfStimulation } from './toddler-genital-self-stimulation';
import { concern as toddlerGrindingTeethWhileAwake } from './toddler-grinding-teeth-while-awake';
import { concern as toddlerHairTwirling } from './toddler-hair-twirling';
import { concern as toddlerHittingBabySibling } from './toddler-hitting-baby-sibling';
import { concern as toddlerHittingOwnHead } from './toddler-hitting-own-head';
import { concern as toddlerHittingParents } from './toddler-hitting-parents';
import { concern as toddlerHoldingPoop } from './toddler-holding-poop';
import { concern as toddlerJealousOfNewBaby } from './toddler-jealous-of-new-baby';
import { concern as toddlerJealousyNewBaby } from './toddler-jealousy-new-baby';
import { concern as toddlerLisp } from './toddler-lisp';
import { concern as toddlerLooseStoolsChronic } from './toddler-loose-stools-chronic';
import { concern as toddlerLying } from './toddler-lying';
import { concern as toddlerMakingUpWords } from './toddler-making-up-words';
import { concern as toddlerMeltdownsOverTransitions } from './toddler-meltdowns-over-transitions';
import { concern as toddlerMilkAlternatives } from './toddler-milk-alternatives';
import { concern as toddlerMixingUpPronounsHeShe } from './toddler-mixing-up-pronouns-he-she';
import { concern as toddlerNappingTooLateInDay } from './toddler-napping-too-late-in-day';
import { concern as toddlerNightTimeFears } from './toddler-night-time-fears';
import { concern as toddlerNonverbalAt2 } from './toddler-nonverbal-at-2';
import { concern as toddlerNotAnsweringQuestions } from './toddler-not-answering-questions';
import { concern as toddlerNotClimbingStairs } from './toddler-not-climbing-stairs';
import { concern as toddlerNotEatingEnough } from './toddler-not-eating-enough';
import { concern as toddlerNotJumping } from './toddler-not-jumping';
import { concern as toddlerNotNamingColors } from './toddler-not-naming-colors';
import { concern as toddlerNotPlayingWithOtherKids } from './toddler-not-playing-with-other-kids';
import { concern as toddlerNotPottyTrainedBy3 } from './toddler-not-potty-trained-by-3';
import { concern as toddlerNotSharingDevelopmental } from './toddler-not-sharing-developmental';
import { concern as toddlerNotSingingAlong } from './toddler-not-singing-along';
import { concern as toddlerNotTalkingAtDaycare } from './toddler-not-talking-at-daycare';
import { concern as toddlerNotUsingPronouns } from './toddler-not-using-pronouns';
import { concern as toddlerNotUsingThreeWordSentences } from './toddler-not-using-three-word-sentences';
import { concern as toddlerNotUsingTwoWordPhrases } from './toddler-not-using-two-word-phrases';
import { concern as toddlerNutritionalDeficiencySigns } from './toddler-nutritional-deficiency-signs';
import { concern as toddlerObsessedWithOneTopic } from './toddler-obsessed-with-one-topic';
import { concern as toddlerObsessiveRepetitiveBehavior } from './toddler-obsessive-repetitive-behavior';
import { concern as toddlerOnlyCommunicatingByCrying } from './toddler-only-communicating-by-crying';
import { concern as toddlerOnlyDrinkingMilk } from './toddler-only-drinking-milk';
import { concern as toddlerOnlyEatingOneFood } from './toddler-only-eating-one-food';
import { concern as toddlerOnlySayingFewWords } from './toddler-only-saying-few-words';
import { concern as toddlerOnlySaysNo } from './toddler-only-says-no';
import { concern as toddlerPushingOtherChildren } from './toddler-pushing-other-children';
import { concern as toddlerRefusingNap } from './toddler-refusing-nap';
import { concern as toddlerRefusingToShare } from './toddler-refusing-to-share';
import { concern as toddlerRegressionAfterIllness } from './toddler-regression-after-illness';
import { concern as toddlerRegressionAfterMove } from './toddler-regression-after-move';
import { concern as toddlerRepeatingQuestionsBack } from './toddler-repeating-questions-back';
import { concern as toddlerRunningAwayInPublic } from './toddler-running-away-in-public';
import { concern as toddlerRunningAwkwardly } from './toddler-running-awkwardly';
import { concern as toddlerScreamingPhase } from './toddler-screaming-phase';
import { concern as toddlerSeparationAnxietyExtreme } from './toddler-separation-anxiety-extreme';
import { concern as toddlerSkinPeelingFingers } from './toddler-skin-peeling-fingers';
import { concern as toddlerSocialAnxietyPlaygroups } from './toddler-social-anxiety-playgroups';
import { concern as toddlerSpeechNotUnderstoodByStrangers } from './toddler-speech-not-understood-by-strangers';
import { concern as toddlerSpeechRegressionAfterEarInfection } from './toddler-speech-regression-after-ear-infection';
import { concern as toddlerStillBreastfeeding } from './toddler-still-breastfeeding';
import { concern as toddlerStillUsingBottle } from './toddler-still-using-bottle';
import { concern as toddlerStomachBugRecovery } from './toddler-stomach-bug-recovery';
import { concern as toddlerSwallowedObject } from './toddler-swallowed-object';
import { concern as toddlerTakingOffClothesDiaper } from './toddler-taking-off-clothes-diaper';
import { concern as toddlerTalkingButNotCommunicating } from './toddler-talking-but-not-communicating';
import { concern as toddlerThrowingToys } from './toddler-throwing-toys';
import { concern as toddlerThumbSucking } from './toddler-thumb-sucking';
import { concern as toddlerTooDependentOnOneFriend } from './toddler-too-dependent-on-one-friend';
import { concern as toddlerTrippingFrequently } from './toddler-tripping-frequently';
import { concern as toddlerWakingFromNightmares } from './toddler-waking-from-nightmares';
import { concern as toddlerWartsOnHands } from './toddler-warts-on-hands';
import { concern as toddlerWhiningConstantly } from './toddler-whining-constantly';
import { concern as toddlerWontEatVegetables } from './toddler-wont-eat-vegetables';
import { concern as toddlerWontFollowRoutines } from './toddler-wont-follow-routines';
import { concern as toddlerWontListenToParents } from './toddler-wont-listen-to-parents';
import { concern as toddlerWontWearShoes } from './toddler-wont-wear-shoes';
import { concern as toeWalking } from './toe-walking';
import { concern as tongueThrustSwallowingDental } from './tongue-thrust-swallowing-dental';
import { concern as tongueThrust } from './tongue-thrust';
import { concern as tongueTie } from './tongue-tie';
import { concern as toothAbscessBaby } from './tooth-abscess-baby';
import { concern as toothDecayBreastfedBaby } from './tooth-decay-breastfed-baby';
import { concern as toothEruptionCystBaby } from './tooth-eruption-cyst-baby';
import { concern as toothGrindingDuringDay } from './tooth-grinding-during-day';
import { concern as torticollis } from './torticollis';
import { concern as touchedOutFeelingOverstimulated } from './touched-out-feeling-overstimulated';
import { concern as tracheomalaciaBaby } from './tracheomalacia-baby';
import { concern as transientTachypneaNewborn } from './transient-tachypnea-newborn';
import { concern as transitioningFromSwaddle } from './transitioning-from-swaddle';
import { concern as transitioningToToddlerBed } from './transitioning-to-toddler-bed';
import { concern as travelVaccinationsBaby } from './travel-vaccinations-baby';
import { concern as trisomy18EdwardsSyndrome } from './trisomy-18-edwards-syndrome';
import { concern as turnerSyndromeSigns } from './turner-syndrome-signs';
import { concern as twinDevelopmentDifferences } from './twin-development-differences';
import { concern as umbilicalCordStumpBleeding } from './umbilical-cord-stump-bleeding';
import { concern as umbilicalCordStumpInfection } from './umbilical-cord-stump-infection';
import { concern as umbilicalHernia } from './umbilical-hernia';
import { concern as unclearSpeech } from './unclear-speech';
import { concern as uncoordinatedMovement } from './uncoordinated-movement';
import { concern as understimulationSigns } from './understimulation-signs';
import { concern as undescendedTesticle } from './undescended-testicle';
import { concern as undigestedFoodInPoop } from './undigested-food-in-poop';
import { concern as unevenLegLength } from './uneven-leg-length';
import { concern as utiSignsBaby } from './uti-signs-baby';
import { concern as vaginalDischargeNewborn } from './vaginal-discharge-newborn';
import { concern as velamentousCordInsertion } from './velamentous-cord-insertion';
import { concern as ventricularSeptalDefectBaby } from './ventricular-septal-defect-baby';
import { concern as vernixCaseosaConcerns } from './vernix-caseosa-concerns';
import { concern as videoCallScreenTimeRules } from './video-call-screen-time-rules';
import { concern as viralRashBaby } from './viral-rash-baby';
import { concern as vitaminDDeficiencyBaby } from './vitamin-d-deficiency-baby';
import { concern as vitaminDSupplementation } from './vitamin-d-supplementation';
import { concern as wSitting } from './w-sitting';
import { concern as wartsToddler } from './warts-toddler';
import { concern as waterSafetyDrowningPrevention } from './water-safety-drowning-prevention';
import { concern as weakGripBaby } from './weak-grip-baby';
import { concern as weaningDepressionHormonal } from './weaning-depression-hormonal';
import { concern as weaningOffBreastfeeding } from './weaning-off-breastfeeding';
import { concern as weightFalteringBaby } from './weight-faltering-baby';
import { concern as wheezing } from './wheezing';
import { concern as whitePoop } from './white-poop';
import { concern as williamsSyndromeBaby } from './williams-syndrome-baby';
import { concern as wilmsTumorSignsBaby } from './wilms-tumor-signs-baby';
import { concern as wontSleepWithoutNursing } from './wont-sleep-without-nursing';
import { concern as wordRetrievalDifficultyToddler } from './word-retrieval-difficulty-toddler';
import { concern as yeastDiaperRash } from './yeast-diaper-rash';
import { concern as yellowWateryPoop } from './yellow-watery-poop';
import { concern as zincDeficiencyBaby } from './zinc-deficiency-baby';

export const allConcerns: ConcernPage[] = [
  abdominalDistensionBaby,
  abnormalHeadShape,
  accentVsSpeechDisorderToddler,
  achondroplasiaBaby,
  adenoidHypertrophyBreathing,
  aggressivePlayVsNormalPlay,
  aggressiveTowardPets,
  airQualityPollutionBabyHealth,
  allergenIntroductionTiming,
  altitudeSicknessBaby,
  amblyopiaLazyEyeTreatmentTiming,
  amblyopiaSigns,
  analFissureBaby,
  anaphylaxisSignsInBaby,
  angelmanSyndromeSigns,
  anisocoriaUnequalPupils,
  apneaSpellsBaby,
  aspirationDuringFeeding,
  asthmaDiagnosisBabyToddler,
  asymmetricMovement,
  attachmentConcerns,
  attachmentParentingBurnout,
  auditoryProcessingDisorderToddler,
  babyAcne,
  babyAllergicReactionMedicine,
  babyAllergicReactionToFood,
  babyAllergicToPetDander,
  babyAnimalBite,
  babyAntibioticSideEffects,
  babyArchingAndCryingDuringFeeding,
  babyArchingBack,
  babyBeeWaspSting,
  babyBitingNippleWhileNursing,
  babyBlisterOnLipFromNursing,
  babyBlistersOnSkin,
  babyBlueLipsWhenCold,
  babyBodyOdor,
  babyBornWithTeeth,
  babyBottleRotCavities,
  babyBreathingFast,
  babyBreathingPatternsNormal,
  babyBrokenBoneFractureSigns,
  babyBruiseThatWontGoAway,
  babyBruisesEasily,
  babyBurnTreatment,
  babyCarseatSafetyAfterAccident,
  babyCatnapping30Minutes,
  babyChestRetractions,
  babyChinRashFromDrool,
  babyChokingOnFood,
  babyChokingOnLiquids,
  babyChokingVsGaggingDifference,
  babyCircumcisionCare,
  babyClenchingFistsAfter3Months,
  babyCloggedMilkDuct,
  babyColdHandsAndFeet,
  babyColdVsFluDifference,
  babyColdWhenToWorry,
  babyConcussionSigns,
  babyConjunctivitisViralVsBacterial,
  babyCoughingALot,
  babyCoughingAtNight,
  babyCoughingWhileFeeding,
  babyCovidSymptoms,
  babyCoxsackieVirus,
  babyCriesWhenPutDownToSleep,
  babyCurlingToes,
  babyCutBleedingWound,
  babyDarkCirclesUnderEyes,
  babyDaycareIllnessFrequency,
  babyDaylightSavingTimeSleep,
  babyDelayedToothEruption,
  babyDentalInjuryChippedTooth,
  babyDislocatedElbowNursemaids,
  babyDryCrackedSkinHands,
  babyDryPatchesOnCheeks,
  babyDryScalpFlakes,
  babyEarInfectionVsTeething,
  babyEarPulling,
  babyEarWaxBuildup,
  babyEatingNonFoodPica,
  babyEatingTooMuch,
  babyEczemaVsDrySkin,
  babyEggAllergySigns,
  babyElectricalShock,
  babyExcessiveBurping,
  babyExcessiveCryingNoReason,
  babyExcessiveGasAfterSolids,
  babyEyeColorChangeTimeline,
  babyEyeDischargeYellowGreen,
  babyEyesSensitiveToLight,
  babyFallingAsleepWhileNursing,
  babyFallsAsleepOnlyInCar,
  babyFavoringOneLeg,
  babyFavoritismOneParent,
  babyFeedingTooFast,
  babyFellDownStairs,
  babyFellOffBed,
  babyFightingSleep,
  babyFirstAidKitEssentials,
  babyFirstDentalVisitTiming,
  babyFlatAffectNoExpression,
  babyFluSymptoms,
  babyFoodHeavyMetalsConcern,
  babyForeignObjectInEar,
  babyForeignObjectInNose,
  babyGaggingOnTextures,
  babyGrindingTeethSleep,
  babyGrindingTeeth,
  babyGrowingTooFast,
  babyGrowingTooSlow,
  babyGulpingAir,
  babyHairNotGrowing,
  babyHairTourniquet,
  babyHandFlapping,
  babyHandFootMouthContagiousPeriod,
  babyHeadTiltToOneSide,
  babyHeartMurmur,
  babyHiccups,
  babyHickeyLikeMarkOnSkin,
  babyHighFeverOver104,
  babyHighPitchedScream,
  babyHitHeadWhenToWorry,
  babyHoldingFoodInMouth,
  babyHoneyExposure,
  babyIbuprofenDosingSafety,
  babyIngrownToenail,
  babyJerkyMovements,
  babyLactoseIntoleranceSigns,
  babyLactoseOverload,
  babyLedWeaningSafety,
  babyLegsShakingWhenStanding,
  babyLiceTreatment,
  babyLimping,
  babyLosingWords,
  babyLumpOnHeadAfterBirth,
  babyMoaningInSleep,
  babyMoldExposureSymptoms,
  babyMonitorAnxietyParent,
  babyMonitorSafety,
  babyMouthBreathing,
  babyNailPeeling,
  babyNappingTooMuch,
  babyNearDrowning,
  babyNeedsRockingToSleep,
  babyNonFebrileSeizure,
  babyNosebleed,
  babyNotBabbling,
  babyNotBearingWeightOnArms,
  babyNotBringingHandsToMidline,
  babyNotDrinkingEnoughMilk,
  babyNotDrinkingEnoughWater,
  babyNotEatingAfterIllness,
  babyNotGainingHeight,
  babyNotGraspingObjects,
  babyNotHoldingHeadSteady,
  babyNotImitatingActions,
  babyNotInterestedInFood,
  babyNotInterestedInPeople,
  babyNotKickingLegs,
  babyNotLaughingAtPeekABoo,
  babyNotMakingEyeContactVision,
  babyNotMakingVowelSounds,
  babyNotPlayingIndependently,
  babyNotPlayingWithToys,
  babyNotPoopingForAWeek,
  babyNotPushingUpOnTummy,
  babyNotRespondingToFacialExpressions,
  babyNotRespondingToMusic,
  babyNotRespondingToOwnNameConsistently,
  babyNotSelfFeeding,
  babyNotShowingAffection,
  babyNotSittingIndependently,
  babyNotSleepingEnough,
  babyNotStackingBlocks,
  babyNotTakingTurnsInConversation,
  babyNotTrackingObjectsWithEyes,
  babyNotTurningToSounds,
  babyNotUsingOneArm,
  babyOnlySleepsBeingHeld,
  babyPeanutAllergySigns,
  babyPersistentEczema,
  babyPinkEye,
  babyPinworms,
  babyPoisoningSigns,
  babyPoopColorChangesWithSolids,
  babyPreferringOneParent,
  babyQuietNotVocalizing,
  babyRaisedBumpsOnSkin,
  babyRashAfterSwimming,
  babyRashAroundMouth,
  babyRashInSkinFolds,
  babyRashWontGoAway,
  babyRaspberriesButNoWords,
  babyRectalBleeding,
  babyRedBirthmarkGrowing,
  babyRedRingRash,
  babyRefusingOneBreast,
  babyRefusingSippyCup,
  babyRefusingWater,
  babyRegressionAfterStartingDaycare,
  babyRollingOntoStomachSleep,
  babyRubbingEyesExcessively,
  babyScalpCradleCapPersistent,
  babyScratchMarksOnFace,
  babyScreamingInSleep,
  babySeasonalAllergies,
  babySeparationAnxietyAtDaycare,
  babyShakingHeadSideToSide,
  babySkinInfectionStaph,
  babySkinRashAfterNewFood,
  babySleepAssociations,
  babySleepRegression24Months,
  babySleepScheduleDisruptedByTravel,
  babySleepTrainingWhenToStart,
  babySleepingFaceDown,
  babySleepingInCarSeatDanger,
  babySleepingMouthOpen,
  babySleepingOnIncline,
  babySneezingALot,
  babySpittingOutSolids,
  babyStartingSolidsWhenReady,
  babyStartledEasily,
  babyStomachGurglingLoud,
  babyStrainingButSoftPoop,
  babyStrangerAnxietyExtreme,
  babyStrepThroat,
  babyStridorNoisyBreathing,
  babyStrongSmellingUrine,
  babySunburnPrevention,
  babySunscreenWhenToUse,
  babySupplementingWithFormula,
  babySwallowedBattery,
  babySwallowedMagnet,
  babySwallowedSomethingDangerous,
  babySweatingALot,
  babySweatingDuringSleep,
  babySwollenEye,
  babySwollenFingerToe,
  babyTeethComingInWrongOrder,
  babyTeethDiscoloredGray,
  babyTeethGapSpacing,
  babyTeethNotFallingOut,
  babyTeethYellowStaining,
  babyTeethingFeverMyth,
  babyTickBite,
  babyTongueColorChanges,
  babyTooQuietNeverCries,
  babyTravelAltitudeEars,
  babyTremors,
  babyTwitchingInSleep,
  babyUnevenCrawling,
  babyVitaminSupplementOverdose,
  babyVomitingAfterCrying,
  babyVomitingAtNightOnly,
  babyVomitingBile,
  babyVomitingNoFever,
  babyWakingAt5am,
  babyWakingEveryHour,
  babyWaterWhenToIntroduce,
  babyWhitePatchesOnSkin,
  babyWhiteTongue,
  babyWontSleepInCrib,
  babyWontSwallow,
  bassinetVsCribSafety,
  beachSafetyBabyToddler,
  bedwettingEnuresisToddler,
  biliaryAtresiaSigns,
  bilingualSpeechDelay,
  birthmarks,
  bitingDuringBreastfeeding,
  biting,
  blackPoop,
  blockedTearDuct,
  bloodInDiaperNewborn,
  bloodInMucusBaby,
  bloodyStool,
  bondingDifficultyWithBaby,
  bottleAversion,
  bottlePreference,
  bowleggedBaby,
  breastBudsNewborn,
  breastfeedingGriefWhenStopping,
  breastfeedingToFormulaTransition,
  breathHoldingSpells,
  bronchiolitisBaby,
  bronchiolitisVsPneumonia,
  cafeAuLaitSpots,
  calciumNeedsToddler,
  caputSuccedaneumHeadSwelling,
  carSicknessBabyToddler,
  catchUpGrowthPrematureBaby,
  cellulitisBaby,
  cephalohematomaNewborn,
  cervicalInsufficiency,
  chickenPoxBaby,
  childNotAskingWhyQuestions,
  childNotFollowingDirections,
  childNotTellingSimpleStories,
  childNotUsingPastTense,
  chokingHazardFoodsList,
  cholestasisOfPregnancy,
  cholesteatomaBaby,
  chronicCongestion,
  chronicCoughToddler,
  circadianRhythmBaby,
  circumcisionHealingComplications,
  cleftLipPalateBaby,
  clubfootBaby,
  clusterFeedingNewborn,
  cmpaVsLactoseIntolerance,
  coParentingDifferentStyles,
  coarctationOfAortaBaby,
  coldWeatherBabyOutdoorSafety,
  colicVsGas,
  colic,
  colobomaEyeBaby,
  comparisonAnxietySocialMedia,
  confusionalArousals,
  congenitalCataractsBaby,
  congenitalHearingLossTypes,
  congenitalHeartDefectSigns,
  congenitalHypothyroidism,
  constipationFromMedicationBaby,
  constipation,
  constitutionalGrowthDelay,
  contactDermatitisBaby,
  cosleepingSafety,
  cosleepingToCribTransition,
  cowsMilkTransitionIssues,
  cradleCap,
  craniosynostosisSigns,
  crawlingBackwards,
  crossedEyes,
  croupBaby,
  croupVsWhoopingCough,
  curvedSpineBaby,
  cyanosisBaby,
  cysticFibrosisBabySigns,
  dacryocystitisTearDuctInfection,
  daycareIllnessFrequencyNormal,
  daycareNapStruggles,
  daycareReadinessSigns,
  daycareSeparationCryingDuration,
  defiantToddler,
  dehydrationSignsBaby,
  delayedAllergicReactionBaby,
  delayedCrawling,
  delayedFineMotor,
  delayedHandDominance,
  delayedHandPreference,
  delayedLanguageInBilingualChild,
  delayedMeconiumPassage,
  delayedPincerGraspDevelopment,
  delayedPretendPlay,
  delayedReceptiveLanguage,
  delayedWalkingOnTiptoes,
  diaperRashNotClearing,
  diaperRash,
  diarrhea,
  difficultyUsingUtensils,
  difficultyWithConsonants,
  disproportionateGrowthBaby,
  downSyndromeBabyDevelopment,
  dreamFeeds,
  drinkingTooMuchMilk,
  droolingWhileTalking,
  droppingFromTwoNapsToOne,
  drySkin,
  dustMiteAllergyBaby,
  earDischargeOtorrheaBaby,
  earInfections,
  earPainNoInfectionBaby,
  earTubeSurgeryBaby,
  earlyChildhoodCavities,
  earlyHandPreference,
  earlyMorningWaking,
  earlySignsOfAutismBaby,
  echolalia,
  ectopicPregnancyWarningSigns,
  eczemaAndFoodAllergyLink,
  eczemaFlareTriggers,
  eczema,
  educationalAppsEffectivenessToddler,
  ehlersDanlosSyndromeBaby,
  engorgementReliefBreastfeeding,
  enlargedHead,
  eoeEosinophilicEsophagitisBaby,
  epiglottitisWarningSigns,
  epiphoraExcessiveTearingBaby,
  erythemaToxicum,
  excessiveDrooling,
  excessiveFruitJuiceToddler,
  excessiveGasBaby,
  excessiveJuiceConsumption,
  excessiveNightFeeding,
  excessiveScreenTimeEffects,
  excessiveWeightGainBaby,
  extremeClinginess,
  extremeHeatBabySafety,
  eyeAlignmentIssuesInfant,
  eyeRollingBaby,
  failureToThriveBreastfedBaby,
  failureToThriveSigns,
  fearOfBathBaby,
  fearOfLoudNoises,
  febrileSeizure,
  feedingAversion,
  feverWithRash,
  fiberNeedsToddlerConstipation,
  fifthDiseaseRash,
  fightingNaps,
  flatFeet,
  flatHead,
  floppyBabySyndrome,
  fluorideToothpasteBabySafety,
  flyingWithBabyEarPressure,
  foamyPoop,
  fontanelleBulging,
  fontanelleSunken,
  foodAllergySigns,
  foremilkHindmilkImbalance,
  formulaIntoleranceSigns,
  fortifiedFormulaWhenNeeded,
  foulSmellingPoop,
  fpiesDiagnosisManagement,
  fpiesFoodProtein,
  fragileXSyndromeSigns,
  freeRangeParentingSafety,
  frequentColds,
  frequentFalling,
  frequentNightWakings,
  frequentPooping,
  fungalRash,
  gaggingOnSolids,
  galactosemiaBaby,
  gentleParentingWhenNotWorking,
  gestationalDiabetesRisk,
  gestationalHypertension,
  glueEarOtitisMediaEffusion,
  grandparentBoundaryConflicts,
  grazingAllDayToddler,
  greenPoop,
  groupBStrepPregnancy,
  growthHormoneDeficiencySigns,
  growthPlateInjuryToddler,
  growthSpurtFussinessBaby,
  gruntingBabySyndrome,
  guiltReturningToWork,
  hairPullingBaby,
  handFootMouth,
  handTremorsBaby,
  hardPebblePoop,
  headBanging,
  headCircumferenceTooLarge,
  headCircumferenceTooSmall,
  headLag,
  headSweatingDuringSleep,
  hearingAidFittingBaby,
  hearingLossSignsBaby,
  heatRash,
  heightWeightPercentileDropping,
  helicopterParentingEffects,
  hellpSyndromeSigns,
  hemangiomaGrowing,
  henochSchonleinPurpuraBaby,
  herniaBulgingWhenCrying,
  herpeticGingivostomatitisBaby,
  hiccupsWontStop,
  highChokingRiskFoodsBaby,
  highNeedsBaby,
  hipDysplasia,
  hirschsprungDiseaseSigns,
  hitting,
  hives,
  hoarseVoiceBaby,
  homemadeVsStoreBabyFood,
  honeyBeforeOneBotulism,
  hotelBabyProofingTips,
  hydroceleBaby,
  hyperemesisGravidarum,
  hypoallergenicFormulaWhenNeeded,
  hypospadias,
  identityLossAfterBaby,
  impetigoBaby,
  infantTylenolDosingConcerns,
  infantileGlaucomaSigns,
  infantileSpasmsWestSyndrome,
  inguinalHerniaBaby,
  insectBitesBaby,
  insectRepellentSafetyBaby,
  insectStingAllergyBaby,
  intrauterineGrowthRestriction,
  introducingCommonAllergensSafely,
  introducingCowsMilk,
  intussusceptionSigns,
  ironDeficiencyAnemiaBaby,
  ironDeficiencyFromMilk,
  ironRichFoodsForBaby,
  jargonSpeechToddler,
  jaundice,
  jetLagBabySleepAdjustment,
  kawasakiDiseaseSigns,
  keratosisPilarisBaby,
  klinefelterSyndromeSigns,
  knockKnees,
  labialAdhesion,
  largeForGestationalAgeBaby,
  laryngomalaciaFloppyAirway,
  lateTalker,
  lateTeething,
  latexAllergyBaby,
  leadExposureBaby,
  legTremorsBaby,
  leukocoriaWhitePupilReflex,
  limitedVocabulary,
  liningUpToys,
  lipTie,
  lowMilkSupplySigns,
  lowMuscleToneArms,
  lowMuscleTone,
  lowTemperatureBaby,
  marfanSyndromeBaby,
  mastCellActivationBaby,
  mastitisWarningSigns,
  meconiumAspirationSyndrome,
  meconiumIleus,
  medicationAllergyBaby,
  meningitisSignsBaby,
  microcephalySigns,
  microtiaAtresiaEarBaby,
  middleEarInfectionRecurrent,
  miliaBaby,
  milkProteinAllergy,
  mixingUpWords,
  molarPregnancySigns,
  moldAllergyBaby,
  molluscum,
  mongolianSpots,
  monotoneSpeech,
  montessoriAtHomeConcerns,
  mucusInStool,
  multipleFoodAllergiesBaby,
  muscleSpasmsBaby,
  nannyCamTrustIssues,
  nasalCongestionNewborn,
  nasalSpeech,
  natalTeethBornWithTeeth,
  necrotizingEnterocolitisSigns,
  neuroblastomaSignsBaby,
  newSiblingAdjustmentRegression,
  newbornBloodSugarLow,
  newbornDayNightConfusion,
  newbornExcessiveWeightLoss,
  newbornEyeSwellingAfterBirth,
  newbornFeverUnder3Months,
  newbornHearingScreeningFailed,
  newbornHypothermiaRisk,
  newbornNotLatchingAtAll,
  newbornScreeningAbnormalResults,
  newbornSleepingTooMuch,
  newbornTongueColorWhiteCoating,
  newbornWithdrawalSymptomsNas,
  nicuParentTrauma,
  nightTerrors,
  noJointAttention,
  noSocialSmile,
  noiseInducedHearingDamageBaby,
  norovirusBaby,
  notAskingQuestions,
  notBabblingAt9Months,
  notBearingWeightOnLegs,
  notBondingWithParent,
  notChewing,
  notClapping,
  notCombiningWords,
  notCooing,
  notCrawling,
  notCruising,
  notDrinkingEnough,
  notFollowingCommands,
  notFollowingTwoStepCommands,
  notImitatingSounds,
  notInterestedInOtherChildren,
  notLaughing,
  notMakingEyeContact,
  notNamingObjects,
  notNarratingPlay,
  notPickingUpSmallObjects,
  notPointing,
  notPoopingDaily,
  notPullingUp,
  notReachingForToys,
  notRespondingToName,
  notRespondingToSounds,
  notRollingOver,
  notSayingMamaDada,
  notSittingUp,
  notSleepingThroughNight,
  notSmiling,
  notStanding,
  notTalking,
  notTransferringObjects,
  notUnderstandingNo,
  notUsingGestures,
  notUsingPincerGrasp,
  notWalking,
  notWaving,
  nuchalCordConcerns,
  nursingStrike,
  nystagmusBaby,
  obstructiveSleepApneaToddler,
  oligohydramniosLowAmnioticFluid,
  omega3ImportanceBabyBrain,
  onlyChildSocializationConcerns,
  onlyContactNapping,
  oralAversionBaby,
  oralRehydrationBaby,
  orangePoop,
  organicVsConventionalBabyFood,
  osteogenesisImperfectaBaby,
  outerEarInfectionSwimmersEarBaby,
  overstimulationSigns,
  oversupplySymptoms,
  overtiredBabySigns,
  overtiredBabyWontSleep,
  oxygenSaturationBabyNormal,
  pacedBottleFeedingConcerns,
  painfulBreastfeeding,
  pallorBaby,
  parallelPlayConcerns,
  parallelPlayVsInteractivePlay,
  parentalBurnoutSigns,
  parentingAnxietyConstantWorry,
  patentDuctusArteriosus,
  pectusDeformityBaby,
  peelingSkinNewborn,
  perioralDermatitisBaby,
  periorbitalCellulitisBaby,
  persistentFeverBaby,
  pertussisWhoopingCoughBaby,
  petAllergyManagementWithBaby,
  petechiaeBaby,
  phenylketonuriaPkuBaby,
  phimosisBaby,
  pickyEating,
  pigeonToed,
  placentaPreviaDiagnosis,
  placentalAbruptionSigns,
  plantBasedDietBabySafety,
  pneumoniaSignsBaby,
  polydactylyExtraFingersToes,
  polyhydramniosExcessAmnioticFluid,
  poolWaterSafetyBaby,
  poopWithholdingToddler,
  poorBalanceToddler,
  poorHandEyeCoordination,
  poorTrunkControl,
  portWineStain,
  possetingBaby,
  postVaccineFever,
  postVaccineFussiness,
  postVaccineRash,
  postpartumDepressionInPartners,
  postpartumOcdIntrusiveThoughts,
  postpartumPsychosisWarningSigns,
  postpartumPtsdBirthTrauma,
  postpartumRageAnger,
  pottyTrainingRefusal,
  pottyTrainingRegression,
  praderWilliSyndromeSigns,
  preauricularPit,
  preauricularTagBaby,
  preeclampsiaWarningSigns,
  pregnancyLossGriefSupport,
  prematureBabyAdjustedAgeMilestones,
  preschoolReadinessAssessment,
  pretermLaborSigns,
  probioticsForBaby,
  projectileVomitingBaby,
  pronounReversal,
  proteinIntakeToddler,
  psoriasisBaby,
  ptosisDroopingEyelid,
  pumpingOutputConcerns,
  pyloricStenosisSigns,
  pyloricStenosis,
  rapidHeadGrowthBaby,
  rashAfterAntibiotics,
  reactiveAirwayDiseaseToddler,
  reflux,
  refusingBottle,
  refusingBreast,
  refusingSolids,
  regressionAfterNewSibling,
  regressionInSpeech,
  relationshipStrainAfterBaby,
  retinoblastomaSignsBaby,
  retinopathyOfPrematurity,
  rhIncompatibilityPregnancy,
  ringwormVsEczema,
  rockingBackAndForth,
  rollingInSleep,
  roseolaRash,
  rotavirusSigns,
  rsvBaby,
  sacralDimple,
  scabiesBaby,
  scarletFeverBaby,
  scootingInsteadOfCrawling,
  screenTimeAddictionToddler,
  sebaceousCystBaby,
  secondaryInfertilityEmotionalImpact,
  secondhandSmokeExposureBaby,
  selectiveMutism,
  sensoryAvoidingBaby,
  sensorySeekingBaby,
  separationAnxietyBedtime,
  separationAnxiety,
  sharingBabyPhotosOnlineSafety,
  shortNaps,
  shortStatureBaby,
  shortStatureFamilyHistory,
  siblingRivalryToddler,
  sickleCellDiseaseBaby,
  sidsRiskFactors,
  singleParentOverwhelm,
  skinPickingToddler,
  skinTagsBaby,
  sleepApneaSigns,
  sleepDeprivationEffectsParent,
  sleepRegression12Months,
  sleepRegression18Months,
  sleepRegression4Months,
  sleepRegression8Months,
  sleepSafeEnvironmentChecklist,
  sleepTalkingToddler,
  sleepTrainingGuiltMethods,
  sleepwalkingToddler,
  slowWeightGainBreastfedBaby,
  snoring,
  sodiumSaltIntakeBaby,
  softSpotConcerns,
  soyAllergyBaby,
  speechArticulationDisorder,
  speechDelayFromHearingLoss,
  speechDelay,
  spinaBifidaSignsBaby,
  spinalMuscularAtrophyBaby,
  spinningInCircles,
  spitUpVsVomit,
  spittingUp,
  stevensJohnsonSyndromeSigns,
  stiffBabyHypertonia,
  strabismusIntermittent,
  strainingToPoop,
  strangerAnxiety,
  strawberryHemangioma,
  stuttering,
  subchorionicHematoma,
  subconjunctivalHemorrhageNewborn,
  subgalealHemorrhageNewborn,
  sugarIntakeBabyToddler,
  sunburnBaby,
  sunscreenForBabiesUnder6Months,
  switchingFormulaBrands,
  swollenGlandsBaby,
  swollenLymphNodesBaby,
  tabletDependencyToddler,
  tantrums,
  teethingOrderTimeline,
  teethingPainReliefSafeMethods,
  tetralogyOfFallotBaby,
  throwingFood,
  thrush,
  tinnitusInToddlers,
  tippyToeStanding,
  toddlerAbdominalPain,
  toddlerAfraidOfDark,
  toddlerAfraidOfPotty,
  toddlerAggressiveAtDaycare,
  toddlerAggressiveHittingKicking,
  toddlerBadBreath,
  toddlerBedtimeBattles,
  toddlerBedtimeStalling,
  toddlerBitingAtDaycare,
  toddlerBitingSelf,
  toddlerBossinessControl,
  toddlerBulliedAtDaycare,
  toddlerChronicDiarrhea,
  toddlerClimbingOutOfCrib,
  toddlerConstantMeltdowns,
  toddlerConstipationFromDairy,
  toddlerControllingBehavior,
  toddlerDelayedPottyAwareness,
  toddlerDelayedSocialSkills,
  toddlerDestroyingThings,
  toddlerDifficultyMakingFriends,
  toddlerDrinkingTooMuchWater,
  toddlerDroppingBeginningSounds,
  toddlerDroppingNap,
  toddlerDryCrackedLips,
  toddlerEatingTooMuchSalt,
  toddlerEatingTooMuchSugar,
  toddlerEmotionalDysregulation,
  toddlerExclusionByPeers,
  toddlerExtremeShyness,
  toddlerFearOfDogsAnimals,
  toddlerFoodJag,
  toddlerGenitalSelfStimulation,
  toddlerGrindingTeethWhileAwake,
  toddlerHairTwirling,
  toddlerHittingBabySibling,
  toddlerHittingOwnHead,
  toddlerHittingParents,
  toddlerHoldingPoop,
  toddlerJealousOfNewBaby,
  toddlerJealousyNewBaby,
  toddlerLisp,
  toddlerLooseStoolsChronic,
  toddlerLying,
  toddlerMakingUpWords,
  toddlerMeltdownsOverTransitions,
  toddlerMilkAlternatives,
  toddlerMixingUpPronounsHeShe,
  toddlerNappingTooLateInDay,
  toddlerNightTimeFears,
  toddlerNonverbalAt2,
  toddlerNotAnsweringQuestions,
  toddlerNotClimbingStairs,
  toddlerNotEatingEnough,
  toddlerNotJumping,
  toddlerNotNamingColors,
  toddlerNotPlayingWithOtherKids,
  toddlerNotPottyTrainedBy3,
  toddlerNotSharingDevelopmental,
  toddlerNotSingingAlong,
  toddlerNotTalkingAtDaycare,
  toddlerNotUsingPronouns,
  toddlerNotUsingThreeWordSentences,
  toddlerNotUsingTwoWordPhrases,
  toddlerNutritionalDeficiencySigns,
  toddlerObsessedWithOneTopic,
  toddlerObsessiveRepetitiveBehavior,
  toddlerOnlyCommunicatingByCrying,
  toddlerOnlyDrinkingMilk,
  toddlerOnlyEatingOneFood,
  toddlerOnlySayingFewWords,
  toddlerOnlySaysNo,
  toddlerPushingOtherChildren,
  toddlerRefusingNap,
  toddlerRefusingToShare,
  toddlerRegressionAfterIllness,
  toddlerRegressionAfterMove,
  toddlerRepeatingQuestionsBack,
  toddlerRunningAwayInPublic,
  toddlerRunningAwkwardly,
  toddlerScreamingPhase,
  toddlerSeparationAnxietyExtreme,
  toddlerSkinPeelingFingers,
  toddlerSocialAnxietyPlaygroups,
  toddlerSpeechNotUnderstoodByStrangers,
  toddlerSpeechRegressionAfterEarInfection,
  toddlerStillBreastfeeding,
  toddlerStillUsingBottle,
  toddlerStomachBugRecovery,
  toddlerSwallowedObject,
  toddlerTakingOffClothesDiaper,
  toddlerTalkingButNotCommunicating,
  toddlerThrowingToys,
  toddlerThumbSucking,
  toddlerTooDependentOnOneFriend,
  toddlerTrippingFrequently,
  toddlerWakingFromNightmares,
  toddlerWartsOnHands,
  toddlerWhiningConstantly,
  toddlerWontEatVegetables,
  toddlerWontFollowRoutines,
  toddlerWontListenToParents,
  toddlerWontWearShoes,
  toeWalking,
  tongueThrustSwallowingDental,
  tongueThrust,
  tongueTie,
  toothAbscessBaby,
  toothDecayBreastfedBaby,
  toothEruptionCystBaby,
  toothGrindingDuringDay,
  torticollis,
  touchedOutFeelingOverstimulated,
  tracheomalaciaBaby,
  transientTachypneaNewborn,
  transitioningFromSwaddle,
  transitioningToToddlerBed,
  travelVaccinationsBaby,
  trisomy18EdwardsSyndrome,
  turnerSyndromeSigns,
  twinDevelopmentDifferences,
  umbilicalCordStumpBleeding,
  umbilicalCordStumpInfection,
  umbilicalHernia,
  unclearSpeech,
  uncoordinatedMovement,
  understimulationSigns,
  undescendedTesticle,
  undigestedFoodInPoop,
  unevenLegLength,
  utiSignsBaby,
  vaginalDischargeNewborn,
  velamentousCordInsertion,
  ventricularSeptalDefectBaby,
  vernixCaseosaConcerns,
  videoCallScreenTimeRules,
  viralRashBaby,
  vitaminDDeficiencyBaby,
  vitaminDSupplementation,
  wSitting,
  wartsToddler,
  waterSafetyDrowningPrevention,
  weakGripBaby,
  weaningDepressionHormonal,
  weaningOffBreastfeeding,
  weightFalteringBaby,
  wheezing,
  whitePoop,
  williamsSyndromeBaby,
  wilmsTumorSignsBaby,
  wontSleepWithoutNursing,
  wordRetrievalDifficultyToddler,
  yeastDiaperRash,
  yellowWateryPoop,
  zincDeficiencyBaby,
];

export function getConcernBySlug(slug: string): ConcernPage | undefined {
  return allConcerns.find((c) => c.slug === slug);
}

export function getConcernsByCategory(category: ConcernCategory): ConcernPage[] {
  return allConcerns.filter((c) => c.category === category);
}

export type { ConcernPage, ConcernCategory };

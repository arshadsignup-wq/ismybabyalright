import type { ConcernPage, ConcernCategory } from './types';

import { concern as abdominalDistensionBaby } from './abdominal-distension-baby';
import { concern as abnormalHeadShape } from './abnormal-head-shape';
import { concern as aggressiveTowardPets } from './aggressive-toward-pets';
import { concern as amblyopiaSigns } from './amblyopia-signs';
import { concern as analFissureBaby } from './anal-fissure-baby';
import { concern as anaphylaxisSignsInBaby } from './anaphylaxis-signs-in-baby';
import { concern as anisocoriaUnequalPupils } from './anisocoria-unequal-pupils';
import { concern as apneaSpellsBaby } from './apnea-spells-baby';
import { concern as aspirationDuringFeeding } from './aspiration-during-feeding';
import { concern as asymmetricMovement } from './asymmetric-movement';
import { concern as attachmentConcerns } from './attachment-concerns';
import { concern as babyAcne } from './baby-acne';
import { concern as babyAllergicReactionToFood } from './baby-allergic-reaction-to-food';
import { concern as babyAntibioticSideEffects } from './baby-antibiotic-side-effects';
import { concern as babyArchingBack } from './baby-arching-back';
import { concern as babyBitingNippleWhileNursing } from './baby-biting-nipple-while-nursing';
import { concern as babyBlisterOnLipFromNursing } from './baby-blister-on-lip-from-nursing';
import { concern as babyBreathingFast } from './baby-breathing-fast';
import { concern as babyCatnapping30Minutes } from './baby-catnapping-30-minutes';
import { concern as babyChinRashFromDrool } from './baby-chin-rash-from-drool';
import { concern as babyChokingOnFood } from './baby-choking-on-food';
import { concern as babyCoughingALot } from './baby-coughing-a-lot';
import { concern as babyCoughingAtNight } from './baby-coughing-at-night';
import { concern as babyCoughingWhileFeeding } from './baby-coughing-while-feeding';
import { concern as babyCurlingToes } from './baby-curling-toes';
import { concern as babyDryPatchesOnCheeks } from './baby-dry-patches-on-cheeks';
import { concern as babyEatingNonFoodPica } from './baby-eating-non-food-pica';
import { concern as babyExcessiveGasAfterSolids } from './baby-excessive-gas-after-solids';
import { concern as babyFallingAsleepWhileNursing } from './baby-falling-asleep-while-nursing';
import { concern as babyFavoringOneLeg } from './baby-favoring-one-leg';
import { concern as babyFightingSleep } from './baby-fighting-sleep';
import { concern as babyGaggingOnTextures } from './baby-gagging-on-textures';
import { concern as babyGrindingTeethSleep } from './baby-grinding-teeth-sleep';
import { concern as babyGrindingTeeth } from './baby-grinding-teeth';
import { concern as babyGulpingAir } from './baby-gulping-air';
import { concern as babyHiccups } from './baby-hiccups';
import { concern as babyHoldingFoodInMouth } from './baby-holding-food-in-mouth';
import { concern as babyIngrownToenail } from './baby-ingrown-toenail';
import { concern as babyJerkyMovements } from './baby-jerky-movements';
import { concern as babyLimping } from './baby-limping';
import { concern as babyLosingWords } from './baby-losing-words';
import { concern as babyMoaningInSleep } from './baby-moaning-in-sleep';
import { concern as babyMouthBreathing } from './baby-mouth-breathing';
import { concern as babyNailPeeling } from './baby-nail-peeling';
import { concern as babyNappingTooMuch } from './baby-napping-too-much';
import { concern as babyNeedsRockingToSleep } from './baby-needs-rocking-to-sleep';
import { concern as babyNotBabbling } from './baby-not-babbling';
import { concern as babyNotBearingWeightOnArms } from './baby-not-bearing-weight-on-arms';
import { concern as babyNotBringingHandsToMidline } from './baby-not-bringing-hands-to-midline';
import { concern as babyNotDrinkingEnoughMilk } from './baby-not-drinking-enough-milk';
import { concern as babyNotGraspingObjects } from './baby-not-grasping-objects';
import { concern as babyNotHoldingHeadSteady } from './baby-not-holding-head-steady';
import { concern as babyNotInterestedInFood } from './baby-not-interested-in-food';
import { concern as babyNotKickingLegs } from './baby-not-kicking-legs';
import { concern as babyNotLaughingAtPeekABoo } from './baby-not-laughing-at-peek-a-boo';
import { concern as babyNotMakingVowelSounds } from './baby-not-making-vowel-sounds';
import { concern as babyNotPlayingIndependently } from './baby-not-playing-independently';
import { concern as babyNotPushingUpOnTummy } from './baby-not-pushing-up-on-tummy';
import { concern as babyNotRespondingToOwnNameConsistently } from './baby-not-responding-to-own-name-consistently';
import { concern as babyNotSelfFeeding } from './baby-not-self-feeding';
import { concern as babyNotSittingIndependently } from './baby-not-sitting-independently';
import { concern as babyNotStackingBlocks } from './baby-not-stacking-blocks';
import { concern as babyNotTurningToSounds } from './baby-not-turning-to-sounds';
import { concern as babyOnlySleepsBeingHeld } from './baby-only-sleeps-being-held';
import { concern as babyPoopColorChangesWithSolids } from './baby-poop-color-changes-with-solids';
import { concern as babyPreferringOneParent } from './baby-preferring-one-parent';
import { concern as babyQuietNotVocalizing } from './baby-quiet-not-vocalizing';
import { concern as babyRedBirthmarkGrowing } from './baby-red-birthmark-growing';
import { concern as babyRefusingOneBreast } from './baby-refusing-one-breast';
import { concern as babyRefusingSippyCup } from './baby-refusing-sippy-cup';
import { concern as babyScalpCradleCapPersistent } from './baby-scalp-cradle-cap-persistent';
import { concern as babyScratchMarksOnFace } from './baby-scratch-marks-on-face';
import { concern as babyScreamingInSleep } from './baby-screaming-in-sleep';
import { concern as babySeparationAnxietyAtDaycare } from './baby-separation-anxiety-at-daycare';
import { concern as babySkinRashAfterNewFood } from './baby-skin-rash-after-new-food';
import { concern as babySleepAssociations } from './baby-sleep-associations';
import { concern as babySleepScheduleDisruptedByTravel } from './baby-sleep-schedule-disrupted-by-travel';
import { concern as babySleepingFaceDown } from './baby-sleeping-face-down';
import { concern as babySleepingMouthOpen } from './baby-sleeping-mouth-open';
import { concern as babySpittingOutSolids } from './baby-spitting-out-solids';
import { concern as babyStartledEasily } from './baby-startled-easily';
import { concern as babyStrainingButSoftPoop } from './baby-straining-but-soft-poop';
import { concern as babyStrangerAnxietyExtreme } from './baby-stranger-anxiety-extreme';
import { concern as babySunburnPrevention } from './baby-sunburn-prevention';
import { concern as babySweatingDuringSleep } from './baby-sweating-during-sleep';
import { concern as babyTremors } from './baby-tremors';
import { concern as babyTwitchingInSleep } from './baby-twitching-in-sleep';
import { concern as babyVomitingBile } from './baby-vomiting-bile';
import { concern as babyWakingAt5am } from './baby-waking-at-5am';
import { concern as babyWontSleepInCrib } from './baby-wont-sleep-in-crib';
import { concern as babyWontSwallow } from './baby-wont-swallow';
import { concern as bilingualSpeechDelay } from './bilingual-speech-delay';
import { concern as birthmarks } from './birthmarks';
import { concern as bitingDuringBreastfeeding } from './biting-during-breastfeeding';
import { concern as biting } from './biting';
import { concern as blackPoop } from './black-poop';
import { concern as blockedTearDuct } from './blocked-tear-duct';
import { concern as bloodInDiaperNewborn } from './blood-in-diaper-newborn';
import { concern as bloodInMucusBaby } from './blood-in-mucus-baby';
import { concern as bloodyStool } from './bloody-stool';
import { concern as bottleAversion } from './bottle-aversion';
import { concern as bottlePreference } from './bottle-preference';
import { concern as bowleggedBaby } from './bowlegged-baby';
import { concern as breastBudsNewborn } from './breast-buds-newborn';
import { concern as breathHoldingSpells } from './breath-holding-spells';
import { concern as bronchiolitisBaby } from './bronchiolitis-baby';
import { concern as cafeAuLaitSpots } from './cafe-au-lait-spots';
import { concern as childNotAskingWhyQuestions } from './child-not-asking-why-questions';
import { concern as childNotFollowingDirections } from './child-not-following-directions';
import { concern as childNotTellingSimpleStories } from './child-not-telling-simple-stories';
import { concern as childNotUsingPastTense } from './child-not-using-past-tense';
import { concern as chronicCongestion } from './chronic-congestion';
import { concern as circadianRhythmBaby } from './circadian-rhythm-baby';
import { concern as clubfootBaby } from './clubfoot-baby';
import { concern as clusterFeedingNewborn } from './cluster-feeding-newborn';
import { concern as colicVsGas } from './colic-vs-gas';
import { concern as colic } from './colic';
import { concern as confusionalArousals } from './confusional-arousals';
import { concern as constipation } from './constipation';
import { concern as cosleepingToCribTransition } from './cosleeping-to-crib-transition';
import { concern as cowsMilkTransitionIssues } from './cows-milk-transition-issues';
import { concern as cradleCap } from './cradle-cap';
import { concern as craniosynostosisSigns } from './craniosynostosis-signs';
import { concern as crawlingBackwards } from './crawling-backwards';
import { concern as crossedEyes } from './crossed-eyes';
import { concern as croupBaby } from './croup-baby';
import { concern as curvedSpineBaby } from './curved-spine-baby';
import { concern as cyanosisBaby } from './cyanosis-baby';
import { concern as daycareNapStruggles } from './daycare-nap-struggles';
import { concern as defiantToddler } from './defiant-toddler';
import { concern as dehydrationSignsBaby } from './dehydration-signs-baby';
import { concern as delayedCrawling } from './delayed-crawling';
import { concern as delayedFineMotor } from './delayed-fine-motor';
import { concern as delayedHandDominance } from './delayed-hand-dominance';
import { concern as delayedHandPreference } from './delayed-hand-preference';
import { concern as delayedLanguageInBilingualChild } from './delayed-language-in-bilingual-child';
import { concern as delayedPincerGraspDevelopment } from './delayed-pincer-grasp-development';
import { concern as delayedPretendPlay } from './delayed-pretend-play';
import { concern as delayedReceptiveLanguage } from './delayed-receptive-language';
import { concern as delayedWalkingOnTiptoes } from './delayed-walking-on-tiptoes';
import { concern as diaperRashNotClearing } from './diaper-rash-not-clearing';
import { concern as diaperRash } from './diaper-rash';
import { concern as diarrhea } from './diarrhea';
import { concern as difficultyUsingUtensils } from './difficulty-using-utensils';
import { concern as difficultyWithConsonants } from './difficulty-with-consonants';
import { concern as drinkingTooMuchMilk } from './drinking-too-much-milk';
import { concern as droolingWhileTalking } from './drooling-while-talking';
import { concern as droppingFromTwoNapsToOne } from './dropping-from-two-naps-to-one';
import { concern as drySkin } from './dry-skin';
import { concern as earInfections } from './ear-infections';
import { concern as earlyHandPreference } from './early-hand-preference';
import { concern as earlyMorningWaking } from './early-morning-waking';
import { concern as echolalia } from './echolalia';
import { concern as eczemaFlareTriggers } from './eczema-flare-triggers';
import { concern as eczema } from './eczema';
import { concern as enlargedHead } from './enlarged-head';
import { concern as erythemaToxicum } from './erythema-toxicum';
import { concern as excessiveDrooling } from './excessive-drooling';
import { concern as excessiveGasBaby } from './excessive-gas-baby';
import { concern as excessiveJuiceConsumption } from './excessive-juice-consumption';
import { concern as excessiveNightFeeding } from './excessive-night-feeding';
import { concern as excessiveScreenTimeEffects } from './excessive-screen-time-effects';
import { concern as extremeClinginess } from './extreme-clinginess';
import { concern as eyeRollingBaby } from './eye-rolling-baby';
import { concern as failureToThriveSigns } from './failure-to-thrive-signs';
import { concern as fearOfBathBaby } from './fear-of-bath-baby';
import { concern as fearOfLoudNoises } from './fear-of-loud-noises';
import { concern as febrileSeizure } from './febrile-seizure';
import { concern as feedingAversion } from './feeding-aversion';
import { concern as feverWithRash } from './fever-with-rash';
import { concern as fifthDiseaseRash } from './fifth-disease-rash';
import { concern as fightingNaps } from './fighting-naps';
import { concern as flatFeet } from './flat-feet';
import { concern as flatHead } from './flat-head';
import { concern as floppyBabySyndrome } from './floppy-baby-syndrome';
import { concern as foamyPoop } from './foamy-poop';
import { concern as fontanelleBulging } from './fontanelle-bulging';
import { concern as fontanelleSunken } from './fontanelle-sunken';
import { concern as foodAllergySigns } from './food-allergy-signs';
import { concern as foremilkHindmilkImbalance } from './foremilk-hindmilk-imbalance';
import { concern as formulaIntoleranceSigns } from './formula-intolerance-signs';
import { concern as foulSmellingPoop } from './foul-smelling-poop';
import { concern as fpiesFoodProtein } from './fpies-food-protein';
import { concern as frequentColds } from './frequent-colds';
import { concern as frequentFalling } from './frequent-falling';
import { concern as frequentNightWakings } from './frequent-night-wakings';
import { concern as frequentPooping } from './frequent-pooping';
import { concern as fungalRash } from './fungal-rash';
import { concern as gaggingOnSolids } from './gagging-on-solids';
import { concern as grazingAllDayToddler } from './grazing-all-day-toddler';
import { concern as greenPoop } from './green-poop';
import { concern as gruntingBabySyndrome } from './grunting-baby-syndrome';
import { concern as hairPullingBaby } from './hair-pulling-baby';
import { concern as handFootMouth } from './hand-foot-mouth';
import { concern as handTremorsBaby } from './hand-tremors-baby';
import { concern as hardPebblePoop } from './hard-pebble-poop';
import { concern as headBanging } from './head-banging';
import { concern as headLag } from './head-lag';
import { concern as headSweatingDuringSleep } from './head-sweating-during-sleep';
import { concern as hearingLossSignsBaby } from './hearing-loss-signs-baby';
import { concern as heatRash } from './heat-rash';
import { concern as hemangiomaGrowing } from './hemangioma-growing';
import { concern as herniaBulgingWhenCrying } from './hernia-bulging-when-crying';
import { concern as hiccupsWontStop } from './hiccups-wont-stop';
import { concern as highNeedsBaby } from './high-needs-baby';
import { concern as hipDysplasia } from './hip-dysplasia';
import { concern as hitting } from './hitting';
import { concern as hives } from './hives';
import { concern as hoarseVoiceBaby } from './hoarse-voice-baby';
import { concern as hydroceleBaby } from './hydrocele-baby';
import { concern as hypospadias } from './hypospadias';
import { concern as impetigoBaby } from './impetigo-baby';
import { concern as infantTylenolDosingConcerns } from './infant-tylenol-dosing-concerns';
import { concern as inguinalHerniaBaby } from './inguinal-hernia-baby';
import { concern as insectBitesBaby } from './insect-bites-baby';
import { concern as introducingCowsMilk } from './introducing-cows-milk';
import { concern as intussusceptionSigns } from './intussusception-signs';
import { concern as ironDeficiencyFromMilk } from './iron-deficiency-from-milk';
import { concern as ironRichFoodsForBaby } from './iron-rich-foods-for-baby';
import { concern as jargonSpeechToddler } from './jargon-speech-toddler';
import { concern as jaundice } from './jaundice';
import { concern as kawasakiDiseaseSigns } from './kawasaki-disease-signs';
import { concern as keratosisPilarisBaby } from './keratosis-pilaris-baby';
import { concern as knockKnees } from './knock-knees';
import { concern as labialAdhesion } from './labial-adhesion';
import { concern as lateTalker } from './late-talker';
import { concern as lateTeething } from './late-teething';
import { concern as legTremorsBaby } from './leg-tremors-baby';
import { concern as limitedVocabulary } from './limited-vocabulary';
import { concern as liningUpToys } from './lining-up-toys';
import { concern as lipTie } from './lip-tie';
import { concern as lowMilkSupplySigns } from './low-milk-supply-signs';
import { concern as lowMuscleToneArms } from './low-muscle-tone-arms';
import { concern as lowMuscleTone } from './low-muscle-tone';
import { concern as lowTemperatureBaby } from './low-temperature-baby';
import { concern as meningitisSignsBaby } from './meningitis-signs-baby';
import { concern as microcephalySigns } from './microcephaly-signs';
import { concern as miliaBaby } from './milia-baby';
import { concern as milkProteinAllergy } from './milk-protein-allergy';
import { concern as mixingUpWords } from './mixing-up-words';
import { concern as molluscum } from './molluscum';
import { concern as mongolianSpots } from './mongolian-spots';
import { concern as monotoneSpeech } from './monotone-speech';
import { concern as mucusInStool } from './mucus-in-stool';
import { concern as muscleSpasmsBaby } from './muscle-spasms-baby';
import { concern as nasalSpeech } from './nasal-speech';
import { concern as newbornDayNightConfusion } from './newborn-day-night-confusion';
import { concern as newbornSleepingTooMuch } from './newborn-sleeping-too-much';
import { concern as nightTerrors } from './night-terrors';
import { concern as noJointAttention } from './no-joint-attention';
import { concern as noSocialSmile } from './no-social-smile';
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
import { concern as nursingStrike } from './nursing-strike';
import { concern as nystagmusBaby } from './nystagmus-baby';
import { concern as onlyContactNapping } from './only-contact-napping';
import { concern as oralAversionBaby } from './oral-aversion-baby';
import { concern as oralRehydrationBaby } from './oral-rehydration-baby';
import { concern as orangePoop } from './orange-poop';
import { concern as overstimulationSigns } from './overstimulation-signs';
import { concern as oversupplySymptoms } from './oversupply-symptoms';
import { concern as overtiredBabySigns } from './overtired-baby-signs';
import { concern as overtiredBabyWontSleep } from './overtired-baby-wont-sleep';
import { concern as painfulBreastfeeding } from './painful-breastfeeding';
import { concern as pallorBaby } from './pallor-baby';
import { concern as parallelPlayConcerns } from './parallel-play-concerns';
import { concern as peelingSkinNewborn } from './peeling-skin-newborn';
import { concern as perioralDermatitisBaby } from './perioral-dermatitis-baby';
import { concern as persistentFeverBaby } from './persistent-fever-baby';
import { concern as petechiaeBaby } from './petechiae-baby';
import { concern as phimosisBaby } from './phimosis-baby';
import { concern as pickyEating } from './picky-eating';
import { concern as pigeonToed } from './pigeon-toed';
import { concern as pneumoniaSignsBaby } from './pneumonia-signs-baby';
import { concern as poopWithholdingToddler } from './poop-withholding-toddler';
import { concern as poorBalanceToddler } from './poor-balance-toddler';
import { concern as poorHandEyeCoordination } from './poor-hand-eye-coordination';
import { concern as poorTrunkControl } from './poor-trunk-control';
import { concern as portWineStain } from './port-wine-stain';
import { concern as possetingBaby } from './posseting-baby';
import { concern as postVaccineFever } from './post-vaccine-fever';
import { concern as postVaccineFussiness } from './post-vaccine-fussiness';
import { concern as postVaccineRash } from './post-vaccine-rash';
import { concern as pottyTrainingRefusal } from './potty-training-refusal';
import { concern as pottyTrainingRegression } from './potty-training-regression';
import { concern as preauricularPit } from './preauricular-pit';
import { concern as probioticsForBaby } from './probiotics-for-baby';
import { concern as projectileVomitingBaby } from './projectile-vomiting-baby';
import { concern as pronounReversal } from './pronoun-reversal';
import { concern as ptosisDroopingEyelid } from './ptosis-drooping-eyelid';
import { concern as pyloricStenosisSigns } from './pyloric-stenosis-signs';
import { concern as pyloricStenosis } from './pyloric-stenosis';
import { concern as rashAfterAntibiotics } from './rash-after-antibiotics';
import { concern as reflux } from './reflux';
import { concern as refusingBottle } from './refusing-bottle';
import { concern as refusingBreast } from './refusing-breast';
import { concern as refusingSolids } from './refusing-solids';
import { concern as regressionAfterNewSibling } from './regression-after-new-sibling';
import { concern as regressionInSpeech } from './regression-in-speech';
import { concern as ringwormVsEczema } from './ringworm-vs-eczema';
import { concern as rockingBackAndForth } from './rocking-back-and-forth';
import { concern as rollingInSleep } from './rolling-in-sleep';
import { concern as roseolaRash } from './roseola-rash';
import { concern as rotavirusSigns } from './rotavirus-signs';
import { concern as rsvBaby } from './rsv-baby';
import { concern as sacralDimple } from './sacral-dimple';
import { concern as scootingInsteadOfCrawling } from './scooting-instead-of-crawling';
import { concern as sebaceousCystBaby } from './sebaceous-cyst-baby';
import { concern as selectiveMutism } from './selective-mutism';
import { concern as sensoryAvoidingBaby } from './sensory-avoiding-baby';
import { concern as sensorySeekingBaby } from './sensory-seeking-baby';
import { concern as separationAnxietyBedtime } from './separation-anxiety-bedtime';
import { concern as separationAnxiety } from './separation-anxiety';
import { concern as shortNaps } from './short-naps';
import { concern as shortStatureBaby } from './short-stature-baby';
import { concern as skinPickingToddler } from './skin-picking-toddler';
import { concern as skinTagsBaby } from './skin-tags-baby';
import { concern as sleepApneaSigns } from './sleep-apnea-signs';
import { concern as sleepRegression18Months } from './sleep-regression-18-months';
import { concern as sleepRegression4Months } from './sleep-regression-4-months';
import { concern as sleepRegression8Months } from './sleep-regression-8-months';
import { concern as sleepTalkingToddler } from './sleep-talking-toddler';
import { concern as sleepwalkingToddler } from './sleepwalking-toddler';
import { concern as slowWeightGainBreastfedBaby } from './slow-weight-gain-breastfed-baby';
import { concern as snoring } from './snoring';
import { concern as softSpotConcerns } from './soft-spot-concerns';
import { concern as speechArticulationDisorder } from './speech-articulation-disorder';
import { concern as speechDelay } from './speech-delay';
import { concern as spinningInCircles } from './spinning-in-circles';
import { concern as spitUpVsVomit } from './spit-up-vs-vomit';
import { concern as spittingUp } from './spitting-up';
import { concern as stiffBabyHypertonia } from './stiff-baby-hypertonia';
import { concern as strabismusIntermittent } from './strabismus-intermittent';
import { concern as strainingToPoop } from './straining-to-poop';
import { concern as strangerAnxiety } from './stranger-anxiety';
import { concern as strawberryHemangioma } from './strawberry-hemangioma';
import { concern as stuttering } from './stuttering';
import { concern as sunburnBaby } from './sunburn-baby';
import { concern as switchingFormulaBrands } from './switching-formula-brands';
import { concern as swollenGlandsBaby } from './swollen-glands-baby';
import { concern as swollenLymphNodesBaby } from './swollen-lymph-nodes-baby';
import { concern as tantrums } from './tantrums';
import { concern as throwingFood } from './throwing-food';
import { concern as thrush } from './thrush';
import { concern as tippyToeStanding } from './tippy-toe-standing';
import { concern as toddlerAfraidOfDark } from './toddler-afraid-of-dark';
import { concern as toddlerAfraidOfPotty } from './toddler-afraid-of-potty';
import { concern as toddlerBedtimeStalling } from './toddler-bedtime-stalling';
import { concern as toddlerBitingSelf } from './toddler-biting-self';
import { concern as toddlerClimbingOutOfCrib } from './toddler-climbing-out-of-crib';
import { concern as toddlerConstipationFromDairy } from './toddler-constipation-from-dairy';
import { concern as toddlerControllingBehavior } from './toddler-controlling-behavior';
import { concern as toddlerDroppingBeginningSounds } from './toddler-dropping-beginning-sounds';
import { concern as toddlerDryCrackedLips } from './toddler-dry-cracked-lips';
import { concern as toddlerFoodJag } from './toddler-food-jag';
import { concern as toddlerHairTwirling } from './toddler-hair-twirling';
import { concern as toddlerHittingParents } from './toddler-hitting-parents';
import { concern as toddlerHoldingPoop } from './toddler-holding-poop';
import { concern as toddlerJealousOfNewBaby } from './toddler-jealous-of-new-baby';
import { concern as toddlerLisp } from './toddler-lisp';
import { concern as toddlerLying } from './toddler-lying';
import { concern as toddlerMeltdownsOverTransitions } from './toddler-meltdowns-over-transitions';
import { concern as toddlerMixingUpPronounsHeShe } from './toddler-mixing-up-pronouns-he-she';
import { concern as toddlerNightTimeFears } from './toddler-night-time-fears';
import { concern as toddlerNotClimbingStairs } from './toddler-not-climbing-stairs';
import { concern as toddlerNotEatingEnough } from './toddler-not-eating-enough';
import { concern as toddlerNotJumping } from './toddler-not-jumping';
import { concern as toddlerNotNamingColors } from './toddler-not-naming-colors';
import { concern as toddlerNotSingingAlong } from './toddler-not-singing-along';
import { concern as toddlerNotUsingPronouns } from './toddler-not-using-pronouns';
import { concern as toddlerNotUsingTwoWordPhrases } from './toddler-not-using-two-word-phrases';
import { concern as toddlerOnlyDrinkingMilk } from './toddler-only-drinking-milk';
import { concern as toddlerOnlyEatingOneFood } from './toddler-only-eating-one-food';
import { concern as toddlerOnlySayingFewWords } from './toddler-only-saying-few-words';
import { concern as toddlerPushingOtherChildren } from './toddler-pushing-other-children';
import { concern as toddlerRefusingNap } from './toddler-refusing-nap';
import { concern as toddlerRefusingToShare } from './toddler-refusing-to-share';
import { concern as toddlerRepeatingQuestionsBack } from './toddler-repeating-questions-back';
import { concern as toddlerRunningAwkwardly } from './toddler-running-awkwardly';
import { concern as toddlerScreamingPhase } from './toddler-screaming-phase';
import { concern as toddlerSpeechNotUnderstoodByStrangers } from './toddler-speech-not-understood-by-strangers';
import { concern as toddlerStillUsingBottle } from './toddler-still-using-bottle';
import { concern as toddlerSwallowedObject } from './toddler-swallowed-object';
import { concern as toddlerThrowingToys } from './toddler-throwing-toys';
import { concern as toddlerThumbSucking } from './toddler-thumb-sucking';
import { concern as toddlerTrippingFrequently } from './toddler-tripping-frequently';
import { concern as toddlerWakingFromNightmares } from './toddler-waking-from-nightmares';
import { concern as toddlerWartsOnHands } from './toddler-warts-on-hands';
import { concern as toddlerWhiningConstantly } from './toddler-whining-constantly';
import { concern as toddlerWontFollowRoutines } from './toddler-wont-follow-routines';
import { concern as toeWalking } from './toe-walking';
import { concern as tongueThrust } from './tongue-thrust';
import { concern as tongueTie } from './tongue-tie';
import { concern as torticollis } from './torticollis';
import { concern as transitioningFromSwaddle } from './transitioning-from-swaddle';
import { concern as transitioningToToddlerBed } from './transitioning-to-toddler-bed';
import { concern as umbilicalHernia } from './umbilical-hernia';
import { concern as unclearSpeech } from './unclear-speech';
import { concern as uncoordinatedMovement } from './uncoordinated-movement';
import { concern as understimulationSigns } from './understimulation-signs';
import { concern as undescendedTesticle } from './undescended-testicle';
import { concern as undigestedFoodInPoop } from './undigested-food-in-poop';
import { concern as unevenLegLength } from './uneven-leg-length';
import { concern as utiSignsBaby } from './uti-signs-baby';
import { concern as vaginalDischargeNewborn } from './vaginal-discharge-newborn';
import { concern as viralRashBaby } from './viral-rash-baby';
import { concern as vitaminDSupplementation } from './vitamin-d-supplementation';
import { concern as wSitting } from './w-sitting';
import { concern as wartsToddler } from './warts-toddler';
import { concern as weakGripBaby } from './weak-grip-baby';
import { concern as weaningOffBreastfeeding } from './weaning-off-breastfeeding';
import { concern as wheezing } from './wheezing';
import { concern as whitePoop } from './white-poop';
import { concern as wontSleepWithoutNursing } from './wont-sleep-without-nursing';
import { concern as yeastDiaperRash } from './yeast-diaper-rash';
import { concern as yellowWateryPoop } from './yellow-watery-poop';

export const allConcerns: ConcernPage[] = [
  abdominalDistensionBaby,
  abnormalHeadShape,
  aggressiveTowardPets,
  amblyopiaSigns,
  analFissureBaby,
  anaphylaxisSignsInBaby,
  anisocoriaUnequalPupils,
  apneaSpellsBaby,
  aspirationDuringFeeding,
  asymmetricMovement,
  attachmentConcerns,
  babyAcne,
  babyAllergicReactionToFood,
  babyAntibioticSideEffects,
  babyArchingBack,
  babyBitingNippleWhileNursing,
  babyBlisterOnLipFromNursing,
  babyBreathingFast,
  babyCatnapping30Minutes,
  babyChinRashFromDrool,
  babyChokingOnFood,
  babyCoughingALot,
  babyCoughingAtNight,
  babyCoughingWhileFeeding,
  babyCurlingToes,
  babyDryPatchesOnCheeks,
  babyEatingNonFoodPica,
  babyExcessiveGasAfterSolids,
  babyFallingAsleepWhileNursing,
  babyFavoringOneLeg,
  babyFightingSleep,
  babyGaggingOnTextures,
  babyGrindingTeethSleep,
  babyGrindingTeeth,
  babyGulpingAir,
  babyHiccups,
  babyHoldingFoodInMouth,
  babyIngrownToenail,
  babyJerkyMovements,
  babyLimping,
  babyLosingWords,
  babyMoaningInSleep,
  babyMouthBreathing,
  babyNailPeeling,
  babyNappingTooMuch,
  babyNeedsRockingToSleep,
  babyNotBabbling,
  babyNotBearingWeightOnArms,
  babyNotBringingHandsToMidline,
  babyNotDrinkingEnoughMilk,
  babyNotGraspingObjects,
  babyNotHoldingHeadSteady,
  babyNotInterestedInFood,
  babyNotKickingLegs,
  babyNotLaughingAtPeekABoo,
  babyNotMakingVowelSounds,
  babyNotPlayingIndependently,
  babyNotPushingUpOnTummy,
  babyNotRespondingToOwnNameConsistently,
  babyNotSelfFeeding,
  babyNotSittingIndependently,
  babyNotStackingBlocks,
  babyNotTurningToSounds,
  babyOnlySleepsBeingHeld,
  babyPoopColorChangesWithSolids,
  babyPreferringOneParent,
  babyQuietNotVocalizing,
  babyRedBirthmarkGrowing,
  babyRefusingOneBreast,
  babyRefusingSippyCup,
  babyScalpCradleCapPersistent,
  babyScratchMarksOnFace,
  babyScreamingInSleep,
  babySeparationAnxietyAtDaycare,
  babySkinRashAfterNewFood,
  babySleepAssociations,
  babySleepScheduleDisruptedByTravel,
  babySleepingFaceDown,
  babySleepingMouthOpen,
  babySpittingOutSolids,
  babyStartledEasily,
  babyStrainingButSoftPoop,
  babyStrangerAnxietyExtreme,
  babySunburnPrevention,
  babySweatingDuringSleep,
  babyTremors,
  babyTwitchingInSleep,
  babyVomitingBile,
  babyWakingAt5am,
  babyWontSleepInCrib,
  babyWontSwallow,
  bilingualSpeechDelay,
  birthmarks,
  bitingDuringBreastfeeding,
  biting,
  blackPoop,
  blockedTearDuct,
  bloodInDiaperNewborn,
  bloodInMucusBaby,
  bloodyStool,
  bottleAversion,
  bottlePreference,
  bowleggedBaby,
  breastBudsNewborn,
  breathHoldingSpells,
  bronchiolitisBaby,
  cafeAuLaitSpots,
  childNotAskingWhyQuestions,
  childNotFollowingDirections,
  childNotTellingSimpleStories,
  childNotUsingPastTense,
  chronicCongestion,
  circadianRhythmBaby,
  clubfootBaby,
  clusterFeedingNewborn,
  colicVsGas,
  colic,
  confusionalArousals,
  constipation,
  cosleepingToCribTransition,
  cowsMilkTransitionIssues,
  cradleCap,
  craniosynostosisSigns,
  crawlingBackwards,
  crossedEyes,
  croupBaby,
  curvedSpineBaby,
  cyanosisBaby,
  daycareNapStruggles,
  defiantToddler,
  dehydrationSignsBaby,
  delayedCrawling,
  delayedFineMotor,
  delayedHandDominance,
  delayedHandPreference,
  delayedLanguageInBilingualChild,
  delayedPincerGraspDevelopment,
  delayedPretendPlay,
  delayedReceptiveLanguage,
  delayedWalkingOnTiptoes,
  diaperRashNotClearing,
  diaperRash,
  diarrhea,
  difficultyUsingUtensils,
  difficultyWithConsonants,
  drinkingTooMuchMilk,
  droolingWhileTalking,
  droppingFromTwoNapsToOne,
  drySkin,
  earInfections,
  earlyHandPreference,
  earlyMorningWaking,
  echolalia,
  eczemaFlareTriggers,
  eczema,
  enlargedHead,
  erythemaToxicum,
  excessiveDrooling,
  excessiveGasBaby,
  excessiveJuiceConsumption,
  excessiveNightFeeding,
  excessiveScreenTimeEffects,
  extremeClinginess,
  eyeRollingBaby,
  failureToThriveSigns,
  fearOfBathBaby,
  fearOfLoudNoises,
  febrileSeizure,
  feedingAversion,
  feverWithRash,
  fifthDiseaseRash,
  fightingNaps,
  flatFeet,
  flatHead,
  floppyBabySyndrome,
  foamyPoop,
  fontanelleBulging,
  fontanelleSunken,
  foodAllergySigns,
  foremilkHindmilkImbalance,
  formulaIntoleranceSigns,
  foulSmellingPoop,
  fpiesFoodProtein,
  frequentColds,
  frequentFalling,
  frequentNightWakings,
  frequentPooping,
  fungalRash,
  gaggingOnSolids,
  grazingAllDayToddler,
  greenPoop,
  gruntingBabySyndrome,
  hairPullingBaby,
  handFootMouth,
  handTremorsBaby,
  hardPebblePoop,
  headBanging,
  headLag,
  headSweatingDuringSleep,
  hearingLossSignsBaby,
  heatRash,
  hemangiomaGrowing,
  herniaBulgingWhenCrying,
  hiccupsWontStop,
  highNeedsBaby,
  hipDysplasia,
  hitting,
  hives,
  hoarseVoiceBaby,
  hydroceleBaby,
  hypospadias,
  impetigoBaby,
  infantTylenolDosingConcerns,
  inguinalHerniaBaby,
  insectBitesBaby,
  introducingCowsMilk,
  intussusceptionSigns,
  ironDeficiencyFromMilk,
  ironRichFoodsForBaby,
  jargonSpeechToddler,
  jaundice,
  kawasakiDiseaseSigns,
  keratosisPilarisBaby,
  knockKnees,
  labialAdhesion,
  lateTalker,
  lateTeething,
  legTremorsBaby,
  limitedVocabulary,
  liningUpToys,
  lipTie,
  lowMilkSupplySigns,
  lowMuscleToneArms,
  lowMuscleTone,
  lowTemperatureBaby,
  meningitisSignsBaby,
  microcephalySigns,
  miliaBaby,
  milkProteinAllergy,
  mixingUpWords,
  molluscum,
  mongolianSpots,
  monotoneSpeech,
  mucusInStool,
  muscleSpasmsBaby,
  nasalSpeech,
  newbornDayNightConfusion,
  newbornSleepingTooMuch,
  nightTerrors,
  noJointAttention,
  noSocialSmile,
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
  nursingStrike,
  nystagmusBaby,
  onlyContactNapping,
  oralAversionBaby,
  oralRehydrationBaby,
  orangePoop,
  overstimulationSigns,
  oversupplySymptoms,
  overtiredBabySigns,
  overtiredBabyWontSleep,
  painfulBreastfeeding,
  pallorBaby,
  parallelPlayConcerns,
  peelingSkinNewborn,
  perioralDermatitisBaby,
  persistentFeverBaby,
  petechiaeBaby,
  phimosisBaby,
  pickyEating,
  pigeonToed,
  pneumoniaSignsBaby,
  poopWithholdingToddler,
  poorBalanceToddler,
  poorHandEyeCoordination,
  poorTrunkControl,
  portWineStain,
  possetingBaby,
  postVaccineFever,
  postVaccineFussiness,
  postVaccineRash,
  pottyTrainingRefusal,
  pottyTrainingRegression,
  preauricularPit,
  probioticsForBaby,
  projectileVomitingBaby,
  pronounReversal,
  ptosisDroopingEyelid,
  pyloricStenosisSigns,
  pyloricStenosis,
  rashAfterAntibiotics,
  reflux,
  refusingBottle,
  refusingBreast,
  refusingSolids,
  regressionAfterNewSibling,
  regressionInSpeech,
  ringwormVsEczema,
  rockingBackAndForth,
  rollingInSleep,
  roseolaRash,
  rotavirusSigns,
  rsvBaby,
  sacralDimple,
  scootingInsteadOfCrawling,
  sebaceousCystBaby,
  selectiveMutism,
  sensoryAvoidingBaby,
  sensorySeekingBaby,
  separationAnxietyBedtime,
  separationAnxiety,
  shortNaps,
  shortStatureBaby,
  skinPickingToddler,
  skinTagsBaby,
  sleepApneaSigns,
  sleepRegression18Months,
  sleepRegression4Months,
  sleepRegression8Months,
  sleepTalkingToddler,
  sleepwalkingToddler,
  slowWeightGainBreastfedBaby,
  snoring,
  softSpotConcerns,
  speechArticulationDisorder,
  speechDelay,
  spinningInCircles,
  spitUpVsVomit,
  spittingUp,
  stiffBabyHypertonia,
  strabismusIntermittent,
  strainingToPoop,
  strangerAnxiety,
  strawberryHemangioma,
  stuttering,
  sunburnBaby,
  switchingFormulaBrands,
  swollenGlandsBaby,
  swollenLymphNodesBaby,
  tantrums,
  throwingFood,
  thrush,
  tippyToeStanding,
  toddlerAfraidOfDark,
  toddlerAfraidOfPotty,
  toddlerBedtimeStalling,
  toddlerBitingSelf,
  toddlerClimbingOutOfCrib,
  toddlerConstipationFromDairy,
  toddlerControllingBehavior,
  toddlerDroppingBeginningSounds,
  toddlerDryCrackedLips,
  toddlerFoodJag,
  toddlerHairTwirling,
  toddlerHittingParents,
  toddlerHoldingPoop,
  toddlerJealousOfNewBaby,
  toddlerLisp,
  toddlerLying,
  toddlerMeltdownsOverTransitions,
  toddlerMixingUpPronounsHeShe,
  toddlerNightTimeFears,
  toddlerNotClimbingStairs,
  toddlerNotEatingEnough,
  toddlerNotJumping,
  toddlerNotNamingColors,
  toddlerNotSingingAlong,
  toddlerNotUsingPronouns,
  toddlerNotUsingTwoWordPhrases,
  toddlerOnlyDrinkingMilk,
  toddlerOnlyEatingOneFood,
  toddlerOnlySayingFewWords,
  toddlerPushingOtherChildren,
  toddlerRefusingNap,
  toddlerRefusingToShare,
  toddlerRepeatingQuestionsBack,
  toddlerRunningAwkwardly,
  toddlerScreamingPhase,
  toddlerSpeechNotUnderstoodByStrangers,
  toddlerStillUsingBottle,
  toddlerSwallowedObject,
  toddlerThrowingToys,
  toddlerThumbSucking,
  toddlerTrippingFrequently,
  toddlerWakingFromNightmares,
  toddlerWartsOnHands,
  toddlerWhiningConstantly,
  toddlerWontFollowRoutines,
  toeWalking,
  tongueThrust,
  tongueTie,
  torticollis,
  transitioningFromSwaddle,
  transitioningToToddlerBed,
  umbilicalHernia,
  unclearSpeech,
  uncoordinatedMovement,
  understimulationSigns,
  undescendedTesticle,
  undigestedFoodInPoop,
  unevenLegLength,
  utiSignsBaby,
  vaginalDischargeNewborn,
  viralRashBaby,
  vitaminDSupplementation,
  wSitting,
  wartsToddler,
  weakGripBaby,
  weaningOffBreastfeeding,
  wheezing,
  whitePoop,
  wontSleepWithoutNursing,
  yeastDiaperRash,
  yellowWateryPoop,
];

export function getConcernBySlug(slug: string): ConcernPage | undefined {
  return allConcerns.find((c) => c.slug === slug);
}

export function getConcernsByCategory(category: ConcernCategory): ConcernPage[] {
  return allConcerns.filter((c) => c.category === category);
}

export type { ConcernPage, ConcernCategory };

import type { ConcernPage } from './types';

import { concern as abdominalDistensionBaby } from './abdominal-distension-baby';
import { concern as abnormalHeadShape } from './abnormal-head-shape';
import { concern as aggressiveTowardPets } from './aggressive-toward-pets';
import { concern as amblyopiaSigns } from './amblyopia-signs';
import { concern as analFissureBaby } from './anal-fissure-baby';
import { concern as anisocoriaUnequalPupils } from './anisocoria-unequal-pupils';
import { concern as apneaSpellsBaby } from './apnea-spells-baby';
import { concern as aspirationDuringFeeding } from './aspiration-during-feeding';
import { concern as asymmetricMovement } from './asymmetric-movement';
import { concern as attachmentConcerns } from './attachment-concerns';
import { concern as babyAcne } from './baby-acne';
import { concern as babyArchingBack } from './baby-arching-back';
import { concern as babyBreathingFast } from './baby-breathing-fast';
import { concern as babyChokingOnFood } from './baby-choking-on-food';
import { concern as babyCoughingALot } from './baby-coughing-a-lot';
import { concern as babyCoughingAtNight } from './baby-coughing-at-night';
import { concern as babyCoughingWhileFeeding } from './baby-coughing-while-feeding';
import { concern as babyCurlingToes } from './baby-curling-toes';
import { concern as babyEatingNonFoodPica } from './baby-eating-non-food-pica';
import { concern as babyFavoringOneLeg } from './baby-favoring-one-leg';
import { concern as babyGrindingTeeth } from './baby-grinding-teeth';
import { concern as babyGrindingTeethSleep } from './baby-grinding-teeth-sleep';
import { concern as babyGulpingAir } from './baby-gulping-air';
import { concern as babyHiccups } from './baby-hiccups';
import { concern as babyHoldingFoodInMouth } from './baby-holding-food-in-mouth';
import { concern as babyJerkyMovements } from './baby-jerky-movements';
import { concern as babyLimping } from './baby-limping';
import { concern as babyLosingWords } from './baby-losing-words';
import { concern as babyMoaningInSleep } from './baby-moaning-in-sleep';
import { concern as babyMouthBreathing } from './baby-mouth-breathing';
import { concern as babyNappingTooMuch } from './baby-napping-too-much';
import { concern as babyNotBabbling } from './baby-not-babbling';
import { concern as babyNotInterestedInFood } from './baby-not-interested-in-food';
import { concern as babyNotKickingLegs } from './baby-not-kicking-legs';
import { concern as babyOnlySleepsBeingHeld } from './baby-only-sleeps-being-held';
import { concern as babyPreferringOneParent } from './baby-preferring-one-parent';
import { concern as babyScreamingInSleep } from './baby-screaming-in-sleep';
import { concern as babySleepingFaceDown } from './baby-sleeping-face-down';
import { concern as babySleepingMouthOpen } from './baby-sleeping-mouth-open';
import { concern as babyStartledEasily } from './baby-startled-easily';
import { concern as babySweatingDuringSleep } from './baby-sweating-during-sleep';
import { concern as babyTremors } from './baby-tremors';
import { concern as babyTwitchingInSleep } from './baby-twitching-in-sleep';
import { concern as babyVomitingBile } from './baby-vomiting-bile';
import { concern as babyWontSleepInCrib } from './baby-wont-sleep-in-crib';
import { concern as babyWontSwallow } from './baby-wont-swallow';
import { concern as bilingualSpeechDelay } from './bilingual-speech-delay';
import { concern as birthmarks } from './birthmarks';
import { concern as biting } from './biting';
import { concern as bitingDuringBreastfeeding } from './biting-during-breastfeeding';
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
import { concern as chronicCongestion } from './chronic-congestion';
import { concern as circadianRhythmBaby } from './circadian-rhythm-baby';
import { concern as clubfootBaby } from './clubfoot-baby';
import { concern as colic } from './colic';
import { concern as colicVsGas } from './colic-vs-gas';
import { concern as confusionalArousals } from './confusional-arousals';
import { concern as constipation } from './constipation';
import { concern as cradleCap } from './cradle-cap';
import { concern as craniosynostosisSigns } from './craniosynostosis-signs';
import { concern as crawlingBackwards } from './crawling-backwards';
import { concern as crossedEyes } from './crossed-eyes';
import { concern as croupBaby } from './croup-baby';
import { concern as curvedSpineBaby } from './curved-spine-baby';
import { concern as cyanosisBaby } from './cyanosis-baby';
import { concern as defiantToddler } from './defiant-toddler';
import { concern as dehydrationSignsBaby } from './dehydration-signs-baby';
import { concern as delayedCrawling } from './delayed-crawling';
import { concern as delayedFineMotor } from './delayed-fine-motor';
import { concern as delayedHandPreference } from './delayed-hand-preference';
import { concern as delayedPretendPlay } from './delayed-pretend-play';
import { concern as diaperRash } from './diaper-rash';
import { concern as diarrhea } from './diarrhea';
import { concern as difficultyWithConsonants } from './difficulty-with-consonants';
import { concern as drinkingTooMuchMilk } from './drinking-too-much-milk';
import { concern as droolingWhileTalking } from './drooling-while-talking';
import { concern as drySkin } from './dry-skin';
import { concern as earInfections } from './ear-infections';
import { concern as earlyHandPreference } from './early-hand-preference';
import { concern as earlyMorningWaking } from './early-morning-waking';
import { concern as echolalia } from './echolalia';
import { concern as eczema } from './eczema';
import { concern as enlargedHead } from './enlarged-head';
import { concern as erythemaToxicum } from './erythema-toxicum';
import { concern as excessiveDrooling } from './excessive-drooling';
import { concern as excessiveGasBaby } from './excessive-gas-baby';
import { concern as excessiveNightFeeding } from './excessive-night-feeding';
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
import { concern as inguinalHerniaBaby } from './inguinal-hernia-baby';
import { concern as insectBitesBaby } from './insect-bites-baby';
import { concern as intussusceptionSigns } from './intussusception-signs';
import { concern as ironDeficiencyFromMilk } from './iron-deficiency-from-milk';
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
import { concern as pallorBaby } from './pallor-baby';
import { concern as parallelPlayConcerns } from './parallel-play-concerns';
import { concern as peelingSkinNewborn } from './peeling-skin-newborn';
import { concern as persistentFeverBaby } from './persistent-fever-baby';
import { concern as petechiaeBaby } from './petechiae-baby';
import { concern as phimosisBaby } from './phimosis-baby';
import { concern as pickyEating } from './picky-eating';
import { concern as pigeonToed } from './pigeon-toed';
import { concern as pneumoniaSignsBaby } from './pneumonia-signs-baby';
import { concern as poopWithholdingToddler } from './poop-withholding-toddler';
import { concern as poorBalanceToddler } from './poor-balance-toddler';
import { concern as portWineStain } from './port-wine-stain';
import { concern as possetingBaby } from './posseting-baby';
import { concern as preauricularPit } from './preauricular-pit';
import { concern as projectileVomitingBaby } from './projectile-vomiting-baby';
import { concern as pronounReversal } from './pronoun-reversal';
import { concern as ptosisDroopingEyelid } from './ptosis-drooping-eyelid';
import { concern as pyloricStenosis } from './pyloric-stenosis';
import { concern as pyloricStenosisSigns } from './pyloric-stenosis-signs';
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
import { concern as separationAnxiety } from './separation-anxiety';
import { concern as separationAnxietyBedtime } from './separation-anxiety-bedtime';
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
import { concern as swollenGlandsBaby } from './swollen-glands-baby';
import { concern as swollenLymphNodesBaby } from './swollen-lymph-nodes-baby';
import { concern as tantrums } from './tantrums';
import { concern as throwingFood } from './throwing-food';
import { concern as thrush } from './thrush';
import { concern as tippyToeStanding } from './tippy-toe-standing';
import { concern as toddlerLisp } from './toddler-lisp';
import { concern as toddlerOnlyEatingOneFood } from './toddler-only-eating-one-food';
import { concern as toddlerSwallowedObject } from './toddler-swallowed-object';
import { concern as toeWalking } from './toe-walking';
import { concern as tongueThrust } from './tongue-thrust';
import { concern as tongueTie } from './tongue-tie';
import { concern as torticollis } from './torticollis';
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
import { concern as wSitting } from './w-sitting';
import { concern as wartsToddler } from './warts-toddler';
import { concern as weakGripBaby } from './weak-grip-baby';
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
  anisocoriaUnequalPupils,
  apneaSpellsBaby,
  aspirationDuringFeeding,
  asymmetricMovement,
  attachmentConcerns,
  babyAcne,
  babyArchingBack,
  babyBreathingFast,
  babyChokingOnFood,
  babyCoughingALot,
  babyCoughingAtNight,
  babyCoughingWhileFeeding,
  babyCurlingToes,
  babyEatingNonFoodPica,
  babyFavoringOneLeg,
  babyGrindingTeeth,
  babyGrindingTeethSleep,
  babyGulpingAir,
  babyHiccups,
  babyHoldingFoodInMouth,
  babyJerkyMovements,
  babyLimping,
  babyLosingWords,
  babyMoaningInSleep,
  babyMouthBreathing,
  babyNappingTooMuch,
  babyNotBabbling,
  babyNotInterestedInFood,
  babyNotKickingLegs,
  babyOnlySleepsBeingHeld,
  babyPreferringOneParent,
  babyScreamingInSleep,
  babySleepingFaceDown,
  babySleepingMouthOpen,
  babyStartledEasily,
  babySweatingDuringSleep,
  babyTremors,
  babyTwitchingInSleep,
  babyVomitingBile,
  babyWontSleepInCrib,
  babyWontSwallow,
  bilingualSpeechDelay,
  birthmarks,
  biting,
  bitingDuringBreastfeeding,
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
  chronicCongestion,
  circadianRhythmBaby,
  clubfootBaby,
  colic,
  colicVsGas,
  confusionalArousals,
  constipation,
  cradleCap,
  craniosynostosisSigns,
  crawlingBackwards,
  crossedEyes,
  croupBaby,
  curvedSpineBaby,
  cyanosisBaby,
  defiantToddler,
  dehydrationSignsBaby,
  delayedCrawling,
  delayedFineMotor,
  delayedHandPreference,
  delayedPretendPlay,
  diaperRash,
  diarrhea,
  difficultyWithConsonants,
  drinkingTooMuchMilk,
  droolingWhileTalking,
  drySkin,
  earInfections,
  earlyHandPreference,
  earlyMorningWaking,
  echolalia,
  eczema,
  enlargedHead,
  erythemaToxicum,
  excessiveDrooling,
  excessiveGasBaby,
  excessiveNightFeeding,
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
  inguinalHerniaBaby,
  insectBitesBaby,
  intussusceptionSigns,
  ironDeficiencyFromMilk,
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
  pallorBaby,
  parallelPlayConcerns,
  peelingSkinNewborn,
  persistentFeverBaby,
  petechiaeBaby,
  phimosisBaby,
  pickyEating,
  pigeonToed,
  pneumoniaSignsBaby,
  poopWithholdingToddler,
  poorBalanceToddler,
  portWineStain,
  possetingBaby,
  preauricularPit,
  projectileVomitingBaby,
  pronounReversal,
  ptosisDroopingEyelid,
  pyloricStenosis,
  pyloricStenosisSigns,
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
  separationAnxiety,
  separationAnxietyBedtime,
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
  swollenGlandsBaby,
  swollenLymphNodesBaby,
  tantrums,
  throwingFood,
  thrush,
  tippyToeStanding,
  toddlerLisp,
  toddlerOnlyEatingOneFood,
  toddlerSwallowedObject,
  toeWalking,
  tongueThrust,
  tongueTie,
  torticollis,
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
  wSitting,
  wartsToddler,
  weakGripBaby,
  wheezing,
  whitePoop,
  wontSleepWithoutNursing,
  yeastDiaperRash,
  yellowWateryPoop,
];

export function getConcernBySlug(slug: string): ConcernPage | undefined {
  return allConcerns.find((c) => c.slug === slug);
}

export type { ConcernPage, ConcernCategory } from './types';

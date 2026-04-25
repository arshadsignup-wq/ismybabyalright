import type { TeethingTooth, TeethingSymptom, TeethingRemedy, TeethingMyth } from "./types";

// ---------------------------------------------------------------------------
// All 20 primary (baby) teeth
// Order and age ranges based on ADA / AAP eruption charts
// ---------------------------------------------------------------------------

export const teeth: TeethingTooth[] = [
  // Lower teeth
  { name: "Central incisor", position: "lower", typicalAgeMonths: { min: 6, max: 10 }, order: 1 },
  { name: "Lateral incisor", position: "lower", typicalAgeMonths: { min: 10, max: 16 }, order: 3 },
  { name: "Canine (cuspid)", position: "lower", typicalAgeMonths: { min: 17, max: 23 }, order: 8 },
  { name: "First molar", position: "lower", typicalAgeMonths: { min: 14, max: 18 }, order: 5 },
  { name: "Second molar", position: "lower", typicalAgeMonths: { min: 23, max: 31 }, order: 9 },

  // Upper teeth
  { name: "Central incisor", position: "upper", typicalAgeMonths: { min: 8, max: 12 }, order: 2 },
  { name: "Lateral incisor", position: "upper", typicalAgeMonths: { min: 9, max: 13 }, order: 4 },
  { name: "Canine (cuspid)", position: "upper", typicalAgeMonths: { min: 16, max: 22 }, order: 7 },
  { name: "First molar", position: "upper", typicalAgeMonths: { min: 13, max: 19 }, order: 6 },
  { name: "Second molar", position: "upper", typicalAgeMonths: { min: 25, max: 33 }, order: 10 },
];

// Note: Each entry above represents a pair (left + right), so 10 entries = 20 teeth total.

// ---------------------------------------------------------------------------
// Common teething symptoms
// ---------------------------------------------------------------------------

export const symptoms: TeethingSymptom[] = [
  {
    symptom: "Excessive drooling",
    description:
      "Saliva production increases significantly as teeth push toward the gum surface. You may notice a drool rash on the chin, cheeks, or neck.",
    normalDuration: "Days to weeks around each tooth eruption",
    isCommon: true,
  },
  {
    symptom: "Gum swelling and tenderness",
    description:
      "The gums directly over the erupting tooth may appear red, swollen, or bulging. A small bluish blister (eruption cyst) may form, which is harmless and usually resolves on its own.",
    normalDuration: "A few days before and after the tooth breaks through",
    isCommon: true,
  },
  {
    symptom: "Increased biting and chewing",
    description:
      "Babies instinctively chew on fingers, toys, and anything within reach. Counter-pressure on the gums provides relief from the discomfort of eruption.",
    normalDuration: "Throughout active teething periods",
    isCommon: true,
  },
  {
    symptom: "Fussiness and irritability",
    description:
      "Mild discomfort from gum inflammation can make your baby crankier than usual, especially in the days right before a tooth erupts. Nighttime fussiness is common because there are fewer distractions.",
    normalDuration: "A few days per tooth, typically worst right before eruption",
    isCommon: true,
  },
  {
    symptom: "Disrupted sleep",
    description:
      "Some babies wake more frequently at night or have trouble settling due to gum discomfort. This is usually short-lived and resolves once the tooth breaks through.",
    normalDuration: "A few nights per tooth eruption",
    isCommon: true,
  },
  {
    symptom: "Decreased appetite",
    description:
      "Sore gums can make sucking or chewing uncomfortable. Your baby may refuse the breast, bottle, or solid foods temporarily. Cold foods may be more accepted.",
    normalDuration: "A few days; appetite returns once the tooth erupts",
    isCommon: true,
  },
  {
    symptom: "Ear pulling or cheek rubbing",
    description:
      "Babies may tug at their ears or rub their cheeks and jaw. Gum pain can radiate along the jaw to the ear area. Note: persistent ear pulling with fever may indicate an ear infection -- see your pediatrician.",
    normalDuration: "Intermittent during active eruption",
    isCommon: true,
  },
  {
    symptom: "Mild temperature elevation",
    description:
      "A very slight rise in temperature (below 100.4 F / 38 C) can occur due to gum inflammation. This is NOT a true fever. Temperatures at or above 100.4 F are not caused by teething and should be evaluated by your pediatrician.",
    normalDuration: "1-2 days around eruption",
    isCommon: false,
  },
  {
    symptom: "Drool rash",
    description:
      "Constant moisture from drool can irritate the skin around the mouth, chin, and neck, causing a red, bumpy rash. Keeping the area dry and applying a barrier cream (like petroleum jelly) helps.",
    normalDuration: "Comes and goes during heavy drooling periods",
    isCommon: true,
  },
];

// ---------------------------------------------------------------------------
// Safe remedies
// ---------------------------------------------------------------------------

export const safeRemedies: TeethingRemedy[] = [
  {
    name: "Chilled teething ring or washcloth",
    description:
      "Chill (do not freeze) a solid teething ring or clean damp washcloth in the refrigerator for 15-30 minutes. The cool temperature soothes inflamed gums and the pressure from chewing provides relief. Avoid liquid-filled teethers that could leak.",
    safe: true,
    ageMinMonths: 3,
  },
  {
    name: "Gum massage",
    description:
      "With clean hands, gently rub or press on your baby's gums with a finger or a moistened gauze pad. Firm, gentle pressure on the sore area provides counter-pressure that relieves discomfort.",
    safe: true,
    ageMinMonths: 0,
  },
  {
    name: "Cold spoon",
    description:
      "Chill a metal spoon in the refrigerator (not the freezer) and let your baby gnaw on the rounded back. The cold metal provides soothing relief. Always supervise closely.",
    safe: true,
    ageMinMonths: 4,
  },
  {
    name: "Chilled foods (for babies eating solids)",
    description:
      "Cold fruit in a mesh feeder, chilled cucumber sticks, or cold applesauce can soothe gums while also providing nutrition. Only offer age-appropriate foods your baby has already been introduced to.",
    safe: true,
    ageMinMonths: 6,
  },
  {
    name: "Infant acetaminophen (Tylenol)",
    description:
      "For babies 3 months and older, infant acetaminophen can be given occasionally for significant discomfort. Always use weight-based dosing as directed by your pediatrician. Do not give more frequently than every 4-6 hours.",
    safe: true,
    ageMinMonths: 3,
  },
  {
    name: "Infant ibuprofen (Motrin/Advil)",
    description:
      "For babies 6 months and older, infant ibuprofen may help with gum inflammation and pain. Use weight-based dosing as directed by your pediatrician. Do not give more frequently than every 6-8 hours.",
    safe: true,
    ageMinMonths: 6,
  },
  {
    name: "Distraction and extra comfort",
    description:
      "Extra cuddles, gentle rocking, a new toy, or a change of scenery can help distract your baby from teething discomfort. Sometimes attention and comfort are the most effective remedies.",
    safe: true,
    ageMinMonths: 0,
  },
  {
    name: "Dry the drool",
    description:
      "Keep a soft cloth handy to gently wipe drool from your baby's face. Apply petroleum jelly or a gentle barrier cream to the chin and neck area to prevent drool rash. Use a bib to keep clothing dry.",
    safe: true,
    ageMinMonths: 0,
  },
];

// ---------------------------------------------------------------------------
// UNSAFE remedies -- things to AVOID
// ---------------------------------------------------------------------------

export const unsafeRemedies: TeethingRemedy[] = [
  {
    name: "Benzocaine gels or sprays (Orajel, Anbesol)",
    description:
      "The FDA warns against using benzocaine products in children under 2 years old. Benzocaine can cause methemoglobinemia, a rare but potentially fatal condition that reduces the blood's ability to carry oxygen. These products are also easily swallowed and can numb the throat, increasing choking risk.",
    safe: false,
    ageMinMonths: 0,
  },
  {
    name: "Lidocaine (viscous lidocaine)",
    description:
      "Prescription-strength lidocaine is dangerous for infants. The FDA has issued warnings that it can cause seizures, severe brain injury, and heart problems in young children. Even small amounts can be toxic if swallowed.",
    safe: false,
    ageMinMonths: 0,
  },
  {
    name: "Amber teething necklaces and bracelets",
    description:
      "Despite marketing claims, there is no scientific evidence that amber releases succinic acid through the skin to relieve pain. These necklaces pose serious strangulation and choking hazards. The FDA, AAP, and CPSC all recommend against them.",
    safe: false,
    ageMinMonths: 0,
  },
  {
    name: "Homeopathic teething tablets and gels",
    description:
      "The FDA has warned against homeopathic teething products (such as Hyland's teething tablets) after reports of adverse events, including seizures and deaths. Some products were found to contain inconsistent and potentially toxic amounts of belladonna (a poisonous plant).",
    safe: false,
    ageMinMonths: 0,
  },
  {
    name: "Whiskey, brandy, or any alcohol on gums",
    description:
      "An old folk remedy that is genuinely dangerous. Even small amounts of alcohol can be toxic to an infant's developing brain and body. Alcohol is a depressant that can interfere with breathing and cause hypoglycemia in babies.",
    safe: false,
    ageMinMonths: 0,
  },
  {
    name: "Frozen teething rings or objects",
    description:
      "Fully frozen teethers can be too hard and may bruise or damage your baby's delicate gums. Stick with chilled (refrigerated) items instead. If using a washcloth, dampen and refrigerate -- do not freeze it solid.",
    safe: false,
    ageMinMonths: 0,
  },
  {
    name: "Aspirin or aspirin-containing products",
    description:
      "Never give aspirin to infants or children. Aspirin is associated with Reye's syndrome, a rare but serious condition that causes swelling in the liver and brain. Use only infant acetaminophen or ibuprofen (6+ months) as directed by your pediatrician.",
    safe: false,
    ageMinMonths: 0,
  },
];

// ---------------------------------------------------------------------------
// Common myths debunked
// ---------------------------------------------------------------------------

export const myths: TeethingMyth[] = [
  {
    myth: "Teething causes high fever",
    truth:
      "Research shows teething may cause a very slight temperature increase (below 100.4 F / 38 C), but it does not cause true fever. A study in Pediatrics (2016) confirmed this finding. If your baby has a fever of 100.4 F or higher, look for another cause such as an infection and contact your pediatrician.",
  },
  {
    myth: "Teething causes diarrhea",
    truth:
      "There is no proven link between teething and diarrhea. The timing coincidence occurs because teething begins around 6 months, the same age babies start exploring objects with their mouths, increasing exposure to germs. Loose stools lasting more than a day warrant a call to your pediatrician.",
  },
  {
    myth: "All babies get teeth at 6 months",
    truth:
      "Six months is the average, but the normal range is very wide. Some babies are born with teeth (natal teeth), while others do not get their first tooth until 12-14 months. Late teething is rarely a concern. If your child has no teeth by 18 months, mention it to your dentist or pediatrician.",
  },
  {
    myth: "Amber teething necklaces provide pain relief",
    truth:
      "There is zero scientific evidence that amber releases succinic acid through the skin or that succinic acid has analgesic properties. Multiple studies have debunked this claim. More importantly, these necklaces pose real strangulation and choking hazards. The AAP and FDA recommend against their use.",
  },
  {
    myth: "You need to rub whiskey on the gums",
    truth:
      "This dangerous folk remedy persists despite clear medical evidence against it. Even tiny amounts of alcohol are harmful to infants. Alcohol can depress the central nervous system, interfere with breathing, and cause dangerously low blood sugar. There are many safe alternatives for teething relief.",
  },
  {
    myth: "Teething causes ear infections",
    truth:
      "While babies may pull at their ears during teething (pain can radiate from the jaw), teething does not cause ear infections. Ear infections are caused by bacteria or viruses. If your baby has ear pulling along with fever, fussiness, or trouble sleeping, have your pediatrician check for an ear infection.",
  },
];

import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-formula-preparation-safety',
  title: 'How to Safely Prepare Baby Formula',
  category: 'feeding',
  searchTerms: [
    'how to prepare baby formula safely',
    'formula preparation steps',
    'baby formula water temperature',
    'can I use tap water for formula',
    'formula mixing ratio',
    'baby formula too concentrated',
    'baby formula too diluted danger',
    'how to make formula bottle',
    'formula preparation mistakes',
    'safe water for baby formula',
    'boil water for formula',
  ],
  quickAnswer:
    'Safe formula preparation is critical for your baby\'s health. Always follow the manufacturer\'s instructions for water-to-powder ratios exactly — formula that is too concentrated can strain the kidneys and cause dehydration, while overly diluted formula can lead to water intoxication and nutritional deficiency. Use safe water (boiled and cooled if recommended), wash your hands before preparation, and use clean bottles and nipples.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young infants are especially vulnerable to improperly prepared formula and waterborne bacteria. The CDC and WHO recommend boiling water and cooling it to at least 158 degrees F (70 degrees C) before adding powder formula to kill potential Cronobacter bacteria. Use the exact scoop provided with your formula and level it off — do not pack or heap the scoop. Never add extra water to stretch formula or extra powder for more calories unless directed by your pediatrician. Prepared formula should be used within 2 hours at room temperature or within 24 hours if refrigerated.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue following the same preparation guidelines as your baby\'s formula intake increases. Most babies at this age consume 24-32 ounces of formula per day across 5-6 feedings. If your community water supply is safe and fluoridated, you can use cold tap water run for 30 seconds (to reduce lead levels from pipes) without boiling for healthy, full-term babies over 3 months, though boiling is still recommended by some organizations. If you use well water, have it tested for bacteria and nitrates. Always test formula temperature on the inside of your wrist before feeding — it should feel lukewarm, not hot.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby begins eating solid foods, formula remains the primary source of nutrition until 12 months. Do not switch to whole cow\'s milk before 12 months. Continue preparing formula according to package directions. When traveling, ready-to-feed formula is the safest option as it requires no water or mixing. If preparing bottles in advance, store them in the back of the refrigerator (not the door) and use within 24 hours. Discard any formula left in a bottle after a feeding, as bacteria from your baby\'s saliva can multiply quickly.',
    },
  ],
  whenNormal: [
    'You are following the manufacturer\'s exact instructions for water-to-powder ratios and using the provided scoop.',
    'Your baby is having 6 or more wet diapers per day and gaining weight appropriately on properly prepared formula.',
    'You prepare formula with safe water and store it correctly.',
  ],
  whenToMention: [
    'You are unsure whether your water supply is safe for formula preparation (well water, older home with potential lead pipes, or travel to areas with unsafe water).',
    'Your baby seems hungry shortly after feedings or is not gaining weight well despite feeding the expected amounts.',
    'You are considering switching formula brands and want guidance on safe transition.',
  ],
  whenToActNow: [
    'You suspect your baby has consumed improperly diluted formula (too concentrated or too watered down) and is showing symptoms — excessive thirst, lethargy, seizures, or irritability require emergency care.',
    'Your baby develops signs of water intoxication from overly diluted formula: puffiness, low body temperature, seizures, or unusual drowsiness — call 911 immediately.',
    'Your baby has symptoms of a foodborne illness after consuming formula: persistent vomiting, bloody diarrhea, high fever, or signs of dehydration — seek medical care immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-formula-storage-guidelines', 'baby-food-preparation-hygiene', 'baby-microwave-heating-danger'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — How to Prepare and Store Powdered Infant Formula',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/infant-formula-preparation-and-storage.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization — How to Prepare Formula for Bottle-Feeding at Home',
      url: 'https://www.who.int/publications/i/item/9789241595414',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — How to Safely Prepare Formula with Water',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/How-to-Safely-Prepare-Formula-with-Water.aspx',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'preparing-formula-safely',
  title: 'How to Prepare Formula Safely',
  category: 'feeding',
  searchTerms: [
    'how to prepare formula safely',
    'making baby formula',
    'formula preparation steps',
    'boiling water for formula',
    'formula water temperature',
    'safe formula mixing',
    'can I use tap water for formula',
    'formula hygiene',
  ],
  quickAnswer:
    'Safe formula preparation involves using clean water, following the manufacturer\'s mixing instructions exactly, and practicing good hygiene with bottles and equipment. Using too much or too little water can be dangerous for your baby. The CDC recommends using water from a safe source and, for babies under 3 months or those who are immunocompromised, boiling and cooling the water before mixing.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Safe preparation is especially critical for newborns whose immune systems are still developing. Use boiled and cooled water if your pediatrician recommends it or if you are uncertain about your water source. Always wash your hands before preparing bottles and sterilize new bottles and nipples before first use. Prepared formula should be used within two hours at room temperature or within 24 hours if refrigerated.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, most pediatricians agree that using tap water from a safe municipal source is acceptable without boiling, though you should check with your own provider. Continue to wash bottles thoroughly between uses and never microwave formula, as it can create dangerous hot spots. Always test the temperature of warmed formula on your wrist before feeding.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby grows and you become more experienced with formula preparation, maintain the same hygiene practices. If you are preparing formula on the go, use pre-measured powder in a clean container and add water when ready to feed. Ready-to-feed formula is a convenient and sterile option for travel, though it costs more than powder.',
    },
  ],
  whenNormal: [
    'You use clean tap water from a safe municipal supply to mix formula as directed by your pediatrician',
    'You prepare bottles one at a time or make a batch and refrigerate for use within 24 hours',
    'You discard formula that has been at room temperature for more than two hours',
    'You follow the exact scoop-to-water ratio on the formula packaging',
  ],
  whenToMention: [
    'You are unsure whether your tap water is safe to use for formula and need guidance on testing or alternatives',
    'Your baby has had repeated stomach illnesses and you want to review your formula preparation routine',
    'You are using well water and want to know if it needs to be tested for nitrates or other contaminants',
    'You have been adding extra water or extra powder to formula and want to understand the risks',
  ],
  whenToActNow: [
    'Your baby shows signs of water intoxication such as irritability, drowsiness, swelling, or seizures from over-diluted formula',
    'Your baby has signs of dehydration or hypernatremia such as extreme fussiness, dry mouth, or lethargy from over-concentrated formula',
    'Your baby has consumed formula that may have been contaminated or recalled',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant Formula Preparation and Storage.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/infant-formula-preparation-and-storage.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Safely Prepare Formula with Water. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/How-to-Safely-Prepare-Formula-with-Water.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. How to Prepare Formula for Bottle-Feeding at Home.',
      url: 'https://www.who.int/publications/i/item/9789241595414',
    },
  ],
};

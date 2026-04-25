import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cradle-cap',
  title: 'Cradle Cap (Seborrheic Dermatitis)',
  category: 'skin',
  searchTerms: [
    'baby cradle cap',
    'flaky scalp baby',
    'baby dandruff',
    'yellow crusty patches on baby head',
    'how to get rid of cradle cap',
    'cradle cap treatment',
    'baby scalp flaking',
    'seborrheic dermatitis infant',
    'cradle cap behind ears',
    'is cradle cap normal',
  ],
  quickAnswer:
    'Cradle cap is a very common, harmless condition that causes yellowish, greasy, scaly patches on your baby\'s scalp. It is not caused by poor hygiene, it does not bother your baby, and it almost always clears up on its own within the first several months of life.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Cradle cap most commonly appears in the first few weeks of life. You may notice thick, yellowish or brownish crusty patches on the scalp, and sometimes in the eyebrows, behind the ears, or in skin folds. It is thought to be caused by leftover maternal hormones stimulating oil glands. It does not itch or cause your baby any discomfort.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most cases of cradle cap begin to improve by this age. Gentle daily washing with a mild baby shampoo and soft brushing of the scalp can help loosen and remove scales. You can also massage a small amount of mineral oil or petroleum jelly into the scalp before bath time to help soften thick patches.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, cradle cap has typically resolved. If it persists or seems to be spreading or becoming red and inflamed, it is worth mentioning to your pediatrician, as it may overlap with eczema or require a medicated shampoo.',
    },
    {
      ageRange: '12 months+',
      context:
        'Cradle cap occasionally persists into toddlerhood but this is uncommon. Persistent, widespread, or recurrent scaly patches after the first year may be a different form of dermatitis and should be evaluated by your child\'s doctor.',
    },
  ],
  whenNormal: [
    'Yellowish, greasy, scaly patches on the scalp that do not seem to bother your baby',
    'Mild flaking that comes off when you gently brush the scalp',
    'Small patches behind the ears, in the eyebrows, or on the forehead',
    'Gradual improvement over weeks to months with gentle daily care',
  ],
  whenToMention: [
    'Cradle cap is spreading to the face, neck, or diaper area',
    'The affected skin is becoming red, swollen, or weeping',
    'Cradle cap persists beyond 6-8 months despite regular gentle care',
    'You notice your baby scratching at the patches or seeming uncomfortable',
  ],
  whenToActNow: [
    'The affected areas are cracked, bleeding, or oozing pus, suggesting a secondary infection',
    'Your baby develops a widespread red, weeping rash along with fever or irritability',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cradle Cap. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Cradle-Cap.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby Birthmarks & Rashes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Seborrheic Dermatitis in Infants. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/000963.htm',
    },
  ],
};

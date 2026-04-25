import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'yeast-diaper-rash',
  title: 'Baby Yeast Diaper Rash (Candidal Diaper Dermatitis)',
  category: 'skin',
  searchTerms: [
    'yeast diaper rash baby',
    'candida diaper rash',
    'baby diaper rash with red dots',
    'diaper rash with satellite spots',
    'baby diaper rash not going away',
    'yeast infection diaper area baby',
    'bright red diaper rash with bumps',
    'antifungal diaper rash cream',
    'diaper rash after antibiotics',
    'baby yeast infection treatment',
  ],
  quickAnswer:
    'A yeast diaper rash is caused by the Candida fungus, which thrives in warm, moist environments like a diaper. It looks different from regular diaper rash: it is typically bright red with sharply defined borders and small red satellite bumps around the edges. It does not respond to regular diaper cream and needs an antifungal treatment instead.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies are particularly susceptible to yeast diaper rash because their immune systems are still developing. Yeast rashes are especially common after a course of antibiotics, which can disrupt the normal balance of organisms on the skin. In breastfed babies, maternal antibiotics can also sometimes trigger a yeast diaper rash in the baby.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is a common age for yeast diaper rashes, especially in babies who stay in wet diapers for extended periods. The key distinguishing features from regular diaper rash are the bright beefy-red color, well-defined scalloped borders, and small satellite bumps or pimples spreading outward from the main rash. Skin folds are often involved, while regular friction-based diaper rash tends to spare the folds.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Yeast diaper rashes may occur more frequently during the transition to solid foods, as changes in stool composition create a more favorable environment for Candida. Any diaper rash that has not improved after 3 days of standard barrier cream treatment should be suspected as yeast. Over-the-counter antifungal creams like clotrimazole or miconazole are the typical first-line treatment.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers can still develop yeast diaper rashes, particularly after illness, antibiotics, or periods of diarrhea. Keeping the diaper area clean and dry, changing promptly after bowel movements, and using an antifungal cream at the first sign of the characteristic bright red rash can help resolve it quickly. Most yeast diaper rashes clear within 3-7 days of appropriate treatment.',
    },
  ],
  whenNormal: [
    'A bright red rash in the diaper area that clears within a few days of antifungal cream',
    'Yeast diaper rash that appears after a course of antibiotics',
    'Small satellite bumps around the edges of the main rash area that respond to treatment',
  ],
  whenToMention: [
    'The rash is not improving after 3-5 days of consistent antifungal cream use',
    'Yeast diaper rashes keep recurring frequently despite good diaper hygiene',
    'Your baby also has white patches in the mouth (oral thrush), which often co-occurs with yeast diaper rash',
    'The rash is very raw, painful-looking, or causing significant discomfort to your baby',
  ],
  whenToActNow: [
    'The rash has open sores, is bleeding, or shows signs of bacterial infection such as pus, increasing warmth, or spreading redness beyond the diaper area',
    'Your baby develops a fever along with the rash and seems unwell',
    'The rash is blistering extensively or the skin is peeling away in sheets',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Diaper Rash. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Diaper-Rash.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Thrush and Other Candida Infections. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Thrush-and-Other-Candida-Infections.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Candidal Diaper Dermatitis. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/000964.htm',
    },
  ],
};

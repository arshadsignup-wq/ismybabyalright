import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-blood-in-stool-dark',
  title: 'Dark Blood in Baby\'s Stool',
  category: 'digestive',
  searchTerms: [
    'baby dark blood stool',
    'baby black stool blood',
    'baby dark red blood poop',
    'baby melena',
    'baby tarry stool',
    'baby dark bloody diaper',
    'infant dark blood in poop',
    'baby maroon stool',
    'baby upper gi bleed signs',
    'baby black sticky stool',
  ],
  quickAnswer:
    'Dark or black blood in stool (melena) is different from bright red blood and may indicate bleeding from the upper digestive tract (stomach or upper intestine). In newborns, black stools in the first few days (meconium) are normal. Beyond the first week, dark, tarry, or coffee-ground-like material in stool needs prompt medical evaluation. Some dark-colored foods and iron supplements can also darken stools without being blood.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Meconium (black, tarry stool) in the first 2 to 3 days of life is completely normal. After transitional stools, any return of black, tarry stool should be evaluated. In breastfed babies, dark blood in stool could be from swallowed blood from cracked nipples. Your pediatrician can test the stool to determine if the blood is from the baby or the mother.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Dark blood in stool at this age is uncommon and needs evaluation. Possible causes include Meckel diverticulum, intestinal duplication, or other GI conditions. Iron supplements can darken stool to a greenish-black color, which is harmless. If you are unsure whether the dark color is from iron or blood, save the diaper and contact your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Dark or black stools can result from iron-rich foods (like fortified cereal or meats), iron supplements, or bismuth-containing products. These causes are harmless. True melena (black, tarry, foul-smelling stool) indicates upper GI bleeding and needs prompt evaluation.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Dark-colored foods like blueberries, beets, and dark chocolate can darken stool. Iron supplements commonly cause dark green to black stools. If your toddler has not eaten dark foods or taken iron and has black, tarry stools, contact your pediatrician promptly for evaluation.',
    },
  ],
  whenNormal: [
    'Meconium in the first 2 to 3 days of life',
    'Dark green or black stool from iron supplements or iron-fortified foods',
    'Dark stool after eating dark-colored foods like blueberries or beets',
  ],
  whenToMention: [
    'Dark or black stool that is not clearly explained by food or supplements',
    'You are unsure whether stool darkening is from iron or blood',
  ],
  whenToActNow: [
    'Black, tarry, foul-smelling stool (melena) that is not meconium or from iron supplements',
    'Dark bloody stool with vomiting, abdominal pain, or pallor',
    'Any significant amount of blood in stool at any age',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Blood in Stool. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Blood-in-Stool.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Gastrointestinal Bleeding in Children. Pediatric Clinics of North America.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28779993/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Stool Color Guide. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
  ],
  relatedConcernSlugs: ['bloody-stool', 'black-poop', 'baby-blood-in-stool-streaks', 'baby-gi-bleeding-causes'],
};

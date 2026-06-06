import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-stomach-virus-prevention',
  title: 'Preventing Stomach Bugs in Baby',
  category: 'digestive',
  searchTerms: [
    'prevent stomach bug baby',
    'baby gastroenteritis prevention',
    'how to avoid stomach flu baby',
    'baby norovirus prevention',
    'stop stomach bug spreading baby',
    'baby gastro hygiene',
    'protect baby stomach virus',
    'baby daycare stomach bug prevention',
    'hand washing stomach bug baby',
    'rotavirus vaccine prevention',
  ],
  quickAnswer:
    'The best ways to prevent stomach bugs in babies include thorough hand washing (especially after diaper changes and before food preparation), rotavirus vaccination, cleaning contaminated surfaces with bleach-based cleaners, and keeping your sick child home from daycare until symptoms resolve. Breastfeeding also provides some protective immunity.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Protect young infants by ensuring all caregivers wash hands thoroughly. Breastfeeding provides antibodies that help protect against gastrointestinal infections. The rotavirus vaccine series begins at 2 months and is one of the most effective preventive measures against severe gastroenteritis.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Complete the rotavirus vaccine series as recommended (2 or 3 doses depending on brand). Continue breastfeeding if possible. Wash hands before preparing bottles and after diaper changes. Clean toys and surfaces that babies mouth regularly.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start putting everything in their mouths and attending group care, exposure increases. Regular hand washing remains the most effective prevention. Teach caregivers proper hand hygiene. Keep your baby home when they have diarrhea or vomiting.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers in daycare are frequently exposed to stomach bugs. Encourage hand washing after toilet use and before eating. Use bleach-based cleaners for vomit and diarrhea cleanup, as alcohol-based sanitizers are not effective against norovirus. Keep sick children home for 24 to 48 hours after symptoms resolve.',
    },
  ],
  whenNormal: [
    'Taking standard hygiene precautions and following the vaccination schedule',
    'Occasional stomach bugs despite good hygiene, which is a normal part of building immunity',
  ],
  whenToMention: [
    'Your child gets stomach bugs very frequently and you want to discuss whether this is normal',
    'You want guidance on when your child can return to daycare after a stomach bug',
  ],
  whenToActNow: [
    'Multiple family members become ill simultaneously with severe symptoms',
    'Your baby has recurrent episodes of vomiting or diarrhea that do not seem related to infections',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Preventing Norovirus.',
      url: 'https://www.cdc.gov/norovirus/prevention/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Rotavirus. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Rotavirus.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Rotavirus Vaccination.',
      url: 'https://www.cdc.gov/vaccines/vpd/rotavirus/index.html',
    },
  ],
  relatedConcernSlugs: ['baby-stomach-virus-duration', 'baby-rotavirus-vaccine-side-effects', 'diarrhea'],
};

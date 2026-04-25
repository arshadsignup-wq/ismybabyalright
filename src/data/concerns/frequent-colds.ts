import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'frequent-colds',
  title: 'Baby Getting Sick Frequently (Frequent Colds)',
  category: 'medical',
  searchTerms: [
    'baby always sick',
    'baby keeps getting colds',
    'how many colds is normal for baby',
    'baby sick every month',
    'toddler constantly sick daycare',
    'baby immune system weak',
    'is my baby getting sick too often',
    'baby cold after cold',
    'when to worry about frequent illness in baby',
    'baby runny nose all the time',
  ],
  quickAnswer:
    'It is completely normal for babies and toddlers to get 8-12 colds per year, and even more if they attend daycare. Their immune systems are encountering common viruses for the first time and building immunity. While it can feel alarming, frequent colds are actually a sign of a healthy immune system learning and responding.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Newborns have some protection from maternal antibodies passed during pregnancy, so colds may be less frequent in the first few months. However, when young babies do get sick, they need closer monitoring because their airways are very small and they can only breathe through their noses. Any fever in a baby under 3 months requires immediate medical evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As maternal antibodies wane around 6 months, babies become more susceptible to viral infections. If your baby starts daycare or has older siblings, you may notice a significant increase in colds. It is normal for one cold to seem to run into the next, as each virus takes 7-10 days to fully resolve.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers in group care settings can seem perpetually sick during fall and winter months. Most of these are viral upper respiratory infections that resolve on their own. Toddlers may have 8-12 or more viral illnesses per year, and this is within the range of normal. Each infection helps build long-term immunity.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 3-4, most children have developed immunity to the most common circulating viruses and the frequency of illness typically drops. Children who attended daycare early often get sick less frequently once they reach preschool or school age compared to peers who did not have early group exposure.',
    },
  ],
  whenNormal: [
    'Your baby gets 8-12 colds per year, especially during fall and winter',
    'Each cold lasts 7-10 days and your baby recovers fully between illnesses',
    'Your baby is growing well, gaining weight, and meeting developmental milestones despite frequent colds',
    'The colds are simple upper respiratory symptoms: runny nose, mild cough, occasionally a low-grade fever',
    'Your baby is in daycare or has older siblings bringing viruses home',
  ],
  whenToMention: [
    'Your baby seems to have a cold that never fully resolves, lasting beyond 10-14 days, which may suggest a sinus infection or allergies',
    'Your baby gets frequent ear infections along with colds',
    'You feel the frequency or severity of illnesses is unusual even accounting for daycare exposure',
    'Your baby has recurrent wheezing episodes with colds',
  ],
  whenToActNow: [
    'Any fever in a baby under 3 months old requires immediate medical evaluation',
    'Your baby has difficulty breathing, rapid breathing, retractions (skin pulling in between ribs), or blue-tinged lips during a cold',
    'Your baby has repeated serious infections such as pneumonia, deep skin infections, or infections requiring hospitalization, which could indicate an immune system issue',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Children and Colds.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Children-and-Colds.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Caring for Your Baby and Young Child: Birth to Age 5. 7th Edition.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Common Cold.',
      url: 'https://www.cdc.gov/common-cold/about/index.html',
    },
  ],
};

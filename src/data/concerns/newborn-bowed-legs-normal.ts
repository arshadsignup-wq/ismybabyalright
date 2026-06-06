import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-bowed-legs-normal',
  title: 'Normal Bowed Legs in Newborns',
  category: 'physical',
  searchTerms: [
    'newborn bowed legs',
    'baby legs curved',
    'newborn bow legs normal',
    'baby legs not straight',
    'infant bowed legs',
    'newborn legs curled inward',
    'baby O legs',
    'physiologic bowing baby',
    'when do baby legs straighten',
    'newborn curved legs from womb',
  ],
  quickAnswer:
    'Bowed legs in newborns and infants are completely normal and expected. This is called physiologic bowing and results from the curled-up position your baby was in inside the womb. The legs gradually straighten on their own as your child grows and begins to walk, typically by age 2-3. No treatment is needed for normal physiologic bowing.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'It is completely normal for your newborn\'s legs to appear bowed or curved. After spending months curled up in the womb, the legs maintain this position after birth. You may also notice that the feet turn inward or outward, which is also related to positioning in the womb. These positional deformities gradually self-correct without any intervention.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The bowed appearance of the legs continues and is still perfectly normal. As your baby kicks and stretches, the legs will gradually begin to straighten. The feet may also still appear turned in or out. No braces, special shoes, or treatment is needed for physiologic bowing.',
    },
    {
      ageRange: '3-6 months',
      context:
        'You may notice the legs becoming gradually straighter as your baby becomes more active and starts bearing weight during tummy time and supported standing. The bowing remains a normal finding at this age.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby begins to pull to stand and cruise, some bowing is still normal. The legs typically straighten by age 18-24 months. If the bowing appears to be getting worse rather than better, is asymmetric (one leg more bowed than the other), or your child is limping, consult your pediatrician to rule out other conditions like Blount disease or rickets.',
    },
  ],
  whenNormal: [
    'Both legs appear symmetrically bowed in a newborn or young infant',
    'The bowing gradually improves as baby grows and becomes more active',
    'Baby moves both legs equally and does not appear to be in pain',
    'No swelling, redness, or tenderness of the legs or knees',
  ],
  whenToMention: [
    'Bowing seems to be worsening after age 18 months rather than improving',
    'The bowing is asymmetric (one leg more affected than the other)',
    'Your child has started walking but the bowing seems excessive',
  ],
  whenToActNow: [
    'Sudden new bowing of one or both legs with pain, swelling, or refusal to bear weight',
    'Severe bowing with a limp or difficulty walking, which could indicate Blount disease or metabolic bone disease',
  ],
  relatedMilestones: ['standing', 'walking'],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bowlegs and Knock-Knees. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Bowlegs-and-Knock-Knees.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Physiologic Bowing in Children. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470373/',
    },
  ],
  relatedConcernSlugs: ['bowlegged-baby', 'newborn-curled-toes-overlapping', 'newborn-clicky-hips'],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-bruises-easily',
  title: 'Baby Bruises Easily - When to Worry',
  category: 'medical',
  searchTerms: [
    'baby bruises easily',
    'toddler bruises a lot',
    'baby bruising for no reason',
    'when to worry about baby bruises',
    'too many bruises on toddler',
    'baby bruises on legs',
    'toddler covered in bruises normal',
    'baby bruise without hitting anything',
    'abnormal bruising in children',
    'toddler bruises on shins',
    'baby bruise that won\'t go away',
    'unexplained bruising in toddler',
  ],
  quickAnswer:
    'Bruising in babies and toddlers is extremely common once they become mobile. Shins, forehead, knees, and elbows are the most typical locations, matching where active children bump into things. Bruising in these "bony prominence" areas is expected and normal. Bruising becomes more concerning when it appears in unusual locations (torso, back, cheeks, neck, buttocks), in a baby who is not yet mobile, or when bruises appear without any known injury. In these cases, your pediatrician may recommend bloodwork to check for bleeding disorders.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Bruising in babies who are not yet mobile is unusual and should always be discussed with your pediatrician. Pre-mobile babies rarely bruise because they are not bumping into things. Any bruise on a baby who cannot roll, crawl, or pull up needs an explanation. Common benign causes include birth-related bruising (which should resolve in the first 1-2 weeks) and bruising at vaccination or blood draw sites. Unexplained bruises in this age group warrant a medical evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start crawling, pulling up, and cruising, you will begin to see bruises on their legs, knees, forehead, and arms. This is completely normal. The pattern should match what you would expect from a mobile baby bumping into furniture, falling while cruising, or toppling while learning to sit. Bruises should follow the normal healing timeline - red/purple initially, then blue/green, then yellow/brown over 1-2 weeks.',
    },
    {
      ageRange: '12-24 months',
      context:
        'New walkers and early toddlers are constantly covered in bruises. Their center of gravity is high (large heads), they are unsteady, and they have little awareness of their body in space. Shins and foreheads take the brunt of it. This is a rite of passage for toddlerhood. As long as bruises are on the front of the body in expected bumping locations, healing normally, and your child is otherwise well, this is completely normal.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Active toddlers continue to bruise frequently. By this age, your child may be able to tell you what happened. If bruises appear that your child cannot explain, in unusual locations, or if they are unusually large or frequent, mention it to your pediatrician. A simple blood test (CBC and coagulation studies) can screen for bleeding disorders like von Willebrand disease or ITP (immune thrombocytopenic purpura).',
    },
  ],
  whenNormal: [
    'Bruises appear on the shins, knees, forehead, elbows, and other bony prominences in a mobile child',
    'You can connect the bruise to a specific fall, bump, or activity',
    'Bruises follow normal healing progression - red to purple to green/yellow to brown over 1-2 weeks',
    'Your child has no other symptoms like excessive bleeding from cuts, frequent nosebleeds, or blood in stool',
  ],
  whenToMention: [
    'Bruising seems excessive compared to other children the same age, even accounting for activity level',
    'Your child bleeds longer than expected from minor cuts, has frequent or prolonged nosebleeds, or has blood in stool or urine',
    'There is a family history of bleeding disorders or easy bruising',
    'Your child has petechiae (tiny red dots under the skin that don\'t blanch with pressure) alongside bruising',
  ],
  whenToActNow: [
    'Your pre-mobile baby (under 6 months) has unexplained bruises',
    'Bruises appear in unusual locations like the torso, back, neck, cheeks, buttocks, or behind the ears without explanation',
    'Bruising is accompanied by petechiae, pale skin, fatigue, or fever, which could indicate a blood disorder',
  ],
  relatedMilestones: [
    'gross-motor-crawling',
    'gross-motor-walking',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-fell-off-bed', 'baby-hit-head-when-to-worry', 'petechiae-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bruises in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Bruises.aspx',
    },
    {
      org: 'AAP',
      citation:
        'Pierce MC, et al. Bruising in Infants: Those With a Bruise May Be Abused. Pediatric Emergency Care. 2017.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28141766/',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Von Willebrand Disease.',
      url: 'https://www.nhlbi.nih.gov/health/von-willebrand-disease',
    },
  ],
};

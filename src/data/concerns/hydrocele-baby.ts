import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hydrocele-baby',
  title: 'My Baby Has a Swollen Scrotum',
  category: 'medical',
  searchTerms: [
    'baby hydrocele',
    'baby swollen scrotum',
    'baby testicle swollen',
    'hydrocele newborn',
    'baby scrotum fluid',
    'hydrocele surgery baby',
    'baby scrotum large',
    'swollen testicles baby',
    'hydrocele vs hernia',
    'baby scrotum one side bigger',
  ],
  quickAnswer:
    'A hydrocele is a collection of fluid around the testicle that causes the scrotum to swell. It\'s common in newborn boys and usually harmless. Most hydroceles disappear on their own by age 1. Your pediatrician will examine your baby to distinguish it from an inguinal hernia, which requires surgery. If the hydrocele persists or is very large, surgery may be recommended.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Hydroceles are very common in newborn boys. You may notice one or both sides of the scrotum look swollen or enlarged. The swelling may be soft and fluctuate in size. Your pediatrician can confirm a hydrocele by examining your baby and sometimes shining a light through the scrotum (transillumination). Most hydroceles in newborns resolve on their own and just need monitoring.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Many hydroceles begin to shrink during the first 6 months. Your pediatrician will continue to check the size at well visits. If the swelling seems to come and go or gets larger when your baby cries, it may be a communicating hydrocele (connected to the abdomen) or possibly an inguinal hernia, which requires surgical repair.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most hydroceles resolve by 12 months. If your baby\'s hydrocele is still present at this age but not causing problems, your doctor may continue to monitor it. Hydroceles that persist beyond 12-18 months or are very large may be repaired surgically, though this is elective and can often wait until your child is older.',
    },
    {
      ageRange: '12 months+',
      context:
        'If a hydrocele persists past 12-18 months or suddenly develops in a toddler, your pediatrician may refer you to a pediatric urologist or surgeon to discuss surgical repair. The procedure is straightforward and has excellent outcomes. Recovery is usually quick, and recurrence is rare.',
    },
  ],
  whenNormal: [
    'Your baby has a soft scrotal swelling that has been present since birth',
    'Your pediatrician examined your baby and confirmed it\'s a hydrocele',
    'The swelling is not painful and your baby is comfortable',
    'The hydrocele is stable or slowly decreasing in size',
    'Your baby has no other symptoms like redness, firmness, or vomiting',
  ],
  whenToMention: [
    'You\'ve noticed swelling in your baby\'s scrotum and want it evaluated',
    'The hydrocele seems to be getting larger instead of smaller',
    'The swelling comes and goes or gets bigger when your baby cries (may indicate communicating hydrocele or hernia)',
    'You\'re unsure whether it\'s a hydrocele or another condition',
  ],
  whenToActNow: [
    'The scrotum becomes firm, hard, or very painful',
    'The scrotum turns red, purple, or darkly discolored',
    'Your baby is vomiting or seems in severe pain',
    'The swelling suddenly increases dramatically',
    'Your baby has a fever along with scrotal swelling',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hydrocele. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/genitourinary-tract/Pages/Hydrocele.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Urological Association. Hydroceles and Inguinal Hernias. Urology Care Foundation, 2023.',
      url: 'https://www.urologyhealth.org/urology-a-z/h/hydroceles',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Scrotal and Testicular Problems. Pediatrics in Review, 2018.',
      url: 'https://publications.aap.org/pediatricsinreview/article/39/10/503/34615/Common-Scrotal-and-Testicular-Problems',
    },
  ],
};

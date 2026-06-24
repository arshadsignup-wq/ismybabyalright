import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-latch-difficulty-ongoing',
  title: 'Ongoing Breastfeeding Latch Difficulties',
  category: 'feeding',
  searchTerms: [
    'baby won\'t latch',
    'breastfeeding latch problems',
    'baby can\'t latch properly',
    'shallow latch breastfeeding',
    'baby keeps slipping off breast',
    'latch issues breastfeeding',
    'baby struggling to latch',
    'painful latch breastfeeding',
    'breastfeeding latch getting worse',
    'how to fix breastfeeding latch',
    'baby refusing breast latch',
  ],
  quickAnswer:
    'Persistent latch difficulties are one of the most common breastfeeding challenges and can have multiple causes, including positioning issues, tongue tie, breast engorgement, flat or inverted nipples, or oral anatomy differences. A shallow latch causes nipple pain for the mother and inefficient milk transfer for the baby. Working with a lactation consultant (IBCLC) can help identify the specific cause and develop targeted solutions.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'The first two weeks are a learning period for both mother and baby. Many latch difficulties during this time improve with positioning adjustments and practice. Engorgement when milk comes in (days 3-5) can temporarily make latching harder because the areola becomes taut. Reverse pressure softening or hand expressing briefly before feeding can help. If your baby cannot latch at all, or every feed is painful, seek help from a lactation consultant promptly, as early intervention is most effective.',
    },
    {
      ageRange: '2-6 weeks',
      context:
        'If latch difficulties persist beyond the first two weeks, there may be an underlying cause that needs evaluation. Tongue tie (ankyloglossia) is a common contributor that restricts tongue movement needed for effective latching. High or bubble palate, torticollis causing head-turning preferences, and breast shape can all play a role. An IBCLC can assess all these factors and may recommend a frenotomy referral if tongue tie is identified.',
    },
    {
      ageRange: '6 weeks - 3 months',
      context:
        'By this age, most mother-baby pairs have found their rhythm. If latch difficulties are ongoing, continued support from a lactation consultant is important. Some babies develop a bottle preference if supplementation was introduced, making it harder to return to a deep breast latch. Paced bottle feeding and breast-friendly bottles can help. Some mothers find nipple shields helpful as a temporary tool while working on latch improvement.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Older babies may experience new latch challenges during teething, when distracted by their environment, or during nursing strikes. These are usually temporary. Some babies develop a "lazy latch" as they grow, slipping into a shallower position. Gently breaking the seal and relatching when you notice a poor latch can help maintain good habits. If latch was never fully resolved, it is still worth consulting a lactation professional.',
    },
  ],
  whenNormal: [
    'Your baby has occasional latch struggles but is generally feeding well and gaining weight.',
    'It takes a few attempts to get a good latch, especially when your baby is very hungry or sleepy.',
    'You experienced some initial soreness that improved as latch technique improved over the first week or two.',
  ],
  whenToMention: [
    'Every feeding is painful despite trying different positions and latch techniques.',
    'Your baby is not gaining weight adequately or feeds seem very short or very long (under 5 minutes or over 45 minutes consistently).',
    'You notice clicking sounds during feeding, your baby frequently breaks suction, or your nipples are misshapen after feeds.',
  ],
  whenToActNow: [
    'Your baby cannot latch at all and is not getting adequate nutrition by any method.',
    'Your nipples are cracked, bleeding, or showing signs of infection (redness, warmth, discharge).',
    'Your baby is showing signs of dehydration: fewer than 6 wet diapers per day, dark urine, dry mouth, or excessive sleepiness.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['breastfeeding-latch-pain', 'tongue-tie', 'breastfeeding-nipple-pain-not-improving', 'bottle-preference'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Breastfeeding Challenges. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Common-Breastfeeding-Challenges.aspx',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Breastfeeding Challenges. ACOG FAQ.',
      url: 'https://www.acog.org/womens-health/faqs/breastfeeding-your-baby',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Interventions for Breastfeeding Challenges. Cochrane Database of Systematic Reviews.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7271234/',
    },
  ],
};

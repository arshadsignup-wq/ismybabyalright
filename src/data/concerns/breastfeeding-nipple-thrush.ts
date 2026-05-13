import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-nipple-thrush',
  title: 'Nipple Thrush While Breastfeeding',
  category: 'feeding',
  searchTerms: [
    'nipple thrush breastfeeding',
    'yeast infection nipple',
    'candida breastfeeding',
    'burning nipple pain breastfeeding',
    'white patches baby mouth breastfeeding',
    'thrush breast pain',
    'shooting pain breast after feeding',
    'pink shiny nipples breastfeeding',
  ],
  quickAnswer:
    'Nipple thrush is a yeast infection caused by Candida that can affect the nipple and areola during breastfeeding, often occurring alongside oral thrush in the baby. It typically causes intense burning or shooting pain in the breast during and after feeds, and the nipples may appear pink, shiny, or flaky. Both parent and baby usually need to be treated simultaneously to prevent passing the infection back and forth.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Thrush is most common in the early weeks and months of breastfeeding, particularly after antibiotic use by either parent or baby. Newborns have immature immune systems that make them susceptible to yeast overgrowth. If your baby has white patches in their mouth that do not wipe away easily and you are experiencing new, intense nipple pain, thrush is a likely cause. Early treatment is important to prevent the infection from worsening or disrupting your breastfeeding relationship.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Thrush can develop at any time during breastfeeding but may occur after a course of antibiotics for either you or your baby. At this age, symptoms in the baby may include fussiness during feeds, pulling off the breast, or a diaper rash that does not respond to typical creams. If you are experiencing deep, shooting breast pain that continues between feeds, this may indicate the yeast has moved into the milk ducts and requires more aggressive treatment.',
    },
    {
      ageRange: '6-12 months',
      context:
        'While less common at this stage, thrush can still occur, especially after illness or antibiotic treatment. The introduction of solids can also change the oral environment. If you notice a recurrence of nipple pain along with white patches in your baby\'s mouth, contact your healthcare provider. Sterilizing pacifiers, bottle nipples, and teething toys is especially important at this age to prevent reinfection.',
    },
  ],
  whenNormal: [
    'Mild nipple tenderness in the first week or two of breastfeeding as you and your baby learn to latch, which is different from the burning pain of thrush',
    'Brief, mild discomfort at the start of a feed that resolves quickly once your baby is latched, which is typically latch-related rather than thrush',
    'White residue in your baby\'s mouth that wipes away easily with a damp cloth, which is likely milk residue rather than thrush',
  ],
  whenToMention: [
    'You have new burning, stinging, or shooting pain in your nipples or breasts during or after feeding that did not exist before',
    'Your nipples appear unusually pink, shiny, flaky, or have tiny blisters, and the pain is not improving with latch adjustments',
    'Your baby has white patches in their mouth that do not wipe off, is fussy during feeds, or has a persistent diaper rash',
    'You have been treated for thrush but symptoms keep returning, suggesting you may need a different treatment approach',
  ],
  whenToActNow: [
    'You have a fever, red streaks on the breast, or a warm and painful lump, which may indicate a secondary bacterial infection like mastitis rather than thrush alone',
    'You are in so much pain that you are unable to breastfeed and your baby is not getting adequate nutrition from other sources',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Thrush and Other Candida Infections. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Thrush-and-Other-Candida-Infections.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Candidiasis.',
      url: 'https://www.cdc.gov/fungal/diseases/candidiasis/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. National Library of Medicine. Candidiasis (Thrush) in Breastfeeding.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK557764/',
    },
  ],
};

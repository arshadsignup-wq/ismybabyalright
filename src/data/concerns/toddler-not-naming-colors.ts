import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-not-naming-colors',
  title: 'Toddler Not Naming Colors',
  category: 'communication',
  searchTerms: [
    'toddler not naming colors',
    'toddler can\'t identify colors',
    'when should toddler know colors',
    '2 year old doesn\'t know colors',
    '3 year old can\'t name colors',
    'toddler always says wrong color',
    'toddler color blind',
    'when do kids learn colors',
    'toddler calls everything blue',
    'child not learning colors',
    'toddler confused about colors',
  ],
  quickAnswer:
    'Learning to name colors is a surprisingly complex skill that most children master between ages 3 and 4. Many 2-year-olds can sort objects by color before they can reliably name them. If your toddler calls everything "blue" or gets colors wrong most of the time, that\'s completely normal at age 2 to 3. Consistently naming 4 or more colors correctly is expected by around age 4. Color-naming isn\'t a major language milestone - so try not to worry if it takes a while.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'At this age, most toddlers don\'t know color names yet, and that\'s perfectly fine. They may start to notice that objects have different colors, but naming them is a more advanced skill. Some early talkers might learn one or two color words, but this is not expected. Focus on other language milestones like vocabulary growth and word combining.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Between 2 and 3, children often begin attempting color names. They may learn one color first and call everything that color for a while (the famous "everything is blue" phase). They may also sort objects by color correctly even though they can\'t name the colors - this shows they understand the concept. Matching and sorting colors usually comes before naming them.',
    },
    {
      ageRange: '3-4 years',
      context:
        'By age 3 to 4, most children can correctly name at least 4 basic colors (often red, blue, yellow, and green). Some may know more. If your child is approaching 4 and still can\'t name any colors, but their other language skills are on track, it may just take more practice. However, if they also have difficulty with other concept words (numbers, shapes, sizes), mention it to your pediatrician.',
    },
    {
      ageRange: '4+ years',
      context:
        'By age 4 to 5, children should be able to name most basic colors and may know some less common ones. If your child is 4+ and truly cannot distinguish or name any colors despite practice, your pediatrician may screen for color vision deficiency (color blindness), which affects about 8% of boys and 0.5% of girls. Color vision deficiency is not a language issue - it\'s a vision difference that\'s easily identified.',
    },
  ],
  whenNormal: [
    'Your 2-year-old calls everything one color - they understand the concept of "color" but haven\'t learned the specific labels yet.',
    'Your 2-3-year-old can match and sort objects by color but can\'t name the colors verbally - understanding comes before naming.',
    'Your child knows some colors but consistently gets one or two confused (like mixing up blue and green) - closely related colors are harder to distinguish and name.',
    'Your child names colors correctly sometimes and incorrectly other times - inconsistency is normal during the learning process.',
    'Your child is under 3 and doesn\'t know color names - this is expected and not a red flag.',
  ],
  whenToMention: [
    'Your child is over 4 and can\'t correctly name any colors, despite regular exposure and practice.',
    'Your child can\'t sort or match objects by color by age 3 - this suggests they may not perceive color differences.',
    'Your child has difficulty learning other concept words too (numbers, big/small, shapes), not just colors - this may suggest a broader language learning concern.',
  ],
  whenToActNow: [
    'Your child is school-age and cannot distinguish colors at all - this warrants a vision screening for color vision deficiency, which is a simple test your pediatrician or eye doctor can perform.',
  ],
  relatedMilestones: [
    'language-vocabulary-growth',
    'language-sentence-use',
    'social-emotional-communicates-needs',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Language Development: 3 to 4 Year Olds',
      url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Language-Development-3-to-4-Year-Olds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By Four Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4yr.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Speech and Language Developmental Milestones',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};

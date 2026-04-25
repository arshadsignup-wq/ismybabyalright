import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-grinding-teeth',
  title: 'My Baby Grinds Their Teeth',
  category: 'behavior',
  searchTerms: [
    'baby grinding teeth',
    'toddler teeth grinding',
    'baby bruxism',
    'why does my baby grind teeth',
    'baby grinding teeth at night',
    'toddler grinding teeth while awake',
    'is teeth grinding bad for babies',
    'how to stop baby from grinding teeth',
    'baby grinding teeth damage',
    'newborn grinding gums',
  ],
  quickAnswer:
    'Teeth grinding (bruxism) is surprisingly common in babies and toddlers, affecting up to 30% of young children. Most children grind their teeth as they explore their new teeth or self-soothe, and the vast majority outgrow it completely by age 6 with no lasting damage to their teeth.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies may begin grinding their teeth (or gums) as soon as their first teeth come in, often as a way to explore the new sensations in their mouth. It can also happen during teething as a form of self-soothing. The grinding might occur while awake or asleep and often sounds alarming, but baby teeth are designed to withstand this and rarely experience damage.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Teeth grinding often peaks during this stage as more teeth come in and your toddler experiments with how they fit together. Your child might grind while concentrating, falling asleep, or when frustrated. This is typically a developmental phase. The grinding may be louder and more noticeable than it was when they had fewer teeth, but it remains harmless in most cases.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Many toddlers continue grinding their teeth, especially at night, as a self-soothing behavior or response to stress (like a new sibling or starting daycare). Daytime grinding may start to decrease as language skills improve and they find other ways to manage emotions. Unless your child complains of jaw pain or headaches, treatment is rarely needed.',
    },
    {
      ageRange: '3-6 years',
      context:
        'Most children naturally outgrow teeth grinding by age 6, especially once their permanent teeth begin to come in. If grinding persists, is very loud, or your child is experiencing jaw pain or worn teeth, your dentist may recommend a nightguard. However, nightguards are rarely used in children under 5 because they can be a choking hazard.',
    },
  ],
  whenNormal: [
    'Your child grinds their teeth occasionally, especially when teething, concentrating, or falling asleep',
    'The grinding happens in phases  -  more intense for a few weeks, then disappears for a while',
    'Your child has no pain, no complaints of jaw soreness, and eats normally',
    'You notice the grinding but your dentist sees no significant wear on the teeth',
    'Your child is between 6 months and 6 years old',
  ],
  whenToMention: [
    'The grinding is so loud or frequent that it disrupts your child\'s sleep or yours',
    'Your child complains of jaw pain, headaches, or tooth sensitivity',
    'Your dentist notices significant wear on your child\'s teeth',
    'Grinding continues past age 6 or intensifies rather than decreases over time',
  ],
  whenToActNow: [
    'Your child is in clear pain when chewing or opening their mouth',
    'You notice a sudden change in how your child\'s teeth fit together or in their bite',
    'Grinding is accompanied by other concerning symptoms like disrupted sleep, night terrors, or behavioral changes that could indicate a sleep disorder',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Teeth Grinding (Bruxism). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/teeth/Pages/Teeth-Grinding.aspx',
    },
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Policy on Bruxism in Children.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/bruxism-in-children/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Bruxism in Children. Journal of Dentistry for Children. 2010;77(3):148-152.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/21305593/',
    },
  ],
};

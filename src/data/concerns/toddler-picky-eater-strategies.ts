import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-picky-eater-strategies',
  title: 'Strategies for My Picky Eater Toddler',
  category: 'feeding',
  searchTerms: [
    'picky eater toddler',
    'toddler won\'t eat anything',
    'toddler picky eating strategies',
    'toddler refuses vegetables',
    'toddler only eats certain foods',
    'how to get toddler to eat new foods',
    'toddler food refusal',
    'toddler selective eating',
    'toddler won\'t try new foods',
    'toddler eating only carbs',
    'toddler mealtime battles',
  ],
  quickAnswer:
    'Picky eating is one of the most common and frustrating aspects of toddlerhood, affecting up to 50% of children between ages 2-5. It is a normal developmental phase driven by neophobia (fear of new foods), a desire for control, and a naturally slowing growth rate that reduces appetite. Research shows that most picky toddlers get adequate nutrition over the course of a week, even when individual meals look concerning. Pressure, bribery, and forcing bites typically backfire and can worsen the problem.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Many parents are surprised when their formerly adventurous eater suddenly becomes selective. This is normal — growth rate slows significantly after the first year, and appetite naturally decreases. Toddlers also begin asserting independence through food choices. Continue offering a variety of foods without pressure. The "division of responsibility" approach (parents decide what, when, and where; the child decides whether and how much to eat) is supported by extensive research. Trust your toddler\'s appetite signals.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Food neophobia (fear of new foods) typically peaks around 18-24 months. Your toddler may refuse foods they previously enjoyed and reject anything unfamiliar. Research shows it can take 10-15 exposures to a new food before a child accepts it — and exposure means seeing it on their plate, not necessarily eating it. Avoid making separate "kid meals" if possible; serve the same foods the family is eating in toddler-friendly forms. Eating together as a family and modeling enjoyment of foods is one of the most effective strategies.',
    },
    {
      ageRange: '2-4 years',
      context:
        'Picky eating often continues through the preschool years but gradually improves as children mature. Strategies that help include involving your toddler in food preparation, offering new foods alongside familiar favorites, keeping mealtimes low-pressure and short (15-20 minutes), and avoiding using dessert as a reward for eating vegetables (which teaches children that vegetables are something to be endured). If your child eats fewer than 20 foods total and is dropping foods from their repertoire rather than adding new ones, consider a referral to a pediatric feeding therapist.',
    },
  ],
  whenNormal: [
    'Your toddler eats well at some meals and poorly at others — this variability is normal',
    'Your toddler prefers familiar foods and is suspicious of new ones',
    'Your toddler goes through "food jags" where they want the same food every day for a period',
    'Your toddler is growing along their growth curve despite seemingly eating very little',
  ],
  whenToMention: [
    'Your toddler eats fewer than 20 total foods and the number is decreasing rather than increasing',
    'Your toddler has not accepted a new food in months despite regular exposure',
    'Your toddler\'s weight is falling off their growth curve or they seem to lack energy',
  ],
  whenToActNow: [
    'Your toddler is losing weight or showing signs of nutritional deficiency such as extreme fatigue, pallor, or hair loss',
    'Your toddler refuses all food and drink for more than 24 hours',
    'Your toddler gags or vomits at the sight or smell of most foods, which may indicate an oral sensory or anxiety issue',
  ],
  relatedMilestones: [
    'feeding-self-feeding',
    'social-emotional-independence',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-food-texture-sensitivity',
    'grazing-all-day-toddler',
    'throwing-food',
    'toddler-multivitamin-necessity',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Picky Eaters. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx',
    },
    {
      org: 'Ellyn Satter Institute',
      citation:
        'Ellyn Satter Institute. Division of Responsibility in Feeding.',
      url: 'https://www.ellynsatterinstitute.org/how-to-feed/the-division-of-responsibility-in-feeding/',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Picky Eating During Childhood: A Longitudinal Study. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4530960/',
    },
  ],
};

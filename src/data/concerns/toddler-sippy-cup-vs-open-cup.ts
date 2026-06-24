import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-sippy-cup-vs-open-cup',
  title: 'Sippy Cup vs. Open Cup: What\'s Best for My Toddler?',
  category: 'feeding',
  searchTerms: [
    'sippy cup vs open cup toddler',
    'when to switch from sippy cup',
    'open cup for toddler age',
    'toddler cup transition',
    'sippy cup bad for teeth',
    'best cup for toddler',
    'toddler drinking from open cup',
    'when to stop sippy cup',
    'toddler cup recommendations',
    'straw cup vs sippy cup',
  ],
  quickAnswer:
    'The AAP and most pediatric dentists recommend transitioning to an open cup (or straw cup) by age 12-15 months and weaning off sippy cups entirely by age 2. While sippy cups are convenient, prolonged use can contribute to dental problems, speech development delays, and decreased oral motor skill development. Straw cups are a better transitional option than traditional spout sippy cups because they promote a more mature swallowing pattern.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'You can begin introducing an open cup as early as 6 months when your baby starts solids. Start with a small amount of water in a tiny open cup and help your baby hold it. Expect spilling — this is practice. Many speech-language pathologists recommend starting with a straw cup rather than a spouted sippy cup because straws encourage a more mature swallowing pattern and better oral motor development. If you use a sippy cup, treat it as a transitional tool, not a long-term solution.',
    },
    {
      ageRange: '12-18 months',
      context:
        'By age 12-15 months, your toddler should be transitioning away from bottles and moving toward cups. The AAP recommends weaning from bottles entirely by 15-18 months. Straw cups and open cups are preferred over traditional spout sippy cups. When using an open cup, expect messes — your toddler will spill. Offer small amounts of liquid at a time and practice during meals. Weighted straw cups are a good option for on-the-go. The key is supervised practice, not perfection.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'By age 2, your toddler should be drinking primarily from an open cup or straw cup. Prolonged sippy cup use (especially with juice or milk) can pool sugary liquids around teeth and contribute to cavities. Sippy cups can also act as a comfort object similar to a bottle, leading to excessive milk or juice intake. If your toddler is still heavily reliant on a sippy cup, try gradually introducing the open cup at meals while allowing the sippy cup only for water on the go.',
    },
  ],
  whenNormal: [
    'Your toddler spills frequently when using an open cup — this improves with practice throughout toddlerhood',
    'Your toddler prefers a straw cup over an open cup — straw cups are an excellent option',
    'Your toddler can manage a cup at meals but still uses a sippy cup for water during play',
    'Your toddler went through a regression and suddenly refuses the open cup after previously using it — this is common during developmental leaps',
  ],
  whenToMention: [
    'Your toddler is over 18 months and cannot drink from any cup type besides a bottle',
    'Your toddler is still using a bottle for most liquids beyond 18 months',
    'You are concerned about your toddler\'s dental health related to cup or bottle use',
  ],
  whenToActNow: [
    'Your toddler coughs, chokes, or has liquid coming from their nose consistently when drinking from any cup, which could indicate a swallowing disorder',
    'Your toddler refuses all liquids and shows signs of dehydration (dry mouth, no tears, reduced wet diapers)',
    'Your toddler has visible tooth decay that may be related to prolonged bottle or sippy cup use with milk or juice',
  ],
  relatedMilestones: [
    'feeding-cup-drinking',
    'oral-motor-skills',
    'fine-motor-manipulation',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-straw-cup-transition',
    'toddler-milk-consumption-how-much',
    'bottle-preference',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Recommended Drinks for Children Age 5 and Younger. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Discontinuing the Bottle. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Discontinuing-the-Bottle.aspx',
    },
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Policy on Dietary Recommendations for Infants, Children, and Adolescents.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/dietary-recommendations-for-infants-children-and-adolescents/',
    },
  ],
};

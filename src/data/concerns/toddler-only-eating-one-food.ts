import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-only-eating-one-food',
  title: 'My Toddler Only Wants to Eat One Food',
  category: 'feeding',
  searchTerms: [
    'toddler only eats one food',
    'toddler food jag',
    'toddler obsessed with one food',
    'toddler only wants pasta',
    'toddler only eats chicken nuggets',
    'toddler won\'t eat anything else',
    'toddler stuck on one food',
    'extreme picky eating toddler',
    'toddler limited diet',
    'toddler refuses everything but one food',
  ],
  quickAnswer:
    'Food jags, where a toddler wants to eat the same food at every meal, are extremely common and usually temporary. Most toddlers cycle through these phases, fixating on one food for days or weeks before moving on. As long as you continue to offer a variety of foods alongside their preferred item, most toddlers naturally broaden their diet over time.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'As babies become toddlers, they often start asserting preferences, and food is one of the first areas where they exercise control. A food jag at this age is a normal expression of growing independence. Continue offering their preferred food alongside one or two other options at each meal. Avoid making separate meals or becoming a short-order cook. Seeing the same foods repeatedly on their plate, without pressure to eat them, helps build familiarity that eventually leads to acceptance.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is a peak age for food jags. Your toddler may demand the same food for breakfast, lunch, and dinner for a week and then suddenly refuse it entirely. This is normal toddler behavior. Keep serving a balanced plate even if they only eat one item. Research shows it can take 15 to 30 exposures to a food before a toddler willingly eats it. Staying calm and avoiding food battles is the most effective long-term strategy.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Most toddlers begin expanding their accepted foods as they mature, especially if mealtimes have been low pressure. If your child is still eating only one or two foods by age 2 to 3 and their diet is extremely limited, consider whether sensory sensitivities might be involved. Some children have difficulty with certain textures, temperatures, or colors of food, which goes beyond typical pickiness. A pediatric feeding therapist can help distinguish between normal picky eating and a more significant feeding difficulty.',
    },
  ],
  whenNormal: [
    'Your toddler fixates on a food for a few days or weeks and then moves on to something else',
    'Your toddler eats at least a handful of different foods, even if they strongly prefer one',
    'Your toddler is growing along their growth curve and has normal energy levels',
    'Your toddler accepts their preferred food in different forms, for example pasta with and without sauce',
  ],
  whenToMention: [
    'Your toddler has been eating only one or two foods for more than a month with no sign of expanding',
    'Your toddler\'s limited diet is missing entire food groups, raising concerns about nutritional deficiency',
    'Your toddler becomes extremely distressed or gags when unfamiliar foods are placed on their plate',
  ],
  whenToActNow: [
    'Your toddler is losing weight or showing signs of nutritional deficiency such as extreme pallor, hair loss, or lethargy',
    'Your toddler\'s food restriction has become so severe that they eat fewer than 5 foods total',
  ],
  relatedMilestones: [
    'feeding',
    'fine-motor',
  ],
  showSelfReferral: false,
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
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Feeding and Nutrition: Your Two-Year-Old. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Feeding-and-Nutrition-Your-Two-Year-Old.aspx',
    },
  ],
};

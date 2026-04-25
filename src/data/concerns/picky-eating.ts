import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'picky-eating',
  title: 'Toddler Picky Eating',
  category: 'feeding',
  searchTerms: [
    'toddler picky eater',
    'toddler won\'t eat vegetables',
    'toddler only eats one food',
    'picky eating toddler',
    'my toddler won\'t eat anything',
    'toddler refuses new foods',
    'toddler only wants snacks',
    'how to get toddler to eat',
    'toddler food jag',
    'is picky eating normal',
    'toddler eating the same food every day',
  ],
  quickAnswer:
    'Picky eating is one of the most common and normal behaviors in toddlers, peaking between ages 2 and 3. It is a developmentally appropriate way for toddlers to assert independence and learn about their world. Most picky eaters grow out of it and end up with a varied diet by school age, especially when parents continue to offer foods without pressure.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Growth naturally slows down after the first year, so toddlers genuinely need less food than parents expect. It is very common for a toddler who ate everything as a baby to start becoming selective. This is a normal developmental shift tied to growing independence, not a sign that something is wrong.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Food neophobia, the fear of new foods, often emerges strongly around this age. Your toddler may suddenly reject foods they previously enjoyed. This is a deeply rooted evolutionary instinct. Continue offering rejected foods alongside accepted ones without making it a battle. It can take 15 to 20 exposures before a child accepts a new food.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is typically the peak of picky eating. Toddlers may go through "food jags" where they only want one food for days or weeks. As long as they are growing well and eating from at least a few food groups over the course of a week, their nutrition is likely adequate. Multivitamins can provide peace of mind if recommended by your pediatrician.',
    },
    {
      ageRange: '3+ years',
      context:
        'Most children begin to naturally expand their food repertoire as they mature and gain more social eating experiences like preschool meals. If picky eating is becoming more extreme rather than improving, or if your child is eating fewer than 20 foods total, a feeding therapist can offer strategies that help.',
    },
  ],
  whenNormal: [
    'Your toddler eats well at some meals and barely touches food at others',
    'Your toddler goes through phases of loving and then rejecting the same food',
    'Your toddler prefers bland, familiar foods over new or strongly flavored ones',
    'Your toddler is growing along their growth curve and has good energy',
    'Your toddler eats better at daycare or with other children than at home',
  ],
  whenToMention: [
    'Your toddler eats fewer than 20 different foods total and the list is shrinking',
    'Your toddler consistently refuses entire food groups such as all proteins or all fruits',
    'Mealtimes are extremely stressful with crying, gagging, or tantrums at most meals',
    'Your toddler has not gained weight in several months or is falling off their growth curve',
  ],
  whenToActNow: [
    'Your child is losing weight or showing signs of nutritional deficiency such as extreme fatigue, hair loss, or frequent illness',
    'Your child has a severely restricted diet of only 5 to 10 foods and is becoming more restrictive',
    'Your child has difficulty chewing or swallowing and avoids entire textures such as anything that is not pureed',
  ],
  relatedMilestones: [
    'feeding',
    'social-emotional',
    'independence',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Picky Eaters and What You Can Do. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Picky Eating: Tips for Parents of Toddlers.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/picky-eaters.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sample Menu for a Two-Year-Old. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Sample-One-Day-Menu-for-a-Two-Year-Old.aspx',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-not-eating-enough',
  title: 'Toddler Not Eating Enough',
  category: 'feeding',
  searchTerms: [
    'toddler not eating enough',
    'toddler barely eats',
    'toddler refusing food',
    'toddler eats so little',
    'is my toddler eating enough',
    'toddler skipping meals',
    'toddler won\'t eat dinner',
    'toddler appetite decreased',
    'picky toddler not eating',
    'toddler survives on air',
    'how much should a toddler eat',
  ],
  quickAnswer:
    'It is completely normal for toddlers to eat less than you expect. After the rapid growth of the first year, growth slows significantly, and so does appetite. Toddlers also go through phases of eating very little for days, then suddenly eating everything in sight. As long as your toddler is growing along their growth curve, has good energy, and is offered a variety of nutritious foods, they are almost certainly eating enough - even if it does not look like it to you.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'The dramatic decrease in appetite that many parents notice around the first birthday is one of the most common feeding concerns at well-child visits. This is a normal response to the slowdown in growth rate. Your toddler may eat one good meal a day and barely touch the others. Follow the Division of Responsibility: you decide what, when, and where food is offered; your toddler decides whether and how much to eat. This approach reduces mealtime battles and builds a healthy relationship with food.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is a peak period for food refusal and pickiness. Your toddler is learning autonomy and saying no to food is one way they exercise control. Offer three meals and two to three scheduled snacks per day. Keep portions small, as a toddler serving is about one-quarter of an adult serving. Avoid replacing refused meals with preferred foods or offering snacks to make up for a skipped meal, as this reinforces the pattern.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age two, most toddlers need only about 1,000 to 1,400 calories per day, which is much less than many parents imagine. Over the course of a week rather than a single day, most toddlers eat a reasonably balanced diet. Continue offering variety without pressure. Family meals where everyone eats the same food (adapted for safety) help toddlers learn by watching. Avoid using dessert as a reward for eating, as this increases the perceived value of sweets.',
    },
  ],
  whenNormal: [
    'Your toddler eats well at one meal but barely touches the next',
    'Your toddler\'s appetite fluctuates from day to day and week to week',
    'Your toddler refuses new foods but continues eating familiar favorites',
    'Your toddler eats less during teething, mild illness, or big developmental leaps',
    'Your toddler is growing along their growth curve and has good energy despite seemingly small portions',
  ],
  whenToMention: [
    'Your toddler\'s growth has plateaued or dropped off their growth curve',
    'Your toddler\'s diet is extremely limited to fewer than 10 to 15 foods and is becoming more restrictive over time',
    'Your toddler seems anxious or fearful around food or mealtimes',
  ],
  whenToActNow: [
    'Your toddler is losing weight, appears lethargic, or is showing signs of nutritional deficiency such as pale skin, brittle hair, or frequent illness',
    'Your toddler refuses all food and drink for more than 24 hours',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Feeding and Nutrition: Your One-Year-Old. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Feeding-and-Nutrition-Your-One-Year-Old.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toddler Food and Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Toddler Nutrition.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/toddler-nutrition/index.html',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-growth-slowing-eating-less',
  title: 'My Toddler Is Eating Less and Growing More Slowly',
  category: 'feeding',
  searchTerms: ['toddler eating less', 'toddler growth slowing', 'toddler appetite decreased', 'toddler not hungry anymore', 'toddler eating less than before', 'toddler growth plateau', 'toddler appetite drop 1 year', 'toddler picky suddenly', 'toddler weight gain slowing', 'toddler lost appetite'],
  quickAnswer: 'It is completely normal for toddlers to eat less and grow more slowly compared to their first year. Growth rate naturally slows after age 1, and appetite decreases accordingly. Most toddlers gain only about 3-5 pounds between their first and second birthdays compared to 12-15 pounds in the first year. This reduced appetite is called physiologic anorexia of toddlerhood and is a normal developmental phase. As long as your toddler is following their growth curve and has good energy, there is usually no cause for concern.',
  byAge: [
    { ageRange: '0-3 months', context: 'Babies in this age range typically gain about 1 oz per day and have frequent feeding. Any significant decrease in feeding at this age should be discussed with your pediatrician promptly.' },
    { ageRange: '4-6 months', context: 'Growth begins to slow slightly from the rapid first months but remains steady. Appetite should still be robust. Any sudden decrease in feeding interest at this age warrants a pediatrician discussion.' },
    { ageRange: '6-9 months', context: 'As solids are introduced, some babies may temporarily drink less milk. Total caloric intake should remain adequate. Weight gain of about 1 pound per month is typical.' },
    { ageRange: '9-12 months', context: 'Growth rate starts to slow as baby approaches toddlerhood. Some babies eat less at certain meals as they become more mobile and distracted. This is an early glimpse of the appetite changes to come.' },
    { ageRange: '12-24 months', context: 'A significant appetite decrease after the first birthday is one of the most common parental concerns, and it is almost always normal. Toddlers may eat well one day and barely eat the next. Their growth curve shifts from steep to gradual. Focus on offering nutritious foods at regular intervals and trust your toddler\'s appetite signals. Weight gain averages about 3-5 pounds per year at this stage.' },
  ],
  whenNormal: ['Toddler\'s appetite has decreased from the first year but they are still following their growth curve', 'Toddler has days of eating very little and days of eating a lot', 'Toddler is active, playful, and meeting developmental milestones despite eating less'],
  whenToMention: ['Toddler has crossed two or more percentile lines on their growth chart', 'Toddler seems to have no appetite at all for more than a week', 'Toddler is more tired or irritable than usual along with eating less', 'You are worried the reduced appetite is beyond what seems normal'],
  whenToActNow: ['Toddler is losing weight rather than just gaining slowly', 'Toddler shows signs of dehydration such as fewer wet diapers, dry mouth, or no tears', 'Toddler has additional symptoms like vomiting, diarrhea, or fever along with not eating'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-portion-sizes-guide', 'toddler-meal-planning-balanced', 'baby-hunger-fullness-cues'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Toddler Appetite Changes. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Growth Charts and Growth Patterns. CDC.gov, 2023.', url: 'https://www.cdc.gov/growthcharts/' },
  ],
};

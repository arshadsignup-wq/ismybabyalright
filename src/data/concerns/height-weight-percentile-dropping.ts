import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'height-weight-percentile-dropping',
  title: 'Height/Weight Percentile Dropping',
  category: 'physical',
  searchTerms: [
    'baby percentile dropping',
    'baby weight percentile going down',
    'baby falling off growth curve',
    'baby dropped percentiles',
    'baby height percentile decreasing',
    'growth chart percentile drop baby',
    'baby lost percentile weight',
    'toddler weight percentile dropping',
    'baby not following growth curve',
  ],
  quickAnswer:
    'A drop in growth percentiles means your baby\'s rate of growth has slowed compared to other children their age. Crossing down through one percentile channel is often normal  -  many babies shift to their genetically determined growth curve during the first 2 years. However, crossing down through two or more percentile channels warrants investigation. Common causes include constitutional growth delay (late bloomers), inadequate caloric intake, feeding difficulties, illness, and less commonly, underlying medical conditions. The pattern, pace, and context of the drop are more important than any single measurement.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Many babies adjust from their birth size (which is influenced by the intrauterine environment) to their genetically determined growth trajectory during the first few months. A baby born large who has smaller parents may naturally shift to a lower percentile. However, significant weight loss after birth (more than 7-10% of birth weight), failure to regain birth weight by 2 weeks, or a dramatic drop in percentiles in this period needs prompt evaluation. Feeding adequacy is the most important factor to assess.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is a common time for growth curve adjustments. Some babies who were growing rapidly slow down to find their natural percentile. If weight is dropping but length is maintained (or vice versa), this helps determine the cause. Weight dropping while length is stable may suggest inadequate caloric intake. Both dropping together may suggest an underlying condition or constitutional growth delay. Your pediatrician will assess feeding patterns, review the diet, and check for signs of illness.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If percentiles continue to drop at this age, especially if the drop began months ago, a more thorough evaluation is warranted. This may include blood work to check for anemia, thyroid function, celiac disease, or other conditions. Introduction of solid foods can sometimes improve weight gain if caloric intake from milk alone was insufficient. Conversely, if solids are replacing milk feeds without providing adequate calories, weight gain may slow.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers commonly have a decrease in appetite around 12-15 months as growth velocity naturally slows. A slight percentile drop at this age is often normal. However, if percentiles have been steadily dropping over many months, continued evaluation is important. Picky eating, excessive milk consumption (which can displace solid food calories and cause iron deficiency), or chronic diarrhea may contribute. Your pediatrician may refer to a pediatric gastroenterologist or endocrinologist if basic workup does not reveal a cause.',
    },
  ],
  whenNormal: [
    'Your baby shifted from a higher to a lower percentile during the first 6 months and is now following the new curve consistently  -  this is a common and normal pattern of "channeling."',
    'Weight percentile dropped slightly but your baby is active, developing normally, and eating well  -  minor fluctuations are common.',
    'Both parents are smaller and your baby is adjusting toward a lower percentile that matches the family\'s genetic pattern.',
    'Your toddler\'s weight percentile dipped slightly around 12-15 months when appetite decreased and mobility increased  -  this is developmentally normal.',
  ],
  whenToMention: [
    'Your baby has crossed down through two or more percentile channels on the growth chart.',
    'Weight is dropping but your baby seems hungry, is feeding well, yet not gaining  -  this may suggest a malabsorption issue.',
    'The percentile drop is accompanied by other symptoms such as chronic diarrhea, vomiting, excessive fatigue, or developmental delays.',
  ],
  whenToActNow: [
    'Your baby has rapid weight loss (not just slow gain) at any age  -  this needs urgent medical evaluation.',
    'Your baby has dropping percentiles combined with lethargy, dehydration signs, refusal to eat, or appears unwell  -  seek same-day medical care.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Tracking Your Baby\'s Growth. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Tracking-Your-Babys-Weight-and-Measurements.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Child Growth Standards.',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Clinical Growth Charts.',
      url: 'https://www.cdc.gov/growthcharts/clinical_charts.htm',
    },
  ],
};

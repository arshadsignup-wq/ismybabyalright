import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'supply-dips-breastfeeding',
  title: 'Breast Milk Supply Dips at 3, 6, and 9 Months',
  category: 'feeding',
  searchTerms: [
    'breast milk supply drop',
    'milk supply dip 3 months',
    'low milk supply 6 months',
    'supply drop 9 months',
    'breast milk decreasing',
    'not producing enough milk',
    'sudden drop in breast milk supply',
    'baby not getting enough milk',
  ],
  quickAnswer:
    'Perceived dips in breast milk supply around 3, 6, and 9 months are extremely common and are usually caused by your body becoming more efficient at producing milk rather than an actual decrease in supply. Your breasts may feel softer and less full, and letdowns may feel less noticeable, but these are signs of a well-regulated supply. True low supply is uncommon when feeding on demand.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the early weeks your breasts may feel very full and engorged as your body overproduces milk. Around 6-12 weeks your supply begins to regulate, meaning your body produces closer to what your baby actually needs. This transition can feel alarming because your breasts suddenly feel softer and lighter, but this is a sign that your supply is calibrating correctly, not that it is dropping.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Around 3-4 months many parents report a perceived supply dip that often coincides with a growth spurt and increased fussiness from the baby. Your baby may nurse more frequently, feed for shorter periods due to improved efficiency, and seem unsatisfied, but this is typically cluster feeding to signal your body to adjust production. Pumping output may also temporarily decrease, which does not necessarily reflect what your baby is transferring directly at the breast.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced around 6 months and your baby becomes more active, nursing patterns change again. Some parents notice another perceived dip around 6 and 9 months. Your baby may nurse for shorter sessions, seem distracted, or prefer solids over breast milk at certain meals. This is a normal transition, and breast milk remains the primary source of nutrition through the first year even as solids increase. Menstruation returning can also temporarily affect supply.',
    },
    {
      ageRange: '12-24 months',
      context:
        'If you continue breastfeeding beyond a year, supply naturally adjusts to the reduced demand as your toddler gets more calories from food. Sessions may become shorter and less frequent. This gradual decrease in supply is the normal course of extended breastfeeding and does not require intervention unless you and your child want to maintain higher production.',
    },
  ],
  whenNormal: [
    'Your breasts feel softer and less full than they did in the early weeks, but your baby is gaining weight normally',
    'Your baby has at least 6 wet diapers per day and is meeting growth milestones',
    'You notice temporary changes in supply around your menstrual period that resolve within a few days',
    'Your baby is fussier and nursing more often for a day or two, which is likely a growth spurt',
  ],
  whenToMention: [
    'Your baby is gaining weight more slowly than expected over multiple well-child visits',
    'You are consistently seeing fewer than 6 wet diapers per day',
    'You have risk factors for low supply such as thyroid issues, PCOS, or previous breast surgery and want to discuss a management plan',
    'Your mental health is significantly affected by anxiety about supply and you need reassurance or a feeding evaluation',
  ],
  whenToActNow: [
    'Your baby has fewer than 4 wet diapers in 24 hours or shows signs of dehydration such as dry mouth, no tears, or sunken fontanelle',
    'Your baby is losing weight or has not regained their birth weight by 2 weeks of age',
    'Your baby is lethargic, difficult to wake for feeds, or refusing all feeding sources',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Tell if Your Breastfed Baby is Getting Enough Milk. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/How-to-Tell-if-Baby-is-Getting-Enough-Milk.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Breastfeeding recommendations.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
  ],
};

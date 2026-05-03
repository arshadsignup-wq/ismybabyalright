import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'slow-weight-gain-breastfed-baby',
  title: 'Slow Weight Gain in Breastfed Baby',
  category: 'feeding',
  searchTerms: [
    'breastfed baby not gaining weight',
    'slow weight gain breastfed baby',
    'breastfed baby underweight',
    'is my breastfed baby gaining enough',
    'baby not gaining weight breastfeeding',
    'failure to thrive breastfeeding',
    'breastfed baby falling off growth curve',
    'low milk supply weight gain',
    'breastfed baby weight gain chart',
    'supplementing breastfed baby for weight',
    'breastfed baby skinny',
    'how much should breastfed baby gain per week',
    'breastfed baby weight loss after birth',
    'breastfed baby not regaining birth weight',
    'weighted feed breastfeeding',
    'signs baby not getting enough breast milk',
  ],
  quickAnswer:
    'Weight gain patterns vary among babies, and breastfed babies often grow differently than formula-fed babies - they tend to gain more quickly in the first three months and then more slowly from three to twelve months. This is normal and is reflected in the WHO growth charts. However, if your baby is consistently gaining less than expected or has dropped significantly on their growth curve, it is important to work with your pediatrician and possibly a lactation consultant to identify the cause and ensure your baby is getting enough milk.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'Most newborns lose 5 to 7 percent of their birth weight in the first few days and should regain it by about 10 to 14 days of age. Weight loss of more than 10 percent is a warning sign that breastfeeding may need support. Ensure your baby is latching well, nursing at least 8 to 12 times per day, and producing adequate wet and dirty diapers. If your baby has not regained birth weight by two weeks, your pediatrician should evaluate latch, milk transfer, and possibly recommend supplementation while breastfeeding is optimized.',
    },
    {
      ageRange: '2 weeks - 3 months',
      context:
        'During this period, breastfed babies typically gain about 5 to 7 ounces per week. If your baby is gaining less, evaluate feeding frequency, latch quality, and signs of milk transfer (audible swallowing, breast softening after feeds, satisfied baby after most feeds). Common causes of slow gain include a tongue tie, a shallow latch, infrequent feeding, or low milk supply. A weighted feed with a lactation consultant can measure exactly how much milk your baby transfers during a nursing session.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Weight gain naturally slows for breastfed babies around three to four months, averaging about 3 to 5 ounces per week. This is normal and does not mean your milk supply is dropping. If your baby is active, alert, meeting developmental milestones, and following their own growth curve (even if it is on the lower percentiles), they are likely getting enough. Concern arises when a baby\'s weight drops across two or more major percentile lines.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Once solid foods begin around six months, weight gain continues to slow, averaging about 2 to 4 ounces per week. Breastfed babies should still be nursing frequently alongside solids. If weight gain has been slow, your pediatrician may recommend calorie-dense first foods like avocado, nut butters, olive oil mixed into foods, full-fat yogurt, and meats. Continue breastfeeding as often as your baby wants, as breast milk remains a significant calorie source throughout the first year.',
    },
    {
      ageRange: '1-2 years',
      context:
        'After the first birthday, weight gain slows considerably for all children. If your breastfed toddler is eating solid foods, drinking well, active, and following their growth curve, slower weight gain is expected. Breastfeeding continues to provide valuable nutrition and immune support even as its proportion of your toddler\'s overall diet decreases.',
    },
  ],
  whenNormal: [
    'Your breastfed baby gains more slowly than formula-fed babies after three months but follows their own growth curve',
    'Your baby is on a lower percentile but has been consistently following that percentile since birth',
    'Your baby has plenty of wet diapers (six or more per day), is alert, and is meeting milestones',
    'Weight gain varies from week to week, with some weeks faster than others',
    'Your baby is genetically small, with smaller parents',
  ],
  whenToMention: [
    'Your baby\'s weight has crossed down two or more major percentile lines on the growth chart',
    'Your baby is gaining less than 4 ounces per week in the first three months despite frequent nursing',
    'You are concerned about your milk supply or your baby does not seem satisfied after most feeds',
  ],
  whenToActNow: [
    'Your newborn has lost more than 10 percent of birth weight or has not regained birth weight by two weeks',
    'Your baby is lethargic, has fewer than six wet diapers per day, or shows signs of dehydration such as sunken fontanelle, dry mouth, or dark urine',
  ],
  relatedConcernSlugs: [
    'failure-to-thrive-signs',
    'low-milk-supply-signs',
    'baby-not-drinking-enough-milk',
    'supplementing-with-formula',
    'foremilk-hindmilk-imbalance',
    'refusing-breast',
    'clusterfeeding-newborn',
    'pumping-output-concerns',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
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
        'Centers for Disease Control and Prevention. WHO Growth Standards Are Recommended for Use in the U.S. for Infants and Children 0 to 2 Years of Age.',
      url: 'https://www.cdc.gov/growthcharts/who_charts.htm',
    },
  ],
};

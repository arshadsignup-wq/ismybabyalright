import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'failure-to-thrive-breastfed-baby',
  title: 'Failure to Thrive in Breastfed Babies',
  category: 'feeding',
  searchTerms: [
    'failure to thrive breastfed baby',
    'breastfed baby not gaining weight',
    'breastfed baby losing weight',
    'breastfed baby underweight',
    'insufficient milk supply baby weight loss',
    'breastfed baby falling off growth curve',
    'failure to thrive breastfeeding',
    'breastfed baby poor weight gain',
  ],
  quickAnswer:
    'Failure to thrive (FTT) in breastfed babies refers to inadequate weight gain that falls significantly below expected growth patterns. While breast milk is the optimal nutrition for infants, some breastfed babies do not gain weight adequately due to insufficient milk transfer, low milk supply, poor latch, or underlying medical conditions in the baby. It is important to know that FTT is a description of a growth pattern, not a diagnosis  -  the goal is to identify and address the underlying cause while supporting continued breastfeeding whenever possible.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns typically lose up to 7-10% of their birth weight in the first few days and should regain it by 10-14 days of life. After that, expected weight gain is about 5-7 ounces per week. If your breastfed baby has not regained birth weight by 2 weeks, is not producing adequate wet and dirty diapers, or is excessively sleepy at the breast, a feeding evaluation is essential. A lactation consultant can assess latch, milk transfer, and help optimize breastfeeding. Supplementation may be needed temporarily while supply and transfer improve.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Weight gain typically slows slightly to about 4-5 ounces per week. If your breastfed baby\'s weight is dropping across percentile lines on the growth chart, your pediatrician will investigate. Common causes include inadequate milk supply (which can have many causes including hormonal issues, breast surgery history, or infrequent feeding), poor milk transfer from a tongue tie or inefficient suck, or increased caloric needs from an underlying condition. A weighted feeding (before and after nursing) can help determine how much milk your baby is getting.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced around 6 months, breast milk remains the primary source of nutrition. If your baby was growing well but begins to falter after solid food introduction, they may not be getting enough breast milk, or the solids may be filling them up without providing adequate calories. Conversely, if growth was already a concern, solid foods can help boost caloric intake. Your pediatrician and possibly a dietitian can help create a feeding plan that supports both breastfeeding and adequate nutrition.',
    },
    {
      ageRange: '12 months+',
      context:
        'If your breastfed toddler continues to have poor weight gain, a comprehensive evaluation may include checking for malabsorption conditions (like celiac disease), food allergies, or other medical causes. At this age, the diet should include a variety of solid foods along with breast milk. If breastfeeding is being continued primarily as a comfort measure and the toddler is not eating adequate solids, this may need to be addressed. Most cases of FTT are successfully managed with nutritional support and addressing the underlying cause.',
    },
  ],
  whenNormal: [
    'Your breastfed baby lost up to 7-10% of birth weight in the first few days but regained it by 2 weeks  -  this is the normal newborn pattern.',
    'Your breastfed baby is gaining weight along a consistent percentile, even if it is a lower percentile  -  steady growth is more important than the exact number.',
    'Your breastfed baby\'s weight gain slowed after 3-4 months compared to formula-fed peers  -  breastfed babies often have a different growth pattern that is captured on WHO growth charts.',
    'Your baby is lean but meeting developmental milestones, active, and alert  -  some babies are constitutionally thin.',
  ],
  whenToMention: [
    'Your breastfed newborn has not regained birth weight by 2 weeks of age.',
    'Your baby\'s weight has crossed down through two or more percentile lines on the growth chart.',
    'You are concerned about your milk supply  -  your baby seems hungry after feedings, has fewer than 6 wet diapers daily, or feeding sessions are very short or excessively long.',
  ],
  whenToActNow: [
    'Your newborn is losing more than 10% of birth weight, is lethargic, has fewer than 3 wet diapers per day, or has signs of dehydration (sunken fontanelle, no tears, dry mouth)  -  urgent medical and lactation evaluation is needed.',
    'Your baby has stopped gaining weight entirely or is losing weight at any age  -  same-day medical evaluation is warranted.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infant and Young Child Feeding: Model Chapter for Textbooks.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Growth Chart Training: Using WHO Growth Charts.',
      url: 'https://www.cdc.gov/growthcharts/who_charts.htm',
    },
  ],
};

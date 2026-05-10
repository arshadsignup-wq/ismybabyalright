import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'newborn-excessive-weight-loss',
  title: 'Newborn Excessive Weight Loss',
  category: 'feeding',
  searchTerms: [
    'newborn losing weight',
    'baby weight loss after birth',
    'newborn lost too much weight',
    'baby not gaining weight',
    'excessive weight loss newborn',
    'newborn weight loss 10 percent',
    'baby lost birth weight',
    'breastfed baby losing weight',
    'newborn dehydration weight loss',
    'baby not back to birth weight',
  ],
  quickAnswer:
    'It is normal for newborns to lose up to 7% of their birth weight in the first few days as they lose excess fluid. Breastfed babies may lose slightly more than formula-fed babies. Weight loss exceeding 10% of birth weight is considered excessive and may indicate feeding difficulties or dehydration. Most babies should regain their birth weight by 10-14 days of age.',
  byAge: [
    {
      ageRange: '0-48 hours',
      context:
        'All newborns lose weight in the first days of life. This is normal and expected. The weight loss is primarily due to fluid loss, the passage of meconium, and the fact that colostrum is produced in small volumes (which is appropriate for the newborn\'s tiny stomach). Breastfed babies typically lose 5-7% of birth weight, while formula-fed babies tend to lose slightly less. The hospital will weigh the baby regularly. If weight loss exceeds 5% in the first 48 hours, feeding should be evaluated. Ensure frequent skin-to-skin contact and encourage breastfeeding at least 8-12 times per day.',
    },
    {
      ageRange: '2-5 days',
      context:
        'This is when weight loss typically reaches its lowest point (nadir). For breastfed babies, this nadir usually occurs around day 3-4, coinciding with the transition from colostrum to mature milk. Weight loss of 7-8% is within the upper range of normal for breastfed babies. Loss exceeding 10% warrants immediate evaluation of feeding adequacy and possible supplementation. Signs of adequate intake include 3-4 wet diapers by day 3-4, transition from meconium to yellow stools, and the baby appearing content after feeds. If your milk has not yet come in by day 4-5, consult a lactation consultant.',
    },
    {
      ageRange: '5-10 days',
      context:
        'The baby should now be gaining weight, typically 20-30 grams (about 1 ounce) per day. If the baby is still losing weight or not gaining by day 5-7, this is a significant concern that requires prompt evaluation. Causes can include poor latch, low milk supply, tongue tie, or rarely a medical condition in the baby. Your pediatrician may recommend supplementation with expressed breast milk or formula, more frequent weight checks, and a formal breastfeeding assessment. Protecting the milk supply by pumping after feeds is important if supplementation is needed.',
    },
    {
      ageRange: '10 days - 4 weeks',
      context:
        'Most healthy newborns regain their birth weight by 10-14 days of age. If your baby has not regained birth weight by 2 weeks, a thorough evaluation is needed. This includes assessing feeding technique, checking for oral anatomical issues, evaluating the mother\'s milk supply, and possibly checking the baby for underlying medical conditions such as infections, metabolic problems, or cardiac issues. Weight gain of approximately 150-200 grams (5-7 ounces) per week is expected during the first month.',
    },
  ],
  whenNormal: [
    'Your baby lost 5-7% of birth weight in the first 3-4 days and is now gaining weight steadily',
    'Your baby is back to birth weight by 10-14 days of age',
    'The baby has adequate wet and dirty diapers (at least 6 wet and 3 dirty by day 5)',
    'Your baby feeds frequently (8-12 times per day), seems satisfied after feeds, and is alert during wake periods',
  ],
  whenToMention: [
    'Your baby has lost 7-10% of birth weight and your milk supply seems low or delayed',
    'Your baby has not regained birth weight by day 10-12',
    'You are unsure whether your breastfed baby is getting enough milk',
  ],
  whenToActNow: [
    'Your baby has lost more than 10% of birth weight, has fewer than 3 wet diapers per day, or shows signs of dehydration (dry mouth, sunken fontanelle, no tears, lethargy), as severe dehydration in a newborn is a medical emergency',
    'Your baby is excessively sleepy, difficult to wake for feeds, has developed a yellow skin color (jaundice), or is feeding for only a few minutes before falling asleep, as these can indicate the baby is too weak from dehydration to feed effectively',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Getting Your Baby Back to Birth Weight. American Academy of Pediatrics.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Tracking-Your-Babys-Weight-and-Measurements.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Noel-Weiss J, Woodend AK, Peterson WE, Gibb W, Groll DL. An observational study of associations among maternal fluids during parturition, neonatal output, and breastfed newborn weight loss. Int Breastfeed J. 2011;6:9.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/21756350/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Breastfeeding. Evidence for the Ten Steps to Successful Breastfeeding.',
      url: 'https://www.who.int/publications/i/item/9789241591544',
    },
  ],
};

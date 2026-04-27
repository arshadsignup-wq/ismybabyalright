import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-growing-too-slow',
  title: 'Baby Not Growing Fast Enough - Failure to Thrive',
  category: 'physical',
  searchTerms: ['baby not growing','baby failure to thrive','baby not gaining weight','baby underweight','baby small for age','baby fell off growth chart','baby weight gain slow','baby not thriving','poor weight gain baby','baby below growth curve','baby dropped percentiles','when to worry slow growth baby'],
  quickAnswer: 'Slow weight gain (falling across percentile lines on the growth chart) can have many causes, ranging from simple (not getting enough calories, growth pattern recalibration) to medical (feeding difficulties, food allergies, malabsorption, or underlying conditions). "Failure to thrive" is a clinical term for weight that falls below the 2nd percentile or drops across two major percentile lines. The most common cause is insufficient caloric intake - the baby is not eating enough, not absorbing enough, or burning too many calories. Early evaluation is important because nutrition affects brain development.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns lose up to 7-10% of birth weight in the first week and should regain it by 2 weeks. After that, expect about 1 oz per day (6-7 oz per week) of weight gain. If your newborn has not regained birth weight by 2 weeks, feeding should be evaluated. Breastfed babies with slow gain may need: more frequent feeds, better latch assessment, supplementation while increasing supply, or evaluation for tongue tie. Formula-fed babies with slow gain may need: more frequent feeds, concentrated formula, or evaluation for feeding difficulties.' },
    { ageRange: '3-6 months', context: 'Weight gain typically slows to about 4-5 oz per week. A drop of one percentile line can be normal (genetic recalibration - large newborns of small parents may settle into lower percentile). But dropping across two percentile lines is a concern. If your baby is feeding well but not gaining, your pediatrician may check for: cow\'s milk protein allergy (especially if there is blood in stool or eczema), reflux causing food refusal, or malabsorption. Frequent weight checks (every 1-2 weeks) help track the pattern.' },
    { ageRange: '6-12 months', context: 'Weight gain continues to slow naturally to about 3-4 oz per week. Active babies who are crawling and pulling up may have periods of slower gain because they are burning more calories. If your baby is small but following their own curve, eating solids with interest, and meeting milestones, they are likely fine. If weight continues to drop off their curve, your pediatrician may suggest: calorie-dense foods (avocado, nut butters, olive oil), fortified formula, or evaluation for underlying conditions.' },
    { ageRange: '12-36 months', context: 'Toddlers are notoriously picky and may eat very little some days. Weight gain slows to about 3-5 pounds per year. If your toddler is active, meeting milestones, and following their own growth curve (even if it is a low percentile), they are likely growing appropriately. Concern arises if: weight drops off their established curve, they are crossing percentile lines downward, they have very limited dietary intake, or they seem lethargic and unwell alongside poor growth.' },
  ],
  whenNormal: ['Your baby dropped from a high birth percentile to a lower one by 6 months and then tracked steadily - this is genetic recalibration','Your baby is small (low percentile) but has always tracked along the same curve and is meeting milestones','Your breastfed baby is gaining slower than formula-fed peers but is still following their curve','Your toddler\'s weight plateaued briefly during an active developmental period like learning to walk'],
  whenToMention: ['Your baby has dropped across one major percentile line on the growth chart','Your baby is gaining less than expected despite adequate feeding','Your baby is small and also seems excessively tired or not meeting developmental milestones','You are struggling to get your baby to eat enough and need feeding support'],
  whenToActNow: ['Your baby has dropped across two or more percentile lines or fallen below the 2nd percentile','Your newborn has not regained birth weight by 3 weeks','Your baby is lethargic, not feeding, and appears dehydrated alongside poor growth','Your baby is losing weight (not just gaining slowly)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-growing-too-fast','baby-not-gaining-height','toddler-nutritional-deficiency-signs'],
  sources: [
    { org: 'AAP', citation: 'Jaffe AC. Failure to Thrive: Current Clinical Concepts. Pediatrics in Review. 2011.', url: 'https://pubmed.ncbi.nlm.nih.gov/21460089/' },
    { org: 'WHO', citation: 'World Health Organization. Child Growth Standards.', url: 'https://www.who.int/tools/child-growth-standards' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Is Your Baby Growing Normally? HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Is-Your-Baby-Growing-Normally.aspx' },
  ],
};

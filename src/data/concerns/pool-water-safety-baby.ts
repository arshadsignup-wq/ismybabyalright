import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'pool-water-safety-baby',
  title: 'Pool Water Safety for Babies',
  category: 'medical',
  searchTerms: [
    'baby in swimming pool safe age',
    'chlorine pool baby skin',
    'when can baby go in pool',
    'baby swallowed pool water',
    'infant swimming lessons',
    'pool chemicals baby safe',
    'toddler pool drowning prevention',
    'baby pool water in eyes',
    'warm pool temperature for baby',
  ],
  quickAnswer:
    'Most babies can be introduced to properly maintained pools by 6 months of age with close supervision. The water should be warm (around 84-86°F/29-30°C), and time should be limited to 10-20 minutes initially to prevent hypothermia. Chlorinated pool water is generally safe but can irritate sensitive skin and eyes. The AAP recommends swim survival lessons starting at age 1 as a layer of protection. However, no amount of swimming ability eliminates the need for constant, attentive adult supervision around water.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Most pediatricians recommend waiting until at least 6 months before taking babies into pools, as their immune systems and temperature regulation are still immature. If you do introduce a very young baby to a warm pool, keep it very brief (5-10 minutes) and warm the baby immediately afterward.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some parents begin brief pool introductions. Use warm pools only, keep sessions short, and watch for signs of cold (blue lips, shivering, fussiness). Babies do not need goggles or nose plugs. Hold your baby securely at all times — flotation devices are not safety devices.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a good age to begin supervised pool play. Swim diapers are required. Gradually increase water time as your baby becomes comfortable. Parent-child swim classes can help you learn how to safely hold and move your baby in water. Never leave your baby unattended for even a second near water.',
    },
    {
      ageRange: '12 months+',
      context:
        'The AAP recommends considering formal survival swim lessons starting at age 1. These teach basic skills like floating on their back and getting to the pool edge. However, swimming lessons do not drown-proof your child — active adult supervision within arm\'s reach remains essential. Ensure home pools have four-sided fencing with self-closing, self-latching gates.',
    },
  ],
  whenNormal: [
    'Your baby cries or seems startled when first entering the pool — this is a common first reaction',
    'Your baby\'s skin appears slightly dry or pink after pool time — rinse with fresh water and apply moisturizer',
    'Your baby swallowed a small amount of pool water and has no symptoms',
    'Your baby shivers after pool time — warm them with a towel immediately and limit future sessions',
  ],
  whenToMention: [
    'Your baby develops a rash, persistent redness, or eye irritation after pool exposure that does not resolve within a day',
    'Your baby swallowed a significant amount of pool water and later develops vomiting, coughing, or diarrhea',
    'You want to discuss when to start swim lessons for your child',
  ],
  whenToActNow: [
    'Your baby had a submersion event — went underwater unexpectedly — even if they seem fine, seek medical evaluation for secondary (delayed) drowning within 24 hours',
    'Your child develops persistent coughing, difficulty breathing, or increasing sleepiness in the hours after a pool incident — call 911 immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'water-safety-drowning-prevention',
    'beach-safety-baby-toddler',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Swim Safety Tips for Families. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Water-Safety-And-Young-Children.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Drowning Prevention for Children.',
      url: 'https://www.cdc.gov/drowning/prevention/index.html',
    },
  ],
};

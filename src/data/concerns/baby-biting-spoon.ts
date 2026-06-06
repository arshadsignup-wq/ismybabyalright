import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-biting-spoon',
  title: 'My Baby Keeps Clamping Down on the Spoon',
  category: 'feeding',
  searchTerms: [
    'baby biting spoon',
    'baby clamping down on spoon',
    'baby won\'t let go of spoon',
    'baby chomps on spoon',
    'baby bites spoon hard',
    'baby chewing on spoon instead of eating',
    'baby grabs spoon with teeth',
    'baby grinding on spoon',
    'baby teething biting spoon',
    'baby jaw clenching spoon',
  ],
  quickAnswer:
    'Clamping down on the spoon is very common, especially during teething or when babies are learning new oral motor skills. It is often a sensory exploration behavior rather than a feeding problem. Using a soft silicone spoon and placing food on the front of the spoon can help.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies this age are not ready for spoon feeding. Any biting or clamping behavior on objects placed in their mouth is a reflex action. Wait for developmental readiness signs before introducing solids.',
    },
    {
      ageRange: '4-6 months',
      context:
        'When first starting solids, babies are learning what to do with a spoon in their mouth. Clamping down is a natural response as they explore this new sensation. Use a soft-tipped silicone spoon and place just a small amount of food on the tip. Let baby explore the spoon at their own pace without pulling it away forcefully.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is peak teething time for many babies, and biting down on the spoon can provide soothing counter-pressure on sore gums. Offer a chilled spoon before meals to help with teething discomfort. You can also try pre-loading spoons and letting baby bring them to their own mouth, which gives them more control.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Babies at this age are developing stronger jaw muscles and may clamp down as part of learning to chew. If biting the spoon is interfering with eating, try alternating between spoon-fed foods and finger foods. Some babies do better with a flat spoon rather than a deep bowl spoon at this stage.',
    },
    {
      ageRange: '12-24 months',
      context:
        'If your toddler is still clamping down forcefully on every spoon, consider whether it may be a sensory-seeking behavior. Most toddlers learn to take food from a spoon smoothly by 18 months. If the behavior persists along with other feeding difficulties, mention it to your pediatrician.',
    },
  ],
  whenNormal: [
    'Baby bites down on the spoon occasionally but still eats well overall',
    'Baby is teething and seems to bite the spoon for comfort on sore gums',
    'Baby clamps on the spoon but releases when you wait patiently',
    'Baby is just learning to eat solids and exploring the spoon with their mouth',
  ],
  whenToMention: [
    'Baby bites down on every spoon so hard that feeding becomes very difficult',
    'Baby also has difficulty chewing age-appropriate textures',
    'Baby seems to have very high or very low muscle tone in the jaw',
  ],
  whenToActNow: [
    'Baby cannot open mouth to accept food at all and seems unable to control jaw movements',
    'Baby is losing weight or showing signs of dehydration because feeding is so impaired',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-refusing-spoon', 'baby-gagging-on-textures', 'oral-aversion-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Oral Motor Development and Feeding. Pediatric Nutrition, 8th Edition, 2019.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Oral Motor Development in Infants. Journal of Pediatric Health Care, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};

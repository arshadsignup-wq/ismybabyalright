import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-type-transitions',
  title: 'Transitioning Between Formula Types',
  category: 'feeding',
  searchTerms: [
    'transitioning formula types',
    'switching from regular to sensitive formula',
    'changing formula type',
    'moving to hypoallergenic formula',
    'switching to soy formula',
    'gentle formula transition',
    'formula type change baby',
    'when to change formula type',
  ],
  quickAnswer:
    'Transitioning between formula types, such as from standard to sensitive, soy, or hypoallergenic, is sometimes necessary when a baby shows signs of intolerance or allergy. Unlike switching brands of the same type, changing formula types addresses a different nutritional or digestive need. Your pediatrician can help determine which type is right for your baby and whether a gradual or immediate switch is best.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies are still developing their digestive systems, so some fussiness and gas are normal and do not always mean the formula type needs to change. However, if your baby has persistent symptoms like excessive crying after feeds, bloody stool, severe vomiting, or a rash, your pediatrician may recommend switching to a hydrolyzed or amino acid-based formula. Do not switch to soy formula for babies under 6 months without medical guidance.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, digestive patterns are more established, making it easier to identify whether a formula type is truly causing problems. If your baby has been on a sensitive or partially hydrolyzed formula and symptoms persist, your pediatrician may suggest moving to an extensively hydrolyzed formula. Give any new formula at least one to two weeks before deciding whether it is helping.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If your baby has been thriving on a specialty formula, continue it through 12 months unless your pediatrician advises otherwise. Some parents wonder about transitioning back to standard formula as their baby grows, but if the switch was made due to a milk protein allergy, the allergy may still be present. Always consult your pediatrician before transitioning back.',
    },
    {
      ageRange: '12-24 months',
      context:
        'As your toddler transitions toward whole milk and a varied diet, discuss with your pediatrician whether a specialty formula is still needed. Many children outgrow milk protein sensitivity by 12 to 18 months, and a supervised milk challenge can help determine if standard dairy is now tolerated.',
    },
  ],
  whenNormal: [
    'Your baby has a few days of slightly different stools after switching formula types',
    'Your baby takes a couple of feeds to adjust to the new taste, especially with hydrolyzed formulas which taste different',
    'Mild fussiness during the transition that resolves within a week',
  ],
  whenToMention: [
    'Your baby\'s symptoms do not improve after one to two weeks on the new formula type',
    'You are unsure whether your baby needs a sensitive, soy, hydrolyzed, or amino acid-based formula',
    'Your baby was switched to a specialty formula and you want to try transitioning back to standard formula',
    'You are struggling with the cost of specialty formula and need guidance on alternatives',
  ],
  whenToActNow: [
    'Your baby has blood in their stool, severe vomiting, or significant weight loss on any formula',
    'Your baby develops hives, wheezing, facial swelling, or difficulty breathing after a formula change',
    'Your baby refuses all feeds and shows signs of dehydration',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing an Infant Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Choosing-an-Infant-Formula.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Allergies in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Food-Allergies-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Cow\'s Milk Allergy in Infants. NCBI.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK542243/',
    },
  ],
};

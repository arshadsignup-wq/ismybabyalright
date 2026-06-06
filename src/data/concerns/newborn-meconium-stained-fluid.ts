import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-meconium-stained-fluid',
  title: 'Meconium in Amniotic Fluid',
  category: 'medical',
  searchTerms: [
    'meconium stained amniotic fluid',
    'baby swallowed meconium',
    'meconium in waters',
    'baby born in meconium',
    'meconium aspiration risk',
    'green amniotic fluid',
    'baby meconium during delivery',
    'meconium stained liquor',
    'meconium at birth complications',
    'baby meconium treatment',
  ],
  quickAnswer:
    'Meconium-stained amniotic fluid (green or brown fluid) occurs in about 10-15% of deliveries, usually at term or post-term. While many babies born through meconium-stained fluid are perfectly healthy, there is a small risk of meconium aspiration syndrome if the baby breathes in the meconium. The medical team monitors for this and provides appropriate care.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'If your baby was born through meconium-stained amniotic fluid, the medical team assessed your baby immediately at birth. If your baby was vigorous (crying, good muscle tone, good heart rate), no special suctioning is needed. If your baby was not vigorous, the team may have provided immediate respiratory support. Meconium aspiration syndrome (MAS) affects a small percentage of babies born through meconium-stained fluid and can cause respiratory distress requiring monitoring or treatment. Most babies born through meconium-stained fluid do perfectly well.',
    },
    {
      ageRange: '1-3 months',
      context:
        'If your baby had no respiratory symptoms at birth and has been feeding and growing normally, there are generally no lasting effects from being born through meconium-stained fluid. Babies who had meconium aspiration syndrome may have required NICU care and may have follow-up appointments to monitor respiratory health.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies who had uncomplicated births through meconium-stained fluid develop normally. Those who had MAS requiring treatment typically recover fully, though some may have increased sensitivity to respiratory infections in the first year.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Long-term outcomes for babies born through meconium-stained fluid are excellent in the vast majority of cases. Even most babies who had MAS recover fully without long-term lung problems.',
    },
  ],
  whenNormal: [
    'Baby was born vigorous through meconium-stained fluid and had no respiratory symptoms',
    'Baby is feeding well, breathing comfortably, and has normal energy',
    'Medical team evaluated and cleared baby without concerns',
    'No NICU admission was required',
  ],
  whenToMention: [
    'You have questions about what meconium-stained fluid means for your baby\'s health',
    'Your baby had MAS and you want to understand the recovery timeline',
    'You notice any respiratory symptoms in the weeks following birth',
  ],
  whenToActNow: [
    'Your newborn develops difficulty breathing, rapid breathing, grunting, or chest retractions in the hours or days after birth through meconium-stained fluid',
    'Baby becomes lethargic, feeds poorly, or develops a fever after being born through meconium',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Neonatal Resuscitation Program: Management of Meconium-Stained Amniotic Fluid.',
      url: 'https://www.aap.org/en/learning/neonatal-resuscitation-program/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Meconium Aspiration Syndrome. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK557425/',
    },
  ],
  relatedConcernSlugs: ['newborn-not-crying-at-birth', 'newborn-apgar-score-low', 'transient-tachypnea-newborn'],
};

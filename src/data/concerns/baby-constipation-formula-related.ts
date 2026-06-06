import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-constipation-formula-related',
  title: 'Formula-Related Constipation in Baby',
  category: 'digestive',
  searchTerms: [
    'baby constipation formula',
    'formula causing constipation baby',
    'which formula for constipated baby',
    'baby constipated from formula',
    'best formula constipation baby',
    'iron in formula constipation',
    'formula switch constipation baby',
    'baby constipation formula fed',
    'formula change help constipation',
    'hypoallergenic formula constipation',
  ],
  quickAnswer:
    'Formula-fed babies are more prone to constipation than breastfed babies because formula is harder to digest. Despite a common myth, standard iron-fortified formulas do not cause constipation. If your formula-fed baby is constipated, do not switch formulas without discussing with your pediatrician first. Some partially hydrolyzed or "gentle" formulas may help specific babies.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Formula-fed newborns typically poop 1 to 4 times per day. Some constipation is normal during the first weeks as the gut adjusts. Ensure proper formula preparation (correct water-to-powder ratio) as over-concentrated formula can cause constipation. Do not dilute formula extra, as this is dangerous. Contact your pediatrician if constipation persists.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If constipation is an ongoing issue, your pediatrician may suggest trying a partially hydrolyzed formula (like Enfamil Gentlease or Similac Total Comfort) or a formula with added prebiotics. Avoid switching formulas frequently without medical guidance, as the gut needs time to adjust.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, formula becomes less of the sole dietary factor. Adding high-fiber foods and water can help resolve formula-related constipation. If you are supplementing with a formula containing added iron, know that the standard amount of iron in infant formula does not cause constipation according to research.',
    },
    {
      ageRange: '12-24 months',
      context:
        'As toddlers transition to whole milk and a broader diet, the formula is typically discontinued. If constipation continues, it is likely related to the overall diet rather than the milk source. Some toddlers become constipated from excessive dairy (cow\'s milk) intake.',
    },
  ],
  whenNormal: [
    'Firmer stools in formula-fed babies compared to breastfed babies, which is a normal difference',
    'Mild constipation that resolves with the addition of high-fiber foods or a small amount of prune juice',
  ],
  whenToMention: [
    'Your formula-fed baby has persistent hard stools despite dietary adjustments',
    'You want to discuss whether changing formula might help',
    'Your baby is straining significantly with formula-fed stools',
  ],
  whenToActNow: [
    'Constipation with blood in stool, severe abdominal distension, or vomiting',
    'A newborn under 6 weeks who is formula-fed and not passing stool for more than 2 to 3 days',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing a Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Choosing-an-Infant-Formula.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Constipation. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Iron-Fortified Formulas and Constipation. Journal of Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/10846164/',
    },
  ],
  relatedConcernSlugs: ['constipation', 'baby-constipation-remedies-safe', 'poop-changes-formula-switch', 'constipation-causes-babies'],
};

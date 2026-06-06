import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-shortage-alternatives',
  title: 'What to Do When My Formula Is Unavailable',
  category: 'feeding',
  searchTerms: ['formula shortage', 'formula out of stock', 'formula alternatives', 'can\'t find formula', 'formula unavailable', 'formula substitute', 'formula shortage what to do', 'no formula available', 'formula recall what to use', 'switching formula emergency'],
  quickAnswer: 'If your usual formula is unavailable, most babies can safely switch to a different brand of the same type (such as standard cow\'s milk-based). All standard formulas meet the same FDA standards. Never dilute formula, make homemade formula, or use toddler milk or plant milk as a substitute. Contact your pediatrician for guidance, especially if your baby is on a specialty formula.',
  byAge: [
    { ageRange: '0-3 months', context: 'For young babies, formula is their sole nutrition source so finding a replacement quickly is essential. Switch to the same type from a different brand. Contact your pediatrician, local WIC office, or hospital for help finding formula. Never water down formula to stretch supply.' },
    { ageRange: '4-6 months', context: 'Same guidance as above. If baby has just started solids, formula remains the primary nutrition. Do not try to replace formula with solid foods at this age.' },
    { ageRange: '6-9 months', context: 'While solids are increasing, formula is still crucial. Switch to an available equivalent brand. Your pediatrician can help identify the best alternative for your baby.' },
    { ageRange: '9-12 months', context: 'If your baby is eating a good variety of solids and approaching 12 months, your pediatrician may approve a temporary adjustment. But do not switch to cow\'s milk before 12 months without medical guidance.' },
    { ageRange: '12-24 months', context: 'If your toddler is still on specialty formula and it becomes unavailable, contact your pediatrician immediately for alternatives. Standard formula-dependent toddlers can usually transition to whole milk.' },
  ],
  whenNormal: ['You switch to a different brand of the same formula type', 'Baby adjusts to the new formula within a few days', 'You contact your pediatrician for guidance on alternatives'],
  whenToMention: ['Your baby is on a specialty or hypoallergenic formula that is unavailable', 'You are unsure which alternative formula is safe for your baby', 'You are having difficulty affording or finding any formula'],
  whenToActNow: ['You have no formula at all and baby is hungry', 'Someone has suggested making homemade formula or using inappropriate substitutes like plant milk for an infant'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['formula-brand-differences', 'switching-formula-brands', 'formula-type-transitions'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Infant Formula Shortage Resources. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/tips-tools/ask-the-pediatrician/Pages/Are-there-shortages-of-infant-formula-due-to-COVID-19.aspx' },
    { org: 'FDA', citation: 'U.S. Food and Drug Administration. Infant Formula Safety. 2023.', url: 'https://www.fda.gov/food/resources-you-food/infant-formula' },
  ],
};

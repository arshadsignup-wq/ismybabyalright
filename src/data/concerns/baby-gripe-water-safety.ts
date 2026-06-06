import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-gripe-water-safety',
  title: 'Gripe Water Safety Concerns',
  category: 'digestive',
  searchTerms: [
    'gripe water baby safe',
    'is gripe water safe for newborn',
    'gripe water baby concerns',
    'gripe water evidence',
    'gripe water side effects baby',
    'baby gripe water dosage',
    'gripe water vs gas drops',
    'gripe water ingredients baby',
    'does gripe water work',
    'gripe water baby colic',
  ],
  quickAnswer:
    'Gripe water is an over-the-counter supplement, not an FDA-regulated medication, and its safety and effectiveness are not well-established. Ingredients vary by brand and may include sodium bicarbonate, fennel, ginger, or other herbal ingredients. The AAP does not recommend gripe water because it is not regulated, may contain harmful ingredients, and has no proven benefit over placebo.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The AAP advises caution with gripe water for young infants. Some formulations contain alcohol, sugar, or sodium bicarbonate, which are not appropriate for newborns. If you choose to use gripe water, select an alcohol-free, charcoal-free brand and discuss it with your pediatrician first. Never give gripe water to babies under 2 weeks old.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If you want to try gripe water, choose a brand with minimal ingredients and no alcohol, artificial sweeteners, or charcoal. Give the smallest recommended dose and watch for any adverse reactions. Keep in mind that there is no scientific evidence that gripe water reduces colic or gas more than placebo.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, colic has typically resolved and the need for gripe water diminishes. If your baby still has significant gas or discomfort, evidence-based approaches like dietary modifications, probiotics, or discussing the issue with your pediatrician are more appropriate.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Gripe water is not recommended or needed for toddlers. If your toddler has persistent digestive discomfort, discuss proper evaluation and evidence-based treatment with your pediatrician rather than using unregulated supplements.',
    },
  ],
  whenNormal: [
    'Choosing not to use gripe water is a perfectly reasonable and recommended approach',
  ],
  whenToMention: [
    'You have been using gripe water and want your pediatrician\'s opinion on its safety',
    'You want to discuss evidence-based alternatives for your baby\'s gas or colic',
    'Your baby had a reaction after gripe water',
  ],
  whenToActNow: [
    'Your baby has an adverse reaction (allergic reaction, vomiting, lethargy) after receiving gripe water',
    'You accidentally gave a gripe water product containing alcohol or an inappropriate ingredient to your baby',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Colic Relief Tips. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Colic.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Gripe Water: Evidence of Efficacy. Journal of Pharmacology and Pharmacotherapeutics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/22629085/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. OTC Medications for Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/medication-safety/Pages/Using-Over-the-Counter-Medicines-With-Your-Child.aspx',
    },
  ],
  relatedConcernSlugs: ['baby-gas-drops-simethicone', 'baby-colic-drops-effectiveness', 'excessive-gas-baby'],
};

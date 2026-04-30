import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-vitamin-supplement-overdose',
  title: 'Baby Took Too Many Vitamins or Supplements',
  category: 'medical',
  searchTerms: ['baby vitamin overdose', 'toddler ate vitamins', 'baby iron overdose', 'toddler gummy vitamin overdose', 'baby too many vitamins', 'toddler ate whole bottle vitamins', 'baby vitamin D overdose', 'toddler supplement overdose', 'baby iron poisoning', 'toddler prenatal vitamin'],
  quickAnswer: 'If your child has consumed too many vitamins or supplements, call Poison Control immediately at 1-800-222-1222 (US). The most dangerous vitamin/supplement overdose in children is iron, which can cause serious poisoning even from adult multivitamins or prenatal vitamins. Vitamin D overdose can also be harmful. Gummy vitamins that look like candy are a common cause of accidental overdose in toddlers. While most water-soluble vitamins (B, C) are less dangerous in excess, fat-soluble vitamins (A, D, E, K) and minerals (iron, zinc) can accumulate to toxic levels. Keep all vitamins and supplements out of reach of children.',
  byAge: [
    { ageRange: '0-12 months', context: 'Vitamin overdose in babies usually occurs when a caregiver accidentally gives too much of a liquid supplement (such as vitamin D drops or iron drops). Follow dosing instructions exactly and use the dropper provided with the product. Too much vitamin D can cause elevated calcium levels (hypercalcemia), leading to vomiting, constipation, weakness, and kidney damage. Iron drops overdose can cause vomiting, diarrhea, and serious toxicity. If you gave too much of any supplement, call Poison Control (1-800-222-1222) immediately - they will tell you whether your baby needs emergency care.' },
    { ageRange: '1-3 years', context: 'Toddlers are the highest-risk age group for vitamin overdose because they can open child-resistant caps, they are attracted to colorful gummy vitamins, and they may eat large quantities quickly. Iron-containing vitamins (including adult multivitamins and prenatal vitamins) are the most dangerous - even a handful can be life-threatening. If your toddler has eaten any amount of iron-containing vitamins, call Poison Control immediately. For gummy multivitamins without iron, small excess amounts may cause mild stomach upset but are usually not dangerous - still call Poison Control for guidance on the specific amount consumed.' },
  ],
  whenNormal: ['Your child took one extra dose of a children\'s vitamin (likely not harmful, but still call Poison Control for confirmation)'],
  whenToMention: ['You are unsure about the correct vitamin dose for your child', 'You want guidance on which supplements your child needs', 'Your child accidentally took an extra dose of a non-iron vitamin'],
  whenToActNow: ['Your child consumed any amount of iron-containing vitamins (adult multivitamins, prenatal vitamins, or iron supplements) - call Poison Control (1-800-222-1222) or go to the ER immediately', 'Your child ate a large number of any type of vitamin or supplement - call Poison Control immediately', 'Vomiting, diarrhea, or abdominal pain after consuming vitamins', 'Your child appears lethargic, confused, or unwell after consuming supplements', 'If in doubt about any accidental vitamin ingestion, ALWAYS call Poison Control - they are available 24/7 and the call is free'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-swallowed-something-dangerous', 'baby-ibuprofen-dosing-safety', 'baby-first-aid-kit-essentials'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Vitamins and Supplements for Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Vitamins-and-Your-Baby.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Poison Prevention. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Poison-Prevention.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Iron Toxicity. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459224/' },
  ],
};

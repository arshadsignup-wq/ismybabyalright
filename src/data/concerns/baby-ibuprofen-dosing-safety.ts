import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-ibuprofen-dosing-safety',
  title: 'Ibuprofen and Acetaminophen Dosing Safety',
  category: 'medical',
  searchTerms: ['baby ibuprofen dosing', 'baby Tylenol dosing', 'baby acetaminophen dose', 'baby Motrin dose', 'toddler ibuprofen', 'baby fever medicine dosing', 'baby ibuprofen age', 'can I give baby ibuprofen', 'baby medicine overdose', 'alternating Tylenol and Motrin baby'],
  quickAnswer: 'Acetaminophen (Tylenol) can be given to babies 2 months and older. Ibuprofen (Motrin/Advil) should NOT be given to babies under 6 months. Dosing is based on your child\'s WEIGHT, not age - always use the dosing syringe that comes with the product and follow the weight-based chart on the packaging. Never give aspirin to children under 18 (risk of Reye syndrome). When in doubt about dosing, call your pediatrician. Alternating acetaminophen and ibuprofen can be effective for fever but increases the risk of dosing errors - only do this under your pediatrician\'s guidance.',
  byAge: [
    { ageRange: '0-12 months', context: 'Acetaminophen (Tylenol) can be used from age 2 months, dosed by weight. Ibuprofen (Motrin/Advil) is NOT recommended for babies under 6 months because their kidneys are immature. Always use infant-concentration products (NOT children\'s formulation, which is a different concentration). Use the dosing syringe provided - kitchen spoons are inaccurate. Give doses no more frequently than: acetaminophen every 4-6 hours (max 5 doses in 24 hours), ibuprofen every 6-8 hours (max 4 doses in 24 hours). If your baby under 3 months has a fever, do not just give medication - call your pediatrician or go to the ER immediately.' },
    { ageRange: '1-3 years', context: 'Both acetaminophen and ibuprofen are safe for toddlers when dosed correctly by weight. Common mistakes to avoid: using adult formulations, estimating doses with kitchen spoons, giving doses too frequently, and giving both medications without tracking which was given when. If alternating medications, keep a written log of what was given and when. Be aware that many cold and flu products contain acetaminophen - giving these along with standalone Tylenol can lead to accidental overdose. Read all ingredient labels. If you think your child received too much medication, call Poison Control (1-800-222-1222) immediately.' },
  ],
  whenNormal: ['Using acetaminophen or ibuprofen as needed for fever or pain at the correct dose for your child\'s weight', 'Your child\'s fever goes down with medication but returns when it wears off (this is expected during illness)'],
  whenToMention: ['You are unsure about the correct dose for your child\'s weight', 'You want to discuss alternating acetaminophen and ibuprofen', 'Fever is not responding to properly dosed medication', 'Your child needs fever medication for more than 3 days continuously'],
  whenToActNow: ['You think your child may have received too much medication (call Poison Control: 1-800-222-1222)', 'Your child is vomiting after taking medication and you are unsure if the dose was absorbed', 'Your baby under 3 months has a fever (seek immediate medical care - do not just give medication)', 'Signs of acetaminophen overdose: nausea, vomiting, abdominal pain, or yellowing of skin/eyes'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-high-fever-over-104', 'newborn-fever-under-3-months', 'baby-allergic-reaction-medicine', 'baby-vitamin-supplement-overdose'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Fever and Pain Medicine Dosing. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Medications-Used-to-Treat-Fever.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Ibuprofen Dosing Table. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Ibuprofen-for-Fever-and-Pain.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Acetaminophen Toxicity in Children.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK441917/' },
  ],
};

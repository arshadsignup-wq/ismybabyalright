import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-witch-milk',
  title: 'Milk Discharge From Newborn Nipples (Witch\'s Milk)',
  category: 'medical',
  searchTerms: ['witch milk newborn', 'baby milk from nipples', 'newborn nipple discharge', 'galactorrhea newborn', 'baby breast leaking milk', 'newborn milky nipple discharge', 'neonatal galactorrhea', 'baby producing breast milk', 'newborn nipple secretion', 'witch\'s milk normal'],
  quickAnswer:
    'A small amount of milky discharge from a newborn\'s nipples (called witch\'s milk or neonatal galactorrhea) is normal and occurs in both boys and girls. It is caused by maternal hormones that crossed the placenta before birth. Do not squeeze or express the fluid. It resolves on its own within a few weeks.',
  byAge: [
    { ageRange: '0-1 month', context: 'Witch\'s milk is a normal phenomenon caused by the same maternal estrogen and prolactin hormones that cause breast tissue swelling in newborns. Up to 5% of newborns produce enough milk to be visible. The discharge is typically small in amount, milky white, and comes from one or both nipples. It is harmless and self-resolving. The most important thing is to avoid squeezing, pressing, or trying to express the milk, as this can stimulate more production, irritate the tissue, and potentially cause infection (mastitis).' },
    { ageRange: '1-3 months', context: 'The milk production should diminish and stop as maternal hormones clear from the baby\'s body. This typically happens within the first few weeks but can occasionally persist for up to 2 months. Continue to avoid manipulating the breast tissue.' },
    { ageRange: '3-6 months', context: 'Witch\'s milk should have completely resolved. Any new nipple discharge at this age is unusual and should be evaluated by your pediatrician.' },
    { ageRange: '6-12 months', context: 'No nipple discharge should be present. Any nipple discharge beyond the newborn period warrants medical evaluation.' },
  ],
  whenNormal: ['Small amount of milky white discharge from nipples in a newborn in the first few weeks', 'Both boys and girls can produce witch\'s milk', 'The breast tissue may be slightly swollen but not red or tender', 'The discharge resolves on its own without treatment'],
  whenToMention: ['Witch\'s milk persists beyond 2 months', 'The discharge appears to be increasing rather than decreasing', 'You are concerned and want reassurance'],
  whenToActNow: ['The breast area becomes red, swollen, warm, or tender, which could indicate mastitis requiring antibiotics', 'Discharge becomes bloody, pus-like, or the baby develops a fever along with breast swelling'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Physical Changes in Newborns. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Your-Babys-First-Days.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Neonatal Breast Hypertrophy and Galactorrhea. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/001911.htm' },
  ],
  relatedConcernSlugs: ['newborn-breast-tissue-swelling', 'newborn-swollen-genitals'],
};

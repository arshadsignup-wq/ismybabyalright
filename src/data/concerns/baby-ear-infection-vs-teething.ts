import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-ear-infection-vs-teething',
  title: 'Ear Infection vs. Teething - How to Tell the Difference',
  category: 'medical',
  searchTerms: ['ear infection or teething', 'baby pulling ear teething', 'baby ear infection vs teething', 'teething ear pulling', 'baby ear tugging', 'baby fussy ear', 'baby ear pain teething', 'baby rubbing ear', 'ear infection teething difference', 'baby ear infection signs'],
  quickAnswer: 'Ear pulling is one of the most commonly confused symptoms in babies - it can indicate either teething or an ear infection, and telling the difference can be tricky. Teething causes referred pain to the ear area (especially when molars are coming in), leading babies to pull or rub their ears. An ear infection typically follows a cold and is associated with fever, disrupted sleep, and increased fussiness. The key differences: teething ear pulling is usually without fever and is accompanied by drooling and gum swelling, while ear infections typically cause fever, follow a cold, and may cause more intense pain when lying down.',
  byAge: [
    { ageRange: '0-12 months', context: 'Ear infections are common in babies 6-12 months, peak at the same time as teething, making it hard to tell them apart. Signs more suggestive of an ear infection include: fever over 100.4 degrees F, fussiness that worsens when lying down (fluid pressure on the eardrum increases), recent cold or congestion, yellow or green ear discharge, trouble sleeping (especially worse on one side), and pulling at one specific ear repeatedly. Signs more suggestive of teething include: drooling, gnawing on objects, visible swollen gums, irritability that improves with teething remedies, and no fever above 100.4 degrees F.' },
    { ageRange: '1-3 years', context: 'Toddlers can more clearly indicate if they have ear pain - they may point to their ear or say "owie." Ear infections in toddlers often follow upper respiratory infections and present with fever, ear pain (worse at night), and sometimes temporary hearing reduction. Teething-related ear discomfort from molars (which come in between 13-33 months) causes generalized jaw and ear area discomfort but typically without fever, without following a cold, and with visible gum changes. If you cannot tell the difference, a quick visit to the pediatrician for an ear exam is the most reliable way to know.' },
  ],
  whenNormal: ['Occasional ear rubbing during teething with no fever or signs of illness', 'Mild ear pulling that resolves when your baby is distracted', 'Ear rubbing at bedtime as a self-soothing habit'],
  whenToMention: ['Your baby is pulling at their ears and you are unsure if it is teething or an ear infection', 'Ear pulling with a low-grade fever (could be either - worth checking)', 'Ear pulling that has been ongoing for several days', 'Your baby is recovering from a cold and is now fussy and pulling at ears (more suggestive of ear infection)'],
  whenToActNow: ['Ear pulling with a fever over 102 degrees F (39 degrees C)', 'Yellow, green, or bloody discharge coming from the ear', 'Your child is in significant pain - crying inconsolably, especially when lying down', 'Ear pain with a stiff neck (rare but needs urgent evaluation)', 'Swelling or redness behind the ear (possible mastoiditis - seek immediate care)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['ear-infection', 'teething-pain', 'baby-ear-pulling', 'baby-teething-fever-myth'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Ear Infections in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Infection-Information.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Teething Pain. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-Pain.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Acute Otitis Media in Children.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK470332/' },
  ],
};

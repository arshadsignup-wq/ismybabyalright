import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-hand-foot-mouth-blisters-severe',
  title: 'Severe Hand-Foot-and-Mouth Blisters',
  category: 'skin',
  searchTerms: ['severe hand foot mouth baby', 'baby hfm bad blisters', 'hand foot mouth severe blisters', 'baby hand foot mouth won\'t eat', 'bad hand foot mouth baby', 'hand foot mouth spreading everywhere baby', 'baby hfmd severe', 'hand foot mouth blisters painful baby', 'coxsackievirus severe baby', 'hand foot mouth all over body baby'],
  quickAnswer: 'Hand-foot-and-mouth disease (HFMD) can sometimes cause severe blistering that extends beyond the typical hands, feet, and mouth to the buttocks, legs, and arms. While this can look alarming, even severe cases typically resolve within 7 to 10 days. The main concern is ensuring your baby stays hydrated, as painful mouth sores can make drinking difficult.',
  byAge: [
    { ageRange: '0-3 months', context: 'HFMD in very young infants should be monitored closely. Severe blistering and refusal to eat can quickly lead to dehydration in small babies. If your newborn has widespread blisters with fever, seek medical evaluation to confirm the diagnosis and ensure adequate hydration.' },
    { ageRange: '3-6 months', context: 'Severe HFMD can cause extensive blisters and significant pain from mouth sores, leading to feeding refusal. Offer chilled breast milk, formula, or pedialyte. Avoid acidic foods and juices. Your pediatrician may recommend age-appropriate pain relief. Watch closely for signs of dehydration like fewer wet diapers.' },
    { ageRange: '6-12 months', context: 'This is a common age for HFMD, especially in daycare settings. Some strains (particularly coxsackievirus A6) cause more widespread and severe blistering than classic HFMD. The blisters may look dramatic but will heal without scarring. Nail shedding may occur 3 to 6 weeks later, which is temporary and harmless.' },
    { ageRange: '12-24 months', context: 'Toddlers with severe HFMD may refuse to eat or drink due to painful mouth sores. Popsicles, cold yogurt, and cool water can provide comfort. Skin blisters should be kept clean but do not need bandaging. The illness is most contagious in the first week but the virus can be shed in stool for weeks.' },
  ],
  whenNormal: ['Blisters on hands, feet, mouth, and buttocks that are gradually improving over a week', 'Mild fever for 1 to 3 days at the start of the illness', 'Blisters that crust over and heal without scarring within 10 days'],
  whenToMention: ['Blisters are very widespread or larger than typical', 'Your child is having difficulty staying hydrated due to mouth pain', 'Blisters appear infected with increasing redness or pus'],
  whenToActNow: ['Your baby has not had a wet diaper in 6 or more hours, suggesting dehydration', 'Your baby is lethargic, extremely irritable, or has a high persistent fever', 'Your baby develops a stiff neck, severe headache, or seems confused, which could indicate rare neurological complications'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Hand, Foot, and Mouth Disease. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Hand-Foot-and-Mouth-Disease.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Hand, Foot, and Mouth Disease.', url: 'https://www.cdc.gov/hand-foot-mouth/index.html' },
    { org: 'NIH', citation: 'National Library of Medicine. Atypical Hand, Foot, and Mouth Disease. Journal of the American Academy of Dermatology.', url: 'https://pubmed.ncbi.nlm.nih.gov/24507858/' },
  ],
  relatedConcernSlugs: ['hand-foot-mouth', 'baby-blister-rash-fluid-filled', 'baby-rash-with-fever'],
};

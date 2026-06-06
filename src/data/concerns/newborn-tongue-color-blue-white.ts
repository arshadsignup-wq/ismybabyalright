import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-tongue-color-blue-white',
  title: 'Baby\'s Tongue Color Changes (Blue or White)',
  category: 'medical',
  searchTerms: ['baby tongue color blue', 'newborn white tongue', 'baby tongue turning blue', 'white coating baby tongue', 'baby tongue color change', 'blue tongue newborn', 'white spots baby tongue', 'baby tongue looks white', 'baby tongue blue after feeding', 'tongue color baby normal'],
  quickAnswer: 'A white coating on baby\'s tongue after feeding is usually just milk residue, though a persistent white coating that does not wipe off may be oral thrush. A blue tongue in a baby is more concerning and may indicate oxygen issues that need immediate medical evaluation.',
  byAge: [
    { ageRange: '0-1 month', context: 'White tongue: A thin white coating on the tongue after breastfeeding or bottle feeding is very common and is simply milk residue. It typically wipes away easily. If the white patches are thick, raised, and do not wipe off easily (or leave red raw spots underneath when rubbed), this may be oral thrush, a common yeast infection caused by Candida. Thrush is harmless but uncomfortable and treatable with antifungal medication prescribed by your pediatrician. Blue tongue: If baby\'s tongue appears blue or purple, this can indicate cyanosis (low oxygen levels), especially if accompanied by blueness of the lips or face. This requires immediate medical attention. Brief blueness of the hands and feet (acrocyanosis) in the first days is normal, but a blue tongue is not.' },
    { ageRange: '1-3 months', context: 'Milk residue on the tongue remains common. Thrush is most common in this age range and can develop if baby has been on antibiotics or if the breastfeeding parent has a yeast infection. Thrush may appear on the tongue, inner cheeks, gums, or roof of the mouth. A blue tongue at any age requires urgent evaluation.' },
    { ageRange: '3-6 months', context: 'As baby begins to produce more saliva and potentially starts exploring objects with their mouth, the tongue may appear different at times. Thrush can still occur but becomes less common. Any blue discoloration of the tongue still warrants immediate medical attention.' },
    { ageRange: '6-12 months', context: 'As baby starts solid foods, the tongue may take on various colors from food. This is normal. Persistent white patches that do not wipe off should still be evaluated for thrush. Blue tongue remains a medical emergency at any age.' },
  ],
  whenNormal: ['Thin white coating on the tongue that wipes away easily after feeding', 'Tongue returns to normal pink color between feedings', 'No other symptoms: baby is feeding well and content'],
  whenToMention: ['White patches on tongue, cheeks, or gums that do not wipe off easily (possible thrush)', 'Baby seems fussy or reluctant to feed with white patches present', 'You or baby have been on antibiotics recently and notice white patches developing'],
  whenToActNow: ['Baby\'s tongue appears blue or purple, indicating possible low oxygen', 'Blue tongue with blue lips, face, or fingernail beds', 'Baby is having difficulty breathing along with color changes'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Thrush and Other Candida Infections. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Thrush-and-Other-Candida-Infections.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Oral Thrush in Infants.', url: 'https://www.mayoclinic.org/diseases-conditions/oral-thrush/symptoms-causes/syc-20353533' },
  ],
  relatedConcernSlugs: ['acrocyanosis-blue-hands-feet', 'newborn-lip-quivering', 'breastfeeding-latch-pain'],
};

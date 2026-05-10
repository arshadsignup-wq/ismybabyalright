import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'adenoid-hypertrophy-breathing',
  title: 'Adenoid Hypertrophy and Breathing',
  category: 'medical',
  searchTerms: [
    'enlarged adenoids baby',
    'adenoid hypertrophy toddler',
    'baby mouth breathing adenoids',
    'adenoids causing snoring toddler',
    'enlarged adenoids symptoms child',
    'adenoids and breathing problems baby',
    'adenoid removal toddler',
    'adenoids and sleep apnea child',
  ],
  quickAnswer:
    'Adenoids are lymphoid tissue located behind the nose that help fight infection in young children. When adenoids become enlarged (adenoid hypertrophy), they can block the nasal airway, causing chronic mouth breathing, snoring, nasal speech, and sleep-disordered breathing. Enlarged adenoids are most common between ages 2-7 and are a leading cause of obstructive sleep apnea in young children. Treatment ranges from watchful waiting and nasal steroids to surgical removal (adenoidectomy) if breathing or sleep is significantly affected.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Adenoid hypertrophy is very uncommon in newborns. Nasal congestion at this age is almost always due to the narrow newborn nasal passages, normal mucus production, or viral infections. If your newborn has severe nasal obstruction from birth that does not improve with saline and suctioning, your pediatrician may evaluate for structural causes like choanal atresia rather than adenoid enlargement.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Adenoids begin to grow as babies are exposed to more infections, but significant adenoid hypertrophy is still uncommon at this age. If your baby has persistent nasal congestion that does not correlate with colds, or seems to always breathe through their mouth, mention it to your pediatrician. Other causes of chronic nasal obstruction at this age (allergies, structural issues) should be considered first.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Adenoids continue to grow as the immune system develops. Some babies may begin showing signs of adenoid hypertrophy: chronic nasal congestion without being sick, mouth breathing, snoring during sleep, and a persistently runny nose. Frequent ear infections can also be related to enlarged adenoids because the adenoids sit near the opening of the Eustachian tubes. If your baby has recurrent ear infections along with nasal symptoms, discuss the possibility of adenoid involvement.',
    },
    {
      ageRange: '12 months+',
      context:
        'Adenoid hypertrophy becomes increasingly common in toddlers. Key signs include persistent mouth breathing, loud snoring, nasal-sounding speech, frequent upper respiratory infections, and disrupted sleep. If your toddler snores most nights and has observed breathing pauses during sleep, a sleep study may be recommended. A lateral neck X-ray can show the size of the adenoids. Adenoidectomy (with or without tonsillectomy) is one of the most common pediatric surgeries and is very effective for symptom relief.',
    },
  ],
  whenNormal: [
    'Baby has nasal congestion only during colds that resolves between illnesses',
    'Baby occasionally snores when congested but does not snore regularly',
    'Baby breathes through the nose when calm and healthy',
    'Toddler has mild nasal congestion during allergy season that responds to treatment',
  ],
  whenToMention: [
    'Your toddler snores loudly most nights even when not sick',
    'Your child always breathes through the mouth or has a chronically runny nose',
    'Your child has recurrent ear infections (4 or more per year) along with chronic nasal congestion',
  ],
  whenToActNow: [
    'Your child has observed breathing pauses during sleep or seems to struggle to breathe while sleeping',
    'Your child has severe nasal obstruction causing difficulty eating, drinking, or significant sleep disruption',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Tonsils and Adenoids. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Tonsils-and-Adenoids.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Enlarged Adenoids. MedlinePlus, NIH.',
      url: 'https://medlineplus.gov/ency/article/001649.htm',
    },
  ],
};

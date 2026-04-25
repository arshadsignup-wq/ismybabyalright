import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'nasal-speech',
  title: 'My Child\'s Speech Sounds Nasal',
  category: 'communication',
  searchTerms: [
    'nasal speech toddler',
    'child talks through nose',
    'hypernasal speech',
    'hyponasal speech',
    'child sounds stuffed up',
    'nasal voice child',
    'child speech sounds congested',
    'nasal tone speech',
    'child sounds like they have cold',
    'nasal resonance disorder',
  ],
  quickAnswer:
    'Nasal speech happens when too much air (hypernasal) or too little air (hyponasal) flows through the nose during speaking. Hyponasal speech sounds like a stuffy nose and is often caused by allergies, enlarged adenoids, or congestion. Hypernasal speech sounds like air is escaping through the nose and can be a sign of a structural issue like a cleft palate or velopharyngeal dysfunction. Both types can be treated.',
  byAge: [
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who are just learning to talk may sound a bit nasal, especially if they have frequent colds or allergies. At this age, it\'s hard to distinguish between temporary congestion-related nasality and a structural issue. If your child always sounds congested even when they\'re healthy, or if they had a cleft palate that was repaired, mention the nasal quality to your pediatrician at the next visit.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, speech should be clear enough to notice if your child consistently sounds like they\'re talking through their nose. Hyponasal speech (sounds stuffed up) is often due to enlarged adenoids or chronic allergies. Hypernasal speech (too much air through the nose) is less common and may indicate a problem with the soft palate not closing properly during speech. Both warrant an evaluation by an ENT and speech therapist.',
    },
    {
      ageRange: '3-4 years',
      context:
        'If your child\'s nasal speech persists into preschool, it\'s time for a thorough evaluation. Chronic hyponasal speech might require adenoid removal if enlarged adenoids are blocking airflow. Hypernasal speech often requires assessment by a craniofacial team or ENT to check for velopharyngeal insufficiency (VPI), where the soft palate doesn\'t close off the nasal passage during speech. Speech therapy can help with mild cases.',
    },
    {
      ageRange: '4+ years',
      context:
        'Nasal speech that continues into elementary school can affect intelligibility and self-esteem. If it\'s due to structural issues like VPI, surgery may be needed. If it\'s learned behavior or related to chronic congestion, speech therapy and medical management (like allergy treatment) can make a big difference. Don\'t wait  -  addressing nasal speech early prevents it from becoming a long-term pattern.',
    },
  ],
  whenNormal: [
    'Your child sounds nasal only when they have a cold, allergies, or are congested  -  this is temporary and will resolve when the congestion clears.',
    'Your child sounds slightly nasal on certain sounds (like "m," "n," and "ng"), which are naturally nasal sounds.',
    'Your child is under 2 years old and learning to talk  -  mild nasality can be part of early speech development.',
  ],
  whenToMention: [
    'Your child sounds nasal all the time, even when they\'re not sick or congested.',
    'Your child snores, breathes through their mouth constantly, or has frequent ear infections along with nasal speech  -  this could indicate enlarged adenoids.',
    'Your child had a cleft palate repair and now has hypernasal speech  -  this should be followed by a cleft team.',
    'Your child\'s speech is hard to understand, and the nasal quality seems to be a major factor.',
  ],
  whenToActNow: [
    'Your child is over 3 years old with persistent hypernasal speech (sounds like air is escaping through the nose)  -  this needs evaluation for velopharyngeal dysfunction.',
    'Your child has nasal speech along with difficulty swallowing, choking on liquids, or food coming out of their nose  -  this suggests a structural issue that needs immediate ENT evaluation.',
    'Your child\'s nasal speech is worsening or is affecting their ability to be understood at school or by peers.',
  ],
  relatedMilestones: [
    'language-clear-speech',
    'language-articulation',
    'physical-breath-control',
    'language-resonance',
    'social-emotional-communication-confidence',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association  -  Resonance Disorders',
      url: 'https://www.asha.org/practice-portal/clinical-topics/resonance-disorders/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Enlarged Adenoids and Tonsils',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Enlarged-Tonsils-and-Adenoids.aspx',
    },
    {
      org: 'Cleft Palate Foundation',
      citation:
        'Cleft Palate Foundation  -  Speech and Resonance Issues',
      url: 'https://www.cleftline.org/what-is-cleft-lip-palate/speech/',
    },
  ],
};

import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-vaccination-sleep-changes',
  title: 'Sleep Changes After Vaccinations',
  category: 'sleep',
  searchTerms: ['baby sleep after vaccines','vaccination sleep changes','baby sleepy after shots','baby fussy after vaccination','immunization sleep effects','vaccine side effects sleep','baby sleeping more after shots','baby wont sleep after vaccines','baby restless after shots','baby not sleeping after vaccines'],
  quickAnswer: 'It is common for babies to sleep more or less for 1-2 days after vaccinations. Some become extra sleepy as their immune system responds, while others are fussier. These changes are temporary and typically resolve within 24-48 hours.',
  byAge: [
    { ageRange: '2-4 months', context: 'After 2-month and 4-month vaccines, your baby may be fussier with mild fever. Some sleep more, others less. Ask about appropriate pain relief. Effects resolve within 24-48 hours.' },
    { ageRange: '6-12 months', context: 'Your baby may have a sore injection site, mild fever, or crankiness. Sleep may be disrupted 1-2 nights. Provide comfort without worrying about creating habits from one rough night.' },
    { ageRange: '12-18 months', context: 'The 12 and 15-month vaccines can cause more noticeable effects. MMR may cause mild rash or fever 7-10 days later. Sleep disruption is brief.' },
    { ageRange: '18-24 months', context: 'Toddlers may remember prior experiences and be more anxious. Post-vaccine fussiness is brief and self-resolving within 24-48 hours.' },
  ],
  whenNormal: ['Extra sleepiness or fussiness for 24-48 hours','Mild fever and injection site irritability','Sleep returns to normal within 2-3 days','Brief regression resolves quickly'],
  whenToMention: ['Symptoms persist beyond 72 hours','Baby develops fever over 104F','Unusual reaction concerns you'],
  whenToActNow: ['Baby has difficulty breathing, excessive swelling, or severe allergic reaction signs','Baby becomes extremely lethargic, unresponsive, or has seizure-like activity'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Vaccine Side Effects. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Possible Side Effects from Vaccines.', url: 'https://www.cdc.gov/vaccines/vac-gen/side-effects.htm' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Your Child\'s Immunizations. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Your-Babys-First-Vaccines.aspx' },
  ],
  relatedConcernSlugs: ['baby-illness-sleep-disruption','baby-teething-disrupting-sleep'],
};

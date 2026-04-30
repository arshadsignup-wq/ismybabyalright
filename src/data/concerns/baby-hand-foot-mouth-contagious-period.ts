import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-hand-foot-mouth-contagious-period',
  title: 'Hand, Foot, and Mouth Disease - How Long Is It Contagious?',
  category: 'medical',
  searchTerms: ['hand foot mouth contagious', 'HFMD contagious period', 'hand foot mouth daycare return', 'how long is HFMD contagious', 'hand foot mouth when can child go back to school', 'HFMD spreading', 'hand foot mouth incubation period', 'hand foot mouth siblings', 'hand foot mouth quarantine', 'HFMD daycare policy'],
  quickAnswer: 'Hand, foot, and mouth disease (HFMD) is most contagious during the first week of illness, particularly in the first few days when the child has a fever. However, the virus can be shed in stool for weeks after symptoms resolve. The incubation period is 3-5 days (time from exposure to symptom onset). Most daycare and school policies allow children to return once the fever is gone for 24 hours and they can participate in activities. You cannot fully prevent spread once a child is symptomatic, as they were most contagious before anyone knew they were sick.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies are less likely to get HFMD because they have fewer contacts, but they can catch it from older siblings or at daycare. HFMD is spread through: close contact with an infected person, respiratory droplets from coughs and sneezes, fluid from blisters, and contact with stool (diaper changes). If an older sibling has HFMD, try to limit direct contact, wash hands thoroughly (especially after diaper changes), and clean shared surfaces. Unfortunately, the virus is hardest to contain because children are most contagious before symptoms appear.' },
    { ageRange: '1-3 years', context: 'HFMD spreads rapidly in daycare settings. The contagion timeline: the child is contagious 1-2 days before symptoms appear, most contagious during the first week (especially while febrile), and continues shedding virus in stool for up to 4-6 weeks after recovery. Most daycares allow return once fever-free for 24 hours without medication and the child can eat and drink comfortably. Blisters do not need to be fully healed before returning. To reduce spread at home: frequent handwashing, clean and disinfect shared surfaces and toys, avoid sharing cups and utensils, and be diligent about hand hygiene after diaper changes.' },
  ],
  whenNormal: ['Multiple family members getting sick 3-5 days apart (expected given the incubation period)', 'The rash and blisters taking 7-10 days to fully resolve', 'A second child in the family getting a milder case (still normal)'],
  whenToMention: ['Your child keeps getting HFMD repeatedly', 'You are unsure when your child can return to daycare', 'An outbreak is happening at your daycare and you want prevention guidance'],
  whenToActNow: ['Your child with HFMD is showing signs of dehydration from refusing to drink', 'High fever lasting more than 3 days', 'Symptoms are worsening rather than improving after a week', 'Your child is very young (under 6 months) and has symptoms'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['hand-foot-mouth', 'baby-coxsackie-virus', 'baby-daycare-illness-frequency', 'herpetic-gingivostomatitis-baby'],
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Hand, Foot, and Mouth Disease.', url: 'https://www.cdc.gov/hand-foot-mouth/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Hand, Foot, and Mouth Disease. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Hand-Foot-and-Mouth-Disease.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Enterovirus Transmission.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};

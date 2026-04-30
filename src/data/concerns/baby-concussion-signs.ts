import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-concussion-signs',
  title: 'Signs of a Concussion in Baby or Toddler',
  category: 'medical',
  searchTerms: ['baby concussion', 'toddler concussion signs', 'baby head injury concussion', 'toddler concussion symptoms', 'baby hit head concussion', 'toddler fell concussion', 'baby concussion what to watch', 'baby concussion vomiting', 'toddler concussion how to tell', 'baby mild concussion'],
  quickAnswer: 'A concussion is a mild traumatic brain injury caused by a bump, blow, or jolt to the head. Babies and toddlers cannot tell you they have a headache or feel confused, so parents need to watch for behavioral signs. Concussion symptoms in young children include: excessive crying, change in eating or sleeping patterns, loss of interest in toys or activities, unsteadiness, vomiting, irritability, and loss of newly acquired skills. Most concussions resolve within 1-2 weeks. However, any head injury with loss of consciousness, repeated vomiting, or worsening symptoms needs immediate emergency evaluation.',
  byAge: [
    { ageRange: '0-12 months', context: 'Signs of a concussion in a baby include: excessive or inconsolable crying after a head bump, vomiting (especially more than once), unusual sleepiness or difficulty waking for feeds, a bulging soft spot (fontanelle), change in feeding patterns, and appearing dazed or less responsive than usual. Babies cannot tell you their symptoms, so observe behavior changes carefully. After any head injury, watch your baby for 24-48 hours. If your baby seems normal, is feeding well, and is alert, close observation at home is usually sufficient. When in doubt, call your pediatrician.' },
    { ageRange: '1-3 years', context: 'Toddlers with a concussion may show: excessive crying after the injury, vomiting, crankiness or irritability beyond what is normal, loss of balance or unsteady walking, change in sleep patterns (sleeping more or having trouble sleeping), loss of interest in favorite toys or activities, and regression of recently learned skills. Older toddlers may say their head hurts or hold their head. After a head injury, monitor for 24-48 hours. Limit stimulating activities and screen time for a few days. Full recovery typically occurs within 1-2 weeks. If symptoms worsen or do not improve, see your pediatrician.' },
  ],
  whenNormal: ['Crying after a head bump that settles within 15-20 minutes', 'A bump or bruise on the forehead after a fall', 'Your child returning to normal activity shortly after a minor head bump'],
  whenToMention: ['Your child vomited once after a head injury but seems otherwise fine', 'Your child seems mildly different in behavior after a head bump (slightly more irritable or sleepy)', 'You want guidance on how to monitor your child after a head injury', 'Symptoms are mild but not fully resolved after a week'],
  whenToActNow: ['Loss of consciousness (even briefly) after a head injury', 'Vomiting more than once after a head injury', 'Difficulty waking your child or excessive sleepiness', 'Seizure after a head injury', 'Clear fluid leaking from the nose or ears', 'One pupil larger than the other', 'Worsening headache, confusion, or irritability over the hours following the injury', 'Any head injury in a baby under 3 months', 'A fall from a significant height (more than 3-4 feet)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-bump-on-head', 'baby-fell-off-bed', 'baby-fell-down-stairs', 'baby-broken-bone-fracture-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Concussions. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Concussions.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Traumatic Brain Injury in Children.', url: 'https://www.cdc.gov/traumatic-brain-injury/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Head Injuries. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Head-Injury.aspx' },
  ],
};

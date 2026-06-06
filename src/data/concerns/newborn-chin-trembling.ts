import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-chin-trembling',
  title: 'Baby\'s Chin Trembling',
  category: 'medical',
  searchTerms: ['baby chin trembling', 'newborn chin quiver', 'baby jaw trembling', 'newborn chin shaking', 'baby chin tremor normal', 'why does baby chin shake', 'chin quiver newborn', 'baby jaw chattering', 'newborn chin vibrating', 'baby chin wobble'],
  quickAnswer: 'Chin trembling in newborns is very common and typically normal. It results from the immature nervous system and usually occurs when baby is cold, hungry, startled, or crying. These brief, self-resolving tremors diminish as the nervous system matures over the first 2-3 months.',
  byAge: [
    { ageRange: '0-1 month', context: 'Chin trembling (sometimes called chin quivering or jaw chattering) is one of the most common benign findings in newborns. The immature nervous system sends signals that are not yet perfectly controlled, resulting in these fine tremors. You may notice it during diaper changes, after a bath, when baby is hungry, or when crying. These episodes are brief (seconds), stop on their own, and are not associated with any other concerning signs. This is different from a seizure: chin trembling can be stopped by gently placing your finger on the chin, while true seizure activity cannot be stopped by gentle touch. Swaddling and warming baby often reduces chin trembling.' },
    { ageRange: '1-3 months', context: 'Chin trembling gradually decreases as the nervous system matures. It remains common and normal, especially with temperature changes or when baby is upset. The frequency and intensity should be decreasing over time.' },
    { ageRange: '3-6 months', context: 'Most chin trembling has resolved by this age. Occasional episodes with cold or crying may still occur. If chin trembling is persistent, worsening, or associated with other unusual movements, discuss with your pediatrician.' },
    { ageRange: '6-12 months', context: 'Chin trembling from nervous system immaturity should be resolved. New or persistent jaw trembling at this age warrants evaluation.' },
  ],
  whenNormal: ['Brief chin trembling lasting seconds, triggered by cold, hunger, or crying', 'Trembling that can be stopped by gentle touch on the chin', 'Baby is alert, feeding well, and otherwise normal between episodes', 'Episodes become less frequent over the first 2-3 months'],
  whenToMention: ['Chin trembling that occurs frequently without obvious triggers', 'Trembling that seems to be increasing rather than decreasing over time', 'Trembling persists beyond 3 months of age'],
  whenToActNow: ['Chin or jaw movements that are rhythmic, sustained, and cannot be stopped by gentle touch, which may indicate seizure activity', 'Trembling accompanied by stiffening, eye deviation, apnea, or loss of consciousness', 'Baby is lethargic, not feeding, or has other neurological concerns'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Newborn Reflexes and Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Neonatal Tremor: Jitteriness vs Seizures. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK559119/' },
  ],
  relatedConcernSlugs: ['newborn-lip-quivering', 'jitteriness-vs-seizures', 'newborn-startle-reflex-moro'],
};

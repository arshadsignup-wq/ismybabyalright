import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-lip-quivering',
  title: 'Baby\'s Lip Quivering',
  category: 'medical',
  searchTerms: ['baby lip quivering', 'newborn lip trembling', 'baby lip shaking', 'newborn lower lip quiver', 'baby lip tremor', 'why does baby lip quiver', 'baby lips shaking normal', 'newborn lip shiver', 'baby bottom lip trembling', 'lip quiver newborn crying'],
  quickAnswer: 'Lip quivering in newborns is very common and usually completely normal. It is caused by the immature nervous system and typically occurs when baby is cold, hungry, tired, or crying. This should resolve on its own within the first few months as the nervous system matures.',
  byAge: [
    { ageRange: '0-1 month', context: 'Lip quivering or trembling is extremely common in newborns and is almost always normal. The newborn nervous system is still immature, and the pathways that control fine muscle movements are not fully developed. You may notice the lower lip quivering when baby is exposed to cooler temperatures, during or after crying, when hungry, or during diaper changes. These brief episodes of lip trembling are a normal part of the nervous system maturing and are not seizures. Seizures in newborns look different: they involve rhythmic, sustained movements that cannot be stopped by gently holding the limb, and may include eye deviation, apnea, or changes in consciousness.' },
    { ageRange: '1-3 months', context: 'Lip quivering gradually decreases as the nervous system matures. It may still occur with temperature changes, tiredness, or crying. If the quivering is becoming more frequent, more intense, or occurring at unexpected times (not triggered by cold, crying, or hunger), mention it to your pediatrician.' },
    { ageRange: '3-6 months', context: 'Most lip quivering has resolved by this age. Occasional trembling with crying or cold is still normal. Persistent or new-onset trembling at this age should be evaluated.' },
    { ageRange: '6-12 months', context: 'Lip quivering from nervous system immaturity should be resolved. Any new trembling or quivering at this age should be discussed with your pediatrician.' },
  ],
  whenNormal: ['Brief lip quivering when baby is cold, crying, or hungry', 'Quivering that stops on its own within seconds', 'Baby is otherwise alert, feeding well, and developing normally', 'Episodes decrease over the first few months'],
  whenToMention: ['Lip quivering that seems to be getting more frequent rather than less', 'Quivering that occurs when baby is calm and warm with no obvious trigger', 'Quivering persists beyond 3 months of age'],
  whenToActNow: ['Sustained rhythmic movements of the face, lips, or tongue that cannot be interrupted', 'Lip quivering accompanied by eye rolling, stiffening, or changes in breathing or consciousness, which may indicate seizure', 'Baby is unresponsive or difficult to arouse during or after episodes'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Newborn Reflexes and Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Neonatal Tremor and Jitteriness. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK559119/' },
  ],
  relatedConcernSlugs: ['newborn-chin-trembling', 'jitteriness-vs-seizures', 'newborn-tongue-color-blue-white'],
};

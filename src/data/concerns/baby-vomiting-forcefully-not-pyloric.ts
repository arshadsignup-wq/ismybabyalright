import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-vomiting-forcefully-not-pyloric',
  title: 'Forceful Vomiting in Baby (Not Pyloric Stenosis)',
  category: 'digestive',
  searchTerms: [
    'baby forceful vomiting',
    'baby projectile vomiting not pyloric',
    'baby vomiting forcefully causes',
    'baby strong vomiting',
    'baby vomiting across room',
    'baby projectile vomiting older baby',
    'baby forceful spit up',
    'baby violent vomiting',
    'baby vomiting with force',
    'baby power vomiting causes',
  ],
  quickAnswer:
    'While projectile vomiting in babies 2 to 8 weeks old should always prompt evaluation for pyloric stenosis, forceful vomiting in older babies can have many other causes including stomach viruses, overfeeding, food intolerances, or reflux. The key is assessing whether your baby can keep fluids down and is showing signs of dehydration.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Projectile vomiting in babies under 8 weeks that is progressively worsening after every feed should be evaluated urgently for pyloric stenosis. In older babies, a stomach virus or overfeeding are more common causes. A single episode of forceful vomiting is usually not concerning if the baby recovers and feeds again normally.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Forceful vomiting at this age is most often from a stomach virus (gastroenteritis). It typically comes on suddenly and may be accompanied by diarrhea and low-grade fever. Offer small, frequent feeds to maintain hydration. If the baby cannot keep anything down for more than 4 to 6 hours, contact your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Stomach bugs are very common at this age, especially in daycare. Food intolerances or new foods can also cause vomiting. Some babies vomit forcefully when gagging on new textures. If vomiting is isolated to meal times and related to texture, it is likely a gag reflex issue rather than illness.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers vomit from stomach viruses, food poisoning, motion sickness, excessive coughing, and crying. Forceful vomiting from a stomach bug usually resolves within 12 to 24 hours. If your toddler is vomiting for more than 24 hours or cannot keep liquids down, see your pediatrician.',
    },
  ],
  whenNormal: [
    'A single episode of forceful vomiting followed by the baby returning to normal feeding and behavior',
    'Vomiting during a known stomach virus that resolves within 24 hours',
    'Occasional forceful spit-up in a baby with known reflux who is otherwise thriving',
  ],
  whenToMention: [
    'Forceful vomiting happens repeatedly over several feeds',
    'Your baby seems uncomfortable before vomiting episodes',
    'Vomiting is associated with specific foods or formula changes',
  ],
  whenToActNow: [
    'Progressively worsening projectile vomiting after every feed in a baby 2 to 8 weeks old (possible pyloric stenosis)',
    'Vomiting that is green (bilious) at any age',
    'Your baby cannot keep any fluids down for more than 6 to 8 hours and shows signs of dehydration',
    'Forceful vomiting after a head injury',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vomiting in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Treating-Vomiting.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Vomiting in Infants.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-infants',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pyloric Stenosis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Pyloric-Stenosis-and-Pyloromyotomy.aspx',
    },
  ],
  relatedConcernSlugs: ['projectile-vomiting-baby', 'pyloric-stenosis', 'spit-up-vs-vomit', 'baby-vomiting-no-fever'],
};

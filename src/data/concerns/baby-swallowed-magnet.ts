import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-swallowed-magnet',
  title: 'Baby Swallowed a Magnet',
  category: 'medical',
  searchTerms: ['baby swallowed magnet', 'toddler ate magnet', 'baby ingested magnet', 'toddler swallowed magnet ball', 'baby magnetic toy danger', 'baby ate fridge magnet', 'toddler swallowed two magnets', 'magnet ingestion baby', 'baby swallowed Bucky Ball', 'baby magnetic bead'],
  quickAnswer: 'A swallowed magnet is a medical emergency, especially if more than one magnet was swallowed or if a magnet was swallowed along with a metallic object. Multiple magnets can attract each other through intestinal walls, pinching and perforating the bowel, which can cause life-threatening complications within hours. Even a single magnet should be evaluated because you may not know if your child also swallowed another one. Go to the emergency room immediately. Do NOT wait for symptoms to develop and do NOT try to induce vomiting.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies who can grasp objects (around 4-6 months and older) are at risk for magnet ingestion. Small, powerful rare-earth magnets (like those in desk toys, magnetic building sets, or fridge magnets that have come loose) are especially dangerous because they are small enough to swallow and strong enough to attract through tissue. If you suspect your baby has swallowed any magnet, go to the emergency room immediately. An X-ray will determine the number and location of magnets. Time is critical - do not wait for symptoms.' },
    { ageRange: '1-3 years', context: 'Toddlers are at the highest risk for magnet ingestion because they put everything in their mouths and may swallow magnets from toys, fridge magnets, or magnetic jewelry. The greatest danger is when two or more magnets (or a magnet and a metal object) are swallowed separately - they can attract through different loops of intestine, causing tissue death, perforation, and sepsis within hours. Symptoms may not appear immediately, and when they do (vomiting, abdominal pain, fever), the damage may already be serious. Any suspected magnet ingestion requires an immediate ER visit.' },
  ],
  whenNormal: ['There is no "normal" situation with magnet ingestion - always seek immediate emergency care'],
  whenToMention: ['Magnet ingestion always requires emergency care, not a routine visit'],
  whenToActNow: ['Your child swallowed or may have swallowed any magnet - go to the ER immediately', 'Your child swallowed multiple magnets - this is a surgical emergency', 'Abdominal pain, vomiting, or fever after possible magnet ingestion', 'You find a magnetic toy with pieces missing and your child may have swallowed them'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-swallowed-something-dangerous', 'baby-choking-on-liquids', 'baby-first-aid-kit-essentials'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Magnet Ingestion. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Dangers-of-Magnetic-Toys-and-Fake-Piercings.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Swallowed Objects. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Swallowed-Objects.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Magnet Ingestion in Children.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'water-bead-orbeez-ingestion-danger',
  title: 'Baby Swallowed a Water Bead (Orbeez) - What to Do',
  category: 'medical',
  searchTerms: [
    'baby swallowed water bead',
    'baby ate Orbeez',
    'water bead ingestion baby',
    'toddler swallowed water bead',
    'water bead stuck in baby',
    'Orbeez danger baby',
    'water bead intestinal blockage',
    'are water beads safe for babies',
    'water bead choking hazard',
    'baby swallowed gel bead',
    'sensory bead danger toddler',
    'water bead surgery baby',
    'expandable bead danger',
    'water bead recall',
    'water bead poisoning symptoms',
  ],
  quickAnswer:
    'Water beads (including Orbeez) are a serious danger to babies and young children. These small, colorful beads absorb water and expand to many times their original size. If swallowed, they can continue expanding inside the digestive tract, causing life-threatening intestinal blockage that often requires surgery. Over 20,000 water bead ingestions in children under 6 were reported to poison centers from 2019-2024. If your child swallowed a water bead, call Poison Control (1-800-222-1222) and seek emergency medical care immediately.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Babies explore everything by putting it in their mouths. Dehydrated water beads are small, colorful, and look like candy, making them extremely attractive to babies. Even a single swallowed bead can expand in the stomach or intestines over hours to days, growing up to 400 times its original size. Babies are at the highest risk because their digestive tract is small. Water beads should never be accessible to babies. If your baby puts a water bead in their mouth, even if you think they spit it out, contact Poison Control immediately.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are the most common age group for water bead ingestion because they are mobile, curious, and still mouthing objects. Symptoms of an ingested water bead may not appear for hours or even days after swallowing. Watch for vomiting, abdominal pain or distension, refusal to eat, constipation, and drooling. Water beads do not show up on standard X-rays, which makes diagnosis challenging. If you suspect ingestion, tell the emergency team specifically that it was a water bead so they can order appropriate imaging (CT scan or ultrasound).',
    },
    {
      ageRange: '2-5 years',
      context:
        'Preschoolers often encounter water beads in sensory play activities at home, daycare, or craft projects. At this age, children may also insert water beads into their ears or nose, which can cause tissue damage as the bead expands. If your child complains of ear pain, nose blockage, or abdominal symptoms after playing with water beads, seek medical evaluation. The CPSC implemented new safety standards in March 2026, but many unsafe products remain in homes.',
    },
  ],
  whenNormal: [
    'Your child played with water beads under direct supervision and did not put any in their mouth, nose, or ears.',
    'You removed all water beads from your home after learning about the risks.',
  ],
  whenToMention: [
    'Your child may have handled water beads and you are not sure if they ingested one.',
    'Your daycare or school uses water beads for sensory play and you want to discuss the risks.',
  ],
  whenToActNow: [
    'You saw or suspect your child swallowed a water bead - call Poison Control (1-800-222-1222) and go to the emergency room immediately, even if your child seems fine right now.',
    'Your child is vomiting, refusing to eat, has abdominal swelling, or is in pain after possible water bead exposure.',
    'Your child inserted a water bead into their ear or nose - do not try to remove it yourself, go to the ER.',
    'Your child has unexplained intestinal obstruction symptoms (vomiting, constipation, bloating) and had access to water beads in the past few days.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-swallowed-magnet',
    'high-choking-risk-foods-baby',
    'baby-choking-vs-gagging-difference',
    'baby-swallowed-something',
  ],
  sources: [
    {
      org: 'CPSC',
      citation: 'Consumer Product Safety Commission - Water Beads Safety Information Center',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Water-Beads-Information-Center',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - Warning About Water Bead Hazards',
      url: 'https://publications.aap.org/aapnews/news/28613',
    },
    {
      org: 'Poison Control',
      citation: 'National Capital Poison Center - Water Beads: A Colorful Hazard',
      url: 'https://www.poison.org/articles/water-beads',
    },
  ],
};

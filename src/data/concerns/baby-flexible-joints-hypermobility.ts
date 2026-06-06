import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-flexible-joints-hypermobility', title: 'My Baby Has Very Flexible, Bendy Joints', category: 'physical',
  searchTerms: ['baby hypermobile joints', 'baby very flexible', 'baby double jointed', 'baby joints too flexible', 'baby hypermobility', 'baby bendy limbs', 'baby loose joints', 'joint hypermobility baby', 'baby limbs bend too far', 'hypermobile infant'],
  quickAnswer: 'Joint hypermobility (having very flexible joints) is common in babies and children, affecting 10-30% of kids. It often runs in families and is usually benign. Hypermobile babies may walk later and appear clumsier, but most develop normally. However, very significant hypermobility with pain or recurrent dislocations should be evaluated.',
  byAge: [
    { ageRange: '0-6 months', context: 'All babies are more flexible than adults. It can be hard to identify hypermobility at this age. If your baby seems unusually floppy, your pediatrician will assess whether this is hypermobility versus low muscle tone.' },
    { ageRange: '6-12 months', context: 'Hypermobile babies may appear floppy and may sit and crawl later because their joints do not provide as much stability. They need stronger muscles to compensate for loose ligaments.' },
    { ageRange: '12-24 months', context: 'Hypermobile children may walk later and may be clumsier initially. They are working harder to stabilize their joints. Physical activity and play help build the muscle strength they need.' },
    { ageRange: '2-4 years', context: 'Benign hypermobility usually does not cause significant problems. If your child has joint pain, frequent falls, or avoids physical activities, physical therapy can help build stability. If joints dislocate frequently, further evaluation for connective tissue conditions is recommended.' },
  ],
  whenNormal: ['Hypermobility without pain.', 'Meeting motor milestones, even if on the later end.', 'Flexibility runs in the family.', 'Child is active and enjoying physical activities.'],
  whenToMention: ['Hypermobility is causing joint pain.', 'Motor milestones are significantly delayed.', 'Joints seem to partially dislocate.'],
  whenToActNow: ['Full joint dislocation.', 'Easy bruising, fragile skin, or other connective tissue concerns alongside hypermobility.'],
  relatedMilestones: ['gross-motor-sitting', 'gross-motor-walking'], showSelfReferral: true,
  relatedConcernSlugs: ['low-muscle-tone', 'baby-walking-late-18-months', 'baby-clicking-joints'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Joint Hypermobility in Children', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx' },
    { org: 'NIH', citation: 'Adib N, et al. Joint Hypermobility Syndrome in Childhood. Rheumatology. 2005;44(6)', url: 'https://pubmed.ncbi.nlm.nih.gov/15728418/' },
    { org: 'CDC', citation: 'CDC - Child Health', url: 'https://www.cdc.gov/ncbddd/childdevelopment/index.html' },
  ],
};

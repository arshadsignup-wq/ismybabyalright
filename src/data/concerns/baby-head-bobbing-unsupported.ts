import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-head-bobbing-unsupported',
  title: 'My Baby\'s Head Bobs When Unsupported',
  category: 'physical',
  searchTerms: [
    'baby head bobbing',
    'baby wobbly head unsupported',
    'baby head not steady',
    'baby head wobbles when sitting',
    'baby head bobs up and down',
    'baby can\'t keep head still',
    'baby head unstable',
    'baby nodding head involuntarily',
    'baby head control wobbly',
    'baby head sways when sitting',
  ],
  quickAnswer:
    'Some head wobbling is normal as babies develop head control between 2-4 months. A baby\'s head is proportionally large and heavy, so achieving steady control takes time. However, persistent head bobbing after 4 months, or rhythmic involuntary head movements, should be discussed with your pediatrician.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Head wobbling and bobbing is completely normal at this age. Your baby is just beginning to develop the neck muscles needed for head control. Always support your baby\'s head and neck when holding them. Tummy time helps build neck strength.',
    },
    {
      ageRange: '2-4 months',
      context:
        'As head control develops, you will notice gradually less wobbling. Some bobbing is still normal, especially when your baby is tired or distracted. By 4 months, your baby should be able to hold their head fairly steady when held upright, though some wobble during movements is still expected.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Head control should be mostly established by now. If your baby\'s head still bobs significantly when sitting supported, mention it to your pediatrician. They can check for low muscle tone or other factors. If the bobbing is rhythmic and involuntary (like nodding), this warrants evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Head control should be well established. Any new or persistent head bobbing at this age should be evaluated, particularly rhythmic head movements. While some babies develop benign head nodding or shaking as a habit, it is important to rule out other causes.',
    },
  ],
  whenNormal: [
    'Your baby is under 4 months and head wobbling is gradually improving.',
    'Head bobbing only happens when your baby is tired or overstimulated.',
    'Your baby can hold their head steady most of the time but has occasional wobbles.',
    'The wobbling is getting less frequent week by week.',
  ],
  whenToMention: [
    'Your baby is over 4 months and still has significant head bobbing when held upright.',
    'Your baby\'s head bobs rhythmically in a nodding or shaking pattern.',
    'Head control is not improving over time.',
  ],
  whenToActNow: [
    'Your baby had stable head control and has developed new head bobbing.',
    'Head bobbing is accompanied by eye movement changes, feeding difficulties, or developmental regression.',
  ],
  relatedMilestones: [
    'gross-motor-head-control',
    'gross-motor-sitting',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-head-control-delayed', 'head-lag', 'low-muscle-tone'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - Movement: Birth to 3 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-3-Months.aspx',
    },
    {
      org: 'CDC',
      citation: 'CDC - Important Milestones: Your Baby at 4 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4mo.html',
    },
    {
      org: 'NIH',
      citation: 'Palano GM, et al. Spasmus Nutans: A Clinical Study. Brain Dev. 2005;27(2):122-126',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};

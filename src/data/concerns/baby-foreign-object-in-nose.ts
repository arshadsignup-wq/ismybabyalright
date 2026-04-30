import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-foreign-object-in-nose',
  title: 'Baby Put Something Up Their Nose',
  category: 'physical',
  searchTerms: [
    'baby put something in nose',
    'toddler stuck something up nose',
    'toddler bead in nose',
    'toddler food in nose',
    'foreign body in nose child',
    'toddler nose smells bad one side',
    'toddler green discharge one nostril',
    'how to get object out of baby nose',
    'toddler toy piece in nose',
    'toddler stuffed something up nose',
  ],
  quickAnswer:
    'Toddlers frequently put small objects up their noses - beads, food, peas, small toy parts, tissue, and more. Sometimes you see it happen, but other times the first clue is a foul-smelling, one-sided nasal discharge days later. If you can see the object and your child is calm, you can try the "mother\'s kiss" technique (closing the clear nostril and gently puffing into your child\'s mouth). If you cannot see it or your first attempt fails, do not keep trying - see your pediatrician or visit urgent care.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Babies under 1 year rarely place objects in their own noses because they lack the fine motor control. If a young baby has one-sided nasal discharge, it is more likely from a cold or blocked duct. However, an older sibling could place something in a baby\'s nose, so consider this if you notice unexplained one-sided symptoms.',
    },
    {
      ageRange: '1-3 years',
      context:
        'This is the peak age for nasal foreign bodies. Toddlers are curious explorers who test where objects fit. Common items include beads, small food pieces (peas, beans, raisins), foam, tissue paper, small toy parts, and button batteries. The "mother\'s kiss" technique works best for smooth, round objects near the front of the nose: close the unaffected nostril with your finger, place your mouth over your child\'s mouth creating a seal, and give a short, sharp puff. This often pops the object out. Never use tweezers or forceps, as you may push it further in.',
    },
  ],
  whenNormal: [
    'You saw the object go in, the child is breathing fine, and you can see it near the nostril opening',
    'The object came out easily with one attempt of the mother\'s kiss technique',
    'A small amount of blood-tinged mucus after the object is removed',
  ],
  whenToMention: [
    'You suspect a foreign object but cannot see it',
    'Your toddler has persistent, foul-smelling discharge from one nostril only',
    'The object did not come out with a gentle attempt at home',
    'Your child has had recurrent episodes of putting things in their nose',
  ],
  whenToActNow: [
    'Your child put a button battery in their nose (this is an emergency - batteries cause chemical burns within hours)',
    'Your child is having difficulty breathing through the affected side',
    'The object has been in the nose for more than 24 hours and there is worsening swelling or discharge',
    'You pushed the object further in while trying to remove it',
    'Your child put a magnet in their nose',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-nosebleed', 'chronic-congestion', 'baby-foreign-object-in-ear', 'toddler-bad-breath'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Foreign Bodies in the Nose. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Foreign-Bodies-in-the-Nose.aspx',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Choking Prevention and First Aid.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Nasal Foreign Body. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459279/',
    },
  ],
};

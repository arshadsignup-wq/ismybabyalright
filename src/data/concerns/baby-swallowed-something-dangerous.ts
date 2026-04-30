import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-swallowed-something-dangerous',
  title: 'Baby Swallowed a Foreign Object',
  category: 'digestive',
  searchTerms: ['baby swallowed object', 'toddler swallowed coin', 'baby ate something', 'toddler swallowed toy', 'baby swallowed battery', 'baby swallowed button', 'toddler ingested foreign body', 'baby swallowed plastic', 'baby ate crayon', 'toddler swallowed bead'],
  quickAnswer: 'Babies and toddlers explore the world by putting things in their mouths, and accidental swallowing of small objects is common. Most small, smooth, non-toxic objects (like a small bead or coin) will pass through the digestive system without harm within 2-5 days. However, some swallowed objects are medical emergencies. Button batteries, magnets (especially multiple magnets), and sharp objects require immediate emergency care as they can cause serious internal injury within hours. If you know or suspect your child swallowed something, contact your pediatrician or go to the emergency room.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies under 1 year are at risk for swallowing small objects once they can grasp and bring things to their mouth (around 4-6 months). Common ingested items include buttons, beads, and small toy parts. Signs that a baby has swallowed something include gagging, drooling, refusing to eat, or pointing to the throat or chest. If you suspect your baby has swallowed something and they are breathing normally, call your pediatrician or poison control (1-800-222-1222) immediately. If choking, follow infant choking first aid.' },
    { ageRange: '1-3 years', context: 'Toddlers are the highest-risk age group for foreign body ingestion. Coins are the most commonly swallowed objects. Most smooth, small objects will pass through without treatment, but an X-ray may be needed to confirm the object\'s location and track its passage. Do NOT induce vomiting. Watch for signs of obstruction: vomiting, abdominal pain, refusing to eat, drooling, or failure to pass the object within 4-7 days. Always save the object after it passes so your doctor can confirm it has been fully expelled.' },
  ],
  whenNormal: ['Your child swallowed a small, smooth, non-toxic object (like a small bead) and is breathing and eating normally - still contact your pediatrician for guidance', 'The object passes in the stool within a few days'],
  whenToMention: ['Your child swallowed any foreign object - always inform your pediatrician', 'A swallowed coin or small smooth object has not passed in 4-7 days', 'Your child has mild symptoms like gagging or discomfort after swallowing something'],
  whenToActNow: ['Your child swallowed a button battery - this is a medical emergency requiring immediate ER evaluation', 'Your child swallowed a magnet, especially if more than one magnet or a magnet plus metal object', 'Your child swallowed a sharp object (pin, needle, tack, glass)', 'Difficulty breathing, drooling, inability to swallow, or chest/throat pain after swallowing an object', 'Vomiting, abdominal pain, or blood in stool after swallowing an object'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-choking-on-liquids', 'baby-swallowed-magnet', 'baby-foreign-object-in-nose', 'baby-foreign-object-in-ear'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Swallowed Objects. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Swallowed-Objects.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Button Battery Ingestion. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Button-Battery-Injuries-in-Children-A-Growing-Risk.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Foreign Body Ingestion in Children.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK551654/' },
  ],
};

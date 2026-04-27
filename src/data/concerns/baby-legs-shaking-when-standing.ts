import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-legs-shaking-when-standing',
  title: 'Baby Legs Shaking When Standing or Being Held Upright',
  category: 'physical',
  searchTerms: ['baby legs shaking when standing','baby legs trembling','baby legs shaking held upright','baby legs vibrate when standing','baby wobbly legs','baby tremor standing','baby legs shake when bearing weight','baby legs quiver','newborn legs shaking','baby jittery legs','baby legs tremble when excited','baby shaky legs normal'],
  quickAnswer: 'Leg shaking or trembling when a baby is held upright or beginning to stand is usually normal and caused by immature muscle control and developing nervous system. The muscles are working hard to support weight and may tremble from the effort - similar to how an adult\'s muscles shake during a challenging workout. This typically resolves as muscle strength and neurological control mature. Leg shaking that occurs only during weight-bearing activity and stops at rest is almost always benign.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborn jitteriness (trembling of the chin, arms, or legs) is common and usually normal. It is caused by the immature nervous system and typically resolves by 2-3 months. Jitteriness differs from seizures in important ways: jitteriness stops when you hold or flex the shaking limb, jitteriness is triggered by stimulation, and the baby is alert during jitteriness. Seizures do not stop when you hold the limb, are not triggered by stimulation, and the baby may seem altered or unresponsive. If in doubt, record a video and show your pediatrician.' },
    { ageRange: '3-6 months', context: 'When you hold your baby in a standing position, their legs may shake as they bear weight. This is their muscles learning to support their body weight and is a normal part of developing leg strength. The shaking should be intermittent, not constant, and should improve as they practice weight-bearing. If your baby enjoys being held upright and the shaking is brief, this is normal muscle development. If they seem uncomfortable or the shaking is intense and prolonged, mention it to your pediatrician.' },
    { ageRange: '6-12 months', context: 'As babies pull to stand and begin cruising, leg trembling during these activities is normal - their muscles are being challenged in new ways. The shaking should decrease over days to weeks as they gain strength and practice. If your baby\'s legs are consistently too weak to bear weight by 9-12 months, or if they collapse rather than just tremble, evaluation of muscle tone and strength is appropriate. Most babies are standing well with furniture support by 9-10 months.' },
    { ageRange: '12-24 months', context: 'New walkers often have shaky, unsteady legs as they learn to balance. This is normal and improves rapidly with practice. If your toddler has been walking for several months and their legs still shake or give out, or if they develop a new tremor in their legs, have it evaluated. Leg weakness or shakiness that develops after a period of walking normally could indicate a neurological or muscular issue. Occasional "wobbly days" during growth spurts or when tired are normal.' },
  ],
  whenNormal: ['Your baby\'s legs shake briefly when held in a standing position but stop when you sit them down','The shaking decreases over time as your baby gets stronger','Leg trembling happens during weight-bearing activities but not at rest','Your baby is meeting other motor milestones (rolling, sitting) on schedule'],
  whenToMention: ['Leg shaking persists beyond 6 months of age and is not improving','Your baby\'s legs seem unusually weak and cannot support any weight by 9-10 months','The shaking occurs at rest, not just during weight-bearing','Your baby\'s legs are stiff or seem difficult to bend alongside the shaking'],
  whenToActNow: ['Rhythmic shaking that does not stop when you hold the leg firmly - could be a seizure','Sudden onset of leg weakness or inability to stand in a baby who was previously standing well','Leg shaking with fever, irritability, and refusal to bear weight - could indicate bone or joint infection'],
  relatedMilestones: ['gross-motor-walking','gross-motor-standing'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-clenching-fists-after-3-months','baby-non-febrile-seizure','baby-shaking-head-side-to-side'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Movement Milestones. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-Three-Months.aspx' },
    { org: 'NIH', citation: 'Palmar B, et al. Neonatal Jitteriness vs. Seizures. Neonatology Today. 2018.', url: 'https://pubmed.ncbi.nlm.nih.gov/29550340/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones: Your Baby by 12 Months.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html' },
  ],
};

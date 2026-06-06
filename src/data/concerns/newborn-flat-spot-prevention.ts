import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-flat-spot-prevention',
  title: 'Preventing Flat Spots on Baby\'s Head (Plagiocephaly)',
  category: 'physical',
  searchTerms: ['flat spot baby head', 'plagiocephaly prevention', 'baby head flat on one side', 'flat head syndrome', 'baby head shape uneven', 'preventing flat head baby', 'tummy time flat head', 'positional plagiocephaly', 'baby helmet head shape', 'newborn flat spot back head'],
  quickAnswer: 'Flat spots on a baby\'s head (positional plagiocephaly) are very common because newborn skulls are soft and malleable. Prevention strategies include regular tummy time when awake, alternating head position during sleep, and minimizing time in car seats and bouncers when not traveling. Most mild flat spots improve on their own as baby grows.',
  byAge: [
    { ageRange: '0-1 month', context: 'A baby\'s skull is made of soft, flexible bones that can become flattened from sustained pressure in one position. Since babies must sleep on their backs for safety, some flattening is common. Prevention strategies from birth: alternate which direction baby\'s head faces during sleep (babies tend to look toward the room or light, so alternate which end of the crib their head is at), provide supervised tummy time starting from day one (even a few minutes several times a day), alternate which arm you use for feeding and holding, and limit time in car seats, swings, and bouncers when baby is not traveling. If baby has a strong head-turning preference, address it early with repositioning.' },
    { ageRange: '1-3 months', context: 'This is when flat spots most commonly develop and become noticeable. Increase tummy time gradually, aiming for 15-30 minutes total per day by 2 months. When baby is on their back, use toys and your voice to encourage looking in both directions. Your pediatrician will monitor head shape at well-visits. If a flat spot is developing, they may recommend increased repositioning, tummy time, or evaluation for torticollis, which is a common contributing factor.' },
    { ageRange: '3-6 months', context: 'As baby gains head control and spends more time upright, flat spots often begin to improve naturally. If a significant flat spot has not improved with repositioning by 4-6 months, your pediatrician may discuss referral for a cranial molding helmet. Helmet therapy is most effective between 4-8 months when the skull is still rapidly growing and most malleable. Not all flat spots require a helmet; many improve on their own.' },
    { ageRange: '6-12 months', context: 'Most mild to moderate flat spots continue to improve as baby spends more time sitting, crawling, and upright. Skull growth slows after 12 months, so significant improvements from repositioning alone become less likely. Helmet therapy, if needed, is typically completed by 12 months. Hair growth also helps camouflage remaining mild asymmetry. Long-term outcomes are excellent for the vast majority of children.' },
  ],
  whenNormal: ['Mild flattening on one side or the back of the head', 'Flat spot improves as baby increases tummy time and upright play', 'Baby has no positional preference or torticollis contributing to the flat spot'],
  whenToMention: ['You notice a flat spot developing on one side or the back of the head', 'The flat spot seems to be worsening despite repositioning', 'Baby has a strong head-turning preference that may be contributing to the flat spot'],
  whenToActNow: ['Severe or rapidly worsening head shape asymmetry', 'Head shape changes with a bulging fontanelle, vomiting, or irritability, which could indicate increased intracranial pressure rather than positional flattening', 'Concern that the skull sutures may be fusing prematurely (craniosynostosis): a ridge along the skull or abnormal head shape present at birth'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Prevention and Management of Positional Skull Deformities in Infants. Pediatrics. 2011.', url: 'https://publications.aap.org/pediatrics/article/128/6/1236/30809/Prevention-and-Management-of-Positional-Skull' },
    { org: 'NIH', citation: 'National Library of Medicine. Positional Plagiocephaly. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK538175/' },
  ],
  relatedConcernSlugs: ['newborn-prefers-one-position', 'newborn-tummy-time-too-early', 'newborn-safe-sleep-positioning'],
};

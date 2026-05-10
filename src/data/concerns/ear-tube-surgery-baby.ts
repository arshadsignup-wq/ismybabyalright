import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'ear-tube-surgery-baby',
  title: 'Ear Tube Surgery for Babies',
  category: 'medical',
  searchTerms: [
    'ear tubes baby',
    'tympanostomy tubes infant',
    'baby needs ear tubes',
    'ear tube surgery toddler',
    'PE tubes baby',
    'myringotomy baby',
    'ear tubes for recurrent ear infections',
    'when do babies need ear tubes',
  ],
  quickAnswer:
    'Ear tube surgery (myringotomy with tympanostomy tube placement) is one of the most common childhood surgeries. Tiny tubes are placed through the eardrum to allow fluid drainage and air circulation in the middle ear. It is typically recommended for babies and toddlers with recurrent ear infections (3 or more in 6 months, or 4 or more in a year) or persistent fluid behind the eardrum causing hearing loss. The procedure takes about 10-15 minutes under brief general anesthesia and most children recover quickly.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Ear tube placement at this young age is uncommon but may be considered in specific situations, such as babies with craniofacial abnormalities (like cleft palate) who are prone to chronic middle ear fluid. If your young baby has persistent fluid affecting hearing, your ENT specialist will carefully weigh the benefits of early intervention against the risks of anesthesia at this age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some babies begin experiencing recurrent ear infections in this age range, particularly those in group daycare or with older siblings. At this stage, doctors usually try to manage infections with antibiotics and watchful waiting before recommending tubes. If your baby has already had multiple infections, your pediatrician may begin tracking them to determine if tube placement is warranted.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a common age for ear tube placement. Babies who have had 3 or more ear infections in 6 months, or who have persistent fluid behind the eardrums for more than 3 months with associated hearing loss, are strong candidates. The procedure is very well studied in this age group, and the brief anesthesia is considered safe. Most babies return to normal activity the same day.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers who continue to have frequent ear infections or persistent fluid may benefit significantly from tubes, especially since this is a crucial time for speech and language development. After tube placement, most children experience immediate improvement in hearing. Tubes typically stay in place for 6-18 months before falling out on their own. Your child may need a second set if problems recur after the first set falls out.',
    },
  ],
  whenNormal: [
    'Your baby has had one or two ear infections that resolved with antibiotics  -  tubes are not typically needed for occasional infections.',
    'Your doctor notes a small amount of fluid after a recent ear infection that clears within a few weeks.',
    'Your child had tubes placed and they fell out on their own after 6-18 months  -  this is the expected outcome.',
    'There is mild temporary ear drainage after tube placement  -  this is normal and expected.',
  ],
  whenToMention: [
    'Your baby has had 3 or more ear infections in the past 6 months, or 4 or more in the past year.',
    'Your baby has had fluid behind the eardrums for more than 3 months with hearing concerns.',
    'Your toddler has existing ear tubes and you notice persistent drainage, foul smell, or the tube appears to have come out.',
  ],
  whenToActNow: [
    'Your baby with ear tubes develops sudden heavy bleeding from the ear, high fever with ear drainage, or severe ear pain  -  seek same-day medical evaluation.',
    'Your child appears to have sudden significant hearing loss after tubes fall out  -  this may indicate fluid reaccumulation requiring prompt evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Ear Tubes (Tympanostomy Tubes). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Tubes.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Ear Infections in Children.',
      url: 'https://www.nidcd.nih.gov/health/ear-infections-children',
    },
  ],
};

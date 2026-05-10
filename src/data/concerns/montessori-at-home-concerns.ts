import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'montessori-at-home-concerns',
  title: 'Montessori at Home Concerns',
  category: 'behavior',
  searchTerms: [
    'montessori at home toddler',
    'is montessori right for my baby',
    'montessori floor bed safety',
    'montessori activities for toddler',
    'montessori vs traditional parenting',
    'montessori not working for my toddler',
    'montessori child too independent',
    'montessori open shelves toddler mess',
  ],
  quickAnswer:
    'Montessori principles at home — child-sized furniture, accessible materials, independence in daily routines, and following the child\'s interests — can support development beautifully. However, parents sometimes worry they are not doing it "right" or feel pressure to create a perfect Montessori environment. The most important Montessori principle is respecting your child\'s individual development and providing opportunities for independence. You do not need special equipment or a perfect setup to benefit from Montessori-inspired approaches.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Montessori infant principles focus on a calm, uncluttered environment, simple black-and-white visual stimuli, and responsive caregiving. A Montessori floor bed is an option some families explore, but safe sleep guidelines (firm, flat surface, no loose items) always take priority. Traditional cribs are perfectly compatible with Montessori principles.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Offer simple, high-contrast toys rotated regularly. Provide uninterrupted floor time for movement development. A mirror at floor level and a few carefully chosen objects are sufficient. The focus is on observation — watching what your baby is interested in and providing opportunities to explore.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become mobile, Montessori principles emphasize a baby-proofed environment where the child can freely explore. Low shelves with a few accessible toys, a weaning table for early independent eating, and freedom of movement support development. Adapting your home does not need to be expensive — safety and accessibility are the priorities.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddler Montessori focuses on practical life skills — pouring, dressing, food preparation, cleaning up. Not every toddler will engage with these activities in the idealized way shown online. A child who would rather throw blocks than stack them is behaving normally. Adapt Montessori principles to your child rather than trying to make your child fit a Montessori ideal.',
    },
  ],
  whenNormal: [
    'Your toddler is not interested in the Montessori activities you have set up — children have their own developmental timelines and interests',
    'Your home does not look like the Montessori accounts you follow online — the philosophy matters more than the aesthetics',
    'Your child makes messes with accessible materials — this is learning in action',
    'You blend Montessori ideas with other approaches that work for your family',
  ],
  whenToMention: [
    'You are concerned your child is not meeting developmental milestones regardless of your parenting approach — discuss the milestones themselves, not the method',
    'The pressure to implement Montessori perfectly is causing you significant stress or anxiety',
    'Your child has specific needs (sensory processing differences, developmental delays) that may require adapted approaches',
  ],
  whenToActNow: [
    'Montessori floor bed or other setup elements have resulted in a safety incident — a child falling, accessing unsafe areas at night, or injury from unsupervised exploration',
    'Your child is showing signs of developmental delay that need evaluation regardless of your parenting philosophy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'helicopter-parenting-effects',
    'free-range-parenting-safety',
    'gentle-parenting-when-not-working',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'Lillard, A. et al. Montessori Preschool Elevates and Equalizes Child Outcomes. Child Development. 2017.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29040641/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Power of Play: A Pediatric Role in Enhancing Development. Pediatrics. 2018.',
      url: 'https://publications.aap.org/pediatrics/article/142/3/e20182058/38649/The-Power-of-Play-A-Pediatric-Role-in-Enhancing',
    },
  ],
};

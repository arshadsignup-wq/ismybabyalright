import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'straw-cup-training-difficulty',
  title: "My Baby Can't Figure Out How to Use a Straw Cup",
  category: 'feeding',
  searchTerms: [
    'baby can\'t use straw cup',
    'teaching baby straw cup',
    'baby straw drinking difficulty',
    'how to teach baby to drink from straw',
    'baby won\'t suck on straw',
    'baby chewing straw instead of sucking',
    'straw cup training',
    'baby bites straw',
    'baby doesn\'t understand straw',
    'when can baby use straw cup',
  ],
  quickAnswer:
    'Learning to drink from a straw is a new skill that takes practice. Most babies can learn between 6 and 12 months. You can teach by placing a straw in liquid, covering the top to trap liquid, and releasing it into baby\'s mouth. Some babies learn quickly while others need weeks of practice.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Straw cups are not appropriate for babies this age. All nutrition should come from breast milk or formula.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Some babies can start learning straw drinking around 6 months, but many are not ready yet. If you want to introduce a straw, try the straw dipping technique: dip a straw in liquid, hold your finger over the top to trap a small amount, place it in baby\'s mouth, and release.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is a good time to start straw cup practice. Use the dipping technique or try a honey bear straw bottle where you can squeeze liquid up the straw to show baby how it works. Many babies bite the straw at first rather than sucking, which is completely normal. Keep sessions short and pressure-free.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Most babies can master straw drinking with practice during this period. If your baby still struggles, continue practicing at meals. Some babies do better with shorter, wider straws or weighted straws that stay in the liquid. Straw drinking builds oral motor muscles important for speech development.',
    },
    {
      ageRange: '12-24 months',
      context:
        'If your toddler still cannot drink from a straw by this age, keep practicing and consider trying different straw types. If your toddler also has difficulty with other oral motor tasks like chewing or making certain sounds, mention it to your pediatrician as a feeding or speech evaluation may be helpful.',
    },
  ],
  whenNormal: [
    'Baby bites or chews on the straw instead of sucking',
    'Baby needs several weeks of practice to learn straw drinking',
    'Baby can drink from a straw sometimes but not consistently',
    'Baby is under 12 months and still learning',
  ],
  whenToMention: [
    'Baby is over 15 months and cannot drink from a straw despite regular practice',
    'Baby also has difficulty sucking from a bottle or breast',
    'Baby has weakness in facial muscles or drools excessively',
  ],
  whenToActNow: [
    'Baby cannot suck or swallow liquids from any source',
    'Baby is showing signs of dehydration',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-wont-drink-from-cup', 'baby-refusing-sippy-cup', 'sippy-cup-vs-straw-cup'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cup Training and Oral Motor Development. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Oral Motor Skill Development in Infants. Journal of Pediatrics, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};

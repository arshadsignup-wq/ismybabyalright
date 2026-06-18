import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'adjusted-age-milestones-preemie',
  title: 'Should I Use Adjusted Age for My Preemie\'s Milestones?',
  category: 'physical',
  searchTerms: [
    'adjusted age milestones preemie',
    'corrected age premature baby',
    'preemie developmental milestones',
    'when to stop using adjusted age',
    'adjusted age vs actual age milestones',
    'premature baby behind on milestones',
    'corrected age calculator',
    'preemie milestone chart',
    'when should preemie sit crawl walk',
    'premature baby development expectations',
  ],
  quickAnswer:
    'Yes — for premature babies, developmental milestones should be assessed using adjusted (corrected) age, not chronological age, until at least 2 years of age. Adjusted age is calculated by subtracting the number of weeks your baby was born early from their actual age. For example, a 6-month-old born 2 months early would have an adjusted age of 4 months, and should be assessed against 4-month milestones. Most pediatricians use adjusted age for developmental assessment through age 2-3, and for growth charts through age 2.',
  byAge: [
    {
      ageRange: '0-6 months corrected age',
      context:
        'In the early months, the difference between chronological and adjusted age is most significant. A baby born at 28 weeks has 3 months of "catch-up" to do. Compare your baby\'s skills to their adjusted age, not their birth date. It is common for well-meaning family members or even some healthcare providers to forget to use adjusted age — advocate for your baby by reminding them. Most preemies make rapid developmental progress during this period.',
    },
    {
      ageRange: '6-12 months corrected age',
      context:
        'Many preemies begin to close the developmental gap during this period, though the rate of catch-up varies. Motor milestones (sitting, crawling) may be slightly delayed even by adjusted age, particularly for babies who had a long NICU stay or medical complications. Physical therapy can help if your baby is behind. Social and cognitive development often catches up faster than motor skills.',
    },
    {
      ageRange: '12-24 months corrected age',
      context:
        'By 12-18 months adjusted age, many preemies have caught up to their full-term peers in most developmental areas. Walking may be later by adjusted age for some preemies, particularly those born very early or those with neurological concerns. Language development should be tracked carefully — early intervention for speech delays is highly effective.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Most healthcare providers stop using adjusted age by age 2-3, as the difference becomes less significant. By this point, the majority of preemies without major complications are developmentally similar to their peers. If your child still has significant delays at this age, continued developmental support and evaluation is appropriate. Some subtle differences in executive function or attention may persist into school age and benefit from educational support.',
    },
  ],
  whenNormal: [
    'Your preemie is meeting milestones appropriate for their adjusted age, even if they seem "behind" compared to same-age term babies',
    'Your baby is progressing steadily, even if the pace is slower than term babies',
    'Your preemie catches up in some areas faster than others — this uneven development is typical',
  ],
  whenToMention: [
    'Your baby is not meeting milestones even when adjusted age is used',
    'Your baby seems to have lost skills they previously had (regression)',
    'You notice significant asymmetry — your baby strongly favors one hand or one side of the body before 12 months',
    'Your baby is not babbling, making eye contact, or showing social engagement by 6 months adjusted age',
  ],
  whenToActNow: [
    'Your baby has seizures or unusual repetitive movements — seek immediate medical evaluation',
    'Your baby suddenly stops feeding, becomes floppy or unresponsive — call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'vulnerable-child-syndrome-post-nicu',
    'periventricular-leukomalacia-pvl',
    'bronchopulmonary-dysplasia-bpd',
    'nicu-parent-trauma',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Follow-Up of Preterm Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Preemie-Milestones.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Developmental Follow-Up of Preterm Infants. Clinics in Perinatology, 2018.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29502768/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Your Premature Baby\'s Growth and Developmental Milestones.',
      url: 'https://www.marchofdimes.org/find-support/topics/birth/your-premature-babys-growth-and-developmental-milestones',
    },
  ],
};

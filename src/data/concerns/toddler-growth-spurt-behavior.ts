import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-growth-spurt-behavior',
  title: 'My Toddler\'s Behavior Changes During Growth Spurts',
  category: 'physical',
  searchTerms: ['toddler growth spurt behavior', 'toddler cranky growth spurt', 'toddler eating more growth spurt', 'toddler sleeping more growth spurt', 'growth spurt signs toddler', 'toddler growth spurt hungry', 'toddler growth spurt fussy', 'when do toddlers have growth spurts', 'toddler growth spurt symptoms', 'growth spurt irritability toddler'],
  quickAnswer: 'Growth spurts in toddlers can cause temporary behavior changes including increased hunger, extra sleepiness, fussiness, and clinginess. These episodes typically last a few days to a week and are a normal part of development. Growth spurts are less predictable in toddlers than in babies but may occur every few months.',
  byAge: [
    { ageRange: '12-18 months', context: 'Growth spurts may occur every 2-3 months. Your toddler may eat voraciously for a few days, sleep more, and be clingier. Some parents notice their child\'s shoes or clothes suddenly seem too small. These are temporary phases.' },
    { ageRange: '18-24 months', context: 'Growth spurts continue but overall growth rate slows compared to infancy. Your toddler may go through periods of increased appetite followed by periods of pickier eating. Both patterns are normal.' },
    { ageRange: '2-3 years', context: 'Growth spurts become less frequent but can still cause temporary behavior changes. Growing pains (leg aches at night) may begin during this period. Offering extra nutritious snacks during high-appetite periods supports healthy growth.' },
    { ageRange: '3-4 years', context: 'Growth continues at a steady pace with occasional spurts. By this age, children typically gain about 4-5 pounds and 2-3 inches per year. Behavior changes during growth spurts are usually mild.' },
  ],
  whenNormal: ['Increased hunger and fussiness lasting a few days.', 'Your toddler sleeps more than usual for a short period.', 'Behavior returns to normal within a week.', 'Your toddler is otherwise healthy.'],
  whenToMention: ['Behavior changes last more than 2 weeks.', 'Your toddler has persistent pain or discomfort.', 'Appetite changes are extreme and prolonged.'],
  whenToActNow: ['Behavior changes are accompanied by fever, weight loss, or developmental regression.', 'Pain is severe or interferes with walking or sleep.'],
  relatedMilestones: ['growth-weight', 'growth-length'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-growing-pains-legs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Growth and Development', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx' },
    { org: 'CDC', citation: 'CDC - Child Development: Toddlers', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
    { org: 'NIH', citation: 'Lampl M, et al. Saltation and Stasis: A Model of Human Growth. Science. 1992;258(5083)', url: 'https://pubmed.ncbi.nlm.nih.gov/1439819/' },
  ],
};

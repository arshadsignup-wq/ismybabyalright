import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-gas-pain-signs',
  title: 'Gas Discomfort in Newborns',
  category: 'digestive',
  searchTerms: ['baby gas pain', 'newborn gassy discomfort', 'baby gas signs', 'newborn gas relief', 'baby fussy from gas', 'infant gas drops', 'newborn gas pain remedy', 'baby pulling legs up gas', 'gassy baby what to do', 'newborn trapped gas'],
  quickAnswer: 'Gas is very common in newborns because their digestive systems are immature. Signs include fussiness, pulling legs up, a hard or distended tummy, and excessive flatulence. Burping during and after feeds, bicycle leg exercises, tummy time, and gentle tummy massage can help. Gas drops (simethicone) are safe but have limited evidence of effectiveness.',
  byAge: [
    { ageRange: '0-1 month', context: 'All babies have gas, but some seem more affected than others. Newborns swallow air during feeding and crying, and their immature digestive systems produce gas during normal digestion. Signs of gas discomfort include: fussiness especially after feeds, pulling legs up toward the belly, a round or firm abdomen, arching the back, and excessive passing of gas. Helpful strategies include: burping baby thoroughly during and after every feed, holding baby upright for 15-20 minutes after feeds, gentle bicycle leg movements, tummy massage in a clockwise direction, and supervised tummy time.' },
    { ageRange: '1-3 months', context: 'Gas discomfort often peaks around 4-6 weeks and then gradually improves. Continue burping techniques and other comfort measures. If gas is severe and baby is very fussy, your pediatrician may evaluate for underlying causes such as milk protein sensitivity, formula intolerance, or reflux. Probiotic drops (such as Lactobacillus reuteri) may be discussed.' },
    { ageRange: '3-6 months', context: 'Gas discomfort typically improves significantly as the digestive system matures. If it persists, discuss with your pediatrician.' },
    { ageRange: '6-12 months', context: 'Gas may recur with the introduction of new solid foods. Introduce new foods one at a time and observe your baby\'s response.' },
  ],
  whenNormal: ['Some fussiness after feeds that resolves with burping', 'Passing gas frequently without significant distress', 'A slightly round belly that is soft and not painful to gentle pressure', 'Improvement with age and maturity of the digestive system'],
  whenToMention: ['Gas discomfort seems severe and persistent despite comfort measures', 'Baby is excessively fussy for hours each day (could be colic)', 'You notice blood or mucus in stools along with gassiness'],
  whenToActNow: ['Hard, distended abdomen with vomiting (especially green/bile) that could indicate bowel obstruction', 'Baby is inconsolable, has a fever, or appears very ill'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Gas and Crying. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Infant Gas and Colic. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK537298/' },
  ],
  relatedConcernSlugs: ['excessive-gas-baby', 'colic-vs-gas', 'newborn-straining-grunting-poop'],
};

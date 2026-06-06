import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-choking-during-feeding',
  title: 'Choking While Eating in Newborns',
  category: 'feeding',
  searchTerms: ['baby choking while feeding', 'newborn choking breastfeeding', 'baby choking on bottle', 'newborn sputtering during feed', 'baby gulping choking milk', 'fast letdown choking baby', 'overactive letdown baby choking', 'baby coughing during feed', 'newborn choking nursing', 'baby can\'t keep up with milk flow'],
  quickAnswer: 'Some babies choke or sputter during feeding, often due to a fast milk flow (overactive letdown in breastfeeding or fast-flow bottle nipple). This is common and usually manageable with positioning changes and flow control. Feeding in a more reclined position or paced bottle feeding can help. Persistent choking during every feed should be evaluated.',
  byAge: [
    { ageRange: '0-1 month', context: 'Choking during breastfeeding often occurs because of an overactive letdown reflex, where milk flows faster than the baby can swallow. Strategies include: feeding in a laid-back or reclined position (gravity slows flow), unlatching briefly when the letdown begins and catching the initial spray, and feeding on one breast per session if oversupply is an issue. For bottle-fed babies, use a slow-flow nipple and practice paced bottle feeding (holding the bottle horizontally and taking breaks). If your baby consistently chokes, coughs, or turns blue during feeds, evaluation for swallowing problems (dysphagia) or airway issues may be needed.' },
    { ageRange: '1-3 months', context: 'As your baby grows, they become better at managing milk flow. Choking during feeding typically improves. If you are breastfeeding and have oversupply, it may naturally regulate during this period. Continue using positioning strategies that help.' },
    { ageRange: '3-6 months', context: 'Most feeding-related choking has resolved as babies become efficient feeders. If it persists, consider evaluation by a feeding specialist.' },
    { ageRange: '6-12 months', context: 'Choking on liquids should be rare. As solid foods are introduced, gagging (a protective reflex) is different from choking and is normal during feeding development.' },
  ],
  whenNormal: ['Occasional sputtering at the beginning of a feed when milk first lets down', 'Baby quickly recovers and resumes feeding', 'Improvement with position changes or nipple size adjustments', 'Baby is gaining weight well despite occasional choking episodes'],
  whenToMention: ['Choking occurs at every feed despite trying different positions', 'Baby seems to avoid or dread feeding', 'Frequent coughing or wet-sounding breathing after feeds'],
  whenToActNow: ['Baby turns blue during feeding and does not recover quickly', 'Recurrent aspiration pneumonia or chronic wet-sounding breathing suggesting milk going into the lungs', 'Baby refuses to feed, is losing weight, or is severely distressed during feeding'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breastfeeding Challenges. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Pediatric Dysphagia. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK559191/' },
  ],
  relatedConcernSlugs: ['newborn-choking-on-mucus', 'newborn-gagging-reflex-strong', 'aspiration-during-feeding'],
};

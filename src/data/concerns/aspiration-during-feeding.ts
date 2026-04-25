import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'aspiration-during-feeding',
  title: 'I\'m Worried My Baby Is Aspirating During Feeds',
  category: 'feeding',
  searchTerms: [
    'baby aspirating during feeding',
    'baby inhaling milk into lungs',
    'silent aspiration baby',
    'baby choking on milk frequently',
    'aspiration pneumonia baby',
    'baby swallowing problems',
    'dysphagia in babies',
    'baby wet breathing after feeding',
    'milk going into baby lungs',
    'baby raspy breathing after bottle',
  ],
  quickAnswer:
    'Aspiration means liquid or food enters the airway instead of the stomach. Occasional coughing during feeds is common and does not usually indicate aspiration. True aspiration is less common and may present as recurrent respiratory infections, a wet or gurgly voice after feeds, or chronic cough. If you are concerned, a swallow study can provide a definitive answer.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are still developing their swallowing coordination, and brief coughing or sputtering during feeds is usually normal. Premature babies and those with neurological conditions are at higher risk for true aspiration. Warning signs include consistently wet or gurgly breathing after feeds, feeding that takes longer than 30 to 40 minutes, poor weight gain, and recurrent chest congestion or pneumonia. If your baby was premature or has other medical conditions, your care team is likely already monitoring for this.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, most babies have developed efficient suck-swallow-breathe coordination. If your baby continues to cough, choke, or sound congested during or after every feed, this pattern should be evaluated. A modified barium swallow study, where your baby drinks milk mixed with barium while being observed under x-ray, can show exactly how your baby is swallowing and whether liquid is entering the airway.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Aspiration concerns at this age may involve both liquids and solids as your baby transitions to table foods. Some babies aspirate thin liquids but handle thickened liquids and purees well. If aspiration is confirmed, a speech-language pathologist can recommend strategies such as thickening liquids, adjusting feeding positions, or using specific bottle nipples to make feeding safer.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers who continue to have feeding difficulties, chronic cough during meals, or recurrent respiratory infections should be evaluated for ongoing aspiration. Some children outgrow swallowing difficulties as their oral motor skills mature, while others may need ongoing therapy. A pediatric feeding team, typically including a speech-language pathologist, occupational therapist, and sometimes a pulmonologist, can create a comprehensive plan.',
    },
  ],
  whenNormal: [
    'Your baby coughs occasionally at the start of a feed when milk flows quickly but recovers immediately',
    'Your baby had one episode of coughing during a feed but otherwise feeds comfortably and efficiently',
    'Your baby gags on new solid food textures, which is a normal protective reflex different from aspiration',
  ],
  whenToMention: [
    'Your baby consistently sounds wet, gurgly, or congested during or after feeds',
    'Feeds routinely take longer than 30 to 40 minutes and your baby seems to tire out',
    'Your baby has had more than one episode of unexplained chest congestion or wheezing',
  ],
  whenToActNow: [
    'Your baby has recurrent pneumonia or respiratory infections that your pediatrician suspects may be aspiration-related',
    'Your baby turns blue, becomes limp, or has significant breathing difficulty during feeding',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Pediatric Dysphagia: Overview.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/pediatric-dysphagia/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Aspiration in Infants and Children. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatricsinreview/article/40/2/e1/462/Aspiration-in-Infants-and-Children',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Swallowing Disorders (Dysphagia) in Children. NIDCD.',
      url: 'https://www.nidcd.nih.gov/health/swallowing-disorders-in-children',
    },
  ],
};

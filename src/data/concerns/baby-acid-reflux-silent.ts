import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-acid-reflux-silent',
  title: 'Silent Reflux in Baby',
  category: 'digestive',
  searchTerms: [
    'baby silent reflux',
    'baby reflux no spit up',
    'baby reflux not spitting up',
    'baby silent reflux symptoms',
    'infant silent reflux signs',
    'baby reflux swallowing back down',
    'baby acid reflux silent',
    'baby reflux arching back',
    'baby reflux uncomfortable no vomit',
    'laryngopharyngeal reflux baby',
  ],
  quickAnswer:
    'Silent reflux occurs when stomach acid rises into the esophagus and throat but is swallowed back down rather than spit up. Babies with silent reflux may be fussy during or after feeds, arch their back, have hoarse crying, or refuse to eat, but without visible spitting up. It can be harder to diagnose than typical reflux because there is no obvious spit-up.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Silent reflux is common in young infants because the lower esophageal sphincter is still immature. Signs include fussiness during feeds, pulling off the breast or bottle, hiccups, congestion-like sounds, and arching. Keeping the baby upright for 20 to 30 minutes after feeds and offering smaller, more frequent feeds can help.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Symptoms may peak around 4 months and begin to improve. If your baby is gaining weight well and is not in significant distress, conservative measures like upright positioning and paced feeding are usually sufficient. If symptoms are severe and affecting feeding or weight gain, discuss treatment options with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies sit upright more and start solid foods, silent reflux usually improves significantly. Thicker feeds and solid foods naturally reduce acid reflux episodes. Most babies outgrow reflux between 6 and 12 months as the esophageal sphincter matures.',
    },
    {
      ageRange: '12-24 months',
      context:
        'If silent reflux symptoms persist beyond 12 months, your pediatrician may consider further evaluation or referral to a pediatric gastroenterologist. Persistent symptoms may overlap with cow\'s milk protein allergy or eosinophilic esophagitis.',
    },
  ],
  whenNormal: [
    'Mild fussiness during feeds that resolves with upright positioning and smaller feeds',
    'Occasional back arching during feeds in a baby who is gaining weight well',
    'Symptoms that are gradually improving over the first 6 months',
  ],
  whenToMention: [
    'Your baby seems uncomfortable during most feeds but rarely spits up',
    'There is persistent back arching, fussiness, or feed refusal',
    'You suspect silent reflux and want to discuss management strategies',
  ],
  whenToActNow: [
    'Your baby is refusing feeds and losing weight or not gaining weight',
    'Your baby has episodes of choking, gagging, or turning blue during or after feeds',
    'Persistent vomiting (not just silent reflux) with poor weight gain or bilious (green) vomit',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Gastroesophageal Reflux in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/GERD-Reflux.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. GER and GERD in Infants.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-infants',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Report on Gastroesophageal Reflux. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/doi/10.1542/peds.2018-1061/37422/',
    },
  ],
  relatedConcernSlugs: ['reflux', 'spitting-up', 'baby-reflux-vs-gerd-difference'],
};

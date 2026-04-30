import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-arching-and-crying-during-feeding',
  title: 'Baby Arching Back and Crying During Feeding',
  category: 'behavior',
  searchTerms: ['baby arching during feeding', 'baby arching back while eating', 'baby crying during feeding', 'baby pulls away from bottle', 'baby arches back breastfeeding', 'baby fighting bottle', 'baby screaming while feeding', 'baby won\'t eat arching', 'baby uncomfortable feeding', 'baby stiffens during feeding'],
  quickAnswer: 'A baby who arches their back and cries during feeding is often showing signs of discomfort. The most common cause is gastroesophageal reflux (GER) - stomach acid flowing back into the esophagus causes a burning sensation, and the baby arches to try to relieve it. Other causes include an improper latch (breastfeeding), a bottle nipple with too fast or too slow a flow, ear infection pain worsened by swallowing, oral thrush, or being overstimulated. If this is happening regularly, discuss it with your pediatrician.',
  byAge: [
    { ageRange: '0-12 months', context: 'Arching during feeding is most commonly associated with reflux, which peaks around 4 months and usually improves by 12 months. Babies with reflux may arch their back, pull off the breast or bottle, cry, and refuse to continue feeding. Other signs of reflux include spitting up frequently, wet-sounding burps, and fussiness after feeds. If breastfeeding, check for tongue or lip ties that may cause pain during feeding. If bottle feeding, try a slower nipple flow and paced feeding. Keep your baby upright for 20-30 minutes after feeds. Your pediatrician may recommend positioning changes, thickened feeds, or medication if reflux is severe.' },
    { ageRange: '1-3 years', context: 'Toddlers who arch and cry during meals are less likely to have reflux (which usually resolves by 12-18 months) and more likely to be experiencing food refusal from a sensory or behavioral standpoint. However, toddlers with ongoing reflux or esophageal irritation may refuse certain textures or temperatures. Some toddlers arch and cry at mealtime due to the desire for independence (wanting to self-feed), disliking the food offered, feeling pressured to eat, or being too tired or overstimulated. If arching specifically occurs during swallowing, rule out dysphagia (swallowing difficulty) with your pediatrician.' },
  ],
  whenNormal: ['Occasional fussiness during a feeding when overtired or overstimulated', 'Brief arching that resolves with a change in position or brief break', 'Pulling away from the breast or bottle to look around (common at 3-4 months when babies become more aware)'],
  whenToMention: ['Arching and crying during most feedings', 'Your baby is not gaining weight well due to feeding difficulties', 'Feeding sessions are consistently stressful and taking a long time', 'Your baby seems to be in pain during feeding (not just distracted)'],
  whenToActNow: ['Your baby is refusing all feeds and showing signs of dehydration', 'Arching is accompanied by forceful vomiting, especially if projectile (possible pyloric stenosis in young infants)', 'Your baby seems to choke, gag, or have difficulty swallowing during feeds', 'Arching is constant (not just during feeding) and very rigid - this may be a neurological sign requiring evaluation'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['reflux', 'spitting-up', 'bottle-refusal', 'breastfeeding-difficulty'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. GER and GERD in Infants. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/GERD-Reflux.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Why Babies Spit Up. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Why-Babies-Spit-Up.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Gastroesophageal Reflux in Infants.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459149/' },
  ],
};

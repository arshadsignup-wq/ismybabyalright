import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-hypotonia-feeding-impact',
  title: 'Low Muscle Tone Is Affecting My Baby\'s Feeding',
  category: 'physical',
  searchTerms: ['baby low tone feeding', 'hypotonia feeding difficulty', 'floppy baby feeding problems', 'baby weak suck low tone', 'low muscle tone breastfeeding', 'hypotonia bottle feeding', 'baby poor latch low tone', 'low tone baby eating difficulty', 'hypotonia swallowing baby', 'weak oral muscles baby'],
  quickAnswer: 'Low muscle tone (hypotonia) can affect feeding because the oral muscles used for sucking, swallowing, and later chewing may also be weak. Feeding difficulties related to low tone are common and treatable. Speech-language pathologists and occupational therapists who specialize in infant feeding can provide targeted strategies and exercises.',
  byAge: [
    { ageRange: '0-3 months', context: 'Babies with low tone may have a weak suck, tire quickly during feeding, dribble milk, or have difficulty latching. If your baby is not gaining weight adequately or feeding takes more than 30-40 minutes, ask your pediatrician about a feeding evaluation. Pacing feeds and supportive positioning can help significantly.' },
    { ageRange: '3-6 months', context: 'As your baby grows, feeding should improve as oral muscles strengthen. If your baby still struggles significantly with feeding, a speech-language pathologist can assess oral motor function and provide exercises. Special bottles or nipples may also help.' },
    { ageRange: '6-12 months', context: 'The transition to solid foods may be challenging for babies with low tone. Chewing requires jaw strength and tongue control. Start with smooth purees and progress gradually. If your baby gags excessively or cannot manage age-appropriate textures, ask for a feeding therapy referral.' },
    { ageRange: '12-24 months', context: 'Chewing and self-feeding should be progressing. If your child still has significant difficulty with textures, chewing, or drinking from cups, ongoing feeding therapy is recommended. Many children with low tone catch up with appropriate support.' },
  ],
  whenNormal: ['Your baby feeds well most of the time with occasional tiredness.', 'Your baby is gaining weight appropriately.', 'Feeding is improving over time with growth and development.', 'Your baby was premature and feeding skills are developing on adjusted timeline.'],
  whenToMention: ['Your baby consistently takes more than 30 minutes to feed.', 'Your baby is not gaining weight well.', 'Your baby chokes, gags, or coughs frequently during feeding.', 'Your baby cannot manage age-appropriate food textures.'],
  whenToActNow: ['Your baby is aspirating (food or liquid going into lungs) during feeds.', 'Your baby has stopped eating or has significant weight loss.'],
  relatedMilestones: ['feeding-sucking', 'feeding-solids', 'gross-motor-head-control'],
  showSelfReferral: true,
  relatedConcernSlugs: ['low-muscle-tone', 'floppy-baby-syndrome'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Feeding Difficulties in Infants', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
    { org: 'NIH', citation: 'Arvedson JC. Assessment of Pediatric Dysphagia and Feeding Disorders. Dev Disabil Res Rev. 2008;14(2)', url: 'https://pubmed.ncbi.nlm.nih.gov/18646020/' },
    { org: 'CDC', citation: 'CDC - Developmental Monitoring and Screening', url: 'https://www.cdc.gov/ncbddd/actearly/screening.html' },
  ],
};

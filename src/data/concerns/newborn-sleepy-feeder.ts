import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-sleepy-feeder',
  title: 'Baby Falling Asleep During Feeds',
  category: 'feeding',
  searchTerms: ['baby falls asleep nursing', 'sleepy feeder newborn', 'baby sleeping during bottle', 'newborn too sleepy to eat', 'baby drowsy while feeding', 'newborn nodding off during feed', 'baby not finishing feed sleeping', 'how to keep baby awake feeding', 'sleepy newborn breastfeeding', 'baby feeding then sleeping'],
  quickAnswer: 'Many newborns fall asleep during feeding, especially in the first few weeks. The warmth, comfort, and rhythmic sucking are soothing and naturally induce sleep. This is usually normal if your baby is gaining weight well. Techniques like undressing baby, tickling the feet, or switching breasts can help keep a sleepy feeder awake long enough for a full meal.',
  byAge: [
    { ageRange: '0-1 month', context: 'Newborns are naturally sleepy, especially in the first 1-2 weeks. If your baby consistently falls asleep within a few minutes of starting a feed and is not getting enough milk (poor weight gain, few wet diapers), you may need strategies to keep them awake: undress to a diaper during feeds, use skin-to-skin contact, tickle the feet or stroke the cheek, switch breasts or burp when baby slows down, and use breast compression to maintain milk flow. If your baby is jaundiced, they may be especially sleepy and may need to be woken every 2-3 hours for feeds.' },
    { ageRange: '1-3 months', context: 'As your baby becomes more alert, sleepy feeding typically decreases. Babies become more efficient feeders and may complete a feed in less time. If sleepy feeding persists and weight gain is a concern, evaluate for underlying causes such as tongue tie or reflux that make feeding effortful.' },
    { ageRange: '3-6 months', context: 'Most babies are alert and engaged feeders by this age. Falling asleep at the breast or bottle may be more about comfort than hunger. This is normal as long as nutritional needs are being met.' },
    { ageRange: '6-12 months', context: 'Drowsy feeding may continue as part of naptime and bedtime routines. This is normal and developmentally appropriate. Nutritional needs should be met through alert feeding sessions and solid foods.' },
  ],
  whenNormal: ['Baby feeds actively for several minutes before falling asleep', 'Baby is gaining weight well despite falling asleep during some feeds', 'Adequate wet and dirty diapers', 'Baby becomes more alert during feeds as they grow older'],
  whenToMention: ['Baby consistently falls asleep within 1-2 minutes of starting every feed', 'Weight gain is poor despite frequent feeding attempts', 'You cannot wake your baby enough to complete a full feed'],
  whenToActNow: ['Baby is excessively sleepy, difficult to arouse for feeds, and not producing adequate wet diapers, which could indicate dehydration, infection, or other illness', 'Baby is increasingly lethargic and not waking for feeds at all'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breastfeeding: Getting a Good Start. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Breastfeeding Challenges. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK549825/' },
  ],
  relatedConcernSlugs: ['newborn-not-waking-to-feed', 'newborn-sleeping-too-much', 'newborn-weight-loss-first-week'],
};

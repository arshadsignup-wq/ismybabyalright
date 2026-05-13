import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breast-compression-techniques',
  title: 'Breast Compression During Feeding',
  category: 'feeding',
  searchTerms: [
    'breast compression breastfeeding',
    'breast compression technique',
    'how to do breast compression',
    'baby falling asleep at breast',
    'baby not swallowing at breast',
    'increasing milk flow while nursing',
    'breast compression for slow feeder',
    'breast compression low supply',
    'keeping baby awake while nursing',
  ],
  quickAnswer:
    'Breast compression is a simple technique where you gently squeeze your breast during nursing to increase milk flow and encourage your baby to keep swallowing actively. It is especially helpful for sleepy babies, slow feeders, or when you want to ensure your baby gets more of the calorie-rich hindmilk. The technique is safe, easy to learn, and can significantly improve the effectiveness of each feeding session.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Breast compression is particularly valuable for newborns who tend to fall asleep at the breast before finishing a full feed. When you notice your baby\'s sucking slow down and they stop swallowing actively, gently compress your breast and hold the compression until the baby stops swallowing again. Release, wait for sucking to resume, and compress again. This helps your baby get more milk per session and can improve weight gain.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, breast compression is useful for babies who are easily distracted during feeds or who have become efficient enough to get frustrated when the milk flow slows. Compression can help maintain the flow and keep your baby engaged. It is also helpful if you are working on increasing your supply, as more thorough breast emptying signals your body to produce more milk.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies are generally more efficient nursers, but breast compression can still be helpful for shorter sessions when you want to maximize milk transfer, especially as nursing frequency decreases with the introduction of solids. It can also help speed up a feeding if your baby is nursing for comfort rather than nutrition and you need to move on.',
    },
  ],
  whenNormal: [
    'You use breast compression to help your sleepy newborn get a full feeding',
    'Your baby resumes active swallowing when you apply gentle compression',
    'You use the technique to help empty your breasts more thoroughly and prevent plugged ducts',
    'Breast compression is one of several strategies you use to support weight gain in a slow-gaining baby',
  ],
  whenToMention: [
    'Your baby consistently falls asleep within minutes of latching despite breast compression and other wake-up strategies',
    'Your baby is not gaining weight well despite what seem like frequent and effective feeding sessions',
    'You are unsure whether you are performing breast compression correctly and want hands-on guidance',
    'Your baby seems to get frustrated at the breast even when you use compression to increase flow',
  ],
  whenToActNow: [
    'Your baby is losing weight or not regaining birth weight by two weeks of age despite frequent nursing with compression',
    'Your baby is showing signs of dehydration such as fewer wet diapers, lethargy, or a sunken fontanelle',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Increasing Your Milk Supply.',
      url: 'https://llli.org/breastfeeding-info/increasing-your-milk/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infant and Young Child Feeding.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
  ],
};

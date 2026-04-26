import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cluster-feeding-newborn',
  title: 'Cluster Feeding in Newborns',
  category: 'feeding',
  searchTerms: [
    'cluster feeding newborn',
    'baby wants to eat constantly',
    'baby nursing every hour',
    'newborn feeding nonstop',
    'baby hungry all the time breastfeeding',
    'baby eating every 30 minutes',
    'is cluster feeding normal',
    'why does my baby want to nurse all evening',
    'cluster feeding at night',
    'newborn always hungry not enough milk',
    'baby feeding marathon',
  ],
  quickAnswer:
    'Cluster feeding is when your baby has several feedings very close together, often in the evening. This is completely normal newborn behavior and does not mean your milk supply is low. Cluster feeding helps stimulate your body to produce more milk, and it often happens during growth spurts. It can feel exhausting, but it is temporary and usually settles into a more predictable pattern within a few weeks.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'Newborns need to eat very frequently, typically eight to twelve times in 24 hours, and some of these feeds will naturally bunch together. In the first few days, your baby is helping bring in your milk supply by nursing often. This is not a sign that something is wrong. Evening cluster feeding is especially common, as babies tend to be fussier and hungrier in the late afternoon and evening. Rest when you can during the day, stay hydrated, and let your baby nurse as often as they want.',
    },
    {
      ageRange: '2-6 weeks',
      context:
        'Growth spurts commonly happen around two to three weeks and again around six weeks, and cluster feeding often intensifies during these times. Your baby may seem insatiable for a day or two, then settle back into a more regular pattern. These marathons are how your baby signals your body to increase milk production. Trust the process, feed on demand, and keep track of wet and dirty diapers to confirm your baby is getting enough milk.',
    },
    {
      ageRange: '6-12 weeks',
      context:
        'By this age, many babies begin spacing their feeds more predictably, though some evening cluster feeding may continue. Growth spurts around eight to twelve weeks can trigger another round of frequent feeding. If your baby is gaining weight well and seems satisfied between feeding clusters, everything is working as it should.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Cluster feeding becomes less common by three to four months as babies become more efficient at emptying the breast and feeds become shorter. However, growth spurts at three and four months may still cause temporary increases in feeding frequency. If your baby suddenly starts feeding much more frequently after months of a settled pattern, it may be a growth spurt, teething, or a need for comfort.',
    },
  ],
  whenNormal: [
    'Your newborn wants to nurse every 30 to 60 minutes in the evening but sleeps longer stretches afterward',
    'Cluster feeding lasts one to three days and then your baby returns to a more regular pattern',
    'Your baby is gaining weight well and has plenty of wet and dirty diapers despite the frequent feeding',
    'Your baby seems content and satisfied between cluster feeding episodes',
    'Cluster feeding coincides with a growth spurt around two weeks, three weeks, six weeks, or three months',
  ],
  whenToMention: [
    'Your baby feeds constantly around the clock for more than a few days with no settled periods and seems unsatisfied after every feed',
    'Your baby is not gaining weight adequately despite very frequent nursing',
    'You are experiencing significant pain, exhaustion, or distress from the feeding demands',
  ],
  whenToActNow: [
    'Your baby is not producing wet diapers (fewer than six per day after day four), which may indicate inadequate milk intake',
    'Your baby is increasingly lethargic, not waking to feed, or showing signs of dehydration',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How Often and How Much Should Your Baby Eat? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/How-Often-and-How-Much-Should-Your-Baby-Eat.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Breastfeeding.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
  ],
};

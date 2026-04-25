import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-gulping-air',
  title: 'My Baby Gulps Air While Feeding',
  category: 'digestive',
  searchTerms: [
    'baby gulps air while feeding',
    'baby swallows air when eating',
    'baby makes gulping sounds while nursing',
    'baby takes in too much air when bottle feeding',
    'baby gassy from swallowing air',
    'how to prevent baby from gulping air',
    'baby clicking while breastfeeding',
    'aerophagia in babies',
  ],
  quickAnswer: 'Swallowing some air during feeding is normal for all babies, but excessive air gulping can lead to gas, hiccups, and spit-up. Common causes include fast milk flow, poor latch (if breastfeeding), bottle nipple flow that\'s too fast or slow, and crying before feeds. Simple adjustments to feeding position, pacing, and equipment can usually help reduce air intake significantly.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Newborns often gulp air because they\'re still learning to coordinate sucking, swallowing, and breathing. If breastfeeding, you might hear clicking sounds or see milk dribbling if baby\'s latch isn\'t deep enough. Fast letdown can cause baby to gulp and gasp. If bottle feeding, check that the nipple flow isn\'t too fast  -  milk should drip slowly when the bottle is turned upside down, not stream out. Pace feeding (taking breaks every few minutes) helps newborns manage air intake.',
    },
    {
      ageRange: '3-6 months',
      context: 'Feeding coordination usually improves, but air gulping can persist if there are latch issues, fast flow, or if baby has become an impatient eater who gulps eagerly. You might notice baby pausing to burp during feeds or pulling off to catch their breath. These are signs of air intake. If your baby seems gassier than usual or spits up more, consider whether air swallowing is a factor.',
    },
    {
      ageRange: '6-12 months',
      context: 'At this age, air gulping is often related to bottle or sippy cup use. Bottles should be angled so the nipple is always filled with milk, not air. Some sippy cups cause babies to suck in air  -  look for weighted straw cups or valveless options. If baby is still breastfeeding, they should have good latch mechanics by now, but distracted feeding (pulling off and on) can increase air intake.',
    },
    {
      ageRange: '12+ months',
      context: 'Toddlers may gulp air when drinking too quickly from cups, using straws incorrectly, or drinking while lying down. Some air swallowing is normal, but excessive gas or bloating may mean they\'re drinking too fast. Encourage slower drinking and make sure cups are appropriate for their age and skill level.',
    },
  ],
  whenNormal: [
    'Some air intake during feeds that results in normal burping',
    'Occasional hiccups after feeding',
    'Baby seems comfortable overall, even if a bit gassy',
    'Manageable spit-up that doesn\'t interfere with weight gain',
  ],
  whenToMention: [
    'Baby seems excessively gassy and uncomfortable despite feeding adjustments',
    'Frequent hiccups that interfere with feeding',
    'You hear constant clicking or gulping sounds and aren\'t sure how to fix it',
    'Baby seems to be taking in more air over time rather than improving',
  ],
  whenToActNow: [
    'Baby is choking, gagging, or turning blue during feeds',
    'Severe gas pains that cause inconsolable crying',
    'Baby refuses to eat due to discomfort from air swallowing',
    'Weight gain has stopped or baby is losing weight',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation: 'Reducing Air Intake During Infant Feeding (2024)',
      url: 'https://www.aap.org',
    },
    {
      org: 'La Leche League International',
      citation: 'Clicking Sounds and Air Swallowing While Breastfeeding (2024)',
      url: 'https://www.llli.org',
    },
    {
      org: 'Children\'s Hospital of Philadelphia',
      citation: 'Bottle Feeding Technique: Paced Feeding to Reduce Gas (2024)',
      url: 'https://www.chop.edu',
    },
  ],
};

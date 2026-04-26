import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'painful-breastfeeding',
  title: 'Painful Breastfeeding (Sore Nipples)',
  category: 'feeding',
  searchTerms: [
    'painful breastfeeding',
    'sore nipples breastfeeding',
    'breastfeeding hurts',
    'cracked nipples nursing',
    'nipple pain while breastfeeding',
    'breastfeeding pain when latching',
    'bleeding nipples breastfeeding',
    'breastfeeding toe-curling pain',
    'why does breastfeeding hurt so much',
    'how to fix painful latch',
    'nipple damage from breastfeeding',
  ],
  quickAnswer:
    'Some nipple tenderness in the first few days of breastfeeding is common as your body adjusts, but persistent or severe pain is not something you should push through. In most cases, breastfeeding pain is caused by a latch issue that can be corrected with proper positioning. Getting help early from a lactation consultant can make a world of difference.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'Mild nipple soreness during the first one to two weeks is very common as nipples adjust to frequent nursing. However, pain that makes you dread feeding, causes visible cracks or bleeding, or lasts throughout the entire feed (not just the first few seconds) usually signals a latch problem. Focus on getting a deep, asymmetric latch where your baby takes a large mouthful of breast, not just the nipple. Their lips should be flanged outward, and you should hear rhythmic swallowing. Lanolin cream, expressed breast milk on the nipples, and gel pads can help heal soreness between feeds.',
    },
    {
      ageRange: '2-6 weeks',
      context:
        'If pain continues past the first two weeks, it is not normal and deserves attention. Common causes include a shallow latch, tongue tie or lip tie, or a positioning issue. Thrush (a yeast infection) can also develop during this period, causing burning, shooting pains that continue between feeds and sometimes a white coating in your baby\'s mouth. Have your baby evaluated for tongue tie if you have not already, and see a lactation consultant for a latch assessment.',
    },
    {
      ageRange: '6-12 weeks',
      context:
        'By this point, breastfeeding should be comfortable. If you are still experiencing pain, there may be an underlying issue such as an undiagnosed tongue tie, vasospasm (blanching of the nipple after feeds, often worse in cold weather), or a bacterial infection. Do not give up without seeking help, as these conditions are treatable. A board-certified lactation consultant (IBCLC) can do a thorough assessment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'New-onset pain at this stage often relates to teething or biting. Babies may clamp down when teething or at the end of a feed when milk flow slows. You can try briefly unlatching your baby when they bite, offering a teething toy before nursing, and watching for signs they are finished eating. Recurring plugged ducts or mastitis can also cause breast and nipple pain.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies with teeth can cause nipple trauma if they bite or if the latch becomes lazy. Breastfeeding should still be comfortable at this age. If pain develops suddenly, check for a new tooth, changes in latch due to distractibility, or a breast infection. You can gently say "no biting" and unlatch your baby briefly to teach them that biting ends the feeding session.',
    },
  ],
  whenNormal: [
    'You feel brief tenderness for the first 10 to 15 seconds of latching during the first week that resolves once milk begins flowing',
    'Your nipples feel slightly sensitive between feeds in the first few days but are not cracked or bleeding',
    'Mild soreness improves day by day during the first two weeks',
    'Occasional discomfort when your baby first latches in a new position but the rest of the feed is painless',
  ],
  whenToMention: [
    'Pain lasts throughout the entire feeding session and does not improve after the first two weeks',
    'You see cracks, blisters, or bleeding on your nipples that are not healing',
    'You notice burning or shooting pain in your breasts between feedings, which may suggest thrush or vasospasm',
  ],
  whenToActNow: [
    'You have a painful, red, warm area on your breast with fever over 100.4F, which may indicate mastitis requiring antibiotics',
    'Pain is so severe that you are unable to feed your baby at all and they are not getting enough to eat',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Breastfeeding Challenges. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Common-Breastfeeding-Challenges.aspx',
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

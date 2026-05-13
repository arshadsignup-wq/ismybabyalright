import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'weaning-toddler-eighteen-months-plus',
  title: 'Weaning a Toddler (18 Months and Beyond)',
  category: 'feeding',
  searchTerms: [
    'weaning toddler 18 months',
    'weaning older toddler',
    'stop breastfeeding toddler',
    'how to wean a 2 year old',
    'toddler won\'t stop breastfeeding',
    'weaning after 18 months',
    'breastfeeding toddler when to stop',
    'gentle weaning toddler',
  ],
  quickAnswer:
    'Weaning a toddler over 18 months involves more negotiation and emotional support than weaning a younger baby, because breastfeeding has become a deeply ingrained comfort habit. Both the WHO and AAP support breastfeeding beyond 12 months for as long as mutually desired. When you are ready to wean, a gradual approach using substitution, distraction, and new comfort routines tends to be most effective.',
  byAge: [
    {
      ageRange: '12-24 months',
      context:
        'Toddlers in this age range often breastfeed for comfort as much as nutrition. Start by identifying the nursing sessions that are most about habit and least about hunger, often mid-morning or mid-afternoon feeds. Replace these with a snack, drink, activity, or cuddle. The phrase "don\'t offer, don\'t refuse" works well for many families as a first step, where you stop initiating feeds but still nurse if your toddler asks.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Older toddlers can understand simple explanations, so you can talk about breastfeeding coming to an end. Some families set boundaries like only nursing at home or only before bed. Others use a countdown approach or a special "weaning party." Your child may need extra physical affection, such as more cuddles and lap time, as they adjust to the change. Be patient with regressions during illness or stressful transitions.',
    },
  ],
  whenNormal: [
    'Your toddler protests when a nursing session is skipped but can be redirected within a few minutes',
    'Weaning takes several weeks to months, with some progress and some setbacks along the way',
    'Your toddler asks to nurse more during illness, teething, or times of stress even after partially weaning',
    'You experience a mix of emotions including pride, sadness, and relief as breastfeeding ends',
  ],
  whenToMention: [
    'Your toddler is extremely distressed by weaning attempts and you want guidance on gentler strategies',
    'You are feeling significant pressure from family or others to wean and want support in making the decision that is right for you',
    'You are experiencing mood changes, sadness, or irritability that you think might be related to weaning hormones',
    'Your toddler is nursing so frequently that it is interfering with eating solid foods and you are concerned about nutrition',
  ],
  whenToActNow: [
    'You develop mastitis symptoms including fever, severe breast pain, and redness during the weaning process',
    'You are experiencing severe depression, anxiety, or intrusive thoughts that are worsening as you wean',
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
      org: 'WHO',
      citation:
        'World Health Organization. Breastfeeding.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Wean Your Baby from Breastfeeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/How-to-Wean-Your-Baby.aspx',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-food-jag',
  title: 'Toddler Food Jag (Only Eating One Food Repeatedly)',
  category: 'feeding',
  searchTerms: [
    'toddler only eats one food',
    'toddler food jag',
    'toddler wants same food every meal',
    'toddler obsessed with one food',
    'child only eats mac and cheese',
    'toddler eating same thing every day',
    'food jag toddler',
    'toddler won\'t eat anything but one food',
    'picky eater same food',
    'when to worry about food jag',
  ],
  quickAnswer:
    'Food jags - where a toddler insists on eating only one specific food at every meal - are extremely common and usually temporary. Toddlers crave routine and predictability, and eating the same food gives them a sense of control. Most food jags last a few days to a few weeks before your toddler naturally moves on to something else. Continuing to offer variety alongside their preferred food is the best approach. Try not to panic or make it a battle.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Food jags often begin as toddlers discover foods they really enjoy and start asserting preferences. At this age, it is common for a toddler to want the same food at every meal for several days. Continue offering their preferred food along with one or two other options at each meal. Do not force or pressure them to eat the other foods. Exposure without pressure is the most effective strategy. Their preferred food may change frequently at this age.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is the peak age for food jags, as toddlers are asserting independence in all areas of life, including eating. A toddler who only wants crackers, or who insists on the exact same brand of yogurt at every meal, is behaving in a completely age-appropriate way. Offer the preferred food in reasonable portions along with other foods. Avoid making separate meals beyond what is already planned. Over time, most toddlers naturally tire of their preferred food and move on.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Food jags may continue but often become less intense as children develop more flexibility. If a food jag has lasted more than a month and your child\'s diet is becoming more restricted rather than expanding, consider whether sensory issues, anxiety, or a need for control might be contributing factors. Involving your toddler in food shopping, preparation, and choosing from approved options can help expand their comfort zone.',
    },
  ],
  whenNormal: [
    'Your toddler insists on the same food for a few days to a couple of weeks and then moves on to a new favorite',
    'Your toddler eats their preferred food enthusiastically but will nibble on other offered foods occasionally',
    'Food preferences rotate over time, with old favorites being rejected and new ones emerging',
    'Your toddler is growing well and has decent energy despite eating a seemingly monotonous diet',
    'Your toddler eats different foods in different settings, such as at daycare versus at home',
  ],
  whenToMention: [
    'The food jag has lasted more than a month with no signs of flexibility or new foods being accepted',
    'Your toddler\'s overall diet has shrunk to fewer than 10 foods and continues to get more restrictive',
    'Your toddler becomes very distressed, gags, or has meltdowns when non-preferred foods are on their plate',
  ],
  whenToActNow: [
    'Your toddler is eating so little variety that you are concerned about nutritional deficiency, or your child is losing weight',
    'Your toddler has eliminated entire food groups and is showing signs of deficiency such as extreme fatigue, pale skin, or poor wound healing',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toddler Food and Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Picky Eaters. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Picky Eaters and What to Do.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/picky-eaters.html',
    },
  ],
};

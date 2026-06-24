import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'grandparent-outdated-advice-handling',
  title: 'Handling Outdated Parenting Advice from Grandparents',
  category: 'behavior',
  searchTerms: [
    'grandparents outdated parenting advice',
    'grandparents giving bad advice baby',
    'old fashioned parenting advice dangerous',
    'grandparents say put baby on stomach to sleep',
    'grandparents want to give baby cereal in bottle',
    'parenting advice changed since 1980s',
    'grandparents don\'t believe in car seats',
    'outdated baby advice honey water rice cereal',
    'how to tell grandparents advice is wrong',
    'grandparents think new parenting rules are silly',
  ],
  quickAnswer:
    'Pediatric guidelines have changed dramatically in the past 20-40 years based on new research, and many practices that were standard when your parents raised children are now known to be unsafe. Key examples include putting babies to sleep on their stomachs (now linked to SIDS), adding cereal to bottles, giving honey before age 1 (botulism risk), and using walkers (fall injuries). Approaching these conversations with empathy while standing firm on safety is essential.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The most dangerous outdated advice involves newborn sleep and feeding. Practices that have changed include: babies must always sleep on their backs (the "Back to Sleep" campaign reduced SIDS deaths by 50%), no blankets, pillows, or bumpers in the crib, no cereal in bottles, no water or juice for newborns, and no honey until 12 months. Grandparents may say "you slept on your stomach and you were fine," but survivor bias does not equal safety. Share your pediatrician\'s printed guidelines or AAP resources directly.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Common outdated advice during this period includes: starting solids at 3-4 months (current recommendation is around 6 months), using walkers (banned in Canada due to injury risk), rubbing whiskey on teething gums (alcohol is toxic to infants), and forward-facing car seats too early (rear-facing until at least age 2 is now recommended). When grandparents push back, try framing it as "we know more now" rather than "you were wrong." Many grandparents respond well to learning the research behind the changes.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddler-age outdated advice often involves discipline (spanking is no longer recommended by any major pediatric organization), food safety (choking hazard awareness has improved significantly), and developmental expectations. Grandparents may push for early potty training, strict mealtime rules, or discipline approaches that research has shown to be counterproductive. Share resources from AAP or Zero to Three that explain why recommendations have evolved.',
    },
  ],
  whenNormal: [
    'Grandparents share their experiences but accept that guidelines have changed when you explain the reasons.',
    'Minor disagreements about non-safety topics like whether the baby needs socks or a hat.',
    'Grandparents are willing to read updated materials or attend a grandparent education class.',
  ],
  whenToMention: [
    'Grandparents persistently follow outdated practices when caring for your baby despite repeated conversations about safety.',
    'The stress of managing outdated advice is affecting your mental health or your relationship with your partner.',
    'You need your pediatrician to provide printed guidelines you can share with grandparents.',
  ],
  whenToActNow: [
    'A grandparent has placed your baby to sleep on their stomach, given honey to a baby under 12 months, or engaged in another practice that poses an immediate safety risk.',
    'A grandparent refuses to use a car seat properly or at all.',
    'Outdated feeding advice has caused your baby to choke, have an allergic reaction, or become ill.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'grandparent-boundary-setting-baby',
    'partner-disagreement-parenting-style',
    'natural-remedies-vs-medicine-baby-danger',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. A Grandparent\'s Guide to Baby Safety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/A-Grandparents-Guide-to-Baby-Safety.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. SIDS and Other Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'CDC',
      citation:
        'CDC. Infant and Toddler Nutrition: Foods and Drinks to Avoid.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/foods-and-drinks-to-encourage.html',
    },
  ],
};

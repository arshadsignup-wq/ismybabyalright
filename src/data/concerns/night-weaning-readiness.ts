import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'night-weaning-readiness',
  title: 'When Should I Stop Night Feeds?',
  category: 'feeding',
  searchTerms: [
    'when to stop night feeding',
    'night weaning baby',
    'baby ready to drop night feed',
    'when to night wean',
    'night feeding when to stop',
    'baby still feeding at night',
    'baby needs night feeds',
    'night weaning readiness signs',
    'dropping night feeds age',
    'night weaning breastfed baby',
  ],
  quickAnswer:
    'Most healthy, full-term babies who are growing well can sleep through the night without feeds by 6-9 months, though some may need feeds longer. Readiness signs include good weight gain, eating well during the day, and waking at consistent times rather than from hunger. Night weaning should be discussed with your pediatrician, as premature or underweight babies may need night feeds longer.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Night feeds are essential and expected. Newborns need to eat every 2-3 hours including overnight. Do not attempt night weaning at this age.',
    },
    {
      ageRange: '4-6 months',
      context: 'Some babies begin to sleep longer stretches naturally. Others still need 1-2 night feeds. If your baby is growing well and your pediatrician agrees, you may start to gently encourage longer night stretches, but do not force it.',
    },
    {
      ageRange: '6-9 months',
      context: 'Many babies are ready to night wean during this period if they are healthy, growing well, and eating well during the day. You can try gradually reducing the length of night feeds or the amount offered. If baby is breastfed, you might reduce nursing time by 1-2 minutes every few nights.',
    },
    {
      ageRange: '9-12 months',
      context: 'Most babies can go through the night without feeds by this age. Night waking may be more about habit or comfort than hunger. If your baby still wakes to feed, try offering comfort without feeding to see if they resettle.',
    },
    {
      ageRange: '12-24 months',
      context: 'Night feeds at this age are typically for comfort rather than nutrition. If you are comfortable continuing, that is fine. If you want to night wean, gradual reduction works well. For breastfeeding mothers, having a partner offer comfort instead of nursing can help. Night bottles should be discontinued to protect dental health.',
    },
  ],
  whenNormal: [
    'Baby gradually drops night feeds on their own as they eat more during the day',
    'Baby can be comforted back to sleep without feeding by 9-12 months',
    'Baby takes a few nights to adjust when night feeds are reduced',
  ],
  whenToMention: [
    'Baby is over 9 months and still feeding 3 or more times per night',
    'Baby is not eating well during the day because they fill up at night',
    'You are unsure if your baby is ready to night wean',
  ],
  whenToActNow: [
    'Baby is losing weight or not growing well and you are restricting night feeds',
    'Baby is a premature or medically fragile infant and you are considering night weaning without medical guidance',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['excessive-night-feeding', 'toddler-wants-bottle-at-night-still', 'baby-comfort-nursing-excessive'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Night Feedings and Sleep. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Night Feeding Patterns in Infancy. Pediatrics, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};

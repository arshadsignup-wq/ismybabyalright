import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-gas-drops-simethicone',
  title: 'Gas Relief Drops (Simethicone) for Baby',
  category: 'digestive',
  searchTerms: [
    'baby gas drops',
    'simethicone baby',
    'baby gas relief drops',
    'mylicon drops baby',
    'do gas drops work baby',
    'gas drops safe for newborn',
    'simethicone infant',
    'baby gas drops how often',
    'gas x infant drops',
    'baby gas medicine',
  ],
  quickAnswer:
    'Simethicone gas drops (brand names Mylicon, Little Remedies Gas Relief) are safe for babies and work by breaking up gas bubbles in the stomach, making them easier to pass. They are not absorbed into the body. While they are very safe, research shows mixed evidence on whether they significantly reduce gas symptoms compared to placebo. They are worth trying but do not work for all babies.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Simethicone drops can be given from birth and are very safe. They may help if your baby swallows air during feeds. Give the drops before or during feeds as directed on the package. While the evidence for effectiveness is not strong, many parents report improvement, and there are no significant side effects.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Gas drops continue to be safe. If your baby seems gassy, you can give simethicone up to 12 times per day as labeled. If gas drops do not seem to help after a few days, the issue may be something other than trapped gas bubbles, such as immature digestive function or food sensitivities.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start solids, new foods may cause increased gas. Simethicone can be used as needed. Position changes (bicycle legs, tummy time) and gentle abdominal massage may be equally or more effective than drops for relieving gas in this age group.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers rarely need simethicone drops, but they can be used safely if gas is an issue. Dietary causes of gas (beans, broccoli, dairy) are more common in toddlers. Identifying and moderating gas-producing foods may be more effective than drops.',
    },
  ],
  whenNormal: [
    'Using simethicone drops as needed for a gassy baby without side effects',
    'Finding that gas drops help for some feeds but not others',
  ],
  whenToMention: [
    'Gas drops are not helping and your baby remains very uncomfortable with gas',
    'You are giving gas drops frequently and want to discuss other approaches',
    'Your baby has persistent gas that seems worse than expected',
  ],
  whenToActNow: [
    'Severe abdominal distension with vomiting and refusal to feed',
    'Your baby is inconsolable and you suspect the pain is more than simple gas',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Gas Relief for Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Breaking-Up-Gas.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Simethicone for Infant Colic. Cochrane Database of Systematic Reviews.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/11034733/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Over-the-Counter Medicines for Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/medication-safety/Pages/Using-Over-the-Counter-Medicines-With-Your-Child.aspx',
    },
  ],
  relatedConcernSlugs: ['excessive-gas-baby', 'baby-gripe-water-safety', 'baby-trapped-gas-signs', 'baby-colic-drops-effectiveness'],
};

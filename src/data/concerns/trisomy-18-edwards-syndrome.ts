import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'trisomy-18-edwards-syndrome',
  title: 'Trisomy 18 (Edwards Syndrome)',
  category: 'medical',
  searchTerms: [
    'trisomy 18 baby',
    'edwards syndrome baby',
    'trisomy 18 life expectancy',
    'trisomy 18 signs baby',
    'edwards syndrome diagnosis',
    'baby clenched fists overlapping fingers',
    'trisomy 18 support',
    'trisomy 18 care options',
  ],
  quickAnswer:
    'Trisomy 18 (Edwards syndrome) is a chromosomal condition caused by an extra copy of chromosome 18, occurring in about 1 in 5,000 live births. It causes serious medical complications including heart defects, organ abnormalities, and severe developmental delays. While trisomy 18 is a life-limiting condition, each baby is an individual. Families are supported in making care decisions that align with their values, and many find profound meaning in the time they have with their child.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Trisomy 18 is often diagnosed prenatally through screening tests and confirmed by amniocentesis or CVS. Babies born with trisomy 18 typically have low birth weight, a small head, clenched fists with overlapping fingers, heart defects (present in over 90%), and other organ abnormalities. Medical care in the newborn period focuses on comfort and quality of life. Some families choose comfort care only, while others pursue medical interventions. There is no single right approach — decisions should be guided by your family\'s values and the medical team\'s guidance.',
    },
    {
      ageRange: '3-6 months',
      context:
        'About 40-60% of babies with full trisomy 18 survive beyond the first month, and about 5-10% survive their first year. Babies who survive often have significant medical needs including feeding support (often tube feeding), cardiac management, and respiratory support. Despite the challenges, many parents describe this time as precious. Palliative care teams can help manage symptoms and support quality of life for both the baby and the family.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies with trisomy 18 who survive to this age often show slow development and may achieve some social milestones like smiling and recognizing caregivers. Medical management continues to focus on comfort and treating symptoms. Some families choose interventions such as cardiac surgery, which can extend life in select cases. Support organizations for trisomy 18 families can connect you with other families who understand your experience.',
    },
    {
      ageRange: '12 months+',
      context:
        'A small percentage of children with trisomy 18 survive beyond their first birthday, and some live for several years, particularly those with mosaic trisomy 18 (where only some cells have the extra chromosome). These children have significant developmental delays but can form bonds with their families and respond to love and stimulation. Ongoing care involves a multidisciplinary team focused on comfort, quality of life, and family support.',
    },
  ],
  whenNormal: [
    'Prenatal screening suggested trisomy 18 risk but diagnostic testing (amniocentesis) came back normal — false positives do occur',
    'Your baby was evaluated for trisomy 18 features but genetic testing confirmed normal chromosomes',
    'Your baby with mosaic trisomy 18 has some features but is more mildly affected than full trisomy 18',
    'Your baby with trisomy 18 is stable, comfortable, and responsive to your care and presence',
  ],
  whenToMention: [
    'You received a prenatal screening result indicating increased risk for trisomy 18 and want to discuss diagnostic testing options',
    'Your baby has been diagnosed with trisomy 18 and you want to discuss care options and goals',
    'Your baby with trisomy 18 has changes in their comfort or medical status',
  ],
  whenToActNow: [
    'Your baby with trisomy 18 is in respiratory distress, has a blue or gray color, or appears to be in significant discomfort',
    'Your baby with trisomy 18 has stopped feeding, is unresponsive, or you have concerns about imminent decline — contact your palliative care or medical team immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Trisomy 18. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/trisomy-18/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Trisomy 18. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/find-support/topics/planning-baby/trisomy-18',
    },
  ],
};

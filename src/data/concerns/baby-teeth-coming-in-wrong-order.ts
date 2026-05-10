import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-teeth-coming-in-wrong-order',
  title: 'Baby Teeth Coming in Wrong Order',
  category: 'medical',
  searchTerms: [
    'baby teeth coming in out of order',
    'baby top teeth before bottom teeth',
    'unusual teething order baby',
    'baby teeth wrong order',
    'baby molars before front teeth',
    'abnormal teething pattern',
    'baby canines came in first',
    'baby side teeth before front teeth',
  ],
  quickAnswer:
    'While there is a typical order for baby teeth eruption, with lower central incisors usually appearing first, it is completely normal for teeth to come in a different order. Variations in teething sequence are common and almost never indicate a developmental problem. What matters is that all 20 primary teeth eventually come in by about age 3.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Most babies do not have teeth yet at this age. Rare cases of natal teeth (born with teeth) or neonatal teeth (erupting within the first month) do occur and should be evaluated by a dentist, but these are not related to eruption order concerns.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some babies begin teething during this period. The typical first teeth are the lower central incisors, but some babies may get an upper tooth first or a lateral incisor before a central incisor. This is a normal variation and does not require intervention.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the most active teething period for many babies. The standard sequence is lower central incisors, upper central incisors, then upper and lower lateral incisors. However, variations are common. Some babies may get their upper teeth first or even get their first molars before completing their incisors.',
    },
    {
      ageRange: '12 months+',
      context:
        'Between 12 and 33 months, the remaining baby teeth typically come in, including canines and molars. As long as teeth are erupting and your child has regular dental visits, an atypical order is rarely a concern. If teeth are significantly delayed overall (no teeth by 18 months), discuss this with your pediatric dentist.',
    },
  ],
  whenNormal: [
    'Your baby gets an upper tooth before a lower tooth, or lateral incisors before central incisors',
    'Teeth come in one at a time rather than in pairs',
    'One side erupts before the matching tooth on the other side',
    'Your baby is teething later than friends\' babies but teeth are still appearing',
  ],
  whenToMention: [
    'Your baby has no teeth by 12 months of age',
    'Teeth appear significantly misshapen, discolored, or unusually small',
    'Your baby seems to have gaps where teeth should have appeared long ago based on the expected timeline',
  ],
  whenToActNow: [
    'Your child has no teeth by 18 months, which may warrant evaluation for conditions like hypodontia or ectodermal dysplasia',
    'A tooth erupts and appears severely malformed, dark, or the gum around it is very swollen and red, which could indicate an underlying issue',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Guideline on Management of the Developing Dentition and Occlusion in Pediatric Dentistry.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/management-of-the-developing-dentition/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby\'s First Teeth. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Babys-First-Tooth-Facts-Parents-Should-Know.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Chronology of primary tooth eruption in children: a review. Journal of Clinical and Experimental Dentistry.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30305885/',
    },
  ],
};

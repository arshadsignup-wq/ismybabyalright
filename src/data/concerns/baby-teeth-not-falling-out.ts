import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-teeth-not-falling-out',
  title: 'Baby Teeth Not Falling Out',
  category: 'medical',
  searchTerms: [
    'baby teeth not falling out',
    'child teeth not coming out',
    'retained baby teeth',
    'baby teeth won\'t fall out',
    'over-retained primary teeth',
    'permanent tooth behind baby tooth',
    'shark teeth child',
    'baby teeth late to fall out',
    'when should baby teeth fall out',
  ],
  quickAnswer:
    'Baby teeth typically begin falling out around age 6, starting with the lower central incisors, but there is a wide normal range. Some children lose their first tooth as early as age 4 or as late as age 8. Delayed loss of baby teeth can be caused by a late pattern of tooth development, missing permanent teeth underneath, or crowding. If a permanent tooth erupts behind a baby tooth that has not fallen out (sometimes called shark teeth), the baby tooth usually loosens and falls out on its own within weeks.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This concern is not applicable at this age. Baby teeth are just beginning to erupt and will remain in place for years. The full set of 20 primary teeth usually comes in by age 2.5 to 3 years.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Baby teeth are erupting during this period. All 20 primary teeth will serve important functions for chewing, speech development, and holding space for permanent teeth. They are not expected to begin falling out until approximately age 6.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The primary teeth are still actively erupting. Parents should focus on oral hygiene and dental visits. The permanent teeth are developing within the jaw below the baby teeth and will not begin pushing them out for several more years.',
    },
    {
      ageRange: '12 months+',
      context:
        'All baby teeth should be in by age 3. The first baby teeth typically fall out around age 6, though the range of normal extends from about age 4 to 8 for the first lost tooth. If baby teeth have not begun to loosen by age 8, a dental evaluation with X-rays can check whether permanent teeth are developing normally underneath. Some children have congenitally missing permanent teeth, which means the baby tooth above that space may be retained indefinitely.',
    },
  ],
  whenNormal: [
    'Your child has not lost any baby teeth yet but is under age 7',
    'Baby teeth are falling out in a different order than expected',
    'A permanent tooth is coming in behind a still-present baby tooth (shark teeth) and the baby tooth is starting to get loose',
    'Your child is a late bloomer developmentally and also a late teether, as these patterns often correlate',
  ],
  whenToMention: [
    'Your child is 8 years old and has not lost any baby teeth yet',
    'A permanent tooth has erupted behind a baby tooth that shows no sign of loosening after several weeks',
    'Baby teeth were lost very early (before age 4) due to decay or trauma, and you want to ensure the permanent teeth will come in correctly',
  ],
  whenToActNow: [
    'A baby tooth was knocked out or is severely damaged from trauma and needs immediate dental evaluation to protect the permanent tooth underneath',
    'Your child has significant pain, swelling, or infection around a retained baby tooth',
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
        'American Academy of Pediatrics. Losing Baby Teeth. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/default.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Baby teeth: When do children start losing them?',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/childrens-health/expert-answers/baby-teeth/faq-20058532',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'behavior-changes-from-teething',
  title: 'Behavior Changes from Teething',
  category: 'behavior',
  searchTerms: [
    'baby behavior teething',
    'teething making baby fussy',
    'teething sleep disruption',
    'baby won\'t eat teething',
    'teething tantrums toddler',
    'baby clingy teething',
    'teething irritability how long',
    'baby biting everything teething',
    'teething night waking',
  ],
  quickAnswer:
    'Teething can genuinely affect your baby\'s behavior, causing increased fussiness, disrupted sleep, decreased appetite, and extra clinginess. However, research shows that teething symptoms are typically mild and short-lived, usually lasting only a few days around the time each tooth erupts. Many symptoms commonly attributed to teething, such as high fever, diarrhea, and severe illness, are actually coincidental illnesses that happen during the same timeframe.',
  byAge: [
    {
      ageRange: '3-6 months',
      context:
        'Most babies get their first tooth between 4 and 7 months, though timing varies widely. In the days around tooth eruption, you may notice increased drooling, a desire to chew on everything, mild fussiness, and slight disruption to sleep patterns. Some babies may briefly refuse the breast or bottle because sucking causes pressure on sore gums. Chilled teething rings and gentle gum massage can provide relief.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Multiple teeth erupt during this period, and your baby may seem like they are always teething. Behavioral changes may include increased biting (of toys, food, and sometimes people), irritability, mild ear-pulling on the same side as an erupting tooth, and some appetite changes. Sleep disruption from teething is usually brief, lasting 1-3 nights per tooth. If sleep problems persist for weeks, another cause is more likely.',
    },
    {
      ageRange: '12-24 months',
      context:
        'First molars typically arrive between 13-19 months and canines between 16-23 months. Molars can be more uncomfortable than front teeth due to their larger size. Toddlers may show more obvious pain responses, become extra clingy, have more tantrums than usual, or reject foods that require chewing. These effects are temporary and manageable with appropriate pain relief measures recommended by your pediatrician.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Second molars arrive around 23-33 months and are often called the most uncomfortable teeth to erupt. Your toddler may be cranky, have disrupted sleep, drool more, and reject crunchy or chewy foods for a few days. By this age, children can sometimes tell you their mouth hurts, which helps you identify the cause. After the second molars come in, primary teething is complete and this source of behavioral disruption ends.',
    },
  ],
  whenNormal: [
    'Fussiness and behavior changes last only a few days surrounding a visible tooth eruption and then resolve',
    'Your baby has a very slight temperature increase (under 100.4F/38C) along with drooling and gum swelling',
    'Your child is a bit more clingy, irritable, or wakeful than usual but is still eating, drinking, and otherwise acting reasonably well',
    'Your baby wants to bite and chew on everything, which provides counter-pressure that soothes sore gums',
  ],
  whenToMention: [
    'Behavioral changes attributed to teething last more than a week without any tooth appearing, suggesting another cause',
    'Your baby is refusing to eat or drink for more than a day or two and you are concerned about hydration or nutrition',
    'Sleep disruption that started around teething has now continued for weeks and may have become a new habit',
  ],
  whenToActNow: [
    'Your baby has a fever of 100.4F (38C) or higher, which is not caused by teething alone and should be evaluated for illness',
    'Your baby has diarrhea, vomiting, or a rash that is being attributed to teething, as these are more likely signs of an infection that needs attention',
    'Your child is in severe pain that is not relieved by appropriate measures, or you see signs of infection in the gums such as significant swelling, pus, or bleeding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Teething: 4 to 7 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-4-to-7-Months.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Teething Pain. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-Pain.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Symptoms Associated with Infant Teething: A Prospective Study. Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/10742368/',
    },
  ],
};

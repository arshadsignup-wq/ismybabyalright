import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'caput-succedaneum-head-swelling',
  title: 'Caput Succedaneum',
  category: 'medical',
  searchTerms: [
    'caput succedaneum',
    'newborn head swelling',
    'baby swollen head after birth',
    'cone head baby',
    'newborn scalp swelling',
    'baby head puffy after delivery',
    'birth trauma head swelling',
    'soft swelling on baby head',
    'newborn head shape after birth',
  ],
  quickAnswer:
    'Caput succedaneum is a diffuse, soft swelling of the scalp that occurs during vaginal delivery due to pressure on the baby\'s head. It is very common, harmless, and resolves on its own within a few days. The swelling crosses suture lines (unlike cephalohematoma), may be accompanied by bruising, and does not require any treatment.',
  byAge: [
    {
      ageRange: '0-24 hours',
      context:
        'Caput succedaneum is visible at birth as a soft, puffy, boggy swelling on the part of the baby\'s head that presented first during delivery. It is most common after prolonged labor, vacuum-assisted delivery, or when membranes ruptured early. The swelling may feel squishy and crosses the midline and suture lines of the skull, which distinguishes it from cephalohematoma. There may be overlying bruising or discoloration. The baby\'s head may also appear elongated or "cone-shaped" (molding), which is a separate normal finding from the skull bones overlapping during delivery.',
    },
    {
      ageRange: '1-3 days',
      context:
        'The swelling from caput succedaneum typically begins to decrease within the first day or two. By day 2-3, you should notice the puffiness going down significantly. Any bruising may become more visible before fading, going through color changes from purple to green to yellow. The molded (cone-shaped) head will also gradually round out. No treatment is needed. The medical team may monitor for jaundice, as the breakdown of blood from bruising can contribute to elevated bilirubin levels.',
    },
    {
      ageRange: '3-7 days',
      context:
        'Caput succedaneum should be largely or fully resolved by this point. The head shape should be becoming more rounded as the skull bones shift back into normal position. If swelling persists or appears to be getting firmer rather than softer, mention it to your pediatrician, as it may need to be distinguished from a cephalohematoma or, rarely, a subgaleal hemorrhage. Watch for increasing jaundice (yellow skin color), as the bruising associated with caput can increase bilirubin levels.',
    },
    {
      ageRange: '1-4 weeks',
      context:
        'By this time, any residual effects from caput succedaneum should be completely resolved. The head shape should be normal. If you notice any persistent lumps or irregularities on the skull, these may be from a different cause such as a cephalohematoma (which can persist for weeks to months before resolving). Caput succedaneum has no long-term consequences and does not affect brain development.',
    },
  ],
  whenNormal: [
    'Soft, puffy scalp swelling present at birth that is gradually decreasing over the first 2-3 days',
    'Bruising on the scalp that is changing colors (purple to green to yellow) as it resolves',
    'An elongated or cone-shaped head that is gradually rounding out',
    'Your pediatrician has examined the swelling and confirmed it is caput succedaneum',
  ],
  whenToMention: [
    'The swelling has not decreased after 3-4 days or seems to be getting firmer',
    'You notice increasing yellow skin color (jaundice) in your baby',
    'You see a new or growing lump on the head that was not present at birth',
  ],
  whenToActNow: [
    'The swelling on the head is rapidly increasing in size, the baby is becoming pale, or the fontanelle is bulging, as these could indicate a subgaleal hemorrhage, which is a rare but serious condition involving ongoing bleeding under the scalp',
    'Your baby is excessively sleepy, not feeding, vomiting, or has a high-pitched cry, as these could be signs of increased intracranial pressure or other serious complications',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Birth Injuries. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-Head.aspx',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Caput Succedaneum. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/001587.htm',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-bruising-from-delivery',
  title: 'Bruising After Difficult Delivery',
  category: 'medical',
  searchTerms: [
    'newborn bruising from birth',
    'baby bruised after delivery',
    'birth trauma bruising',
    'newborn face bruised',
    'baby bruised from labor',
    'difficult delivery bruising',
    'newborn scalp bruising',
    'baby born bruised',
    'birth canal bruising baby',
    'how long does birth bruising last',
  ],
  quickAnswer:
    'Bruising from delivery is common, especially after difficult or prolonged labors, vacuum-assisted deliveries, or forceps deliveries. The bruising typically appears on the face, scalp, or body and resolves on its own within 1-2 weeks. Birth-related bruising can contribute to newborn jaundice as the blood breaks down, so your baby\'s bilirubin levels may be monitored.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Bruising from birth is common and can appear anywhere on the body that was compressed or subjected to pressure during delivery. The face is a common location for babies born face-first or after prolonged pushing. Bruising may look alarming but resolves without treatment as the body reabsorbs the blood. As the blood breaks down, it releases bilirubin, which can contribute to jaundice. Your baby\'s healthcare team may monitor bilirubin levels more closely if there is significant bruising. The bruising typically changes from purple to green to yellow before disappearing within 1-2 weeks.',
    },
    {
      ageRange: '1-3 months',
      context:
        'All birth-related bruising should be completely resolved by this time. If you notice new, unexplained bruising at this age, particularly in unusual locations, consult your pediatrician, as bruising in non-mobile infants warrants evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Any bruising at this age is not related to birth. Occasional minor bruises from normal activity are possible but uncommon in non-mobile babies. Unexplained bruising should always be evaluated.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become mobile, minor bumps and bruises from rolling, crawling, and pulling up are normal. Bruises on the shins, forehead, and knees are common in active babies. Bruises in unusual locations or without clear explanation should be discussed with your pediatrician.',
    },
  ],
  whenNormal: [
    'Bruising on the face, scalp, or body present at birth or shortly after delivery',
    'Bruising that gradually changes color (purple to green to yellow) and fades within 1-2 weeks',
    'No associated swelling, bleeding, or neurological symptoms',
    'Baby is otherwise well, feeding normally, and alert',
  ],
  whenToMention: [
    'Bruising is extensive and you are concerned about jaundice risk',
    'Bruising has not resolved within 2-3 weeks',
    'New bruising appears after the birth-related bruising has resolved',
  ],
  whenToActNow: [
    'Extensive bruising with a rapidly growing swelling on the head (which could indicate subgaleal hemorrhage, a serious condition)',
    'Baby becomes lethargic, jaundiced, or feeds poorly in conjunction with significant bruising',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Birth Injuries. Caring for Your Baby and Young Child.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Birth Trauma. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK539764/',
    },
  ],
  relatedConcernSlugs: ['cephalohematoma-newborn', 'subgaleal-hemorrhage-newborn', 'newborn-vacuum-marks', 'newborn-forceps-marks'],
};

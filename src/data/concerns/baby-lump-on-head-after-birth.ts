import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-lump-on-head-after-birth',
  title: 'Baby Has a Lump on Their Head After Birth',
  category: 'medical',
  searchTerms: [
    'baby lump on head after birth',
    'cephalohematoma',
    'caput succedaneum',
    'baby bump on head newborn',
    'baby swollen head after delivery',
    'baby soft lump on head',
    'newborn head swelling',
    'baby lump on skull',
    'birth injury head swelling',
    'baby firm lump on head',
    'cephalohematoma how long to resolve',
    'newborn head shape after birth',
  ],
  quickAnswer:
    'Lumps on a newborn\'s head after birth are common and usually benign. The two most common types are caput succedaneum (soft swelling of the scalp that crosses suture lines and resolves within days) and cephalohematoma (a firmer collection of blood under the skull\'s membrane that stays within one bone and resolves over weeks to months). Both result from the normal pressure of delivery and almost always resolve on their own without treatment.',
  byAge: [
    {
      ageRange: '0-48 hours',
      context:
        'Immediately after birth, your baby\'s head may look slightly misshapen, elongated, or have visible swelling. This is especially common after vaginal deliveries with prolonged pushing, vacuum assistance, or forceps use. Caput succedaneum is soft, puffy swelling that can feel squishy and may extend across the midline of the skull. It is caused by pressure during delivery and typically resolves within 24-48 hours. A cephalohematoma is a firmer, well-defined bump that usually appears within the first few hours after birth and is limited to one side of one skull bone.',
    },
    {
      ageRange: '2-14 days',
      context:
        'Caput succedaneum should be nearly or completely resolved by this point. A cephalohematoma, however, may actually become more prominent and feel firmer as the blood collection organizes. This can be alarming for parents but is a normal progression. The body is walling off the blood and will gradually reabsorb it. Do not massage, press on, or try to drain the bump. Some cephalohematomas may cause a slight increase in jaundice risk as the body breaks down the pooled blood.',
    },
    {
      ageRange: '2-12 weeks',
      context:
        'During this period, a cephalohematoma may start to calcify at its edges, making it feel like a hard ring with a soft center. This "crater" feeling is normal and does not indicate a skull fracture. The bump will gradually become smaller as the body reabsorbs the blood. Most cephalohematomas resolve completely within 1-3 months, though some take up to 6 months. The calcified edges will smooth out and remodel as the skull grows.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 3-6 months, most birth-related head lumps have resolved or are nearly gone. If a bump persists, is growing rather than shrinking, or is accompanied by other symptoms like developmental concerns, mention it to your pediatrician. In rare cases, persistent or unusual lumps may need imaging to rule out other causes. Rest assured that cephalohematomas, even large ones, almost never cause brain injury - the blood is between the skull bone and its outer membrane, not inside the skull.',
    },
  ],
  whenNormal: [
    'A soft, squishy swelling present at birth that resolves within 2-3 days (caput succedaneum)',
    'A firmer bump on one side of the head that appeared within hours of birth and is gradually shrinking (cephalohematoma)',
    'The bump feels like a hard ring with a soft center as it begins to calcify - this is normal healing',
    'Your baby is feeding well, alert, and meeting milestones normally despite the bump',
  ],
  whenToMention: [
    'A cephalohematoma is large (bigger than a golf ball) as it may increase jaundice risk',
    'The bump has not started shrinking after 2-3 months',
    'You notice the bump is growing rather than shrinking after the first two weeks',
  ],
  whenToActNow: [
    'The swelling is rapidly increasing, feels warm, or the skin over it is red - this could indicate infection',
    'Your baby is lethargic, not feeding, has a bulging fontanelle, or is showing signs of illness alongside the head swelling',
    'A new lump appears on your baby\'s head that was not present at birth and is not associated with a known injury',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['soft-spot-concerns', 'jaundice', 'abnormal-head-shape'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Head Shapes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Your-Newborns-Head.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Cephalohematoma. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470192/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Birth Injuries. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Birth-Injuries.aspx',
    },
  ],
};

import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'cyanosis-baby',
  title: 'My Baby Turns Blue (Cyanosis)',
  category: 'medical',
  searchTerms: [
    'baby turning blue',
    'baby blue lips',
    'baby blue around mouth',
    'baby cyanosis',
    'baby blue hands and feet',
    'acrocyanosis newborn',
    'baby blue when crying',
    'baby blue skin color',
    'baby lips turn purple',
    'baby blue tongue',
  ],
  quickAnswer:
    'Blue or purple discoloration limited to a baby\'s hands and feet (acrocyanosis) is very common in newborns and usually harmless, caused by immature circulation. However, blue coloring of the lips, tongue, face, or trunk (central cyanosis) is always a medical emergency that requires immediate evaluation, as it may indicate a heart or lung problem.',
  byAge: [
    {
      ageRange: '0-48 hours',
      context:
        'Acrocyanosis, or bluish-purple discoloration of the hands and feet, is extremely common in newborns and is a normal finding caused by immature peripheral circulation. It typically resolves within the first few days. Central cyanosis (blue lips, tongue, and trunk) in a newborn, however, is always abnormal and may indicate a congenital heart defect, respiratory distress, or other serious condition. Newborns are screened with pulse oximetry before hospital discharge to detect critical heart defects.',
    },
    {
      ageRange: '2 days - 3 months',
      context:
        'Occasional mild acrocyanosis (blue hands and feet) can persist for weeks, especially when the baby is cold. This is generally benign. Perioral cyanosis, a faint blue tint around the mouth, is common during crying or cold exposure and is usually not concerning if the lips and tongue remain pink. However, any blue discoloration of the lips, tongue, or body, especially when the baby is at rest, warrants immediate medical attention to rule out heart or lung conditions.',
    },
    {
      ageRange: '3-12 months',
      context:
        'By this age, acrocyanosis has typically resolved. Some babies develop breath-holding spells during intense crying, which can briefly cause blue or pale color changes. While alarming, brief breath-holding spells are usually benign and self-resolving. Any sustained cyanosis, cyanosis with poor feeding or difficulty breathing, or cyanosis at rest needs urgent evaluation. Some congenital heart defects may not become apparent until this age as the baby grows.',
    },
    {
      ageRange: '12 months+',
      context:
        'Blue coloring in toddlers can occur during breath-holding spells (which peak around 18-24 months) or with respiratory infections such as croup or bronchiolitis. Breath-holding spells, while frightening, are generally harmless. However, any unexplained blue discoloration of the lips or skin at rest, or cyanosis with breathing difficulty, always needs emergency evaluation.',
    },
  ],
  whenNormal: [
    'Blue or purple hands and feet (acrocyanosis) in a newborn in the first few days to weeks of life, while the lips and tongue remain pink',
    'A faint bluish tint around the mouth during crying or cold exposure that resolves quickly and the lips and tongue stay pink',
    'Brief color change during a breath-holding spell in an older infant or toddler that resolves spontaneously within seconds',
  ],
  whenToMention: [
    'You notice your baby\'s hands and feet remain persistently blue beyond the first few weeks of life',
    'A faint bluish tint around the mouth seems to happen frequently, even when the baby is not cold or crying',
    'Your baby seems to tire easily during feeds or breathe faster than expected',
  ],
  whenToActNow: [
    'Your baby\'s lips, tongue, gums, or trunk appear blue or gray at any age, especially at rest or during feeds, as this is a sign of central cyanosis and a medical emergency  -  call 911',
    'Blue coloring is accompanied by rapid or labored breathing, grunting, flaring nostrils, chest retractions, limpness, or difficulty feeding, as these indicate severe respiratory or cardiac distress',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Cyanosis in Infants and Children.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Cyanosis-in-Infants-Children.aspx',
    },
    {
      org: 'AAP',
      citation:
        'Mahle WT, et al. Role of Pulse Oximetry in Examining Newborns for Congenital Heart Disease. Pediatrics, 2009.',
      url: 'https://publications.aap.org/pediatrics/article/124/2/823/71896/Role-of-Pulse-Oximetry-in-Examining-Newborns-for',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Cyanosis: Causes and When to Seek Help.',
      url: 'https://www.mayoclinic.org/symptoms/cyanosis/basics/causes/sym-20050595',
    },
  ],
};

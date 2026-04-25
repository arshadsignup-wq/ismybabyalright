import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'fontanelle-bulging',
  title: 'My Baby\'s Soft Spot Looks Bulging',
  category: 'medical',
  searchTerms: [
    'bulging soft spot baby',
    'bulging fontanelle',
    'baby soft spot swollen',
    'raised fontanelle',
    'baby soft spot sticking out',
    'is bulging soft spot emergency',
    'tense fontanelle baby',
    'baby fontanelle bulge',
    'soft spot pulsing out',
    'bulging fontanelle meningitis',
  ],
  quickAnswer:
    'A bulging fontanelle can be a sign of increased pressure inside the skull and needs immediate medical attention, especially if your baby also has a fever, vomiting, or seems very unwell. However, brief bulging during crying or straining is normal. The key is whether it stays bulging when your baby is calm and upright.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In newborns, the fontanelle should feel soft and flat when your baby is calm and upright. It\'s normal to see gentle pulsing and slight fullness when crying. However, if the fontanelle remains bulging or tense when your baby is calm, or if your baby has a fever, poor feeding, or unusual sleepiness, seek immediate medical care as this could indicate meningitis or another serious infection.',
    },
    {
      ageRange: '3-6 months',
      context:
        'You may notice the fontanelle tenses and bulges briefly when your baby cries, coughs, or has a bowel movement - this is completely normal. What matters is the appearance when calm and upright. A persistently bulging fontanelle, especially with other symptoms like high fever, irritability, or lethargy, requires urgent evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby becomes more active, you might see the fontanelle react to exertion or crying. This is normal. A bulging soft spot to worry about is one that stays full and tense even when your baby is calm, quiet, and sitting upright. If accompanied by vomiting, fever, seizures, or a stiff neck, go to the emergency department immediately.',
    },
    {
      ageRange: '12-18 months',
      context:
        'The fontanelle is smaller now but should still not bulge when your toddler is calm. Conditions like shunt malfunction (in children with hydrocephalus), severe head injury, or infections can cause a bulging fontanelle. If you notice persistent bulging, especially after a fall or with illness, seek urgent medical attention.',
    },
    {
      ageRange: '18 months+',
      context:
        'Most children\'s fontanelles close between 18 and 24 months. Once closed, this sign is no longer useful. If your toddler\'s fontanelle is still open and appears bulging along with symptoms like severe headache, vomiting, or altered consciousness, go to the emergency department.',
    },
  ],
  whenNormal: [
    'The fontanelle bulges or tenses only when your baby is crying, coughing, or straining',
    'The soft spot returns to flat and soft immediately when your baby is calm',
    'You can see gentle pulsing in the fontanelle in rhythm with your baby\'s heartbeat',
    'Your baby is otherwise well, feeding normally, and acting like themselves',
  ],
  whenToMention: [
    'You\'re unsure whether the fontanelle is truly bulging or just normal pulsing',
    'Your baby\'s fontanelle seems slightly fuller than usual but your baby is completely well',
    'You want your pediatrician to check the fontanelle at the next well visit to give you a baseline',
  ],
  whenToActNow: [
    'The fontanelle remains bulging and tense when your baby is calm and upright',
    'Your baby has a bulging fontanelle along with fever, vomiting, seizure, or extreme irritability',
    'Your baby seems very unwell, is difficult to wake, has a weak cry, or has a stiff neck',
    'Your baby had a significant head injury and now has a bulging fontanelle',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby Soft Spots (Fontanelles). HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-Head.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Meningitis. CDC, 2024.',
      url: 'https://www.cdc.gov/meningitis/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Meningitis in Babies. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Meningitis.aspx',
    },
  ],
};

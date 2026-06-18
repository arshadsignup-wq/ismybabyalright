import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'choanal-atresia',
  title: 'My Baby Was Born with Blocked Nasal Passages (Choanal Atresia)',
  category: 'medical',
  searchTerms: [
    'choanal atresia baby',
    'blocked nasal passage newborn',
    'baby can\'t breathe through nose',
    'choanal atresia surgery',
    'bilateral choanal atresia',
    'unilateral choanal atresia',
    'newborn nasal obstruction',
    'baby nasal blockage birth defect',
    'choanal atresia stent',
    'CHARGE syndrome choanal atresia',
  ],
  quickAnswer:
    'Choanal atresia is a condition present at birth where one or both nasal passages are blocked by bone or tissue. Since newborns are obligate nose-breathers (they breathe primarily through their nose), bilateral choanal atresia (both sides blocked) is a medical emergency that is usually detected immediately after birth. Unilateral choanal atresia (one side blocked) may not be diagnosed until later. Treatment is surgical, and outcomes are generally very good. About half of babies with choanal atresia have other associated conditions, so a thorough evaluation is important.',
  byAge: [
    {
      ageRange: 'Newborn — immediate postnatal period',
      context:
        'Bilateral choanal atresia presents dramatically at birth — the baby has severe breathing difficulty that worsens when the mouth is closed and improves when crying (because crying opens the mouth). An oral airway or endotracheal tube may be placed to stabilize breathing. Unilateral choanal atresia is often less obvious — the baby may have one-sided nasal congestion or difficulty feeding. Diagnosis is confirmed when a small catheter cannot pass through the nasal passage, followed by CT imaging.',
    },
    {
      ageRange: '0-3 months (surgical repair)',
      context:
        'Surgery to open the blocked passage(s) is performed, typically through the nose (transnasal approach). Stents may be placed in the nasal passages after surgery to keep them open during healing. Stent care requires regular suctioning and saline drops, which your medical team will teach you. The surgery has a high success rate, though some children need a second procedure if the opening narrows (restenosis).',
    },
    {
      ageRange: '3-12 months',
      context:
        'After successful repair, most babies breathe and feed normally. Follow-up includes nasal endoscopy to ensure the repaired passage(s) remain open. If stents were placed, they are typically removed after several weeks. Your ENT surgeon will monitor for restenosis. Feeding often improves dramatically after successful repair, as babies can coordinate breathing and swallowing more easily.',
    },
    {
      ageRange: '1 year+',
      context:
        'Long-term outcomes after choanal atresia repair are excellent. Some children experience occasional nasal congestion or may need additional procedures if scarring narrows the passage. Your doctor may screen for CHARGE syndrome or other associated conditions, especially if there are other findings (coloboma, heart defects, growth issues, ear anomalies). Regular hearing assessments are recommended.',
    },
  ],
  whenNormal: [
    'Your baby had successful choanal atresia repair and is breathing and feeding well',
    'Your baby has unilateral choanal atresia and is managing well while awaiting planned repair',
    'Follow-up endoscopy shows the repaired passage is open and healing well',
  ],
  whenToMention: [
    'Your baby seems to be having increasing nasal congestion or noisy breathing after repair',
    'Your baby is having difficulty feeding or is not gaining weight well after repair',
    'You notice your baby seems to breathe primarily through the mouth after the repair was supposed to fix this',
    'You have questions about whether your baby needs testing for associated conditions',
  ],
  whenToActNow: [
    'Your baby is having severe difficulty breathing — turning blue, retracting, or gasping — call 911 immediately',
    'Your baby\'s nasal stent has come out or become dislodged — contact your ENT surgeon urgently',
    'Your baby is unable to feed and shows signs of dehydration — seek immediate medical care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'pierre-robin-sequence',
    'charge-syndrome',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Choanal Atresia. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK507724/',
    },
    {
      org: 'Boston Children\'s',
      citation:
        'Boston Children\'s Hospital. Choanal Atresia.',
      url: 'https://www.childrenshospital.org/conditions/choanal-atresia',
    },
    {
      org: 'AAO-HNS',
      citation:
        'American Academy of Otolaryngology. Choanal Atresia Clinical Practice.',
      url: 'https://www.entnet.org/resource/choanal-atresia/',
    },
  ],
};

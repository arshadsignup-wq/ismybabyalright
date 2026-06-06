import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-torticollis-vs-head-tilt',
  title: 'My Baby Tilts Their Head to One Side - Is It Torticollis?',
  category: 'medical',
  searchTerms: [
    'baby head tilt one side',
    'baby torticollis vs other causes',
    'why baby tilts head',
    'baby head preference one side',
    'baby favoring one side head',
    'torticollis or something else baby',
    'baby head tilt causes',
    'baby always looks one direction',
    'baby neck tilt when to worry',
    'baby asymmetric head position',
  ],
  quickAnswer:
    'A persistent head tilt in a baby is most commonly caused by congenital muscular torticollis (a tight sternocleidomastoid muscle), which is treatable with physical therapy. However, other causes include eye problems (the baby tilts to compensate for misaligned eyes), hearing issues, neurological conditions, Sandifer syndrome (reflux-related posturing), or structural cervical spine issues. Any persistent head tilt should be evaluated to identify the cause.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Congenital muscular torticollis (CMT) is the most common cause of head tilt in young babies. It may be related to positioning in the womb or birth. You may feel a small firm lump in the neck muscle. CMT responds very well to physical therapy and stretching exercises when started early. The earlier treatment begins, the faster the resolution.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If torticollis has not been addressed, you may notice associated plagiocephaly (flat spot on the head) from the baby consistently lying on one side. Physical therapy with specific stretching and positioning exercises is the primary treatment. Your pediatrician may also recommend extra tummy time on the non-preferred side.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If a head tilt develops after the newborn period (acquired torticollis), other causes should be considered. A head tilt that suddenly appears with fever could indicate a neck infection (retropharyngeal abscess). A head tilt associated with eye issues could be ocular torticollis. Your pediatrician will evaluate based on the timing and associated symptoms.',
    },
    {
      ageRange: '12-24 months',
      context:
        'A new head tilt in a toddler warrants evaluation. Causes include inner ear infection, eye alignment problems, trauma, and rarely, posterior fossa brain tumors (which may cause head tilt along with vomiting and balance problems). A head tilt that comes and goes and is associated with arching may be Sandifer syndrome related to reflux.',
    },
    {
      ageRange: '2-3 years',
      context:
        'A persistent or new head tilt in an older toddler should be evaluated. If the head tilt is accompanied by changes in walking, balance, vision, or new vomiting, prompt evaluation is important. Atlantoaxial rotatory subluxation (cervical spine issue) can cause acute torticollis in older children, sometimes following a minor injury or throat infection.',
    },
  ],
  whenNormal: [
    'A mild head preference in a newborn that improves with repositioning and tummy time',
    'Diagnosed congenital muscular torticollis that is improving with physical therapy',
    'A brief head tilt related to trying to see or hear something that resolves quickly',
  ],
  whenToMention: [
    'Your baby consistently tilts their head to one side despite repositioning efforts',
    'You notice a flat spot developing on one side of your baby\'s head',
    'A head tilt is present but your pediatrician has not yet evaluated it',
  ],
  whenToActNow: [
    'A sudden new head tilt with fever, neck stiffness, or refusal to move the neck (possible neck infection or meningitis)',
    'A head tilt accompanied by vomiting, balance problems, eye movement abnormalities, or changes in behavior (needs prompt neurological evaluation)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-congenital-muscular-torticollis-treatment',
    'baby-plagiocephaly-helmet-therapy',
    'baby-physical-therapy-referral',
    'eye-alignment-issues-infant',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Torticollis (Wryneck). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/bones-joints-muscles/Pages/Torticollis.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Congenital Muscular Torticollis. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK549778/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Torticollis in infants.',
      url: 'https://www.mayoclinic.org/diseases-conditions/torticollis/symptoms-causes/syc-20350567',
    },
  ],
};

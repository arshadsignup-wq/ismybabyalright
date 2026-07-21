import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'neurofibromatosis-cafe-au-lait-baby',
  title: 'Neurofibromatosis Type 1 (NF1) in Babies',
  category: 'medical',
  searchTerms: [
    'neurofibromatosis baby',
    'NF1 baby signs',
    'six or more cafe au lait spots',
    'multiple brown birthmarks baby',
    'neurofibromatosis type 1 infant',
    'NF1 cafe au lait spots',
    'Lisch nodules child',
    'neurofibromatosis diagnosis baby',
    'neurofibromas child',
    'NF1 learning difficulties',
  ],
  quickAnswer:
    'Neurofibromatosis type 1 (NF1) is one of the most common genetic conditions, affecting about 1 in 2,500 to 3,000 births. It is autosomal dominant, meaning a child needs only one copy of the altered NF1 gene (about half of cases are new mutations with no family history). The hallmark early sign is six or more cafe-au-lait spots larger than 5mm before puberty. NF1 has highly variable severity — many children have mild symptoms, while others develop complications requiring monitoring. Early diagnosis enables proactive surveillance for learning difficulties, vision changes, and tumor growth.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Cafe-au-lait spots are often the first and sometimes only sign of NF1 in infancy. These are flat, uniformly light brown patches present at birth or appearing in the first months of life. Having six or more spots larger than 5mm is the primary diagnostic criterion in young children. If NF1 is suspected, genetic testing for an NF1 gene mutation can confirm the diagnosis. A family history of NF1 in a parent plus cafe-au-lait spots in the infant is highly suggestive, though about half of cases occur without family history.',
    },
    {
      ageRange: '6-18 months',
      context:
        'Additional cafe-au-lait spots may appear during this period. Freckling in the axillary (armpit) or inguinal (groin) areas, called Crowe sign, is another diagnostic criterion that may emerge. Plexiform neurofibromas — diffuse, soft lumps that can grow along nerves — may occasionally be present at birth or become apparent in infancy, though they are more commonly noticed later. Annual ophthalmologic examinations begin to screen for optic pathway gliomas (tumors of the optic nerve), which occur in about 15% of children with NF1.',
    },
    {
      ageRange: '18 months - 5 years',
      context:
        'Lisch nodules (small, harmless bumps on the iris) may begin to appear but are typically not detected until later childhood. Optic pathway gliomas are most likely to cause symptoms during this period, so annual eye exams are critical. Signs of an optic glioma include bulging of the eye, decreased vision, or the child not tracking objects normally. Learning and attention difficulties affect up to 60-80% of children with NF1, so early developmental and educational assessments are recommended.',
    },
    {
      ageRange: '5+ years',
      context:
        'Neurofibromas (benign nerve sheath tumors) typically begin to appear during later childhood and adolescence. Most are dermal neurofibromas — small, soft bumps on or under the skin that are not dangerous. Plexiform neurofibromas require monitoring as they can rarely transform into malignant peripheral nerve sheath tumors (MPNST). Scoliosis and tibial dysplasia (bowing of the shin bone) are skeletal complications to monitor. The MEK inhibitor selumetinib (Koselugo) is now FDA-approved for symptomatic, inoperable plexiform neurofibromas in children. Ongoing multidisciplinary care at an NF clinic provides coordinated monitoring.',
    },
  ],
  whenNormal: [
    'Your baby has fewer than six cafe-au-lait spots, each smaller than 5mm, with no family history of NF1',
    'Your baby has been evaluated for NF1 and genetic testing was negative',
    'Your child has NF1 with only cafe-au-lait spots and is meeting developmental milestones normally',
    'Your child has a mild NF1 presentation with no tumors, normal vision, and normal learning',
  ],
  whenToMention: [
    'Your baby has six or more cafe-au-lait spots larger than 5mm — this is the key diagnostic threshold',
    'You notice freckling in your baby\'s armpits, groin, or neck creases',
    'You or your partner have NF1 and want your baby evaluated',
    'Your child with known NF1 is having learning or attention difficulties in school',
  ],
  whenToActNow: [
    'Your child with NF1 develops sudden vision changes, eye bulging, or stops tracking objects — possible optic pathway glioma requiring urgent ophthalmologic and neurological evaluation',
    'A known plexiform neurofibroma rapidly increases in size, becomes painful, or changes in texture — this requires urgent evaluation to rule out malignant transformation',
    'Your child with NF1 develops new neurological symptoms such as persistent headaches, weakness, or numbness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'cafe-au-lait-spots',
    'baby-brain-tumor-signs',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Neurofibromatosis Fact Sheet. NINDS, 2023.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/neurofibromatosis',
    },
    {
      org: 'AAP',
      citation:
        'Miller DT, Freedenberg D, Schorry E, et al. Health Supervision for Children With Neurofibromatosis Type 1. Pediatrics. 2019;143(5):e20190660.',
      url: 'https://publications.aap.org/pediatrics/article/143/5/e20190660/37032/Health-Supervision-for-Children-With',
    },
    {
      org: 'Children\'s Tumor Foundation',
      citation:
        'Children\'s Tumor Foundation. NF1 Fact Sheet. CTF, 2024.',
      url: 'https://www.ctf.org/understanding-nf/nf1',
    },
  ],
};

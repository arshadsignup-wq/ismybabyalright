import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-inguinal-lymphadenopathy',
  title: 'My Baby Has Swollen Lymph Nodes in Their Groin',
  category: 'medical',
  searchTerms: [
    'baby swollen groin lymph node',
    'baby lump in groin area',
    'inguinal lymphadenopathy baby',
    'baby groin swelling',
    'baby groin lump',
    'baby swollen gland groin',
    'toddler groin lymph node enlarged',
    'baby groin bump lymph node vs hernia',
    'baby inguinal mass',
    'baby groin swelling when to worry',
  ],
  quickAnswer:
    'Small, palpable lymph nodes in the groin (inguinal area) are very common in babies and young children and are usually reactive from minor infections in the lower extremities, diaper area, or genitals. Inguinal nodes up to 1.5 cm are generally considered normal in children. However, any groin lump should be evaluated by your pediatrician to distinguish between a lymph node, inguinal hernia, and other conditions.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A groin lump in a young baby may be an inguinal hernia rather than a lymph node. Hernias typically come and go (are more noticeable when the baby cries or strains) while lymph nodes are consistently present. An inguinal hernia in a baby needs surgical evaluation. Have your pediatrician examine any groin lump promptly.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Palpable inguinal lymph nodes become normal as babies are exposed to diaper rashes, minor skin irritations, and infections in the lower body. A soft, mobile, pea-sized node is typically benign. If the groin swelling increases with crying and decreases when relaxed, this suggests a hernia rather than a lymph node.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Small inguinal lymph nodes are extremely common and usually harmless. They may enlarge slightly with diaper rash, skin infections, or vaccination reactions in the thigh. Nodes that are soft, mobile, and less than 1.5 cm are generally not concerning. Keep monitoring size and consistency.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Inguinal lymph nodes remain commonly palpable. A node that becomes suddenly larger, red, warm, and tender may be developing bacterial lymphadenitis, often from a nearby skin infection or insect bite. This may need antibiotic treatment. An undescended testicle can also present as an inguinal mass in boys.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Small inguinal nodes continue to be normal. Concerning features that warrant evaluation include: a single very large node (over 2 cm), a hard or fixed node, rapid growth over days, or associated symptoms like fever, weight loss, or night sweats. These features, while rare, should prompt medical evaluation.',
    },
  ],
  whenNormal: [
    'Small (under 1.5 cm), soft, mobile nodes in the groin that are not tender',
    'Slight enlargement of groin nodes during a diaper rash or after vaccinations in the thigh',
    'Palpable groin lymph nodes in an otherwise healthy, growing child',
  ],
  whenToMention: [
    'An inguinal lymph node is larger than 1.5 cm or has been growing',
    'The groin lump becomes red, warm, or painful',
    'You are unsure whether a groin lump is a lymph node or something else (like a hernia)',
  ],
  whenToActNow: [
    'A groin lump appears suddenly, increases with crying, and your baby seems in pain (possible incarcerated hernia - seek immediate care)',
    'A rapidly growing groin mass with fever, discoloration of the overlying skin, or your baby appears ill',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-lymphadenopathy-persistent',
    'inguinal-hernia-baby',
    'baby-cervical-lymphadenopathy',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Lymphadenopathy. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatricsinreview/article/29/2/53/32592',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Swollen lymph nodes: When to see a doctor.',
      url: 'https://www.mayoclinic.org/diseases-conditions/swollen-lymph-nodes/symptoms-causes/syc-20353902',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Inguinal Lymphadenopathy. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK513250/',
    },
  ],
};

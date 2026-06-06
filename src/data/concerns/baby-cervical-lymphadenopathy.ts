import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cervical-lymphadenopathy',
  title: 'My Baby Has Swollen Lymph Nodes in Their Neck',
  category: 'medical',
  searchTerms: [
    'baby swollen neck lymph nodes',
    'baby neck lump lymph node',
    'cervical lymphadenopathy baby',
    'baby neck swollen gland',
    'baby lump side of neck',
    'baby swollen glands neck',
    'toddler neck lymph node enlarged',
    'baby neck lymph node when to worry',
    'baby neck lump under jaw',
    'baby neck mass',
  ],
  quickAnswer:
    'Swollen neck lymph nodes (cervical lymphadenopathy) are extremely common in babies and young children and are almost always caused by routine infections like colds, ear infections, or throat infections. Neck nodes up to 1 cm are generally considered normal in children. They may enlarge during infections and take weeks to return to normal size. Most are harmless, but nodes that are very large, hard, fixed, or associated with other concerning symptoms need evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Neck lumps in newborns may not always be lymph nodes. Other possibilities include branchial cleft cysts, thyroglossal duct cysts, or torticollis-related muscular changes. Have your pediatrician evaluate any neck lump in a young baby to determine what it is and whether monitoring or treatment is needed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Neck lymph nodes may become palpable as your baby begins fighting common infections. A single soft, mobile node that appears during a cold and gradually shrinks afterward is typical reactive lymphadenopathy. Nodes that are warm, red, tender, and rapidly growing may indicate a bacterial lymph node infection (lymphadenitis) requiring antibiotics.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With increasing infection exposure, you may feel small lymph nodes along the sides of your baby\'s neck, behind the ears, or under the jaw. These are normally soft, mobile, and pea-sized. They often enlarge with infections and then slowly decrease. It is completely normal to feel these nodes in a healthy baby.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Palpable neck lymph nodes in toddlers are nearly universal. A node that grows rapidly over 1-2 days, becomes very tender and red, and is accompanied by fever may be developing bacterial lymphadenitis, which needs antibiotic treatment. Cat scratch disease can also cause prominent lymph node swelling in the neck.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Most neck lymphadenopathy in this age group is reactive from the many infections children encounter. A node that is persistently larger than 2 cm, hard, non-tender, and not associated with a recent infection should be evaluated further. Your pediatrician may recommend blood tests or an ultrasound.',
    },
  ],
  whenNormal: [
    'Small (under 1 cm), soft, mobile nodes that come and go with infections',
    'Nodes that enlarged during a cold or ear infection and are gradually shrinking',
    'Multiple small palpable nodes on both sides of the neck in an otherwise healthy child',
  ],
  whenToMention: [
    'A neck lymph node is larger than 1.5 cm and has been present for more than a month',
    'A node is becoming red, warm, and increasingly tender (possible lymphadenitis)',
    'You feel a firm lump in the neck that does not seem to be a typical lymph node',
  ],
  whenToActNow: [
    'A rapidly growing neck mass with fever, redness, and your baby appears ill',
    'A hard, fixed neck mass, or neck swelling with difficulty breathing or swallowing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-lymphadenopathy-persistent',
    'swollen-lymph-nodes-baby',
    'baby-thyroglossal-duct-cyst',
    'baby-branchial-cleft-cyst',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Swollen Glands. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth/Pages/Swollen-Glands.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Swollen lymph nodes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/swollen-lymph-nodes/symptoms-causes/syc-20353902',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Cervical Lymphadenopathy in Children. Pediatric Clinics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/23452907/',
    },
  ],
};

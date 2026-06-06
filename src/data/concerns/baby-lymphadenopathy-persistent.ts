import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-lymphadenopathy-persistent',
  title: 'My Baby Has Swollen Lymph Nodes That Won\'t Go Away',
  category: 'medical',
  searchTerms: [
    'baby persistent swollen lymph nodes',
    'baby lymph nodes won\'t go down',
    'persistent lymphadenopathy baby',
    'baby lymph node swollen months',
    'baby lymph node still enlarged',
    'chronic swollen glands baby',
    'when to worry swollen lymph nodes baby',
    'baby lymph nodes not going away',
    'lymph node biopsy baby',
    'persistent enlarged lymph node toddler',
  ],
  quickAnswer:
    'Lymph nodes that remain enlarged for more than 4-6 weeks without an obvious infection, or that continue to grow, should be evaluated by your pediatrician. Most persistent lymph node enlargement in children is benign (reactive from recent infections), but prolonged or progressive enlargement warrants investigation to rule out less common causes. Small, mobile, non-tender nodes up to 1 cm are generally considered normal in children.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Palpable lymph nodes in very young babies are less common than in older children. If you notice a persistent lump in your newborn\'s neck, groin, or armpit, have your pediatrician evaluate it. In this age group, other conditions (such as congenital cysts) may mimic lymph nodes and need to be differentiated.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your baby\'s immune system activates from normal exposures, lymph nodes may become palpable. Small (under 1 cm), moveable, non-tender nodes in the neck and groin are often normal. Lymph nodes that are hard, fixed, rapidly growing, or associated with fever, weight loss, or other symptoms warrant medical evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies who have had frequent colds or infections may develop chronically slightly enlarged lymph nodes, especially in the neck. These reactive nodes are typically small, soft, mobile, and non-tender. They may persist for weeks to months after an infection resolves. Your pediatrician can monitor them at well visits.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Palpable lymph nodes are very common in toddlers and are usually reactive from normal immune activity. However, nodes that are larger than 2 cm, hard, fixed to underlying tissue, or progressively growing should be evaluated further. Your pediatrician may order blood tests or imaging depending on the clinical picture.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Most persistent lymph node enlargement in this age group is from repeated viral infections, especially in children who attend daycare. If a lymph node has been persistently enlarged for more than 6 weeks without improvement, is larger than 2 cm, or has concerning features, your pediatrician may consider further workup including blood tests, ultrasound, or referral.',
    },
  ],
  whenNormal: [
    'Small (under 1 cm), soft, mobile lymph nodes in the neck or groin that have been stable in size',
    'Lymph nodes that enlarged during an infection and are gradually decreasing in size over weeks',
    'Multiple small palpable lymph nodes in a toddler who attends daycare (generalized reactive lymphadenopathy)',
  ],
  whenToMention: [
    'A lymph node has remained enlarged for more than 4-6 weeks without getting smaller',
    'A lymph node is larger than 1.5-2 cm',
    'You notice new lymph node swelling in multiple areas of the body',
  ],
  whenToActNow: [
    'A lymph node is hard, fixed (does not move), or rapidly growing',
    'Persistent lymph node swelling is accompanied by unexplained fever, night sweats, weight loss, easy bruising, or fatigue',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-cervical-lymphadenopathy',
    'swollen-lymph-nodes-baby',
    'swollen-glands-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Lymphadenopathy in Children. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatricsinreview/article/29/2/53/32592',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Swollen lymph nodes in children.',
      url: 'https://www.mayoclinic.org/diseases-conditions/swollen-lymph-nodes/symptoms-causes/syc-20353902',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Lymphadenopathy in Children. American Family Physician.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/15508538/',
    },
  ],
};

import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'swollen-lymph-nodes-baby',
  title: 'My Baby Has Swollen Lymph Nodes',
  category: 'medical',
  searchTerms: [
    'baby swollen lymph nodes',
    'baby lump on neck',
    'baby swollen gland behind ear',
    'baby bump on back of head',
    'swollen lymph node in baby groin',
    'baby lymph node feels like pea',
    'toddler swollen lymph nodes',
    'baby lymph node infection',
    'are swollen lymph nodes normal in babies',
    'baby lump under jaw',
  ],
  quickAnswer:
    'Swollen lymph nodes are very common in babies and young children and are almost always a sign that the immune system is doing its job fighting off a minor infection. Small, pea-sized, rubbery, moveable lymph nodes in the neck, behind the ears, or in the groin are normal findings in healthy children. They rarely indicate anything serious.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Lymph nodes that are palpable (can be felt) in newborns are less common than in older babies. Small, soft, moveable nodes up to about 1 centimeter in the neck or groin can be a normal finding. However, a newborn with significantly enlarged, firm, or rapidly growing lymph nodes should be evaluated promptly, as their immune system is still immature and infections can progress more quickly at this age.',
    },
    {
      ageRange: '3-12 months',
      context:
        'As babies become more exposed to the world and begin exploring, their immune systems encounter many new viruses and bacteria. It is very common to feel small lymph nodes, particularly in the neck (cervical), behind the ears (post-auricular), and in the groin (inguinal). These nodes may swell temporarily during colds, ear infections, or teething and then slowly return to normal size over weeks. A node that is up to 1 centimeter, soft, moveable, and not tender is generally considered normal.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers frequently have palpable lymph nodes, and this is usually nothing to worry about. Children in daycare or with older siblings may have nearly constant mild lymph node swelling from frequent viral infections. The most common location is along the sides and back of the neck. Nodes may take weeks to months to return to normal size after an infection. A node that remains enlarged but stable, soft, and moveable is typically benign.',
    },
  ],
  whenNormal: [
    'Small (under 1 centimeter), soft, rubbery, moveable nodes in the neck, behind the ears, or groin',
    'Lymph nodes that swell during a cold or ear infection and then gradually decrease in size',
    'Your baby is otherwise well, eating, and active with no fever or weight loss',
    'The nodes have been present for a while but are not growing',
  ],
  whenToMention: [
    'A lymph node is larger than 1-2 centimeters and has been present for more than 4 weeks without shrinking',
    'The node feels firm or hard rather than soft and rubbery, or it is fixed in place and does not move freely',
    'Your baby has lymph nodes swelling in unusual locations such as above the collarbone (supraclavicular) or in the armpit',
  ],
  whenToActNow: [
    'A lymph node is rapidly enlarging, red, hot, or very tender, as this may indicate a bacterial lymph node infection (lymphadenitis) that may need antibiotics or drainage',
    'Your baby has persistent unexplained fevers, significant weight loss, night sweats, or generalized lymph node swelling throughout the body, as these symptoms warrant urgent evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Swollen Glands.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Swollen-Glands.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Swollen Lymph Nodes in Children.',
      url: 'https://www.mayoclinic.org/diseases-conditions/swollen-lymph-nodes/symptoms-causes/syc-20353902',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Red Book: Report of the Committee on Infectious Diseases. Lymphadenopathy Section.',
      url: 'https://publications.aap.org/redbook',
    },
  ],
};

import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'swollen-glands-baby',
  title: 'My Baby Has Swollen Glands',
  category: 'medical',
  searchTerms: [
    'baby swollen glands',
    'baby puffy neck',
    'baby swollen under chin',
    'baby glands swollen cold',
    'baby salivary gland swollen',
    'baby parotid gland swollen',
    'baby submandibular gland',
    'toddler swollen gland one side',
    'baby mumps symptoms',
    'baby gland infection',
  ],
  quickAnswer:
    'Swollen glands in babies most commonly refer to enlarged lymph nodes, which are a normal immune response to infections. Salivary gland swelling is less common in babies but can occur. Lymph nodes in the neck, behind the ears, and in the groin are frequently palpable in healthy children and usually indicate the immune system is working properly. Most swollen glands resolve on their own as the underlying infection clears.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Palpable lymph nodes are less common in very young babies. Small, soft, moveable nodes up to 1 centimeter can be normal findings, especially in the inguinal (groin) area. A markedly swollen or firm lymph node in a newborn, or one that is rapidly enlarging, is less common and should be evaluated by your pediatrician. At this age, infections can be more serious and warrant closer attention. Swelling in the parotid (cheek) area is rare in this age group.',
    },
    {
      ageRange: '3-12 months',
      context:
        'As babies encounter more infections, lymph nodes become more commonly palpable. It is normal to feel small, shotty (BB-like) lymph nodes in the neck and groin during and after colds, ear infections, or skin infections. The nodes may remain enlarged for weeks after the infection has cleared. Teething can sometimes cause mild lymph node swelling in the neck area. If a gland becomes red, warm, and very tender, this may indicate a bacterial lymph node infection that needs antibiotic treatment.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers in daycare or with siblings may have nearly persistently palpable cervical lymph nodes from frequent viral infections. This is very common and generally not concerning if the nodes are small (under 1-2 centimeters), soft, moveable, and the child is otherwise well. Salivary gland swelling (particularly the parotid glands in front of and below the ears) could indicate a viral infection such as mumps (if unvaccinated) or a bacterial parotitis. Mumps vaccination (MMR) is typically given at 12-15 months.',
    },
  ],
  whenNormal: [
    'Small (under 1 centimeter), soft, moveable lymph nodes in the neck, behind the ears, or groin in a child who has had recent colds',
    'Lymph nodes that swell during illness and gradually shrink afterward, even if they take weeks to return to normal size',
    'Your child is well, growing normally, and the glands are not painful or rapidly changing',
    'Multiple small, shotty nodes that have been stable for weeks to months',
  ],
  whenToMention: [
    'A lymph node is larger than 2 centimeters or has been persistently enlarged for more than 4-6 weeks without obvious cause',
    'A node feels hard, fixed (does not move freely), or is in an unusual location such as above the collarbone',
    'Your child has gland swelling along with persistent fevers, weight loss, or excessive sweating at night',
  ],
  whenToActNow: [
    'A gland becomes acutely red, hot, very swollen, and painful, suggesting a bacterial infection (suppurative lymphadenitis or abscess) that may require antibiotics or surgical drainage',
    'Swelling in the neck is causing difficulty breathing or swallowing, or your child looks very ill with high fever and a rapidly enlarging neck mass',
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
        'Mayo Clinic. Swollen Lymph Nodes: Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/swollen-lymph-nodes/symptoms-causes/syc-20353902',
    },
    {
      org: 'AAP',
      citation:
        'Nield LS, Kamat D. Lymphadenopathy in Children: When and How to Evaluate. Clinical Pediatrics, 2004.',
      url: 'https://publications.aap.org/pediatricsinreview',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pfapa-syndrome-periodic-fever-child',
  title: 'PFAPA Syndrome (Periodic Fever) in Children',
  category: 'medical',
  searchTerms: [
    'PFAPA syndrome child',
    'periodic fever child',
    'fever every 3 weeks child',
    'fever every month child',
    'clockwork fever child',
    'periodic fever aphthous stomatitis pharyngitis adenitis',
    'child fever mouth sores swollen glands',
    'predictable fever episodes child',
    'PFAPA treatment steroids',
    'recurring fever toddler pattern',
  ],
  quickAnswer:
    'PFAPA syndrome (Periodic Fever, Aphthous stomatitis, Pharyngitis, and cervical Adenitis) is the most common periodic fever syndrome in children. It causes high fevers (often 104-105\u00b0F) that recur like clockwork every 3-6 weeks, lasting 3-5 days each time. During episodes, children may also have mouth sores (aphthous ulcers), sore throat (pharyngitis), and swollen neck lymph nodes (adenitis). Between episodes, children are completely well and growing normally. PFAPA is not caused by infection and responds dramatically to a single dose of prednisone. Most children outgrow PFAPA within several years.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'PFAPA is very rare before age 1 and typically does not present in infancy. Periodic fevers in a baby under 6 months require careful evaluation for other causes, including infections, primary immunodeficiency, and other autoinflammatory conditions. If your baby has recurrent fevers, your pediatrician should evaluate thoroughly rather than attributing them to PFAPA.',
    },
    {
      ageRange: '6-12 months',
      context:
        'PFAPA can occasionally begin late in the first year but is uncommon. The typical onset is between 2 and 5 years of age. If your baby has a pattern of recurring fevers, keep a fever diary documenting the dates, duration, and associated symptoms. This pattern information is the most valuable diagnostic tool. Other periodic fever syndromes (like Familial Mediterranean Fever) and other causes should be considered at this age.',
    },
    {
      ageRange: '1-3 years',
      context:
        'This is the most common age of onset for PFAPA. Parents often notice a predictable pattern — high fever appearing every 3-6 weeks, lasting 3-5 days, with the child completely well between episodes. During fevers, the child may have mouth sores, sore throat (often with negative strep tests), and swollen lymph nodes in the neck. Importantly, growth and development are normal between episodes. A hallmark of PFAPA is the dramatic response to a single dose of oral corticosteroid (prednisone or prednisolone), which typically breaks the fever within hours.',
    },
    {
      ageRange: '3+ years',
      context:
        'PFAPA can continue through later childhood, though most children outgrow it, with the average resolution around age 8-10. Treatment options include corticosteroids given at the onset of each episode (which stop the fever but may shorten the interval between episodes), cimetidine (which can prevent episodes in some children), and tonsillectomy, which resolves PFAPA in approximately 60-90% of children. PFAPA is not associated with long-term health consequences, and children grow and develop normally.',
    },
  ],
  whenNormal: [
    'Your child is completely healthy, active, and growing normally between fever episodes',
    'Fever episodes follow a regular, predictable pattern every 3-6 weeks',
    'Your child\'s fever responds dramatically to a single dose of corticosteroid, typically resolving within hours',
    'Lab tests between episodes are entirely normal, including inflammatory markers',
  ],
  whenToMention: [
    'Your child has a pattern of recurring fevers every few weeks and you want to discuss whether PFAPA could be the cause',
    'Your child has been diagnosed with PFAPA and episodes are becoming more frequent or steroids are needed more often',
    'You want to discuss whether tonsillectomy might be an appropriate option for your child with PFAPA',
    'Your child with periodic fevers also has joint pain, rash, chest pain, or abdominal pain, which may suggest a different periodic fever syndrome',
  ],
  whenToActNow: [
    'Your child has a high fever and appears severely ill, is difficult to arouse, or has signs of a serious infection — even children with PFAPA can develop real infections that need urgent treatment',
    'Your child has periodic fevers along with hearing loss, joint swelling, rash, or severe abdominal pain, which may indicate a different autoinflammatory condition requiring different treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'persistent-fever-baby',
    'multiple-illnesses-close-together',
    'baby-immune-deficiency-signs',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. PFAPA Syndrome. Pediatrics in Review, 2019.',
      url: 'https://publications.aap.org/pediatricsinreview/article/40/3/110/35044',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Periodic Fever, Aphthous Stomatitis, Pharyngitis, and Adenitis (PFAPA). Genetic and Rare Diseases Information Center, 2023.',
      url: 'https://rarediseases.info.nih.gov/diseases/7666/periodic-fever-aphthous-stomatitis-pharyngitis-and-adenitis',
    },
    {
      org: 'ACR',
      citation:
        'American College of Rheumatology. Autoinflammatory Diseases. ACR, 2023.',
      url: 'https://www.rheumatology.org/I-Am-A/Patient-Caregiver/Diseases-Conditions/Autoinflammatory-Diseases',
    },
  ],
};

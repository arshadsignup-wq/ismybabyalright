import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'henoch-schonlein-purpura-baby',
  title: 'Henoch-Schonlein Purpura (IgA Vasculitis) in Children',
  category: 'medical',
  searchTerms: [
    'henoch schonlein purpura baby',
    'HSP baby',
    'IgA vasculitis child',
    'purple spots on toddler legs',
    'purple rash toddler buttocks',
    'purpura with joint pain child',
    'purple spots won\'t blanch toddler',
    'vasculitis rash child',
    'henoch schonlein purpura toddler',
    'non-blanching rash toddler legs',
    'abdominal pain with purple rash child',
  ],
  quickAnswer:
    'Henoch-Schonlein purpura (HSP), also called IgA vasculitis, is an inflammation of small blood vessels that causes a distinctive purple or reddish rash (purpura), joint pain, and sometimes abdominal pain or kidney involvement. It most commonly affects children between 2 and 6 years but can occur in toddlers. HSP often follows an upper respiratory infection. While it looks alarming, most children recover completely within 4-6 weeks without long-term effects.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'HSP is rare in babies under 1 year. Any non-blanching purpura (purple or red spots that do not fade when you press on them) in an infant needs urgent medical evaluation, as it could indicate other serious conditions like meningococcal infection or a bleeding disorder. Do not wait to see if it improves on its own.',
    },
    {
      ageRange: '1-3 years',
      context:
        'HSP can occur in toddlers, though it is most common in slightly older children. The classic presentation includes a palpable purpura rash (raised purple or red spots) mainly on the buttocks and legs, joint pain and swelling (especially in the ankles and knees), abdominal pain, and sometimes blood in the urine. The rash does not blanch when pressed. Symptoms often develop 1-3 weeks after a cold or sore throat.',
    },
  ],
  whenNormal: [
    'The purpura rash gradually fading over 2-4 weeks',
    'Joint pain and swelling that come and go and resolve within a few weeks',
    'Mild, crampy abdominal pain without vomiting blood or severe distress',
    'A brief recurrence of rash within the first few months after the initial episode',
  ],
  whenToMention: [
    'Your child has a non-blanching purple or red rash on the legs and buttocks',
    'Your child has joint pain and swelling along with a purpura rash',
    'Your child has mild abdominal pain with the rash',
    'Your child has had HSP and you notice blood or protein in the urine on follow-up testing',
  ],
  whenToActNow: [
    'Your child develops a non-blanching purpura rash with fever, which needs urgent evaluation to rule out meningococcal disease or sepsis',
    'Your child has severe abdominal pain, vomiting blood, or bloody stool with purpura',
    'Your child has decreased urine output, swelling of the face or ankles, or dark/bloody urine, which could indicate kidney involvement',
    'Your child cannot walk due to severe joint pain and swelling',
    'An infant under 12 months develops any non-blanching rash',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['petechiae-baby', 'baby-bruises-easily', 'hives', 'fever-with-rash'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Henoch-Schonlein Purpura. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatricsinreview',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. IgA Vasculitis.',
      url: 'https://www.niddk.nih.gov/health-information/kidney-disease/iga-vasculitis',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Vasculitis.',
      url: 'https://www.cdc.gov/vasculitis/',
    },
  ],
};

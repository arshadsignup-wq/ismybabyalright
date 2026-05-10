import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hirschsprung-disease-signs',
  title: 'Hirschsprung Disease Signs in Babies',
  category: 'medical',
  searchTerms: [
    'baby not passing meconium',
    'hirschsprung disease signs baby',
    'baby severe constipation newborn',
    'baby swollen belly no poop',
    'newborn won\'t poop first 48 hours',
    'baby chronic constipation from birth',
    'hirschsprung symptoms infant',
    'baby distended abdomen constipation',
  ],
  quickAnswer:
    'Hirschsprung disease is a condition present at birth where nerve cells are missing from part of the large intestine, making it difficult or impossible to pass stool. It affects about 1 in 5,000 newborns and is usually diagnosed in the first few days or months of life. With surgery, most children go on to live full, healthy lives.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Most cases of Hirschsprung disease are detected in the newborn period. The key warning sign is failure to pass meconium (first stool) within 48 hours of birth. Newborns may also develop a swollen abdomen, vomiting (sometimes green or bile-stained), and reluctance to feed. If your newborn has not passed stool within the first two days, this needs prompt medical evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'In milder cases, Hirschsprung disease may not be caught right away. Babies in this age range may show chronic constipation that does not respond to typical remedies, a persistently bloated belly, poor weight gain, and foul-smelling watery stools. If your baby has struggled with severe constipation since birth, discuss Hirschsprung disease with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older infants with undiagnosed Hirschsprung disease typically have a history of chronic, severe constipation since birth, failure to thrive, and abdominal distension. They may also develop enterocolitis, a dangerous intestinal infection. Diagnosis at this stage is less common but does occur, especially in short-segment disease.',
    },
    {
      ageRange: '12 months+',
      context:
        'Very short-segment Hirschsprung disease can occasionally go undiagnosed into toddlerhood. Children may have lifelong severe constipation, slow growth, and a visibly swollen belly. If your toddler has had refractory constipation since infancy with no improvement despite treatment, ask your doctor about further evaluation.',
    },
  ],
  whenNormal: [
    'Your newborn passed meconium within 48 hours and has regular bowel movements',
    'Your baby has occasional constipation that responds to dietary changes or gentle measures',
    'Your baby is gaining weight well and has a soft, non-distended abdomen',
    'Constipation started after starting solids rather than being present since birth',
  ],
  whenToMention: [
    'Your newborn did not pass meconium within the first 48 hours of life',
    'Your baby has had severe, persistent constipation since birth that doesn\'t respond to standard treatment',
    'Your baby has a chronically swollen or hard abdomen with poor weight gain',
  ],
  whenToActNow: [
    'Your baby has a distended abdomen with green or bile-stained vomiting and fever, which could indicate enterocolitis — a life-threatening complication',
    'Your newborn has not had a bowel movement since birth and appears in distress',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Hirschsprung Disease. NIDDK, 2023.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/hirschsprung-disease',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Hirschsprung Disease — Symptoms and Causes. Mayo Foundation for Medical Education and Research, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/hirschsprungs-disease/symptoms-causes/syc-20351556',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-peritonsillar-abscess-signs',
  title: 'Signs of a Peritonsillar Abscess in My Child',
  category: 'medical',
  searchTerms: [
    'peritonsillar abscess baby',
    'peritonsillar abscess toddler signs',
    'abscess near tonsil child',
    'baby throat abscess',
    'child throat swelling one side',
    'peritonsillar abscess symptoms child',
    'quinsy baby',
    'baby can\'t open mouth sore throat',
    'muffled voice sore throat baby',
    'peritonsillar abscess emergency',
  ],
  quickAnswer:
    'A peritonsillar abscess is a pocket of pus that forms behind or near one tonsil, usually as a complication of untreated tonsillitis. It is uncommon in young children but can occur. Signs include severe sore throat (typically one-sided), difficulty swallowing and opening the mouth, drooling, muffled or "hot potato" voice, fever, and swelling on one side of the throat. This is a medical emergency that requires prompt drainage and antibiotics.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Peritonsillar abscess is extremely rare in newborns and very young babies. Any significant throat swelling in this age group needs emergency evaluation. Deep neck space infections in young babies can be life-threatening and require immediate treatment.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Still very rare at this age. If your baby has a very high fever with drooling, refusal to swallow, and seems to be in severe pain, seek emergency care. An abscess may present differently in young children than in older children, making clinical evaluation essential.',
    },
    {
      ageRange: '12-24 months',
      context:
        'While uncommon, peritonsillar abscess can occur in toddlers, especially following a bout of tonsillitis or strep throat that was not adequately treated. Watch for sudden worsening of a sore throat, drooling (inability or unwillingness to swallow), high fever, and preference for tilting the head to one side.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Peritonsillar abscess becomes slightly more common in older children and adolescents. If your child has been treated for tonsillitis or strep but symptoms worsen rather than improve (especially on one side), or new symptoms develop such as difficulty opening the mouth (trismus), seek medical evaluation promptly. Treatment typically involves drainage (needle aspiration or incision) and IV antibiotics.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Children with recurrent tonsillitis are at higher risk. If treated strep throat worsens after initial improvement, with one-sided throat pain, difficulty opening the mouth, and drooling, this may indicate abscess formation. Emergency evaluation is needed as the abscess can compromise the airway if it grows large enough.',
    },
  ],
  whenNormal: [
    'A sore throat with mild tonsil swelling that improves over 3-5 days with treatment',
    'Both tonsils are equally swollen during a viral illness',
    'Your child can swallow and open their mouth normally despite a sore throat',
  ],
  whenToMention: [
    'Your child\'s sore throat is notably worse on one side',
    'Symptoms of tonsillitis worsen after initially improving',
    'Your child has difficulty swallowing saliva and is drooling more than expected for their age',
  ],
  whenToActNow: [
    'Your child has severe one-sided throat swelling, cannot open their mouth fully, is drooling and unable to swallow, has a muffled voice, or is leaning forward to breathe',
    'Your child has a very high fever with throat pain and any signs of difficulty breathing or airway compromise',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-tonsillitis-signs',
    'baby-strep-throat',
    'baby-pediatric-ent-when',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Peritonsillar Abscess. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatricsinreview/article/38/12/556/35234',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Peritonsillar abscess.',
      url: 'https://www.mayoclinic.org/diseases-conditions/peritonsillar-abscess/symptoms-causes/syc-20376470',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Peritonsillar Abscess. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK519520/',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'primary-immunodeficiency-signs-baby',
  title: 'Warning Signs of Primary Immunodeficiency in Children',
  category: 'medical',
  searchTerms: [
    'primary immunodeficiency warning signs',
    'baby always getting sick immune problem',
    '10 warning signs immunodeficiency',
    'recurrent infections baby immune',
    'antibiotics not working baby',
    'baby two pneumonias in a year',
    'deep infections baby',
    'family history immunodeficiency baby',
    'baby infections worse than normal',
    'Jeffrey Modell Foundation warning signs',
  ],
  quickAnswer:
    'Primary immunodeficiency diseases (PIDs) are a group of over 450 genetic conditions where the immune system does not function properly. The Jeffrey Modell Foundation has identified 10 warning signs in children: 4+ new ear infections in a year, 2+ serious sinus infections in a year, 2+ months on antibiotics with little effect, 2+ pneumonias in a year, failure to gain weight or grow normally, recurrent deep skin or organ abscesses, persistent thrush in mouth or fungal infection on skin, need for IV antibiotics to clear infections, 2+ deep-seated infections (sepsis, meningitis), and a family history of PID. If your child meets 2 or more of these criteria, discuss immunologic testing with your pediatrician.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'In the first 6 months, maternal antibodies provide significant protection, which can mask underlying immunodeficiency. Severe immunodeficiencies like SCID may be caught on newborn screening. Signs that should raise concern at this age include persistent oral thrush that does not respond to treatment, chronic diarrhea, failure to thrive, severe diaper rash, and infections with unusual organisms. A family history of immunodeficiency or unexplained infant deaths should prompt early evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As maternal antibodies wane, babies with primary immunodeficiency become more vulnerable. This is often when patterns of recurrent or unusually severe infections emerge. Watch for recurrent ear infections, pneumonia, skin infections, or infections that require unusually long courses of antibiotics. Chronic diarrhea and poor weight gain despite adequate caloric intake may also indicate immune problems. Your pediatrician can start with basic immune testing including immunoglobulin levels (IgG, IgA, IgM) and a complete blood count with differential.',
    },
    {
      ageRange: '1-3 years',
      context:
        'By this age, a pattern of recurrent infections becomes more apparent. It is normal for toddlers, especially those in daycare, to have 6-8 respiratory infections per year. What distinguishes immunodeficiency is the severity of infections, the need for repeated or prolonged antibiotics, complications like abscess formation, and infections with unusual organisms. If your child meets 2 or more of the 10 warning signs, ask your pediatrician about referral to a pediatric immunologist.',
    },
    {
      ageRange: '3+ years',
      context:
        'Some milder immunodeficiencies, such as specific antibody deficiency or common variable immunodeficiency (CVID), may not become apparent until later childhood when the pattern of sinopulmonary infections becomes undeniable. If your child has needed more than 4 courses of antibiotics in a year, has had pneumonia more than once, or develops infections that always seem worse than other children\'s, immune evaluation is warranted. Many primary immunodeficiencies are very treatable with immunoglobulin replacement therapy or targeted treatments.',
    },
  ],
  whenNormal: [
    'Your child gets 6-8 colds per year, especially in the first 1-2 years of daycare — this is completely normal',
    'Your child recovers from infections within the expected timeframe with standard treatment',
    'Your child has occasional need for antibiotics but responds well and improves quickly',
    'Your child is growing well and meeting developmental milestones despite frequent mild illnesses',
  ],
  whenToMention: [
    'Your child meets 2 or more of the Jeffrey Modell Foundation 10 warning signs of primary immunodeficiency',
    'Infections seem unusually severe, take longer than expected to resolve, or frequently require IV antibiotics',
    'You have a family history of primary immunodeficiency, recurrent serious infections, or unexplained childhood deaths',
  ],
  whenToActNow: [
    'Your child has a rapidly worsening infection that is not responding to treatment, especially a deep-seated infection like sepsis, meningitis, or a deep abscess',
    'Your newborn screening flagged for SCID — this requires urgent pediatric immunology evaluation within days',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-immune-deficiency-signs',
    'scid-severe-combined-immunodeficiency-baby',
    'iga-deficiency-baby',
    'chronic-granulomatous-disease-baby',
    'how-often-babies-get-sick-normal',
  ],
  sources: [
    {
      org: 'IDF',
      citation:
        'Jeffrey Modell Foundation. 10 Warning Signs of Primary Immunodeficiency.',
      url: 'https://info4pi.org/library/educational-materials/10-warning-signs',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Primary Immunodeficiency Diseases. Pediatrics in Review, 2019.',
      url: 'https://publications.aap.org/pediatricsinreview/article/40/8/403/35087',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Primary Immune Deficiency Diseases. NIAID, 2023.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/primary-immune-deficiency-diseases-pidds',
    },
  ],
};

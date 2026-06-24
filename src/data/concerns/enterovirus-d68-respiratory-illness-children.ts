import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'enterovirus-d68-respiratory-illness-children',
  title: 'Enterovirus D68: Respiratory Illness in Children',
  category: 'medical',
  searchTerms: [
    'enterovirus D68 children',
    'EV-D68 symptoms',
    'enterovirus respiratory illness child',
    'enterovirus D68 baby',
    'EV-D68 and paralysis',
    'enterovirus outbreak children',
    'enterovirus D68 treatment',
    'acute flaccid myelitis children',
    'enterovirus breathing difficulty child',
    'EV-D68 vs common cold',
  ],
  quickAnswer:
    'Enterovirus D68 (EV-D68) is a respiratory virus that can cause illness ranging from mild cold symptoms to severe breathing difficulty in children, particularly those with asthma. Unlike many common cold viruses, EV-D68 has been associated with outbreaks of severe respiratory illness and, rarely, with acute flaccid myelitis (AFM), a condition causing sudden limb weakness. There is no specific antiviral treatment or vaccine. Children with asthma should have their asthma action plan up to date during enterovirus season (late summer through fall).',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'While EV-D68 can infect infants, severe respiratory disease from this specific enterovirus is less common in this age group compared to toddlers and school-age children. However, young infants with any respiratory illness are at risk for breathing difficulty due to their small airways. Signs of concern include rapid breathing, nasal flaring, chest retractions, poor feeding, and decreased activity. If your infant develops these symptoms during enterovirus season, seek medical evaluation promptly.',
    },
    {
      ageRange: '1-5 years',
      context:
        'Toddlers and preschoolers are among the most commonly affected age groups during EV-D68 outbreaks. Children with asthma or a history of wheezing are at highest risk for severe illness. EV-D68 typically starts with runny nose, sneezing, and cough, and may progress to wheezing, difficulty breathing, and fever. In rare cases, usually 1-2 weeks after the respiratory illness, children may develop sudden arm or leg weakness (acute flaccid myelitis). Good hand hygiene and avoiding contact with sick individuals are the primary preventive measures.',
    },
    {
      ageRange: '5+ years',
      context:
        'School-age children are another commonly affected group, particularly during outbreak years. Children with asthma should use their controller medications consistently and have rescue inhalers available. EV-D68 outbreaks tend to occur in a biennial pattern and peak in late summer to early fall. Most children recover fully from respiratory illness within 1-2 weeks. The very rare complication of AFM requires immediate neurological evaluation if a child develops sudden limb weakness, difficulty walking, facial drooping, or difficulty swallowing.',
    },
  ],
  whenNormal: [
    'Your child has cold symptoms (runny nose, cough, mild fever) and is breathing comfortably.',
    'Your child with asthma develops a cold but their symptoms are well-controlled with their regular asthma medications.',
    'Your child recovers from a respiratory illness within 1-2 weeks.',
  ],
  whenToMention: [
    'Your child with asthma is wheezing more than usual during a respiratory illness.',
    'Your child\'s cold symptoms are worsening rather than improving after 5-7 days.',
    'You are concerned about EV-D68 circulating in your community and want guidance on prevention.',
  ],
  whenToActNow: [
    'Your child has difficulty breathing, rapid breathing, chest retractions, or nasal flaring.',
    'Your child develops sudden weakness in an arm or leg, difficulty walking, or facial drooping (possible AFM).',
    'Your child with asthma is not responding to rescue inhaler and is in respiratory distress.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['rsv-baby', 'bronchiolitis-baby-signs', 'wheezing', 'baby-breathing-fast'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Enterovirus D68. CDC, 2024.',
      url: 'https://www.cdc.gov/non-polio-enterovirus/about/ev-d68.html',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Acute Flaccid Myelitis (AFM). CDC.',
      url: 'https://www.cdc.gov/acute-flaccid-myelitis/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Enteroviruses. Red Book, 2024.',
      url: 'https://redbook.solutions.aap.org/chapter.aspx?sectionid=189640101',
    },
  ],
};

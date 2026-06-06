import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rotavirus-vaccine-side-effects',
  title: 'Post-Rotavirus Vaccine Concerns',
  category: 'digestive',
  searchTerms: [
    'rotavirus vaccine side effects baby',
    'baby fussy after rotavirus vaccine',
    'baby diarrhea after rotavirus vaccine',
    'rotavirus vaccine baby vomiting',
    'baby rotavirus vaccine reaction',
    'rotavirus vaccine stool changes',
    'baby loose stool after rotarix',
    'rotavirus vaccine intussusception risk',
    'baby irritable after rotavirus',
    'rotavirus vaccine safety baby',
  ],
  quickAnswer:
    'Mild side effects after the rotavirus vaccine are common and include temporary fussiness, mild diarrhea, and slight vomiting. These typically resolve within a few days. The vaccine provides excellent protection against severe rotavirus gastroenteritis. The risk of intussusception is very small (about 1 in 100,000) and the benefits far outweigh the risks.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The first dose of rotavirus vaccine is given at 2 months. Mild fussiness, loose stools, or a single vomiting episode in the days after the vaccine are common and not concerning. The vaccine virus can be shed in stool for up to 2 weeks, so thorough hand washing after diaper changes is important during this time.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The second (and possibly third) dose is given at 4 and 6 months. Side effects are similar to the first dose and usually mild. There is a very small increased risk of intussusception in the 1 to 2 weeks after the first or second dose. Know the signs: severe intermittent abdominal pain, bloody stools, and vomiting.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, the rotavirus vaccine series is complete. The protection provided is excellent and prevents the most severe forms of rotavirus gastroenteritis. If your baby develops a stomach bug despite vaccination, it is likely to be milder and shorter than it would have been without the vaccine.',
    },
    {
      ageRange: '12-24 months',
      context:
        'The rotavirus vaccine cannot be given after 8 months of age. If your toddler was vaccinated on schedule, they have good protection. Rotavirus gastroenteritis still occurs in vaccinated children but is significantly less severe.',
    },
  ],
  whenNormal: [
    'Mild fussiness or one to two loose stools in the 1 to 2 days following the vaccine',
    'A single episode of mild vomiting after the vaccine',
    'Normal feeding and behavior within 2 to 3 days of vaccination',
  ],
  whenToMention: [
    'Persistent diarrhea lasting more than a week after the vaccine',
    'You have concerns about the vaccine and want to discuss risks and benefits',
    'Your baby had a significant reaction to a previous dose',
  ],
  whenToActNow: [
    'Severe intermittent screaming with legs drawn up, bloody or jelly-like stools, and vomiting in the 1 to 3 weeks after the vaccine, which could indicate intussusception',
    'High fever, lethargy, or persistent vomiting after the vaccine',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Rotavirus Vaccine Information.',
      url: 'https://www.cdc.gov/vaccines/vpd/rotavirus/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Rotavirus Vaccine. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Rotavirus.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Rotavirus Vaccine Safety. Vaccine.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28789850/',
    },
  ],
  relatedConcernSlugs: ['baby-stomach-virus-prevention', 'intussusception-signs', 'diarrhea'],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-covid-symptoms',
  title: 'COVID-19 Symptoms in Baby or Toddler',
  category: 'medical',
  searchTerms: ['baby covid symptoms', 'toddler covid', 'baby covid-19', 'baby coronavirus', 'toddler covid symptoms', 'baby covid treatment', 'baby covid when to worry', 'toddler covid fever', 'baby covid test', 'baby exposed to covid'],
  quickAnswer: 'Most babies and toddlers who get COVID-19 have mild symptoms similar to a cold: fever, runny nose, cough, and fussiness. Some children have no symptoms at all. While children generally fare better than adults with COVID, babies under 1 year and children with underlying health conditions are at higher risk for severe illness. COVID vaccination is recommended for children 6 months and older. If your child tests positive for COVID and has mild symptoms, supportive care at home (fluids, rest, fever management) is usually sufficient. Watch for warning signs of a rare but serious complication called MIS-C (Multisystem Inflammatory Syndrome in Children), which can develop 2-6 weeks after infection.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies with COVID-19 may have: fever, cough, nasal congestion, poor feeding, fussiness, and sleepiness. Babies under 6 months are at the highest risk for severe COVID among children. If your baby under 3 months has a fever of 100.4 degrees F or higher, seek immediate medical care regardless of the suspected cause. For babies 3-12 months with confirmed COVID, monitor closely for breathing difficulty, dehydration, and persistent high fever. Contact your pediatrician for guidance. COVID vaccination is available starting at 6 months.' },
    { ageRange: '1-3 years', context: 'Toddlers with COVID typically show cold-like symptoms: fever, runny nose, cough, and sometimes vomiting or diarrhea. Most recover within 1-2 weeks. Treatment is supportive: fluids, rest, acetaminophen or ibuprofen for fever, and honey (for children over 1) for cough. Keep your child home from daycare until fever-free for 24 hours without medication and symptoms are improving. Watch for MIS-C symptoms 2-6 weeks after COVID: persistent fever, abdominal pain, vomiting, rash, red eyes, swollen hands/feet, or your child appearing very ill. MIS-C is rare but requires urgent medical care.' },
  ],
  whenNormal: ['Mild cold symptoms (runny nose, low fever, mild cough) that improve over a week', 'Reduced appetite for a few days during illness', 'Mild fatigue lasting a few days after fever resolves'],
  whenToMention: ['Your baby or toddler has tested positive for COVID and you want guidance', 'Symptoms are lasting longer than 2 weeks', 'Your child has an underlying health condition and has COVID', 'You have questions about COVID vaccination for your child'],
  whenToActNow: ['Difficulty breathing, rapid breathing, or chest retractions', 'Any fever in a baby under 3 months', 'Signs of dehydration: no wet diapers for 6+ hours, no tears, dry mouth', 'Your child is lethargic or difficult to wake', 'Bluish lips or face', 'New confusion or inability to stay alert', 'Symptoms of MIS-C 2-6 weeks after COVID: persistent high fever, severe abdominal pain, rash, red eyes, swelling - go to the ER immediately'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-cold-vs-flu-difference', 'baby-first-cold', 'baby-high-fever-over-104', 'baby-cough-types'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. COVID-19 in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/COVID-19/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. COVID-19 in Children and Teens.', url: 'https://www.cdc.gov/covid/about/covid-19-in-children.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. MIS-C. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/COVID-19/Pages/Multisystem-Inflammatory-Syndrome.aspx' },
  ],
};

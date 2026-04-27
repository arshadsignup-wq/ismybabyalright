import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-flu-symptoms',
  title: 'Baby Flu Symptoms and When to Seek Care',
  category: 'medical',
  searchTerms: [
    'baby flu symptoms',
    'influenza in babies',
    'baby flu vs cold',
    'infant flu treatment',
    'baby flu when to go to ER',
    'baby flu signs',
    'Tamiflu for babies',
    'flu in newborn',
    'baby flu complications',
    'baby flu fever how high',
    'toddler flu symptoms',
    'baby flu how long does it last',
  ],
  quickAnswer:
    'Influenza (the flu) in babies tends to hit harder and faster than a common cold. Symptoms include high fever (often 103-105F), body aches, extreme fatigue, dry cough, and sometimes vomiting or diarrhea. Babies under 6 months and children under 5 are at higher risk for flu complications. Antiviral medication (oseltamivir/Tamiflu) is approved for infants 2 weeks and older and works best when started within 48 hours of symptom onset. Contact your pediatrician promptly if you suspect the flu.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies under 6 months are at the highest risk for serious flu complications because they are too young to receive the flu vaccine. Their protection depends on maternal antibodies (if mom was vaccinated during pregnancy) and on everyone around them being vaccinated - this is called "cocooning." Flu in this age group can progress rapidly to pneumonia or dehydration. Any fever in a baby under 3 months requires immediate medical evaluation. Oseltamivir can be prescribed for babies as young as 2 weeks old.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies 6 months and older can and should receive the flu vaccine. Even vaccinated babies can still get the flu, but the illness is typically milder. Flu symptoms in babies this age include high fever, extreme irritability, poor appetite, cough, and sometimes vomiting or diarrhea. Keep your baby hydrated with frequent breast or bottle feeds. Acetaminophen and ibuprofen can help with fever and discomfort. Call your pediatrician early so antiviral treatment can be started if appropriate.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with the flu are often visibly miserable - clingy, refusing food, lethargic, and feverish. The flu usually comes on suddenly, unlike a cold which develops gradually. Fever can last 3-5 days and cough may persist for 2 weeks. Vomiting and diarrhea are more common in children than adults with the flu. Focus on hydration with small, frequent sips of breast milk, formula, or an oral rehydration solution. Your toddler may eat very little during the acute illness and that is okay as long as they are taking fluids.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Older toddlers can better communicate that they feel awful, which actually helps. They may tell you they have a headache, their body hurts, or they feel cold. The flu typically lasts 1-2 weeks, with the worst symptoms in the first 3-5 days. Annual flu vaccination is the best prevention. If your child has asthma, frequent ear infections, or other chronic conditions, they are at higher risk for flu complications and should be seen early for possible antiviral treatment.',
    },
  ],
  whenNormal: [
    'Your baby has the flu but is keeping down fluids, making wet diapers, and is not having breathing difficulties',
    'Your baby has a high fever for 3-5 days that responds to fever-reducing medication',
    'Your baby is sleepy and not eating much but is alert when awake and taking fluids',
    'Recovery is gradual over 1-2 weeks with lingering cough and fatigue',
  ],
  whenToMention: [
    'You suspect the flu and want to discuss antiviral treatment - timing matters (most effective within 48 hours)',
    'Your baby\'s fever has lasted more than 5 days or returns after seeming to improve',
    'Your baby has ear pain, persistent cough, or worsening symptoms after initial improvement, suggesting a secondary infection',
  ],
  whenToActNow: [
    'Your baby is having difficulty breathing - fast breathing, rib retracting, nasal flaring, wheezing, or blue-tinged lips',
    'Your baby is not keeping any fluids down and is showing signs of dehydration (no wet diapers for 8+ hours, no tears, sunken fontanelle)',
    'Your baby is extremely lethargic, difficult to wake, or not responding normally to you',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-cold-when-to-worry', 'persistent-fever-baby', 'dehydration-signs-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Flu (Influenza). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/The-Flu.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Flu and Young Children.',
      url: 'https://www.cdc.gov/flu/highrisk/children.htm',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Flu Treatment.',
      url: 'https://www.cdc.gov/flu/treatment/index.html',
    },
  ],
};

import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'viral-vs-bacterial-infection-difference',
  title: 'Viral vs. Bacterial Infection in Babies',
  category: 'medical',
  searchTerms: [
    'viral vs bacterial infection baby',
    'does baby need antibiotics',
    'baby infection viral or bacterial',
    'how to tell viral vs bacterial baby',
    'green snot bacterial infection baby',
    'baby virus or bacteria',
    'when does baby need antibiotics',
    'viral infection baby symptoms',
    'bacterial infection baby signs',
  ],
  quickAnswer:
    'Most infections in babies and toddlers are caused by viruses, which do not respond to antibiotics and need to run their course. Bacterial infections are less common but may require antibiotic treatment. Parents cannot reliably distinguish between the two at home  -  this requires a doctor\'s evaluation and sometimes lab tests. Green or yellow nasal mucus alone does not mean a bacterial infection.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In very young babies, distinguishing viral from bacterial infections is critical because bacterial infections (urinary tract infections, bloodstream infections, meningitis) can progress rapidly. This is why any fever in a baby under 3 months triggers a thorough workup including blood tests, urinalysis, and sometimes a spinal tap. The baby\'s age, not the symptoms alone, drives the urgency of evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most febrile illnesses at this age are viral  -  common culprits include RSV, rhinovirus, and human metapneumovirus. Bacterial infections to watch for include urinary tract infections (which may cause fever with no other obvious symptoms), ear infections, and rarely, pneumonia. Your pediatrician may check a urine sample if fever has no clear source. Viral illnesses typically peak at days 2-3 and then improve, while untreated bacterial infections tend to worsen or plateau.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The vast majority of colds, coughs, and fevers are viral. Ear infections are the most common bacterial complication, often following a cold. Signs that a viral illness may have a bacterial component include a fever that returns after improving, worsening symptoms after day 5, or ear drainage. Your doctor can examine the ears, listen to the lungs, and decide whether antibiotics are needed.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers commonly encounter viral illnesses like croup, hand-foot-and-mouth disease, roseola, and stomach viruses  -  none of which need antibiotics. Strep throat becomes a possibility after age 2-3 but is uncommon in younger toddlers. Bacterial sinus infections may be suspected when cold symptoms persist unchanged for more than 10 days or worsen after initial improvement. Only a doctor can determine which type of infection your child has.',
    },
  ],
  whenNormal: [
    'Your baby has a cold with clear-to-yellow-to-green nasal discharge that follows the typical 7-10 day course  -  this color progression is a normal viral response',
    'A viral illness causes 2-3 days of fever followed by gradual improvement',
    'Your child has a stomach virus with 1-3 days of vomiting or diarrhea that resolves on its own',
    'Your doctor examines your child and confirms a viral infection that does not need antibiotics',
  ],
  whenToMention: [
    'You are unsure whether your baby\'s illness is viral or bacterial and want your doctor\'s assessment',
    'Cold symptoms persist for more than 10 days without any improvement, which may suggest a bacterial sinus infection',
    'Your baby develops a new fever or worsening symptoms after initially improving from a viral illness',
    'Your baby has a high fever with no obvious cold symptoms  -  hidden bacterial infections like UTIs can present this way',
  ],
  whenToActNow: [
    'Your baby under 3 months has any fever  -  bacterial infections must be ruled out urgently regardless of how well the baby appears',
    'Your baby of any age has symptoms of a serious bacterial infection: high fever with extreme lethargy, stiff neck, non-blanching rash (purple spots that do not fade when pressed), rapid breathing, or inconsolability',
    'Your baby has ear drainage that is bloody or foul-smelling, or has swelling and redness behind the ear  -  this may indicate a complication of an ear infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Antibiotics: When They Can and Can\'t Help. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/treatments/Pages/Antibiotics-When-They-Can-and-Cant-Help.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Antibiotics Aren\'t Always the Answer.',
      url: 'https://www.cdc.gov/antibiotic-use/about/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Understanding Microbes in Sickness and in Health.',
      url: 'https://www.niaid.nih.gov/research/microbes-sickness-health',
    },
  ],
};

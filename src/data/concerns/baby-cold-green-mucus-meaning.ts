import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cold-green-mucus-meaning',
  title: 'My Baby Has Green Mucus - Does It Mean an Infection?',
  category: 'medical',
  searchTerms: [
    'baby green mucus meaning',
    'baby green snot',
    'green nasal discharge baby',
    'baby green boogers',
    'green mucus baby infection',
    'baby snot color meaning',
    'yellow green mucus baby',
    'baby thick green nasal discharge',
    'does green mucus mean antibiotics baby',
    'baby mucus color chart',
  ],
  quickAnswer:
    'Green or yellow mucus does NOT automatically mean your baby has a bacterial infection that needs antibiotics. Mucus color changes are a normal part of the immune response during any cold. As white blood cells fight the virus, they release enzymes that tint the mucus yellow or green. The color of mucus alone is not a reliable indicator of bacterial vs viral infection.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Any nasal discharge in a very young baby, regardless of color, should be monitored closely because it can affect feeding and breathing. Green mucus in this age group combined with fever, poor feeding, or difficulty breathing warrants medical evaluation. Use saline drops and gentle suctioning to help clear the congestion.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Green mucus during a cold is very common and usually appears around days 3-5 of the illness as the immune system responds. This is typically the peak of the cold, and the mucus should start to thin and clear as the cold resolves. Focus on keeping your baby comfortable with saline drops and suctioning rather than worrying about the color.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies in this age range frequently have colored nasal discharge, especially if they attend daycare. Green mucus that follows the typical cold pattern (appears, peaks, then clears over 7-10 days) is normal. Green mucus that persists beyond 10-14 days, or that appears alongside persistent fever or facial pain, may suggest a sinus infection.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers produce a remarkable amount of mucus during colds. Green or yellow mucus is extremely common and usually means the immune system is doing its job. It does not mean your child needs antibiotics. If the green discharge persists beyond 10-14 days with no improvement, or is accompanied by high fever, your pediatrician may want to evaluate for a secondary bacterial infection.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Older toddlers can learn to blow their nose, which helps clear mucus. Green mucus that comes and goes during a cold is normal. Thick, persistent green discharge from one nostril only, especially with a foul smell, could indicate a foreign object in the nose (a common toddler scenario) rather than an infection.',
    },
  ],
  whenNormal: [
    'Green or yellow mucus appears during days 3-5 of a cold and gradually clears by day 10',
    'Mucus is thicker and greener in the morning after sleeping and thins throughout the day',
    'The green mucus is from both nostrils and is part of an obvious cold with other symptoms',
    'Your baby\'s mucus transitions from clear to yellow to green and back as the cold resolves',
  ],
  whenToMention: [
    'Green nasal discharge persists beyond 10-14 days without any improvement',
    'Your baby has green mucus along with persistent fever after the first few days of the cold',
    'You notice green discharge from only one nostril, especially with a bad smell',
  ],
  whenToActNow: [
    'Your baby under 3 months has green mucus with fever, difficulty breathing, or refusal to feed',
    'Green mucus is accompanied by high fever above 102°F lasting more than 3 days, facial swelling, severe headache, or swelling around the eye at any age',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-cold-symptoms-duration',
    'baby-nasal-congestion-relief-methods',
    'chronic-congestion',
    'baby-foreign-object-in-nose',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Color of Baby\'s Mucus. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Children-and-Colds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Antibiotic Prescribing: Sinus Infection.',
      url: 'https://www.cdc.gov/antibiotic-use/sinus-infection.html',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Common cold in babies: Treatment.',
      url: 'https://www.mayoclinic.org/diseases-conditions/common-cold-in-babies/diagnosis-treatment/drc-20351657',
    },
  ],
};

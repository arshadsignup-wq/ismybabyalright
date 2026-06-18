import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pierre-robin-sequence',
  title: 'My Baby Was Diagnosed with Pierre Robin Sequence',
  category: 'medical',
  searchTerms: [
    'Pierre Robin sequence baby',
    'Pierre Robin syndrome',
    'small jaw baby breathing problems',
    'micrognathia newborn',
    'cleft palate small jaw',
    'Pierre Robin feeding difficulties',
    'Pierre Robin airway obstruction',
    'baby small chin breathing trouble',
    'Pierre Robin prognosis',
    'Pierre Robin sequence treatment',
  ],
  quickAnswer:
    'Pierre Robin sequence (PRS) is a condition present at birth characterized by three features: a small lower jaw (micrognathia), a tongue that falls back in the mouth (glossoptosis), and often a U-shaped cleft palate. The small jaw causes the tongue to sit far back, which can obstruct the airway and make breathing and feeding difficult. While the diagnosis is frightening, the jaw typically grows significantly during the first 1-2 years of life, and most children\'s airway problems improve substantially. Treatment focuses on ensuring safe breathing and adequate nutrition.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The newborn period is often the most challenging. Your baby may have difficulty breathing, especially while lying on their back, and feeding can be very difficult due to the cleft palate and tongue position. Positioning strategies (prone or side-lying) often help the airway. Some babies need a nasopharyngeal airway (a small tube through the nose) or, in more severe cases, surgical intervention. Feeding may require specialized bottles (such as the Pigeon or SpecialNeeds feeder) and working with a feeding specialist. Weight gain is closely monitored.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As the jaw begins to grow, many babies experience gradual improvement in airway symptoms. Feeding often becomes easier as well, though it remains more challenging than for typical babies. Your cleft team (a multidisciplinary group including a surgeon, speech pathologist, ENT, and others) will be coordinating your baby\'s care. Sleep studies may be performed to assess for obstructive sleep apnea.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Cleft palate repair surgery is typically performed between 9-14 months of age. By this time, the jaw has usually grown enough that airway issues have improved significantly. After palate repair, speech development will be monitored closely. Some children with PRS need additional jaw surgery (distraction osteogenesis) if the jaw growth is insufficient, but many do not.',
    },
    {
      ageRange: '1 year+',
      context:
        'Most children with isolated Pierre Robin sequence (not associated with another syndrome) do very well long-term. The jaw continues to grow and becomes less noticeably small. Speech therapy may be needed after palate repair. Ear infections and hearing issues are common with cleft palate, so regular audiology assessments are recommended. About 40% of PRS cases are associated with an underlying syndrome (such as Stickler syndrome), so genetic testing may be offered.',
    },
  ],
  whenNormal: [
    'Your baby has PRS and is breathing safely with positioning or minor interventions',
    'Your baby is gaining weight with specialized feeding techniques and bottles',
    'Your baby\'s breathing and feeding are gradually improving as their jaw grows',
  ],
  whenToMention: [
    'Your baby is having increasing difficulty with noisy breathing or seems to work hard to breathe',
    'Your baby is not gaining weight despite frequent feeding attempts',
    'You are exhausted from the demands of specialized feeding and need additional support or resources',
    'You have questions about upcoming surgeries or your baby\'s long-term outlook',
  ],
  whenToActNow: [
    'Your baby turns blue, stops breathing, or chokes during feeding — call 911. While waiting, place your baby on their stomach (prone position) to help open the airway',
    'Your baby is unable to feed and seems dehydrated (no wet diapers for 6+ hours, dry mouth, sunken fontanelle) — seek immediate medical care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'choanal-atresia',
    'posterior-tongue-tie',
  ],
  sources: [
    {
      org: 'CHOP',
      citation:
        'Children\'s Hospital of Philadelphia. Pierre Robin Sequence.',
      url: 'https://www.chop.edu/conditions-diseases/pierre-robin-sequence',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Pierre Robin Sequence.',
      url: 'https://medlineplus.gov/genetics/condition/isolated-pierre-robin-sequence/',
    },
    {
      org: 'Cincinnati Children\'s',
      citation:
        'Cincinnati Children\'s Hospital. Pierre Robin Sequence.',
      url: 'https://www.cincinnatichildrens.org/health/p/pierre-robin',
    },
  ],
};

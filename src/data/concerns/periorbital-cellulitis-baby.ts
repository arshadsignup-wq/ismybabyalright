import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'periorbital-cellulitis-baby',
  title: 'Periorbital Cellulitis',
  category: 'medical',
  searchTerms: [
    'periorbital cellulitis baby',
    'swollen eyelid baby infection',
    'baby eye swollen red',
    'preseptal cellulitis infant',
    'orbital cellulitis baby',
    'baby eyelid red and swollen',
    'baby eye infection swelling',
    'periorbital cellulitis toddler',
    'infected eyelid baby',
  ],
  quickAnswer:
    'Periorbital (preseptal) cellulitis is a bacterial infection of the eyelid and skin around the eye that occurs in front of the orbital septum. It is relatively common in young children and typically presents as redness, swelling, warmth, and tenderness of the eyelid. It is usually caused by insect bites, skin wounds, or spread from a sinus infection. While periorbital cellulitis is generally treatable with oral antibiotics, it must be distinguished from the more serious orbital cellulitis (infection behind the septum), which can threaten vision and spread to the brain.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Any infection around the eye in a young infant is taken very seriously due to the immature immune system. Even periorbital cellulitis in this age group often requires hospitalization for intravenous antibiotics. Signs include a swollen, red, warm eyelid. If the baby has a fever, is irritable, or the swelling is severe, emergency evaluation is needed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Periorbital cellulitis can occur from skin breaks, insect bites, or secondary to upper respiratory infections and sinus congestion. In infants under 1 year, the ethmoid sinuses can serve as a source of infection. Treatment typically involves oral antibiotics if the infection is mild, or intravenous antibiotics if the child appears systemically unwell or the infection is severe.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more mobile, they are more prone to insect bites and minor skin injuries near the eyes that can lead to periorbital cellulitis. A key distinguishing feature between periorbital and orbital cellulitis is that with periorbital cellulitis, the eye itself moves normally, is not protruding, and vision is unaffected. If the eye is bulging, movement is painful or limited, or the child appears very ill, orbital cellulitis must be ruled out.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with sinus infections are at risk for periorbital cellulitis as the infection can spread from the sinuses to the surrounding eye tissue. Treatment depends on severity. Mild cases may be managed with oral antibiotics and close follow-up. More severe cases, especially those not improving within 24-48 hours or showing signs of progression to orbital cellulitis, require hospitalization, IV antibiotics, and possibly CT imaging.',
    },
  ],
  whenNormal: [
    'Your baby\'s eyelid is slightly puffy after waking up in the morning but resolves quickly',
    'Mild eyelid swelling from a known insect bite that is not worsening and the baby has no fever',
    'Minor eye discharge from a cold or blocked tear duct without significant eyelid redness or swelling',
    'A chalazion or stye causes a localized bump on the eyelid without spreading redness',
  ],
  whenToMention: [
    'Your baby\'s eyelid is noticeably red and swollen, even if the baby does not have a fever',
    'Eyelid swelling is worsening despite warm compresses',
    'The swelling started after an insect bite or skin injury and is spreading',
  ],
  whenToActNow: [
    'Your baby has a hot, swollen, red eyelid with fever, as this needs same-day medical evaluation and likely antibiotic treatment',
    'The eye appears to be bulging forward (proptosis), eye movement is limited or painful, vision seems affected, or the child appears very ill, as these are signs of orbital cellulitis which is a medical emergency requiring immediate hospital evaluation and IV antibiotics',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Periorbital and Orbital Cellulitis. Red Book: Report of the Committee on Infectious Diseases.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/default.aspx',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Preseptal Cellulitis and Orbital Cellulitis.',
      url: 'https://www.aao.org/eye-health/diseases/orbital-cellulitis',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Periorbital and orbital cellulitis. Pediatrics in Review. 2004;25(9):312-320.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/15342822/',
    },
  ],
};

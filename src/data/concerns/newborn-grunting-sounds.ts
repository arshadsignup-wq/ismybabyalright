import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-grunting-sounds',
  title: 'Grunting Sounds in Newborns',
  category: 'medical',
  searchTerms: [
    'newborn grunting',
    'baby grunting sounds',
    'newborn grunting during sleep',
    'baby grunting while breathing',
    'newborn grunting straining',
    'baby grunting at night',
    'infant grunting baby syndrome',
    'newborn grunting noise normal',
    'baby making grunting sounds',
    'newborn grunting while pooping',
  ],
  quickAnswer:
    'Grunting in newborns is very common and usually normal. Babies grunt during sleep as they learn to coordinate their breathing, and they grunt while straining to have a bowel movement (grunting baby syndrome or infant dyschezia). However, continuous grunting with every breath, especially if accompanied by other signs of breathing difficulty, requires immediate medical attention.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns are notoriously noisy sleepers, and grunting is one of the most common sounds they make. Grunting during sleep occurs as your baby\'s respiratory system matures and they learn to regulate breathing. Grunting while straining to pass a bowel movement (infant dyschezia) is also very common. Your baby\'s abdominal muscles are not yet strong enough to effectively push stool out, so they grunt, strain, and may turn red. This is normal as long as the stool is soft when it comes out. The key distinction is: occasional grunting is normal, but grunting with every breath can be a sign of respiratory distress.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Grunting during sleep and bowel movements remains common. Grunting baby syndrome typically resolves by 3-4 months as your baby learns to coordinate relaxing the pelvic floor while pushing with the abdomen. Sleep grunting also decreases as the respiratory system matures. If grunting seems to increase or is accompanied by changes in breathing pattern, consult your doctor.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most grunting from infant dyschezia resolves by this age. Sleep-related grunting also decreases significantly. If grunting persists or increases, or if your baby seems uncomfortable, discuss with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Occasional grunting during effort or play is normal. Persistent grunting with every breath at this age is not typical and should be evaluated for respiratory or other causes.',
    },
  ],
  whenNormal: [
    'Grunting during sleep that comes and goes',
    'Grunting and straining during bowel movements with production of soft stools',
    'Baby has normal skin color, is feeding well, and has no difficulty breathing',
    'Grunting that stops when baby wakes up or finishes straining',
  ],
  whenToMention: [
    'Grunting with bowel movements that seems to cause significant distress for more than 10-15 minutes',
    'Grunting is accompanied by hard stools or no stool production despite straining',
    'Sleep grunting seems excessive and keeps baby (or parents) from resting',
  ],
  whenToActNow: [
    'Continuous grunting with every breath, especially with nasal flaring, chest retractions, or belly breathing, which indicates respiratory distress',
    'Grunting with a fever, poor feeding, lethargy, or blue/gray color of the lips or skin',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breathing Noises in Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Infant Dyschezia. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK537298/',
    },
  ],
  relatedConcernSlugs: ['newborn-straining-grunting-poop', 'newborn-sleep-sounds-noisy', 'newborn-noisy-breathing-normal'],
};

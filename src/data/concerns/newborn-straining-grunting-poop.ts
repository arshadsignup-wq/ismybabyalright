import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-straining-grunting-poop',
  title: 'Straining and Grunting to Poop (Infant Dyschezia)',
  category: 'digestive',
  searchTerms: ['baby straining to poop', 'newborn grunting pooping', 'infant dyschezia', 'baby turning red pooping', 'newborn struggling to poop', 'baby straining bowel movement', 'baby grunting straining red face', 'newborn difficult pooping', 'baby pushing hard to poop', 'infant dyschezia vs constipation'],
  quickAnswer: 'Straining, grunting, and turning red during bowel movements is very common in newborns and is called infant dyschezia. It occurs because babies are learning to coordinate relaxing the pelvic floor while bearing down with the abdomen. It is NOT constipation as long as the stool is soft. It typically resolves by 3-4 months.',
  byAge: [
    { ageRange: '0-1 month', context: 'Infant dyschezia is very common and can be distressing to watch. Your baby may grunt, strain, cry, and turn red or purple for 10-20 minutes before successfully passing a soft stool. The key distinction from constipation is that the stool, when it comes, is soft and normal in consistency. Your baby is simply learning the complex coordination required for a bowel movement. Do not use stimulation (rectal thermometers, suppositories) to help them poop, as this can prevent them from learning the coordination on their own.' },
    { ageRange: '1-3 months', context: 'Dyschezia typically continues and then resolves by 3-4 months as your baby learns to coordinate pelvic floor relaxation. It may get worse before it gets better. Continue to avoid rectal stimulation. If stools become hard, dry, or pellet-like, that is actual constipation and should be discussed with your pediatrician.' },
    { ageRange: '3-6 months', context: 'Most cases of dyschezia resolve during this period. Your baby\'s abdominal muscles and pelvic floor coordination improve with maturity.' },
    { ageRange: '6-12 months', context: 'Dyschezia should be resolved. Straining with hard stools at this age is likely constipation, which can occur with the introduction of solid foods.' },
  ],
  whenNormal: ['Straining, grunting, and turning red for minutes before passing a SOFT stool', 'Baby is otherwise comfortable between episodes', 'The stool, when produced, is normal in consistency', 'Episodes gradually decrease in frequency and intensity over weeks'],
  whenToMention: ['Straining produces hard, dry, or pellet-like stools (actual constipation)', 'Baby is in significant distress for extended periods', 'You are tempted to use rectal stimulation and want guidance'],
  whenToActNow: ['No stool for more than 5-7 days in a young infant, especially if accompanied by abdominal distension or vomiting', 'Blood in the stool or around the anus after straining'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Infant Constipation and Dyschezia. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Infant Dyschezia. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK537298/' },
  ],
  relatedConcernSlugs: ['newborn-grunting-sounds', 'newborn-gas-pain-signs', 'newborn-infrequent-stools-breastfed'],
};

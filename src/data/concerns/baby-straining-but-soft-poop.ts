import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-straining-but-soft-poop',
  title: 'Baby Straining but Poop Is Soft',
  category: 'digestive',
  searchTerms: [
    'baby straining but soft poop',
    'baby grunting to poop',
    'infant dyschezia',
    'baby strains but poop is not hard',
    'baby turns red pooping but soft stool',
    'baby pushing hard but not constipated',
    'grunting baby syndrome',
    'newborn straining to poop',
    'baby screams when pooping but soft',
    'baby bearing down to poop',
  ],
  quickAnswer:
    'If your baby strains, grunts, turns red, and even cries while pooping but the stool comes out soft, this is likely infant dyschezia - a very common and harmless condition. Your baby is simply learning to coordinate the muscles needed for a bowel movement (relaxing the pelvic floor while pushing with the abdomen). This almost always resolves on its own by 3-4 months.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Infant dyschezia is most common in this age range. Your baby may grunt, strain, turn red, draw up their legs, and cry for 10-20 minutes before finally passing a soft or even liquid stool. This is not constipation. Your baby\'s brain is learning the complex coordination required for pooping. Resist the temptation to use rectal stimulation, as this can actually delay the learning process.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most babies have figured out the coordination by now and straining with soft stools should be improving significantly. If it persists, it is still usually not a concern as long as the stool is soft. However, as you approach solid food introduction, watch whether stool consistency changes. True constipation (hard, pellet-like stools) is different from dyschezia.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If your baby is still straining with soft stools at this age, it may just be their style of pooping, or it could be that stools are firmer than they appear. Make sure your baby is getting enough fluids and fiber if eating solids. If stools are truly soft and your baby is otherwise thriving, this is not worrisome.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers sometimes strain because they are distracted and do not want to stop playing to poop. They may also push harder because they are standing or squatting. If stools are soft and regular, straining is not concerning. If your toddler is actively withholding or afraid to poop (even though stools are soft), that is a behavioral pattern worth discussing with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your baby strains, grunts, and turns red but produces soft stool and is fine afterward',
    'Episodes last 10-20 minutes and happen several times a day in a young baby',
    'Your baby is under 3-4 months and is still learning bowel coordination',
    'Baby is feeding well, gaining weight, and happy between episodes',
  ],
  whenToMention: [
    'Straining with soft stools persists beyond 4-5 months and you are concerned',
    'Straining is accompanied by blood in the stool, even if stools are soft',
    'Your baby seems to be in genuine pain (not just effort) with every bowel movement',
  ],
  whenToActNow: [
    'Your baby has a distended, hard abdomen and has not passed stool or gas for 24+ hours',
    'Straining is accompanied by vomiting (especially green or bloody), fever, or lethargy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Infant Constipation. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Infant-Constipation.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Infant Dyschezia. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK537296/',
    },
  ],
};

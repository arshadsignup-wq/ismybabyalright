import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'food-neophobia-toddler',
  title: 'My Toddler Is Afraid of New Foods',
  category: 'feeding',
  searchTerms: ['food neophobia toddler', 'toddler afraid new food', 'toddler scared of new food', 'toddler won\'t try anything new', 'fear of new foods child', 'food fear toddler', 'toddler new food anxiety', 'toddler cries new food', 'toddler refusing new foods', 'toddler food neophobia normal'],
  quickAnswer: 'Food neophobia, the fear of trying new foods, is a normal developmental phase that peaks between ages 2 and 6. It is believed to be an evolutionary protective mechanism. Most children outgrow it with patient, repeated, no-pressure exposure. Research shows it can take 10-30 exposures before a child accepts a new food. Continue offering new foods alongside familiar ones without pressure.',
  byAge: [
    { ageRange: '0-3 months', context: 'Not applicable.' },
    { ageRange: '4-6 months', context: 'Babies are generally quite accepting of new flavors. This is a great window to introduce many different tastes.' },
    { ageRange: '6-9 months', context: 'Babies remain relatively open to new foods during this period. Take advantage by offering diverse flavors.' },
    { ageRange: '9-12 months', context: 'Some food neophobia may begin to emerge around 12 months. Babies may begin rejecting foods they previously accepted.' },
    { ageRange: '12-24 months', context: 'Food neophobia typically intensifies during toddlerhood. Your toddler may refuse to try anything that looks unfamiliar. Keep serving new foods without pressure. Let your toddler see you eating and enjoying diverse foods. Involve them in food preparation. Never force a taste, as this increases fear. Over time, familiarity breeds acceptance.' },
  ],
  whenNormal: ['Toddler refuses new foods but eats a reasonable variety of familiar foods', 'Toddler needs many exposures before trying a new food', 'Toddler is suspicious of new foods but growing well overall'],
  whenToMention: ['Food neophobia is so severe that your toddler eats fewer than 10 foods', 'Toddler becomes extremely distressed or anxious around unfamiliar foods', 'Food fear is worsening rather than gradually improving after several months'],
  whenToActNow: ['Toddler has such extreme food fear that they are not eating enough to grow', 'Food anxiety is part of a broader pattern of extreme anxiety in multiple areas of life'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['picky-eating', 'sensory-food-aversion', 'pediatric-feeding-disorder-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Food Neophobia in Children. Pediatric Clinics of North America, 2022.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Food Neophobia: Nature, Nurture and Interventions. Appetite, 2020.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};

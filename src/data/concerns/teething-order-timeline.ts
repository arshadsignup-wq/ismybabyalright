import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'teething-order-timeline',
  title: 'Teething Order and Timeline',
  category: 'medical',
  searchTerms: [
    'baby teething order chart',
    'teething timeline baby',
    'when do babies get teeth',
    'what order do baby teeth come in',
    'teething schedule by age',
    'baby teeth eruption chart',
    'when do molars come in toddler',
    'baby teething stages',
    'how many teeth should baby have',
  ],
  quickAnswer:
    'Most babies get their first tooth around 6 months, though the normal range is 4 to 15 months. The typical order begins with the lower central incisors, followed by the upper central incisors, lateral incisors, first molars, canines, and finally second molars. All 20 primary teeth are usually in by age 2.5 to 3 years. Significant variation in timing is normal.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Most babies do not have teeth yet. Increased drooling around 2-3 months is a normal developmental change in saliva production and does not necessarily mean teething has started. Some babies may show early teething signs like gum rubbing, but actual tooth eruption before 3 months is uncommon.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The first teeth typically appear between 4 and 7 months. The lower central incisors (bottom front two teeth) usually erupt first, followed by the upper central incisors. Some babies may get their first tooth as early as 3 months or as late as 12 months, and both extremes are within normal range.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the most active teething period. After the central incisors, the upper and lower lateral incisors (the teeth next to the front teeth) typically come in between 9 and 13 months. Most babies have 4 to 8 teeth by their first birthday, though some may have more or fewer.',
    },
    {
      ageRange: '12 months+',
      context:
        'The first molars typically appear between 13 and 19 months, canines (the pointy teeth) between 16 and 23 months, and second molars between 23 and 33 months. Molar eruption can be more uncomfortable than incisors due to their larger size. By age 3, most children have all 20 primary teeth.',
    },
  ],
  whenNormal: [
    'Your baby gets their first tooth anywhere between 4 and 15 months of age',
    'Teeth come in a slightly different order than the standard chart, which is common',
    'Your baby has fewer teeth than a same-age peer, as there is a wide normal range',
    'Teething causes mild fussiness, drooling, and desire to chew on things',
  ],
  whenToMention: [
    'Your baby has no teeth by 12 months, though some healthy babies are late teethers',
    'Teeth appear significantly discolored, malformed, or pitted when they erupt',
    'Your baby has persistent high fever or diarrhea attributed to teething, as these are not truly caused by teething and may indicate illness',
  ],
  whenToActNow: [
    'Your child is 18 months old with no teeth at all, which may warrant evaluation for conditions affecting tooth development',
    'A newly erupted tooth appears dark, damaged, or the surrounding gum is severely swollen with pus, suggesting infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Eruption Charts. The Reference Manual of Pediatric Dentistry.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby\'s First Tooth: 7 Facts Parents Should Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Babys-First-Tooth-Facts-Parents-Should-Know.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Teething: Tips for soothing sore gums.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/teething/art-20046378',
    },
  ],
};

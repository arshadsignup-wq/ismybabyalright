import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-spitting-food-out-chewed',
  title: 'My Baby Chews Food Then Spits It Out',
  category: 'feeding',
  searchTerms: [
    'baby spitting out chewed food',
    'baby chews then spits food out',
    'baby won\'t swallow food after chewing',
    'baby spits out food after tasting',
    'toddler chewing and spitting food',
    'baby mouth food then spit',
    'baby refuses to swallow food',
    'baby chews food and takes it out',
    'baby tasting food but not eating',
    'baby spits out every food after chewing',
  ],
  quickAnswer:
    'Chewing food and spitting it out is a common behavior, especially in babies learning new textures. It can be part of sensory exploration, a sign of texture difficulty, or simply a way of testing new foods. Many babies accept the food after several exposures. As long as your baby is eating enough overall, occasional spitting is not a concern.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable for this age group.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Babies just starting solids often push food out of their mouth with their tongue. This is the tongue-thrust reflex, not intentional spitting. It does not mean baby dislikes the food.',
    },
    {
      ageRange: '6-9 months',
      context:
        'As babies explore new textures, chewing and spitting is very common. They are learning what textures they can manage and what feels comfortable. This is actually a positive sign that baby is exploring food safely. Continue offering the same foods and baby may eventually swallow them.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Some babies chew and spit because they are still developing the oral motor coordination to swallow certain textures. Others are simply being cautious with unfamiliar foods. Research shows it can take 10-15 exposures to a new food before a baby accepts it. Keep offering without pressure.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may chew and spit for many reasons including not liking the taste, texture sensitivity, or seeking control. If your toddler spits out most foods and is not eating enough to support growth, discuss with your pediatrician. If they spit some foods but eat enough overall, this is typically a phase.',
    },
  ],
  whenNormal: [
    'Baby spits out some foods but swallows others during the same meal',
    'Baby spits out a new food the first few times but eventually accepts it',
    'Baby is gaining weight normally despite spitting out some food',
    'Baby seems to be exploring the taste and texture before deciding to swallow',
  ],
  whenToMention: [
    'Baby spits out all solid foods and is not progressing with eating',
    'Baby seems to want to swallow but cannot manage to do so',
    'Baby is not gaining weight well because they spit out most food',
  ],
  whenToActNow: [
    'Baby appears to be unable to swallow food even when trying',
    'Baby is showing signs of pain or distress when attempting to swallow',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-holding-food-in-mouth', 'baby-pocketing-food-cheeks', 'baby-spitting-out-solids'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Picky Eating and Food Exploration in Infants. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Food Neophobia and Sensory Exploration in Infancy. Appetite, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};

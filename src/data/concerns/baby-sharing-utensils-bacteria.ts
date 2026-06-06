import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-sharing-utensils-bacteria',
  title: 'Is Sharing Spoons and Cups with My Baby Harmful?',
  category: 'feeding',
  searchTerms: [
    'sharing spoon with baby',
    'sharing cup with baby',
    'parent baby sharing utensils',
    'bacteria sharing food baby',
    'tasting baby food same spoon',
    'cavity bacteria sharing spoon baby',
    'kissing baby mouth bacteria',
    'pre-chewing food baby',
    'sharing food germs baby',
    'dental caries transfer baby',
  ],
  quickAnswer:
    'Sharing utensils with your baby can transfer oral bacteria, including those that cause cavities (Streptococcus mutans). While it is difficult to avoid all sharing, the AAP and pediatric dentists recommend minimizing direct sharing of spoons, cups, and toothbrushes. Pre-chewing food for baby is also discouraged as it can transfer bacteria and viruses.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Avoid sharing pacifiers or putting them in your own mouth to "clean" them. This can transfer oral bacteria to your baby before they have any teeth to protect.',
    },
    {
      ageRange: '4-6 months',
      context: 'Use a separate spoon for tasting baby\'s food rather than using the same one you feed baby with. If you want to check the temperature, put food on your wrist rather than tasting from baby\'s spoon.',
    },
    {
      ageRange: '6-9 months',
      context: 'As teeth begin to emerge, the risk of transferring cavity-causing bacteria increases. Use separate utensils when possible. If baby grabs your cup or spoon, it is not an emergency, just try to minimize routine sharing.',
    },
    {
      ageRange: '9-12 months',
      context: 'Baby may want to share food and drinks with you, which is a social behavior. You can share food from a common dish using separate utensils. Avoid sharing cups, especially if anyone in the family has active cold sores or illness.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers love to share and offer their food to parents. This is a sweet social behavior. While you should not panic about occasional sharing, using separate utensils when possible helps protect their developing teeth. Good oral hygiene for both parent and child is the best protection.',
    },
  ],
  whenNormal: [
    'Occasional sharing of utensils happens and baby remains healthy',
    'Baby wants to share food as a social behavior',
    'You minimize sharing but it happens sometimes',
  ],
  whenToMention: [
    'You have active cavities or dental disease and are concerned about transferring bacteria',
    'Baby is showing early signs of tooth decay',
    'Someone in the household has cold sores and you need guidance on preventing transmission',
  ],
  whenToActNow: [
    'Baby develops cold sores or fever blisters after sharing utensils with someone who has active herpes lesions',
    'Baby becomes ill after sharing food or utensils with someone who was sick',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-double-dipping-spoon', 'baby-bottle-rot-cavities'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Oral Health and Dental Care for Children. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/healthy-living/oral-health/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Transmission of Mutans Streptococci from Caregiver to Child. Journal of Dental Research, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Children\'s Oral Health. 2023.',
      url: 'https://www.cdc.gov/oralhealth/basics/childrens-oral-health/index.html',
    },
  ],
};

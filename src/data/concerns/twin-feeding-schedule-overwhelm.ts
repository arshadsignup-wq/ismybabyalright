import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'twin-feeding-schedule-overwhelm',
  title: 'Overwhelmed by My Twins\' Feeding Schedule',
  category: 'feeding',
  searchTerms: [
    'twin feeding schedule',
    'how to feed twins',
    'twin feeding overwhelm',
    'breastfeeding twins schedule',
    'bottle feeding twins at same time',
    'tandem feeding twins',
    'twin feeding tips',
    'feeding newborn twins alone',
    'twin feeding routine',
    'twins eating at different times',
  ],
  quickAnswer:
    'Feeding twins is one of the most demanding aspects of parenting multiples, and feeling overwhelmed is completely understandable. Whether breastfeeding, bottle-feeding, or combination feeding, establishing a synchronized schedule where both babies eat at roughly the same time is the key to managing. This may mean waking one baby to feed when the other wakes. It is okay to feed differently than you planned — fed babies and a functioning parent matter most.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The newborn period with twins is genuinely one of the most challenging phases of parenting. In the early weeks, twins may need to eat every 2-3 hours, meaning you are feeding nearly constantly. If breastfeeding, tandem feeding (feeding both at the same time using a twin nursing pillow) saves significant time once you are comfortable with positioning. If bottle feeding, propping one baby safely while feeding the other is a common strategy, though supervised. Accept help from anyone who offers — a second pair of hands during feeds is invaluable.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Feeding should become somewhat more manageable as your babies develop a more predictable pattern and may go longer between feeds. Work toward a synchronized schedule by feeding both babies when one wakes to eat. This is especially important for nighttime feeds. If you are pumping, establish a routine that allows you to pump while babies are content. It is normal for one twin to eat more or less than the other — they are individuals with different appetites. Track feeds with an app if it helps you feel more in control.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Introducing solids to twins adds another layer of complexity. You can feed both babies from the same bowl with the same spoon (unless one is sick) to save time, or sit them side by side in high chairs. Baby-led weaning can actually simplify feeding twins because you can prepare the same foods and let both eat independently. As your twins approach 12 months and transition to cow\'s milk and more table food, feeding becomes significantly less labor-intensive. Hang in there — it does get easier.',
    },
  ],
  whenNormal: [
    'You feel overwhelmed and exhausted by the relentless feeding schedule — this is the universal experience of twin parents',
    'Your twins eat different amounts or have different feeding preferences — they are individuals',
    'You planned to exclusively breastfeed but are supplementing with formula — flexibility is survival, not failure',
    'You sometimes feed one twin before the other rather than tandem feeding — whatever works is the right approach',
  ],
  whenToMention: [
    'One twin is consistently eating much less than the other or is not gaining weight appropriately',
    'You are so exhausted from feeding that you are concerned about your own safety or ability to function',
    'You are struggling with breastfeeding and want support from a lactation consultant experienced with multiples',
  ],
  whenToActNow: [
    'One or both twins show signs of dehydration: fewer than 6 wet diapers in 24 hours, dry mouth, no tears, or sunken fontanelle',
    'You are experiencing symptoms of severe postpartum depression or anxiety that are affecting your ability to care for your babies',
    'One twin is losing weight or appears significantly unwell compared to their sibling',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'twin-sleep-synchronization-difficulty',
    'pumping-output-concerns',
    'formula-feeding-guilt',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Feeding Multiples. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Feeding-Multiples.aspx',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Breastfeeding Twins.',
      url: 'https://www.llli.org/breastfeeding-info/twins/',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Feeding Practices for Twins. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6213615/',
    },
  ],
};

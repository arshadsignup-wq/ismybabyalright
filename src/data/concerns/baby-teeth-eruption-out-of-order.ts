import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-teeth-eruption-out-of-order',
  title: 'My Baby\'s Teeth Are Coming In Out of Order',
  category: 'physical',
  searchTerms: ['baby teeth out of order', 'baby top teeth first', 'baby teeth wrong order', 'teeth eruption sequence baby', 'baby molars before incisors', 'baby canines first', 'unusual tooth eruption order', 'baby teeth not following pattern', 'teeth order baby', 'baby tooth eruption atypical'],
  quickAnswer: 'While there is a typical eruption order (lower central incisors first, then upper central incisors), many babies get teeth in a different sequence, and this is usually perfectly normal. As long as all teeth eventually come in and appear healthy, the order does not matter medically.',
  byAge: [
    { ageRange: '6-9 months', context: 'The typical first teeth are the lower central incisors, but some babies get upper teeth first or lateral teeth before central ones. This is a normal variation and does not indicate any dental problem.' },
    { ageRange: '9-12 months', context: 'Your baby may be getting teeth in an unusual sequence. As long as the teeth appear healthy (white, firm, properly shaped), the order of eruption is not medically significant.' },
    { ageRange: '12-18 months', context: 'Multiple teeth may be erupting. An unusual order is not concerning. By 18 months, most children have about 8-12 teeth. If teeth are significantly delayed overall, that is more important than the order.' },
    { ageRange: '18-36 months', context: 'All 20 primary teeth typically erupt by age 2.5-3. If your child has all their teeth despite an unusual eruption order, dental development is complete and normal. Missing teeth (fewer than 20) by age 3 should be evaluated.' },
  ],
  whenNormal: ['Teeth are coming in but in a different order than typical.', 'All teeth appear healthy and well-formed.', 'The total number of teeth is appropriate for age.', 'Your baby is comfortable and feeding well.'],
  whenToMention: ['Teeth appear discolored, malformed, or very small.', 'Significantly fewer teeth than expected for age.', 'One side has teeth and the other does not.'],
  whenToActNow: ['Teeth are crumbling or breaking.', 'Severe pain or infection around erupting teeth.'],
  relatedMilestones: ['dental-eruption'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-teeth-eruption-early', 'baby-teeth-eruption-very-late'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Baby Teeth Eruption', url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Babys-First-Tooth-Facts-Parents-Should-Know.aspx' },
    { org: 'NIH', citation: 'Lunt RC, Law DB. A Review of the Chronology of Eruption of Deciduous Teeth. J Am Dent Assoc. 1974;89(4)', url: 'https://pubmed.ncbi.nlm.nih.gov/4528712/' },
    { org: 'CDC', citation: 'CDC - Children\'s Oral Health', url: 'https://www.cdc.gov/oralhealth/basics/childrens-oral-health/index.html' },
  ],
};

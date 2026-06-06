import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-jaw-alignment-concerns',
  title: 'My Toddler\'s Jaw Alignment Seems Off',
  category: 'physical',
  searchTerms: ['toddler jaw alignment', 'toddler underbite', 'toddler overbite', 'toddler jaw crooked', 'toddler bite misaligned', 'toddler crossbite', 'baby jaw alignment', 'toddler teeth don\'t line up', 'toddler malocclusion', 'toddler jaw asymmetry'],
  quickAnswer: 'Some jaw alignment variations in toddlers are normal and may resolve as the jaw grows and permanent teeth come in. Underbites, overbites, and crossbites in baby teeth do not always predict permanent tooth alignment. A pediatric dentist can monitor jaw growth and determine if early intervention is needed.',
  byAge: [
    { ageRange: '6-12 months', context: 'Jaw alignment is difficult to assess with only a few teeth. The jaw is still growing and changing rapidly. No intervention is typically needed at this age.' },
    { ageRange: '12-24 months', context: 'As more teeth come in, alignment patterns become more apparent. Mild overbites and underbites are common and often self-correct. Pacifier and thumb-sucking habits can affect alignment but usually resolve if habits stop by age 3-4.' },
    { ageRange: '2-3 years', context: 'With a full set of baby teeth, your child\'s bite pattern is more visible. A pediatric dentist can evaluate alignment at regular dental visits. Crossbites (upper teeth sitting inside lower teeth) may be monitored more closely.' },
    { ageRange: '3-5 years', context: 'If significant jaw misalignment persists, early orthodontic evaluation may be recommended. Some conditions benefit from early intervention while the jaw is still growing. Your pediatric dentist can refer to an orthodontist if needed.' },
  ],
  whenNormal: ['Mild overbite or underbite in baby teeth.', 'Alignment is improving as jaw grows.', 'Your child eats and chews comfortably.', 'No jaw pain or clicking.'],
  whenToMention: ['Significant crossbite or jaw asymmetry.', 'Your child has difficulty chewing or biting.', 'Jaw makes clicking or popping sounds.'],
  whenToActNow: ['Your child cannot close their mouth properly.', 'Sudden jaw misalignment after injury.'],
  relatedMilestones: ['dental-eruption'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-teeth-grinding-damage'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Dental Care', url: 'https://www.healthychildren.org/English/healthy-living/oral-health/Pages/default.aspx' },
    { org: 'NIH', citation: 'Warren JJ, et al. Effects of Nonnutritive Sucking Habits on Occlusal Characteristics. Pediatr Dent. 2005;27(6)', url: 'https://pubmed.ncbi.nlm.nih.gov/16532886/' },
    { org: 'CDC', citation: 'CDC - Children\'s Oral Health', url: 'https://www.cdc.gov/oralhealth/basics/childrens-oral-health/index.html' },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'polydactyly-extra-fingers-toes',
  title: 'Polydactyly (Extra Fingers or Toes) in Babies',
  category: 'physical',
  searchTerms: [
    'baby extra finger',
    'baby extra toe',
    'polydactyly baby',
    'baby born with extra digit',
    'baby extra pinky finger',
    'supernumerary digit baby',
    'baby sixth finger',
    'baby extra toe removal',
    'polydactyly treatment baby',
    'is extra finger hereditary',
    'postaxial polydactyly baby',
    'preaxial polydactyly baby',
  ],
  quickAnswer:
    'Polydactyly (having extra fingers or toes) is one of the most common congenital hand and foot differences, occurring in about 1 in every 500-1000 births. It can range from a small, soft nub of tissue to a fully formed extra digit with bones and joints. In many cases, it is an isolated finding with no other health concerns and runs in families. Treatment depends on the complexity of the extra digit and is usually straightforward.',
  byAge: [
    {
      ageRange: 'Newborn',
      context:
        'Extra digits are typically noticed at birth. The most common type is postaxial polydactyly (an extra small digit on the pinky side of the hand or the little toe side of the foot), which is very common in certain populations and is usually a simple, isolated finding. Preaxial polydactyly (on the thumb or big toe side) is less common and may warrant additional evaluation. Your pediatrician will assess whether the extra digit has bones, blood supply, and nerve connections.',
    },
    {
      ageRange: '0-6 months',
      context:
        'If the extra digit is a small, soft nub without bone (called a rudimentary or vestigial digit), it may be removed in the nursery or at a pediatric visit with a simple procedure. If the extra digit contains bones, tendons, or joints, your baby will likely be referred to a pediatric hand surgeon or orthopedic specialist to plan a more involved procedure, usually performed between 6 months and 2 years of age.',
    },
    {
      ageRange: '6 months - 3 years',
      context:
        'Surgical removal of a more complex extra digit is typically done during this window, before the child develops fine motor skills that depend on hand function. The surgery is usually outpatient and recovery is straightforward. For extra toes, surgery may be done later or sometimes not at all if the toe does not cause problems with shoe fitting or walking. Long-term outcomes are excellent.',
    },
  ],
  whenNormal: [
    'A small, soft extra digit on the pinky side of the hand, especially if it runs in the family',
    'An extra toe that does not interfere with shoe fitting or walking',
    'The extra digit having no bones (a soft tissue tag) that can be addressed with a simple procedure',
    'Family history of polydactyly, as it is often inherited',
  ],
  whenToMention: [
    'Your baby has an extra finger or toe and you want to discuss treatment options and timing',
    'The extra digit appears to have bone, joint movement, or a nail',
    'You notice any other differences in your baby\'s hands, feet, or other body parts',
    'You want a referral to a pediatric hand or orthopedic specialist',
  ],
  whenToActNow: [
    'The extra digit changes color (turns blue, white, or dark), which could indicate blood flow problems',
    'There is a thread, hair, or string wrapped around the base of the digit causing swelling',
    'The extra digit bleeds, becomes infected, or has an open wound',
    'Your baby has multiple extra digits or other unusual physical findings alongside polydactyly, which may warrant genetic evaluation',
  ],
  relatedMilestones: ['3-months', '6-months'],
  showSelfReferral: false,
  relatedConcernSlugs: ['hip-dysplasia', 'clubfoot-baby', 'birthmarks'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Congenital Hand Differences. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Polydactyly. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK562200/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Upper and Lower Limb Reduction Defects.',
      url: 'https://www.cdc.gov/birth-defects/facts-about-upper-and-lower-limb-reduction-defects.html',
    },
  ],
};

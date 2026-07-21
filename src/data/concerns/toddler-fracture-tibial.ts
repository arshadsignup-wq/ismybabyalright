import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-fracture-tibial',
  title: 'Toddler\'s Fracture (Tibial Spiral Fracture)',
  category: 'medical',
  searchTerms: [
    'toddler fracture tibia',
    'toddler won\'t walk after fall',
    'toddler refusing to bear weight',
    'spiral fracture toddler shin',
    'toddler limping after minor fall',
    'toddler sudden refusal to walk',
    'child tibia fracture not visible x-ray',
    'toddler fracture treatment boot cast',
    'occult fracture toddler',
    'toddler leg injury won\'t stand',
  ],
  quickAnswer:
    'A toddler\'s fracture is a common spiral or oblique fracture of the tibia (shinbone) that typically occurs in children ages 9 months to 3 years who are learning to walk. It usually results from a minor twisting fall or stumble. The hallmark sign is a child who suddenly refuses to walk or bear weight on the leg. The fracture may not be visible on initial X-rays in up to 40% of cases. Treatment is a short-leg walking cast or boot for 3-4 weeks, and children recover fully.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Toddler\'s fractures do not occur in this age group because infants are not yet bearing weight. Any unexplained bone fracture in a non-mobile infant should be taken very seriously and evaluated thoroughly, as it may indicate a metabolic bone condition, birth injury, or non-accidental trauma.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Toddler\'s fractures can begin to occur in the latter part of this age range as babies pull to stand and begin cruising (around 9-12 months). If your baby who was previously pulling to stand or cruising suddenly refuses to bear weight on one leg, seems to be in pain when the leg is touched or moved, or is unusually fussy, a toddler\'s fracture should be considered even after a minor or unwitnessed fall.',
    },
    {
      ageRange: '1-3 years',
      context:
        'This is the peak age for toddler\'s fractures. A typical scenario is a toddler who trips, twists, or falls during play and then suddenly refuses to walk or stands only on one foot. There may be minimal or no visible swelling. Your child may point to the shin or cry when the lower leg is touched. X-rays should be obtained, but the fracture line can be very subtle or invisible on the first set of films. If X-rays are negative but clinical suspicion is high, your doctor may treat empirically with a cast or boot, or repeat X-rays in 7-10 days when healing callus makes the fracture visible.',
    },
    {
      ageRange: '3-5 years',
      context:
        'While less common after age 3, spiral tibial fractures can still occur in younger preschoolers during active play. Older children in this age range may be able to describe where it hurts, which helps with diagnosis. Treatment remains the same: a short-leg walking cast or boot for approximately 3-4 weeks. Full recovery with return to normal activity is expected. There are no long-term consequences from a properly treated toddler\'s fracture.',
    },
  ],
  whenNormal: [
    'Your toddler had a minor fall and is walking normally without pain, limping, or favoring one leg within a few minutes',
    'Your toddler limped briefly after a stumble but returned to walking and running normally within an hour',
    'Your child was evaluated for a possible toddler\'s fracture, X-rays and exam were normal, and they are back to bearing weight comfortably',
    'Your child completed cast or boot treatment for a toddler\'s fracture and is walking normally again',
  ],
  whenToMention: [
    'Your toddler is limping or refusing to bear weight on one leg after a fall, even if the fall seemed minor',
    'Your toddler is crawling instead of walking and seems to be avoiding putting weight on one leg',
    'Your child cries when you touch or squeeze their lower leg (shin area) even without visible swelling or bruising',
  ],
  whenToActNow: [
    'Your toddler is refusing to bear weight on one leg, is in obvious pain, and you notice significant swelling or deformity of the leg, which requires same-day or emergency evaluation',
    'Your child has a leg injury with numbness, tingling, extreme swelling, or the foot appears pale, cool, or blue below the injury, suggesting possible vascular compromise that needs emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-limping', 'baby-broken-bone-fracture-signs'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fractures. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Fractures.aspx',
    },
    {
      org: 'OrthoInfo',
      citation:
        'American Academy of Orthopaedic Surgeons. Toddler\'s Fractures. OrthoInfo, 2022.',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/toddlers-fractures/',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Tibial Fractures in Children. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK551675/',
    },
  ],
};

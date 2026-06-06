import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-proprioceptive-seeking', title: 'Toddler Crashes and Bumps into Things Constantly', category: 'behavior',
  searchTerms: ['toddler proprioceptive seeking', 'toddler crashing into things', 'toddler bumping into furniture', 'toddler body crashing', 'toddler rough play seeking', 'toddler heavy body input', 'proprioceptive input child', 'toddler loves being squeezed', 'toddler seeks pressure', 'toddler body awareness low'],
  quickAnswer: 'Proprioceptive seekers crave deep pressure and heavy body input. They may crash into furniture, throw themselves on the floor, bump into people, squeeze too hard, or seek tight hugs. This type of sensory seeking provides feedback to muscles and joints. If it causes safety concerns or affects social interactions, an occupational therapist can create a sensory diet with appropriate heavy work activities.',
  byAge: [
    { ageRange: '12-24 months', context: 'Active toddlers naturally crash, bump, and climb as they develop body awareness. Some proprioceptive seeking is part of normal motor exploration.' },
    { ageRange: '24-36 months', context: 'Intense proprioceptive seeking may become more apparent. If your child constantly crashes into things on purpose, squeezes too hard, or cannot modulate force, sensory processing evaluation may help.' },
    { ageRange: '3-4 years', context: 'Persistent intense body crashing that creates safety concerns or hurts other children during play should be evaluated. An OT can provide appropriate outlets for proprioceptive needs.' },
    { ageRange: '4-5 years', context: 'Structured heavy work activities like carrying groceries, pushing a wheelbarrow, or jumping on a trampoline can help meet proprioceptive needs appropriately.' },
    { ageRange: '5-6 years', context: 'Proprioceptive needs can be channeled through sports, chores, and physical activities. With appropriate strategies, most children learn to manage their body input needs safely.' },
  ],
  whenNormal: ['Your toddler is active and physical but not constantly crashing', 'Your toddler enjoys rough play but can be gentle when needed', 'Your toddler bumps into things occasionally as part of normal motor development', 'Your toddler seeks bear hugs but responds when told to be gentle'],
  whenToMention: ['Your toddler constantly crashes into people, furniture, and walls on purpose', 'Your toddler squeezes people or pets too hard and cannot modulate force', 'Proprioceptive seeking causes frequent injuries or hurts other children'],
  whenToActNow: ['Your toddler\'s body crashing is escalating and creating significant safety concerns', 'Intense proprioceptive seeking is combined with other sensory and developmental differences'],
  relatedMilestones: ['sensory-processing', 'motor-development', 'self-regulation', 'body-awareness'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-sensory-seeking-behavior', 'toddler-vestibular-seeking', 'toddler-sensory-processing-concerns'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sensory Integration. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Sensory-Integration-Therapy.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Child Development.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers2.html' },
    { org: 'NIH', citation: 'National Institutes of Health. Sensory Processing.', url: 'https://www.nichd.nih.gov/health/topics/autism' },
  ],
};

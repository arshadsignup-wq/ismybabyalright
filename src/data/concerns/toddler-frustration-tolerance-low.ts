import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-frustration-tolerance-low', title: 'Toddler Has Low Frustration Tolerance', category: 'behavior',
  searchTerms: ['toddler low frustration tolerance','toddler gives up easily frustrated','toddler cant handle frustration','toddler frustrated easily','toddler no patience','toddler melts down over small things','toddler zero frustration tolerance','toddler cant cope frustration','toddler impatient easily upset','toddler overreacts to frustration'],
  quickAnswer: 'Low frustration tolerance is developmentally normal in toddlers. Their prefrontal cortex - the brain region responsible for patience and persistence - is one of the last areas to develop. When something does not work as expected, they genuinely feel overwhelmed. You can gradually build frustration tolerance by providing support, scaffolding challenges, and modeling persistence.',
  byAge: [
    { ageRange: '12-24 months', context: 'Very low frustration tolerance is completely normal. Your toddler wants to do things their body and skills cannot yet accomplish. Help by breaking tasks into smaller steps, offering just enough assistance to prevent complete frustration, and praising effort rather than outcome.' },
    { ageRange: '2-3 years', context: 'Frustration tolerance slowly improves but is still quite low. Your child may throw a toy that will not work, scream when a tower falls, or refuse to try again after a failure. Normalize frustration: "That is really hard! It is okay to feel frustrated. Let us try together."' },
    { ageRange: '3-4 years', context: 'Children develop more persistence if they have been supported through frustration rather than rescued from it. Let your child struggle a bit before helping. Say "I can see you are working hard on that" rather than immediately fixing it. Celebrate trying, not just succeeding.' },
    { ageRange: '4-5 years', context: 'Frustration tolerance should be noticeably improving. Your child can wait slightly longer, try again after failure, and accept help more gracefully. If frustration tolerance is not improving or is worsening, discuss with your pediatrician.' },
  ],
  whenNormal: ['Toddlers frequently become frustrated - this is developmentally expected','Your child can eventually be helped through frustration','Frustration tolerance gradually improves with age','Some temperaments naturally have lower frustration tolerance'],
  whenToMention: ['Frustration tolerance is not improving at all with age and support','Every small challenge results in a complete meltdown','Your child refuses to attempt anything new due to fear of frustration','Low frustration tolerance is significantly impacting learning and play'],
  whenToActNow: ['Your child hurts themselves when frustrated','Frustration episodes are accompanied by prolonged inconsolable distress'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'Zero to Three', citation: 'Zero to Three. Developing Self-Regulation in Young Children.', url: 'https://www.zerotothree.org/resource/developing-self-regulation/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Emotional Development: 2-Year-Olds. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Emotional-Development-2-Year-Olds.aspx' },
    { org: 'NIH', citation: 'Gilliom M, Shaw DS. Codevelopment of externalizing and internalizing problems in early childhood. Dev Psychopathol. 2004;16(2):313-333.', url: 'https://pubmed.ncbi.nlm.nih.gov/15487598/' },
  ],
  relatedConcernSlugs: ['tantrums','toddler-giving-up-easily','toddler-perfectionism-frustration','toddler-emotional-regulation-skills'],
};

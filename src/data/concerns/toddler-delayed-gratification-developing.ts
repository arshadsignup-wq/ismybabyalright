import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-delayed-gratification-developing', title: 'Teaching Toddlers to Wait: Delayed Gratification', category: 'behavior',
  searchTerms: ['toddler cant wait','toddler no patience','toddler delayed gratification','teaching toddler to wait','toddler wants everything now','toddler impatient','toddler waiting skills','toddler demands immediately','toddler patience development','when can toddlers wait'],
  quickAnswer: 'Delayed gratification - the ability to wait for something you want - is one of the last executive function skills to develop. Toddlers live entirely in the present moment and cannot wait because the concept of "later" barely exists for them. Research shows this ability begins around age 3 and develops slowly through age 5 and beyond. You cannot rush this brain development, but you can gradually practice.',
  byAge: [
    { ageRange: '12-24 months', context: 'Virtually no ability to wait. When your toddler wants something, they want it NOW. This is not a character flaw - their brain genuinely cannot conceptualize waiting. Minimize situations that require waiting when possible. When waiting is necessary, distract or redirect.' },
    { ageRange: '2-3 years', context: 'Very early waiting ability emerges. Your child might wait 30 seconds to a minute if given a visual cue ("When the timer dings"). Use concrete markers: "First we put on shoes, then we go outside." Avoid abstract time concepts like "in five minutes" - they are meaningless at this age.' },
    { ageRange: '3-4 years', context: 'Delayed gratification improves but is still limited. Your child can wait a few minutes with strategies: singing a song, counting, or having something else to do while waiting. Practice in low-stakes situations: "Let us wait together for our toast to pop up."' },
    { ageRange: '4-5 years', context: 'Children can wait longer and use strategies independently. They begin to understand "tomorrow" and "next week." If your child still has zero ability to wait at this age, it may be worth discussing impulse control development with your pediatrician.' },
  ],
  whenNormal: ['Toddlers cannot wait - this is brain development, not bad behavior','Waiting ability improves very gradually from age 2 to 5','Your child waits better in some situations than others','Patience is worse when tired, hungry, or stressed'],
  whenToMention: ['Your child shows no improvement in waiting ability with age','Inability to wait causes significant problems at preschool','Your child has extreme reactions to any delay','Impulse control seems significantly behind peers by age 4-5'],
  whenToActNow: ['Your child\'s inability to wait puts them in danger','Extreme impulsivity is affecting all areas of functioning'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'NIH', citation: 'Mischel W et al. Delay of Gratification in Children. Science. 1989;244(4907):933-938.', url: 'https://pubmed.ncbi.nlm.nih.gov/2658056/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Emotional Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Emotional-Development-2-Year-Olds.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Developing Self-Regulation.', url: 'https://www.zerotothree.org/resource/developing-self-regulation/' },
  ],
  relatedConcernSlugs: ['toddler-impulse-control-development','toddler-frustration-tolerance-low','toddler-self-regulation-timeline','toddler-emotional-regulation-skills'],
};

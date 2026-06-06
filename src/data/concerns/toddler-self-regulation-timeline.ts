import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-self-regulation-timeline', title: 'Self-Regulation Development Timeline for Toddlers', category: 'behavior',
  searchTerms: ['toddler self regulation','self regulation timeline children','when do toddlers self regulate','toddler cannot self regulate','self regulation milestones','toddler executive function','self regulation skills age','toddler emotional self control','self regulation development chart','when can child regulate emotions'],
  quickAnswer: 'Self-regulation - the ability to manage emotions, attention, and behavior - develops gradually throughout childhood and is not complete until early adulthood. Expecting a toddler to self-regulate is like expecting them to drive a car: the equipment is not ready yet. Your calm, consistent presence serves as your child\'s external regulator until their internal systems come online, which happens in small increments over many years.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies cannot self-regulate at all. They depend entirely on caregivers for regulation (co-regulation). When you rock, shush, or hold your upset baby, you are teaching their nervous system what calm feels like. This is not spoiling - it is building the foundation for future self-regulation.' },
    { ageRange: '12-24 months', context: 'Very early self-regulation appears: your child might briefly look away from something upsetting or seek comfort from you. But they cannot calm themselves when truly distressed. Continue to be their primary regulator while beginning to name emotions and strategies: "You are upset. Let us take a deep breath together."' },
    { ageRange: '2-4 years', context: 'Self-regulation slowly improves. Your child can begin to use simple strategies (deep breaths, counting, squeezing a toy) with prompting. They cannot yet access these strategies independently during intense emotions. This is normal. Keep modeling and teaching - the seeds are being planted even if you do not see results yet.' },
    { ageRange: '4-6 years', context: 'Noticeable improvement in self-regulation. Your child can sometimes calm themselves, wait their turn, and manage mild frustration independently. Intense emotions still overwhelm their regulatory capacity. If self-regulation seems significantly behind peers, discuss with your pediatrician.' },
  ],
  whenNormal: ['Your toddler cannot self-regulate - they need your help','Self-regulation improves slowly over years, not weeks','Your child manages mild emotions but is overwhelmed by intense ones','Regulation is worse when tired, hungry, sick, or stressed'],
  whenToMention: ['Your child shows no improvement in regulation with age and support','Dysregulation is extreme and lasts very long','Your child cannot be co-regulated even with your calm presence','Self-regulation seems significantly behind peers by age 4-5'],
  whenToActNow: ['Your child is a danger to themselves during dysregulated episodes','You are unable to help your child calm down and both of you are in distress'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'NIH', citation: 'Calkins SD. Origins and outcomes of individual differences in emotion regulation. Monogr Soc Res Child Dev. 1994;59(2-3):53-72.', url: 'https://pubmed.ncbi.nlm.nih.gov/7984166/' },
    { org: 'Zero to Three', citation: 'Zero to Three. Developing Self-Regulation in Young Children.', url: 'https://www.zerotothree.org/resource/developing-self-regulation/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Self-Regulation. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Emotional-Development-2-Year-Olds.aspx' },
  ],
  relatedConcernSlugs: ['toddler-emotional-regulation-skills','toddler-impulse-control-development','toddler-delayed-gratification-developing','toddler-emotional-intelligence-building'],
};

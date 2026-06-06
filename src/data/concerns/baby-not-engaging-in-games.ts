import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-engaging-in-games',
  title: 'Baby Not Interested in Peekaboo or Pat-a-Cake',
  category: 'behavior',
  searchTerms: [
    'baby not interested in peekaboo', 'baby doesn\'t play pat a cake', 'baby no interest in games',
    'baby won\'t play social games', 'baby doesn\'t like peekaboo', 'baby not engaging in games',
    'when do babies play peekaboo', 'baby social games milestone', 'baby won\'t participate in games',
    'baby not playing interactive games',
  ],
  quickAnswer:
    'Social games like peekaboo and pat-a-cake typically engage babies starting around 6 to 9 months. These games build important social communication skills including turn-taking, anticipation, and shared enjoyment. If your baby shows no interest in or response to interactive games by 12 months, mention this to your pediatrician.',
  byAge: [
    { ageRange: '0-5 months', context: 'Babies are too young for structured social games. They enjoy face-to-face interaction, being talked to, and having their movements gently guided. Interest in interactive games develops later.' },
    { ageRange: '5-8 months', context: 'Babies begin to enjoy simple social games. They may smile during peekaboo and anticipate the "reveal." Engagement may be passive at first, with the baby watching and smiling rather than actively participating.' },
    { ageRange: '8-12 months', context: 'Most babies actively participate in social games, laughing during peekaboo, clapping during pat-a-cake, and initiating games themselves. If your baby shows no interest in or enjoyment of these games by 12 months, it is worth noting.' },
    { ageRange: '12-18 months', context: 'Toddlers love social games and often request them by initiating the game themselves. They expand to new games and enjoy the social back-and-forth. Lack of interest in social games at this age may indicate a social communication difference.' },
    { ageRange: '18-24 months', context: 'Interactive play becomes more complex. If your child has never shown interest in social games and also has limited eye contact and joint attention, a developmental evaluation is recommended.' },
  ],
  whenNormal: [
    'Your baby is under 7 months and does not yet engage in social games', 'Your baby enjoys peekaboo but only at certain times and not when tired or hungry',
    'Your baby watches social games with interest but does not yet actively participate', 'Your baby prefers some games over others',
  ],
  whenToMention: [
    'Your baby is over 12 months and shows no interest in or enjoyment of any interactive social games', 'Your baby actively turns away from social game attempts',
    'Your baby does not anticipate or react to peekaboo by 10 months',
  ],
  whenToActNow: [
    'Your baby shows no social engagement of any kind, including no interest in games, faces, or voices', 'Your baby previously enjoyed social games and has stopped responding',
  ],
  relatedMilestones: ['social-engagement', 'joint-attention', 'social-smile', 'turn-taking'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-not-laughing-at-peek-a-boo', 'baby-not-imitating-actions', 'no-joint-attention'],
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Nine Months.', url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-9mo.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development: 4 to 7 Months. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-4-to-7-Months.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Play and Social Skills.', url: 'https://www.zerotothree.org/resource/play/' },
  ],
};

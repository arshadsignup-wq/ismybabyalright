import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'spinning-in-circles',
  title: 'My Toddler Spins in Circles',
  category: 'behavior',
  searchTerms: [
    'toddler spinning in circles',
    'baby spinning around',
    'toddler twirling constantly',
    'why does my toddler spin',
    'is spinning a sign of autism',
    'toddler spinning objects',
    'toddler loves spinning',
    'baby spinning wheels',
    'toddler spinning and dizzy',
    'repetitive spinning toddler',
  ],
  quickAnswer:
    'Spinning in circles is a normal and joyful way for toddlers to explore movement and their vestibular (balance) system. Most toddlers spin because it feels fun and exciting. In isolation, spinning is not a sign of autism or developmental concerns  -  what matters is whether your child engages socially, makes eye contact, and is developing language and play skills.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'As toddlers gain better balance and coordination, many discover the thrill of spinning. They might spin themselves, spin in your arms, or spin objects like wheels or toys. This is sensory exploration  -  they are learning how movement affects their body and environment. Most children at this age will laugh, make eye contact, and want you to join in the fun.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Spinning often peaks during this stage. Your toddler might spin until dizzy, fall down laughing, and immediately get up to spin again. They may spin as a form of play, to self-regulate when excited or overwhelmed, or simply because they enjoy the sensation. If your child is engaging with you, responding to their name, and developing language, spinning is just a normal part of exploration.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Most children continue to enjoy spinning during active play but it becomes more integrated into games (spinning on playground equipment, dancing, etc.) rather than an isolated repetitive behavior. If your child is still spinning frequently in isolation, not for play, and seems to prefer spinning to interacting with others, it may be worth discussing with your pediatrician  -  but context matters.',
    },
  ],
  whenNormal: [
    'Your toddler spins during play, often laughing or showing excitement',
    'Spinning happens in bursts  -  your child spins, stops, engages with you or a toy, then might spin again',
    'Your child makes eye contact, responds to their name, and wants to share the fun with you',
    'Spinning is one of many forms of play (not the only thing your child does)',
    'Your child is meeting other developmental milestones in language, social skills, and play',
  ],
  whenToMention: [
    'Your child spins for long periods and seems difficult to redirect or engage',
    'Spinning is accompanied by delays in language, limited eye contact, or lack of social engagement',
    'Your child prefers spinning to interactive play and seems to "tune out" when spinning',
    'You notice multiple repetitive behaviors (spinning, hand flapping, lining up toys) and are concerned about sensory processing or autism',
  ],
  whenToActNow: [
    'Spinning is part of a sudden loss of previously acquired skills or a dramatic change in behavior',
    'Your child is spinning so much or so recklessly that they are frequently injuring themselves',
    'Your child does not respond to their name, avoids eye contact, and has significant delays in communication alongside the spinning',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'social-emotional-engagement',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Repetitive Behaviors: When to Worry, When to Relax.',
      url: 'https://www.zerotothree.org/resource/repetitive-behaviors/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Autism Spectrum Disorder: Signs and Symptoms.',
      url: 'https://www.cdc.gov/ncbddd/autism/signs.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Understanding Sensory Processing in Young Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Sensory-Processing-Disorder-SPD.aspx',
    },
  ],
};

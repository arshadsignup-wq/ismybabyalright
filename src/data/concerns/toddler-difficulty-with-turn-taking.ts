import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-difficulty-with-turn-taking', title: 'Toddler Has Difficulty Taking Turns', category: 'behavior',
  searchTerms: ['toddler can\'t take turns', 'toddler turn taking difficulty', 'toddler won\'t wait turn', 'toddler no turn taking', 'toddler doesn\'t share turns', 'turn taking development toddler', 'toddler grabs toys won\'t wait', 'toddler can\'t take turns in play', 'toddler turn taking skills', 'when do toddlers take turns'],
  quickAnswer: 'Turn-taking is a skill that develops gradually between ages 2 and 4. Toddlers are naturally egocentric and find waiting very difficult. By age 3, most children can take simple turns with support, and by 4 to 5, they can take turns more independently. Difficulty with turn-taking is very common and does not necessarily indicate a problem unless it persists well past age 4.',
  byAge: [
    { ageRange: '12-18 months', context: 'Turn-taking begins in simple back-and-forth games like rolling a ball. True turn-taking in play with peers is not yet expected.' },
    { ageRange: '18-24 months', context: 'Turn-taking remains very challenging. Toddlers want things now and find waiting nearly impossible. With adult support, they can practice simple taking-turns games.' },
    { ageRange: '24-36 months', context: 'Turn-taking improves with practice and adult guidance. Children begin to understand "your turn, my turn" but need frequent reminders. Meltdowns when waiting are still common.' },
    { ageRange: '3-4 years', context: 'Most children can take turns in structured games with prompting. Independent turn-taking with peers is emerging. Difficulty at this age is still quite common.' },
    { ageRange: '4-5 years', context: 'Turn-taking should be reasonably well-developed. Children wait their turn in games, conversation, and group activities. Persistent severe difficulty may indicate impulse control or social skill challenges.' },
  ],
  whenNormal: ['Your toddler is under 3 and has difficulty waiting for turns', 'Your toddler can take turns with adult scaffolding but not independently', 'Your toddler takes turns in some games but not others', 'Your toddler is improving in turn-taking over time'],
  whenToMention: ['Your child is over 4 and cannot take turns even with support and prompting', 'Your child becomes extremely distressed or aggressive when required to wait', 'Difficulty with turn-taking is combined with broader social interaction challenges'],
  whenToActNow: ['Your child is over 4 with severe turn-taking difficulty combined with inability to play cooperatively, follow rules, or engage with peers', 'Turn-taking skills have deteriorated over time'],
  relatedMilestones: ['social-engagement', 'self-regulation', 'cooperative-play', 'impulse-control'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-not-cooperating-with-peers', 'toddler-dominating-play', 'difficulty-with-transitions'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development in Preschoolers.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/preschoolers.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Sharing and Turn-Taking.', url: 'https://www.zerotothree.org/resource/play/' },
  ],
};

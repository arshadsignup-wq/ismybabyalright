import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-bossy-with-friends', title: 'Toddler Is Bossy with Friends', category: 'behavior',
  searchTerms: ['toddler bossy','toddler bossy with friends','preschooler bossy behavior','toddler controlling play','toddler tells others what to do','toddler dominates play','bossy child','toddler wants to be in charge','toddler orders other kids around','child bossy leadership'],
  quickAnswer: 'Bossiness in young children is often a sign of developing leadership skills, a strong personality, and emerging social awareness. Your child is learning how social hierarchies work and experimenting with influence. The goal is not to squash this trait but to channel it - helping your child learn to lead with kindness, include others\' ideas, and take turns being the decision-maker.',
  byAge: [
    { ageRange: '2-3 years', context: 'Most play at this age is parallel rather than cooperative, so true bossiness is limited. Your child may direct adults: "Sit here! Do this!" This is them practicing language and agency, which is positive. Model polite requesting: "Could you say: Please sit here?"' },
    { ageRange: '3-4 years', context: 'Cooperative play emerges and so does bossiness. Your child wants to control the game, assign roles, and make all decisions. This is a normal phase of learning to play together. Coach them: "Ask your friend what they want to play. Everyone gets a turn choosing the game."' },
    { ageRange: '4-5 years', context: 'Children learn that being too bossy drives friends away. If peers start avoiding your child, this is natural social feedback. Help them reflect: "How did your friend feel when you told them what to do? What could you try instead?" Teach them to suggest rather than command.' },
    { ageRange: '5-7 years', context: 'By this age, children who learn to balance assertiveness with flexibility become effective leaders. If bossiness persists without any social awareness or flexibility, consider whether your child needs support developing social skills and perspective-taking.' },
  ],
  whenNormal: ['Some bossiness during pretend play is very common','Your child can sometimes follow others\' lead too','Your child has at least some successful friendships','Bossiness decreases as social skills develop'],
  whenToMention: ['Your child cannot ever follow another child\'s lead','Friends actively avoid your child due to bossiness','Your child becomes aggressive when not in control','Bossiness is rigid and inflexible across all settings'],
  whenToActNow: ['Your child is physically aggressive when others do not comply','Social difficulties are causing significant distress to your child'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development in Preschoolers. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Making Friends.', url: 'https://www.zerotothree.org/resource/making-friends/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips: Preschoolers.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/preschoolers.html' },
  ],
  relatedConcernSlugs: ['toddler-sharing-age-appropriate','toddler-exclusion-from-play','toddler-empathy-development-timeline','toddler-power-struggles-daily'],
};

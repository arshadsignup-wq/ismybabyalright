import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-sleep-regression-new-sibling', title: 'Sleep Regression When a New Baby Arrives', category: 'sleep',
  searchTerms: ['toddler sleep regression new sibling','toddler sleep problems new baby','older child sleep issues new baby','toddler waking new baby','sleep regression new sibling','toddler bedtime new baby','toddler jealous new baby sleep','older sibling sleep disruption','new baby affecting toddler sleep','toddler regression new baby'],
  quickAnswer: 'Sleep regression after a new sibling arrives is extremely common and a normal response to a major life change. Your toddler may resist bedtime, wake more at night, or want to sleep with you. This is driven by a need for reassurance. With patience, one-on-one time, and consistent routines, most toddlers adjust within 4-8 weeks.',
  byAge: [
    { ageRange: '12-24 months', context: 'Young toddlers may not understand the new baby but sense the change in parental attention and household energy. They may become clingier, wake more frequently, or resist bedtime. Maintain their sleep routine as closely as possible. Enlist help so the bedtime parent can focus on the toddler without interruption.' },
    { ageRange: '2-3 years', context: 'This age group is most commonly affected. Your toddler understands enough to feel displaced but not enough to fully process it. They may ask to sleep in your bed, refuse bedtime, or wake crying for you. Give extra one-on-one time during the day. Avoid making other big changes (bed transition, potty training) simultaneously with the new baby arrival.' },
    { ageRange: '3-5 years', context: 'Older children may express their feelings more directly. They might say the baby is keeping them awake or claim various ailments at bedtime. Validate their feelings, maintain special bedtime rituals, and give them a role in helping with the baby to build positive associations.' },
  ],
  whenNormal: ['Sleep regression lasting 2-8 weeks after new baby arrives','Increased clinginess and need for reassurance at bedtime','Occasional night wakings that resolve with brief comfort','Gradual improvement as your toddler adjusts to the new family dynamic'],
  whenToMention: ['Regression persists more than 2-3 months with no improvement','Your toddler shows signs of significant anxiety or depression','Sleep disruption is severe enough to affect daytime behavior or development'],
  whenToActNow: ['Your toddler acts aggressively toward the new baby, especially unsupervised','You are struggling to manage both children safely due to exhaustion'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Preparing Your Child for a New Sibling. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/default.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Preparing for a New Sibling.', url: 'https://www.zerotothree.org/resource/preparing-for-a-new-sibling/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
  relatedConcernSlugs: ['toddler-jealous-of-new-baby','toddler-new-baby-adjustment-timeline','toddler-regression-behavior-general'],
};

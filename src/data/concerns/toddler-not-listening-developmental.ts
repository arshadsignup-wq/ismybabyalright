import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-not-listening-developmental', title: 'Why Toddlers Do Not Listen: A Developmental Perspective', category: 'behavior',
  searchTerms: ['toddler not listening','toddler wont listen developmental','why toddler doesnt listen','toddler ignores instructions','toddler wont follow directions','toddler not listening age appropriate','toddler disobedient developmental','toddler selective listening','normal toddler not listening','when do toddlers start listening'],
  quickAnswer: 'When parents say their toddler "will not listen," they often mean the child does not follow instructions. But developmentally, toddlers have limited ability to follow instructions because they have immature working memory, poor impulse control, difficulty shifting attention, and a strong drive for autonomy. Your toddler is not choosing to disobey - their brain is literally not yet equipped to consistently do what you ask.',
  byAge: [
    { ageRange: '12-18 months', context: 'Your child can follow very simple, one-step commands ("Give me the ball") but only if they are already paying attention to you and are not absorbed in something else. They cannot retain multi-step instructions. Get close, get eye contact, use simple words, and demonstrate what you mean.' },
    { ageRange: '18-30 months', context: 'Understanding improves but compliance remains inconsistent. Your child understands more than they can execute - they may know what "clean up" means but lack the organizational ability to do it. They also have a strong need for autonomy. Break requests into single steps and offer choices when possible.' },
    { ageRange: '2.5-4 years', context: 'Children can follow two-step instructions ("Pick up the blocks and put them in the box") but still need reminders, visual cues, and patience. They are better at listening when involved in creating the rule. "What do we do before dinner? Right - we wash our hands!"' },
    { ageRange: '4-5 years', context: 'Following directions improves significantly but is still imperfect. Your child can follow multi-step instructions and understands expectations. If they consistently cannot follow directions at this age, consider whether they may have attention or processing difficulties worth evaluating.' },
  ],
  whenNormal: ['Toddlers follow instructions inconsistently - this is developmentally expected','Your child listens better when they are not tired, hungry, or overstimulated','Your child can follow simple instructions with support','Compliance improves gradually with age'],
  whenToMention: ['Your child seems unable to follow even simple one-step instructions at age 2+','You suspect your child may not understand what you are saying','Your child consistently cannot follow age-appropriate directions','Not listening is combined with other developmental concerns'],
  whenToActNow: ['You suspect hearing loss may be contributing to not listening','Your child shows sudden loss of ability to understand or follow instructions'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Communication and Your Child. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Communication-and-Your-1-to-2-Year-Old.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Brain Development.', url: 'https://www.zerotothree.org/resource/brain-development/' },
  ],
  relatedConcernSlugs: ['toddler-ignoring-parents-deliberately','toddler-following-rules-age-appropriate','toddler-impulse-control-development','toddler-saying-no-to-everything'],
};

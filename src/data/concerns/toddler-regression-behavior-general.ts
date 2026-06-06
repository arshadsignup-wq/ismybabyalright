import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-regression-behavior-general', title: 'Behavioral Regression in Toddlers', category: 'behavior',
  searchTerms: ['toddler behavioral regression','toddler acting younger','toddler regression behavior','toddler going backwards behavior','toddler lost skills','toddler regression development','toddler suddenly acting out','toddler behavior change sudden','toddler regressing skills','behavior regression causes toddler'],
  quickAnswer: 'Behavioral regression - when your toddler temporarily loses skills or returns to earlier behaviors - is common and usually temporary. It often happens during stress, big changes, developmental leaps, or illness. Your child has not lost their skills; they are temporarily unable to access them because their brain is processing something new or stressful. With patience and support, skills return.',
  byAge: [
    { ageRange: '12-24 months', context: 'Regression is common during developmental leaps. A toddler learning to walk may temporarily stop using words they had before. Illness, teething, or changes in routine can all trigger regression. These are usually brief and resolve on their own.' },
    { ageRange: '2-3 years', context: 'Common regression triggers include new siblings, starting daycare, moving homes, or family stress. Your child may return to wanting a bottle, having toileting accidents, baby talk, or increased clinginess. Avoid punishing regression - it usually resolves faster with empathy and patience.' },
    { ageRange: '3-4 years', context: 'Regression can occur with any major life change. Your child may act younger when stressed or overwhelmed. This is a coping mechanism, not defiance. Maintain routines, provide extra comfort, and gently encourage age-appropriate behavior without shaming.' },
    { ageRange: '4-5 years', context: 'Starting school is a common regression trigger. Your child may be perfectly capable at home but regress at school, or vice versa. Brief regression during transitions is normal. If regression persists beyond 4-6 weeks or involves loss of major skills, consult your pediatrician.' },
  ],
  whenNormal: ['Regression is temporary and tied to an identifiable trigger','Your child returns to their baseline within a few weeks','Only one or two areas are affected, not all skills','Your child can still access skills when calm and supported'],
  whenToMention: ['Regression lasts more than 4-6 weeks','Multiple developmental areas are affected simultaneously','There is no identifiable trigger for the regression','Skills seem genuinely lost rather than temporarily inaccessible'],
  whenToActNow: ['Your child loses motor skills or language skills without obvious cause','Regression is accompanied by other concerning symptoms like seizures or personality changes'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Developmental Milestones. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Developmental-Milestones-2-Year-Olds.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Regression: When Your Child Takes a Step Back.', url: 'https://www.zerotothree.org/resource/regression/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Child Development Milestones.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
  ],
  relatedConcernSlugs: ['toddler-regression-after-vacation','toddler-acting-like-baby-again','toddler-regression-potty-new-sibling','toddler-new-baby-adjustment-timeline'],
};

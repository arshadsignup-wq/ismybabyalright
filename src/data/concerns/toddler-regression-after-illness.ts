import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-regression-after-illness',
  title: 'Toddler Regression After Illness - Lost Skills',
  category: 'behavior',
  searchTerms: ['toddler regression after illness','toddler lost skills after being sick','toddler behavior change after illness','toddler clingy after being sick','toddler regression after fever','toddler baby talk after illness','toddler sleep regression after sick','toddler stopped talking after illness','toddler behavior regression','toddler acting like baby after sick','temporary regression toddler','developmental regression after illness'],
  quickAnswer: 'Temporary regression after illness is very common in toddlers and young children. Being sick is stressful and exhausting, and toddlers often cope by reverting to earlier behaviors - wanting to be carried, increased clinginess, baby talk, sleep disruptions, regression in potty training, and increased tantrums. This regression typically resolves within 1-3 weeks as your child recovers and regains energy. It does not mean your child has lost skills permanently. However, if regression persists beyond a month or skills do not return, talk to your pediatrician.',
  byAge: [
    { ageRange: '6-12 months', context: 'Babies who were sleeping through the night may start waking frequently again during and after illness. Babies who were eating solids well may refuse them temporarily. This is normal - illness disrupts routines and babies need extra comfort. Return to your pre-illness routines once your baby is well, and expect 1-2 weeks of adjustment. Continue offering solids even if your baby is not interested - appetite usually returns gradually.' },
    { ageRange: '12-24 months', context: 'Toddlers commonly regress in several areas after illness: sleep (waking at night, refusing to sleep alone), eating (returning to bottles, refusing solids), language (using fewer words or reverting to pointing/grunting), and behavior (increased tantrums, clinginess, wanting to be carried). This is your toddler\'s way of seeking extra comfort during a vulnerable time. Provide the comfort they need while gently maintaining routines. Skills typically return within 1-3 weeks.' },
    { ageRange: '2-3 years', context: 'Potty training regression after illness is extremely common - do not punish or shame your child. Put them back in pull-ups if needed and restart gently when they are fully recovered. Speech regression (using baby talk, fewer words) usually resolves quickly. If your child was talking in sentences before illness and reverts to single words, give it 2-3 weeks. Behavioral regression (more tantrums, defiance, clingy behavior) is your child processing the stress of being sick.' },
    { ageRange: '3-4 years', context: 'Older toddlers may express their regression more clearly - asking for a bottle or pacifier they gave up, wanting to sleep in your bed, baby talking deliberately. They may also verbalize fears about being sick again. Validate their feelings while maintaining gentle boundaries. Most regression resolves within 2-4 weeks. If skills do not return or your child continues to lose abilities (not just temporarily regress), this is different from post-illness regression and needs medical evaluation.' },
  ],
  whenNormal: ['Your toddler is clingier and wants more comfort for a week or two after illness','Sleep has disrupted during illness and takes 1-2 weeks to normalize after recovery','Your toddler uses fewer words or baby talk for a brief period while recovering','Potty training has a temporary setback during and after illness'],
  whenToMention: ['Regression in any area lasts more than 3-4 weeks after your child has fully recovered','Skills that returned slowly are not reaching the pre-illness level','Your child seems to have lost speech, motor skills, or social skills that are not coming back','Multiple areas of regression simultaneously that are not improving'],
  whenToActNow: ['Your child has permanently lost speech or motor skills after an illness - this is not typical post-illness regression','Your child had a high fever or seizure during illness and now has new neurological symptoms','Your child is showing signs of a new illness emerging rather than recovering from the previous one'],
  relatedMilestones: ['social-emotional-regulation','language-expressive'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-constant-meltdowns','toddler-separation-anxiety-extreme','baby-not-eating-after-illness'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Regression in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Regression: When Children Take Steps Backward.', url: 'https://www.zerotothree.org/resource/regression/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Developmental Milestones.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
  ],
};

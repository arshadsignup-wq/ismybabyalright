import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-regression-after-vacation', title: 'Toddler Behavior Regression After Vacation or Travel', category: 'behavior',
  searchTerms: ['toddler regression after vacation','toddler behavior worse after trip','toddler acting out after travel','toddler clingy after vacation','toddler sleep regression after travel','toddler behavior change after holiday','toddler tantrums after trip','toddler out of routine after vacation','toddler readjusting after travel','behavior regression after trip'],
  quickAnswer: 'Behavior regression after vacation or travel is extremely common. Your toddler\'s routine was disrupted, they may have had more screen time, later bedtimes, different foods, and constant stimulation. It takes most children 1-2 weeks to readjust to their normal routine. Be patient, reinstate boundaries calmly and consistently, and expect some pushback as your child readjusts.',
  byAge: [
    { ageRange: '12-24 months', context: 'Young toddlers are especially sensitive to routine changes. After travel, expect disrupted sleep, increased clinginess, and more tantrums for 1-2 weeks. Return to your normal routine as quickly as possible. Do not introduce new changes right after returning.' },
    { ageRange: '2-3 years', context: 'Your toddler may resist returning to normal rules after the relaxed vacation environment. They might demand things that were allowed on vacation. Be empathetic but firm: "I know we had ice cream every day on vacation. At home, we have ice cream as a special treat." Reinstate routines immediately.' },
    { ageRange: '3-4 years', context: 'Children this age remember the fun of vacation and may express disappointment about returning to normal life. Validate their feelings while maintaining structure. Keep the first few days home low-key to allow readjustment. Avoid scheduling too many activities right after travel.' },
    { ageRange: '4-5 years', context: 'Older children adjust more quickly but may still show regression for several days. Talk about the transition: "We had so much fun. Now we are back to our regular schedule." Use a visual schedule if helpful to re-establish routines.' },
  ],
  whenNormal: ['Behavior regression lasts 1-2 weeks after travel','Your child gradually returns to baseline behavior','Sleep disruption resolves within a week of returning to normal schedule','Increased clinginess or tantrums that diminish daily'],
  whenToMention: ['Behavior does not return to baseline after 3-4 weeks','Regression seems more severe than expected for the disruption','Your child developed new concerning behaviors during or after the trip','Sleep has not recovered after two weeks of consistent routine'],
  whenToActNow: ['Your child shows signs of illness that could be related to travel','Behavior changes are extreme and include aggression or self-harm not present before'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Travel Safety Tips. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/default.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Routines and Schedules.', url: 'https://www.zerotothree.org/resource/routines-and-schedules/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Children and Travel.', url: 'https://wwwnc.cdc.gov/travel/page/children' },
  ],
  relatedConcernSlugs: ['toddler-regression-behavior-general','baby-travel-sleep-disruption','baby-timezone-change-sleep','toddler-testing-limits-constantly'],
};

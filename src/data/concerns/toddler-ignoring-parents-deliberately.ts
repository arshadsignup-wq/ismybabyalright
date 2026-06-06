import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-ignoring-parents-deliberately', title: 'Toddler Ignores You When You Speak to Them', category: 'behavior',
  searchTerms: ['toddler ignoring parents','toddler wont listen','toddler pretends not to hear','toddler selective hearing','toddler ignores instructions','toddler doesnt respond when called','toddler tunes out parents','toddler not listening on purpose','toddler ignores requests','child acts like cant hear me'],
  quickAnswer: 'Toddlers who seem to ignore you are usually not being deliberately disrespectful. Common reasons include: they are genuinely absorbed in play (young children have difficulty shifting attention), they have learned that you will repeat yourself multiple times before there are consequences, they do not understand the instruction, or they are asserting autonomy. Rarely, consistent non-response could indicate a hearing issue worth checking.',
  byAge: [
    { ageRange: '12-24 months', context: 'Young toddlers have very limited ability to shift their attention from one thing to another. If they are focused on play, they may genuinely not process your words. Get close, get down to their level, make eye contact, and use simple one-step directions. Do not shout from across the room.' },
    { ageRange: '2-3 years', context: 'Your child can now hear and understand you but may choose not to respond. This is autonomy, not disrespect. Use the approach: get close, get eye contact, give a simple instruction, wait 5 seconds, then follow through. Avoid repeating yourself multiple times, which teaches them to ignore the first several requests.' },
    { ageRange: '3-4 years', context: 'Children this age are better at shifting attention but still get absorbed in activities. If your child consistently ignores you, check: Are instructions too complex? Are there too many directions at once? Have they learned you will not follow through? Simplify, connect first, then direct.' },
    { ageRange: '4-5 years', context: 'By this age, ignoring is often a learned pattern. If you have been repeating yourself and eventually giving up, your child has learned that ignoring works. Reset expectations: connect first, give one clear instruction, follow through with a natural consequence if needed.' },
  ],
  whenNormal: ['Your toddler does not respond when deeply engaged in play','Your child responds when you get close and make eye contact','Ignoring is selective - your child hears "ice cream" but not "clean up"','Your child responds to some people but not others depending on context'],
  whenToMention: ['Your child consistently does not respond to their name','You are wondering if your child can actually hear you','Your child does not respond even when you are close and making eye contact','Non-responsiveness is combined with other communication delays'],
  whenToActNow: ['Your child shows sudden loss of response to sounds','You suspect hearing loss'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Shape and Manage Your Child\'s Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/How-to-Shape-Manage-Young-Child-Behavior.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Challenging Behaviors: Understanding and Responding.', url: 'https://www.zerotothree.org/resource/challenging-behaviors/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Hearing Loss in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Hearing-Loss.aspx' },
  ],
  relatedConcernSlugs: ['toddler-not-listening-developmental','toddler-saying-no-to-everything','toddler-testing-limits-constantly','toddler-power-struggles-daily'],
};

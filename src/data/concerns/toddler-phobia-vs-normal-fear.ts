import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-phobia-vs-normal-fear', title: 'Phobia vs Normal Fear in Children', category: 'behavior',
  searchTerms: ['toddler phobia','child phobia vs fear','extreme fear toddler','toddler irrational fear','child phobia treatment','toddler terror','intense fear child','specific phobia child','toddler paralyzing fear','when fear becomes phobia child'],
  quickAnswer: 'The difference between a normal fear and a phobia is intensity, duration, and impact on functioning. Normal fears are common, proportional to the trigger, and fade with time and gentle exposure. A phobia is an extreme, persistent fear that is out of proportion to the actual threat and causes avoidance that interferes with daily life. About 5-10% of children develop a specific phobia. Most respond well to gentle, gradual exposure with professional support.',
  byAge: [
    { ageRange: '12-24 months', context: 'True phobias are rare at this age because fears are expected to be intense and irrational. If your toddler is terrified of the bath, vacuum, or dogs, this is usually a normal developmental fear that will pass. Give it time, do not force exposure, and the fear typically resolves within weeks to months.' },
    { ageRange: '2-3 years', context: 'Intense fears are still very common and usually not phobias. If a specific fear persists for many months, prevents normal activities, and does not respond to any reassurance or gentle exposure, it may be developing into a phobia. Most fears at this age resolve without intervention.' },
    { ageRange: '3-4 years', context: 'By this age, a persistent, extreme fear that has lasted 6+ months and significantly limits your child\'s activities may qualify as a specific phobia. For example, a child who cannot go outdoors due to fear of insects, or who panics at any dog regardless of size or distance.' },
    { ageRange: '4-6 years', context: 'Phobias are more clearly identifiable. If your child has an intense, specific fear that has persisted, causes significant avoidance, and impacts daily life, professional help can be very effective. Cognitive-behavioral therapy approaches are the gold standard for childhood phobias.' },
  ],
  whenNormal: ['A new fear that is intense but fades within weeks to months','Fear that can be managed with reassurance and gentle support','Fear that does not prevent all normal activities','Fear that is common for your child\'s age'],
  whenToMention: ['Fear has persisted for 6+ months without any improvement','Fear prevents your child from normal activities','Your child has panic-level responses to a specific trigger','Avoidance of the feared thing is increasing over time'],
  whenToActNow: ['Fear is so extreme your child cannot leave the house','Your child has physical symptoms like vomiting or fainting from fear'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Fears and Phobias in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Fears-and-Phobias.aspx' },
    { org: 'NIH', citation: 'Ollendick TH et al. Specific phobias in children. In: Handbook of Evidence-Based Therapies. 2008.', url: 'https://pubmed.ncbi.nlm.nih.gov/17716796/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Anxiety and Depression in Children.', url: 'https://www.cdc.gov/childrensmentalhealth/depression.html' },
  ],
  relatedConcernSlugs: ['toddler-fear-development-normal','toddler-anxiety-signs-early','toddler-worry-excessive','toddler-dark-room-fear'],
};

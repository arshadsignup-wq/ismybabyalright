import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-shyness-vs-social-anxiety', title: 'Shyness vs Social Anxiety in Toddlers', category: 'behavior',
  searchTerms: ['toddler shy','toddler shyness normal','toddler social anxiety','shy toddler worried','toddler afraid of people','toddler hides behind parent','toddler wont talk to anyone','extreme shyness toddler','toddler scared of other kids','toddler social anxiety signs'],
  quickAnswer: 'Shyness is a temperament trait found in about 15-20% of children. It means your child is slow to warm up to new people and situations. Social anxiety is different - it involves intense fear and distress around social situations that interferes with functioning. Many shy children are perfectly happy once they warm up; anxious children remain distressed. Shyness is not a problem to fix, but social anxiety may need support.',
  byAge: [
    { ageRange: '6-18 months', context: 'Stranger anxiety peaks around 8-12 months and is completely normal. Your baby may cry with unfamiliar people and cling to you. This is a sign of healthy attachment, not a problem. It typically improves by 18-24 months.' },
    { ageRange: '18-30 months', context: 'Shyness with new people and situations is common. Your toddler may hide behind your legs, refuse to speak to others, or need time to warm up at playgroups. This is temperamental and normal. Do not force interaction; let your child observe and join at their own pace.' },
    { ageRange: '2.5-4 years', context: 'Shy children often warm up beautifully when given time. Arrive early to events so your child can acclimate before crowds arrive. Do not label your child as "shy" in front of them. Instead say "She likes to watch first before joining in." This frames their behavior positively.' },
    { ageRange: '4-5 years', context: 'If your child\'s shyness is preventing them from participating in activities they want to do, causing them distress, or significantly interfering with making friends, it may have crossed into social anxiety. A pediatrician can help determine whether intervention would be helpful.' },
  ],
  whenNormal: ['Your child is cautious at first but warms up within the visit','Your child is comfortable with familiar people','Your child has at least some friends or can play with familiar peers','Shyness does not cause significant distress to your child'],
  whenToMention: ['Your child never warms up even after extended time','Social situations cause crying, clinging, or panic beyond age 3','Your child cannot participate in age-appropriate activities due to fear','Your child has no friends and avoids all peer interaction'],
  whenToActNow: ['Your child is in extreme distress in all social situations','Social fear is so severe your child cannot attend daycare or activities'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Anxiety in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Social-Anxiety.aspx' },
    { org: 'NIH', citation: 'Kagan J. Temperamental Contributions to Social Behavior. Am Psychol. 1989;44(4):668-674.', url: 'https://pubmed.ncbi.nlm.nih.gov/2729745/' },
    { org: 'Zero to Three', citation: 'Zero to Three. Temperament: Individual Differences.', url: 'https://www.zerotothree.org/resource/temperament-individual-differences/' },
  ],
  relatedConcernSlugs: ['separation-anxiety','toddler-anxiety-signs-early','toddler-clinginess-to-one-parent','toddler-exclusion-from-play'],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-not-talking-at-daycare',
  title: 'Toddler Talks at Home but Not at Daycare',
  category: 'communication',
  searchTerms: ['toddler not talking at daycare', 'toddler silent at daycare', 'child talks at home not school', 'selective mutism toddler', 'toddler won\'t talk to teachers', 'toddler quiet at daycare', 'toddler shy at daycare', 'toddler refuses to talk outside home', 'toddler only talks at home', 'selective mutism preschool'],
  quickAnswer: 'A toddler who talks freely at home but is quiet or silent at daycare is usually showing a normal temperament variation - many young children are naturally more reserved in group settings. Shyness and caution in new environments is developmentally appropriate, especially when children are still building language confidence. However, if your child is completely and consistently silent outside the home (never speaking at daycare, not even to familiar teachers, for more than a month), this may be selective mutism - an anxiety disorder where children cannot speak in specific social situations despite speaking normally at home. Selective mutism responds well to early intervention.',
  byAge: [
    { ageRange: '0-12 months', context: 'Pre-verbal babies communicate through babbling, gestures, and facial expressions rather than words. It is normal for babies to be more vocal at home with familiar caregivers than in new environments. If your baby babbles and vocalizes at home but is quieter at daycare, this is a normal response to a less familiar setting. As they become more comfortable, you should see more vocalization at daycare. If your baby is not babbling at all by 9-12 months (at home or daycare), discuss with your pediatrician.' },
    { ageRange: '1-3 years', context: 'Many toddlers are shyer in group settings and talk less at daycare than at home. This is especially true during the first few months of daycare and for temperamentally cautious children. Most warm up over time. Selective mutism is considered when a child consistently and completely fails to speak in specific social settings for at least one month (beyond the first month of a new environment), despite speaking normally at home. It typically appears between ages 2-5 and is an anxiety-based condition, not defiance or stubbornness. Early treatment (usually behavioral therapy with gradual exposure) is very effective. If your child has been at daycare for several months and has never spoken there, discuss selective mutism with your pediatrician.' },
  ],
  whenNormal: ['Being quieter at daycare than at home, especially in the first few months', 'Talking to one or two favorite friends but not the whole group', 'Being more talkative with familiar teachers than new ones', 'Gradual increase in talking at daycare over time'],
  whenToMention: ['Your child has been at daycare for more than 2-3 months and still does not speak at all there', 'Your child speaks freely at home but is completely silent around all non-family members', 'The silence is not limited to daycare - your child does not speak at the park, at friends\' houses, or in any public setting', 'The school or daycare has raised concerns about your child\'s lack of speech'],
  whenToActNow: ['Complete silence outside the home persisting for months combined with significant distress', 'Your child does not speak at home either (this is a general speech delay, not selective mutism)', 'Loss of previously developed speech in any setting'],
  relatedMilestones: ['communication', 'social-emotional'],
  showSelfReferral: true,
  relatedConcernSlugs: ['late-talker', 'separation-anxiety', 'baby-regression-after-starting-daycare', 'toddler-not-playing-with-other-kids'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Selective Mutism. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Selective Mutism in Children.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
  ],
};

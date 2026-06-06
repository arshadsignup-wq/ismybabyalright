import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-language-disorder-vs-delay',
  title: 'Language Delay vs. Language Disorder: What\'s the Difference?',
  category: 'communication',
  searchTerms: [
    'language delay vs disorder',
    'language disorder toddler',
    'developmental language disorder',
    'DLD child',
    'specific language impairment',
    'language delay will catch up',
    'language disorder diagnosis',
    'difference delay disorder language',
    'toddler language disorder signs',
    'is it a delay or disorder',
  ],
  quickAnswer:
    'A language delay means a child is following the typical path of development but at a slower rate and is expected to catch up. A language disorder (now often called Developmental Language Disorder or DLD) means the pattern of development is different, not just slower, and typically requires ongoing support. A speech-language pathologist can evaluate your child and help distinguish between the two.',
  byAge: [
    { ageRange: '12-24 months', context: 'At this age, it is difficult to distinguish delay from disorder. Most professionals will monitor development and recommend early intervention if concerns exist. The important thing is to start support early regardless of the specific diagnosis.' },
    { ageRange: '24-36 months', context: 'Patterns begin to emerge. Late talkers who catch up tend to have strong comprehension, good gesture use, and social engagement. Those with possible disorders may have difficulties across multiple language areas and may not respond as quickly to early intervention.' },
    { ageRange: '3-4 years', context: 'Developmental Language Disorder can be more reliably identified. Signs include persistent difficulties with grammar, vocabulary, understanding complex sentences, and formulating ideas. About 7% of children have DLD, making it more common than autism.' },
    { ageRange: '4-5 years', context: 'Children with DLD may have difficulty with narrative skills, following complex directions, and learning new vocabulary. They benefit from speech therapy and educational accommodations. DLD is a lifelong condition, but with support, children develop effective communication strategies.' },
    { ageRange: '5-7 years', context: 'DLD can affect reading and academic performance. Children with DLD often need continued speech therapy and may qualify for school-based services. Early identification and support improve long-term academic and social outcomes.' },
  ],
  whenNormal: [
    'Your child was a late talker but has caught up to peers in both understanding and speaking',
    'Your child had a brief language delay related to ear fluid that resolved with treatment',
    'Your child is bilingual and language development is on track when both languages are considered together',
  ],
  whenToMention: [
    'Your child has been receiving speech therapy but progress is slower than expected',
    'Your child has language difficulties that persist despite intervention',
    'Your child has difficulty with multiple areas of language including grammar, vocabulary, and comprehension',
  ],
  whenToActNow: [
    'Your child\'s language abilities are significantly below age expectations across all areas',
    'Your child\'s language difficulties are affecting their ability to learn, make friends, or participate in daily activities',
  ],
  relatedMilestones: ['vocabulary-growth', 'grammar-development', 'language-comprehension', 'narrative-skills'],
  showSelfReferral: true,
  relatedConcernSlugs: ['speech-delay', 'toddler-mixed-receptive-expressive-delay', 'delayed-receptive-language'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Spoken Language Disorders.', url: 'https://www.asha.org/practice-portal/clinical-topics/spoken-language-disorders/' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Specific Language Impairment.', url: 'https://www.nidcd.nih.gov/health/specific-language-impairment' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Delays. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
  ],
};

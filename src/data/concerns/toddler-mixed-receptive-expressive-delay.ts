import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-mixed-receptive-expressive-delay',
  title: 'Toddler Has Both Understanding and Speaking Delays',
  category: 'communication',
  searchTerms: [
    'mixed receptive expressive delay',
    'toddler not understanding or talking',
    'toddler both comprehension and speech delayed',
    'toddler language delay both types',
    'mixed language disorder toddler',
    'toddler delayed understanding and speaking',
    'toddler behind in comprehension and expression',
    'global language delay toddler',
    'receptive and expressive delay combined',
    'toddler not understanding and not talking',
  ],
  quickAnswer:
    'A mixed receptive-expressive language delay means your child has difficulty both understanding and producing language. This is more significant than an expressive-only delay and typically requires speech therapy. A comprehensive evaluation including hearing testing is essential to determine the cause and guide treatment. Early intervention leads to the best outcomes.',
  byAge: [
    { ageRange: '12-18 months', context: 'Signs include not responding to name, not following simple directions, limited babbling, and no words. While some variation is normal, a combination of receptive and expressive delays at this age warrants evaluation.' },
    { ageRange: '18-24 months', context: 'A child with mixed delay may have few or no words and also struggle to understand common words and simple directions. Hearing testing is essential to rule out hearing loss as a cause. Early intervention services can be accessed through your state\'s early intervention program.' },
    { ageRange: '24-36 months', context: 'Both comprehension and production should be rapidly improving at this age. If your child has significant difficulties in both areas, a speech-language evaluation is strongly recommended. Treatment will address both understanding and producing language.' },
    { ageRange: '3-4 years', context: 'Ongoing speech therapy targeting both receptive and expressive skills is important. Children with mixed delays may need more intensive therapy. Progress should be monitored regularly and goals adjusted as your child develops.' },
    { ageRange: '4-5 years', context: 'Some children with mixed receptive-expressive delays are eventually diagnosed with a developmental language disorder. Ongoing support through speech therapy and educational accommodations can help your child succeed in school.' },
  ],
  whenNormal: [
    'Your toddler is a bit behind in both understanding and speaking but is making steady progress',
    'Your toddler has mild delays but is bilingual and developing both languages simultaneously',
    'Your toddler recently started early intervention and progress is beginning',
  ],
  whenToMention: [
    'Your toddler has few words and also does not seem to understand common words or directions',
    'Your 18-month-old does not respond to their name and has no words',
    'Your toddler is not progressing in either comprehension or production over several months',
  ],
  whenToActNow: [
    'Your toddler shows no understanding of any language and produces no words or meaningful sounds',
    'Your toddler has lost both comprehension and expressive language skills',
  ],
  relatedMilestones: ['language-comprehension', 'first-words', 'follows-directions', 'gestures'],
  showSelfReferral: true,
  relatedConcernSlugs: ['delayed-receptive-language', 'speech-delay', 'toddler-language-disorder-vs-delay'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Spoken Language Disorders.', url: 'https://www.asha.org/practice-portal/clinical-topics/spoken-language-disorders/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Delays in Toddlers. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Specific Language Impairment.', url: 'https://www.nidcd.nih.gov/health/specific-language-impairment' },
  ],
};

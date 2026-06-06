import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-special-interest-intense', title: 'Toddler Has an Unusually Intense Focused Interest', category: 'behavior',
  searchTerms: ['toddler intense interest', 'toddler obsessed with one topic', 'toddler fixated on trains', 'toddler special interest', 'toddler hyperfocus one thing', 'toddler only wants one topic', 'intense focused interest child', 'toddler obsessive interest', 'toddler only talks about one thing', 'restricted interest toddler'],
  quickAnswer: 'Many toddlers develop intense interests in specific topics like trains, dinosaurs, or letters. This passion-driven learning is often healthy and supports vocabulary, knowledge, and focus. It becomes a concern when the interest is so consuming that the child cannot engage with other topics, resists all other activities, and it interferes with social interaction and daily functioning.',
  byAge: [
    { ageRange: '18-24 months', context: 'Strong preferences for certain toys or topics are normal. Toddlers may want to play with only trains or only watch one show. This usually reflects healthy developing interests.' },
    { ageRange: '24-36 months', context: 'Intense interests deepen. Some children become remarkably knowledgeable about their topic. This is typically positive if the child can still engage with other activities and interact socially.' },
    { ageRange: '3-4 years', context: 'Passionate interests are common. The key question is whether the interest supports or replaces social interaction and other learning. A child who can share their interest with others is using it positively.' },
    { ageRange: '4-5 years', context: 'If the interest has become so consuming that the child cannot participate in school activities, engage with peers on other topics, or transition away from their interest without meltdowns, an evaluation may be helpful.' },
    { ageRange: '5-6 years', context: 'Intense interests can be strengths if channeled appropriately. They only need intervention when they significantly interfere with functioning and social development.' },
  ],
  whenNormal: ['Your toddler loves one topic but can also enjoy other activities and interactions', 'Your toddler talks about their interest enthusiastically but can participate in conversations about other topics', 'Your toddler\'s interest is a phase that shifts over weeks or months', 'Your toddler shares their interest with others in a social way'],
  whenToMention: ['Your child\'s interest is so consuming that they cannot participate in other required activities', 'Your child becomes extremely distressed when redirected away from their interest', 'The intense interest replaces social interaction and your child only wants to engage alone with their topic'],
  whenToActNow: ['Your child\'s interest has narrowed to one very specific thing and all other activities have dropped away', 'The intense interest is combined with social withdrawal, language regression, and other developmental concerns'],
  relatedMilestones: ['flexible-thinking', 'social-engagement', 'self-regulation', 'attention'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-rigid-play-patterns', 'toddler-routine-change-meltdown', 'toddler-spinning-objects-fascination'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Autism Spectrum Disorder.', url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Signs and Symptoms of Autism.', url: 'https://www.cdc.gov/ncbddd/autism/signs.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Understanding Your Child\'s Interests.', url: 'https://www.zerotothree.org/resource/play/' },
  ],
};

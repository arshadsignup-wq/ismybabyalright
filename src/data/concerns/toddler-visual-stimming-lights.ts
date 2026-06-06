import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-visual-stimming-lights', title: 'Toddler Fascinated by Lights and Visual Patterns', category: 'behavior',
  searchTerms: ['toddler visual stimming', 'toddler staring at lights', 'toddler fascinated by lights', 'toddler visual stimulation seeking', 'toddler looking at lights closely', 'toddler watching spinning lights', 'visual stimming child', 'toddler fixated on light patterns', 'toddler visual self stimulation', 'toddler flicking lights on off'],
  quickAnswer: 'Many babies and toddlers are fascinated by lights, shadows, and visual patterns as part of normal visual exploration. Visual stimming, where a child seeks out visual experiences like staring at lights, watching spinning objects, or flicking light switches repeatedly, becomes a concern when it is very frequent, interferes with other activities, and is combined with other developmental differences.',
  byAge: [
    { ageRange: '0-6 months', context: 'Babies are naturally attracted to high-contrast patterns and light. Staring at lights and bright objects is part of normal visual development.' },
    { ageRange: '6-12 months', context: 'Continued interest in light and visual patterns is normal. Babies may watch ceiling fans, sunlight patterns, or reflections. This should be one of many interests.' },
    { ageRange: '12-24 months', context: 'If visual stimming is the dominant activity and your toddler prefers staring at lights over engaging with people or toys, this is worth noting. Occasional fascination with light is normal.' },
    { ageRange: '24-36 months', context: 'Persistent intense visual stimming combined with limited social engagement, restricted play, and other repetitive behaviors should be evaluated.' },
    { ageRange: '3-5 years', context: 'Visual stimming that is very frequent and interferes with learning and social participation should be addressed as part of a comprehensive developmental evaluation.' },
  ],
  whenNormal: ['Your baby or toddler looks at lights briefly as part of visual exploration', 'Your toddler is interested in visual effects but also engages with people and toys', 'Your toddler went through a phase of light fascination that passed', 'Your toddler watches spinning objects briefly but can be redirected'],
  whenToMention: ['Your toddler spends extended periods staring at lights or visual patterns', 'Your toddler flicks light switches repeatedly or seeks out visual stimulation frequently', 'Visual fascination is combined with reduced social engagement and limited play variety'],
  whenToActNow: ['Your toddler\'s visual stimming has increased while social engagement has decreased', 'Visual stimming dominates your child\'s activity and they cannot be redirected to other activities'],
  relatedMilestones: ['sensory-processing', 'social-engagement', 'visual-development', 'attention'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-sensory-seeking-behavior', 'toddler-spinning-objects-fascination', 'toddler-hand-flapping-when-excited'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Autism Spectrum Disorder.', url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Signs of Autism.', url: 'https://www.cdc.gov/ncbddd/autism/signs.html' },
    { org: 'NIH', citation: 'National Institute of Mental Health. Autism Spectrum Disorder.', url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd' },
  ],
};

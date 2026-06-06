import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-autism-vs-sensory-processing', title: 'Autism vs Sensory Processing Disorder', category: 'behavior',
  searchTerms: ['autism vs sensory processing', 'SPD vs autism', 'sensory processing disorder or autism', 'difference autism and SPD', 'sensory issues autism', 'sensory processing not autism', 'sensory disorder vs autism', 'could it be SPD not autism', 'autism sensory overlap', 'distinguish autism from SPD'],
  quickAnswer: 'Autism and sensory processing difficulties overlap significantly, as most children with autism have sensory differences. However, sensory processing difficulties can exist without autism. The key distinction is that autism involves social communication differences, while sensory processing disorder primarily affects how sensory information is processed. A child with SPD alone typically has normal social communication skills. A comprehensive evaluation can distinguish between the two.',
  byAge: [
    { ageRange: '12-24 months', context: 'Sensory differences are apparent in both conditions at this age. The distinguishing feature is social communication: a child with SPD alone makes eye contact, points, engages socially, and communicates intent. A child with autism has differences in these areas.' },
    { ageRange: '24-36 months', context: 'As social demands increase, differences become clearer. A child with SPD alone plays pretend, takes turns, and engages peers despite sensory challenges. A child with autism has difficulty with these social aspects.' },
    { ageRange: '3-4 years', context: 'A comprehensive evaluation including OT for sensory assessment and psychology for social communication assessment can distinguish between the two. Many children benefit from OT support regardless of diagnosis.' },
    { ageRange: '4-5 years', context: 'Both conditions benefit from occupational therapy. Children with autism also need social communication support. Accurate diagnosis guides the most effective intervention plan.' },
    { ageRange: '5-6 years', context: 'With appropriate support, children with both conditions make progress. Understanding whether the primary challenge is sensory processing, social communication, or both guides treatment priorities.' },
  ],
  whenNormal: ['Your child has some sensory preferences but communicates and socializes well', 'Your child has mild sensory sensitivities common in many children', 'Your child\'s sensory behaviors are diminishing with age'],
  whenToMention: ['Your child has significant sensory differences and you are unsure if autism is also present', 'Your child has been told they have SPD and you have lingering concerns about social communication', 'You want a comprehensive evaluation to clarify your child\'s needs'],
  whenToActNow: ['Your child has severe sensory and social communication difficulties affecting daily functioning', 'Your child is losing skills alongside sensory and social challenges'],
  relatedMilestones: ['sensory-processing', 'social-engagement', 'self-regulation', 'adaptive-behavior'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-sensory-processing-concerns', 'baby-autism-screening-concerns', 'early-signs-of-autism-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sensory Integration Therapy. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Sensory-Integration-Therapy.aspx' },
    { org: 'NIH', citation: 'National Institute of Mental Health. Autism Spectrum Disorder.', url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Autism Signs and Symptoms.', url: 'https://www.cdc.gov/ncbddd/autism/signs.html' },
  ],
};

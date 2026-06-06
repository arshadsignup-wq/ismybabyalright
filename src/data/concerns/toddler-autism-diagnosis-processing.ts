import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-autism-diagnosis-processing', title: 'Processing Your Child\'s Autism Diagnosis', category: 'behavior',
  searchTerms: ['processing autism diagnosis', 'coping autism diagnosis toddler', 'child diagnosed with autism', 'autism diagnosis emotions', 'autism diagnosis what now', 'after autism diagnosis next steps', 'autism diagnosis grief', 'autism diagnosis overwhelming', 'coming to terms with autism', 'autism diagnosis support parents'],
  quickAnswer: 'Receiving an autism diagnosis for your child brings a range of emotions including grief, relief, confusion, and determination. These feelings are all normal and valid. What matters most is that early intervention significantly improves outcomes. Most families find that connecting with other parents, starting services quickly, and learning about their child\'s unique strengths and needs helps them move forward with confidence.',
  byAge: [
    { ageRange: '18-24 months', context: 'An early diagnosis means the best opportunity for early intervention. While processing emotions, prioritize starting services. Applied Behavior Analysis (ABA), speech therapy, and occupational therapy are commonly recommended.' },
    { ageRange: '24-36 months', context: 'This is a common age for diagnosis. Begin by contacting your state\'s early intervention program and exploring therapy options. Research shows that intensive early intervention during these years makes the most difference.' },
    { ageRange: '3-4 years', context: 'After diagnosis, transition from early intervention to school-based services if applicable. Work with your child\'s team to create goals and access appropriate supports. Connect with local autism parent groups.' },
    { ageRange: '4-5 years', context: 'Planning for school entry is important. An IEP or 504 plan can ensure your child receives appropriate supports. Continue therapy services and build on your child\'s strengths.' },
    { ageRange: '5-6 years', context: 'As your child enters school, advocacy becomes important. Stay connected with your child\'s team, monitor progress, and adjust supports as needed. Many children with autism make remarkable progress with consistent support.' },
  ],
  whenNormal: ['You feel a mix of emotions including sadness, relief, confusion, and hope after diagnosis', 'You need time to process before making major decisions about services', 'You feel overwhelmed by information and options', 'You grieve the path you imagined while embracing your child exactly as they are'],
  whenToMention: ['You need guidance on which services to start first and how to access them', 'You want to connect with other families navigating similar experiences', 'You have questions about what the diagnosis means for your child\'s future'],
  whenToActNow: ['You or your partner are experiencing significant depression or anxiety that prevents you from supporting your child', 'Services are not being started due to wait lists and your child needs support now'],
  relatedMilestones: ['social-engagement', 'language-development', 'adaptive-behavior', 'emotional-development'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-autism-evaluation-process', 'baby-autism-screening-concerns', 'early-signs-of-autism-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Autism: Caring for Children with ASD. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Treatment and Intervention for ASD.', url: 'https://www.cdc.gov/ncbddd/autism/treatment.html' },
    { org: 'NIH', citation: 'National Institute of Mental Health. Autism Spectrum Disorder.', url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd' },
  ],
};

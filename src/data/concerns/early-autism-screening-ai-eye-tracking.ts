import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'early-autism-screening-ai-eye-tracking',
  title: 'Early Autism Screening with AI and Eye-Tracking Technology',
  category: 'medical',
  searchTerms: [
    'early autism screening',
    'autism eye tracking test',
    'AI autism screening baby',
    'early autism detection baby',
    'autism screening technology',
    'EarliPoint autism',
    'can autism be detected early',
    'autism signs baby 6 months',
    'autism screening before 2',
    'autism eye gaze test',
    'digital autism screening infant',
  ],
  quickAnswer:
    'Advances in AI and eye-tracking technology are enabling earlier autism screening in babies as young as 16-30 months. The FDA has cleared eye-tracking devices that measure how babies look at social scenes to identify patterns associated with autism spectrum disorder. These tools supplement, but do not replace, clinical evaluation. Traditional screening with the M-CHAT-R is recommended at 18 and 24 months. Early identification is crucial because intensive early intervention during the brain\'s most neuroplastic period (before age 3) significantly improves outcomes.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'While formal autism diagnosis is typically not made before 12 months, research has identified early behavioral markers. Reduced eye contact, limited social smiling, decreased interest in faces, and absence of shared attention behaviors (following a point, looking where you look) can be early signs. Babies who will later be diagnosed with autism may show differences in how they visually process social information as early as 2-6 months. AI-powered tools are being developed to detect these subtle differences, though most are still in research phases for this age group.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is the age when autism can often first be reliably identified. The AAP recommends universal autism screening at 18 months using the M-CHAT-R questionnaire. Newer eye-tracking technology, such as the FDA-cleared EarliPoint device, can objectively measure social attention patterns in children as young as 16 months. These devices show a child brief video clips and precisely track where and how they look, identifying patterns that differ from neurotypical development. These tools can provide objective data to supplement clinical observation, potentially reducing diagnostic delays.',
    },
    {
      ageRange: '24-36 months',
      context:
        'The second AAP-recommended autism screening occurs at 24 months. By this age, many diagnostic features of autism are more apparent: limited language, repetitive behaviors, difficulty with pretend play, and challenges with peer interaction. AI-based screening tools combined with clinical evaluation can accelerate the diagnostic process, reducing the average age of diagnosis (currently around 4-5 years in many communities). Earlier diagnosis means earlier access to evidence-based interventions like Applied Behavior Analysis (ABA), speech therapy, and developmental support.',
    },
  ],
  whenNormal: [
    'Your baby makes eye contact, smiles socially, responds to their name, and shows interest in faces and people.',
    'Your child passed their 18 and 24-month autism screening at their well-child visit.',
    'Your child has some quirky behaviors but is developing communication and social skills on track.',
  ],
  whenToMention: [
    'Your baby over 12 months has limited eye contact, does not respond to their name, or does not point to show interest in things.',
    'Your toddler has not developed any words by 16 months or is not using 2-word phrases by 24 months.',
    'You have concerns about your child\'s social development, repetitive behaviors, or sensory sensitivities.',
  ],
  whenToActNow: [
    'Your child is losing previously acquired language or social skills (regression) at any age.',
    'Your child has been screened positive for autism and has not yet received a comprehensive evaluation -- pursue this promptly.',
    'Your child has significant behavioral challenges that are unsafe or severely limiting daily functioning.',
  ],
  relatedMilestones: [
    'social-emotional',
    'language-development',
    'communication',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['no-joint-attention', 'not-responding-to-sounds', 'developmental-delay-early-intervention-importance', 'regression-in-speech'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Identification, Evaluation, and Management of Children with Autism Spectrum Disorder. Pediatrics, 2020.',
      url: 'https://publications.aap.org/pediatrics/article/145/1/e20193447/36917/Identification-Evaluation-and-Management-of',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Screening and Diagnosis of Autism Spectrum Disorder. CDC.',
      url: 'https://www.cdc.gov/ncbddd/autism/screening.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Eye-Tracking Technology for Early Autism Detection. NIMH.',
      url: 'https://www.nimh.nih.gov/news/science-news/2023/eye-tracking-autism',
    },
  ],
};

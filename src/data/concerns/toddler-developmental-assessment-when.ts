import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-developmental-assessment-when',
  title: 'When Should My Toddler Get a Developmental Assessment?',
  category: 'medical',
  searchTerms: [
    'when to get developmental assessment toddler',
    'toddler developmental evaluation',
    'developmental screening toddler',
    'should I get my toddler evaluated',
    'early intervention evaluation',
    'toddler developmental delay assessment',
    'developmental milestones evaluation',
    'when to worry about toddler development',
    'developmental pediatrician referral',
    'toddler not meeting milestones',
    'how to get toddler assessed for delays',
  ],
  quickAnswer:
    'The AAP recommends developmental screening at 9, 18, and 30 months of age, with autism-specific screening at 18 and 24 months. If you have concerns about your toddler\'s development at any point, you do not need to wait for a scheduled screening — you can request an evaluation at any time. Early intervention services are free through your state\'s early intervention program for children under age 3, and early identification leads to better outcomes.',
  byAge: [
    {
      ageRange: '9-18 months',
      context:
        'By 9 months, your pediatrician should administer a standardized developmental screening tool. If your baby is not meeting motor milestones like sitting independently, not babbling, not responding to their name, or not making eye contact, bring these concerns to your pediatrician. You do not need a referral to contact your state\'s early intervention program — any parent can self-refer. Early intervention services evaluate children at no cost and provide therapy if delays are identified.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is a critical screening window. The AAP recommends formal developmental screening at 18 months and autism-specific screening at both 18 and 24 months using validated tools like the ASQ-3 and M-CHAT-R. If your toddler is not using any words by 18 months, has lost previously acquired skills, does not point or gesture, or seems disconnected from others, request a formal evaluation. Trust your instincts — parents often notice subtle concerns before screening tools catch them.',
    },
    {
      ageRange: '24-36 months',
      context:
        'The AAP recommends another developmental screening at 30 months. By age 2, your toddler should be using at least 50 words and beginning to combine two-word phrases. By age 3, speech should be mostly understandable to unfamiliar adults. If your child is significantly behind in any area — speech, motor skills, social interaction, or play skills — request a comprehensive developmental evaluation. For children approaching age 3, contact your local school district, which is required to evaluate and provide services through the Individuals with Disabilities Education Act (IDEA).',
    },
  ],
  whenNormal: [
    'Your toddler is meeting most milestones within the expected timeframe, even if some come slightly later',
    'Your pediatrician has screened your toddler at recommended intervals and is not concerned',
    'Your toddler is progressing steadily, even if at their own pace, and is not losing skills',
  ],
  whenToMention: [
    'Your toddler is consistently behind in one or more developmental areas compared to age expectations',
    'Your toddler has lost skills they previously demonstrated, such as words they used to say or social behaviors they used to show',
    'You have a gut feeling that something is not right, even if you cannot pinpoint exactly what',
  ],
  whenToActNow: [
    'Your toddler has had a sudden regression in multiple developmental areas, which requires urgent medical evaluation',
    'Your toddler is not walking by 18 months or has no words by 18 months — request early intervention evaluation immediately',
    'Your toddler shows signs of hearing or vision loss that could be affecting development',
  ],
  relatedMilestones: [
    'language-expressive',
    'social-emotional-interaction',
    'gross-motor-walking',
    'fine-motor-manipulation',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-speech-delay-signs',
    'toddler-speech-delay-panic-when-to-worry',
    'not-standing',
    'limited-vocabulary',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Surveillance and Screening. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/145/1/e20193449/36971/Promoting-Optimal-Development-Identifying-Infants',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Developmental Monitoring and Screening.',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/screening.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Early Intervention for Children with Developmental Delays.',
      url: 'https://www.nichd.nih.gov/health/topics/idds/conditioninfo/early-intervention',
    },
  ],
};

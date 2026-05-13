import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'types-of-therapy-ot-pt-speech',
  title: 'Types of Therapy: OT, PT, and Speech',
  category: 'medical',
  searchTerms: [
    'occupational therapy baby',
    'physical therapy infant',
    'speech therapy toddler',
    'OT vs PT baby',
    'types of therapy for babies',
    'what does occupational therapy do for babies',
    'speech therapy for late talker',
    'physical therapy for crawling delay',
    'developmental therapy infant',
    'when does a baby need therapy',
  ],
  quickAnswer:
    'The three most common types of therapy for young children are occupational therapy (OT), physical therapy (PT), and speech-language therapy. OT focuses on fine motor skills, sensory processing, and daily activities like feeding and self-care. PT addresses gross motor skills like sitting, crawling, walking, and balance. Speech therapy supports communication, language development, feeding, and swallowing. Many children receive a combination of these therapies based on their individual needs.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Therapy in the earliest months is often focused on supporting feeding, positioning, and early motor development. For NICU graduates or babies with diagnosed conditions, PT may address muscle tone and head control, while OT may focus on feeding skills and sensory regulation. At this age, therapy is primarily parent coaching, where the therapist teaches you techniques to use throughout your daily routine rather than doing hands-on work only during sessions.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Between 3 and 6 months, therapists may work on skills like reaching, grasping, rolling, and bringing hands together. PT goals often focus on building the core strength needed for sitting, while OT may address fine motor coordination and sensory responses. Speech therapy at this age is less common but may be recommended if there are significant feeding difficulties or if a baby is not vocalizing or responding to sounds as expected.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a period of rapid motor development, and therapy goals often focus on sitting independently, crawling, pulling to stand, and beginning to use a pincer grasp. Speech therapy may be introduced if a baby is not babbling, not responding to their name, or having difficulty transitioning to solid foods. All three types of therapy use play as their primary tool, making sessions engaging and natural for your baby.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers commonly receive speech therapy for late talking, PT for delayed walking or balance concerns, and OT for feeding difficulties or sensory processing challenges. At this age, therapy continues to emphasize parent coaching so that strategies are embedded into everyday activities like mealtimes, bath time, and play. Consistency between therapy sessions and home practice is what drives the most progress.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By age 2-3, therapy goals become more specific and may include combining words into phrases, climbing stairs, using utensils, or managing sensory input in busy environments. As children approach age 3, their therapy may transition from home-based early intervention to a preschool or clinic-based setting. Your therapist and service coordinator will help plan this transition so there is continuity in your child\'s care.',
    },
  ],
  whenNormal: [
    'Your child receives a therapy recommendation and you feel uncertain or overwhelmed, which is a natural response to new information about your child\'s development',
    'Progress in therapy is gradual and sometimes feels slow, which is typical because developmental skills build on each other over time',
    'Your child is more cooperative with the therapist than with you at home, or vice versa, which is common and does not mean you are doing anything wrong',
    'Your therapist adjusts goals and strategies over time as your child develops, which reflects responsive and individualized care',
  ],
  whenToMention: [
    'You are unsure whether your child needs therapy and want your pediatrician\'s perspective on their development',
    'Your child has been in therapy for several months and you are not seeing any progress, and want to discuss whether the approach should be adjusted',
    'You want to understand the difference between what OT, PT, and speech each address so you can better support your child at home',
    'You are having difficulty accessing therapy services due to insurance, waitlists, or availability in your area',
  ],
  whenToActNow: [
    'Your child is losing previously acquired skills such as stopping talking, no longer walking, or losing interest in interacting with others',
    'Your child has a sudden change in muscle tone, movement, or coordination that was not present before',
    'Your child is unable to eat or drink safely and is choking, gagging, or aspirating during meals',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Palomo, T. et al. Early Intervention Services. Pediatrics In Review.',
      url: 'https://publications.aap.org/pediatricsinreview/article/42/3/145/36803/Early-Intervention',
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
        'National Institutes of Health. National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};

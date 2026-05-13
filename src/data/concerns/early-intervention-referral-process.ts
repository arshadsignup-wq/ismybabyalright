import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'early-intervention-referral-process',
  title: 'What Happens After an Early Intervention Referral',
  category: 'medical',
  searchTerms: [
    'early intervention referral process',
    'what happens at early intervention evaluation',
    'early intervention timeline',
    'EI referral what to expect',
    'early intervention assessment baby',
    'how to get early intervention services',
    'early intervention eligibility',
    'developmental evaluation infant',
    'Part C early intervention',
    'early intervention free evaluation',
  ],
  quickAnswer:
    'An early intervention referral begins a structured process to evaluate whether your child has a developmental delay or disability and would benefit from therapeutic services. The evaluation is free, and services are available in every state for children from birth to age 3 under Part C of the Individuals with Disabilities Education Act (IDEA). Being referred does not mean something is wrong; it means someone wants to make sure your child has every opportunity to reach their potential.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies can be referred to early intervention at any age, and infants who were born prematurely, had a NICU stay, or have a diagnosed condition are often referred before they leave the hospital. At this age, services typically focus on supporting feeding, parent-child bonding, and early motor development. The evaluation process is play-based and observational; no one will put your tiny baby through stressful testing.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your pediatrician, you, or another caregiver has concerns about how your baby is developing, a referral can be made at any time. After the referral, your state\'s early intervention program must complete an evaluation within 45 days. The evaluation team typically includes professionals from multiple disciplines who assess motor skills, communication, cognitive development, and social-emotional functioning. You will be an active participant in the process and your input about your baby\'s abilities is essential.',
    },
    {
      ageRange: '6-12 months',
      context:
        'At this age, evaluations often focus on motor milestones like sitting, crawling, and reaching, as well as communication skills like babbling and responding to sounds. If your child qualifies, an Individualized Family Service Plan (IFSP) is created, which outlines specific goals and the services your child will receive. Services are delivered in your child\'s natural environment, which usually means a therapist comes to your home or daycare.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Referrals during the toddler years often relate to speech and language delays, motor delays, or behavioral concerns. The evaluation process is the same regardless of age: free, comprehensive, and family-centered. If your child is found eligible, services may include speech therapy, occupational therapy, physical therapy, developmental instruction, or a combination. Early intervention has been shown to significantly improve outcomes, especially when started before age 2.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Early intervention services under Part C are available until your child\'s third birthday. If your child is referred close to age 3, the evaluation and service process is the same but the team will also begin planning for the transition to Part B services through your local school district, if needed. This transition planning ensures there is no gap in support for your child.',
    },
  ],
  whenNormal: [
    'You feel anxious or emotional after receiving a referral, which is a completely understandable reaction even when the referral is routine',
    'The evaluation process takes several weeks from referral to first appointment, which is typical given scheduling and the 45-day timeline',
    'Your child performs differently during the evaluation than they do at home, which evaluators account for by also gathering your observations',
    'Your child qualifies for services in some areas but not others, which is common and reflects their unique developmental profile',
  ],
  whenToMention: [
    'You have concerns about your child\'s development but have not yet received a referral and want to request one',
    'More than 45 days have passed since the referral and you have not been contacted for an evaluation',
    'You disagree with the evaluation results and want to understand your right to request a re-evaluation or independent assessment',
    'You need help understanding the IFSP or the services being recommended for your child',
  ],
  whenToActNow: [
    'Your child is approaching their third birthday and has not yet been evaluated despite a referral, as the window for Part C services closes at age 3',
    'Your child is showing significant regression in previously acquired skills such as losing words, stopping walking, or withdrawing socially',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. If You\'re Concerned. Learn the Signs. Act Early.',
      url: 'https://www.cdc.gov/ncbddd/actearly/concerned.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Eunice Kennedy Shriver National Institute of Child Health and Human Development. Early Intervention for Autism.',
      url: 'https://www.nichd.nih.gov/health/topics/autism/conditioninfo/treatments/early-intervention',
    },
    {
      org: 'Department of Education',
      citation:
        'U.S. Department of Education. Early Intervention Program for Infants and Toddlers with Disabilities (Part C of IDEA).',
      url: 'https://sites.ed.gov/idea/regs/c',
    },
  ],
};

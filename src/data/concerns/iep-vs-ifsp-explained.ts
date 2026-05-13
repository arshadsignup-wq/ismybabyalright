import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'iep-vs-ifsp-explained',
  title: 'IEP vs. IFSP: Understanding Your Child\'s Plan',
  category: 'medical',
  searchTerms: [
    'IEP vs IFSP difference',
    'what is an IFSP',
    'what is an IEP',
    'IFSP to IEP transition',
    'early intervention plan explained',
    'individualized family service plan',
    'individualized education program baby',
    'Part C vs Part B',
    'special education preschool toddler',
    'transition from early intervention to school',
  ],
  quickAnswer:
    'An IFSP (Individualized Family Service Plan) and an IEP (Individualized Education Program) are both legal documents that outline the support services your child will receive, but they serve different age groups and have different focuses. The IFSP covers children from birth to age 3 under Part C of IDEA and is family-centered, while the IEP covers children ages 3 and older under Part B and is more child-focused within the educational setting. Understanding the differences helps you advocate effectively for your child during the transition.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'If your baby is receiving early intervention services, they will have an IFSP that is developed with your family. The IFSP focuses on the whole family, recognizing that supporting parents and caregivers is the most effective way to support a baby\'s development. Services are delivered in your child\'s natural environment, such as your home, and the plan includes specific, measurable goals based on your family\'s priorities and concerns.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby grows, the IFSP is reviewed at least every 6 months and can be updated at any time as your child\'s needs change. You are a full and equal member of the IFSP team and have the right to accept or decline any recommended service. The IFSP also identifies a service coordinator who helps you navigate the system, schedule appointments, and connect with resources.',
    },
    {
      ageRange: '12-24 months',
      context:
        'During this period, your IFSP team will continue to adjust goals and services as your toddler develops. As your child approaches their second birthday, the team should begin discussing the transition to Part B services, which are provided through your local school district starting at age 3. This transition planning is a legal requirement and should begin at least 6 months before your child\'s third birthday.',
    },
    {
      ageRange: '24-36 months',
      context:
        'The transition from IFSP to IEP is one of the most significant changes your family will navigate. Your child will be evaluated by the school district to determine eligibility for an IEP. The IEP process is more structured and education-focused compared to the family-centered IFSP. Services shift from your home to a school-based setting, typically a preschool classroom. You retain all your rights as a parent, including the right to participate in all meetings, review all evaluations, and disagree with decisions through formal dispute resolution if needed.',
    },
  ],
  whenNormal: [
    'You feel confused or overwhelmed by the terminology and processes involved in your child\'s service plan, which is extremely common',
    'You are unsure whether your child will qualify for an IEP after aging out of the IFSP, which is a separate evaluation process with different criteria',
    'The transition from early intervention to the school district feels abrupt or disorienting, which many families experience',
    'You disagree with some aspects of your child\'s plan and want to propose changes, which is your legal right',
  ],
  whenToMention: [
    'Your child is approaching age 3 and you have not heard from either your early intervention team or school district about transition planning',
    'You feel that your child\'s current IFSP or IEP does not adequately address their needs and want to request a meeting to revise it',
    'You want to understand what services will look like after the transition and need your pediatrician to provide documentation or input',
    'You are concerned that your child may lose services during the transition between IFSP and IEP',
  ],
  whenToActNow: [
    'Your child\'s third birthday is approaching and no transition meeting has been scheduled, as there are legal timelines that must be met',
    'You believe your child\'s rights are being violated under IDEA and need to understand your options for advocacy or dispute resolution',
    'Your child is experiencing significant developmental regression that is not being addressed by their current plan',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    {
      org: 'Department of Education',
      citation:
        'U.S. Department of Education. Individuals with Disabilities Education Act (IDEA).',
      url: 'https://sites.ed.gov/idea/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Learn the Signs. Act Early. Early Intervention.',
      url: 'https://www.cdc.gov/ncbddd/actearly/parents/states.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. National Library of Medicine. Efficacy of Early Intervention Programs for Children with Developmental Delays.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26065544/',
    },
  ],
};

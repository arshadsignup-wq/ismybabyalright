import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'choosing-a-pediatrician',
  title: 'How to Choose a Pediatrician for Your Baby',
  category: 'medical',
  searchTerms: [
    'how to choose a pediatrician',
    'choosing a pediatrician for newborn',
    'what to look for in a pediatrician',
    'pediatrician interview questions',
    'how to find a good pediatrician',
    'pediatrician vs doctor for baby',
    'questions to ask pediatrician before birth',
    'board certified pediatrician meaning',
    'best pediatrician near me how to choose',
    'pediatrician selection checklist',
  ],
  quickAnswer:
    'The AAP recommends selecting a pediatrician before your baby is born, ideally during the third trimester. Key factors to evaluate include board certification (verify through the American Board of Pediatrics), practice logistics (location, hours, after-hours coverage, hospital affiliation), communication style, and approach to topics like breastfeeding, vaccinations, and developmental screening. Most pediatric practices offer prenatal "meet and greet" visits. A good fit means you feel comfortable asking questions, your concerns are taken seriously, and the practice\'s philosophy aligns with your family\'s values. Board-certified pediatricians have completed a 3-year residency specifically in pediatrics and passed a rigorous certification exam, ensuring specialized training in infant and child health.',
  byAge: [
    {
      ageRange: 'Before birth',
      context:
        'Schedule prenatal interviews with 2-3 pediatric practices during the third trimester. Ask about their approach to newborn care, breastfeeding support, circumcision, vaccination schedule adherence, and after-hours availability. Evaluate practical factors: Is the office close to home? Do they accept your insurance? What hospital do they have privileges at? Meet the provider who would see your baby in the hospital after delivery if possible.',
    },
    {
      ageRange: '0-3 months',
      context:
        'Your pediatrician relationship is most intensive in the early months with frequent visits (3-5 day check, 1 month, 2 months). Pay attention to how the practice handles your questions and concerns. A good pediatrician should spend adequate time with you, explain findings clearly, and validate your concerns without being dismissive. If something feels wrong about the fit, it is not too late to switch practices.',
    },
    {
      ageRange: '3-12 months',
      context:
        'By this stage, you should feel confident in your pediatrician\'s ability to monitor development, address feeding and sleep concerns, and provide evidence-based guidance. Evaluate whether they are proactive about developmental screening, responsive when you call with concerns, and whether their staff is helpful with scheduling and prescription refills. The relationship should feel like a partnership in your child\'s care.',
    },
    {
      ageRange: '12-24 months',
      context:
        'As your child becomes a toddler, your pediatrician\'s role expands to behavioral guidance, language development monitoring, and managing the increasing number of minor illnesses. Consider whether your pediatrician communicates well with your toddler, is patient during challenging exams, and provides practical advice on discipline, nutrition, and safety. A long-term relationship with a trusted pediatrician benefits your child\'s continuity of care.',
    },
  ],
  whenNormal: [
    'Feeling unsure about which pediatrician to choose — it is a common concern for new parents',
    'Finding that no practice is perfect in every regard — prioritize what matters most to your family',
    'Your pediatrician having a different personal style than you expected, as long as the medical care is thorough',
    'Needing to see other providers in the practice when your primary pediatrician is unavailable',
  ],
  whenToMention: [
    'You feel rushed during appointments and your questions are not being fully addressed',
    'You have concerns about your child\'s development that feel dismissed or minimized',
    'The practice\'s approach to a medical topic (vaccinations, antibiotics, referrals) conflicts with evidence-based guidelines',
  ],
  whenToActNow: [
    'Your pediatrician recommends against established AAP guidelines without evidence-based rationale (e.g., advising against the standard vaccine schedule)',
    'You feel your child\'s safety concern is not being taken seriously after raising it multiple times',
    'Your baby needs a specialist referral and your pediatrician refuses to provide one despite ongoing symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'well-child-visit-schedule-guide',
    'pediatrician-disagreement-concerns',
    'baby-second-opinion-pediatric',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Finding a Pediatrician. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/tips-tools/find-pediatrician/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. How to Choose a Pediatrician.',
      url: 'https://www.healthychildren.org/English/tips-tools/find-pediatrician/Pages/Pediatrician-Referral-Service.aspx',
    },
    {
      org: 'ABMS',
      citation:
        'American Board of Medical Specialties. Is Your Doctor Board Certified? ABMS.org.',
      url: 'https://www.abms.org/verify-certification/',
    },
  ],
};

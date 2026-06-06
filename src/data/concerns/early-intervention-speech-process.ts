import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'early-intervention-speech-process', title: 'Early Intervention for Speech - How It Works', category: 'communication',
  searchTerms: ['early intervention speech', 'early intervention process speech delay', 'EI speech therapy', 'early intervention evaluation speech', 'Part C speech services', 'birth to three speech services', 'early intervention referral speech', 'how to get early intervention speech', 'early intervention free speech therapy', 'state early intervention program speech'],
  quickAnswer: 'Early Intervention (EI) is a federally mandated program providing free or low-cost services to children birth to age 3 with developmental delays. Any parent can request a referral, and you do not need a doctor\'s order. The process involves a referral, evaluation, creation of an Individualized Family Service Plan (IFSP), and then services are provided, often in your home. EI speech services are provided by licensed speech-language pathologists and focus on building communication skills through everyday activities and parent coaching.',
  byAge: [
    { ageRange: '0-6 months', context: 'EI can begin at birth for babies with identified conditions that affect communication, such as hearing loss, cleft palate, Down syndrome, or prematurity. Services at this age focus heavily on parent coaching and building early communication foundations.' },
    { ageRange: '6-12 months', context: 'If your baby is not babbling, not responding to sounds, or shows other communication concerns, you can contact your state\'s EI program directly for an evaluation. The evaluation is free and there is no risk in being assessed.' },
    { ageRange: '12-18 months', context: 'This is a common time for parents to contact EI for speech concerns. The evaluation will assess your child\'s communication, cognition, motor skills, and social-emotional development to determine eligibility.' },
    { ageRange: '18-24 months', context: 'If your child qualifies, an IFSP will be created with specific goals. Speech therapy is typically provided weekly in your home or childcare setting. Services are tailored to your family\'s routines and priorities.' },
    { ageRange: '2-3 years', context: 'As your child approaches age 3, the EI team will help transition to school-based services if continued support is needed. A transition plan is developed at least 90 days before the third birthday.' },
  ],
  whenNormal: ['Your child is meeting communication milestones and does not need EI services', 'Your child was evaluated and did not qualify because they are developing on track', 'Your child received EI services and has graduated because they met their goals'],
  whenToMention: ['You are unsure whether your child qualifies for early intervention', 'You want to understand the EI process before making a referral', 'Your child is receiving EI services but you have questions about the IFSP goals'],
  whenToActNow: ['Your child is under 3 and has clear communication delays. Contact your state EI program today.', 'Your child is approaching age 3 and has not been evaluated despite concerns. Time-sensitive referral is needed.', 'Your child\'s communication has regressed at any age. Request immediate evaluation.'],
  relatedMilestones: ['language-development', 'first-words', 'social-engagement', 'joint-attention'],
  showSelfReferral: true, relatedConcernSlugs: ['speech-therapy-when-to-start', 'speech-therapy-what-to-expect', 'toddler-language-disorder-vs-delay'],
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Early Intervention.', url: 'https://www.cdc.gov/ncbddd/actearly/parents/states.html' },
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Early Intervention.', url: 'https://www.asha.org/public/speech/early-intervention/' },
    { org: 'Zero to Three', citation: 'Zero to Three. Early Intervention Services.', url: 'https://www.zerotothree.org/resource/early-intervention/' },
  ],
};

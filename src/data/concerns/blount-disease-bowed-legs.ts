import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'blount-disease-bowed-legs',
  title: 'Blount Disease (Tibia Vara)',
  category: 'medical',
  searchTerms: [
    'blount disease toddler',
    'tibia vara child',
    'bowed legs getting worse toddler',
    'pathologic bowlegs child',
    'one leg more bowed than other',
    'bowlegs not improving after age 2',
    'progressive bowed legs child',
    'medial tibial beaking x-ray',
    'blount disease brace treatment',
    'infantile blount disease',
  ],
  quickAnswer:
    'Blount disease (tibia vara) is an abnormal growth plate disorder of the upper tibia (shinbone) that causes progressive bowing of the legs. Unlike normal physiologic bowing that nearly all babies outgrow by age 2-3, Blount disease worsens over time and shows a characteristic "beaking" on the inner part of the tibial growth plate on X-ray. It has two forms: infantile (ages 1-3) and adolescent. Early detection is important because bracing is effective in younger children, while older children may require surgery.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'All babies are born with some degree of bowed legs from their curled position in the womb. This is entirely normal physiologic bowing. At this age, it is impossible to distinguish between normal bowing and what might eventually become Blount disease. No evaluation beyond routine well-child exams is needed unless bowing is extreme.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Physiologic bowing remains common and expected in this age group. As your baby begins to pull to stand and cruise, you may notice the bowing more, but this is still within the normal range. Risk factors for infantile Blount disease include early walking (before 11 months), higher body weight, and African American or Hispanic heritage. Your pediatrician monitors leg alignment at well-child visits.',
    },
    {
      ageRange: '1-3 years',
      context:
        'This is when infantile Blount disease typically becomes apparent. The key distinguishing features from normal bowing are: asymmetry (one leg more bowed than the other), worsening bowing rather than improvement, and a sharp angular bow rather than a gentle curve. Your pediatrician may order standing X-rays to look for the hallmark finding of medial tibial beaking (a beak-shaped irregularity at the inner growth plate). If caught before age 3, bracing with a knee-ankle-foot orthosis (KAFO) can be very effective at correcting the alignment and avoiding surgery.',
    },
    {
      ageRange: '3-5 years',
      context:
        'If Blount disease was not detected earlier, the bowing may be pronounced by this age. Children often develop a lateral thrust (the knee bows outward with each step) when walking. After age 3-4, bracing becomes less effective, and surgical correction such as a proximal tibial osteotomy or guided growth surgery using plates may be recommended. These procedures have high success rates. Without treatment, progressive bowing can lead to joint damage, leg length discrepancy, and early arthritis.',
    },
  ],
  whenNormal: [
    'Your baby is under 18 months old and both legs are equally bowed, which is typical physiologic bowing from positioning in the womb',
    'Your toddler\'s bowed legs are gradually straightening as they grow, walk more, and approach age 2-3',
    'Both legs are symmetrically bowed and your child walks and runs without pain, limping, or unusual gait',
    'Your child is between 2-3 years old and the bowing is clearly less pronounced than it was at 12-18 months',
  ],
  whenToMention: [
    'Your child is over 2 years old and the bowing does not seem to be improving, or appears to be getting worse over time',
    'One leg is significantly more bowed than the other (asymmetric bowing is a red flag for Blount disease)',
    'Your child has a sharp angular bow at the knee rather than a gentle curve along the entire leg',
  ],
  whenToActNow: [
    'Your child has rapidly worsening leg bowing with pain, limping, or difficulty walking, which needs prompt orthopedic evaluation',
    'Your child has sudden leg pain with inability to bear weight after a fall, which could indicate a fracture through weakened bone',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['bowlegged-baby', 'baby-genu-varum-bowed-legs-persistent'],
  sources: [
    {
      org: 'OrthoInfo',
      citation:
        'American Academy of Orthopaedic Surgeons. Blount Disease (Tibia Vara). OrthoInfo, 2022.',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/blount-disease-tibia-vara/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Leg and Foot Problems. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Common-Leg-and-Foot-Problems.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Blount Disease. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/article/001584.htm',
    },
  ],
};

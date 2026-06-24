import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'military-family-baby-deployment-separation',
  title: 'Military Family Baby Care During Deployment and Separation',
  category: 'behavior',
  searchTerms: [
    'military deployment baby',
    'baby doesn\'t know deployed parent',
    'military family baby bonding',
    'deployment separation baby attachment',
    'military spouse parenting alone baby',
    'soldier missing baby milestones',
    'reintegration after deployment baby',
    'military family support baby',
    'deployed parent video call baby',
    'military child care assistance',
  ],
  quickAnswer:
    'Military deployment creates unique challenges for families with babies and young children. Research shows that maintaining connection during separation, through video calls, recorded readings, and consistent routines, supports the baby\'s attachment to the deployed parent. The at-home parent faces the stress of solo parenting combined with the worry of deployment. Reintegration can be challenging, as babies may not initially recognize the returning parent, and the returning parent may feel like an outsider. Military families have access to specific support resources including Military OneSource, Family Readiness Groups, and military family counseling services.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies under 6 months are developing their primary attachment bonds. If the deployment occurs during this period, the baby will form their primary attachment with the at-home caregiver, which is healthy and expected. Maintain the deployed parent\'s presence through photos displayed at the baby\'s level, recorded voice messages or lullabies, and video calls (even though the baby cannot interact, hearing the voice builds familiarity). The at-home parent should prioritize self-care and utilize military support services, as solo parenting a newborn during deployment is exceptionally demanding.',
    },
    {
      ageRange: '6-18 months',
      context:
        'Babies in this age range develop stranger anxiety and may react to the deployed parent on video calls with uncertainty or distress. This is normal and does not mean the bond is broken. Continue regular video calls and talk about the deployed parent throughout the day. When the deployed parent returns, expect a period of adjustment. The baby may cling to the at-home parent and seem wary of the returned parent. Allow the baby to approach on their own terms, and have the returning parent gradually increase caregiving responsibilities rather than jumping in all at once.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Toddlers may show behavioral changes during deployment: regression in sleep or toilet training, increased clinginess, tantrums, and anxiety. They can understand separation but not the concept of deployment. Use simple, honest language: "Daddy/Mommy is working far away and will come back." Maintain consistent routines as much as possible. During reintegration, toddlers may initially reject the returning parent or test boundaries. This phase typically resolves within a few weeks. If behavioral issues persist beyond 1-2 months after reunion, consider family counseling through military family services.',
    },
  ],
  whenNormal: [
    'Your baby is adjusting to the deployed parent\'s absence and is bonding well with the at-home caregiver.',
    'Your baby shows some uncertainty on video calls with the deployed parent but is generally developing normally.',
    'Reintegration involves a brief adjustment period where the baby needs time to warm up to the returned parent.',
  ],
  whenToMention: [
    'Your baby or toddler shows persistent behavioral changes (severe sleep disruption, refusal to eat, prolonged inconsolable crying) during deployment.',
    'The at-home parent is showing signs of depression, anxiety, or burnout from solo parenting during deployment.',
    'Reintegration is causing significant family stress that is not improving after several weeks.',
  ],
  whenToActNow: [
    'The at-home parent is having thoughts of harming themselves or the baby.',
    'The baby or toddler has experienced abuse or neglect during the deployment period.',
    'The returning parent is showing signs of PTSD, aggression, or substance use that affect the baby\'s safety - contact Military OneSource at 1-800-342-9647.',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'attachment-concerns',
    'infant-mental-health-first-1001-days',
    'partner-involvement-baby-care-tips',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Helping Children and Families Deal with Deployment. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Deployment-and-Children.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Coming Together Around Military Families: Resources for Infants and Toddlers.',
      url: 'https://www.zerotothree.org/resources/series/coming-together-around-military-families',
    },
    {
      org: 'DOD',
      citation:
        'Military OneSource. Parenting During Deployment.',
      url: 'https://www.militaryonesource.mil/parenting/children-youth/parenting-during-deployment/',
    },
  ],
};

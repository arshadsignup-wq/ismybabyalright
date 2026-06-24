import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rural-area-pediatric-specialist-access',
  title: 'Accessing Pediatric Specialists in Rural Areas',
  category: 'medical',
  searchTerms: [
    'pediatric specialist rural area',
    'no pediatrician near me',
    'rural baby healthcare access',
    'telehealth pediatric specialist',
    'driving far for pediatrician',
    'rural child healthcare',
    'specialist access rural families',
    'pediatric telehealth rural',
    'no children\'s hospital nearby',
    'rural pediatric care options',
  ],
  quickAnswer:
    'Families in rural areas often face significant challenges accessing pediatric specialists, with some traveling hours for appointments. Telehealth has dramatically expanded access since 2020, and many pediatric specialties now offer virtual consultations. Your primary care provider can coordinate specialist referrals and manage much of your child\'s care locally. Programs like the ECHO (Extension for Community Healthcare Outcomes) model bring specialist expertise to rural providers, and some children\'s hospitals offer outreach clinics in rural communities.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'The first year involves frequent well-child visits and potentially multiple specialist needs (newborn hearing screening follow-up, developmental concerns, etc.). If your nearest pediatrician is far away, a well-trained family medicine provider can deliver excellent well-baby care. For specialist needs, ask about telehealth options before making a long trip. Many developmental evaluations, feeding consultations, and dermatology assessments can be done effectively via video. For urgent concerns, establish a plan with your provider about when to go to the nearest emergency department versus the nearest children\'s hospital.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Developmental screening at 18 and 24-30 months is critical and can be coordinated through your local provider. If your child needs early intervention services (speech therapy, occupational therapy, physical therapy), these are often available through your state\'s early intervention program, which is required to serve all eligible children regardless of location. Some therapists travel to rural homes, and teletherapy options have expanded. Contact your state\'s early intervention program (Part C for under 3, Part B for 3-5) to learn what is available in your area.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Preschool-aged children may need evaluations for developmental, behavioral, or learning concerns before school entry. Many of these evaluations can be done through your local school district, which is required to evaluate children suspected of having disabilities even before kindergarten. Telemedicine behavioral health and developmental pediatrics services have become widely available. If your child needs ongoing specialist care, ask about care coordination services that can help manage appointments, travel, and communication between providers.',
    },
  ],
  whenNormal: [
    'Your child receives well-child care from a family medicine provider who follows AAP guidelines',
    'You use telehealth for non-urgent specialist consultations',
    'Your child receives early intervention services through your state program',
  ],
  whenToMention: [
    'You are unable to access a specialist your child needs and want help finding options',
    'You need help coordinating care between your local provider and distant specialists',
    'You want to know which appointments can be handled via telehealth versus in person',
    'Financial barriers (travel costs, time off work) are preventing you from accessing recommended care',
  ],
  whenToActNow: [
    'Your child has a medical emergency - call 911 regardless of your location',
    'Your child needs urgent specialist evaluation that cannot wait for a scheduled appointment',
    'You are concerned about a serious condition and have no access to timely medical evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'advocating-for-your-child',
    'single-parent-childcare-affordability',
    'premature-baby-feeding-difficulties-home',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Telehealth and Children. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/family-life/health-management/Pages/Palliative-Care-and-Telehealth.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Rural Health Disparities. National Institute on Minority Health and Health Disparities, 2023.',
      url: 'https://www.nimhd.nih.gov/resources/understanding-health-disparities/rural-health.html',
    },
    {
      org: 'HRSA',
      citation:
        'Health Resources and Services Administration. Telehealth for Rural Communities. HRSA, 2024.',
      url: 'https://www.hrsa.gov/rural-health/telehealth',
    },
  ],
};

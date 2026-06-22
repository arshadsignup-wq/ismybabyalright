import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'preparing-for-baby-doctor-visit',
  title: 'How to Prepare for Your Baby\'s Doctor Visit',
  category: 'medical',
  searchTerms: [
    'how to prepare for baby doctor visit',
    'what to bring to pediatrician appointment',
    'questions to ask at well child visit',
    'preparing for baby checkup',
    'what to expect at baby doctor appointment',
    'how to get the most out of pediatrician visit',
    'baby doctor visit checklist',
    'what to ask pediatrician at checkup',
    'preparing for sick visit baby',
    'tracking baby concerns for doctor',
  ],
  quickAnswer:
    'Preparing for your baby\'s doctor visit helps you get the most out of your limited appointment time. The AAP recommends writing down your questions and concerns in advance, bringing your baby\'s insurance card and any relevant medical records, and noting recent feeding, sleeping, and developmental milestones. For well-child visits, expect growth measurements, a physical exam, developmental screening, and vaccinations. For sick visits, document symptoms including onset, duration, fever readings, feeding changes, and diaper output. Having a written list ensures you don\'t forget important questions when you\'re in the room. The AAP notes that parents who prepare written questions tend to report higher satisfaction with pediatric visits and better recall of medical advice.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Early visits are frequent and focused on feeding adequacy, weight gain, and newborn adjustments. Bring a record of feeding times and duration (or ounces), wet and dirty diaper counts, and any concerns about jaundice, umbilical cord, or circumcision healing. Write down questions about safe sleep, feeding challenges, and your own postpartum recovery. Your pediatrician will also ask about maternal postpartum depression screening, so be honest in your responses.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Prepare to discuss emerging milestones: rolling, reaching for objects, social smiling, and babbling. Note any concerns about head shape, sleep patterns, or feeding difficulties. This is a good time to ask about introducing solids (around 6 months), sleep training approaches, and any upcoming vaccinations. If your baby attends daycare, mention any illness exposures.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Milestone tracking becomes more detailed. Note whether your baby sits independently, crawls, pulls to stand, responds to name, and uses gestures. Bring a list of foods your baby has tried and any reactions. Ask about dental care, transitioning from bottle to cup, and age-appropriate safety precautions (childproofing). If you have developmental concerns, write them down specifically, because vague concerns are harder for your doctor to address than specific observations.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler visits cover behavioral development, language milestones, and nutrition. Track your child\'s words (most toddlers have 1-3 words by 12 months and 50+ by 24 months), eating habits, and any behavioral concerns. Prepare questions about discipline strategies, screen time limits, toilet training readiness, and social development. The 18-month and 24-month visits include autism screening, and your honest observations about social engagement and communication are essential for accurate screening.',
    },
  ],
  whenNormal: [
    'Feeling nervous or forgetful during appointments (this is why written lists help)',
    'Your baby crying during the examination, especially during ear checks and vaccinations',
    'Appointments feeling rushed, so prepare your most important questions first',
    'Not remembering everything the doctor said, so ask for written instructions or a visit summary',
  ],
  whenToMention: [
    'Concerns that keep nagging you between visits, even if they seem minor',
    'Changes in your baby\'s behavior, eating, or sleeping since the last visit',
    'Anything another caregiver (daycare, grandparent) has noticed about your baby',
    'Your own mental health concerns that may affect your ability to care for your baby',
  ],
  whenToActNow: [
    'You have an urgent concern about your baby\'s health: do not wait for a scheduled visit; call the office or go to the emergency room',
    'Your baby shows signs of a medical emergency: difficulty breathing, unresponsiveness, seizure, or high fever in a baby under 3 months',
    'You feel your concerns are consistently being dismissed and your baby\'s condition is worsening',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'well-child-visit-schedule-guide',
    'baby-medical-records-keeping',
    'advocating-for-your-child',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Well-Child Care Visits. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/health-management/Pages/Well-Child-Visits.aspx',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Well-Child Care: A Check-Up for Success.',
      url: 'https://www.healthychildren.org/English/family-life/health-management/Pages/Well-Child-Care-A-Check-Up-for-Success.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Well-baby exam: What to expect during routine checkups.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/healthy-baby/art-20044767',
    },
  ],
};

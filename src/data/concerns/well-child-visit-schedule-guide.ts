import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'well-child-visit-schedule-guide',
  title: 'Well-Child Visit Schedule: What Happens at Each Checkup',
  category: 'medical',
  searchTerms: [
    'well child visit schedule',
    'baby checkup schedule',
    'pediatrician visit schedule first year',
    'well baby visit what to expect',
    'AAP well child visit schedule',
    'baby doctor appointment schedule',
    'how often does baby see doctor first year',
    'what happens at baby checkup',
    'well child exam by age',
    'Bright Futures visit schedule',
  ],
  quickAnswer:
    'The AAP Bright Futures guidelines recommend 12 well-child visits in the first 3 years of life: at birth, 3-5 days, 1 month, 2 months, 4 months, 6 months, 9 months, 12 months, 15 months, 18 months, 24 months, and 30 months. Each visit includes growth measurements (weight, length, head circumference), developmental screening, physical examination, and age-appropriate anticipatory guidance. Specific screenings are tied to certain ages — for example, autism screening at 18 and 24 months, lead screening at 12 months, and vision screening at various ages. Vaccinations follow the CDC immunization schedule and are given at most visits in the first 2 years. These visits are critical for early detection of developmental delays, growth problems, and health conditions.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Three visits occur in the first 2 months: a newborn visit (in hospital), a 3-5 day follow-up, and the 1-month visit. The newborn screening blood test, hearing screen, and critical congenital heart defect screening occur at birth. The early follow-up visit focuses on feeding adequacy, jaundice assessment, weight recovery (babies should regain birth weight by 10-14 days), and umbilical cord care. The 2-month visit includes the first round of vaccinations (DTaP, IPV, Hib, PCV13, RV, HepB) and a maternal postpartum depression screening.',
    },
    {
      ageRange: '2-6 months',
      context:
        'Visits at 2, 4, and 6 months each include vaccinations and developmental milestone checks. Your pediatrician will track growth curves, assess motor development (head control, rolling), social engagement (smiling, cooing), and feeding progression. The 4-month visit often includes discussion of sleep training readiness and introducing solid foods timeline. The 6-month visit typically includes first hemoglobin/hematocrit screening and discussion of starting complementary foods.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Visits at 9 and 12 months focus on mobility milestones (sitting, crawling, pulling to stand), feeding advancement, and communication development. The 9-month visit includes a formal developmental screening questionnaire (such as the ASQ-3). The 12-month visit includes blood lead level screening (especially for at-risk children), hemoglobin check, and the MMR and varicella vaccines. Your pediatrician will assess fine motor skills, language development, and social behaviors.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Visits at 15, 18, and 24 months track walking, language explosion, and behavioral development. The 18-month and 24-month visits include standardized autism screening (M-CHAT-R/F). The 18-month visit also includes the DTaP and Hep A boosters. Your pediatrician will discuss toddler nutrition, dental health (first dental visit by age 1), sleep patterns, and behavior management. These visits are key opportunities to discuss any concerns about speech delay or social development.',
    },
  ],
  whenNormal: [
    'Your baby is meeting age-appropriate milestones at each visit',
    'Growth tracking along a consistent percentile curve, even if it is not the 50th percentile',
    'Minor variations in developmental timing — some babies walk at 9 months, others at 15 months',
    'Your pediatrician noting areas to "watch" without immediate concern',
  ],
  whenToMention: [
    'You have noticed any regression in skills your baby previously demonstrated',
    'Concerns about feeding, sleep, or behavior that are affecting daily life',
    'Questions about whether your baby\'s development is on track',
    'Family history of developmental delays, genetic conditions, or autism',
  ],
  whenToActNow: [
    'Your baby has missed multiple well-child visits and is behind on vaccinations — schedule a catch-up appointment',
    'You notice sudden loss of skills (words, motor abilities) at any age — this warrants urgent evaluation',
    'Newborn has not had the 3-5 day follow-up visit and you notice yellowing skin, poor feeding, or excessive sleepiness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'vaccine-schedule-explained',
    'when-to-call-pediatrician',
    'baby-developmental-pediatrician-referral',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bright Futures: Guidelines for Health Supervision of Infants, Children, and Adolescents, 4th Edition.',
      url: 'https://www.aap.org/en/practice-management/bright-futures/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Recommended Child and Adolescent Immunization Schedule.',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Well-Child Care: A Check-Up for Success.',
      url: 'https://www.healthychildren.org/English/family-life/health-management/Pages/Well-Child-Care-A-Check-Up-for-Success.aspx',
    },
  ],
};

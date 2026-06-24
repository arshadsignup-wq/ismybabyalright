import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-vaccination-schedule-delayed-catching-up',
  title: 'Catching Up on Delayed Vaccinations',
  category: 'medical',
  searchTerms: [
    'baby catch up vaccination schedule',
    'delayed vaccines baby',
    'behind on vaccines baby',
    'missed vaccines baby',
    'late vaccination baby schedule',
    'catching up on immunizations',
    'baby skipped vaccines',
    'alternative vaccine schedule',
    'baby behind on shots',
    'vaccine catch up schedule CDC',
  ],
  quickAnswer:
    'If your baby has fallen behind on vaccinations for any reason, catch-up schedules are available and your pediatrician can create a plan to get them up to date. It is never too late to catch up. The CDC provides detailed catch-up immunization schedules. Delayed vaccines do not need to be restarted - you pick up where you left off. Getting caught up quickly is important because your child is unprotected against preventable diseases during the gap.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'The first 6 months include critical vaccines against diseases like whooping cough, polio, rotavirus, pneumococcal disease, and Hib meningitis. If your baby has missed scheduled vaccines, contact your pediatrician to create a catch-up plan. Multiple vaccines can be safely given at the same visit to help catch up faster. Rotavirus vaccine has a strict upper age limit (the first dose must be given before 15 weeks of age), so timely administration is especially important for this vaccine. Other vaccines can be given at any time.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If you are behind on vaccines at this age, your pediatrician can use the CDC catch-up schedule to determine the minimum intervals between doses. Your baby can receive multiple vaccines at one visit to catch up more quickly. The flu vaccine is recommended starting at 6 months and requires two doses the first year. Some vaccines require multiple doses spaced at minimum intervals, but there is no maximum interval - you do not need to restart a series. Keep a copy of your baby\'s immunization record and bring it to every visit.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Important vaccines are given at the 12-month and 15-18 month visits, including MMR, varicella, hepatitis A, and boosters for previous series. If you are catching up, your pediatrician may combine visits to administer multiple vaccines. This is safe and well-studied. If your child is entering daycare or preschool, vaccine requirements vary by state but typically include most recommended childhood vaccines. Talk openly with your pediatrician about any concerns that led to the delay - they are there to help, not judge.',
    },
  ],
  whenNormal: [
    'Your baby is following the standard CDC-recommended immunization schedule on time.',
    'Your baby missed one appointment and is slightly behind but getting caught up at the next visit.',
    'Your baby has mild side effects (fussiness, low fever) after receiving catch-up vaccines.',
  ],
  whenToMention: [
    'Your baby is behind on multiple vaccines and you need help creating a catch-up schedule.',
    'You intentionally delayed vaccines and now want to get back on track.',
    'You are new to a pediatric practice and need to transfer immunization records.',
  ],
  whenToActNow: [
    'Your unvaccinated or under-vaccinated baby has been exposed to a vaccine-preventable disease like measles or whooping cough.',
    'Your baby has a severe allergic reaction after a catch-up vaccine: difficulty breathing, swelling, widespread hives.',
    'There is a disease outbreak in your community and your baby is behind on relevant vaccines.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-vaccination-hesitancy-social-media', 'baby-rsv-vaccine-antibody-prevention', 'baby-vitamin-drops-schedule'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Catch-Up Immunization Schedule for Persons Aged 4 Months Through 18 Years.',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/catchup.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Immunization Schedule. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Recommended-Immunization-Schedules.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization - Immunization Coverage.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/immunization-coverage',
    },
  ],
};

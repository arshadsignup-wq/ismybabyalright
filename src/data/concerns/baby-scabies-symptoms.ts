import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-scabies-symptoms',
  title: 'Scabies Symptoms in Babies',
  category: 'skin',
  searchTerms: [
    'baby scabies symptoms',
    'scabies in infant',
    'baby scabies rash',
    'scabies treatment baby',
    'baby itchy rash scabies',
    'scabies on baby face',
    'scabies baby hands feet',
    'mites baby skin',
    'scabies contagious baby',
    'permethrin cream baby safe',
  ],
  quickAnswer:
    'Scabies is a skin condition caused by tiny mites (Sarcoptes scabiei) that burrow into the skin and cause intense itching. In babies, scabies often looks different than in adults - it can appear on the face, scalp, palms, and soles, which are unusual locations in older children and adults. The rash consists of small red bumps, burrow tracks, and sometimes blisters. Scabies requires prescription treatment (typically permethrin cream) and all household contacts should be treated simultaneously.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Scabies in young infants can be difficult to diagnose because it looks different than in older children. In babies, the rash commonly appears on the face, scalp, neck, palms, and soles - areas rarely affected in adults. The rash may look like small red bumps, tiny blisters, or widespread eczema-like patches. Babies may be irritable and have trouble sleeping due to intense itching, which is typically worse at night. See your pediatrician for diagnosis; they may examine the skin with a magnifier or do a skin scraping.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies this age with scabies may scratch at affected areas, creating raw or crusted patches that can become secondarily infected with bacteria. The rash may spread widely over the body. Treatment with 5% permethrin cream is approved for use in infants 2 months and older. The cream must be applied from the neck down (and on the scalp and face in babies) and left on for 8-14 hours before washing off. All family members and close contacts should be treated at the same time, even if they have no symptoms, as scabies has a 4-6 week incubation period.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers with scabies often present with itching in the finger webs, wrists, ankles, and diaper area. Daycare attendance increases exposure risk. Itching may persist for 2-4 weeks after successful treatment due to an ongoing allergic reaction to dead mites; this does not mean treatment failed. Retreatment is typically recommended 1-2 weeks after the first application. Wash all bedding, clothing, and towels in hot water and dry on high heat. Items that cannot be washed can be sealed in a plastic bag for 72 hours.',
    },
  ],
  whenNormal: [
    'Itching gradually decreases over 2-4 weeks after treatment - some residual itching is expected.',
    'A few new bumps appear in the first week after treatment as existing eggs hatch before dying.',
    'Other family members who were treated preventively never develop symptoms.',
  ],
  whenToMention: [
    'You suspect scabies but are not sure - accurate diagnosis is important before treatment.',
    'The rash and itching are not improving 2-3 weeks after completing two rounds of treatment.',
    'Your baby has widespread or crusted (Norwegian) scabies, which may require oral treatment.',
  ],
  whenToActNow: [
    'The scabies rash area becomes hot, swollen, red, and oozing, suggesting a secondary bacterial infection.',
    'Your baby develops fever along with infected-looking skin lesions.',
    'Your baby has an adverse reaction to treatment such as a severe rash or swelling.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-ring-worm-daycare', 'hives', 'baby-rash-from-new-detergent'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Scabies. Red Book: Report of the Committee on Infectious Diseases.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Scabies.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Scabies: Diagnosis and Treatment.',
      url: 'https://www.cdc.gov/parasites/scabies/treatment.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Scabies. MedlinePlus.',
      url: 'https://medlineplus.gov/scabies.html',
    },
  ],
};

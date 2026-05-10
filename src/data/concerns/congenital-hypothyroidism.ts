import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'congenital-hypothyroidism',
  title: 'Congenital Hypothyroidism in Babies',
  category: 'medical',
  searchTerms: [
    'baby thyroid problem',
    'congenital hypothyroidism baby',
    'newborn screening thyroid',
    'baby sluggish and sleepy',
    'baby poor growth thyroid',
    'hypothyroid baby signs',
    'baby large fontanelle sluggish',
    'baby prolonged jaundice constipation',
    'newborn thyroid test abnormal',
  ],
  quickAnswer:
    'Congenital hypothyroidism occurs when a baby is born with an underactive or absent thyroid gland, affecting about 1 in 2,000 to 4,000 newborns. Thanks to universal newborn screening, most cases are detected within days of birth before symptoms develop. When treated promptly with daily thyroid hormone medication, children develop normally with no intellectual impairment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Most babies with congenital hypothyroidism are detected through the newborn screening blood test (heel prick) done at 24-48 hours of life. Without screening, early signs can be subtle and include prolonged jaundice, excessive sleepiness, poor feeding, constipation, a hoarse cry, a large soft spot (fontanelle), and a puffy face. Treatment with levothyroxine should begin as soon as possible, ideally within the first 2 weeks of life.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If not detected and treated early, babies may show more obvious signs including poor growth, decreased activity, thick and dry skin, a large protruding tongue, and cool extremities. Untreated hypothyroidism at this stage can begin to affect brain development. Babies on treatment should be monitored with regular blood tests to ensure proper dosing.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies on appropriate thyroid replacement therapy should be growing and developing normally. Thyroid levels are typically checked every 1-3 months in the first year to adjust the dose as the baby grows. If your baby was diagnosed and treated early, developmental milestones should proceed on track.',
    },
    {
      ageRange: '12 months+',
      context:
        'Children with congenital hypothyroidism need lifelong thyroid hormone replacement. With consistent treatment and monitoring, they are expected to have normal growth, intelligence, and development. Your pediatric endocrinologist will continue adjusting the medication dose as your child grows.',
    },
  ],
  whenNormal: [
    'Your baby\'s newborn screening came back normal for thyroid function',
    'Your baby is alert, feeding well, and growing on their curve',
    'Mild jaundice resolved within the first 2 weeks',
    'Your baby has regular bowel movements and normal skin color',
  ],
  whenToMention: [
    'Your baby seems unusually sleepy, difficult to rouse for feedings, or has a weak cry',
    'Your baby has prolonged jaundice lasting beyond 3 weeks combined with constipation',
    'Your baby has a noticeably large soft spot, puffy face, or thick tongue',
  ],
  whenToActNow: [
    'You received a call that your baby\'s newborn screening showed an abnormal thyroid result — follow up immediately as directed',
    'Your baby is increasingly lethargic, not feeding, and has cool mottled skin — this could indicate severe hypothyroidism or another serious condition',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Update of Newborn Screening and Therapy for Congenital Hypothyroidism. Pediatrics, 2006.',
      url: 'https://publications.aap.org/pediatrics/article/117/6/2290/68559/Update-of-Newborn-Screening-and-Therapy-for',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Congenital Hypothyroidism. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/congenital-hypothyroidism/',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'preterm-birth-long-term-health-effects',
  title: 'Preterm Birth: Long-Term Health Effects and Follow-Up',
  category: 'medical',
  searchTerms: [
    'preterm birth long term effects',
    'premature baby long term health',
    'preemie developmental outcomes',
    'late preterm baby health risks',
    'premature birth complications later',
    'preemie catch up development',
    'premature baby learning difficulties',
    'preterm birth lung problems later',
    'NICU baby follow up care',
    'premature baby outlook',
  ],
  quickAnswer:
    'Most premature babies grow up healthy, but prematurity can have lasting effects depending on how early the baby was born and what complications occurred. The earlier the birth, the greater the risk for long-term health challenges including respiratory issues, developmental delays, learning difficulties, and vision or hearing problems. Regular follow-up with a high-risk infant clinic and early intervention services when needed can significantly improve outcomes. Many preemies catch up to their peers by school age.',
  byAge: [
    {
      ageRange: '0-12 months (adjusted age)',
      context:
        'In the first year, premature babies are monitored closely for growth, feeding, and developmental milestones using their adjusted age (corrected for prematurity). Chronic lung disease (bronchopulmonary dysplasia) may require ongoing oxygen or respiratory support at home. Feeding difficulties, reflux, and slower weight gain are common. Developmental screening should occur regularly, and early intervention services (physical therapy, occupational therapy, speech therapy) should be started promptly if delays are identified. Many NICU follow-up programs see babies at 4, 8, and 12 months adjusted age.',
    },
    {
      ageRange: '1-3 years (adjusted age)',
      context:
        'Most premature babies make significant catch-up growth and developmental progress during this period. However, subtle motor, language, or cognitive delays may become more apparent as expectations increase. Fine motor skills, attention, and language development are areas where preemies may need extra support. Behavioral challenges, including sensory sensitivities and difficulty with transitions, are more common in children born prematurely. Annual developmental assessments help identify needs early.',
    },
    {
      ageRange: '3-5 years',
      context:
        'As children born prematurely enter preschool, learning differences and behavioral challenges may become more noticeable in a structured setting. Executive function skills (attention, self-regulation, working memory) may lag behind peers. A comprehensive developmental evaluation before school entry can identify areas where support is needed. Many children born prematurely qualify for early childhood special education services or an Individualized Education Program (IEP). Social-emotional development may also need attention.',
    },
    {
      ageRange: '5+ years',
      context:
        'School-age children born prematurely have higher rates of learning disabilities, ADHD, and social difficulties compared to full-term peers, though the majority do well academically with appropriate support. Children born before 28 weeks are at highest risk for these challenges. Regular check-ins with teachers and school psychologists help ensure needs are being met. Physical health effects may include higher rates of asthma and, in some studies, increased cardiovascular risk factors in adolescence and adulthood.',
    },
  ],
  whenNormal: [
    'Your preemie meets developmental milestones on their adjusted age timeline',
    'Growth and weight gain are following a consistent curve, even if below average',
    'Your child needs some early intervention services but is making progress',
  ],
  whenToMention: [
    'Your child is not meeting developmental milestones even using adjusted age',
    'You notice your child is significantly behind peers in language, motor, or social skills',
    'Your child has persistent respiratory issues such as frequent wheezing or recurrent infections',
    'You have concerns about learning, behavior, or attention as your child enters preschool',
  ],
  whenToActNow: [
    'Your child has severe breathing difficulty, high fever, or signs of serious infection',
    'Your child experiences a seizure or sudden loss of developmental skills',
    'Your child has signs of vision or hearing loss (not responding to sounds, not tracking objects)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'premature-baby-feeding-difficulties-home',
    'premature-baby-immune-system-fragile',
    'premature-baby-adjusted-age-milestones',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Follow-Up Care of High-Risk Infants. Pediatrics, 2018.',
      url: 'https://publications.aap.org/pediatrics/article/142/5/e20182076/37540/Follow-Up-Care-of-High-Risk-Infants',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. Preterm Birth. NICHD, 2024.',
      url: 'https://www.nichd.nih.gov/health/topics/preterm',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Long-Term Health Effects of Premature Birth. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/baby/long-term-health-effects-of-premature-birth.aspx',
    },
  ],
};

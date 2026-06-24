import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'developmental-delay-early-intervention-importance',
  title: 'Developmental Delay and Why Early Intervention Matters',
  category: 'physical',
  searchTerms: [
    'developmental delay baby',
    'early intervention baby',
    'baby behind on milestones',
    'developmental delay treatment',
    'early intervention services infant',
    'child not meeting milestones',
    'what is early intervention',
    'developmental delay signs baby',
    'how to get early intervention',
    'Part C early intervention',
    'baby development concerns',
  ],
  quickAnswer:
    'Early intervention refers to services and support for infants and toddlers (birth to age 3) with developmental delays or disabilities. Research consistently shows that the earlier a delay is identified and addressed, the better the outcomes. The brain\'s neuroplasticity is greatest in the first three years of life, making this a critical window for therapeutic intervention. Early intervention services are available in every US state through the Individuals with Disabilities Education Act (IDEA) Part C program at no or low cost to families.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Even very young infants can be referred for early intervention if there are concerns about development. Signs that may warrant evaluation include: not making eye contact, not tracking objects by 2-3 months, not beginning to hold head up, not responding to sounds, or having very stiff or very floppy muscles. Babies with known risk factors (prematurity, genetic conditions, birth complications) may qualify for monitoring programs. Early referral does not mean there is definitely a problem -- it means getting expert evaluation to either confirm typical development or start support early.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, differences in development become more apparent. Concerns may include not sitting independently by 9 months, not babbling by 9 months, lack of social engagement (not smiling, not responding to name), or not reaching for objects. Your pediatrician should screen development at the 9-month visit using a validated tool. If concerns are identified, a referral to your state\'s early intervention program triggers an evaluation to determine eligibility. Services may include physical therapy, occupational therapy, speech therapy, or developmental support.',
    },
    {
      ageRange: '12-24 months',
      context:
        'The 12 and 18-month well-child visits include developmental screening. Red flags at this age include not walking by 18 months, loss of previously acquired skills (regression), fewer than 6 words by 18 months, not pointing to show interest by 14-16 months, or not playing simple pretend games by 18 months. Early intervention services are family-centered, often delivered in the home, and focus on embedding therapeutic strategies into daily routines. Parents are active partners in therapy.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Between ages 2-3, early intervention continues to be available and effective. Significant language delays, motor difficulties, social-emotional concerns, or behavioral challenges should all be evaluated. At age 3, children transition from Part C (early intervention) to Part B services (school-based) through their local school district. Starting this transition planning early ensures continuity of support. Research shows that children who receive early intervention are less likely to need special education services later and have better long-term outcomes.',
    },
  ],
  whenNormal: [
    'Your baby is meeting developmental milestones within the expected range (there is a wide range of normal).',
    'Your baby has been evaluated through early intervention and was found to be developing typically.',
    'Your child is receiving early intervention services and making progress toward their goals.',
  ],
  whenToMention: [
    'Your baby seems behind on one or more milestones compared to the CDC milestones checklist.',
    'You have a gut feeling that something is different about your child\'s development, even if others say "they\'ll catch up."',
    'Your child was premature or has a medical condition associated with developmental delays.',
  ],
  whenToActNow: [
    'Your child is losing skills they previously had (developmental regression), which can indicate a serious neurological condition.',
    'Your baby is extremely floppy, stiff, or has asymmetric movement that could indicate a motor disorder.',
    'You are concerned about autism spectrum disorder: limited eye contact, no pointing or gesturing, no words by 16 months, or loss of social engagement.',
  ],
  relatedMilestones: [
    'gross-motor',
    'fine-motor',
    'language-development',
    'social-emotional',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['not-sitting-up', 'not-babbling-at-9-months', 'early-autism-screening-ai-eye-tracking', 'floppy-baby-syndrome'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Learn the Signs. Act Early. CDC.',
      url: 'https://www.cdc.gov/ncbddd/actearly/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Surveillance and Screening. Pediatrics, 2020.',
      url: 'https://publications.aap.org/pediatrics/article/145/1/e20193449/36971/Promoting-Optimal-Development-Identifying-Infants',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. Early Intervention for Autism. NICHD.',
      url: 'https://www.nichd.nih.gov/health/topics/autism/conditioninfo/treatments/early-intervention',
    },
  ],
};

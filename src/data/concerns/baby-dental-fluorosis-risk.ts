import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-dental-fluorosis-risk',
  title: 'Can Too Much Fluoride Harm My Baby\'s Teeth?',
  category: 'medical',
  searchTerms: [
    'baby dental fluorosis',
    'too much fluoride baby',
    'fluoride toothpaste danger baby',
    'baby teeth white spots fluoride',
    'fluorosis risk baby',
    'fluoride water baby',
    'fluoride supplement baby',
    'how much fluoride safe baby',
    'fluoride toxicity baby',
    'baby swallowing toothpaste fluoride',
  ],
  quickAnswer:
    'Dental fluorosis occurs when developing teeth are exposed to too much fluoride during early childhood, causing white spots or streaks on the permanent teeth. The risk period is primarily during the first 8 years when permanent teeth are forming. Using a rice-grain-sized smear of fluoride toothpaste for babies and a pea-sized amount for children 3 and older, along with proper supervision, minimizes the risk while protecting against cavities.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Before teeth erupt, fluoride exposure comes from water (if fluoridated) and formula mixed with fluoridated water. Breast milk is very low in fluoride. The risk of fluorosis from water alone is very low. If your pediatrician prescribed fluoride drops, use the exact prescribed dose. If you are concerned about fluoride in your water supply, your pediatrician can advise.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As teeth begin to emerge, the AAP and ADA recommend starting a rice-grain-sized smear of fluoride toothpaste as soon as the first tooth appears. This tiny amount provides cavity protection while minimizing fluoride ingestion. Babies will swallow most of the toothpaste at this age, which is why the amount should be very small.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continue using a rice-grain smear of fluoride toothpaste on erupting teeth. Brush twice daily. Your pediatrician may apply fluoride varnish at well visits, which is safe and effective for cavity prevention. If your water is not fluoridated, your pediatrician may recommend fluoride supplementation starting at 6 months.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Continue the rice-grain amount of toothpaste. Teach your toddler to spit out toothpaste as early as they can (most cannot do this effectively until 2-3 years). Keep all fluoride products (toothpaste, mouthwash) out of reach. Most mild fluorosis causes only subtle white marks that many people never notice.',
    },
    {
      ageRange: '2-3 years',
      context:
        'At age 3, increase to a pea-sized amount of fluoride toothpaste. Supervise brushing and encourage spitting. The primary risk for fluorosis is swallowing excessive amounts of fluoride toothpaste or taking too much fluoride supplement. Used properly, the benefits of fluoride for cavity prevention far outweigh the small risk of mild cosmetic fluorosis.',
    },
  ],
  whenNormal: [
    'You are using the recommended amount of fluoride toothpaste (rice-grain for under 3, pea-sized for 3 and older)',
    'Your child drinks fluoridated water as their primary beverage',
    'Your pediatrician has prescribed an appropriate fluoride supplement based on your water supply',
  ],
  whenToMention: [
    'You are unsure whether your water supply is fluoridated and how it affects your baby\'s fluoride needs',
    'You notice white spots on your child\'s teeth and are concerned about fluorosis',
    'You are confused about conflicting information about fluoride safety for babies',
  ],
  whenToActNow: [
    'Your child has swallowed a large amount of fluoride toothpaste or fluoride supplement - call Poison Control (1-800-222-1222)',
    'Your child develops vomiting, diarrhea, or other symptoms after ingesting fluoride products',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'fluoride-toothpaste-baby-safety',
    'early-childhood-cavities',
    'baby-first-dental-visit-timing',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fluoride Use in Caries Prevention in the Primary Care Setting. Pediatrics, 2020.',
      url: 'https://publications.aap.org/pediatrics/article/146/6/e2020034637/33536',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Dental Fluorosis.',
      url: 'https://www.cdc.gov/fluoridation/about/dental-fluorosis.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Dental and Craniofacial Research. Fluoride.',
      url: 'https://www.nidcr.nih.gov/health-info/fluoride',
    },
  ],
};

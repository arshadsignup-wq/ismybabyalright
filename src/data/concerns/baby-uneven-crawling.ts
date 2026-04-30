import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-uneven-crawling',
  title: 'Baby Crawling Unevenly or Dragging One Side',
  category: 'physical',
  searchTerms: [
    'baby crawling unevenly',
    'baby dragging one leg while crawling',
    'baby asymmetric crawl',
    'baby crawling lopsided',
    'baby army crawling one side',
    'baby not using one leg to crawl',
    'baby favoring one side crawling',
    'baby commando crawling one arm',
    'asymmetric crawling baby',
    'baby crawling dragging foot',
  ],
  quickAnswer:
    'While many babies have slightly imperfect crawling patterns, consistently asymmetric crawling - where one side clearly does more work than the other - deserves evaluation. It could indicate a muscle strength difference, hip issue, or neurological concern. Some asymmetry is normal as babies first learn to crawl, but a persistent pattern of dragging one leg or not using one arm should be mentioned to your pediatrician.',
  byAge: [
    {
      ageRange: '6-9 months',
      context:
        'When babies first learn to crawl, their form is often imperfect. Army crawling, belly crawling, and asymmetric patterns are common in the early learning phase. A baby may favor their dominant side initially. If your baby has just started moving, give them a few weeks to refine their crawling before worrying about asymmetry. However, if one limb is consistently not participating, mention it at your next visit.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By this age, crawling should be more coordinated with both arms and legs participating. If your baby is still consistently dragging one leg, not using one arm, or has a very lopsided crawl, your pediatrician will want to evaluate for hip dysplasia, muscle tone differences, or neurological concerns. An evaluation typically includes checking range of motion, muscle tone, and reflexes on both sides.',
    },
    {
      ageRange: '12-18 months',
      context:
        'If your child has transitioned to walking, the crawling pattern matters less. However, if they are still primarily crawling at this age and doing so asymmetrically, or if you notice asymmetry in their walking as well (limping, dragging a foot), a more thorough evaluation is warranted. This could involve a referral to a pediatric neurologist or orthopedist.',
    },
  ],
  whenNormal: [
    'Slightly imperfect crawling form when first learning to crawl',
    'Occasional variation in crawling pattern depending on the surface or direction',
    'Briefly favoring one side when tired',
    'Using a scoot or shuffle style that appears asymmetric but uses both legs for propulsion',
  ],
  whenToMention: [
    'Your baby consistently does not use one arm or leg during crawling',
    'Asymmetric crawling persists for more than 2-3 weeks after learning to crawl',
    'One side of the body appears weaker or less coordinated than the other',
    'Asymmetric crawling is accompanied by other asymmetries like a head tilt or hand preference before 18 months',
  ],
  whenToActNow: [
    'Your baby suddenly stops using one arm or leg after previously using both (could indicate injury or acute neurological event)',
    'Asymmetric crawling is accompanied by new seizures, unusual eye movements, or loss of other skills',
    'Your baby appears to be in pain when trying to use the affected limb',
  ],
  relatedMilestones: ['9-months', '12-months'],
  showSelfReferral: true,
  relatedConcernSlugs: ['hip-dysplasia', 'asymmetric-movement', 'scooting-instead-of-crawling', 'baby-favoring-one-leg'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Movement Milestones. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Important Milestones: Crawling.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Developmental Milestones and Motor Assessment.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK538510/',
    },
  ],
};

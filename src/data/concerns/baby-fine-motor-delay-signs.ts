import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-fine-motor-delay-signs',
  title: 'Signs of Fine Motor Delay in Babies and Toddlers',
  category: 'physical',
  searchTerms: [
    'baby fine motor delay',
    'baby not picking up objects',
    'baby not using pincer grasp',
    'toddler clumsy with hands',
    'fine motor skills behind baby',
    'baby not grasping toys',
    'delayed hand skills baby',
    'baby not feeding self',
    'fine motor milestones baby',
    'baby hand coordination delay',
    'baby not reaching for objects',
  ],
  quickAnswer:
    'Fine motor skills - the small, precise movements of the hands and fingers - develop gradually throughout the first few years. Key milestones include reaching for objects (3-5 months), raking grasp (6-7 months), pincer grasp (8-10 months), and using a spoon or crayon (12-18 months). Mild variations in timing are normal, but significant delays across multiple fine motor skills may warrant an occupational therapy evaluation. Early intervention can make a significant difference.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'In the first months, your baby transitions from reflexive hand fisting to voluntary reaching and grasping. By 3-4 months, most babies begin reaching for objects. By 5-6 months, they should be able to grasp a toy placed in their hand and transfer objects from one hand to another. If your baby is not reaching for objects by 5 months or is not holding toys when placed in their hands by 6 months, mention this to your pediatrician. Providing plenty of tummy time and offering age-appropriate toys for grasping supports fine motor development.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a period of rapid fine motor development. By 7-8 months, babies use a raking grasp to pick up small objects. By 9-10 months, the pincer grasp (using thumb and forefinger) emerges. Babies also start pointing, waving, and banging objects together. If your baby is not picking up small objects by 10 months, is not transferring objects between hands by 8 months, or shows a strong preference for using only one hand (which is unusual before 18 months), discuss these observations with your pediatrician.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers refine their fine motor skills rapidly - stacking blocks (2-3 by 12 months, 6+ by 24 months), using a spoon, turning pages, scribbling with crayons, and eventually starting to draw simple shapes. Signs of fine motor delay at this age include persistent difficulty with self-feeding, inability to stack any blocks by 18 months, no interest in or ability to scribble by 18-24 months, or significant difficulty with puzzles, shape sorters, or manipulating small objects. An occupational therapy evaluation can identify specific areas for support.',
    },
  ],
  whenNormal: [
    'Your baby reaches for objects and grasps toys by 5-6 months, even if they are a bit clumsy.',
    'Your baby uses both hands and does not show a strong hand preference before 18 months.',
    'Your toddler is working on self-feeding with a spoon but is quite messy - this is normal and expected.',
    'Fine motor skills seem slightly behind gross motor skills, or vice versa - this is common.',
  ],
  whenToMention: [
    'Your baby is not reaching for or grasping objects by 6 months.',
    'Your baby is not using a pincer grasp to pick up small items by 12 months.',
    'Your toddler has significant difficulty with age-appropriate tasks like stacking, scribbling, or self-feeding by 18-24 months.',
    'Your baby consistently uses only one hand while ignoring the other before 18 months of age.',
  ],
  whenToActNow: [
    'Your baby shows no interest in reaching for objects and their hands remain persistently fisted past 4 months.',
    'Your child is losing fine motor skills they previously had - this is developmental regression and needs immediate evaluation.',
    'Your baby\'s hand movements are tremulous, jerky, or seem difficult to control, possibly indicating a neurological concern.',
  ],
  relatedMilestones: [
    'fine-motor-reaching',
    'fine-motor-pincer-grasp',
    'fine-motor-self-feeding',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'not-picking-up-small-objects',
    'not-transferring-objects',
    'weak-grip-baby',
    'baby-developmental-regression-signs',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By 6 Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fine Motor Development. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Fine Motor Development in Infancy. Developmental Medicine & Child Neurology, 2018.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29573404/',
    },
  ],
};

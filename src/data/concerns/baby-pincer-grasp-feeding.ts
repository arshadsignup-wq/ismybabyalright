import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-pincer-grasp-feeding',
  title: 'When Will My Baby Use the Pincer Grasp for Eating?',
  category: 'feeding',
  searchTerms: ['baby pincer grasp', 'pincer grasp feeding', 'baby picking up small food', 'baby finger and thumb grasp', 'when does baby develop pincer grasp', 'pincer grasp milestone', 'baby fine motor eating', 'baby self feeding grasp', 'baby can\'t pick up small food', 'pincer grasp development'],
  quickAnswer: 'The pincer grasp (using the thumb and index finger to pick up small objects) typically develops between 8 and 12 months. Before this, babies use a raking or palmar grasp. Both are appropriate for self-feeding. Offer foods in strips or large pieces for palmar grasp and smaller pieces once the pincer grasp develops. Practice and exposure help develop this skill.',
  byAge: [
    { ageRange: '0-3 months', context: 'Babies have a reflexive grasp at this age but no voluntary fine motor control. Not relevant for feeding.' },
    { ageRange: '4-6 months', context: 'Babies begin voluntary reaching and grasping with a full fist or palmar grasp. They can hold large objects but cannot pick up small items.' },
    { ageRange: '6-9 months', context: 'A raking grasp develops where baby uses all fingers to sweep food toward the palm. Offer finger foods in large strips that stick out of the fist. By 8-9 months, an early pincer grasp may emerge.' },
    { ageRange: '9-12 months', context: 'The mature pincer grasp typically develops during this period. Baby can pick up peas, small pieces of soft food, and puffs between thumb and index finger. Offer increasingly smaller pieces as the grasp refines.' },
    { ageRange: '12-24 months', context: 'The pincer grasp continues to refine. Toddlers become more precise and can handle very small food pieces. If your child has not developed a pincer grasp by 12 months, mention it to your pediatrician.' },
  ],
  whenNormal: ['Baby uses a raking grasp for food between 6-9 months', 'Pincer grasp emerges between 8-12 months', 'Baby drops food frequently while learning to pick it up', 'Baby uses both hands to eat and may switch between grasp types'],
  whenToMention: ['Baby shows no pincer grasp by 12 months', 'Baby cannot pick up food from a surface by 10 months', 'Baby seems to have difficulty with hand coordination during feeding'],
  whenToActNow: ['Baby has no voluntary grasp at all by 6 months', 'Baby appears to have weakness or stiffness in hands that prevents grasping'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['finger-food-readiness-signs', 'self-feeding-messy-normal', 'baby-not-self-feeding'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Fine Motor Development and Feeding. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Developmental Milestones. 2023.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
  ],
};

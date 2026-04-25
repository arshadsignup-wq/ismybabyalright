import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'pigeon-toed',
  title: 'My Baby Walks Pigeon-Toed',
  category: 'physical',
  searchTerms: [
    'baby pigeon toed',
    'toddler walks toes inward',
    'in-toeing toddler',
    'pigeon toed walking',
    'baby feet turn in',
    'toddler trips a lot',
    'will pigeon toes correct',
    'child walks with feet turned in',
  ],
  quickAnswer:
    'Walking with toes pointed inward (pigeon-toed or in-toeing) is very common in babies and toddlers and is usually nothing to worry about. It often corrects itself as your child grows and their bones and muscles develop. Most kids outgrow it by age 8 without any treatment.',
  byAge: [
    {
      ageRange: '9-18 months',
      context:
        'Many babies who are just learning to walk have an in-toeing gait. This is often because their leg bones or feet are still curved from how they were positioned in the womb. As long as your baby is walking, bearing weight evenly on both legs, and not in pain, this is typically just part of normal development. Most early walkers grow out of it within a year or two.',
    },
    {
      ageRange: '19 months - 3 years',
      context:
        'In-toeing is still very common at this age. Your toddler might trip over their own feet sometimes, but as long as they\'re walking confidently and the in-toeing is equal on both sides, there\'s usually no need for intervention. Special shoes, braces, and inserts used to be prescribed for this, but research has shown they don\'t actually speed up the natural correction process.',
    },
    {
      ageRange: '4-7 years',
      context:
        'Many children gradually straighten out during these years. If your child is still very pigeon-toed at age 6-7, especially if it\'s interfering with running, sports, or causing frequent falls, mention it to your pediatrician. They may refer you to a pediatric orthopedist to assess whether the in-toeing is likely to self-correct or whether further evaluation is needed.',
    },
    {
      ageRange: '8+ years',
      context:
        'In-toeing that persists beyond age 8, especially if it\'s severe or causing pain or activity limitations, is worth evaluating. Sometimes older kids with persistent in-toeing benefit from physical therapy to strengthen certain muscle groups, or rarely, surgical correction if the bone rotation is significant and causing problems.',
    },
  ],
  whenNormal: [
    'Your child is under 8 years old and walks with toes turned inward, but both feet do it equally.',
    'Your child can run, jump, and play without significant pain or constant tripping.',
    'The in-toeing has been present since your child started walking and hasn\'t gotten dramatically worse.',
    'Your pediatrician has examined your child and isn\'t concerned.',
  ],
  whenToMention: [
    'Your child is over 7 years old and still has pronounced in-toeing.',
    'One foot turns in much more than the other, or in-toeing started suddenly in one leg.',
    'Your child frequently trips, falls, or avoids activities like running because of their gait.',
    'In-toeing is accompanied by pain, limping, or difficulty bearing weight.',
  ],
  whenToActNow: [
    'Sudden onset of severe in-toeing, especially after an injury or with accompanying pain or swelling.',
    'Your child can\'t bear weight on one or both legs, or there\'s obvious deformity.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-climbing',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Pigeon Toes (In-Toeing)',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Pigeon-Toes-Intoeing.aspx',
    },
    {
      org: 'AAOS',
      citation:
        'American Academy of Orthopaedic Surgeons  -  In-Toeing in Children',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/intoeing/',
    },
    {
      org: 'Seattle Children\'s',
      citation:
        'Seattle Children\'s Hospital  -  In-Toeing: When to Worry',
      url: 'https://www.seattlechildrens.org/conditions/in-toeing/',
    },
  ],
};

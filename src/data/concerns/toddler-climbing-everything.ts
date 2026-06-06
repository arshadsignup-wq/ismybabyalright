import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-climbing-everything',
  title: 'My Toddler Climbs on Everything',
  category: 'physical',
  searchTerms: ['toddler climbs on everything', 'toddler climbing furniture', 'toddler won\'t stop climbing', 'toddler climbs constantly', 'toddler dangerous climbing', 'toddler climber safety', 'toddler climbing phase', 'is excessive climbing normal', 'toddler climbing tables', 'toddler climbing out of crib'],
  quickAnswer: 'Climbing is a normal and important physical milestone for toddlers. Most toddlers go through an intense climbing phase between 12-30 months as they develop gross motor skills, spatial awareness, and body confidence. While exhausting for parents, climbing is a healthy sign of physical development. Focus on making climbing safe rather than preventing it entirely.',
  byAge: [
    { ageRange: '10-14 months', context: 'Climbing typically begins with pulling up on furniture and attempting to climb onto low surfaces. This is a wonderful gross motor milestone. Ensure furniture is anchored to walls and remove dangerous climbing opportunities.' },
    { ageRange: '14-18 months', context: 'Climbing becomes more adventurous. Your toddler may climb onto chairs, tables, and stairs. This is normal and shows excellent physical development. Provide safe climbing opportunities like indoor climbing structures or cushion forts.' },
    { ageRange: '18-24 months', context: 'Peak climbing age for many toddlers. They may climb out of cribs, onto counters, and up playground equipment. This does not mean anything is wrong - your toddler is developing normally. Channel the climbing energy into safe outlets.' },
    { ageRange: '2-3 years', context: 'Climbing continues but should become more purposeful and less impulsive. Your child starts to develop better judgment about what is safe. If climbing is accompanied by complete lack of safety awareness, discuss with your pediatrician.' },
  ],
  whenNormal: ['Your toddler climbs enthusiastically but can be redirected.', 'Your toddler is developing climbing skills progressively.', 'Your toddler shows some caution or checks with you before big climbs.', 'Climbing is one of many physical activities your toddler enjoys.'],
  whenToMention: ['Your toddler has absolutely no fear or awareness of danger from heights.', 'Climbing is so constant it interferes with other developmental activities.', 'Your toddler cannot be redirected from dangerous climbing despite consistent efforts.'],
  whenToActNow: ['Your toddler has fallen during climbing and shows signs of head injury.', 'Your toddler has sudden changes in coordination or balance during climbing.'],
  relatedMilestones: ['gross-motor-climbing', 'gross-motor-balance'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-no-safety-awareness-heights', 'toddler-cant-climb-stairs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Safety for Your Child: 1 to 2 Years', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Safety-for-Your-Child-1-to-2-Years.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Child By 18 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html' },
    { org: 'NIH', citation: 'Adolph KE. Learning to Move. Curr Dir Psychol Sci. 2008;17(3):213-218', url: 'https://pubmed.ncbi.nlm.nih.gov/19305638/' },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'normal-regression-patterns-by-age',
  title: 'Normal Regression Patterns by Age',
  category: 'behavior',
  searchTerms: [
    'toddler regression normal',
    'baby going backwards development',
    'toddler acting like baby again',
    'regression after new sibling',
    'toddler wants bottle again',
    'child regression potty training',
    'sleep regression developmental',
    'temporary regression in toddler',
    'baby lost skill then got it back',
  ],
  quickAnswer:
    'It is very common for babies and toddlers to temporarily lose or stop using a skill they previously mastered, especially during times of stress, illness, or major developmental leaps. Regression is a normal part of how the brain reorganizes itself, and most regressions resolve on their own within a few weeks. The key word is temporary: a child who briefly regresses but then rebounds is showing a typical developmental pattern.',
  byAge: [
    {
      ageRange: '3-6 months',
      context:
        'Around 4 months, many parents notice their baby who was sleeping longer stretches suddenly wakes frequently again. This "4-month sleep regression" happens because the brain is reorganizing its sleep architecture. Babies may also temporarily seem less interested in tummy time or other physical skills while their brain focuses on a new area of development. These are short-lived and normal.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies learn to crawl, pull up, or walk, they may temporarily lose interest in previously enjoyed activities like babbling or playing with certain toys. Their brain is concentrating its resources on the new motor skill. Similarly, sleep may be disrupted as babies practice new physical skills in the crib. Separation anxiety peaks around 8-10 months and can look like a social regression.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Sleep regressions around 12 and 18 months are extremely common. Toddlers may also regress in feeding, wanting bottles again or refusing foods they used to eat. Language regression, where a toddler briefly stops using words while their brain is making a big cognitive leap, can happen but should always be monitored. Major life changes like a new sibling, a move, or starting daycare commonly trigger temporary behavioral regressions.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Potty training regression is one of the most common concerns in this age range. A child who was dry for weeks may suddenly start having accidents, especially during periods of stress or change. Some toddlers may want to be carried or fed like a baby, use baby talk, or ask for a pacifier they had given up. These regressions are almost always temporary and respond best to patience and reassurance rather than pressure.',
    },
  ],
  whenNormal: [
    'The regression is temporary, lasting days to a few weeks, and your child bounces back to their previous level of ability',
    'The regression coincides with a new developmental leap, illness, or major life change like a new sibling or move',
    'Your child has regressed in one area but continues to develop normally in other areas',
    'Your child still responds to their name, engages with people, and shows interest in the world around them',
  ],
  whenToMention: [
    'A regression lasts more than 3-4 weeks with no signs of improvement despite a supportive environment',
    'Your child has lost multiple skills across different areas of development at the same time',
    'Regression in speech or social skills, especially loss of words or reduced eye contact, which warrants a developmental evaluation',
  ],
  whenToActNow: [
    'Your child suddenly loses the ability to walk, stand, or use their limbs, which could indicate a neurological emergency',
    'Your child loses speech and social engagement rapidly, especially between ages 15-24 months, which requires urgent developmental evaluation',
    'Regression is accompanied by seizures, loss of consciousness, or sudden changes in behavior or awareness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Two Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Developmental Regression in Children. National Library of Medicine.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30478241/',
    },
  ],
};

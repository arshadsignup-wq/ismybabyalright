import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-dental-injury-chipped-tooth',
  title: 'Baby Chipped or Knocked Out a Tooth',
  category: 'physical',
  searchTerms: [
    'baby chipped tooth',
    'toddler knocked out tooth',
    'baby tooth broken',
    'toddler fell chipped tooth',
    'baby tooth cracked',
    'toddler tooth knocked loose',
    'baby dental trauma',
    'toddler tooth avulsion',
    'baby tooth pushed up into gum',
    'toddler tooth injury from fall',
  ],
  quickAnswer:
    'Dental injuries are common in toddlers who are learning to walk and run. A chipped baby tooth usually just needs smoothing by a dentist. A knocked-out baby tooth should NOT be reimplanted (unlike permanent teeth), as reimplanting can damage the developing permanent tooth underneath. A tooth that has been pushed up into the gum (intruded) needs dental evaluation but often re-erupts on its own. The most important step is controlling bleeding and watching for infection.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'As babies learn to pull up and cruise, falls are common and front teeth may take the impact. Because babies have so few teeth at this age, damage to the developing tooth buds below the gum is the main concern. If a tooth is chipped, save the fragment if possible. If a tooth is pushed into the gum after impact, see a pediatric dentist within 24 hours for evaluation.',
    },
    {
      ageRange: '1-3 years',
      context:
        'This is the most common age for dental injuries. Toddlers fall frequently, and the front teeth are most vulnerable. For a chipped tooth: rinse with water, apply cold compress for swelling, and see a dentist within 1-2 days. For a completely knocked-out baby tooth: do NOT try to put it back in. Control bleeding with gauze, apply a cold compress, and call your dentist. For a very loose tooth: soft foods only and dental evaluation within 24 hours. For a tooth pushed into the gum: see a dentist within 24 hours - most intruded baby teeth re-erupt on their own within 2-6 months.',
    },
  ],
  whenNormal: [
    'A small chip on the edge of a tooth from a minor bump',
    'Mild bleeding from the gum area around a bumped tooth that stops within 10 minutes',
    'A tooth that seems slightly loose after a bump but firms up within a few days',
    'The lip or gum swelling after a fall that improves over a few days',
  ],
  whenToMention: [
    'A tooth is visibly chipped and you want it smoothed or assessed',
    'A tooth seems loose after a fall but your child can still eat comfortably',
    'You see a crack line in a tooth after trauma',
    'The gum around an injured tooth changes color over the following weeks',
  ],
  whenToActNow: [
    'A tooth has been completely knocked out or is hanging by a thread',
    'A tooth has been pushed up into the gum (intruded) after a fall',
    'There is significant bleeding that does not stop with 10 minutes of firm pressure',
    'Your child has a broken jaw - visible deformity, inability to open or close mouth, or severe pain',
    'An injured tooth develops swelling, pus, or a bump on the gum above it (abscess)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-fell-off-bed', 'baby-teeth-discolored-gray', 'baby-hit-head-when-to-worry'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Dental Emergencies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Dental-Emergencies.aspx',
    },
    {
      org: 'AAPD',
      citation: 'American Academy of Pediatric Dentistry. Management of Dental Trauma.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/management-of-dental-trauma/',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Tooth Injuries. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/mouth-teeth/Pages/default.aspx',
    },
  ],
};

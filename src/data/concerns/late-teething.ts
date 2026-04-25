import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'late-teething',
  title: 'My Baby\'s Teeth Aren\'t Coming In',
  category: 'physical',
  searchTerms: [
    'baby no teeth',
    'baby teeth not coming in',
    'late teething baby',
    'baby no teeth at 9 months',
    'baby no teeth at 12 months',
    'when do babies get teeth',
    'delayed teething',
    'baby still no teeth',
    'baby teeth late',
    'when should I worry about no teeth',
    'baby 1 year no teeth',
  ],
  quickAnswer:
    'The first tooth typically appears around 6 months, but the normal range is enormous  -  some babies are born with teeth, and others don\'t get their first tooth until 12-14 months. Late teething is almost always a normal variation and very rarely indicates a problem. If your baby has no teeth by 18 months, your pediatrician or dentist can take a look.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'The average age for the first tooth is around 6 months, but "average" means half of all babies get their first tooth before this and half after. Many babies show teething signs (drooling, chewing, fussiness) weeks or even months before a tooth actually appears. Don\'t worry if you see no teeth yet  -  this is perfectly normal.',
    },
    {
      ageRange: '7-9 months',
      context:
        'Many babies still don\'t have teeth at this age, and that\'s completely fine. Late teething often runs in families, so ask your parents when your teeth came in. Your baby can start eating soft solid foods even without teeth  -  their gums are surprisingly strong. Keep offering age-appropriate foods regardless of tooth status.',
    },
    {
      ageRange: '10-12 months',
      context:
        'If your baby doesn\'t have any teeth by their first birthday, there\'s still no need to panic  -  this is within the normal range. Mention it at their 12-month well visit so your pediatrician can take a look, but late teething on its own (without other delays) is rarely a concern. Some perfectly healthy babies simply follow a later teething schedule.',
    },
    {
      ageRange: '13-18 months',
      context:
        'Most babies have at least a few teeth by 18 months. If your child still has no teeth, your pediatrician may suggest an X-ray to confirm that tooth buds are present beneath the gums. In the vast majority of cases, the teeth are there  -  they\'re just taking their time. Very rarely, missing tooth buds (anodontia) can occur, but this is extremely uncommon.',
    },
  ],
  whenNormal: [
    'Your baby is under 12 months  -  late teething within the first year is a normal variation.',
    'There\'s a family history of late teething  -  genetics play a major role in when teeth emerge.',
    'Your baby is premature  -  teeth may come in later based on adjusted age.',
    'Your baby is developing normally in all other areas  -  isolated late teething is almost never a sign of a developmental problem.',
    'Your baby has signs of teething (drooling, gum rubbing, fussiness) even though no tooth has broken through  -  it\'s coming.',
  ],
  whenToMention: [
    'Your baby has no teeth by 12 months  -  worth a mention at the next well visit, though it\'s usually normal.',
    'Teeth are coming in but in an unusual order or pattern.',
    'Your baby has teeth that look unusually shaped, discolored, or have visible defects when they come in.',
  ],
  whenToActNow: [
    'Your child has no teeth by 18 months  -  a dental evaluation and possibly an X-ray is recommended to check for tooth buds.',
    'Teeth that have come in are loose, falling out, or breaking easily  -  this is unusual and should be evaluated.',
  ],
  relatedMilestones: [
    'feeding-solid-foods',
    'fine-motor-self-feeding',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Baby\'s First Tooth: 7 Facts Parents Should Know',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Babys-First-Tooth-Facts-Parents-Should-Know.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC  -  Children\'s Oral Health: Dental Development',
      url: 'https://www.cdc.gov/oralhealth/basics/childrens-oral-health/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Teething: 4 to 7 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-4-to-7-Months.aspx',
    },
  ],
};

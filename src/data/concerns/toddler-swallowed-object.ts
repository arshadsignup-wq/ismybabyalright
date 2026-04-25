import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-swallowed-object',
  title: 'My Toddler Swallowed Something',
  category: 'digestive',
  searchTerms: [
    'baby swallowed coin',
    'toddler swallowed object',
    'baby swallowed small toy',
    'child swallowed button battery',
    'baby swallowed magnet',
    'toddler ate something small',
    'how long for swallowed object to pass',
    'baby swallowed bead',
    'toddler swallowed penny',
    'foreign body ingestion baby',
  ],
  quickAnswer:
    'Most small, smooth, non-toxic objects that a child swallows will pass through the digestive tract without causing harm within two to five days. However, button batteries, magnets, and sharp objects are medical emergencies that require immediate attention. If your child swallowed something and is breathing normally with no pain, call your pediatrician for guidance on whether to watch and wait or go to the emergency room.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies in this age range are developing their pincer grasp and can pick up very small objects. Coins, beads, small toy parts, and food items like whole grapes or nuts are common choking and swallowing hazards. If your baby swallowed a small smooth object and is breathing normally, not drooling excessively, and not in pain, the object will most likely pass on its own. Keep the environment clear of small items and follow age-appropriate toy guidelines.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are naturally curious and continue to explore by putting things in their mouths. This is the peak age for foreign body ingestion. Common swallowed objects include coins, small batteries, crayons, and small toy components. Most smooth objects smaller than a quarter will pass through without trouble, but you should always contact your pediatrician to determine if an X-ray or emergency visit is needed.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Older toddlers may swallow objects during play or out of curiosity. At this age, they can often tell you that they swallowed something, which is helpful. The key concern remains the type of object: button batteries and magnets are always emergencies regardless of the child\'s age. Coins are the most commonly swallowed object and usually pass without incident, but an X-ray may be recommended to confirm the object is moving through the digestive tract.',
    },
  ],
  whenNormal: [
    'Your child swallowed a small, smooth, non-toxic object like a small bead or pebble and is showing no symptoms',
    'Your child passed the swallowed object in their stool within a few days without any discomfort',
    'Your child swallowed a small piece of crayon or paper and shows no signs of distress',
    'Your pediatrician confirmed via X-ray that the object is moving through the digestive tract normally',
  ],
  whenToMention: [
    'Your child swallowed a coin or small smooth object and you want guidance on whether to come in or watch at home',
    'The swallowed object has not appeared in the stool after five to seven days',
    'Your child has mild stomach discomfort after swallowing an object but is otherwise acting normally',
  ],
  whenToActNow: [
    'Your child swallowed or may have swallowed a button battery, magnet, sharp object, or anything larger than a quarter  -  go to the emergency room immediately',
    'Your child is gagging, drooling excessively, unable to swallow, having difficulty breathing, or experiencing severe abdominal pain or vomiting after swallowing an object',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. What to Do if Your Child Swallows Something. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/What-to-Do-if-Your-Child-Swallows-Something.aspx',
    },
    {
      org: 'National Capital Poison Center',
      citation:
        'National Capital Poison Center. Button Battery Ingestion.',
      url: 'https://www.poison.org/battery',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Foreign object swallowed  -  When to seek care.',
      url: 'https://www.mayoclinic.org/first-aid/first-aid-swallowed-object/basics/art-20056523',
    },
  ],
};

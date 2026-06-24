import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-thumb-sucking-when-to-worry',
  title: 'Thumb Sucking: When to Worry',
  category: 'behavior',
  searchTerms: [
    'baby thumb sucking normal',
    'when to stop thumb sucking',
    'thumb sucking teeth problems',
    'baby thumb sucking too much',
    'toddler thumb sucking',
    'thumb sucking habit baby',
    'is thumb sucking bad for baby',
    'how to stop thumb sucking',
    'thumb sucking callus baby',
    'pacifier vs thumb sucking',
  ],
  quickAnswer:
    'Thumb sucking is a completely normal self-soothing behavior in babies and toddlers. Most children naturally stop between ages 2-4. It only becomes a concern if it continues beyond age 4-5 when permanent teeth begin to come in, at which point it can affect dental alignment and palate shape. For babies and young toddlers, thumb sucking is healthy and helps with self-regulation - there is no need to discourage it at this age.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Thumb and finger sucking begins in the womb and is one of the earliest self-soothing behaviors. It is completely normal and beneficial for babies. Non-nutritive sucking helps calm the nervous system and helps babies fall asleep. Some babies prefer their thumb over a pacifier - both are acceptable. There is no need to try to stop thumb sucking at this age. A callus may develop on the preferred thumb from frequent sucking, which is normal and harmless.',
    },
    {
      ageRange: '6-24 months',
      context:
        'Thumb sucking continues to be a normal comfort behavior through toddlerhood. Many babies increase thumb sucking when tired, stressed, bored, or falling asleep. This is healthy self-regulation. Do not coat the thumb with bitter substances or use thumb guards at this age. The American Dental Association states that thumb sucking at this age does not cause permanent dental problems because only baby teeth are present. If your baby primarily uses a pacifier, weaning from the pacifier is generally easier than breaking a thumb habit later.',
    },
    {
      ageRange: '2-5 years',
      context:
        'Most children naturally reduce and stop thumb sucking between ages 2-4 as they develop other coping strategies. Peer pressure in preschool often helps. If your child still sucks their thumb vigorously past age 4-5 when permanent teeth begin to erupt, it can cause dental issues like an open bite, overbite, or changes to the roof of the mouth. At this point, gentle strategies like positive reinforcement, reminders, and identifying triggers can help. Your pediatric dentist can assess whether the habit is affecting dental development.',
    },
  ],
  whenNormal: [
    'Your baby or toddler sucks their thumb for comfort when tired, falling asleep, or stressed.',
    'Your baby has a callus on their thumb from sucking - this is harmless.',
    'Your child under 3 sucks their thumb and their teeth look normal.',
  ],
  whenToMention: [
    'Your child is over 4 and still sucking their thumb vigorously and frequently.',
    'You notice changes in your child\'s teeth or palate shape that may be related to thumb sucking.',
    'Your child sucks their thumb so intensely that the skin is raw or bleeding.',
  ],
  whenToActNow: [
    'Your child\'s thumb has an infection (red, swollen, oozing) from constant sucking.',
    'Thumb sucking is accompanied by hair pulling, head banging, or other concerning repetitive behaviors that suggest extreme distress.',
    'Your child is unable to stop sucking even when they want to, and it is causing significant dental problems.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-grinding-teeth', 'rocking-back-and-forth', 'baby-teething-order-timeline'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Pacifiers and Thumb Sucking. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Pacifiers-and-Thumb-Sucking.aspx',
    },
    {
      org: 'ADA',
      citation:
        'American Dental Association - Thumb Sucking.',
      url: 'https://www.ada.org/resources/research/science-and-research-institute/oral-health-topics/thumb-sucking',
    },
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry - Policy on Oral Habits.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/oral-habits/',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'separation-anxiety',
  title: 'Baby Separation Anxiety',
  category: 'behavior',
  searchTerms: [
    'baby separation anxiety',
    'baby cries when I leave the room',
    'baby won\'t let me put them down',
    'clingy baby',
    'baby screams when I leave',
    'when does separation anxiety start in babies',
    'separation anxiety at daycare',
    'toddler separation anxiety',
    'baby only wants mom',
    'baby cries when handed to someone else',
    'how long does separation anxiety last',
  ],
  quickAnswer:
    'Separation anxiety is a completely healthy sign that your baby has formed a strong attachment to you. It typically begins around 6-8 months, peaks between 10-18 months, and gradually eases by age 2-3. It means your baby\'s brain has developed enough to understand that you exist even when they cannot see you, but not yet enough to understand that you will always come back.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'Some babies begin showing early signs of separation awareness around 4-6 months, such as fussing when a caregiver leaves the room or showing a clear preference for familiar people. This is early but completely normal. Your baby is developing object permanence  -  the understanding that things (and people) still exist when they are out of sight.',
    },
    {
      ageRange: '6-10 months',
      context:
        'This is when separation anxiety commonly begins in earnest. Your baby may cry when you leave, cling to you, or become distressed when handed to another person, even a familiar one like a grandparent. This can feel frustrating, but it is actually a wonderful cognitive milestone  -  your baby recognizes you as their safe person and understands when you are gone.',
    },
    {
      ageRange: '10-18 months',
      context:
        'The typical peak of separation anxiety. Your baby or toddler may cry intensely at daycare drop-off, protest bedtime, or follow you everywhere including the bathroom. This is the most intense phase but it does pass. Short, confident goodbyes ("I love you, I\'ll be back after lunch!") and consistent routines help more than sneaking out, which can increase anxiety.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Separation anxiety gradually decreases as toddlers develop language skills and a more sophisticated understanding of time and routines. There may be flare-ups during transitions like starting a new childcare, a new sibling, or during illness. These regressions are temporary and normal. By age 3, most children handle separations with minimal distress.',
    },
    {
      ageRange: '3+ years',
      context:
        'Occasional separation anxiety in preschoolers is normal, especially during transitions. However, if intense separation anxiety persists beyond age 3-4, interferes with daily activities like school, or causes significant distress lasting well beyond the separation, it is worth discussing with your pediatrician to rule out separation anxiety disorder, which is treatable.',
    },
  ],
  whenNormal: [
    'Your baby cries when you leave the room but calms down within a few minutes of being comforted by another caregiver',
    'Your baby has a clear preference for primary caregivers over less familiar people',
    'Separation anxiety started between 6-18 months and is most intense during transitions or when overtired',
    'Your toddler protests daycare drop-off but the caregiver reports they settle and play happily within 10-15 minutes',
    'Separation anxiety flares up temporarily during illness, travel, or major changes',
  ],
  whenToMention: [
    'Separation anxiety is so intense that your child cannot be comforted by any other caregiver, even familiar ones, after a reasonable settling period',
    'Your child is over 3 and separation anxiety is getting worse instead of better, or is significantly interfering with preschool or daily routines',
    'Your child has severe physical symptoms with separation such as vomiting, headaches, or stomach aches that seem anxiety-related',
  ],
  whenToActNow: [
    'Your child shows a sudden onset of extreme clinginess or anxiety after a period of independence, which could indicate pain, illness, or a traumatic experience',
    'Separation anxiety is accompanied by regression in other areas such as loss of language, toileting skills, or motor abilities',
    'Your child seems anxious or fearful most of the time, not just during separations, and this is affecting their ability to eat, sleep, or play',
  ],
  relatedMilestones: [
    'social-emotional-attachment',
    'cognitive-object-permanence',
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Separation Anxiety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Separation-Anxiety.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Infants (0-1 year).',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/infants.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Emotional and Social Development: 8 to 12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-8-12-Months.aspx',
    },
  ],
};

import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'separation-anxiety-bedtime',
  title: 'Baby Separation Anxiety at Bedtime',
  category: 'sleep',
  searchTerms: [
    'baby separation anxiety at bedtime',
    'baby cries when I leave the room at night',
    'toddler won\'t go to bed without me',
    'baby screams when put in crib',
    'separation anxiety sleep problems',
    'baby bedtime anxiety',
    'toddler afraid to sleep alone',
    'baby clings at bedtime',
    'when does separation anxiety at bedtime stop',
    'baby hysterical at bedtime',
  ],
  quickAnswer:
    'Separation anxiety at bedtime is a completely normal and healthy developmental phase that typically peaks between 8-18 months. It means your baby has developed a strong, secure attachment to you and now understands that you continue to exist when out of sight  -  they just have not yet learned to trust that you always come back.',
  byAge: [
    {
      ageRange: '4-8 months',
      context:
        'Object permanence is developing  -  your baby is beginning to understand that things (and people) still exist when out of sight. You may notice your baby becoming clingy and fussing when you leave the room. This is an important cognitive milestone, even though it makes bedtime harder. Predictable routines help your baby feel safe.',
    },
    {
      ageRange: '8-12 months',
      context:
        'This is the classic peak of separation anxiety. Your baby may cry intensely when you leave the room at bedtime, even if they previously went down easily. A warm, consistent bedtime routine (bath, book, song, brief cuddle, goodnight) gives your baby a predictable sequence that signals safety. Brief check-ins can reassure them that you are still nearby.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Separation anxiety often surges again around 12 and 18 months, sometimes catching parents off guard if bedtime had been going smoothly. Your toddler may resist being put down, cry when you leave, or wake at night and need reassurance. This is a phase, not a regression  -  your child is processing more complex emotions and needs your steady, predictable response.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Toddlers may develop new fears (darkness, monsters, being alone) that compound bedtime separation. Nightlights, a special lovey or comfort object (safe for this age), and validating their feelings ("I know it feels hard when I leave, but I\'m right outside and you are safe") can all help. Most children work through this phase gradually with patience and consistency.',
    },
  ],
  whenNormal: [
    'Your baby is between 8-18 months and cries when you leave the room at bedtime but calms within 10-15 minutes',
    'Bedtime distress increased around a developmental leap, new sibling, move, or change in routine',
    'Your baby or toddler is clingy at bedtime but happy and engaged during the day',
    'Separation anxiety comes and goes in waves, improving and then reappearing with new phases',
    'Your child settles more easily with a consistent bedtime routine even if there are initial protests',
  ],
  whenToMention: [
    'Bedtime distress is extreme and lasting more than 30-45 minutes consistently, and your child seems genuinely panicked rather than protesting',
    'Separation anxiety is so severe during the day that your child cannot play or explore even when you are nearby',
    'Sleep problems are significantly affecting your child\'s daytime mood, appetite, or developmental progress',
    'You have concerns about whether the anxiety could be related to a traumatic experience or major life change',
  ],
  whenToActNow: [
    'Your child has sudden, severe night-time distress with screaming, vomiting, or signs of acute pain that seem different from separation protests',
    'Your child seems fearful of a specific person in a way that raises safety concerns',
  ],
  relatedMilestones: [
    'cognitive-object-permanence',
    'emotional-attachment',
    'emotional-regulation',
    'social-stranger-awareness',
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
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Infants (0-1 year).',
      url: 'https://www.cdc.gov/child-development/positive-parenting-tips/infants.html',
    },
  ],
};

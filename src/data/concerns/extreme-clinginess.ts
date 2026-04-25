import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'extreme-clinginess',
  title: 'My Baby Is Extremely Clingy',
  category: 'behavior',
  searchTerms: [
    'baby extremely clingy',
    'clingy baby',
    'baby won\'t let me put them down',
    'velcro baby',
    'baby only wants mom',
    'baby separation anxiety',
    'baby cries when I leave room',
    'why is my baby so clingy',
    'toddler extremely clingy',
    'baby attached to one parent',
  ],
  quickAnswer:
    'Clinginess is a very common and normal phase in infant and toddler development, especially during periods of separation anxiety (typically around 8-10 months, 18 months, and 2 years). Your baby is not spoiled  -  they are seeking security and comfort from their primary caregiver. Most children outgrow extreme clinginess as they develop independence and secure attachments.',
  byAge: [
    {
      ageRange: '6-10 months',
      context:
        'Separation anxiety typically begins around 6-8 months as your baby develops object permanence (understanding that you still exist even when out of sight). Your previously content baby may suddenly cry when you leave the room, resist being held by others, or cling to you intensely. This is a normal and healthy developmental milestone. Responding with reassurance  -  not forcing separation  -  helps build secure attachment.',
    },
    {
      ageRange: '10-18 months',
      context:
        'Clinginess often peaks during this period. Your baby may follow you everywhere, cry when you go to the bathroom, or only want to be held by you. This is not manipulation  -  it is your baby seeking safety and connection. Some babies also become clingy when teething, sick, or going through developmental leaps. Creating predictable routines, saying goodbye (even for short separations), and returning as promised helps build trust.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Toddlers often experience another wave of clinginess around 18 months and again around 2 years. They are navigating big feelings about independence ("Me do it!") and security ("But I need you!"). Clinginess may intensify during transitions (new sibling, moving, starting daycare) or stressful periods. Most toddlers gradually become more confident and independent as they feel secure in their attachment.',
    },
    {
      ageRange: '3+ years',
      context:
        'Most children become less clingy by preschool age as they develop confidence and social skills. However, some children remain temperamentally more cautious or sensitive and may continue to prefer closeness with their caregiver. If clinginess is extreme, interfering with preschool or social development, or paired with high anxiety, your pediatrician can help determine if additional support would be beneficial.',
    },
  ],
  whenNormal: [
    'Clinginess comes and goes in waves, often tied to developmental stages, illness, or changes',
    'Your baby is clingy with primary caregivers but can warm up to familiar people with time',
    'You can eventually put your baby down or leave briefly, even if they protest at first',
    'Clinginess is most intense during transitions (waking up, being dropped off) but your baby settles once engaged in play',
    'Your baby is meeting other developmental milestones and engages in age-appropriate play',
  ],
  whenToMention: [
    'Clinginess is so extreme that you cannot put your baby down for even a moment without intense distress',
    'Your baby refuses to be comforted by anyone but one specific caregiver, ever, even in emergencies',
    'Clinginess is worsening over time rather than improving or is interfering with your baby\'s ability to eat, sleep, or play',
    'You feel overwhelmed, burnt out, or unable to meet your own basic needs due to your baby\'s clinginess',
  ],
  whenToActNow: [
    'Your baby is in constant distress and cannot be soothed even when held by you',
    'Clinginess is part of a sudden change in behavior, loss of skills, or extreme fearfulness that is new',
    'You are concerned about your own mental health and need support managing your baby\'s needs  -  please reach out to your pediatrician or a mental health provider',
  ],
  relatedMilestones: [
    'social-emotional-attachment',
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Separation Anxiety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Separation-Anxiety.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Separation and Stranger Anxiety.',
      url: 'https://www.zerotothree.org/resource/separation-and-stranger-anxiety/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Building Secure Attachment. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Responding-to-Your-Babys-Cues.aspx',
    },
  ],
};

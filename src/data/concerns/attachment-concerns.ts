import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'attachment-concerns',
  title: 'My Baby Doesn\'t Seem Attached to Anyone',
  category: 'behavior',
  searchTerms: [
    'baby not attached to anyone',
    'baby doesn\'t prefer parents',
    'baby goes to anyone',
    'baby doesn\'t have separation anxiety',
    'no stranger danger in baby',
    'baby equally happy with everyone',
    'indiscriminate attachment baby',
    'baby doesn\'t cry when I leave',
    'baby not clingy at all',
    'should my baby prefer me by now',
  ],
  quickAnswer:
    'By 7-9 months, most babies show clear preferences for their primary caregivers and some wariness of unfamiliar people. If your baby seems equally comfortable with everyone and shows no distress when separated from caregivers, it may simply reflect an easy-going temperament. However, if combined with other social differences, it can occasionally warrant further discussion with your pediatrician.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'In the first six months, it is completely normal for babies to be relatively content with multiple caregivers. While they may recognize and show subtle preferences for familiar voices and faces, strong attachment behaviors like separation anxiety have not yet developed. A baby who seems happy with everyone at this age is simply displaying normal social development  -  not a lack of attachment.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is when selective attachment typically begins to emerge. Most babies start showing preference for primary caregivers, may become wary of strangers, and begin protesting when their preferred person leaves. Some easy-going babies are slower to show these behaviors, which is not necessarily concerning. However, if your baby shows no recognition difference between you and a complete stranger  -  seeming equally content being held, fed, or comforted by anyone  -  it is worth mentioning at your next well-child visit.',
    },
    {
      ageRange: '9-18 months',
      context:
        'By 9-12 months, most babies have a clearly established attachment to one or more caregivers. Separation anxiety and stranger wariness are at their peak. If your baby in this age range goes willingly to any adult, shows no distress when you leave, and does not seek you out for comfort when hurt or scared, this pattern is worth discussing with your pediatrician. It may simply be an unusually calm temperament, but it can sometimes indicate the need for further assessment.',
    },
    {
      ageRange: '18 months+',
      context:
        'By 18 months, strong attachment to primary caregivers should be well established. Toddlers at this age typically show a clear hierarchy of preferred people and use their caregivers as a secure base for exploration  -  checking back in, bringing things to show you, and returning for comfort. If your toddler continues to show no preference for familiar versus unfamiliar adults, this is an important conversation to have with your doctor.',
    },
  ],
  whenNormal: [
    'Your baby is under 6 months and seems content with multiple caregivers  -  selective attachment has not yet developed',
    'Your baby shows subtle preferences for you (quieting to your voice, preferring your smell) even if they do not cry when you leave',
    'Your baby is social and outgoing with everyone but still uses you as their primary source of comfort when hurt, tired, or sick',
    'Your baby had a brief period of separation anxiety that was less intense than expected  -  some children simply have an easier temperament',
  ],
  whenToMention: [
    'Your baby is over 9 months and shows no preference for familiar caregivers over complete strangers  -  willingly going to anyone with equal enthusiasm',
    'Your child does not seek comfort from any specific person when hurt, scared, or upset, even by 12-15 months',
    'Lack of selective attachment is combined with other social differences such as limited eye contact, not following your point, or not sharing enjoyment with you',
  ],
  whenToActNow: [
    'Your child shows no social engagement with anyone  -  not making eye contact, not responding to voices, not seeking interaction from any adult, at any age',
    'Your child has experienced significant early disruptions in caregiving (multiple placements, prolonged separation, or neglect) and shows indiscriminate friendliness toward all adults, including strangers  -  this warrants prompt evaluation',
  ],
  relatedMilestones: [
    'social-emotional-attachment',
    'social-emotional-engagement',
    'cognitive-object-permanence',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Emotional and Social Development: 8 to 12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-8-12-Months.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Understanding Attachment in Infants and Toddlers.',
      url: 'https://www.zerotothree.org/resource/understanding-attachment/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By 9 Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
  ],
};

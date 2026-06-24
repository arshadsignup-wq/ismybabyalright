import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-pinching-while-falling-asleep',
  title: 'My Baby Pinches Me While Falling Asleep',
  category: 'behavior',
  searchTerms: [
    'baby pinching while falling asleep',
    'baby pinches skin to sleep',
    'baby twiddling while nursing',
    'baby pinching while breastfeeding',
    'baby kneading skin falling asleep',
    'toddler pinching to self soothe',
    'baby grabbing skin to fall asleep',
    'baby needs to touch skin to sleep',
    'baby pinching habit at bedtime',
    'baby twisting skin while sleeping',
  ],
  quickAnswer:
    'Pinching, twiddling, kneading, or grabbing skin while falling asleep is a very common self-soothing behavior in babies and toddlers. Many breastfed babies pinch or twiddle the opposite breast while nursing to sleep. This behavior is a form of comfort-seeking and is not a sign of any developmental or behavioral problem. While it is normal, it can be uncomfortable or painful for the parent. Redirecting the behavior to a suitable alternative (a small blanket, stuffed animal, or taggy toy) can help.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young babies explore through touch and develop self-soothing habits early. Babies who are breastfed may begin to knead or grasp the breast or nearby skin during feeding as a comfort behavior. This is instinctive and linked to the calming hormones released during nursing. At this age, you can begin gently redirecting by offering a small, textured object to hold or wearing a nursing necklace with safe, baby-friendly beads. Keep nails trimmed short to minimize scratching. This behavior is completely normal and does not indicate any underlying problem.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies develop stronger hand skills, pinching and twiddling can become more purposeful and vigorous. Your baby may pinch your arm, neck, or ear while nursing or being held at bedtime. This can become a habit that is difficult to break later, so this is a good time to start gently redirecting. Each time your baby pinches, gently remove their hand and offer an alternative — a small lovey with tags, a silky-edged blanket, or a textured toy. Be consistent but patient. Saying "gentle hands" while guiding their touch can begin to teach appropriate touching.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers may have well-established pinching or skin-touching habits at bedtime. Some toddlers pinch a specific area (parent\'s arm, earlobe, or the skin on the upper arm) and become very attached to this ritual. While still normal, the stronger pinch of a toddler can be quite painful. Strategies include: consistently offering an alternative comfort object with a similar tactile quality (satin, silky fabric, or tags), wearing long sleeves to create a barrier, setting gentle boundaries ("you can hold my hand but no pinching"), and gradually reducing skin contact during the falling-asleep process. Most children outgrow this by age 3-4.',
    },
  ],
  whenNormal: [
    'Your baby kneads, pinches, or twiddles while nursing or falling asleep and is otherwise developing normally.',
    'The behavior only occurs during wind-down and sleep transitions — it is a self-soothing ritual.',
    'Your baby accepts redirection to a comfort object some of the time, even if they still prefer skin contact.',
  ],
  whenToMention: [
    'The pinching is so intense that it leaves bruises or breaks the skin.',
    'Your child pinches others (not just parents) in social situations, which could indicate a broader behavioral pattern.',
    'The self-soothing behavior seems compulsive or your child cannot fall asleep without it even after age 3-4.',
  ],
  whenToActNow: [
    'Your child is pinching themselves hard enough to leave marks or cause injury to themselves — discuss this with your pediatrician, as self-injurious behaviors should be evaluated.',
    'Pinching is accompanied by other repetitive, compulsive behaviors (excessive hand movements, head banging, hair pulling) that concern you — bring this up with your pediatrician.',
    'Your child\'s self-soothing behaviors are escalating and causing significant distress or sleep disruption for the family — seek guidance from your pediatrician.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-pacifier-pros-cons', 'rocking-back-and-forth', 'wont-sleep-without-nursing'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Self-Soothing and Comfort Habits in Children',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Self-Soothing.aspx',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International — Twiddling While Nursing',
      url: 'https://www.llli.org/breastfeeding-info/twiddling/',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three — Understanding Self-Soothing Behaviors',
      url: 'https://www.zerotothree.org/resource/toddlers-and-self-regulation/',
    },
  ],
};

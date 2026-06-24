import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'phone-addiction-parent-baby-bonding',
  title: 'Phone Use and Its Impact on Parent-Baby Bonding',
  category: 'behavior',
  searchTerms: [
    'phone addiction parent baby bonding',
    'distracted parenting phone',
    'parent on phone ignoring baby',
    'phone affecting baby attachment',
    'technoference parenting',
    'parent screen time affecting baby',
    'distracted parent baby development',
    'can\'t put phone down baby',
    'phone interfering with parenting',
    'parent scrolling while breastfeeding',
  ],
  quickAnswer:
    'Research shows that parental phone use during interactions with babies and toddlers, termed "technoference," can disrupt the serve-and-return interactions critical for brain development. Studies have found that when parents are on their phones, they miss up to 50% of their child\'s bids for attention. Children whose parents are frequently distracted by phones show more distress behaviors and attention-seeking. This does not mean you can never use your phone around your baby, but being mindful of when and how you use it during key interaction times is important for your child\'s emotional and cognitive development.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'During the fourth trimester and early months, babies are building attachment through face-to-face interaction, responsive caregiving, and the "serve and return" dynamic (baby coos, parent responds). When a parent is absorbed in their phone, they are less responsive to these cues. One study found that infants showed more distress and less exploration when their mother was on her phone compared to when she was engaged. This does not mean every moment must be screen-free; scrolling while breastfeeding at 3 AM is understandable. The key is ensuring there are consistent, phone-free periods of engaged interaction throughout the day.',
    },
    {
      ageRange: '6-18 months',
      context:
        'As babies develop social referencing (looking to parents for cues about safety and emotion), parental phone distraction can interfere with this critical learning process. Research found that children exhibited more risky behavior at playgrounds when their parents were on phones. Babies also begin imitating their parents\' behavior, and heavy phone use models a relationship with screens that your child will eventually replicate. Practical strategies: designate phone-free times (meals, bathtime, floor play), put your phone in another room during play sessions, and use "Do Not Disturb" mode to reduce notification pull.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Toddlers are keenly aware of when their parent is "not really there." They may escalate bids for attention through increased whining, acting out, or engaging in dangerous behaviors to get their parent to look up. Studies show that children whose parents have high "technoference" have more externalizing behavior problems. If you notice your toddler acting out specifically when you are on your phone, this is a clear signal. This is not about guilt; it is about awareness. Building in phone-free rituals (first 30 minutes after waking, meals, bedtime routine) creates reliable windows of full attention.',
    },
  ],
  whenNormal: [
    'You use your phone during some daily activities but are generally responsive when your baby seeks your attention.',
    'You have designated phone-free times and are mostly able to stick to them.',
    'You occasionally scroll during nursing or while your baby is contentedly playing independently.',
  ],
  whenToMention: [
    'You feel unable to control your phone use and it is interfering with your ability to be present with your baby.',
    'Your partner or family members have expressed concern about your phone use around the baby.',
    'You are using your phone to cope with postpartum depression, anxiety, or boredom and want to discuss healthier strategies.',
  ],
  whenToActNow: [
    'Phone distraction is contributing to unsafe situations (not watching your child near water, stairs, or other hazards).',
    'Your phone use is a symptom of severe postpartum depression or anxiety and you are withdrawing from your baby.',
    'You feel completely unable to put your phone down and it is affecting your sleep, relationships, and parenting.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'infant-screen-time-brain-development',
    'parent-child-reading-mitigate-screen-effects',
    'infant-mental-health-first-1001-days',
    'attachment-concerns',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Media and Young Minds. Pediatrics, 2016.',
      url: 'https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Technoference: Parent Distraction with Technology and Associations with Child Behavior Problems. Child Development, 2018.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28493400/',
    },
    {
      org: 'Harvard',
      citation:
        'Center on the Developing Child, Harvard University. Serve and Return Interaction Shapes Brain Circuitry.',
      url: 'https://developingchild.harvard.edu/science/key-concepts/serve-and-return/',
    },
  ],
};

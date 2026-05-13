import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sharing-attention-between-children',
  title: 'Sharing Attention Between Multiple Children',
  category: 'behavior',
  searchTerms: [
    'sharing attention between kids',
    'dividing attention multiple children',
    'mom guilt not enough attention',
    'sibling jealousy attention',
    'toddler demands all attention',
    'not giving enough attention to each child',
    'balancing attention siblings',
    'one child needs more attention',
    'quality time multiple kids',
  ],
  quickAnswer:
    'Feeling like you cannot give each child enough individual attention is one of the most common concerns among parents of multiple children, and the guilt it creates is nearly universal. Research shows that it is the quality of attention, not the quantity, that matters most for healthy development. Children also benefit from learning to share attention, wait their turn, and observe their siblings, which are skills that help build social and emotional resilience.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A newborn requires frequent and intensive care that can make older siblings feel sidelined. During this phase, finding small windows to connect with your older child is more realistic than trying to split your time equally. Narrating what you are doing with the baby, such as "I am feeding your sister, and when I am done, we will read your book together," helps the older child feel seen and teaches them about patience and caregiving.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby becomes more interactive and mobile, older siblings may feel both delighted and threatened by the baby\'s new ability to grab their toys and demand attention. Setting up parallel activities where each child is engaged in something age-appropriate near you can help everyone feel included. Even a few minutes of undivided attention with each child during transitions like bedtime can create a strong sense of security.',
    },
    {
      ageRange: '12-24 months',
      context:
        'When you have two children close in age, this stage can feel especially demanding because both children need hands-on supervision. Structured routines help because predictability reduces competition for attention. Simple strategies like rotating which child gets to choose the story or activity give each child a sense of fairness and importance.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Toddlers and preschoolers are increasingly capable of independent play, which creates natural opportunities for you to give focused attention to a younger sibling. Encouraging cooperative play between siblings, even in small doses, builds their relationship and reduces the pressure on you to mediate every interaction. Celebrating moments when siblings play together peacefully reinforces the positive behavior.',
    },
  ],
  whenNormal: [
    'You feel guilty about not spending equal time with each child, which is a nearly universal experience among parents of multiples or closely spaced children',
    'Your children sometimes compete for your attention through interrupting, whining, or acting out, which are normal bids for connection',
    'One child temporarily needs more attention due to illness, a developmental leap, or a behavioral phase, and the other child notices the imbalance',
    'Your children express jealousy toward each other in age-appropriate ways, such as saying "you love the baby more"',
  ],
  whenToMention: [
    'One child is consistently withdrawn, anxious, or showing signs of low self-esteem that you suspect may be related to feeling overlooked',
    'Sibling conflict is escalating to the point where one child is regularly hurting the other despite your interventions',
    'You are experiencing significant parental burnout, guilt, or depressive symptoms related to the demands of managing multiple children',
  ],
  whenToActNow: [
    'One child is showing signs of severe emotional or behavioral regression that does not improve with increased individual attention',
    'You are concerned that one child may be at risk of harm from a sibling and feel unable to ensure safety in your home',
    'You are feeling unable to cope and are worried about your own mental health or ability to care for your children safely',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Power of Play: A Pediatric Role in Enhancing Development in Young Children. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/142/3/e20182058/38649/The-Power-of-Play-A-Pediatric-Role-in-Enhancing',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips.',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/index.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Tips for Parenting Siblings.',
      url: 'https://www.zerotothree.org/resource/tips-on-learning-to-get-along/',
    },
  ],
};

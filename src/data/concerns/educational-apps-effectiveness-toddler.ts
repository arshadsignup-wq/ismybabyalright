import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'educational-apps-effectiveness-toddler',
  title: 'Educational App Effectiveness',
  category: 'behavior',
  searchTerms: [
    'do educational apps help toddlers learn',
    'best learning apps for toddlers',
    'are educational apps worth it for babies',
    'toddler learning from iPad apps',
    'educational screen time toddler',
    'do baby learning apps actually work',
    'ABCmouse for toddlers effective',
    'can toddlers learn from apps or screens',
  ],
  quickAnswer:
    'Research shows that toddlers under age 3 learn very little from screens compared to real-world interaction. While some apps labeled "educational" can reinforce learning in children over age 2 when co-used with a parent, many "educational" apps are primarily designed to be engaging (and profitable) rather than truly educational. The AAP emphasizes that no app can replace the learning that happens through play, conversation, and hands-on exploration.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'No app or screen-based content is educational for babies this young. Their brains learn through sensory experiences, human voices, and caregiver responsiveness. Marketing claims about "baby genius" apps have no scientific support.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies cannot learn from apps. Their visual and cognitive systems are still developing. Interactive play with caregivers — talking, singing, reading, and physical play — is infinitely more valuable for brain development.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Research consistently shows that babies under 18 months have a "video deficit" — they learn less from screens than from live interaction. Even well-designed educational content is less effective than real-world experience for this age group.',
    },
    {
      ageRange: '12 months+',
      context:
        'After age 2, carefully selected apps can supplement learning when a parent or caregiver co-uses them — pointing things out, asking questions, and connecting app content to real life. Look for apps that are interactive (not just swiping), have an educational curriculum developed with child development experts, are ad-free, and encourage creativity rather than passive consumption. Even the best apps should not replace hands-on play and social interaction.',
    },
  ],
  whenNormal: [
    'Your toddler enjoys educational apps but also plays with physical toys, reads books, and engages in imaginative play',
    'You co-view and discuss app content with your child, extending learning beyond the screen',
    'App use is limited to a portion of the recommended 1-hour daily screen time for children 2-5',
    'Your child shows learning gains that you reinforce through off-screen activities',
  ],
  whenToMention: [
    'Your child uses apps for multiple hours daily while other forms of play and social interaction have declined significantly',
    'Your child seems to learn content from apps but cannot apply or generalize that knowledge off-screen',
    'You are relying on apps as the primary educational tool for your child and are concerned they are not learning enough through play',
  ],
  whenToActNow: [
    'Your child shows signs of developmental delay — in language, social skills, or motor development — and spends the majority of their waking time on screens or apps',
    'App or screen use is replacing basic needs like adequate sleep, physical activity, and social interaction with caregivers',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'screen-time-addiction-toddler',
    'tablet-dependency-toddler',
    'video-call-screen-time-rules',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Media and Young Minds. Pediatrics. 2016.',
      url: 'https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds',
    },
    {
      org: 'NIH',
      citation:
        'Radesky, J. et al. Young Children\'s Use of Smartphones and Tablets. Pediatrics. 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25452066/',
    },
  ],
};

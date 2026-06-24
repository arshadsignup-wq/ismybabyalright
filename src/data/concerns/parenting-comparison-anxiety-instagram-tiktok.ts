import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'parenting-comparison-anxiety-instagram-tiktok',
  title: 'Parenting Comparison Anxiety from Social Media',
  category: 'maternal',
  searchTerms: [
    'parenting comparison social media',
    'Instagram parenting anxiety',
    'TikTok parenting pressure',
    'comparing my baby to others',
    'social media making me a bad parent',
    'Instagram perfect mom pressure',
    'mom influencer comparison',
    'social media parenting guilt',
    'comparing baby milestones online',
    'social media affecting my parenting',
    'mom shaming online',
  ],
  quickAnswer:
    'Social media comparison is a significant source of anxiety for modern parents. Research shows that 75% of mothers report feeling worse about their parenting after viewing social media, and increased social media use during the postpartum period is associated with higher rates of depression and anxiety. Social media presents a curated, unrealistic version of parenthood that does not reflect the messy, difficult, mundane reality. Comparison to influencer parents, milestone-tracking posts, and conflicting advice from viral content can erode parental confidence. Setting boundaries around social media use is an important self-care strategy.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'The early postpartum period is when social media comparison anxiety is most intense. Sleep-deprived parents scrolling at 3 AM are exposed to perfectly staged nurseries, "easy" babies, and mothers who appear to have effortlessly lost pregnancy weight and are thriving. This is curated content, not reality. Social media algorithms amplify anxiety-provoking content because it drives engagement. Practical strategies: unfollow accounts that trigger comparison, follow accounts that show realistic parenthood, set time limits on social media apps, and remember that no one posts about their worst moments.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Milestone comparison becomes a major source of anxiety during this period. Seeing other babies crawling, waving, or saying first words while yours has not yet can create unnecessary worry. All babies develop on their own timeline, and social media posts about milestones represent only the earliest achievers, not the norm. A baby whose parent posts "first steps at 9 months!" does not make your 12-month-old who is not yet walking behind. Discuss milestone concerns with your pediatrician rather than comparing to social media timelines.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddler-age comparison anxiety shifts to parenting styles, discipline approaches, educational activities, and food preparation. Viral TikTok parenting trends can create pressure to adopt specific methods without understanding whether they are evidence-based. The "gentle parenting" movement, while based on valid principles, is often presented in unrealistic, perfectionistic ways on social media that can increase guilt rather than empower parents. Remember: the best parenting approach is one that works for your specific family and child, not the one that performs best on social media.',
    },
  ],
  whenNormal: [
    'You occasionally feel a pang of comparison when seeing other parents\' posts but can recognize it as curated content and move on.',
    'You use social media for connection and information but it does not dominate your emotional state.',
    'You can enjoy other parents\' positive posts without feeling it reflects negatively on your own parenting.',
  ],
  whenToMention: [
    'Social media comparison is causing persistent feelings of inadequacy, guilt, or anxiety about your parenting.',
    'You find yourself constantly checking developmental milestone content and worrying your child is behind.',
    'Social media use is replacing actual social connection with other parents.',
    'You are spending significant time on social media instead of sleeping or engaging with your baby.',
  ],
  whenToActNow: [
    'Social media comparison is contributing to feelings of hopelessness, worthlessness, or thoughts of self-harm, which may indicate postpartum depression.',
    'You are making parenting decisions based solely on viral social media content rather than medical advice, and it is affecting your child\'s health or safety.',
    'Your social media use has become compulsive and is interfering with your ability to care for your baby.',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'parental-decision-fatigue-conflicting-advice',
    'phone-addiction-parent-baby-bonding',
    'overscheduled-toddler-too-many-activities',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Growing Up Digital: Media Research Symposium. Pediatrics, 2015.',
      url: 'https://publications.aap.org/pediatrics/article/140/Supplement_2/S116/34161/Growing-Up-Digital-Media-Research-Symposium',
    },
    {
      org: 'APA',
      citation:
        'American Psychological Association. Social Media and Parental Wellbeing.',
      url: 'https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Social Media Use and Maternal Mental Health in the Postpartum Period. Maternal and Child Health Journal, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/33389507/',
    },
  ],
};

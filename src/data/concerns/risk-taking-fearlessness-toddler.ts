import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'risk-taking-fearlessness-toddler',
  title: 'Risk-Taking and Fearlessness in Toddlers',
  category: 'behavior',
  searchTerms: [
    'toddler no fear',
    'toddler fearless dangerous',
    'toddler climbs everything',
    'toddler no sense of danger',
    'fearless baby dangerous behavior',
    'toddler jumps from high places',
    'toddler runs into street',
    'toddler daredevil behavior',
    'is it normal toddler has no fear',
  ],
  quickAnswer:
    'Many toddlers are natural daredevils, and a seemingly complete lack of fear is common between ages 1 and 3. This is because the parts of the brain responsible for risk assessment and impulse control are still very immature. Your toddler is not being reckless on purpose; they genuinely cannot yet understand the connection between dangerous actions and potential consequences. This fearlessness typically decreases as the prefrontal cortex matures.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'As babies become mobile through crawling and cruising, they begin to explore without much understanding of danger. Some babies will crawl toward stairs, pull up on unstable furniture, or put anything in their mouth. This is driven by curiosity, not fearlessness. Babies at this age are just beginning to develop depth perception and have no concept of heights being dangerous.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is the peak of fearless behavior for many children. New walkers and climbers are exhilarated by their abilities and will climb bookshelves, run away in parking lots, and leap off furniture without hesitation. Their motor skills have outpaced their cognitive ability to assess risk. Constant supervision is essential, and childproofing should be aggressive. Temperament plays a large role: some children are naturally more cautious, while others are extreme thrill-seekers.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Some fearlessness persists but children gradually develop a better understanding of consequences, especially through experience and consistent caregiver guidance. They may still climb, jump, and run impulsively, but they begin to pause and look to adults for reassurance in genuinely novel situations. If your child shows absolutely no caution in any situation and seems completely insensitive to pain, it may be worth mentioning to your pediatrician.',
    },
  ],
  whenNormal: [
    'Your toddler climbs, jumps, and explores fearlessly but is otherwise developing normally and engages well with people',
    'Your child is excited by new physical challenges and seems to have a naturally bold or adventurous temperament',
    'Fearless behavior is most pronounced when your toddler is well-rested and in a stimulating environment',
    'Your child occasionally shows caution in truly unfamiliar situations, even if their threshold for fear is higher than other children',
  ],
  whenToMention: [
    'Your child shows absolutely no fear or caution in any situation by age 2-3, even after repeated negative experiences like falls',
    'Fearlessness is paired with an unusually high pain tolerance, where your child seems unbothered by injuries that should hurt',
    'Your child has no "social referencing" behavior, meaning they never look to you for reassurance or guidance in new situations',
  ],
  whenToActNow: [
    'Your child is repeatedly injuring themselves seriously due to risk-taking behavior and your current safety measures are inadequate',
    'Fearlessness is accompanied by other developmental concerns such as lack of speech, no eye contact, or inability to respond to their name',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safety for Your Child: 1 to 2 Years. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Safety-for-Your-Child-1-to-2-Years.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Risk-Taking Behavior in Early Childhood. National Library of Medicine.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29388755/',
    },
  ],
};

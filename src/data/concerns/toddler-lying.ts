import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-lying',
  title: 'Toddler Lying or Making Up Stories',
  category: 'behavior',
  searchTerms: [
    'toddler lying',
    'toddler making up stories',
    'toddler tells lies',
    'is my toddler lying',
    'preschooler lying',
    'why does my toddler lie',
    'toddler denies doing things',
    'toddler fibs',
    'toddler blaming others',
    'when do kids start lying',
    'toddler imagination vs lying',
  ],
  quickAnswer:
    'Lying in toddlers and preschoolers is actually a sign of healthy cognitive development. The ability to lie requires understanding that other people have different thoughts and knowledge than you do - a skill called "theory of mind" that emerges around ages 2-4. Most toddler "lies" are actually wishful thinking, vivid imagination, attempts to avoid trouble, or testing boundaries. This is normal and does not mean your child will become dishonest.',
  byAge: [
    {
      ageRange: '18 months - 2.5 years',
      context:
        'At this age, children do not truly understand the concept of lying. When a toddler says "I didn\'t do it" while holding the evidence, they may be expressing what they wish had happened or simply parroting a phrase they have heard. Their understanding of truth and fiction is still developing. Reacting calmly and focusing on the behavior rather than the lie is most effective: "The milk spilled. Let\'s clean it up together."',
    },
    {
      ageRange: '2.5-3.5 years',
      context:
        'Children begin to understand that they can say things that are not true, but they are still experimenting with this concept. Tall tales and imaginary scenarios are common and healthy. A child who tells you they flew to the moon is using their imagination, not being deceptive. When a child lies to avoid consequences, keep your response low-key: focus on the problem, not the lie. "I can see the crayon marks on the wall. Crayons are for paper."',
    },
    {
      ageRange: '3.5-4.5 years',
      context:
        'This is when more deliberate lying may emerge. Your child now understands the difference between truth and fiction and may try to avoid trouble or get what they want through lying. This is the time to begin gently teaching the value of honesty. Make it safe to tell the truth by not overreacting: "Thank you for telling me the truth. I know that was hard." Avoid setting traps ("Did you eat the cookie?" when you already know they did).',
    },
    {
      ageRange: '4-5 years',
      context:
        'Lying becomes more sophisticated as theory of mind develops fully. Children may lie to protect others\' feelings, to make themselves look good, or to avoid punishment. This is a normal part of social development. Continue to emphasize honesty by modeling it, praising truthfulness, and keeping consequences proportionate. Occasional lying at this age is not a character flaw.',
    },
  ],
  whenNormal: [
    'Your toddler tells fantastical stories about things that clearly did not happen - this is imagination, not lying',
    'Your child denies doing something obvious to avoid getting in trouble - this is the most common type of early "lie"',
    'Lying is occasional rather than constant and responds to gentle correction over time',
    'Your child is between 2 and 5 years old and experimenting with the concept of truth',
  ],
  whenToMention: [
    'Your child lies constantly about many things, even when there is no reason to avoid trouble, and the behavior seems compulsive',
    'Lying is accompanied by other concerning behaviors like persistent aggression, cruelty to animals, or significant difficulty at school or daycare',
    'Your child seems unable to distinguish between reality and fantasy in a way that seems unusual for their age',
  ],
  whenToActNow: [
    'Your child is telling stories about events that concern you and you are not sure whether they are real or imagined - always take reports of harm seriously and consult your pediatrician',
    'Lying is accompanied by extreme behavioral changes, withdrawal, or signs of significant emotional distress',
  ],
  relatedMilestones: [
    'cognitive-problem-solving',
    'language-expressive',
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Lying and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Why-Children-Lie.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Preschoolers (3-5 years).',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/preschoolers.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. How to Respond to Your Toddler\'s Tall Tales.',
      url: 'https://www.zerotothree.org/resource/truth-and-lies/',
    },
  ],
};

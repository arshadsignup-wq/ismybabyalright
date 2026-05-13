import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'difficulty-with-transitions',
  title: 'Difficulty with Transitions and Changes',
  category: 'behavior',
  searchTerms: [
    'toddler meltdown during transitions',
    'toddler hates changes in routine',
    'baby cries when changing activity',
    'toddler tantrums leaving playground',
    'toddler won\'t stop playing to eat',
    'toddler screams when we leave',
    'child difficulty transitioning between activities',
    'toddler can\'t handle change',
  ],
  quickAnswer:
    'Difficulty with transitions is one of the most common challenges in early childhood. Toddlers live in the present moment and lack the ability to understand "later" or "next," so being pulled away from an enjoyable activity feels like a loss. Their immature prefrontal cortex makes it genuinely hard to shift gears. This is not stubbornness; it is a neurological reality that improves gradually as the brain matures.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Even babies can protest transitions, crying when taken away from a toy or when a fun activity ends. At this age, object permanence is still developing, so when something is gone, it feels truly gone to them. Gentle narration of what is happening ("We are putting the toy down now, and we are going to have a bath") helps begin building transition skills, even though they do not yet fully understand the words.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Transition difficulties intensify as toddlers develop stronger preferences and a sense of autonomy but lack the language and cognitive tools to manage change. Leaving the park, stopping screen time, getting into the car seat, or transitioning from play to mealtime are common flashpoints. Giving a brief warning before transitions ("Two more minutes, then we are going inside") is helpful even at this age, as children absorb the pattern over time.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Children this age can begin to understand transition warnings and simple visual schedules. While meltdowns during transitions are still very normal, you may see improvement as language develops and your child can understand concepts like "first we do this, then we do that." Some children are temperamentally more rigid and will have a harder time with transitions throughout toddlerhood. Consistent routines and predictable sequences help these children the most.',
    },
  ],
  whenNormal: [
    'Your toddler melts down during predictable transitions like leaving the playground, turning off the TV, or getting in the car seat',
    'Transition difficulty is worse when your child is tired, hungry, or already overstimulated',
    'Your child eventually calms down after the transition, even if it takes a few minutes',
    'Transition struggles improve gradually over time and with consistent routines and warnings',
  ],
  whenToMention: [
    'Every single transition, no matter how small, triggers an extreme meltdown that lasts 20-30 minutes or more, even with warnings and consistent routines',
    'Your child is over 3 and shows no improvement in handling transitions despite patient, consistent support strategies',
    'Difficulty with transitions is so severe that it significantly limits your family\'s ability to do daily activities like go to the store, attend appointments, or visit family',
    'Transition difficulty is paired with other rigidity, like insisting on sameness in food, clothing, or routines to an extreme degree',
  ],
  whenToActNow: [
    'Your child becomes violent or self-injurious during transitions, such as head-banging, biting themselves, or causing harm to others',
    'Transition difficulty is one of many concerns including speech delays, lack of eye contact, or restricted interests, which together warrant a developmental evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Ease Your Child\'s Separation Anxiety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Soothing-Your-Childs-Separation-Anxiety.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Helping Toddlers with Transitions.',
      url: 'https://www.zerotothree.org/resource/helping-toddlers-with-transitions/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers (1-2 years).',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-wont-follow-routines',
  title: 'Toddler Won\'t Follow Routines',
  category: 'behavior',
  searchTerms: [
    'toddler won\'t follow routine',
    'toddler resists bedtime routine',
    'toddler refuses morning routine',
    'toddler fights every transition',
    'toddler hates routine',
    'how to get toddler to follow schedule',
    'toddler won\'t cooperate with routine',
    'toddler routine resistance',
    'toddler oppositional about daily tasks',
    'toddler refuses to get dressed',
  ],
  quickAnswer:
    'Resisting routines is a hallmark of toddlerhood. Your child is developing autonomy and wants control over their world, and daily routines often feel like someone else is in charge of every decision. This does not mean routines are not important - they provide security and predictability - but some resistance is a healthy sign of growing independence. Offering choices within the routine and using visual schedules can make a big difference.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, routine resistance is usually not deliberate defiance. Your baby may fight diaper changes, getting dressed, or being put in the car seat because they want to keep doing whatever they were doing. Distraction, playfulness, and speed are your best tools. Singing a special song during diaper changes or making getting dressed into a game can transform the experience.',
    },
    {
      ageRange: '18 months - 2.5 years',
      context:
        'This is when routine resistance peaks. Your toddler understands what comes next and may protest because they want to stay in control. Visual schedules with pictures ("First brush teeth, then story, then bed") help children anticipate and feel prepared. Offering two acceptable choices ("Do you want to put on the blue shirt or the green shirt?") gives them a sense of control without derailing the routine.',
    },
    {
      ageRange: '2.5-3.5 years',
      context:
        'As language develops, your child may negotiate or try to change the order of routines. This is actually healthy problem-solving, even when it is frustrating. Let them have some input where possible ("Would you like to brush teeth before or after pajamas?") while keeping non-negotiable elements firm. Timers can help with transitions: "When the timer goes off, it will be time to clean up." Consistency across caregivers is important.',
    },
    {
      ageRange: '3.5-4+ years',
      context:
        'By this age, most children can follow routines with some independence, especially if they have been consistent. If your child still fights every single step of every routine with extreme intensity, consider whether the routines might need adjusting, whether there are sensory issues (like sensitivity to certain clothing textures), or whether anxiety is playing a role. Most routine resistance at this age responds well to problem-solving together.',
    },
  ],
  whenNormal: [
    'Your toddler resists some parts of the routine but not others, and resistance varies day to day',
    'Routine resistance is worst when your child is tired, hungry, or has been away from their normal schedule',
    'Your child eventually cooperates with gentle persistence, choices, and patience',
    'Your toddler is between 18 months and 3 years and asserting independence in many areas, not just routines',
    'Resistance improves when you give 5-minute warnings before transitions',
  ],
  whenToMention: [
    'Your child has extreme, prolonged meltdowns during routine activities that seem disproportionate and are not improving with consistent strategies',
    'Routine resistance seems related to sensory issues, such as extreme distress with clothing textures, tooth brushing, or hair washing',
    'Your child is over 4 and cannot follow any simple routines independently, even familiar ones they have done hundreds of times',
  ],
  whenToActNow: [
    'Your child\'s routine resistance is so severe that basic care needs (eating, sleeping, hygiene) are not being met and you feel unable to manage daily life',
    'Resistance is new and sudden, accompanied by other behavioral changes, regression, or signs of anxiety or distress',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'social-emotional-independence',
    'cognitive-problem-solving',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bedtime Routines for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Bedtime-Routines-for-Children.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers (1-2 years).',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Developing Routines for Your Child and Family.',
      url: 'https://www.zerotothree.org/resource/developing-routines/',
    },
  ],
};

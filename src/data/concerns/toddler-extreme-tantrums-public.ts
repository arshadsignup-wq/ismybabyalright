import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-extreme-tantrums-public',
  title: 'My Toddler Has Extreme Tantrums in Public',
  category: 'behavior',
  searchTerms: [
    'toddler tantrum in public',
    'toddler meltdown in store',
    'extreme tantrums toddler',
    'toddler screaming in public',
    'how to handle toddler tantrums in public',
    'toddler tantrum embarrassing',
    'toddler loses it in public',
    'toddler tantrum grocery store',
    'toddler screaming fit public places',
    'managing public meltdowns toddler',
  ],
  quickAnswer:
    'Public tantrums are one of the most stressful aspects of toddlerhood for parents, but they are entirely normal and extremely common. Toddlers have immature emotional regulation systems and are easily overwhelmed by stimulation, frustration, hunger, or fatigue — all of which are amplified in public settings. The tantrum feels worse to you than it does to your child. Most onlookers are sympathetic, and those who are not have simply forgotten what toddlerhood is like.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Early tantrums are often triggered by frustration from limited communication skills. Your toddler knows what they want but cannot express it. In public settings, there are also many tempting objects they cannot have. Prevention is the best strategy at this age: keep outings short, time them after naps and meals, bring snacks and distractions, and avoid situations that are likely to trigger meltdowns. When a tantrum happens, stay calm, move to a quieter space if possible, and offer comfort.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is the peak tantrum age. Your toddler is developing strong opinions and preferences but lacks the emotional regulation to cope with not getting what they want. Public tantrums may include throwing themselves on the floor, screaming, going limp when you try to pick them up, or running away. The most effective response is to stay calm, get down to their level, acknowledge their feelings ("You really wanted that toy. You are so upset."), and wait for the storm to pass. Do not give in to demands during the tantrum, as this teaches that tantrums are effective.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Tantrums should gradually become less frequent and less intense as language skills improve and your child learns coping strategies. You can begin teaching calming techniques like deep breaths or counting. Before outings, set clear expectations: "We are going to the store. We are not buying toys today." Give warnings before transitions. If tantrums in public are becoming more frequent, more intense, or lasting longer than 15-20 minutes, consider whether sensory sensitivities, anxiety, or developmental factors might be contributing.',
    },
    {
      ageRange: '3-4 years',
      context:
        'By age 3-4, most children have significantly fewer public meltdowns as their emotional regulation improves. They can use words to express frustration, understand delayed gratification better, and respond to reasoning and compromise. If your child is still having frequent, intense, prolonged public tantrums at this age that significantly differ from peers, discuss this with your pediatrician. Persistent, extreme tantrums beyond age 4 may warrant further evaluation for anxiety, sensory processing differences, or other underlying causes.',
    },
  ],
  whenNormal: [
    'Your toddler has tantrums in public that are triggered by identifiable causes like hunger, fatigue, overstimulation, or being told no',
    'Tantrums last less than 15-20 minutes and your toddler recovers and returns to their usual mood afterward',
    'Your toddler has some good public outings mixed in with difficult ones',
    'Tantrums decrease in frequency and intensity as your toddler gets older and develops better language skills',
  ],
  whenToMention: [
    'Tantrums are becoming more frequent and more intense over time rather than improving',
    'Your toddler has tantrums that regularly last 30 minutes or more and involve self-harm like head banging or biting themselves',
    'You are feeling overwhelmed, isolated, or avoiding leaving the house because of your toddler\'s behavior',
  ],
  whenToActNow: [
    'Your toddler injures themselves or others during tantrums with enough force to cause harm',
    'Your toddler holds their breath during tantrums until they lose consciousness — while breath-holding spells are usually benign, they should be evaluated',
    'You feel you are at risk of losing control of your own reactions — reach out for help immediately; this is a sign of strength, not failure',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'language-expressive',
    'cognitive-understanding-consequences',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'defiant-toddler',
    'toddler-defiant-wont-listen-anything',
    'toddler-frustration-management',
    'overstimulation-signs',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Temper Tantrums. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Temper-Tantrums.aspx',
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
        'Zero to Three. Toddlers and Tantrums.',
      url: 'https://www.zerotothree.org/resource/toddlers-and-tantrums/',
    },
  ],
};

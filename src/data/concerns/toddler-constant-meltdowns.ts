import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-constant-meltdowns',
  title: 'Toddler Having Constant Meltdowns',
  category: 'behavior',
  searchTerms: ['toddler constant meltdowns','toddler tantrums all day','toddler emotional dysregulation','toddler crying over everything','toddler tantrum every hour','excessive tantrums toddler','toddler meltdown for no reason','toddler can\'t stop crying','toddler emotionally unstable','when are tantrums too much','toddler tantrums when to worry','toddler extreme emotional outbursts'],
  quickAnswer: 'Tantrums are a normal part of toddler development - most 2-3 year olds have at least one tantrum per day. Meltdowns happen because toddlers feel big emotions (frustration, disappointment, overwhelm) but their prefrontal cortex is far too immature to regulate those emotions. However, when tantrums happen many times per day, last more than 25 minutes, are violent (self-injury, destruction), or persist beyond age 4 without decreasing, it may indicate that your child needs additional support for emotional regulation.',
  byAge: [
    { ageRange: '12-18 months', context: 'Early tantrums often take the form of crying, throwing themselves on the floor, or going rigid. These are triggered by not getting what they want, frustration with limited abilities, or being told no. At this age, tantrums are brief (usually under 5 minutes) and respond well to distraction. Your toddler does not yet have the words or skills to manage big feelings.' },
    { ageRange: '18-24 months', context: 'Tantrums increase in frequency and intensity as your toddler\'s desires grow faster than their abilities and language. Multiple tantrums per day is normal during this period. Common triggers include transitions, being told no, wanting independence but needing help, and hunger/tiredness. Stay calm, keep your child safe, and wait for the storm to pass. Acknowledging the emotion ("You are really frustrated") helps more than reasoning or distraction at this age.' },
    { ageRange: '2-3 years', context: 'Peak tantrum age. Most 2-year-olds have 1-2 tantrums per day. Three or more intense tantrums daily or tantrums lasting 25+ minutes are on the higher end and worth monitoring. As language develops, tantrums should gradually decrease because your child gains new tools for expression. Teaching simple emotion words ("mad," "sad," "frustrated") and coping strategies (deep breaths, squeezing hands) begins to help at this age.' },
    { ageRange: '3-4 years', context: 'Tantrums should be clearly decreasing in frequency and intensity by age 3.5. Your child should be able to use some words to express feelings, even if they still have meltdowns. If tantrums are still happening several times a day, are increasing in violence, or your child cannot be consoled within 25 minutes, talk to your pediatrician. Underlying causes can include sensory processing differences, anxiety, sleep deprivation, or speech delays making communication frustrating.' },
  ],
  whenNormal: ['Your toddler has 1-2 tantrums per day that last under 15 minutes and resolve with comfort or time','Tantrums are triggered by identifiable causes like hunger, tiredness, transitions, or not getting what they want','Your child can be distracted or comforted during or after the tantrum','Tantrums are decreasing in frequency and intensity as your child\'s language and coping skills develop'],
  whenToMention: ['Tantrums happen more than 5 times per day or regularly last more than 25 minutes','Your child is injuring themselves (head banging hard enough to bruise, biting self) or others during meltdowns','Tantrums are not decreasing by age 3.5 and are interfering with daily functioning','Your child seems unable to recover from tantrums and goes from one emotional outburst directly into another'],
  whenToActNow: ['Your child is severely injuring themselves during meltdowns - banging head against hard surfaces causing injury, scratching until bleeding, or holding breath until losing consciousness','You are concerned about your own ability to stay calm and safe during your child\'s meltdowns','Sudden dramatic behavioral changes alongside tantrums suggest possible illness, pain, or traumatic experience'],
  relatedMilestones: ['social-emotional-regulation','language-expressive'],
  showSelfReferral: false,
  relatedConcernSlugs: ['tantrums','toddler-meltdowns-over-transitions','sensory-avoiding-baby','high-needs-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Temper Tantrums. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Temper-Tantrums.aspx' },
    { org: 'NIH', citation: 'Belden AC, et al. Temper Tantrums in Healthy Versus Depressed and Disruptive Preschoolers. Journal of Pediatrics. 2008.', url: 'https://pubmed.ncbi.nlm.nih.gov/18534243/' },
    { org: 'Zero to Three', citation: 'Zero to Three. Toddlers and Challenging Behavior.', url: 'https://www.zerotothree.org/resource/toddlers-and-challenging-behavior/' },
  ],
};

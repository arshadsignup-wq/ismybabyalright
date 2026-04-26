import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-screaming-phase',
  title: 'Toddler Screaming Phase',
  category: 'behavior',
  searchTerms: [
    'toddler screaming phase',
    'toddler screams all the time',
    'why does my toddler scream so much',
    'toddler high-pitched screaming',
    'toddler shrieking for no reason',
    'toddler screaming when excited',
    'toddler screaming when angry',
    'how to stop toddler screaming',
    'baby screaming phase',
    'toddler screaming in public',
    'toddler ear piercing screams',
  ],
  quickAnswer:
    'Screaming is a completely normal phase for toddlers, typically peaking between 18 months and 2.5 years. Toddlers scream because they have discovered the incredible power of their voice but do not yet have the vocabulary to express their big feelings. They may scream from excitement, frustration, boredom, or simply to experiment with volume. This phase passes as language skills develop and children learn more effective ways to communicate.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies often go through a screaming or shrieking phase around 6-9 months as they discover the full range of their voice. This is vocal experimentation and is an important step in speech development. Your baby is learning about volume, pitch, and cause and effect (they scream, everyone looks). Responding with a calm, gentle voice models appropriate volume.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Screaming at this age is often a communication tool. Your child wants something, is frustrated, or is excited but does not have enough words to express it. Acknowledging their feeling ("You want that toy! You are excited!") and offering the words they need helps bridge the gap between emotion and language.',
    },
    {
      ageRange: '18 months - 2.5 years',
      context:
        'This is the peak screaming age for most toddlers. They understand so much more than they can say, which creates intense frustration. Screaming can also be a power move - they know it gets a big reaction. Stay calm, avoid matching their volume, and use a quiet voice. Teaching sign language or simple phrases for common needs can significantly reduce frustration-based screaming.',
    },
    {
      ageRange: '2.5-3.5 years',
      context:
        'As vocabulary expands rapidly, screaming should decrease significantly. If your child is still screaming frequently and intensely at this age, consider whether there might be environmental stressors, sensory sensitivities, or communication delays that are making verbal expression more difficult. Praise and attention for using words ("I love how you used your words to tell me!") reinforces the behavior you want to see.',
    },
  ],
  whenNormal: [
    'Your toddler screams when excited, frustrated, or overwhelmed but calms down within a reasonable time with support',
    'Screaming is worst in stimulating environments like stores, restaurants, or crowded places',
    'Your child is between 12 months and 3 years and the screaming is gradually decreasing as vocabulary grows',
    'Your toddler can sometimes use words or gestures instead of screaming when reminded and supported',
    'Screaming increases when your child is tired, hungry, or going through a developmental leap',
  ],
  whenToMention: [
    'Screaming is constant throughout the day and does not seem connected to any emotion or need, lasting well beyond age 3',
    'Your child seems unable to communicate in any other way and screaming is their primary form of expression',
    'Screaming is accompanied by other communication delays, such as very few words for their age',
  ],
  whenToActNow: [
    'Your child suddenly begins screaming inconsolably and seems to be in pain, especially if they are pulling at their ears, holding their head, or have a fever',
    'Screaming is accompanied by regression in speech or other developmental skills and sudden personality changes',
  ],
  relatedMilestones: [
    'language-expressive',
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Development: 1 Year Olds. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-1-Year-Olds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Toddlers and Self-Control: A Survival Guide for Parents.',
      url: 'https://www.zerotothree.org/resource/toddlers-and-self-control/',
    },
  ],
};

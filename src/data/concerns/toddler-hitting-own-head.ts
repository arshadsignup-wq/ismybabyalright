import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-hitting-own-head',
  title: 'Toddler Hitting or Banging Their Own Head',
  category: 'behavior',
  searchTerms: ['toddler hitting head', 'baby banging head', 'toddler head banging', 'baby hits own head', 'toddler bangs head on floor', 'baby head banging in crib', 'toddler slapping own head', 'baby head banging at bedtime', 'toddler self-hitting', 'baby head banging normal'],
  quickAnswer: 'Head banging and self-hitting are surprisingly common behaviors in babies and toddlers, affecting up to 20% of healthy children. Most head banging is a self-soothing behavior, similar to thumb sucking or rocking, and often occurs at bedtime or during frustration. It typically starts around 6-9 months and peaks between 18-24 months. Most children outgrow head banging by age 3-4. While alarming to witness, children rarely hurt themselves from typical head banging, and it is not usually a sign of a developmental problem.',
  byAge: [
    { ageRange: '0-12 months', context: 'Rhythmic head banging often starts around 6-9 months. Babies may bang their head against the crib mattress, pillow, or headboard at bedtime as a self-soothing mechanism. The rhythmic motion is calming, similar to being rocked. Some babies also rock their whole body. This behavior can be distressing for parents but is a normal developmental phase. Ensure the crib is safe (no hard edges or gaps) and try not to draw too much attention to it, as reacting strongly can reinforce the behavior.' },
    { ageRange: '1-3 years', context: 'Toddlers may bang their head or hit themselves during tantrums, when frustrated, when in pain (such as teething or ear infections), or as a continued self-soothing behavior at bedtime. During tantrums, head banging is a way of expressing intense emotions that the toddler cannot yet verbalize. Stay calm, ensure your child is in a safe environment, and do not give excessive attention to the behavior. If your child is head banging during tantrums, acknowledge their emotions and help them learn other ways to cope. The behavior usually resolves by age 3-4.' },
  ],
  whenNormal: ['Rhythmic head banging at bedtime that lasts less than 15-20 minutes', 'Head banging during tantrums in a child who is otherwise developing normally', 'Your child does not seem to be in pain from the head banging', 'The behavior started between 6-24 months and is not intensifying'],
  whenToMention: ['Head banging is frequent and lasting a long time (more than 20-30 minutes)', 'Your child seems to be injuring themselves from the banging', 'Head banging is accompanied by developmental delays or concerns', 'The behavior is increasing in frequency or intensity rather than decreasing', 'Head banging continues past age 3-4'],
  whenToActNow: ['Your child is hitting their head hard enough to cause visible injury (bruising, swelling, or skin breaks)', 'Head banging is accompanied by significant developmental regression', 'Head banging seems related to pain (check ears for infection)', 'Your child is not responsive or seems dazed after head banging episodes'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['tantrums', 'body-rocking', 'self-soothing-behaviors', 'sensory-seeking-behavior'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Head Banging and Body Rocking. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Head-Banging-and-Body-Rocking.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Rhythmic Movement Disorder in Children.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Temper Tantrums. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Temper-Tantrums.aspx' },
  ],
};

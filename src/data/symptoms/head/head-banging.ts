import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'head-banging',
  title: 'Head Banging in Babies & Toddlers',
  bodySystem: 'head',
  description: 'Head banging is a common rhythmic movement where a baby or toddler repeatedly bangs their head against the crib, wall, or floor. It affects up to 15-20% of healthy children and is typically a self-soothing behavior that begins around 6-9 months and usually resolves by age 3-4. While alarming to parents, it is rarely a sign of a developmental problem.',
  possibleCauses: [
    { cause: 'Self-soothing or self-regulation (most common)', likelihood: 'common' },
    { cause: 'Falling asleep ritual (rhythmic movement disorder)', likelihood: 'common' },
    { cause: 'Frustration or seeking attention', likelihood: 'common' },
    { cause: 'Pain response (ear infection, teething)', likelihood: 'uncommon' },
    { cause: 'Developmental delay or autism spectrum disorder', likelihood: 'uncommon' },
    { cause: 'Understimulation or sensory seeking', likelihood: 'uncommon' },
  ],
  byAge: [
    { ageRange: '6-12 months', normalVariation: 'Head banging often begins around 6-9 months as a self-soothing behavior at bedtime. Episodes are typically rhythmic and last less than 15 minutes.', whenToWorry: 'Head banging combined with lack of eye contact, no babbling, not responding to name, or absence of social smiling. Also concerning if baby seems to be in pain.' },
    { ageRange: '1-2 years', normalVariation: 'Peak age for head banging. Very common especially at bedtime or during tantrums. Child is otherwise developing normally and interacting well.', whenToWorry: 'Head banging during the day (not just at sleep times), causing injury, combined with loss of developmental milestones, or lasting more than 30 minutes.' },
    { ageRange: '2-3 years', normalVariation: 'Usually begins to decrease in frequency. Most children outgrow this behavior by age 3.', whenToWorry: 'Behavior is intensifying rather than decreasing, causing visible injury, or accompanied by other repetitive behaviors and developmental concerns.' },
    { ageRange: '3+ years', normalVariation: 'Most children have outgrown head banging by this age.', whenToWorry: 'Continued head banging past age 3-4, particularly if combined with language delays, social difficulties, or self-injurious behavior.' },
  ],
  urgencyLevels: {
    emergency: [
      'Head banging has caused visible injury (bleeding, large bump, possible concussion)',
      'Head banging after a fall or head injury (could indicate pain or neurological concern)',
      'Child is inconsolable and banging head with apparent severe pain',
    ],
    urgent: [
      'Head banging combined with fever and ear pulling (possible ear infection)',
      'Self-injurious head banging causing bruising or skin breakdown',
      'Sudden onset of head banging with loss of developmental skills',
    ],
    sameDay: [
      'Head banging causing parental concern with developmental questions',
      'Increased frequency of head banging with possible illness',
    ],
    monitor: [
      'Rhythmic head banging only at bedtime in an otherwise normally developing child',
      'Brief head banging during tantrums in a toddler (self-limiting)',
      'Head banging that is decreasing over time',
    ],
  },
  homeRemedies: [
    'Ensure the sleep environment is safe \u2014 pad the crib rails or move the crib away from walls',
    'Do not give extra attention to the behavior as this can reinforce it',
    'Establish a calming bedtime routine with rocking, singing, or white noise',
    'Offer alternative rhythmic soothing (rocking chair, gentle music)',
    'Make sure baby is getting enough physical activity during the day',
    'Ensure the child is not in pain (check for teething or ear infection)',
    'Keep a consistent sleep schedule to reduce overtiredness',
    'Do not punish or restrain the child for head banging',
  ],
  relatedSymptomSlugs: ['flat-head', 'lethargy'],
  relatedIllnessSlugs: ['ear-infection', 'teething-pain'],
  relatedConcernSlugs: ['baby-head-banging-crib', 'toddler-self-soothing'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Repetitive Behaviors in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/head-neck-nervous-system/Pages/default.aspx' },
    { org: 'Sleep Foundation', citation: 'Sleep Foundation. Head Banging During Sleep in Children.', url: 'https://www.sleepfoundation.org/parasomnias/head-banging-during-sleep' },
    { org: 'AACAP', citation: 'American Academy of Child & Adolescent Psychiatry. Normal Childhood Development.', url: 'https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Normal-Childhood-Development.aspx' },
  ],
};

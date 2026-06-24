import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dry-drowning-myth-vs-real-water-danger',
  title: 'Dry Drowning Myth vs. Real Water Safety Dangers',
  category: 'medical',
  searchTerms: [
    'dry drowning baby',
    'secondary drowning',
    'dry drowning symptoms',
    'baby swallowed pool water',
    'delayed drowning signs',
    'child water aspiration',
    'is dry drowning real',
    'water in lungs baby',
    'baby choking on water',
    'after swimming symptoms child',
    'drowning delayed symptoms',
  ],
  quickAnswer:
    'The terms "dry drowning" and "secondary drowning" are not recognized medical diagnoses and have created unnecessary fear in parents. The real concern after a water incident is aspiration of water into the lungs, which can cause respiratory distress in the hours following the event. This is rare but does require medical attention. The most important water safety message is active, close supervision of children around all water. If your child has a significant water incident, watch for worsening cough, difficulty breathing, or behavior changes.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Infants can drown in as little as one inch of water. Bath time is the most common setting for infant water-related incidents. Never leave an infant unattended in a bath, even briefly, and never rely on bath seats or rings as safety devices. If your baby submerges and inhales water during a bath, monitor them closely for the next 4-8 hours for persistent coughing, rapid or labored breathing, extreme fussiness, or lethargy. Brief coughing and sputtering that resolves quickly is usually not concerning.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are the highest-risk age group for drowning because they are mobile, curious, and have no sense of water danger. Pool fencing (four-sided isolation fencing), door alarms, and constant adult supervision are essential. If your toddler has a water submersion incident (falls into pool, goes under at the beach), watch for: persistent cough that worsens over hours, increased work of breathing, vomiting, extreme tiredness, or behavioral changes. Seek medical evaluation if any of these occur.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Even children who have had swimming lessons require active, close supervision around water. Swim lessons can reduce but do not eliminate drowning risk at this age. After any water incident where your child appears to have inhaled water, the key is monitoring for respiratory symptoms over the following 4-8 hours. True post-submersion respiratory problems present with clear symptoms (breathing difficulty, persistent cough, color changes) and do not occur silently. The concept of a child dying hours later with no warning signs is a myth that has been perpetuated by viral social media posts.',
    },
  ],
  whenNormal: [
    'Your child swallowed some pool or bath water, coughed briefly, and then resumed normal behavior.',
    'Your child went underwater briefly, came up sputtering, and within a few minutes was breathing normally and acting like themselves.',
    'Your child has a brief cough after bath time that resolves within minutes.',
  ],
  whenToMention: [
    'Your child had a water submersion incident and you want guidance on what to watch for.',
    'Your child has a persistent cough hours after being in the water that is not improving.',
    'You want to discuss water safety strategies and when to start swim lessons.',
  ],
  whenToActNow: [
    'Your child has difficulty breathing, rapid breathing, or chest retractions hours after a water incident.',
    'Your child is extremely lethargic, confused, or difficult to wake after a water incident.',
    'Your child\'s lips or skin turn blue or gray, or they develop a worsening cough with foam or blood-tinged secretions.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-breathing-fast', 'baby-choking-on-food', 'fear-of-bath-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Prevention of Drowning. Pediatrics, 2019.',
      url: 'https://publications.aap.org/pediatrics/article/143/5/e20190850/37070/Prevention-of-Drowning',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Drowning Facts. CDC.',
      url: 'https://www.cdc.gov/drowning/facts/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Swim Safety Tips. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Water-Safety-And-Young-Children.aspx',
    },
  ],
};

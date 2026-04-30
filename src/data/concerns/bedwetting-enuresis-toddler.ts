import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bedwetting-enuresis-toddler',
  title: 'Bedwetting (Enuresis) in Toddlers',
  category: 'behavior',
  searchTerms: [
    'toddler bedwetting',
    'toddler wetting bed at night',
    'enuresis toddler',
    'toddler potty trained but wets bed',
    'nighttime wetting toddler',
    'child wetting bed every night',
    'toddler started wetting bed again',
    'when should toddler be dry at night',
    'nocturnal enuresis child',
    'pull ups at night toddler',
  ],
  quickAnswer:
    'Nighttime bedwetting is extremely common and developmentally normal for toddlers and young children. Nighttime bladder control is one of the last developmental milestones and depends on brain-bladder signaling that matures at different rates for every child. Most children achieve consistent nighttime dryness between ages 3 and 5, and some not until age 7 or later. Bedwetting is not a behavioral problem and is not caused by laziness or deep sleep alone.',
  byAge: [
    {
      ageRange: '2-3 years',
      context:
        'At this age, nighttime wetting is completely expected, even for children who are fully daytime potty trained. Daytime and nighttime bladder control develop separately. The hormone vasopressin, which slows urine production at night, may not yet be produced in sufficient amounts. There is no need to rush nighttime training. Using waterproof mattress covers and pull-ups at night is perfectly appropriate.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Many 3-year-olds still wet the bed regularly, and this remains within normal range. Some children begin waking up dry spontaneously as their nervous system matures. You can look for signs of readiness like waking with a dry pull-up several mornings in a row. Restricting fluids before bed and encouraging a bathroom trip at bedtime can help, but the primary factor is biological maturation.',
    },
  ],
  whenNormal: [
    'A toddler who is daytime potty trained but still wets at night',
    'Occasional dry nights mixed with wet nights as the child gradually transitions',
    'Bedwetting that runs in the family, as there is a strong genetic component',
    'A temporary return to bedwetting during stressful times like a new sibling, move, or starting daycare',
    'Needing pull-ups or training pants at night through age 4-5',
  ],
  whenToMention: [
    'Your child was consistently dry at night for 6+ months and has started wetting again (secondary enuresis)',
    'Your child is also having daytime wetting accidents after being fully trained',
    'Your child complains of pain or burning during urination',
    'Bedwetting is causing significant emotional distress for your child',
  ],
  whenToActNow: [
    'Your child has new bedwetting along with excessive thirst, increased urination during the day, or unexplained weight loss, which could indicate diabetes',
    'Your child has pain, fever, or foul-smelling urine along with bedwetting, which could suggest a urinary tract infection',
    'Your child snores loudly or has pauses in breathing during sleep along with bedwetting, which may indicate sleep apnea',
  ],
  relatedMilestones: ['24-months', '36-months'],
  showSelfReferral: false,
  relatedConcernSlugs: ['potty-training-regression', 'potty-training-refusal', 'toddler-not-potty-trained-by-3'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bedwetting in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/genitourinary-tract/Pages/Bedwetting.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Nocturnal Enuresis. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatricsinreview/article/35/8/327/32837/Nocturnal-Enuresis',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Bladder Control Problems & Bedwetting in Children.',
      url: 'https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-control-problems-bedwetting-children',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'potty-training-refusal',
  title: 'Potty Training Refusal',
  category: 'behavior',
  searchTerms: [
    'toddler refuses to potty train',
    'child won\'t use toilet',
    'potty training refusal',
    'toddler refuses to sit on potty',
    'my toddler won\'t potty train',
    'child not interested in potty',
    '3 year old refuses potty',
    'toddler screams about potty',
    'potty training power struggle',
    'when to worry about potty training refusal',
  ],
  quickAnswer:
    'Potty training refusal is one of the most common challenges parents face with toddlers. Many children simply are not ready when parents expect them to be, and pushing too hard often makes the resistance worse. The average age for potty training readiness is between 2 and 3 years, but some children are not truly ready until closer to 3.5 or even 4. Backing off, reducing pressure, and waiting for signs of readiness is usually the most effective strategy.',
  byAge: [
    {
      ageRange: '18 months - 2 years',
      context:
        'Very few children are truly ready for potty training before age 2. While some parents start early, many pediatric experts recommend waiting for clear readiness signs: staying dry for 2-hour stretches, showing interest in the toilet, being able to follow simple instructions, and being bothered by wet or dirty diapers. If your child shows no interest at this age, that is completely normal.',
    },
    {
      ageRange: '2-2.5 years',
      context:
        'Some children show readiness around this age, but many do not. If your child resists sitting on the potty, screams, or tenses up, they may not be ready yet. Taking a break for 2-4 weeks and trying again later is often the most effective approach. Making the potty available without pressure ("The potty is here whenever you want to try") keeps the door open without creating a power struggle.',
    },
    {
      ageRange: '2.5-3.5 years',
      context:
        'This is the most common age range for successful potty training. If your child is still refusing, consider whether there is anxiety, a past negative experience (such as a painful bowel movement), or a power struggle at play. Let your child choose their own underwear, read potty books together, and let them watch older siblings or peers use the toilet. Avoid punishment, bribes, or expressions of disappointment.',
    },
    {
      ageRange: '3.5-4+ years',
      context:
        'If your child is over 3.5 and still strongly refusing potty training, it is worth discussing with your pediatrician. While some children are simply later developers, your doctor can check for constipation, stool withholding, or sensory issues that may be contributing. Many children who resist longest are actually quite aware of their body signals but have anxiety or need-for-control issues around toileting that can be addressed with the right approach.',
    },
  ],
  whenNormal: [
    'Your child is under 3 and simply does not seem interested in the potty yet',
    'Your child resists potty training after you started before they showed clear readiness signs',
    'Refusal coincides with a stressful time like a new sibling, new school, or move',
    'Your child will sit on the potty sometimes but refuses other times - inconsistency is normal early on',
  ],
  whenToMention: [
    'Your child is over 3.5 years old and shows no interest or readiness signs despite a low-pressure approach',
    'Your child seems to be withholding stool, which is causing constipation or pain, creating a cycle of avoidance',
    'Refusal is accompanied by extreme anxiety, fear, or distress around anything related to the toilet',
  ],
  whenToActNow: [
    'Your child is having painful bowel movements, has blood in their stool, or has not had a bowel movement in several days',
    'Your child develops new fear of the bathroom combined with other behavioral changes that concern you',
  ],
  relatedMilestones: [
    'social-emotional-independence',
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toilet Training. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toilet Training Resistance. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/Toilet-Training-Resistance.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Bladder Control Problems & Bedwetting in Children.',
      url: 'https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-control-problems-bedwetting-children',
    },
  ],
};

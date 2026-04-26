import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'potty-training-regression',
  title: 'Potty Training Regression',
  category: 'behavior',
  searchTerms: [
    'potty training regression',
    'toddler having accidents again',
    'potty trained child wetting pants',
    'toddler refusing potty after being trained',
    'why is my toddler having accidents again',
    'potty training setback',
    'potty regression after new baby',
    'toddler peeing in pants again',
    'potty training backslide',
    'child was potty trained now having accidents',
  ],
  quickAnswer:
    'Potty training regression is extremely common and almost never a cause for medical concern. Many children who were reliably using the toilet start having accidents again during times of stress, change, illness, or developmental leaps. This is a temporary setback, not a failure. With patience and a calm, supportive approach, most children return to their previous potty skills within a few weeks.',
  byAge: [
    {
      ageRange: '2-2.5 years',
      context:
        'At this age, many children are just getting started with potty training, and what looks like regression may actually be normal inconsistency. Bladder control is still maturing, and attention is easily diverted by play. Accidents are expected and do not mean your child has regressed. Keep things low-pressure and celebrate successes without making a big deal of accidents.',
    },
    {
      ageRange: '2.5-3 years',
      context:
        'This is the most common age for true potty training regression. A new sibling, starting daycare, moving to a new home, illness, travel, or even a new developmental burst can all trigger a setback. The best approach is to go back to frequent potty reminders without shaming, offer praise for successes, and avoid punishment for accidents. Some children benefit from a brief return to pull-ups during high-stress periods.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Regression at this age is often stress-related and may coincide with starting preschool, a family change, or a period of anxiety. Emotional support and consistency are key. Avoid asking "Do you need to go potty?" (they will almost always say no) and instead use statements like "It is time to try the potty before we leave." If daytime regression persists beyond 3-4 weeks, mention it to your pediatrician.',
    },
    {
      ageRange: '4-5 years',
      context:
        'If a child who was fully potty trained for months suddenly starts having frequent daytime accidents at this age, it is worth a conversation with your pediatrician. While stress is still the most likely cause, they may want to rule out urinary tract infections, constipation (a very common cause of accidents), or other medical factors. Nighttime wetting at this age is still considered normal and is a separate issue from daytime regression.',
    },
  ],
  whenNormal: [
    'Your child is going through a major life change like a new sibling, new school, or a move',
    'Regression started during or after an illness and is resolving as your child recovers',
    'Accidents happen mainly when your child is deeply absorbed in play or excited',
    'Your child is under 4 years old and the regression has lasted less than a few weeks',
    'Nighttime accidents continue even though daytime training is solid - this is a separate developmental process',
  ],
  whenToMention: [
    'Daytime regression has lasted more than 3-4 weeks despite consistent support and there is no obvious stressor',
    'Your child complains of pain or burning during urination or is urinating much more frequently than usual',
    'Your child is also struggling with constipation, which can put pressure on the bladder and cause accidents',
  ],
  whenToActNow: [
    'Your child has blood in their urine, fever with urinary symptoms, or is in obvious pain when urinating',
    'Regression is accompanied by other sudden behavioral changes, extreme fear around toileting, or signs that something distressing may have happened',
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
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Bladder Control Problems & Bedwetting in Children.',
      url: 'https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-control-problems-bedwetting-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Potty Training Regression: What to Do When Your Child Has Setbacks. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/Toilet-Training-Setbacks.aspx',
    },
  ],
};

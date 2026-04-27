import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'high-choking-risk-foods-baby',
  title: 'High Choking Risk Foods for Babies and Toddlers',
  category: 'feeding',
  searchTerms: ['choking hazard foods baby','foods that cause choking baby','high choking risk foods toddler','baby choking prevention','dangerous foods for babies','grapes choking hazard','hot dog choking baby','popcorn baby choking','nuts baby choking hazard','what foods can baby choke on','baby led weaning choking risk','safe food sizes for baby'],
  quickAnswer: 'Choking is the leading cause of injury-related death in children under 4. The highest risk foods are round, firm, and the same diameter as a child\'s airway - whole grapes, hot dogs, whole cherry tomatoes, raw carrots, popcorn, whole nuts, and hard candy. Always cut round foods lengthwise into strips (never circles), cook hard foods until soft, and supervise all eating. Learning to distinguish between gagging (normal, noisy, self-resolving) and choking (silent, unable to breathe) can save your child\'s life.',
  byAge: [
    { ageRange: '6-9 months', context: 'When starting solids, all foods should be soft enough to mash between your fingers. Safe first foods include well-cooked sweet potato strips, ripe avocado, banana, soft-cooked broccoli florets, and well-cooked pasta. Avoid hard, raw, round, or sticky foods entirely. If doing baby-led weaning, food should be cut into finger-length strips that the baby can grip. Purees are also safe. Never leave your baby unattended while eating.' },
    { ageRange: '9-12 months', context: 'Your baby can handle more textures now but still needs foods to be soft and appropriately sized. Cut grapes and cherry tomatoes lengthwise into quarters. Shred or thinly slice meats. Avoid popcorn, whole nuts, raw carrots, chunks of cheese, and sticky foods like large spoonfuls of nut butter. Toast strips with thin nut butter are fine. Always have your baby seated upright in a high chair while eating.' },
    { ageRange: '12-24 months', context: 'Toddlers have more teeth and better chewing skills, but their airway is still small and their chewing is inconsistent. Continue cutting grapes and cherry tomatoes lengthwise. Hot dogs should be cut lengthwise and then into small pieces (never round coins). Raw carrots, celery, and apples should be grated, cooked, or cut very thin. Popcorn, whole nuts, hard candy, and large chunks of meat remain dangerous until at least age 4.' },
    { ageRange: '2-4 years', context: 'The AAP recommends continuing choking precautions until age 4. Even though your child can chew well, they often eat while running, laughing, or talking, which increases choking risk. Grapes should still be cut. Popcorn is not recommended until age 4. Hard raw vegetables should be cut thin or cooked. Teach your child to sit while eating, take small bites, and chew thoroughly. Every caregiver should know infant/child CPR and the Heimlich maneuver.' },
  ],
  whenNormal: ['Your baby gags on new textures - gagging is a protective reflex that prevents choking and is loud and visible','Your baby coughs while eating and then recovers quickly - this means their airway protective reflexes are working','Your toddler occasionally spits out food that is too large or too hard to chew'],
  whenToMention: ['You are unsure which foods are safe to introduce at your baby\'s current age and stage','Your baby has frequent gagging episodes that seem excessive or distressing','Your baby has a known swallowing difficulty or has been evaluated by a feeding therapist'],
  whenToActNow: ['Your baby is choking - silent, unable to cry or cough, turning blue or pale - perform back blows (under 1 year) or abdominal thrusts (over 1 year) and call 911','Your baby choked and recovered but is now coughing persistently, wheezing, or drooling - a piece of food may be lodged in the airway','Your baby swallowed a small object (coin, button battery, small toy) - seek emergency evaluation immediately'],
  relatedMilestones: ['feeding-solids-introduction'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-choking-vs-gagging-difference','allergen-introduction-timing','toddler-wont-eat-vegetables'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Choking Prevention. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Choking Hazards. Injury Prevention.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/choking-hazards.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Prevention of Choking Among Children. Pediatrics. 2010.', url: 'https://publications.aap.org/pediatrics/article/125/3/601/72562/Prevention-of-Choking-Among-Children' },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-fussy-evening-witching-hour',
  title: 'Evening Fussiness (The Witching Hour)',
  category: 'behavior',
  searchTerms: ['baby witching hour', 'evening fussiness baby', 'baby cries every evening', 'newborn fussy at night', 'baby inconsolable evening', 'witching hour newborn', 'baby crying 5pm every day', 'evening colic', 'baby cluster feeding evening', 'why is baby fussy at night'],
  quickAnswer: 'Many babies have a predictable period of increased fussiness in the late afternoon or evening, often called the "witching hour." This is very common, typically peaks around 6 weeks, and usually resolves by 3-4 months. It is not caused by anything you are doing wrong and does not mean something is wrong with your baby.',
  byAge: [
    { ageRange: '0-1 month', context: 'The witching hour typically begins in the late afternoon or early evening (often 5-11 PM) and involves prolonged crying or fussiness that is difficult to soothe. This is one of the most common and exhausting experiences for new parents. The cause is not fully understood but may relate to nervous system overstimulation from the day, normal developmental crying that peaks at this age, and a natural low point in maternal milk supply in the evening. Strategies that may help: skin-to-skin contact, swaddling, white noise or shushing, gentle motion (rocking, swinging, walking), cluster feeding (offering the breast frequently), dimming lights and reducing stimulation, and babywearing. It is okay to take a break: put baby safely in their crib and step away for a few minutes if you feel overwhelmed.' },
    { ageRange: '1-3 months', context: 'Evening fussiness typically peaks around 6 weeks of age and can last 2-3 hours per evening. This is a difficult period but it is temporary. By 3 months, most babies show significant improvement. If the crying is intense, lasts more than 3 hours a day for more than 3 days a week for more than 3 weeks, it may meet the criteria for colic, which is still normal but may benefit from discussion with your pediatrician. Remember that this phase passes.' },
    { ageRange: '3-6 months', context: 'Evening fussiness typically resolves or greatly improves by 3-4 months. If it persists, consider whether baby may be overtired (watch wake windows and nap schedules), overstimulated, or hungry. Some fussiness around developmental leaps is normal.' },
    { ageRange: '6-12 months', context: 'The classic witching hour should be resolved. Evening fussiness at this age is more likely related to overtiredness, teething, hunger, or separation anxiety. Establishing a consistent bedtime routine helps.' },
  ],
  whenNormal: ['Predictable fussy period in the late afternoon or evening', 'Fussiness that peaks around 6 weeks and improves by 3-4 months', 'Baby is otherwise healthy, feeding well, and gaining weight', 'Some soothing techniques work at least partially'],
  whenToMention: ['Fussiness lasts more than 3 hours per day, more than 3 days per week', 'You are feeling overwhelmed, exhausted, or unable to cope with the crying', 'Baby seems to be in pain: arching back, pulling up legs, turning red'],
  whenToActNow: ['Crying is accompanied by fever, vomiting, bloody stool, or poor feeding suggesting illness', 'You feel you might lose control or hurt your baby: call for help or put baby down safely and step away', 'Baby is inconsolable and shows signs of acute distress: high-pitched scream, bulging fontanelle, or lethargy'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Coping with Colic. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Colic.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Colic: Symptoms and Causes.', url: 'https://www.mayoclinic.org/diseases-conditions/colic/symptoms-causes/syc-20371074' },
  ],
  relatedConcernSlugs: ['newborn-wont-be-put-down', 'cluster-feeding-normal', 'newborn-irregular-sleep-patterns'],
};

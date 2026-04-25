import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'abdominal-distension-baby',
  title: 'My Baby\'s Belly Looks Swollen',
  category: 'digestive',
  searchTerms: [
    'baby belly looks swollen',
    'baby bloated stomach',
    'distended belly baby',
    'baby stomach hard and swollen',
    'why is my baby\'s belly so big',
    'baby belly distension',
    'baby tummy looks bloated',
    'baby pot belly normal',
  ],
  quickAnswer: 'A rounded, slightly protruding belly is completely normal in babies and toddlers due to immature abdominal muscles and their proportionally larger organs. However, if the belly becomes suddenly swollen, feels hard and tight, or is accompanied by pain, vomiting, or changes in bowel movements, it needs medical evaluation as it could signal gas buildup, constipation, or rarely, something more serious.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Newborns naturally have round, protruding bellies  -  this is completely normal anatomy. Their abdominal muscles are weak and their liver is proportionally large. After feeding, the belly will look even rounder and fuller, which is expected. However, the belly should feel soft when baby is calm and relaxed. Some fullness from gas is normal, but the belly shouldn\'t be rock-hard or seem painful to touch.',
    },
    {
      ageRange: '3-12 months',
      context: 'The "pot belly" look continues throughout the first year as baby\'s core muscles are still developing. This is especially noticeable when baby starts sitting and standing. A soft, round belly is normal. Watch for changes: if baby\'s belly suddenly becomes much more swollen than usual, feels hard and tense, or baby seems uncomfortable, it could indicate gas buildup, constipation, or something that needs checking.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers often maintain that characteristic round belly look, especially after meals. As they start walking more, core muscles gradually strengthen, but the belly will still protrude more than an older child\'s. If your toddler\'s belly seems more swollen than usual, consider recent diet changes, constipation, or whether they\'ve been swallowing air while drinking from sippy cups.',
    },
    {
      ageRange: '2-3 years',
      context: 'The pot belly appearance usually becomes less pronounced as core strength develops, but many toddlers still have a rounded belly, especially after big meals. This is normal. True abdominal distension at this age  -  where the belly is noticeably larger, tight, and possibly uncomfortable  -  should be evaluated, especially if accompanied by changes in appetite, bowel movements, or behavior.',
    },
  ],
  whenNormal: [
    'Rounded, protruding belly that\'s soft to the touch when baby is relaxed',
    'Belly that looks fuller right after feeding and less full before feeds',
    'Belly that rises and falls normally with breathing',
    'Baby is comfortable, feeding well, and having normal bowel movements',
    'Consistent belly size from day to day, just generally round/full',
  ],
  whenToMention: [
    'Belly seems larger than usual but baby is otherwise acting normally',
    'Frequent gas or signs of discomfort but baby is still feeding and pooping',
    'You\'re concerned about the size or firmness of baby\'s belly',
    'Baby hasn\'t pooped in a few days and belly seems fuller',
  ],
  whenToActNow: [
    'Belly suddenly becomes hard, tight, and swollen',
    'Baby is in obvious pain, crying inconsolably when belly is touched',
    'Accompanied by vomiting (especially green/bile or blood-tinged)',
    'Baby hasn\'t had a bowel movement in 24+ hours (newborn) or several days (older baby) AND belly is distended',
    'Belly is swollen and baby refuses to eat or seems lethargic',
    'You can see or feel a lump or mass in the belly',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation: 'Normal Infant and Toddler Anatomy: The Pot Belly (2024)',
      url: 'https://www.aap.org',
    },
    {
      org: 'Children\'s Hospital of Philadelphia',
      citation: 'Abdominal Distension in Children: When to Worry (2024)',
      url: 'https://www.chop.edu',
    },
    {
      org: 'Mayo Clinic',
      citation: 'Swollen Belly in Babies: Normal vs. Concerning Signs (2024)',
      url: 'https://www.mayoclinic.org',
    },
  ],
};

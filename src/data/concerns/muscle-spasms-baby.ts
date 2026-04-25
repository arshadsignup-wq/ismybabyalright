import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'muscle-spasms-baby',
  title: 'My Baby Has Muscle Spasms',
  category: 'physical',
  searchTerms: [
    'baby muscle spasms',
    'infant muscle twitching',
    'baby body jerks',
    'newborn muscle spasms',
    'baby sudden twitches',
    'baby spasm while sleeping',
    'infantile spasms',
    'baby body tensing',
  ],
  quickAnswer:
    'Occasional muscle twitches or jerks during sleep are completely normal in babies and are usually just part of active REM sleep. However, certain patterns of muscle spasms  -  especially clusters of repetitive jerks or "jackknife" movements when your baby is awake  -  can signal a serious condition called infantile spasms that needs immediate evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Random muscle twitches during sleep are very common and normal at this age. You might see your baby\'s arm or leg suddenly jerk, or their whole body startle. This happens during REM sleep as your baby\'s brain is developing. As long as the twitches are brief, happen mainly during sleep, and your baby wakes up normally and acts fine, there\'s nothing to worry about. However, if you see clusters of repetitive jerking movements (same motion over and over, several in a row), especially when your baby just wakes up, mention this to your doctor right away.',
    },
    {
      ageRange: '4-12 months',
      context:
        'This is the most common age range for a rare but serious condition called infantile spasms. These look different from normal sleep twitches  -  they happen in clusters, often right after waking, and may look like your baby is suddenly bending forward ("jackknifing"), throwing their arms out, or tensing their whole body for 1-2 seconds at a time. The spasms repeat every 5-10 seconds in groups of 5-20. If you see anything like this, contact your pediatrician immediately. Infantile spasms are a medical emergency and require prompt treatment to prevent developmental delays.',
    },
    {
      ageRange: '12+ months',
      context:
        'Occasional muscle twitches during sleep are still normal at this age. However, any new pattern of repetitive muscle spasms or jerking movements  -  especially if they happen in clusters, are always the same movement, or your child seems "absent" or unable to respond during them  -  needs immediate medical evaluation.',
    },
  ],
  whenNormal: [
    'Your baby has occasional random muscle twitches during sleep that are brief and don\'t repeat.',
    'Your baby wakes up normally, is alert, and acts completely fine after sleep twitches.',
    'The twitches are different each time (one time it\'s an arm, another time a leg) and don\'t follow a pattern.',
    'Your baby is meeting all developmental milestones and seems healthy and happy.',
  ],
  whenToMention: [
    'You\'re seeing muscle twitches or jerks that seem more frequent or intense than you\'d expect.',
    'Spasms happen mainly when your baby is awake rather than asleep.',
    'You\'re not sure whether what you\'re seeing is normal or concerning  -  it\'s always better to ask.',
  ],
  whenToActNow: [
    'You see clusters of repetitive muscle spasms (same movement over and over, several in a row) especially right after waking  -  this is a red flag for infantile spasms.',
    'Spasms look like sudden bending forward (head to knees), sudden arm flinging, or sudden whole-body tensing that repeats in groups.',
    'Your baby seems to lose awareness or "tune out" during spasm episodes.',
    'Spasms are accompanied by developmental regression (losing skills your baby once had), loss of eye contact, or irritability.',
  ],
  relatedMilestones: [
    'gross-motor-head-control',
    'social-eye-contact',
    'social-social-smile',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'Epilepsy Foundation',
      citation:
        'Epilepsy Foundation  -  Infantile Spasms: What Parents Need to Know',
      url: 'https://www.epilepsy.com/learn/types-seizures/infantile-spasms',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Seizures in Infants and Children',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/seizures/Pages/Seizures-in-Children.aspx',
    },
    {
      org: 'Child Neurology Foundation',
      citation:
        'Child Neurology Foundation  -  West Syndrome and Infantile Spasms',
      url: 'https://www.childneurologyfoundation.org/disorder/infantile-spasms/',
    },
  ],
};

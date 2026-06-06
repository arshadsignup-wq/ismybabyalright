import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-sleep-laughing', title: 'Baby Laughs in Their Sleep', category: 'sleep',
  searchTerms: ['baby laughing in sleep','baby giggling while sleeping','baby smiling sleep','baby chuckling sleep','why does baby laugh in sleep','sleep laughing baby','baby happy sounds sleep','baby laughing eyes closed','baby giggle during sleep','infant laughing while asleep'],
  quickAnswer: 'Sleep laughing (hypnogely) is a normal phenomenon in babies and children. It occurs during REM (active) sleep and is thought to be related to normal brain development and processing. It is charming and completely harmless. Enjoy it.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns often smile and sometimes laugh during sleep. These are reflexive expressions during REM sleep rather than responses to dreams. They reflect normal neurological activity and are a sign of healthy brain development.' },
    { ageRange: '3-12 months', context: 'As your baby develops social smiling and laughter during the day, you may hear more laughter during sleep as their brain processes daytime experiences. This is a normal and delightful part of development.' },
    { ageRange: '12-24 months', context: 'Toddlers may laugh, talk, or mumble during sleep as their dream life becomes more complex. These episodes are brief and harmless.' },
    { ageRange: '2-5 years', context: 'Sleep laughing remains common and normal. If your child has happy dreams they can sometimes describe them in the morning, which can be wonderful to hear about.' },
  ],
  whenNormal: ['Brief episodes of laughing or giggling during sleep','Baby is otherwise sleeping well and seems fine','Laughing occurs during active REM phases of sleep','Episodes are brief and baby continues sleeping'],
  whenToMention: ['Laughing episodes are very frequent, prolonged, or seem forced or mechanical','Episodes are accompanied by unusual movements or stiffening','Laughing during sleep is a new behavior in a child who previously did not do this along with other concerning behavioral changes'],
  whenToActNow: ['Laughing episodes are accompanied by seizure-like movements such as stiffening, jerking, or eye rolling','Your child seems confused, distressed, or unresponsive after episodes'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'NSF', citation: 'National Sleep Foundation. Baby Sleep and REM. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/baby-sleep' },
    { org: 'NIH', citation: 'Galland BC et al. Normal sleep patterns in infants and children. Sleep Med Rev. 2012;16(3):213-222.', url: 'https://pubmed.ncbi.nlm.nih.gov/21784676/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Your Baby Sleep. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx' },
  ],
  relatedConcernSlugs: ['baby-sleep-crying-eyes-closed','baby-moaning-in-sleep'],
};

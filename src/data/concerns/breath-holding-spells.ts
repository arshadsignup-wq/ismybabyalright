import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breath-holding-spells',
  title: 'My Baby Holds Their Breath Until They Turn Blue',
  category: 'behavior',
  searchTerms: [
    'baby holds breath until blue',
    'breath holding spells baby',
    'baby turns blue during tantrum',
    'toddler holds breath and passes out',
    'is breath holding dangerous',
    'baby stops breathing when crying',
    'breath holding spells treatment',
    'baby holds breath and faints',
    'why does my baby hold their breath',
    'breath holding cyanotic spell',
  ],
  quickAnswer:
    'Breath-holding spells are frightening to watch but almost never dangerous. They happen in about 5% of healthy children, usually between ages 6 months and 6 years, and are involuntary responses to strong emotions like frustration, anger, or fear. Your child is not doing this on purpose and cannot control it.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Breath-holding spells can begin as early as 6 months, though they are more common after the first birthday. At this age, they are often triggered by pain (like a fall or bump) rather than frustration. Your baby cries, then suddenly stops breathing, may turn blue or pale, and might briefly go limp or stiff. The episode typically lasts less than a minute before breathing resumes automatically.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is when breath-holding spells are most common, often triggered by frustration or being told "no." The typical pattern: your toddler starts crying intensely, then stops breathing and may turn blue (cyanotic spell) or pale (pallid spell). Some children briefly lose consciousness or have a few seconds of stiffening. While terrifying for parents, the body\'s automatic reflexes always restart breathing.',
    },
    {
      ageRange: '2-4 years',
      context:
        'Breath-holding spells often continue through the toddler years but may start to become less frequent as your child develops better emotional regulation and communication skills. The spells remain involuntary  -  your child cannot "decide" to hold their breath, and trying to prevent tantrums to avoid spells often backfires. Most children outgrow these completely by age 4-6.',
    },
    {
      ageRange: '4-6 years',
      context:
        'Most children have outgrown breath-holding spells by this age. If they continue or start for the first time after age 5, your doctor may want to rule out other causes like seizures or cardiac issues. Keep a video of an episode if possible  -  this can be very helpful for diagnosis.',
    },
  ],
  whenNormal: [
    'The spell lasts less than a minute before breathing automatically resumes',
    'Your child returns to normal immediately after breathing resumes with no confusion or drowsiness',
    'Spells are triggered by specific events like frustration, fear, anger, or pain',
    'Your child is developing normally in all other areas',
    'The spell follows a consistent pattern: cry → breath hold → brief color change → automatic breathing recovery',
  ],
  whenToMention: [
    'Spells are happening more than 1-2 times per week or are increasing in frequency',
    'Your child seems drowsy or confused after a spell rather than immediately returning to normal',
    'Spells began after age 4 or continue past age 6',
    'You have a family history of heart problems or seizure disorders',
  ],
  whenToActNow: [
    'Your child has rhythmic jerking movements that last more than a few seconds during or after the spell  -  this could be a seizure rather than a breath-holding spell',
    'Your child does not resume breathing within 60 seconds or appears to need help to start breathing again',
    'The spell happens without any trigger (no crying, pain, or emotion beforehand) or happens during sleep',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breath-Holding Spells. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Breath-Holding-Spells.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Breath-Holding Spells in Children. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/000983.htm',
    },
    {
      org: 'AAP',
      citation:
        'DiMario FJ. Breath-holding spells in childhood. American Journal of Diseases of Children. 1992;146(1):125-131.',
      url: 'https://jamanetwork.com/journals/jamapediatrics/article-abstract/515488',
    },
  ],
};

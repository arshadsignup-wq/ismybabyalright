import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'confusional-arousals',
  title: 'My Baby Wakes Up Confused and Crying',
  category: 'sleep',
  searchTerms: [
    'baby wakes up crying inconsolably',
    'baby wakes up confused and crying',
    'confusional arousals baby',
    'baby wakes up screaming doesn\'t recognize me',
    'baby wakes up disoriented',
    'baby crying hysterically after waking',
    'baby seems confused when waking',
    'night terrors vs confusional arousals',
    'baby wakes up upset and can\'t be comforted',
    'toddler wakes up crying and pushing me away',
  ],
  quickAnswer:
    'Confusional arousals happen when your baby partially wakes during a transition between sleep stages but isn\'t fully conscious. They may cry, seem upset, push you away, or not recognize you for several minutes before either fully waking or returning to sleep. This is a type of parasomnia that\'s developmentally normal and not harmful.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Confusional arousals can begin as early as 6 months when sleep architecture is maturing. Your baby may wake crying inconsolably 1-3 hours after falling asleep, seem disoriented, and not be soothed by usual comfort measures. They\'re caught between sleep and wake, so they\'re not fully aware of their surroundings. Episodes typically last 5-15 minutes and your baby won\'t remember them. Trying to wake your baby fully or pick them up may prolong the episode.',
    },
    {
      ageRange: '12-18 months',
      context:
        'These episodes may become more noticeable as your toddler becomes more verbal and mobile. During a confusional arousal, your toddler may sit up, cry, thrash, push you away, or say words without seeming to recognize you. Their eyes may be open but they\'re not truly awake. Triggers include overtiredness, illness, sleeping in a new place, or disrupted nap schedules. Most children outgrow this, but it can persist into toddlerhood and early childhood.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Older toddlers experiencing confusional arousals may talk, walk around, or seem very upset but be impossible to console because they\'re not fully conscious. Unlike nightmares, they don\'t remember the episode in the morning. If these episodes are frequent (several times per week) or very prolonged, ensure your toddler is getting adequate sleep, has a consistent bedtime routine, and isn\'t overtired. Mention frequent episodes to your pediatrician.',
    },
  ],
  whenNormal: [
    'Your baby wakes 1-3 hours after falling asleep, seems confused or upset, but settles within 5-20 minutes',
    'Your baby doesn\'t remember the episode the next day',
    'Episodes are occasional, not every night, and may cluster during periods of disrupted sleep',
    'Your baby is otherwise healthy, developing normally, and getting adequate sleep overall',
    'Episodes seem worse when your baby is overtired, sick, or off their usual schedule',
  ],
  whenToMention: [
    'Confusional arousals happen very frequently, such as multiple times per night or every single night',
    'Episodes last longer than 30-45 minutes',
    'Your baby seems excessively tired during the day or you\'re concerned they\'re not getting restorative sleep',
    'Episodes involve rhythmic movements, stiffening, or anything that concerns you about seizure activity',
    'You notice snoring, gasping, or pauses in breathing during sleep, which can trigger arousals',
  ],
  whenToActNow: [
    'Your baby has rhythmic jerking, stiffening, or loss of consciousness that you suspect is a seizure',
    'Your baby is unresponsive, has difficulty breathing, or has a blue or grey color',
    'Your baby seems to be in severe pain or distress, or you suspect injury',
    'Episode is accompanied by high fever, vomiting, or signs of serious illness',
  ],
  relatedMilestones: [
    'sleep-architecture-maturation',
    'deep-sleep-transitions',
    'parasomnias-development',
    'sleep-consolidation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Night Terrors and Confusional Arousals. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/sleep/Pages/Night-Terrors.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Parasomnias in Children. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/parasomnias',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep Problems in Children. Pediatrics in Review, 2021.',
      url: 'https://publications.aap.org/pediatricsinreview/article/42/3/136/179781/Sleep-Problems-in-Children',
    },
  ],
};

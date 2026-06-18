import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'benign-neonatal-sleep-myoclonus',
  title: 'My Newborn Jerks and Twitches During Sleep',
  category: 'medical',
  searchTerms: [
    'baby jerking in sleep',
    'newborn twitching while sleeping',
    'baby shaking during sleep seizure',
    'neonatal sleep myoclonus',
    'baby rhythmic jerking sleep',
    'newborn movements during sleep normal',
    'baby convulsions while sleeping',
    'infant myoclonus benign',
    'baby jerking arms legs sleep',
    'newborn tremors during sleep',
  ],
  quickAnswer:
    'Benign neonatal sleep myoclonus is a harmless condition where newborns have rhythmic jerking or twitching movements during sleep. It looks alarming and can resemble seizures, but it is completely normal and resolves on its own within the first year. The key distinguishing feature is that the movements stop immediately when the baby wakes up.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'Benign neonatal sleep myoclonus typically begins within the first two weeks of life. You may notice rhythmic jerking of the arms, legs, or whole body that occurs only during sleep. The movements can last a few seconds to several minutes and may repeat in clusters. This is very common and does not indicate any neurological problem.',
    },
    {
      ageRange: '2 weeks - 3 months',
      context:
        'The jerking episodes may continue during this period and can be quite frequent, sometimes occurring multiple times during a single nap. The key reassuring sign is that if you gently wake your baby or the baby wakes on their own, the movements stop immediately. True seizures do not stop when a baby is woken. Your baby\'s EEG, if performed, will be completely normal.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most babies begin to outgrow sleep myoclonus during this period. The episodes typically become less frequent and less intense. If your baby is developing normally, feeding well, and the movements only happen during sleep, this is following the expected pattern of resolution.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, benign neonatal sleep myoclonus has usually resolved completely. If your baby is still having significant jerking movements during sleep at this age, your pediatrician may want to investigate further to ensure there is no other cause, though late resolution is still possible.',
    },
  ],
  whenNormal: [
    'The jerking or twitching only happens during sleep and stops when baby wakes up',
    'Your baby is otherwise healthy, feeding well, and developing normally',
    'The movements are rhythmic and involve both sides of the body',
    'Your baby appears completely normal and alert when awake',
    'The episodes began within the first two weeks of life',
  ],
  whenToMention: [
    'You want your pediatrician to confirm that the movements are benign sleep myoclonus rather than seizures',
    'The episodes are very frequent or seem to be increasing in intensity',
    'You are unsure whether the movements are happening only during sleep or also when your baby is awake',
  ],
  whenToActNow: [
    'The jerking or twitching continues after your baby wakes up or occurs while your baby is clearly awake and alert',
    'Your baby seems less responsive, feeds poorly, or is not meeting developmental milestones',
    'The movements only affect one side of the body or are accompanied by eye rolling, color changes, or breathing difficulties',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Benign Neonatal Sleep Myoclonus. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK557667/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Neonatal Seizures and Nonepileptic Paroxysmal Events. NeoReviews, 2021.',
      url: 'https://publications.aap.org/neoreviews/article/22/2/e79/27048',
    },
    {
      org: 'Cleveland Clinic',
      citation:
        'Cleveland Clinic. Myoclonus in Infants: When to Worry.',
      url: 'https://my.clevelandclinic.org/health/diseases/17748-myoclonus',
    },
  ],
};

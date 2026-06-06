import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-swaddling-safety',
  title: 'Safe Swaddling Practices',
  category: 'medical',
  searchTerms: ['swaddling newborn safely', 'how to swaddle baby', 'swaddle too tight', 'swaddling hip dysplasia', 'when to stop swaddling', 'swaddle blanket safety', 'swaddling SIDS', 'baby breaks out of swaddle', 'swaddling for sleep', 'safe swaddle technique'],
  quickAnswer: 'Swaddling can soothe newborns by mimicking the snug feeling of the womb, but it must be done safely. The swaddle should be snug around the chest but allow room at the hips for natural movement. Stop swaddling as soon as baby shows any signs of rolling, typically around 2-4 months.',
  byAge: [
    { ageRange: '0-1 month', context: 'Swaddling can help calm a fussy newborn and promote sleep by reducing the startle (Moro) reflex. For safe swaddling: use a thin, breathable blanket or a commercial swaddle product; keep it snug around the arms and chest but loose around the hips and legs to allow hip flexion and movement (tight swaddling of the legs increases hip dysplasia risk); always place a swaddled baby on their back; the swaddle should not cover the face or come loose during sleep; and stop if baby shows any discomfort or overheating. Never swaddle if the baby can roll.' },
    { ageRange: '1-3 months', context: 'Continue swaddling if it helps your baby sleep, but watch carefully for signs of rolling. Once baby shows ANY sign of attempting to roll (even just rocking side to side), stop swaddling immediately, as a swaddled baby who rolls face-down cannot use their arms to push up or reposition. Transition to a sleep sack or wearable blanket instead.' },
    { ageRange: '3-6 months', context: 'Most babies should no longer be swaddled by this age, as rolling ability develops. Use a wearable blanket or sleep sack for warmth instead. These allow free arm movement while keeping baby warm without loose blankets.' },
    { ageRange: '6-12 months', context: 'Swaddling is no longer appropriate. Use a sleep sack if extra warmth is needed. Baby should have free movement of arms and legs during sleep.' },
  ],
  whenNormal: ['Baby sleeps more calmly when swaddled in the first weeks', 'Baby occasionally breaks one arm out of the swaddle', 'Baby seems to outgrow swaddling around 2-4 months', 'Mild fussiness during swaddling that settles once baby is wrapped'],
  whenToMention: ['You are unsure if you are swaddling correctly', 'Baby seems uncomfortable or overheated when swaddled', 'Baby has been diagnosed with or screened for hip dysplasia and you want guidance on swaddling'],
  whenToActNow: ['A swaddled baby has rolled onto their stomach', 'Baby appears to have difficulty breathing while swaddled', 'Baby is overheating: hot to touch, sweating, flushed, or rapid breathing while swaddled'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Swaddling: Is it Safe? HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Swaddling-Is-it-Safe.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. International Hip Dysplasia Institute: Swaddling and Hip Health.', url: 'https://hipdysplasia.org/developmental-dysplasia-of-the-hip/hip-healthy-swaddling/' },
  ],
  relatedConcernSlugs: ['newborn-safe-sleep-positioning', 'newborn-overdressing-overheating', 'hip-dysplasia'],
};

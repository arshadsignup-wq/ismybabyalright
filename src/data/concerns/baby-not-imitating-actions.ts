import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-imitating-actions',
  title: 'Baby Not Imitating Actions or Gestures',
  category: 'behavior',
  searchTerms: ['baby not imitating','baby won\'t copy actions','baby doesn\'t wave bye bye','baby doesn\'t clap','baby not mimicking','baby no imitation','baby doesn\'t copy gestures','baby not waving by 12 months','baby doesn\'t play patty cake','toddler not imitating words','baby no gestures','when should baby imitate'],
  quickAnswer: 'Imitation is one of the most important developmental skills because it is the foundation for learning language, social skills, and play. Babies typically begin imitating simple actions (sticking out tongue) in the first weeks, progress to imitating sounds and gestures (waving, clapping) by 9-12 months, and imitate complex actions and words by 12-18 months. If your baby is not imitating any actions or gestures by 12 months, or not imitating words by 18 months, a developmental screening is recommended.',
  byAge: [
    { ageRange: '0-6 months', context: 'Very young babies can imitate simple facial expressions like sticking out the tongue or opening the mouth wide. By 3-4 months, they begin to imitate sounds (cooing back when you coo). By 6 months, your baby may imitate some mouth movements and vowel sounds. At this age, imitation requires face-to-face interaction and your baby being in an alert, calm state. If your baby makes eye contact and responds to your face even without clear imitation, social development is progressing.' },
    { ageRange: '6-9 months', context: 'Imitation of actions begins - your baby may start to copy banging objects, clapping (often imprecise at first), or making specific sounds. They are watching you carefully and trying to reproduce what they see. Model simple actions repeatedly and celebrate any attempts. At this stage, imitation may be delayed (they try to do it hours or days later) rather than immediate. Babies learn through repetition, so demonstrate the same actions many times.' },
    { ageRange: '9-12 months', context: 'This is a critical period for gestural imitation. By 12 months, most babies can wave bye-bye, clap on request, play peek-a-boo, and copy simple actions like putting a phone to the ear. If your baby is not imitating any gestures by 12 months, discuss this with your pediatrician. Absence of imitation at this age can be an early sign of autism spectrum disorder, hearing loss, or other developmental differences. However, some babies are late imitators and catch up quickly.' },
    { ageRange: '12-24 months', context: 'Imitation expands to include words (repeating words you say), complex actions (pretending to cook after watching you), and social behaviors (blowing kisses, high-fives). By 18 months, your toddler should be imitating at least some words and many actions. If your toddler at 18 months does not imitate words, does not copy everyday actions, and does not engage in any pretend play by 24 months, a developmental evaluation is recommended. Imitation is a key skill assessed in autism screening.' },
  ],
  whenNormal: ['Your baby imitates some things but not others - they have preferences for what they copy','Your baby attempts to imitate but does it imperfectly (clapping by slapping hands on legs instead of together)','Imitation is better in calm, one-on-one settings than in noisy or busy environments','Your baby imitates familiar people more readily than strangers'],
  whenToMention: ['Your baby does not wave, clap, or imitate any gestures by 12 months','Your toddler does not imitate any words by 18 months','Your child does not copy everyday actions (talking on phone, brushing hair, feeding doll) by 18-24 months','Your child used to imitate but has stopped'],
  whenToActNow: ['Your baby has lost imitation skills they previously had - this regression needs immediate evaluation','Your baby over 12 months shows no interest in what other people are doing and does not observe or copy any actions','Lack of imitation combined with no pointing, no eye contact, and no response to name'],
  relatedMilestones: ['language-expressive','social-emotional-regulation','cognitive-object-permanence'],
  showSelfReferral: true,
  relatedConcernSlugs: ['early-signs-of-autism-baby','baby-not-interested-in-people','baby-flat-affect-no-expression'],
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones: Your Baby by 12 Months.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development-1-to-12-Months.aspx' },
    { org: 'NIH', citation: 'Vivanti G, Hamilton A. Imitation in Autism Spectrum Disorders. Handbook of Autism and Pervasive Developmental Disorders. 2014.', url: 'https://pubmed.ncbi.nlm.nih.gov/24311207/' },
  ],
};

import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'hoarse-voice-baby',
  title: 'My Baby Has a Hoarse Voice',
  category: 'communication',
  searchTerms: [
    'baby hoarse voice',
    'baby sounds raspy',
    'baby voice hoarse',
    'infant hoarse cry',
    'baby vocal cord problems',
    'raspy voice newborn',
    'baby laryngitis',
    'baby hoarse for weeks',
    'chronic hoarseness baby',
    'baby voice changed',
  ],
  quickAnswer:
    'A hoarse voice in a baby can be caused by crying a lot, a mild illness, or reflux, and usually resolves on its own. If hoarseness lasts more than two weeks, is present from birth, or is accompanied by breathing difficulties, it could indicate a vocal cord issue or other structural problem that needs evaluation by a pediatric ENT.',
  byAge: [
    {
      ageRange: 'Newborn-3 months',
      context:
        'Some newborns are born with a hoarse or raspy voice due to laryngomalacia (soft, floppy tissue above the vocal cords), vocal cord nodules from delivery, or reflux. If your baby has been hoarse since birth or the hoarseness is getting worse, mention it at the next pediatrician visit. If your baby is also having trouble feeding, breathing noisily, or turning blue, seek immediate care.',
    },
    {
      ageRange: '4-12 months',
      context:
        'Babies this age can develop hoarseness from excessive crying, a cold, or reflux. If the hoarseness came on suddenly and your baby also has a cough, runny nose, or fever, it\'s likely a viral illness and should clear up within a week or two. If your baby is hoarse for more than two weeks without other symptoms, or if they sound strained when crying or cooing, see your pediatrician to rule out vocal cord problems.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers can develop hoarseness from yelling, screaming, or imitating loud noises (like trucks or animals). This "vocal abuse" usually improves with rest and gentle reminders to use an "inside voice." If hoarseness persists despite rest, or if your child\'s voice has changed dramatically, an ENT evaluation is a good idea. Persistent hoarseness can sometimes be a sign of vocal cord nodules or cysts.',
    },
    {
      ageRange: '2+ years',
      context:
        'Chronic hoarseness in toddlers and preschoolers is most often due to vocal strain, allergies, or reflux. Less commonly, it can be caused by growths on the vocal cords (like nodules or papillomas). If your child has been hoarse for more than a month, or if the hoarseness is affecting their ability to be heard or understood, a pediatric ENT should examine their vocal cords with a scope.',
    },
  ],
  whenNormal: [
    'Your baby is hoarse for a few days after a lot of crying, and their voice is improving.',
    'Your baby has a cold and developed hoarseness along with a cough and congestion  -  this is typical and should resolve with the illness.',
    'Your baby\'s voice is slightly raspy but they\'re feeding well, breathing normally, and meeting milestones.',
    'Your toddler was yelling or screaming a lot and is now hoarse, but their voice returns to normal after a day or two of rest.',
  ],
  whenToMention: [
    'Your baby has been hoarse for more than two weeks without a clear cause like illness or excessive crying.',
    'Your baby was born with a hoarse voice or developed it in the first few weeks of life.',
    'Your baby\'s hoarseness is getting worse over time, or their cry sounds weak or strained.',
    'Your baby has hoarseness along with frequent spitting up, arching during feeds, or signs of reflux.',
  ],
  whenToActNow: [
    'Your baby is hoarse and also having trouble breathing, feeding, or is turning blue  -  this is a medical emergency.',
    'Your baby\'s voice has completely disappeared or they can\'t make sounds at all.',
    'Your baby is hoarse and also has stridor (a high-pitched sound when breathing in)  -  this could indicate airway narrowing and needs urgent evaluation.',
  ],
  relatedMilestones: [
    'language-vocalizing',
    'language-babbling',
    'physical-breathing',
    'language-crying-communication',
    'language-vocal-quality',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Hoarseness in Children',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Hoarseness.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association  -  Voice Disorders in Children',
      url: 'https://www.asha.org/public/speech/disorders/child-voice/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Laryngomalacia and Other Infant Airway Conditions',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Laryngomalacia.aspx',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-hit-head-when-to-worry',
  title: 'Baby Hit Their Head - When to Worry',
  category: 'medical',
  searchTerms: [
    'baby hit head when to worry',
    'baby bumped head',
    'baby head bump when to go to ER',
    'concussion signs in baby',
    'baby goose egg on head',
    'baby head injury symptoms',
    'baby hit head on floor',
    'toddler hit head hard',
    'baby head bump swelling',
    'how to tell if baby has concussion',
    'baby hit forehead',
    'baby head trauma signs',
    'when to worry about baby head bump',
  ],
  quickAnswer:
    'Head bumps are extremely common in babies and toddlers. The vast majority do not cause serious injury. The PECARN guidelines, used by emergency physicians, help identify which children need imaging after head trauma. The most important things to watch for are loss of consciousness, repeated vomiting, abnormal behavior, and a worsening headache. A "goose egg" bump, brief crying, and mild fussiness are normal responses to a head bump and do not indicate brain injury.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Any head injury in a baby under 3 months should be evaluated by a doctor. Young infants have soft, thin skulls and are more vulnerable to injury. They also cannot communicate symptoms like headache or dizziness. If your young infant bumps their head, call your pediatrician even if the baby seems fine. Watch for excessive sleepiness, refusal to feed, a bulging fontanelle (soft spot), or any change in normal behavior. The threshold for medical evaluation is lower in this age group.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies become more mobile, head bumps become more common. After a bump, check whether your baby is alert and responding normally. A brief cry followed by normal behavior is reassuring. Apply a cold compress to any swelling for 15-20 minutes. A goose egg is caused by bleeding under the scalp and looks alarming but is not dangerous in itself. Monitor for 24 hours for warning signs: repeated vomiting, unusual sleepiness, unequal pupils, or behavior changes.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Crawling and pulling-up babies bump their heads frequently. Most bumps at this age involve toppling over while sitting, hitting furniture while crawling, or falling while pulling to stand. These low-impact bumps rarely cause serious injury. The concern increases with the force of the impact and the surface struck. A baby who bumps their head on a padded carpet is at much lower risk than one who falls onto tile or hits a sharp corner. After any significant bump, the observation period is 24 hours.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are unsteady walkers who fall often, and head bumps are a near-daily occurrence for many. Most of these minor bumps need only comfort and possibly a cold compress. Toddlers can begin to tell you their head hurts, which is helpful. Warning signs at this age include: a headache that gets worse over time, vomiting more than once, difficulty walking or unusual clumsiness (beyond their baseline), confusion, slurred speech, or extreme drowsiness. If your toddler took a hard fall and then seems "off" in a way you cannot quite define, trust your instincts and seek evaluation.',
    },
  ],
  whenNormal: [
    'Your baby cried immediately after the bump but calmed down within minutes',
    'There is a goose egg or small bruise at the point of impact but no other symptoms',
    'Your baby is acting completely normally - alert, eating, playing, and sleeping as usual',
    'Your toddler can tell you their head hurts briefly but then goes back to normal activities',
    'The bump happened on a soft surface or from a low height',
  ],
  whenToMention: [
    'The bump involved a fall from more than 3 feet or onto a hard surface',
    'Your baby had one episode of vomiting shortly after the bump but seems fine otherwise',
    'There is significant swelling or a large goose egg',
    'Your baby is under 6 months old and had any notable head bump',
  ],
  whenToActNow: [
    'Your baby lost consciousness even briefly, had a seizure, or is difficult to rouse from sleep',
    'Your baby is vomiting repeatedly (more than once), has unequal pupils, has clear or bloody fluid from the nose or ears, or has a bulging soft spot',
    'Your baby or toddler is acting very differently than normal - extremely irritable, unusually lethargic, not recognizing familiar people, or showing changes in coordination or balance',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-crawling',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-fell-off-bed', 'baby-vomiting-bile', 'febrile-seizure'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Head Injury in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Head-Injury.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Kuppermann N, et al. PECARN Rule for Identifying Children at Very Low Risk of Clinically Important Brain Injuries. Lancet. 2009.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/19758692/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Traumatic Brain Injury and Concussion: Signs and Symptoms.',
      url: 'https://www.cdc.gov/traumatic-brain-injury/signs-symptoms/index.html',
    },
  ],
};

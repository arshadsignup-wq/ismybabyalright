import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'nosebleed',
  title: 'Nosebleed (Epistaxis) in Babies & Toddlers',
  bodySystem: 'nose',
  description: 'Nosebleeds are common in young children, especially between ages 2-10 years, and are less common in infants under 2. The vast majority originate from the anterior (front) part of the nasal septum (Kiesselbach\'s plexus), where blood vessels are close to the surface. Most nosebleeds are caused by dry air, nose picking, or minor trauma and stop within 10-15 minutes with proper pressure. Nosebleeds in babies under 6 months are unusual and warrant evaluation.',
  possibleCauses: [
    { cause: 'Dry air causing cracked nasal membranes', likelihood: 'common' },
    { cause: 'Nose picking or rubbing', likelihood: 'common' },
    { cause: 'Upper respiratory infection with irritated nasal lining', likelihood: 'common' },
    { cause: 'Minor trauma (bumping nose, vigorous suctioning)', likelihood: 'uncommon' },
    { cause: 'Allergic rhinitis causing frequent sneezing and nose rubbing', likelihood: 'uncommon' },
    { cause: 'Foreign body in the nose', likelihood: 'uncommon' },
    { cause: 'Bleeding disorder (hemophilia, von Willebrand disease, ITP)', likelihood: 'rare' },
    { cause: 'Nasal hemangioma or vascular malformation', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 months', normalVariation: 'Nosebleeds are uncommon in this age group. Tiny blood-tinged mucus from vigorous nasal suctioning can occur.', whenToWorry: 'Any spontaneous nosebleed in an infant under 6 months should be evaluated. Also concerning: nosebleed with bruising elsewhere, bleeding from gums, or blood in stool.' },
    { ageRange: '6-24 months', normalVariation: 'Nosebleeds become more common as toddlers start exploring their noses. Usually brief and self-limited. May be triggered by colds or dry winter air.', whenToWorry: 'Frequent recurrent nosebleeds (more than once a week), bleeds lasting more than 20 minutes with proper pressure, nosebleeds with easy bruising or petechiae, or very heavy bleeding.' },
    { ageRange: '2-3 years', normalVariation: 'Peak nose-picking age. Nosebleeds from dry air and nose picking are common and typically not concerning if they stop within 10-15 minutes.', whenToWorry: 'Nosebleeds that do not stop after 20 minutes of continuous pressure, nosebleeds from both nostrils simultaneously, recurring bleeding from the same side (possible polyp or hemangioma), or family history of bleeding disorders.' },
  ],
  urgencyLevels: {
    emergency: [
      'Nosebleed that does not stop after 20-30 minutes of continuous firm pressure',
      'Heavy nosebleed after significant facial or head trauma',
      'Nosebleed with signs of significant blood loss (pale, dizzy, rapid heart rate)',
      'Nosebleed with difficulty breathing (blood running down back of throat)',
    ],
    urgent: [
      'Spontaneous nosebleed in infant under 6 months',
      'Nosebleed with widespread bruising, petechiae, or bleeding from other sites',
      'Recurrent nosebleeds (several per week) not responding to environmental measures',
      'Nosebleed following insertion of a foreign object',
    ],
    sameDay: [
      'Nosebleed that stopped but was unusually heavy or prolonged (15-20 minutes)',
      'Frequent nosebleeds with family history of bleeding disorders',
      'Nosebleed with one-sided swelling or foul-smelling discharge',
    ],
    monitor: [
      'Occasional nosebleed during dry weather that stops within 10 minutes',
      'Minor blood-tinged mucus after nasal suctioning',
      'Infrequent nosebleeds in a toddler who picks their nose',
      'Small amount of blood in mucus during a cold',
    ],
  },
  homeRemedies: [
    'Pinch the soft part of the nose (not the bridge) firmly for a full 10-15 minutes without peeking',
    'Have child sit upright and lean slightly forward (NOT back) to prevent swallowing blood',
    'Apply an ice pack or cold washcloth to the bridge of the nose',
    'After bleeding stops, avoid nose blowing, picking, or vigorous activity for several hours',
    'Use a cool-mist humidifier in the bedroom during dry months',
    'Apply a thin layer of petroleum jelly (Vaseline) or saline gel inside the nostrils to prevent dryness',
    'Keep fingernails trimmed short to minimize damage from nose picking',
    'Use saline nasal spray daily during dry weather to keep nasal membranes moist',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['runny-nose-clear', 'runny-nose-colored', 'foreign-object-nose'],
  relatedIllnessSlugs: ['common-cold'],
  relatedConcernSlugs: ['baby-nosebleed', 'toddler-nosebleed', 'nosebleed-wont-stop'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Nosebleeds. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Nosebleeds.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Nosebleeds - Symptoms and causes.', url: 'https://www.mayoclinic.org/symptoms/nosebleeds/basics/definition/sym-20050914' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. McGarry GW. Nosebleeds in children. BMJ Clinical Evidence. 2013.', url: 'https://publications.aap.org/pediatricsinreview' },
  ],
};

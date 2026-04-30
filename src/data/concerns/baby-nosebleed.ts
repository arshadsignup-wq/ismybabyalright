import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-nosebleed',
  title: 'Baby or Toddler Nosebleed',
  category: 'physical',
  searchTerms: [
    'baby nosebleed',
    'toddler nosebleed',
    'baby nose bleeding',
    'toddler nose bleeding at night',
    'toddler nose bleeding no injury',
    'baby nosebleed causes',
    'toddler frequent nosebleeds',
    'nosebleed while sleeping toddler',
    'toddler nosebleed won\'t stop',
    'baby nose picking bleeding',
  ],
  quickAnswer:
    'Nosebleeds are very common in toddlers and young children, especially during dry winter months. Most nosebleeds come from the front of the nose (anterior nosebleeds) where tiny blood vessels are close to the surface and easily irritated by dry air, nose picking, colds, or allergies. While they can look alarming due to the amount of blood, nearly all nosebleeds in children are harmless and stop within 10-15 minutes with proper first aid.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Nosebleeds in babies under 1 year are uncommon. If a young baby has a nosebleed without an obvious cause (like nasal suctioning), mention it to your pediatrician. Blood from the nose in a young infant can occasionally be from swallowed maternal blood (if breastfeeding with cracked nipples) or from overly vigorous nasal suctioning.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Nosebleeds become much more common in toddlers. The #1 cause is nose picking, followed by dry air and colds/allergies that make the nasal lining fragile. To treat: have your child sit up and lean slightly forward, pinch the soft part of the nose (not the bony bridge) firmly for 10 full minutes without checking. Do not tilt the head back, as this causes blood to flow down the throat. A humidifier in the bedroom and petroleum jelly applied inside the nostrils can prevent recurrent nosebleeds.',
    },
  ],
  whenNormal: [
    'Occasional nosebleeds during dry, cold weather',
    'A nosebleed after nose picking, a bump to the nose, or vigorous nose blowing',
    'A nosebleed during a cold or allergy flare',
    'Bleeding that stops within 10-15 minutes of applying pressure',
    'A small amount of bloody mucus after a nosebleed for a day or two',
  ],
  whenToMention: [
    'Your toddler gets nosebleeds more than once a week',
    'Nosebleeds happen frequently with no clear trigger',
    'Your child also bruises easily or has prolonged bleeding from small cuts',
    'Nosebleeds consistently last longer than 15 minutes despite proper pressure',
  ],
  whenToActNow: [
    'A nosebleed does not stop after 20 minutes of continuous firm pressure',
    'There is a large amount of blood loss and your child looks pale or dizzy',
    'The nosebleed occurred after a significant head or face injury',
    'Your baby under 12 months has an unexplained nosebleed',
    'Nosebleeds are accompanied by other unusual bleeding (gums, blood in urine or stool)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-bruises-easily', 'chronic-congestion', 'baby-foreign-object-in-nose'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Nosebleeds. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Nosebleeds.aspx',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. First Aid for Nosebleeds.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Nosebleeds.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Epistaxis in Children. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK435997/',
    },
  ],
};

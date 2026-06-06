import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-birth-injury-clavicle',
  title: 'Broken Collarbone (Clavicle Fracture) at Birth',
  category: 'medical',
  searchTerms: [
    'newborn broken collarbone',
    'baby clavicle fracture birth',
    'newborn fractured clavicle',
    'baby collar bone broken delivery',
    'birth injury clavicle',
    'newborn not moving arm',
    'baby broken bone at birth',
    'clavicle fracture newborn treatment',
    'newborn shoulder injury birth',
    'baby collarbone bump',
  ],
  quickAnswer:
    'A broken clavicle (collarbone) is one of the most common birth injuries, occurring during difficult deliveries, especially in large babies or when shoulder dystocia occurs. While concerning to parents, clavicle fractures in newborns heal very quickly (usually within 2-3 weeks) without any specific treatment. The prognosis is excellent.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'A clavicle fracture may be detected at birth or in the first few days when parents or doctors notice the baby is not moving one arm as much, seems uncomfortable during dressing or handling of one side, or has an asymmetric Moro reflex. You may feel a bump or hear crepitus (a crackling sensation) over the collarbone. Sometimes a fracture is found incidentally on a chest X-ray. Treatment is conservative: gentle handling, avoiding pulling on the affected arm, and positioning the baby comfortably. The fracture heals rapidly in newborns, typically within 2-3 weeks. You may notice a bump (callus) forming at the fracture site, which is a sign of normal healing.',
    },
    {
      ageRange: '1-3 months',
      context:
        'By this time, the fracture should be healed. The callus bump is a normal part of healing and gradually remodels over months. Your baby should be moving the affected arm normally. If arm movement has not returned to normal, there may be an associated brachial plexus injury that needs further evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The fracture is fully healed. The callus bump gradually becomes less noticeable over time as the bone remodels. Both arms should move equally and normally. No long-term complications are expected from a newborn clavicle fracture.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The clavicle has fully remodeled and there should be no evidence of the previous fracture other than perhaps a slight bony prominence that will continue to smooth out. Full function is expected.',
    },
  ],
  whenNormal: [
    'Baby has decreased movement of one arm with tenderness over the collarbone area',
    'A healing bump (callus) forms over the fracture site within 1-2 weeks',
    'Baby returns to full arm movement within 2-3 weeks',
    'The bump gradually remodels and disappears over months',
  ],
  whenToMention: [
    'You notice your baby is not moving one arm as much as the other',
    'You feel a bump on the collarbone that wasn\'t previously noted',
    'Your baby cries when you move their arm to one side during dressing',
  ],
  whenToActNow: [
    'Your baby is not moving one arm at all or the entire arm appears limp, which could indicate a more serious injury involving the nerves (brachial plexus)',
    'Signs of infection at any site of injury: increasing redness, warmth, or swelling with fever',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Birth Injuries. Caring for Your Baby and Young Child.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Neonatal Clavicle Fracture. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK559220/',
    },
  ],
  relatedConcernSlugs: ['newborn-brachial-plexus-injury', 'newborn-asymmetric-moro-reflex', 'newborn-bruising-from-delivery'],
};

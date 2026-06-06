import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-hernia-strangulation-signs',
  title: 'Strangulated Hernia Signs in Baby',
  category: 'digestive',
  searchTerms: [
    'baby strangulated hernia',
    'baby hernia emergency',
    'baby hernia hard won\'t go back',
    'incarcerated hernia baby',
    'baby inguinal hernia stuck',
    'baby hernia turning red',
    'baby hernia painful hard',
    'baby hernia emergency signs',
    'infant strangulated hernia',
    'baby hernia vomiting',
  ],
  quickAnswer:
    'A strangulated hernia occurs when tissue trapped in a hernia loses its blood supply, becoming a surgical emergency. Signs include a hernia bulge that becomes hard, tender, red or discolored, and cannot be pushed back in, along with vomiting, severe fussiness, and sometimes fever. If your baby\'s hernia becomes stuck, hard, or painful, go to the emergency department immediately.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Inguinal hernias in newborns, especially premature babies, carry the highest risk of incarceration and strangulation. A hernia that was previously reducible (could be gently pushed back) but suddenly becomes firm, tender, or discolored is an emergency. Do not try to force it back in at home. Seek immediate medical care.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby has been diagnosed with an inguinal hernia, surgical repair is typically recommended promptly in this age group to prevent incarceration. Until surgery, watch for signs of a hernia becoming stuck: increased fussiness, vomiting, a hard bulge that does not soften when the baby relaxes, or color changes in the skin over the hernia.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The risk of incarceration remains significant until the hernia is surgically repaired. Umbilical hernias, while common, very rarely incarcerate and usually close on their own by age 4 to 5. Inguinal hernias, however, do not resolve without surgery and carry ongoing strangulation risk.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Any inguinal hernia that has not been repaired carries risk. Toddlers may not be able to communicate pain clearly but may become very irritable, refuse to eat, and vomit if a hernia incarcerates. Be familiar with the location of the hernia and check it regularly for changes.',
    },
  ],
  whenNormal: [
    'A soft inguinal hernia that comes and goes with crying and can be gently reduced',
    'A small umbilical hernia that is soft and does not bother the baby',
  ],
  whenToMention: [
    'A hernia seems to be getting larger',
    'You notice the hernia more frequently than before',
    'Your baby has not yet been referred for surgical repair of an inguinal hernia',
  ],
  whenToActNow: [
    'The hernia becomes hard, tender, discolored, or cannot be pushed back in',
    'Your baby is vomiting and has a hard, painful hernia',
    'Skin over the hernia becomes red or blue-purple',
    'Your baby becomes lethargic or very irritable with a tense hernia',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Inguinal Hernia. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Inguinal-Hernia.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Inguinal Hernia in Children. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459233/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Umbilical Hernia. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Umbilical-Hernia.aspx',
    },
  ],
  relatedConcernSlugs: ['hernia-bulging-when-crying', 'baby-bowel-obstruction-signs', 'baby-vomiting-bile'],
};

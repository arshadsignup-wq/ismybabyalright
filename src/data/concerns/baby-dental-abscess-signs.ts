import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-dental-abscess-signs',
  title: 'Could My Baby Have a Dental Abscess?',
  category: 'medical',
  searchTerms: [
    'baby dental abscess',
    'baby tooth abscess signs',
    'baby gum abscess',
    'baby tooth infection',
    'baby swollen gum pus',
    'baby bump on gum above tooth',
    'toddler tooth abscess',
    'baby tooth infection symptoms',
    'dental abscess signs children',
    'baby gum boil',
  ],
  quickAnswer:
    'A dental abscess is a pocket of pus caused by a bacterial infection, usually from an untreated cavity. Signs include a visible bump or boil on the gum near a tooth, swelling of the face or cheek, pain (especially when chewing), fever, and foul taste in the mouth. A dental abscess needs prompt treatment by a dentist because the infection can spread. Treatment may include antibiotics, drainage, and addressing the underlying tooth problem.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Dental abscesses do not occur in babies without teeth. However, gum cysts (Epstein pearls or Bohn nodules) can appear on newborn gums and may look concerning but are completely harmless and resolve on their own. If you notice any unusual growth or swelling on your newborn\'s gums, have your pediatrician examine it.',
    },
    {
      ageRange: '3-6 months',
      context:
        'With teeth just starting to emerge, abscesses are extremely rare. Any unusual swelling on the gums at this age is more likely related to teething (eruption cyst) or a benign cyst. An eruption cyst appears as a bluish swelling over an erupting tooth and resolves on its own.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As more teeth erupt, dental trauma (falls while learning to walk or stand) can damage a tooth, which may later develop an abscess. If your baby bumps a tooth and it becomes discolored weeks later, this may indicate the nerve has been damaged. Watch for gum swelling above the discolored tooth.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Dental abscesses become possible, especially if cavities develop. Signs include a pimple-like bump on the gum, facial swelling on one side, refusal to eat (especially hard foods), drooling, fever, and irritability. If you see a bump on the gum that releases pus, or facial swelling, contact your dentist promptly.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Children with early childhood cavities are at risk for dental abscesses. The primary teeth most commonly affected are the upper front teeth and the molars. Treatment may include antibiotics, drainage, pulp therapy (baby tooth root canal), or extraction of the affected tooth. Untreated abscesses can affect the developing permanent teeth underneath.',
    },
  ],
  whenNormal: [
    'Mild gum swelling around an erupting tooth that resolves as the tooth comes in',
    'A small bluish cyst over an erupting tooth (eruption cyst) that resolves on its own',
    'Your baby chews on things and drools during normal teething',
  ],
  whenToMention: [
    'You notice a small bump or boil on the gum near a tooth',
    'A previously injured tooth has become discolored and the gum above it is swollen',
    'Your child has persistent tooth pain or avoids chewing on one side',
  ],
  whenToActNow: [
    'Your child has facial swelling (especially around the eye or under the jaw), fever with dental symptoms, or difficulty swallowing or breathing',
    'A gum abscess is draining pus and your child appears ill or has high fever',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'tooth-abscess-baby',
    'early-childhood-cavities',
    'baby-dental-trauma-fall',
    'baby-dental-injury-chipped-tooth',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Dental Emergencies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/mouth-teeth/Pages/Dental-Emergencies.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Tooth abscess: Symptoms and causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/tooth-abscess/symptoms-causes/syc-20350901',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Dental and Craniofacial Research. Dental Abscess.',
      url: 'https://www.nidcr.nih.gov/health-info/tooth-decay',
    },
  ],
};

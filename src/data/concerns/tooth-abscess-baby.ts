import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tooth-abscess-baby',
  title: 'Tooth Abscess in Babies',
  category: 'medical',
  searchTerms: [
    'baby tooth abscess',
    'toddler tooth infection',
    'swollen gum baby tooth',
    'baby gum boil',
    'pus on baby gums',
    'dental abscess toddler',
    'baby tooth infection symptoms',
    'swelling on baby gum near tooth',
    'baby dental emergency infection',
  ],
  quickAnswer:
    'A tooth abscess is a bacterial infection that causes a pocket of pus to form around a tooth. In babies and toddlers, it usually results from untreated tooth decay. Signs include a visible swelling or bump on the gum (sometimes called a gum boil), facial swelling, fever, irritability, and refusal to eat. A dental abscess is a medical urgency that requires prompt evaluation and treatment by a dentist, as the infection can spread.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Tooth abscesses are extremely rare at this age since most babies do not yet have teeth. If there is swelling on the gums, it is more likely a condition like an Epstein pearl, eruption cyst, or Bohn\'s nodule, which are harmless. Any unusual oral swelling in a very young infant should still be evaluated.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Dental abscesses remain uncommon since teeth have only recently erupted or have not yet appeared. A swollen gum in this age range is more likely related to normal teething. However, if there is a pus-filled bump or the baby has fever with gum swelling, seek dental evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As more teeth erupt, the possibility of trauma-related or decay-related abscess increases, though it is still relatively uncommon. If a tooth was injured from a fall or if early childhood caries has progressed, an abscess can develop. Signs include a red or white bump on the gum near a tooth, facial swelling, and the baby being unusually fussy.',
    },
    {
      ageRange: '12 months+',
      context:
        'Dental abscesses become more common in toddlers, particularly those with untreated early childhood caries. Signs include a visible pimple-like bump on the gum that may drain pus, swelling of the cheek or jaw, fever, and refusal to eat. Treatment typically involves antibiotics, drainage, and treatment of the underlying cause, which may include extraction of the affected tooth.',
    },
  ],
  whenNormal: [
    'Your baby has mild gum swelling at the site where a new tooth is erupting, which is normal teething',
    'A small, painless bluish bump appears over an erupting tooth, which is likely an eruption cyst',
    'White bumps on the gums of a newborn, which are usually Epstein pearls and are harmless',
    'The gums appear slightly red after vigorous teething on hard objects',
  ],
  whenToMention: [
    'You notice a persistent red bump or pimple on the gum near a tooth that does not resolve within a few days',
    'Your baby has a tooth that appears dark or damaged',
    'Your baby seems to have pain localized to one area of the mouth and is favoring one side while eating',
  ],
  whenToActNow: [
    'Your baby has facial swelling near the jaw or cheek, especially if accompanied by fever, as this could indicate a spreading dental infection requiring emergency treatment',
    'A bump on the gum is draining pus, your baby has a high fever, or your child appears systemically ill with swollen lymph nodes and difficulty swallowing or breathing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Guideline on Pulp Therapy for Primary and Immature Permanent Teeth.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/pulp-therapy-for-primary-and-immature-permanent-teeth/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Dental Emergencies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Dental-Emergencies.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Tooth Abscess: Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/tooth-abscess/symptoms-causes/syc-20350901',
    },
  ],
};

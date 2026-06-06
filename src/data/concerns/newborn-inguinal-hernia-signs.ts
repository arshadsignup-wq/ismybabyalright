import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-inguinal-hernia-signs',
  title: 'Inguinal Hernia in Newborns (Groin Hernia)',
  category: 'medical',
  searchTerms: [
    'newborn inguinal hernia',
    'baby groin hernia',
    'infant hernia groin area',
    'newborn bulge in groin',
    'baby hernia near scrotum',
    'inguinal hernia baby symptoms',
    'newborn hernia surgery',
    'baby groin swelling comes and goes',
    'infant inguinal hernia treatment',
    'baby hernia one side groin',
  ],
  quickAnswer:
    'An inguinal hernia appears as a bulge in the groin or scrotum (in boys) that comes and goes, becoming more prominent when the baby cries or strains. Unlike umbilical hernias, inguinal hernias do not resolve on their own and require surgical repair to prevent complications. The surgery is safe and highly successful.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Inguinal hernias occur when a loop of intestine slips through an opening in the abdominal wall into the groin area (or scrotum in boys). They are more common in premature babies and in boys. You may notice a bulge in one or both sides of the groin that appears when your baby cries, strains, or is active, and disappears when calm. Unlike umbilical hernias, inguinal hernias always require surgical repair because of the risk of incarceration (trapped intestine). Surgery is typically scheduled soon after diagnosis.',
    },
    {
      ageRange: '1-3 months',
      context:
        'If an inguinal hernia is diagnosed, surgery is usually performed promptly, especially in young infants where the risk of incarceration is higher. The surgery (herniorrhaphy) is a straightforward outpatient procedure with an excellent success rate. Recovery is typically quick, with most babies returning to normal activities within a few days.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Inguinal hernias can present at any age. If you notice a new bulge in the groin area, contact your pediatrician promptly. After surgical repair, recurrence is uncommon. Your doctor may also check the other side, as bilateral hernias can occur.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Inguinal hernias can still first appear at this age. Any new groin bulge that comes and goes should be evaluated. After surgical repair, follow-up care is minimal and the prognosis is excellent.',
    },
  ],
  whenNormal: [
    'There is no "normal" inguinal hernia. All inguinal hernias in babies need medical evaluation and surgical repair.',
  ],
  whenToMention: [
    'You notice a bulge in the groin area or scrotum that comes and goes',
    'One side of the groin or scrotum appears larger than the other',
    'A groin bulge appears during crying or straining and goes away at rest',
  ],
  whenToActNow: [
    'A groin hernia becomes hard, swollen, red, or tender and cannot be gently pushed back in, which could indicate incarcerated hernia requiring emergency surgery',
    'Your baby is vomiting, extremely irritable, or refusing to eat along with a firm groin bulge',
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
        'National Library of Medicine. Pediatric Inguinal Hernia. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459233/',
    },
  ],
  relatedConcernSlugs: ['umbilical-hernia', 'hernia-bulging-when-crying', 'hydrocele-baby'],
};

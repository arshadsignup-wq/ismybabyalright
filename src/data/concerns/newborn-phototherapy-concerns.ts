import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-phototherapy-concerns',
  title: 'Jaundice Light Treatment (Phototherapy)',
  category: 'medical',
  searchTerms: [
    'newborn phototherapy',
    'baby jaundice light treatment',
    'bili lights newborn',
    'phototherapy side effects baby',
    'jaundice treatment light',
    'baby under blue lights',
    'phototherapy at home',
    'bili blanket baby',
    'how long does phototherapy take',
    'phototherapy and breastfeeding',
  ],
  quickAnswer:
    'Phototherapy (light treatment) is the standard treatment for newborn jaundice when bilirubin levels are too high. Special blue lights help break down bilirubin in the skin so the body can eliminate it. Phototherapy is very safe and effective. Your baby wears only a diaper and eye protection during treatment, which may be done in the hospital or at home with a bili blanket.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Phototherapy is typically needed in the first few days of life when jaundice becomes significant. Your baby will be placed under special blue lights or on a fiber-optic blanket (bili blanket) while wearing eye protection. Common parental concerns include: separation anxiety from baby during treatment, interruption of breastfeeding, and side effects. Side effects are mild and include loose stools, increased fluid needs, and a temporary rash. Breastfeeding should continue during phototherapy; the light treatment does not interfere with feeding. Most babies respond well within 24-48 hours. After treatment, a rebound bilirubin check may be done.',
    },
    {
      ageRange: '1-3 months',
      context:
        'If your baby required phototherapy and jaundice has resolved, there are no lasting effects from the treatment. Bilirubin levels should be monitored if jaundice returns or persists beyond 2 weeks (prolonged jaundice), which may have different causes than typical newborn jaundice.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Phototherapy has no long-term effects on your baby. Development and growth should proceed normally. If your baby had jaundice treated successfully, no ongoing monitoring of bilirubin is needed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'No lasting effects from newborn phototherapy. Your baby should be developing normally in all areas.',
    },
  ],
  whenNormal: [
    'Baby under phototherapy lights has loose, greenish stools',
    'Mild rash or skin discoloration during treatment that resolves after',
    'Baby needs more frequent feeds during phototherapy',
    'Bilirubin levels decrease with treatment and remain stable after stopping',
  ],
  whenToMention: [
    'You have questions about whether your baby needs phototherapy or how long it will last',
    'Jaundice appears to return after phototherapy is stopped',
    'You are interested in home phototherapy options',
  ],
  whenToActNow: [
    'Jaundice that is rapidly worsening or your baby appears increasingly yellow despite phototherapy',
    'Baby becomes lethargic, refuses to feed, has a high-pitched cry, or develops arching of the back, which could indicate dangerously high bilirubin levels',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Clinical Practice Guideline: Management of Hyperbilirubinemia in the Newborn. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/114/1/297/67050/Management-of-Hyperbilirubinemia-in-the-Newborn',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Neonatal Jaundice and Phototherapy. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK532930/',
    },
  ],
  relatedConcernSlugs: ['newborn-prolonged-jaundice', 'newborn-breast-milk-jaundice', 'newborn-blood-type-incompatibility'],
};

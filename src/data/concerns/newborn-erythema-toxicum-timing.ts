import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-erythema-toxicum-timing',
  title: 'Erythema Toxicum (Red Blotchy Rash in Newborns)',
  category: 'skin',
  searchTerms: [
    'newborn red blotchy rash',
    'erythema toxicum neonatorum',
    'baby red splotches first days',
    'newborn rash with white bumps',
    'baby red spots all over body',
    'newborn skin rash normal',
    'baby red patches after birth',
    'erythema toxicum newborn',
    'newborn flea bite rash',
    'baby rash first week',
  ],
  quickAnswer:
    'Erythema toxicum is a very common, completely harmless rash that appears in up to 50% of full-term newborns, usually within the first 2-5 days of life. It looks like red blotches with small yellow or white bumps and can appear anywhere on the body except the palms and soles. It resolves on its own without any treatment.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Erythema toxicum typically appears between 24 and 72 hours after birth, though it can occur anytime in the first two weeks. The rash consists of red, blotchy patches that may have a small yellow or white bump (pustule) in the center, sometimes described as looking like flea bites. It can appear on the face, trunk, arms, and legs but spares the palms and soles. The rash comes and goes, moving to different areas of the body. It does not bother your baby and needs no treatment. It usually clears within 5-14 days.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Erythema toxicum should have resolved by this age. If your baby develops a new rash during this period, it is likely a different condition. Common rashes at this age include baby acne, heat rash, or eczema. Any rash that appears with fever, poor feeding, or irritability should be evaluated by your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Erythema toxicum does not occur at this age. New rashes should be evaluated based on their appearance and any associated symptoms.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This rash is exclusively a newborn phenomenon. Any persistent or new skin concerns at this age should be discussed with your pediatrician.',
    },
  ],
  whenNormal: [
    'Red blotchy patches with or without small white or yellow bumps appearing in the first few days of life',
    'The rash comes and goes and moves to different areas of the body',
    'Baby is otherwise well, feeding normally, and not bothered by the rash',
    'The rash does not appear on the palms of hands or soles of feet',
  ],
  whenToMention: [
    'You are unsure whether the rash is erythema toxicum or something else',
    'The rash persists beyond two weeks of life',
    'The bumps appear to contain cloudy or yellowish fluid',
  ],
  whenToActNow: [
    'Rash appears with fever, poor feeding, irritability, or lethargy, which could indicate infection',
    'Blisters, peeling skin, or rash on the palms and soles, which may suggest a different condition requiring evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Rashes and Skin Conditions in Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Erythema Toxicum Neonatorum. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470225/',
    },
  ],
  relatedConcernSlugs: ['newborn-milia-white-bumps', 'newborn-pustular-melanosis', 'baby-acne'],
};

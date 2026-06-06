import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-pustular-melanosis',
  title: 'Transient Neonatal Pustular Melanosis',
  category: 'skin',
  searchTerms: ['pustular melanosis baby', 'newborn brown spots', 'baby pustules at birth', 'benign newborn skin rash', 'dark spots from birth', 'newborn skin pustules harmless', 'transient pustular melanosis', 'baby born with spots', 'neonatal pustules benign', 'melanosis neonatorum'],
  quickAnswer:
    'Transient neonatal pustular melanosis is a harmless skin condition present at birth, appearing as small pustules that rupture easily, leaving dark brown spots (hyperpigmented macules) surrounded by a fine collarette of scale. It is more common in darker-skinned babies, is not an infection, and requires no treatment. The dark spots fade over weeks to months.',
  byAge: [
    { ageRange: '0-1 month', context: 'Pustular melanosis is present at birth. You may see three stages: small, fragile pustules (which often rupture during delivery or the first bath), ruptured pustules with a collar of scale, and flat dark spots where pustules have resolved. The pustules contain no bacteria or virus; they are sterile. The condition can appear anywhere on the body, including the face, palms, and soles. No treatment is needed. The dark spots gradually fade over 3 weeks to 3 months.' },
    { ageRange: '1-3 months', context: 'The pustules resolve quickly (within days), but the dark spots may persist for several weeks to months. They fade gradually without treatment. No scarring occurs. If you notice new pustules appearing at this age, it is likely a different condition and should be evaluated.' },
    { ageRange: '3-6 months', context: 'The hyperpigmented spots should be fading or have resolved completely. No lasting marks are expected.' },
    { ageRange: '6-12 months', context: 'All signs of pustular melanosis should be gone. If dark spots persist or new ones appear, discuss with your pediatrician to rule out other conditions.' },
  ],
  whenNormal: ['Small, fragile pustules present at birth that rupture easily', 'Dark brown spots left behind after pustules resolve', 'No redness, swelling, or signs of infection around the pustules', 'Baby is well, feeding normally, and has no fever'],
  whenToMention: ['You are unsure whether the spots or pustules are pustular melanosis or another condition', 'New pustules appear after the first few days of life', 'The dark spots are not fading after 3 months'],
  whenToActNow: ['Pustules that appear with fever, spreading redness, or signs of illness, which could indicate a skin infection like herpes or staphylococcal impetigo', 'Widespread blistering or skin breakdown that seems to be causing pain'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Common Skin Findings in Newborns. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Transient Neonatal Pustular Melanosis. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK470225/' },
  ],
  relatedConcernSlugs: ['newborn-erythema-toxicum-timing', 'newborn-milia-white-bumps'],
};

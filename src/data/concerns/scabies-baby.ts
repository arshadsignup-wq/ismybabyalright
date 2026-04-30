import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'scabies-baby',
  title: 'Scabies Rash in Baby or Toddler',
  category: 'skin',
  searchTerms: ['scabies baby', 'scabies toddler', 'baby itchy rash at night', 'scabies rash infant', 'baby rash that won\'t go away itchy', 'scabies treatment baby', 'mites rash baby', 'baby extremely itchy rash', 'scabies daycare baby', 'baby rash worse at night'],
  quickAnswer: 'Scabies is a very itchy skin condition caused by tiny mites that burrow into the skin. It is common in daycare settings and spreads through prolonged skin-to-skin contact. In babies, scabies looks different than in older children - it often appears as widespread tiny bumps, blisters, and scales on the palms, soles, scalp, and face (areas not typically affected in adults). The intense itching is usually worse at night. Scabies is very treatable with prescribed medicated cream and must be treated in all household members simultaneously.',
  byAge: [
    { ageRange: '0-12 months', context: 'Scabies in babies looks different from scabies in older children and adults. Instead of the classic burrow lines, babies develop widespread tiny vesicles (blisters), papules (bumps), and scales, especially on the palms of the hands, soles of the feet, scalp, and face. The rash can look like eczema, making misdiagnosis common. If your baby has a very itchy rash that is not responding to eczema treatment, scabies should be considered.' },
    { ageRange: '1-3 years', context: 'Toddlers with scabies typically show intense itching, especially at night. The rash appears as red bumps, tracks (burrows), and sometimes small blisters, commonly in the finger webs, wrists, armpits, waistline, and diaper area. Scratching can lead to secondary bacterial infection (impetigo). Scabies is frequently spread in daycare settings and requires treatment of the entire family and close contacts simultaneously. Bedding and clothing should be washed in hot water.' },
  ],
  whenNormal: ['Itching that resolves completely 2-4 weeks after treatment (dead mites continue to cause itching for a while)', 'Some rash persisting for a few weeks after treatment even though the mites are gone', 'Mild skin irritation from the medicated cream itself'],
  whenToMention: ['Your baby has a very itchy rash that is worse at night and not responding to moisturizers or eczema cream', 'Multiple family members or daycare contacts have a similar itchy rash', 'You suspect scabies and need a diagnosis and prescription treatment', 'The rash has been treated but itching persists beyond 4 weeks'],
  whenToActNow: ['The rash has developed signs of bacterial infection: honey-colored crusting, increasing redness, warmth, or pus', 'Your baby has widespread crusted scabies (Norwegian scabies), which is highly contagious and requires aggressive treatment', 'Your baby has a fever along with an infected-looking scabies rash'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['eczema', 'impetigo-baby', 'baby-rash-wont-go-away', 'insect-bites-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Scabies. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Scabies.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Scabies.', url: 'https://www.cdc.gov/scabies/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Scabies. Red Book Online.', url: 'https://redbook.solutions.aap.org/' },
  ],
};

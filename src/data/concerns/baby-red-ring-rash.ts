import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-red-ring-rash',
  title: 'Red Ring-Shaped Rash on Baby - Ringworm and Other Causes',
  category: 'skin',
  searchTerms: ['baby red ring rash','baby ring shaped rash','baby ringworm','toddler circular rash','baby round red rash','ring rash baby not ringworm','baby annular rash','baby target rash','baby ring rash on face','baby ring rash on body','toddler ringworm treatment','is baby rash ringworm'],
  quickAnswer: 'A ring-shaped (annular) rash on a baby can be ringworm (a fungal infection, not actually a worm), granuloma annulare, nummular eczema, or erythema migrans (from a tick bite). Ringworm is the most common cause - it appears as a red, scaly ring with clearing in the center that slowly expands. It is contagious but treatable with over-the-counter antifungal cream. If the rash is a bull\'s-eye pattern (red ring with central clearing) after a potential tick exposure, seek evaluation for Lyme disease.',
  byAge: [
    { ageRange: '0-6 months', context: 'Ring-shaped rashes are less common in young babies. Nummular eczema (coin-shaped dry patches) can look circular but does not have the distinct raised edge and central clearing of ringworm. If your young baby has a true ring-shaped rash, have it evaluated - ringworm in infants under 6 months should be treated under a doctor\'s guidance because many antifungal creams are not tested in this age group. Tinea corporis (body ringworm) can be passed from pets, other children, or contaminated surfaces.' },
    { ageRange: '6-12 months', context: 'Ringworm becomes more common as babies become mobile and have more contact with surfaces, other children, and pets. The rash starts as a small red bump and expands into a ring over days to weeks. It can appear anywhere on the body. Over-the-counter clotrimazole or miconazole cream applied twice daily for 2-4 weeks usually clears it. Continue treatment for one week after the rash appears to have resolved to prevent recurrence. Keep the area clean and avoid sharing towels.' },
    { ageRange: '12-24 months', context: 'Toddlers in daycare are at higher risk for ringworm because it spreads through direct contact and shared surfaces. Scalp ringworm (tinea capitis) causes scaly patches with hair loss and requires oral antifungal medication (topical creams do not penetrate the hair follicle). If your toddler has a ring-shaped rash and you live in an area with ticks, also consider erythema migrans (Lyme disease rash) - this appears 3-30 days after a tick bite and expands to a bull\'s-eye pattern larger than 5 cm.' },
    { ageRange: '2-3 years', context: 'Granuloma annulare is another cause of ring-shaped bumps in children - these are skin-colored or slightly pink raised rings, usually on hands, feet, elbows, or knees. Unlike ringworm, granuloma annulare is not scaly, not contagious, and resolves on its own over months to years. Pityriasis rosea starts with a single large "herald patch" that can look ring-shaped, followed by a widespread rash. If you are unsure whether a ring-shaped rash is ringworm, your pediatrician can do a simple skin scraping to check.' },
  ],
  whenNormal: ['A single small ring-shaped rash that responds to over-the-counter antifungal cream within 2 weeks','Nummular eczema patches that are round but respond to moisturizer and eczema care','A ring-shaped rash that is clearly related to a known skin condition your child has already been diagnosed with'],
  whenToMention: ['The ring-shaped rash is not improving after 2 weeks of antifungal cream','Your baby has a ring-shaped rash on the scalp with hair loss','Multiple ring-shaped rashes are appearing','You are unsure whether the rash is ringworm, eczema, or something else'],
  whenToActNow: ['A large expanding bull\'s-eye rash after possible tick exposure - needs evaluation for Lyme disease','Ring-shaped rash with fever, joint pain, or your child seeming unwell','Rapid spread of ring-shaped lesions covering large areas of the body'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-rash-wont-go-away','baby-persistent-eczema','baby-hair-not-growing'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Ringworm. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Ringworm.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Tinea Corporis. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/000877.htm' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Ringworm Information for Healthcare Professionals.', url: 'https://www.cdc.gov/fungal/diseases/ringworm/health-professionals.html' },
  ],
};

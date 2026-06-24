import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-ring-worm-daycare',
  title: 'Ringworm in Babies from Daycare',
  category: 'skin',
  searchTerms: [
    'baby ringworm daycare',
    'ringworm infant treatment',
    'baby circular rash ring',
    'tinea baby',
    'fungal infection baby skin',
    'ringworm contagious daycare',
    'baby red circle rash',
    'ringworm toddler scalp',
    'how did baby get ringworm',
    'ringworm not going away baby',
  ],
  quickAnswer:
    'Ringworm (tinea) is a common fungal skin infection, not a worm. It appears as a red, scaly, circular patch with a clearer center and is very contagious through direct skin contact or shared items. Daycare settings are common sources due to close contact between children. Ringworm is treatable with antifungal creams, and most cases clear within 2-4 weeks of consistent treatment.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Ringworm is less common in very young infants but can occur through contact with infected caregivers, pets, or contaminated surfaces. In young babies, it typically appears on the body (tinea corporis) as one or more red, scaly circular patches. Because many skin conditions in infants look similar, see your pediatrician for proper diagnosis before applying any antifungal cream. Over-the-counter antifungal creams like clotrimazole are generally safe for infants, but get confirmation from your doctor first.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies in daycare at this age are more likely to encounter ringworm. The infection spreads through shared toys, mats, and direct skin contact. Keep the infected area clean and covered when possible. Apply antifungal cream as directed by your pediatrician, typically twice daily for 2-4 weeks. Continue treatment for at least one week after the rash appears to have cleared to prevent recurrence. Your baby can return to daycare once treatment has started, per most daycare policies.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers in daycare are at highest risk for ringworm due to close play, sharing, and contact with surfaces. Scalp ringworm (tinea capitis) is more common in toddlers and requires oral antifungal medication, as topical creams do not penetrate the hair follicle effectively. Scalp ringworm may present as scaly patches, hair loss, or a kerion (tender, swollen area). If ringworm on the body does not respond to 2-4 weeks of topical treatment, your doctor may prescribe oral medication.',
    },
  ],
  whenNormal: [
    'A single small circular patch that is responding to antifungal cream treatment within a week.',
    'The rash is improving with consistent antifungal cream application and is not spreading.',
    'Your baby has ringworm but is otherwise healthy and not bothered by it.',
  ],
  whenToMention: [
    'The rash is not improving after 2 weeks of consistent antifungal cream use.',
    'Your baby has multiple patches or the ringworm keeps spreading despite treatment.',
    'The ringworm is on your baby\'s scalp (requires oral medication).',
  ],
  whenToActNow: [
    'The ringworm area becomes hot, swollen, painful, and oozing - this could indicate a secondary bacterial infection or kerion.',
    'Your baby develops a widespread rash or fever along with the ringworm.',
    'Your baby has a weakened immune system and develops any fungal infection.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-scabies-symptoms', 'baby-rash-from-new-detergent', 'molluscum'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Ringworm. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Ringworm.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Ringworm Information for Healthcare Professionals.',
      url: 'https://www.cdc.gov/fungal/diseases/ringworm/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Tinea Infections. MedlinePlus.',
      url: 'https://medlineplus.gov/tineainfections.html',
    },
  ],
};

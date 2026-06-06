import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-athletes-foot-toddler',
  title: 'Athlete\'s Foot in Toddlers',
  category: 'skin',
  searchTerms: ['toddler athlete foot', 'baby athlete foot', 'child tinea pedis', 'toddler foot fungus', 'toddler itchy feet', 'toddler peeling feet', 'toddler feet cracking between toes', 'athlete foot young child', 'toddler foot skin peeling', 'fungal infection toddler feet'],
  quickAnswer: 'True athlete\'s foot (tinea pedis) is actually uncommon in babies and toddlers but can occasionally occur in children who walk barefoot in moist communal areas. Peeling or dry skin on toddler feet is more often caused by juvenile plantar dermatosis (dry, cracked skin from friction) or eczema rather than a fungal infection.',
  byAge: [
    { ageRange: '0-3 months', context: 'Athlete\'s foot does not occur in non-walking infants. Peeling skin on newborn feet is normal and part of the transition from the womb. No treatment is needed for normal newborn skin peeling.' },
    { ageRange: '3-6 months', context: 'Fungal infections of the feet are not expected at this age. If your baby has red, peeling, or irritated skin on the feet, it is more likely eczema, contact dermatitis from socks, or moisture-related irritation.' },
    { ageRange: '6-12 months', context: 'As babies begin standing and walking, their feet are exposed to more friction. Dry, cracking skin on the soles or between the toes is usually juvenile plantar dermatosis or irritation rather than athlete\'s foot. Keeping feet dry and applying moisturizer helps.' },
    { ageRange: '12-24 months', context: 'Toddlers who swim, attend gyms, or walk barefoot in communal areas may occasionally develop tinea pedis. It appears as scaling, cracking, or redness between the toes or on the soles. Over-the-counter antifungal cream usually resolves it. If foot peeling is symmetric and on the sole\'s weight-bearing areas, it is more likely juvenile plantar dermatosis.' },
  ],
  whenNormal: ['Mildly dry or peeling skin on the soles of a toddler\'s feet, especially in warm weather', 'Slight redness between toes that resolves with keeping feet dry'],
  whenToMention: ['Persistent peeling, cracking, or scaling between the toes despite keeping feet clean and dry', 'Itchy feet that are bothering your toddler', 'You are unsure whether the condition is fungal or another cause'],
  whenToActNow: ['A foot rash with significant swelling, warmth, pain, or red streaks suggesting a bacterial infection', 'Blistering on the feet with fever in a young infant'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAD', citation: 'American Academy of Dermatology. Athlete\'s Foot: Overview.', url: 'https://www.aad.org/public/diseases/a-z/athletes-foot-overview' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Athlete\'s Foot. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Athletes-Foot.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Juvenile Plantar Dermatosis. Pediatric Dermatology.', url: 'https://pubmed.ncbi.nlm.nih.gov/18422839/' },
  ],
  relatedConcernSlugs: ['baby-verruca-foot-wart', 'baby-rash-on-feet-only', 'baby-tinea-corporis'],
};

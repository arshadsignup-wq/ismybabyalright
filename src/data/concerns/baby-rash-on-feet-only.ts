import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-on-feet-only',
  title: 'Rash Only on Baby\'s Feet',
  category: 'skin',
  searchTerms: [
    'baby rash on feet',
    'rash only on baby feet',
    'baby red feet',
    'baby blisters on feet',
    'baby peeling skin feet',
    'infant foot rash',
    'toddler rash on feet',
    'baby sole of foot rash',
    'hand foot mouth feet rash',
    'baby athlete foot',
  ],
  quickAnswer:
    'Rashes that appear only on a baby\'s feet can be caused by hand-foot-and-mouth disease, contact dermatitis from shoes or socks, eczema, or fungal infections in older toddlers. Most causes are mild and treatable, but blistering rashes on the feet alongside a fever should be evaluated.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns may have peeling skin on their feet, which is a completely normal part of adjusting to life outside the womb. Erythema toxicum can occasionally appear on the feet. Tiny blisters on a newborn\'s feet, especially if they look infected, should be evaluated to rule out uncommon conditions.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Rashes on the feet at this age may be caused by eczema, contact dermatitis from socks or booties, or viral infections such as hand-foot-and-mouth disease. Eczema on the feet often appears on the tops rather than the soles. Keep feet clean and dry and use fragrance-free moisturizer.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start pulling up and cruising, contact with floors and shoes can cause irritation. Hand-foot-and-mouth disease is common at this age and causes distinctive small blisters on the soles. Shoe dermatitis may develop if shoes contain irritating materials or dyes.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may develop foot rashes from sweaty shoes, contact dermatitis, or hand-foot-and-mouth disease. Athlete\'s foot (fungal infection) is uncommon in this age group but can occasionally occur. Plantar warts may also begin appearing on the soles in toddlers who walk barefoot in shared spaces.',
    },
  ],
  whenNormal: [
    'Peeling skin on newborn feet during the first few weeks of life',
    'Mild redness that resolves after removing tight socks or shoes',
    'Small blisters on the soles during a known hand-foot-and-mouth outbreak at daycare',
  ],
  whenToMention: [
    'The rash on the feet is persistent, worsening, or not responding to basic care',
    'Blisters on the feet are painful and making it hard for your child to walk',
    'The rash appears only on the feet with no clear cause and is spreading',
  ],
  whenToActNow: [
    'A newborn under 2 months develops blisters or a pustular rash on the feet with fever',
    'The foot rash is accompanied by significant swelling, warmth, and red streaks spreading up the leg, suggesting a serious infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hand, Foot, and Mouth Disease. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Hand-Foot-and-Mouth-Disease.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Contact Dermatitis: Overview.',
      url: 'https://www.aad.org/public/diseases/a-z/contact-dermatitis-overview',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Juvenile Plantar Dermatosis. DermNet NZ.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/18422839/',
    },
  ],
  relatedConcernSlugs: ['hand-foot-mouth', 'contact-dermatitis-baby', 'eczema', 'baby-verruca-foot-wart'],
};

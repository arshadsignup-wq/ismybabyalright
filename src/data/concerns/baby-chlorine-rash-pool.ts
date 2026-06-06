import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-chlorine-rash-pool',
  title: 'Pool Water Skin Reaction in Baby',
  category: 'skin',
  searchTerms: [
    'baby chlorine rash',
    'baby rash after pool',
    'baby pool rash',
    'baby skin irritation swimming',
    'chlorine rash baby',
    'baby eczema after pool',
    'toddler chlorine rash',
    'baby red skin after swimming',
    'pool rash infant',
    'chlorine sensitivity baby',
  ],
  quickAnswer:
    'Chlorine in pool water can irritate a baby\'s sensitive skin, causing dryness, redness, and rash. Babies with eczema are especially susceptible. Rinsing your baby with fresh water immediately after swimming, followed by applying moisturizer, helps prevent chlorine-related skin irritation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Swimming in chlorinated pools is generally not recommended for babies under about 2 months due to infection risk and temperature regulation concerns. If you do introduce water play, keep sessions very brief and rinse skin immediately after with fresh water.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies can begin swimming classes from this age. Chlorine can dry out their delicate skin significantly. Apply a thin layer of petroleum jelly or barrier cream before swimming to provide some protection. After swimming, rinse immediately and apply a thick fragrance-free moisturizer.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With regular swimming, some babies develop recurrent dryness or rashes. The combination of chlorine and sun exposure can be especially irritating. Limiting pool time to 20 to 30 minutes and establishing a post-swim rinse and moisturize routine are the best preventive measures.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who swim frequently may develop persistent dryness or eczema flares from chlorine exposure. If pool rashes are recurrent, try applying a barrier cream before each swim and consider swim shirts to reduce skin exposure. If eczema worsens significantly with swimming, discuss with your pediatrician.',
    },
  ],
  whenNormal: [
    'Mild skin dryness after swimming that resolves with moisturizer',
    'Temporary redness that fades within hours of rinsing off chlorine',
  ],
  whenToMention: [
    'Persistent rashes or eczema flares triggered by pool swimming',
    'Your baby seems uncomfortable after every swim session despite preventive care',
  ],
  whenToActNow: [
    'A widespread itchy rash with blisters or pustules after swimming in a pool, hot tub, or lake, which could be hot tub folliculitis or another infection',
    'Difficulty breathing or severe skin reaction after pool exposure',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Swimming Safety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Swimming-Safety.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. How to Care for Skin After Swimming.',
      url: 'https://www.aad.org/public/everyday-care/skin-care-basics/dry/after-swimming',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Swimming Pool Dermatitis. Clinics in Dermatology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/27265073/',
    },
  ],
  relatedConcernSlugs: ['baby-rash-after-swimming', 'eczema', 'dry-skin'],
};

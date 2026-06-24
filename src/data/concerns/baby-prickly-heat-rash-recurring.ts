import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-prickly-heat-rash-recurring',
  title: 'My Baby Gets Recurring Prickly Heat Rash',
  category: 'skin',
  searchTerms: [
    'baby recurring heat rash',
    'baby prickly heat keeps coming back',
    'chronic heat rash baby',
    'baby heat rash prevention tips',
    'baby overheating rash repeatedly',
    'miliaria rubra recurrent baby',
    'baby rash every summer',
    'baby heat rash wont go away',
    'preventing heat rash baby',
    'baby sweating rash recurring',
  ],
  quickAnswer:
    'Recurring heat rash (miliaria) in babies happens because their sweat glands are immature and easily blocked, especially in hot or humid conditions. Babies who overheat frequently, are overdressed, or live in warm climates are particularly prone to recurrent episodes. Prevention is the best strategy: dress your baby in loose, breathable cotton clothing, maintain a cool environment (68-72 degrees F), keep skin folds clean and dry, and avoid heavy creams that can block pores. Most babies outgrow frequent heat rash as their sweat glands mature.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young infants are most susceptible to recurring heat rash because their eccrine sweat glands are functionally immature. Common trigger areas include the neck folds, groin creases, behind the ears, and anywhere clothing sits tightly. To prevent recurrence: keep the room temperature at 68-72 degrees F, avoid swaddling in warm weather, dress your baby in a single layer of loose cotton clothing, and avoid synthetic fabrics. After bathing, gently pat all skin folds completely dry. Avoid powder (it can be inhaled) and thick creams on rash-prone areas. If your baby gets heat rash frequently despite temperature management, mention it to your pediatrician to ensure there is not an underlying skin condition.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more active, they generate more body heat and may sweat more, increasing the risk of recurring heat rash. During warm months, take extra precautions: limit outdoor time during peak heat hours, use fans or air conditioning, and change damp clothing promptly. For babies with chubby skin folds, clean and dry these areas regularly throughout the day. If heat rash is frequently complicated by bacterial infection (pus-filled bumps, increasing redness, warmth), your pediatrician may recommend an antibacterial wash. Some babies who are prone to heat rash also have eczema — the conditions can coexist and exacerbate each other.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers who play actively in warm weather may continue to get heat rash. Dress them in loose, light-colored, breathable clothing. Ensure adequate hydration and frequent rest breaks in cool areas. Apply sunscreen at least 15 minutes before going outside so it absorbs before sweating begins — some sunscreens can contribute to blocked pores. If heat rash recurs very frequently in a toddler despite proper prevention measures, or if the rash looks different from typical heat rash (persistent, spreading, or associated with other symptoms), your pediatrician may want to evaluate for other skin conditions like eczema, fungal infections, or contact dermatitis.',
    },
  ],
  whenNormal: [
    'Heat rash appears during hot weather or after being overdressed and resolves within 1-3 days of cooling measures.',
    'The rash recurs seasonally during summer months but clears completely between episodes.',
    'Small, clear or red bumps appear in predictable areas (skin folds, under clothing) and do not spread to unusual locations.',
  ],
  whenToMention: [
    'Heat rash recurs very frequently despite your best prevention efforts.',
    'The rash persists for more than 3-4 days despite cooling measures and you want to rule out other conditions.',
    'Your baby seems to have very sensitive skin that reacts to many different triggers, not just heat.',
  ],
  whenToActNow: [
    'The rash develops signs of infection: pus-filled bumps, increasing redness and warmth, spreading red streaks, or your baby has a fever — see your pediatrician for possible antibiotic treatment.',
    'The rash is accompanied by signs of heat exhaustion: lethargy, excessive fussiness, vomiting, or your baby feels very hot — cool your baby immediately and seek medical care.',
    'The rash is widespread, blistering, or your baby is in significant distress — seek prompt medical evaluation to rule out more serious skin conditions.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-heat-rash', 'baby-heat-exhaustion-signs', 'baby-high-temperature-environment-risk'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Keeping Your Baby Cool in Hot Weather',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Hot-Weather-Safety.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic — Heat Rash: Prevention',
      url: 'https://www.mayoclinic.org/diseases-conditions/heat-rash/symptoms-causes/syc-20373276',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine — Miliaria: Prevention and Management',
      url: 'https://medlineplus.gov/ency/article/001456.htm',
    },
  ],
};

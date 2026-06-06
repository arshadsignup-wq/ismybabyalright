import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-dry-skin-winter',
  title: 'Baby Dry Skin in Winter',
  category: 'skin',
  searchTerms: [
    'baby dry skin winter',
    'baby skin dry cold weather',
    'baby winter skin care',
    'baby chapped skin winter',
    'baby cracked skin cold weather',
    'infant dry skin winter months',
    'baby skin peeling winter',
    'baby red dry cheeks winter',
    'winter eczema baby',
    'baby skin care cold weather tips',
  ],
  quickAnswer:
    'Winter dry skin is extremely common in babies because cold outdoor air and dry indoor heating strip moisture from the skin. Using a humidifier, applying thick moisturizer frequently, limiting bath time, and protecting exposed skin when outdoors are the best ways to keep your baby\'s skin healthy during cold months.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborn skin is particularly sensitive to winter dryness. Keep baths short (5 to 10 minutes) in lukewarm water, and apply a thick ointment-based moisturizer immediately after. Using a cool-mist humidifier in the nursery helps maintain skin-friendly humidity levels of 30 to 50 percent.' },
    { ageRange: '3-6 months', context: 'Baby cheeks are often the first area to show winter dryness, becoming red and chapped from cold wind exposure. Apply a protective layer of petroleum jelly to the face before going outside. Continue limiting baths and using gentle, fragrance-free cleansers only where needed rather than all over the body.' },
    { ageRange: '6-12 months', context: 'As babies become more mobile, hands and knees may also become dry and chapped. If your baby already has eczema, winter can trigger significant flares. Increase moisturizing frequency during cold months and use thicker products like ointments rather than lotions.' },
    { ageRange: '12-24 months', context: 'Toddlers who spend time outdoors in cold weather may develop dry, chapped hands, cheeks, and lips. Keep a small container of moisturizer handy to reapply throughout the day. Dress your toddler in soft, breathable layers and avoid irritating wool directly against the skin.' },
  ],
  whenNormal: [
    'Mildly dry, slightly rough skin during winter that responds to increased moisturizing',
    'Red cheeks after outdoor exposure in cold weather that return to normal once inside',
    'Skin that is drier in winter and improves in spring and summer',
  ],
  whenToMention: [
    'Dry skin is cracking, bleeding, or causing your baby discomfort despite regular moisturizing',
    'Winter dryness is triggering eczema flares that need prescription treatment',
    'Your baby\'s skin is so dry it is affecting sleep or daily comfort',
  ],
  whenToActNow: [
    'Severely cracked skin develops signs of infection such as oozing, warmth, or redness',
    'Your baby has frostbite-like changes with white, hard, or numb skin after cold exposure',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Winter Skin Care Tips for Kids. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Winter-Safety-Tips.aspx' },
    { org: 'AAD', citation: 'American Academy of Dermatology. Dry Skin: Tips for Managing.', url: 'https://www.aad.org/public/everyday-care/skin-care-basics/dry/dermatologists-tips-relieve-dry-skin' },
    { org: 'NIH', citation: 'National Library of Medicine. Skin Care for the Newborn. Pediatric Dermatology.', url: 'https://pubmed.ncbi.nlm.nih.gov/26032609/' },
  ],
  relatedConcernSlugs: ['dry-skin', 'eczema', 'baby-eczema-moisturizer-routine', 'baby-rash-seasonal-recurrent'],
};

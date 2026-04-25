import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sunburn-baby',
  title: 'My Baby Got a Sunburn',
  category: 'skin',
  searchTerms: [
    'baby sunburn',
    'sunburn on infant',
    'baby red skin after sun',
    'how to treat baby sunburn',
    'sunburn baby face',
    'baby sunburn blisters',
    'sunscreen for babies',
    'when can babies wear sunscreen',
    'baby sun exposure',
    'infant sunburn remedy',
  ],
  quickAnswer:
    'Baby skin is much thinner and more sensitive than adult skin, so sunburns can happen quickly even on cloudy days. A mild sunburn will appear as pink or red skin that feels warm to the touch and typically heals within a few days. Keep your baby out of direct sun, apply cool compresses, and ensure they stay well hydrated while the burn heals.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies under 6 months should be kept out of direct sunlight entirely. Their skin has very little melanin and burns extremely easily. The AAP recommends avoiding sunscreen on babies under 6 months and instead using shade, hats, and protective clothing. If your baby under 6 months does get a sunburn, even a mild one, contact your pediatrician, as young infants are more vulnerable to dehydration and the effects of sun exposure.',
    },
    {
      ageRange: '6-12 months',
      context:
        'After 6 months, you can apply a small amount of broad-spectrum SPF 30+ sunscreen to exposed areas that clothing does not cover, such as hands and face. A wide-brimmed hat and UV-protective clothing remain the best defenses. If your baby gets a mild sunburn, apply cool (not cold) damp cloths to the affected areas, offer extra breast milk or formula to prevent dehydration, and use a fragrance-free moisturizer to soothe dry peeling skin.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers love being outdoors, making consistent sun protection essential. Apply broad-spectrum sunscreen at least 15-20 minutes before going outside and reapply every 2 hours or after swimming or sweating. For a mild sunburn, cool baths, gentle moisturizers, and loose cotton clothing are the best remedies. Avoid products with benzocaine or lidocaine on young children. Ibuprofen (if your child is old enough) can help with pain and inflammation.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Continue diligent sun protection habits. Teach your toddler about wearing hats and seeking shade. Sunburns at a young age increase the lifetime risk of skin cancer, so prevention is key. If a sunburn does occur, keep the skin moisturized, avoid popping any blisters that form, and keep your child out of the sun until the burn has fully healed. Peeling is a normal part of healing and should not be picked at.',
    },
  ],
  whenNormal: [
    'Mildly pink or red skin that is warm to the touch and appeared after sun exposure',
    'Mild fussiness due to skin discomfort that improves with cool compresses and moisturizer',
    'Skin that begins to peel after a few days as part of the normal healing process',
  ],
  whenToMention: [
    'The sunburn covers a large area of your baby\'s body or affects the face significantly',
    'Your baby seems more uncomfortable than expected, is not eating or drinking well, or the redness is not improving after 2-3 days',
  ],
  whenToActNow: [
    'Your baby develops blisters, severe swelling, fever, chills, nausea, or signs of dehydration (fewer wet diapers, no tears when crying, sunken fontanelle) after sun exposure',
    'A baby under 6 months has any degree of sunburn, as young infants need medical evaluation for sun-related skin damage',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sun Safety: Information for Parents About Sunburn & Sunscreen. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/sun-safety/Pages/Sun-Safety.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sunburn Treatment and Prevention. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Sunburn-Treatment-and-Prevention.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. How to Treat Sunburn.',
      url: 'https://www.aad.org/public/everyday-care/injured-skin/burns/treat-sunburn',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-behind-ears',
  title: 'Baby Rash Behind Ears',
  category: 'skin',
  searchTerms: [
    'baby rash behind ears',
    'rash behind baby ears',
    'red behind baby ears',
    'baby ears red and crusty',
    'behind ear rash infant',
    'baby skin cracking behind ears',
    'baby eczema behind ears',
    'infant rash behind ear lobe',
    'crusty behind baby ears',
    'baby ear fold rash',
  ],
  quickAnswer:
    'Rashes behind the ears are very common in babies and are usually caused by moisture buildup, seborrheic dermatitis (cradle cap), or eczema. Keeping the area clean and dry, and applying a gentle moisturizer, usually resolves it quickly.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In newborns, rashes behind the ears are most often seborrheic dermatitis, the same condition that causes cradle cap on the scalp. It appears as yellowish, greasy, scaly patches. Milk and drool can also collect behind the ears during feeds and cause irritation. Gently cleaning the area during baths and patting it dry is usually all that is needed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, drool and spit-up commonly pool behind the ears, especially when babies lie on their sides. This moisture can lead to redness and even cracking of the skin. Eczema may also first appear in this area. Keeping the skin dry and applying a fragrance-free moisturizer or thin layer of petroleum jelly helps protect the skin.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more active and sweat more, the warm, enclosed area behind the ears can stay moist and become irritated. Eczema behind the ears may become more persistent at this stage. If the rash is itchy and your baby scratches it, watch for signs of secondary infection such as oozing or crusting.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may develop rashes behind the ears from eczema, sweat, or contact dermatitis from shampoos and soaps. Seborrheic dermatitis can persist or recur in this age group. If the area becomes consistently cracked and weepy, or if your child seems bothered by pain or itching, discuss treatment options with your pediatrician.',
    },
  ],
  whenNormal: [
    'Mild redness behind the ears that improves with gentle cleaning and drying',
    'Yellowish, greasy scales similar to cradle cap on the scalp',
    'Slight dry patches that respond well to moisturizer',
  ],
  whenToMention: [
    'The rash is persistent, worsening, or spreading despite good skin care',
    'Skin behind the ears is cracking deeply or weeping fluid',
    'Your baby seems uncomfortable or is scratching at the area frequently',
  ],
  whenToActNow: [
    'The area becomes very swollen, warm, red, or shows signs of infection such as pus or honey-colored crusting',
    'Your baby develops a fever along with a worsening rash behind the ears',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eczema in Babies and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cradle Cap. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Cradle-Cap.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Seborrheic Dermatitis: Overview.',
      url: 'https://www.aad.org/public/diseases/a-z/seborrheic-dermatitis-overview',
    },
  ],
  relatedConcernSlugs: ['eczema', 'cradle-cap', 'baby-rash-in-skin-folds'],
};

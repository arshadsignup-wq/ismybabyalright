import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eczema-face-severe',
  title: 'Severe Facial Eczema in Baby',
  category: 'skin',
  searchTerms: [
    'baby severe eczema face',
    'baby bad eczema on face',
    'baby eczema face red raw',
    'infant eczema face won\'t clear',
    'baby eczema cheeks severe',
    'baby facial eczema treatment',
    'baby eczema face weeping',
    'baby eczema face cracking',
    'severe atopic dermatitis face baby',
    'baby eczema face not improving',
  ],
  quickAnswer:
    'Severe facial eczema in babies, while distressing to see, is manageable with the right approach. When moisturizing alone is not enough, your pediatrician may prescribe a mild topical corticosteroid or non-steroidal prescription cream safe for the face. Consistent, proactive skin care and identifying triggers can significantly improve your baby\'s comfort.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Severe facial eczema can appear as early as 2 to 3 months. The cheeks, forehead, and chin may become very red, rough, and weepy. In young infants, the face is the most commonly affected area. Frequent application of a thick, fragrance-free moisturizer or ointment is essential. If the skin is cracked or weeping, see your pediatrician for prescription treatment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Facial eczema may intensify at this age, especially with increased drooling. Drool can severely aggravate eczema on the cheeks and chin. Applying a barrier like petroleum jelly before feeds and cleaning drool promptly can help. Your pediatrician may prescribe a low-potency topical steroid for short-term use on the face.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start solids, food contact around the mouth can worsen facial eczema. Applying a thick barrier before meals protects the skin. Some babies have food allergies that contribute to eczema severity. If facial eczema is not responding to treatment, discuss the possibility of allergy testing with your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Facial eczema often begins to improve after the first year but can remain severe in some children. Newer non-steroidal prescription creams may be options for persistent facial eczema. A referral to a pediatric dermatologist or allergist may be helpful if standard treatments are not providing adequate control.',
    },
  ],
  whenNormal: [
    'Mild dry patches on the cheeks that respond to regular moisturizing',
    'Temporary worsening during dry or cold weather that improves with proactive care',
  ],
  whenToMention: [
    'Facial eczema is not improving despite consistent moisturizing and gentle skin care',
    'Your baby is scratching their face and causing skin damage',
    'Facial eczema is affecting your baby\'s sleep or comfort significantly',
    'You want to discuss prescription treatment options for your baby\'s face',
  ],
  whenToActNow: [
    'Facial eczema develops yellow crusting, oozing, or pus, suggesting a bacterial infection like impetigo',
    'Sudden severe worsening with painful, punched-out blisters, which could indicate eczema herpeticum requiring emergency treatment',
    'Your baby has severe facial eczema with swollen, puffy eyelids affecting their ability to see',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Treat and Control Eczema Rashes in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema-Tips.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Eczema Types: Atopic Dermatitis.',
      url: 'https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Eczema (Atopic Dermatitis) Treatment.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/eczema-treatment',
    },
  ],
  relatedConcernSlugs: ['eczema', 'baby-eczema-infected-signs', 'baby-eczema-steroid-cream-concerns', 'baby-eczema-moisturizer-routine'],
};

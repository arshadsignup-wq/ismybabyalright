import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-on-hands-only',
  title: 'Rash Only on Baby\'s Hands',
  category: 'skin',
  searchTerms: [
    'baby rash on hands',
    'rash only on baby hands',
    'baby blisters on hands',
    'baby red hands',
    'infant hand rash',
    'baby peeling skin hands',
    'baby palm rash',
    'toddler rash on hands',
    'baby hand rash bumps',
    'hand foot mouth hands rash',
  ],
  quickAnswer:
    'Rashes appearing only on a baby\'s hands are often caused by hand-foot-and-mouth disease, eczema, contact dermatitis from touching irritants, or dry skin. Since babies put their hands everywhere, exposure to surfaces and allergens is a common trigger. Most hand rashes are manageable with moisturizing and avoiding irritants.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns commonly have peeling, dry skin on their hands, which is a normal transition from the womb. Small white bumps called milia may appear on the fingers. Eczema can occasionally develop on the hands, especially the backs of the hands. Keeping the hands moisturized and avoiding excessive hand washing helps.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, babies constantly mouth their hands, leading to irritation from saliva. Drool-related rashes can extend to the hands and fingers. If your baby is sucking their thumb or fingers, redness and roughness around the mouth and hands is very common and usually harmless.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies explore by touching everything, contact dermatitis on the hands becomes more common. Hand-foot-and-mouth disease causes distinctive small blisters on the palms and fingers. Food reactions may also cause redness on the hands after touching certain foods like tomatoes or citrus.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers\' hands are constantly exposed to potential irritants from play, food, and outdoor surfaces. Eczema on the hands can become chronic. Peeling fingertips may occur after a viral illness. If hand rashes are interfering with your child\'s ability to play or self-feed, see your pediatrician.',
    },
  ],
  whenNormal: [
    'Dry, peeling skin on newborn hands in the first few weeks of life',
    'Mild redness on the hands from drool or food contact that resolves quickly',
    'Small blisters on the palms during a hand-foot-and-mouth infection with mild symptoms',
  ],
  whenToMention: [
    'The hand rash is persistent, cracking, or painful, especially if it interferes with grasping',
    'Peeling of the fingertips happens without a known preceding illness',
    'The rash is limited to the hands and has no clear trigger',
  ],
  whenToActNow: [
    'A newborn develops blisters or pustules on the hands with fever, which requires urgent evaluation',
    'Significant swelling of the hand with red streaks, warmth, and fever suggesting a spreading infection',
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
        'American Academy of Dermatology. Eczema Types: Hand Eczema.',
      url: 'https://www.aad.org/public/diseases/eczema/types/hand-eczema',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Hand Dermatitis in Children. Pediatric Dermatology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/23679316/',
    },
  ],
  relatedConcernSlugs: ['hand-foot-mouth', 'eczema', 'contact-dermatitis-baby', 'baby-dry-cracked-skin-hands'],
};

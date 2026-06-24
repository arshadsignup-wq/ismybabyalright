import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sunburn-treatment',
  title: 'Treating Sunburn in Babies and Toddlers',
  category: 'skin',
  searchTerms: [
    'baby sunburn treatment',
    'toddler sunburn what to do',
    'baby sunburn aloe vera',
    'sunburn treatment infant',
    'baby red from sun',
    'baby sunburn blisters',
    'baby sunburn home remedy',
    'sunburn relief baby',
    'baby skin burned sun',
    'how to treat baby sunburn',
  ],
  quickAnswer:
    'If your baby gets a sunburn, immediately move them out of the sun and apply cool (not cold) compresses to the affected area. For mild sunburn, apply fragrance-free moisturizer or pure aloe vera gel. Give extra fluids to prevent dehydration. Avoid numbing sprays or products with benzocaine. Any sunburn in a baby under 6 months, or a sunburn with blisters, fever, or covering a large area in any child, requires a call to your pediatrician.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies under 6 months should be kept out of direct sunlight entirely, as their skin is extremely sensitive and sunscreen is not recommended for this age. If your baby under 6 months gets sunburned, contact your pediatrician immediately, as even a mild sunburn is considered significant at this age. Use shade, hats, and sun-protective clothing as prevention. Cool compresses with a clean cloth can provide relief while you contact your doctor. Keep your baby well-hydrated with extra breast milk or formula.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies over 6 months can use sunscreen (SPF 30+, broad-spectrum) on exposed areas. If sunburn occurs, apply cool compresses for 10-15 minutes several times a day. Apply pure aloe vera gel or fragrance-free moisturizing lotion to the burn. Avoid products with benzocaine, lidocaine, or alcohol, which can irritate baby skin. Dress your baby in loose, soft clothing over the burned area. Give extra breast milk, formula, or water to maintain hydration. Keep your baby out of the sun until the burn heals completely.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Treat toddler sunburns with cool baths (not cold), cool compresses, and fragrance-free moisturizer or aloe vera. Children\'s ibuprofen can help with pain and inflammation if approved by your pediatrician. Peeling skin is a normal part of healing - do not pick or peel it. If blisters form, do not pop them; cover loosely and let them heal naturally. Remind caregivers and family about sun protection: SPF 30+ reapplied every 2 hours, sun-protective clothing, and shade during peak UV hours (10 AM - 4 PM).',
    },
  ],
  whenNormal: [
    'Mild pinkness that fades within a day or two with cool compresses and moisturizer.',
    'Your baby is comfortable, eating normally, and the redness is not spreading.',
    'Mild peeling occurs a few days after the burn and the skin underneath looks healthy.',
  ],
  whenToMention: [
    'Your baby has a sunburn that is red and painful but without blisters.',
    'The sunburn covers a large area of the body.',
    'Your baby seems uncomfortable and you need guidance on safe pain relief.',
  ],
  whenToActNow: [
    'Any sunburn in a baby under 6 months of age.',
    'Sunburn with blisters, severe swelling, or covering more than a small area.',
    'Your baby develops fever, chills, nausea, headache, or confusion after sun exposure - signs of heat illness or severe sunburn.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sunburn-under-six-months', 'baby-swimming-pool-safety-age', 'baby-rash-from-new-detergent'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Sun Safety: Information for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/sun-safety/Pages/Sun-Safety.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Sun Safety for Children.',
      url: 'https://www.cdc.gov/skin-cancer/sun-safety/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Sunburn Treatment. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Sunburn-Treatment-and-Prevention.aspx',
    },
  ],
};

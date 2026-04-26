import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'eczema-flare-triggers',
  title: 'Eczema Flare Triggers in Babies',
  category: 'skin',
  searchTerms: [
    'eczema flare triggers baby',
    'what triggers baby eczema',
    'baby eczema getting worse',
    'eczema flare up baby',
    'baby eczema triggers list',
    'why does baby eczema come and go',
    'eczema and food triggers baby',
    'baby eczema detergent',
    'eczema weather changes baby',
    'how to prevent eczema flares baby',
    'baby eczema heat',
  ],
  quickAnswer:
    'Eczema flares are triggered by different things for different babies, but common culprits include dry air, irritating fabrics, fragranced products, heat and sweating, saliva from drooling, and sometimes certain foods. Identifying your baby\'s specific triggers through observation can help reduce flares, and a consistent moisturizing routine is the foundation of eczema management.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Early eczema often appears on the cheeks and scalp. Common triggers at this age include dry indoor air (especially in winter), fragranced soaps or lotions, rough fabrics against the skin, and overheating. Use fragrance-free products, dress baby in soft cotton layers, and moisturize generously at least twice daily with a thick cream or ointment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Drool becomes a major trigger as salivary glands activate. The enzymes in saliva break down the already compromised skin barrier. Apply petroleum jelly around the mouth and chin to protect against drool. Laundry detergent, fabric softeners, and baby wipes with fragrances or alcohol are other common triggers to eliminate.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Starting solids introduces potential food triggers. The most common food triggers for eczema are cow\'s milk, eggs, peanuts, wheat, and soy. However, do not eliminate foods without medical guidance - food avoidance does not always help eczema and can affect nutrition. Food contact on the skin (especially acidic foods) can also trigger facial flares.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Eczema may shift from the face to the inner elbows, behind the knees, and on wrists and ankles. Triggers often include seasonal changes (worse in winter), sweating (worse in summer for some), pet dander, dust mites, and certain clothing materials. A consistent "soak and seal" bath routine - lukewarm bath followed by immediate moisturizer application - is very effective.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Many children see eczema improve between ages 2-5, though some have it longer. Environmental allergens like pollen and dust may become more significant triggers. Working with your pediatrician to develop a proactive treatment plan (daily moisturizing, appropriate use of prescription creams when needed) helps manage ongoing eczema.',
    },
  ],
  whenNormal: [
    'Eczema that flares and improves in a predictable pattern related to identified triggers',
    'Mild redness and dryness that responds well to moisturizing and trigger avoidance',
    'Seasonal patterns - worse in winter or with weather changes',
    'Occasional flares during illness, teething, or stress',
  ],
  whenToMention: [
    'Eczema is worsening despite consistent moisturizing and trigger avoidance',
    'Your baby is scratching so much that sleep is disrupted or the skin is breaking open',
    'You suspect a specific food trigger and want guidance on testing',
  ],
  whenToActNow: [
    'Eczema patches become oozing, crusted with yellow or green discharge, or have spreading redness suggesting a bacterial infection',
    'Your baby develops clusters of small painful blisters on eczema patches, which could indicate eczema herpeticum - a serious complication requiring immediate treatment',
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
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Eczema (Atopic Dermatitis).',
      url: 'https://www.niaid.nih.gov/diseases-conditions/eczema-atopic-dermatitis',
    },
  ],
};

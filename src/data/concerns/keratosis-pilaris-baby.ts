import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'keratosis-pilaris-baby',
  title: 'Bumpy Skin on My Baby\'s Arms or Cheeks',
  category: 'skin',
  searchTerms: [
    'keratosis pilaris baby',
    'baby chicken skin',
    'bumpy skin on baby arms',
    'rough skin on baby cheeks',
    'baby sandpaper skin',
    'tiny bumps on baby skin',
    'baby goosebumps won\'t go away',
    'KP in babies',
    'textured skin on toddler',
    'baby skin feels like goosebumps',
  ],
  quickAnswer:
    'Keratosis pilaris (KP) is a very common, harmless skin condition that causes small, rough bumps that feel like sandpaper, usually on the upper arms, thighs, cheeks, or buttocks. It is caused by a buildup of keratin and often runs in families. While it cannot be cured, gentle moisturizing can improve the texture and appearance.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Keratosis pilaris is less common in very young infants but can appear on the cheeks, especially in babies with eczema or dry skin. The bumps may look like tiny whiteheads or flesh-colored raised dots. They do not bother your baby and require no treatment, though gentle moisturizing after baths can help.',
    },
    {
      ageRange: '6-18 months',
      context:
        'KP often becomes more noticeable during this period, especially on the upper arms and thighs. The skin feels rough and bumpy to the touch, like sandpaper or permanent goosebumps. It tends to worsen in dry winter months and improve with humidity. Regular use of a fragrance-free moisturizer can soften the bumps.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Toddlers with KP may have bumps on their outer arms, thighs, cheeks, or buttocks. The condition is completely painless and does not itch, though it may look red or slightly inflamed in some children. If the skin is itchy or weeping, eczema rather than KP may be the issue and should be discussed with your pediatrician.',
    },
    {
      ageRange: '3+ years',
      context:
        'Keratosis pilaris often persists through childhood and can wax and wane with seasons or skin dryness. While there is no cure, consistent moisturizing helps improve the texture. Some children outgrow it during puberty, while others continue to have it into adulthood. It does not lead to scarring or other complications.',
    },
  ],
  whenNormal: [
    'Small, rough, flesh-colored or slightly red bumps on the upper arms, thighs, cheeks, or buttocks',
    'The skin feels like sandpaper or permanent goosebumps but does not itch or hurt',
    'The bumps tend to worsen in winter when the air is dry and improve in summer humidity',
    'Your baby or toddler does not seem bothered by the texture and acts completely normal',
    'One or both parents have a history of similar bumpy skin, eczema, or very dry skin',
  ],
  whenToMention: [
    'The bumps are very red, inflamed, or seem to be spreading rapidly',
    'The affected skin is itchy, weeping, or forming crusts, which may suggest eczema',
    'You are unsure if the bumps are keratosis pilaris or another skin condition',
    'The bumps are not improving despite regular moisturizing and gentle skin care',
  ],
  whenToActNow: [
    'The bumpy areas become infected with pus, swelling, warmth, or red streaks',
    'Your baby develops widespread skin changes along with fever, pain, or signs of illness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Keratosis Pilaris. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Keratosis-Pilaris.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Keratosis Pilaris: Diagnosis and Treatment.',
      url: 'https://www.aad.org/public/diseases/a-z/keratosis-pilaris-treatment',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Keratosis Pilaris. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001462.htm',
    },
  ],
};

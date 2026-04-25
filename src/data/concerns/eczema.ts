import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'eczema',
  title: 'Baby Eczema (Atopic Dermatitis)',
  category: 'skin',
  searchTerms: [
    'baby eczema',
    'baby dry red patches on skin',
    'infant eczema treatment',
    'baby eczema on face',
    'atopic dermatitis baby',
    'baby eczema cream',
    'when does baby eczema go away',
    'baby scratching skin raw',
    'baby eczema flare up',
    'eczema on baby cheeks',
    'baby eczema vs dry skin',
  ],
  quickAnswer:
    'Baby eczema is extremely common, affecting up to 20% of infants, and is not caused by anything you did wrong. It shows up as dry, red, itchy patches and is very manageable with consistent moisturizing and gentle skin care. Most children outgrow it by school age.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Eczema in very young babies typically appears on the face, especially the cheeks, forehead, and scalp. It can look like rough, red, or scaly patches. At this age, it is often confused with baby acne or cradle cap. Keeping skin well-moisturized with a fragrance-free ointment or cream after baths is the most important step.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is a very common age for eczema to first appear. Patches may spread from the face to the arms, chest, and legs. Drool can irritate the chin and neck area and worsen eczema there. Applying a barrier cream like petroleum jelly around the mouth before feeds can help protect irritated skin.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more mobile, eczema often shifts to the creases of the elbows, behind the knees, and on the wrists and ankles. The introduction of solid foods can sometimes trigger flares, particularly with common allergens. Work with your pediatrician if you notice a pattern between certain foods and worsening eczema.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddler eczema tends to settle into a chronic pattern of flares and remissions. It commonly appears in skin folds, on hands, and around the wrists and ankles. Many children begin to improve between ages 2 and 5. Keeping nails short and using cotton clothing can reduce scratching damage.',
    },
  ],
  whenNormal: [
    'Mild, dry, slightly rough patches on the cheeks or outer arms that respond well to moisturizer',
    'Occasional flare-ups that come and go, especially during dry or cold weather',
    'Eczema that runs in your family, since there is a strong genetic component',
    'Patches that appear after starting new foods but remain mild and manageable',
    'Skin that looks better in humid weather and worse in winter',
  ],
  whenToMention: [
    'Eczema patches are spreading, thickening, or not improving with regular moisturizing',
    'Your baby is scratching intensely and the skin is becoming cracked or weeping',
    'You suspect a connection between certain foods and eczema flares',
    'Over-the-counter treatments are not providing adequate relief',
  ],
  whenToActNow: [
    'Eczema patches develop yellow crusting, oozing, or pus, which may indicate a skin infection',
    'Your baby develops a sudden widespread worsening with painful, blistered areas, which could indicate eczema herpeticum, a serious viral infection requiring urgent treatment',
    'Your baby has a fever along with worsening eczema patches',
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
        'American Academy of Pediatrics. How to Treat and Control Eczema Rashes in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema-Tips.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Eczema (Atopic Dermatitis).',
      url: 'https://www.niaid.nih.gov/diseases-conditions/eczema-atopic-dermatitis',
    },
  ],
};

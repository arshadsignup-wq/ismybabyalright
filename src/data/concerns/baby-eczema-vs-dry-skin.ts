import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eczema-vs-dry-skin',
  title: 'Is It Eczema or Just Dry Skin?',
  category: 'skin',
  searchTerms: ['baby eczema or dry skin', 'baby dry skin vs eczema', 'how to tell eczema from dry skin', 'baby dry patch eczema', 'toddler eczema difference', 'baby rough dry patch on cheek', 'baby itchy dry skin', 'eczema vs dermatitis baby', 'baby dry skin won\'t go away', 'baby flaky skin eczema'],
  quickAnswer: 'Dry skin and eczema (atopic dermatitis) can look similar, but there are key differences. Simple dry skin feels rough and may flake but is not typically red, inflamed, or very itchy. Eczema causes red or darker patches that are intensely itchy, may weep or crust, and tend to appear in specific locations (cheeks and scalp in babies, elbow and knee creases in toddlers). Eczema also tends to come and go in flares, while dry skin improves consistently with moisturizer. If your baby\'s dry patches are itchy, red, or not improving with regular moisturizing, it may be eczema.',
  byAge: [
    { ageRange: '0-12 months', context: 'Eczema typically first appears between 2-6 months of age, usually on the cheeks, forehead, and scalp. It presents as red, rough, sometimes weepy or crusty patches that seem itchy (baby may rub face against things). Simple dry skin is more uniform, not red or inflamed, and responds well to moisturizer. A family history of eczema, asthma, or allergies increases the likelihood that dry patches are eczema. Start with frequent moisturizing and see your pediatrician if the patches are worsening, spreading, or appear inflamed.' },
    { ageRange: '1-3 years', context: 'In toddlers, eczema typically moves to the creases - inside elbows, behind knees, wrists, and ankles - though it can appear anywhere. Eczema patches are itchy (your toddler may scratch persistently), red or darker than surrounding skin, and may thicken with repeated scratching. Simple dry skin on hands, legs, and cheeks is common in winter and improves with regular moisturizing. The key differentiator is itch: eczema itches intensely, while dry skin may feel tight but is not typically very itchy.' },
  ],
  whenNormal: ['Mild dryness that resolves with regular moisturizing', 'Dry patches on the cheeks during cold, dry weather', 'Slight roughness on arms and legs without redness or itching', 'Flaky scalp without redness (could be simple dryness or residual cradle cap)'],
  whenToMention: ['Dry patches are red, inflamed, or intensely itchy', 'Patches keep coming back after improving with moisturizer (flare pattern)', 'Your child is scratching persistently at specific areas', 'You have a family history of eczema, asthma, or allergies and want to discuss prevention'],
  whenToActNow: ['Patches are oozing, weeping, or crusted with yellow discharge (possible infection on top of eczema)', 'Eczema is widespread and severely affecting your child\'s sleep or comfort', 'Patches are not responding to over-the-counter treatments and worsening'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['eczema', 'dry-skin', 'baby-dry-patches-on-cheeks', 'baby-dry-cracked-skin-hands'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Eczema in Babies and Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx' },
    { org: 'NIH', citation: 'National Institute of Allergy and Infectious Diseases. Eczema (Atopic Dermatitis).', url: 'https://www.niaid.nih.gov/diseases-conditions/eczema-atopic-dermatitis' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Dry Skin and Your Baby. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Dry-Skin-and-Your-Baby.aspx' },
  ],
};

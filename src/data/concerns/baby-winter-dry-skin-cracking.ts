import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-winter-dry-skin-cracking',
  title: 'Winter Dry Skin and Cracking in Babies',
  category: 'skin',
  searchTerms: [
    'baby dry skin winter',
    'baby cracked skin cold weather',
    'baby eczema winter',
    'baby dry patches skin',
    'baby chapped cheeks',
    'infant dry skin remedies',
    'baby cracked lips winter',
    'baby rough dry skin',
    'winter rash baby',
    'moisturizer for baby dry skin',
  ],
  quickAnswer:
    'Baby skin is thinner and more sensitive than adult skin, making it particularly prone to dryness and cracking during winter months when cold outdoor air and dry indoor heating combine to strip moisture. Regular use of a thick, fragrance-free moisturizer (cream or ointment rather than lotion) applied within 3 minutes of bathing is the best prevention and treatment. Limit baths to 5-10 minutes with lukewarm water, use gentle cleansers, and dress your baby in soft fabrics.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn skin is still developing its protective barrier and is especially vulnerable to dryness. In winter, limit baths to 2-3 times per week using lukewarm water and a gentle, fragrance-free cleanser only where needed (diaper area, neck folds, hands). Apply a thick moisturizing cream or ointment (like Aquaphor, CeraVe Baby, or Vanicream) all over the body within 3 minutes of bathing to lock in moisture. A cool-mist humidifier in the nursery helps counteract dry indoor heating. Avoid products with fragrance, dyes, or alcohol.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Babies with eczema-prone skin may experience significant winter flares. Apply moisturizer at least twice daily, focusing on dry areas like cheeks, hands, and legs. Dress your baby in soft cotton or bamboo layers; avoid wool directly on skin. Wind-exposed areas like cheeks and hands need extra protection - apply a thick layer of ointment before going outside. Drool rash on the chin and cheeks can worsen in winter due to already-dry skin. If dry patches are red, rough, and itchy, they may be eczema requiring a different treatment approach.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are more active outdoors in winter, leading to chapped cheeks, lips, and hands. Apply lip balm or petroleum jelly to the lip area before outdoor play. Use mittens to protect hands. After playing in snow, change wet clothing promptly and reapply moisturizer. If your toddler has cracked skin that bleeds or oozes, apply antibiotic ointment and cover with a bandage. Persistent, severe dry skin or cracking may indicate underlying eczema or a skin condition that needs medical evaluation.',
    },
  ],
  whenNormal: [
    'Your baby has mildly dry skin in winter that responds well to regular moisturizing.',
    'Cheeks become slightly red and chapped after outdoor exposure but improve with moisturizer.',
    'Dry patches appear but are not red, itchy, or bothersome to your baby.',
  ],
  whenToMention: [
    'Dry skin is persistent despite regular moisturizing and limiting baths.',
    'Your baby has rough, red, itchy patches that may be eczema.',
    'Cracked skin is causing your baby significant discomfort or interfering with sleep.',
  ],
  whenToActNow: [
    'Cracked skin becomes red, warm, swollen, or oozing - signs of a skin infection.',
    'Your baby develops widespread raw, bleeding, or weeping skin.',
    'Your baby has a fever along with worsening skin breakdown.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-rash-from-new-detergent', 'baby-skin-peeling-between-toes', 'baby-winter-hypothermia-prevention'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Winter Skin Care for Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Winter-Skin-Care.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Eczema in Babies and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Atopic Dermatitis (Eczema). NIAMS.',
      url: 'https://www.niams.nih.gov/health-topics/atopic-dermatitis',
    },
  ],
};

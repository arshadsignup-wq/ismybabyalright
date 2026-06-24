import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-rash-from-new-detergent',
  title: 'Baby Rash from New Laundry Detergent',
  category: 'skin',
  searchTerms: [
    'baby rash new detergent',
    'baby allergic to laundry detergent',
    'contact dermatitis baby detergent',
    'baby skin reaction detergent',
    'best laundry detergent for babies',
    'baby red rash clothes',
    'baby itchy from clothes',
    'laundry detergent allergy baby',
    'fragrance free detergent baby',
    'baby sensitive skin detergent rash',
  ],
  quickAnswer:
    'Rashes from laundry detergent are a form of contact dermatitis and appear as red, itchy patches where clothing touches the skin. Baby skin is thinner and more sensitive than adult skin, making it more prone to irritation from fragrances, dyes, and chemicals in detergents. Switching to a fragrance-free, dye-free detergent and rewashing affected clothing usually resolves the rash within a few days.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn skin is especially delicate and more permeable to irritants. Contact dermatitis from detergent typically appears as red, slightly raised patches where clothing sits against the skin, particularly in creases and areas with friction. It can be difficult to distinguish from other common newborn rashes like eczema or heat rash. Use fragrance-free, dye-free detergent for all baby items, including bedding and burp cloths. An extra rinse cycle can help remove residual detergent.',
    },
    {
      ageRange: '3-12 months',
      context:
        'As babies become more active, clothing rubs against skin more, potentially worsening contact dermatitis. The rash typically appears on the torso, arms, and legs where clothing sits. If you recently changed detergents and notice a new rash pattern, try switching back or to a hypoallergenic alternative. Avoid fabric softeners and dryer sheets, which can also irritate sensitive skin. A mild over-the-counter hydrocortisone cream (0.5% or 1%) may help with itching, but check with your pediatrician first.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers with sensitive skin may continue to react to certain detergents. If your child has eczema, their skin barrier is already compromised and more susceptible to irritants. Consistent use of gentle, fragrance-free detergent for the whole family is often the easiest approach. If the rash persists despite switching detergents, other causes like eczema, heat rash, or fungal infection should be considered.',
    },
  ],
  whenNormal: [
    'A mild red rash appears in areas where new clothing touches skin and improves after switching detergent.',
    'The rash is not blistering and your baby does not seem very uncomfortable.',
    'The rash clears within a few days of removing the irritant and rewashing clothes.',
  ],
  whenToMention: [
    'The rash persists for more than a week despite switching to fragrance-free detergent.',
    'Your baby seems very itchy or uncomfortable and the rash is spreading.',
    'You are not sure whether the rash is from detergent or could be eczema or another skin condition.',
  ],
  whenToActNow: [
    'The rash involves blistering, oozing, or raw open skin.',
    'Your baby develops hives, facial swelling, or difficulty breathing after exposure to new products.',
    'The rash appears infected with increasing redness, warmth, swelling, or pus.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['hives', 'rash-after-antibiotics', 'baby-winter-dry-skin-cracking'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Baby Skin Care. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Contact Dermatitis. MedlinePlus.',
      url: 'https://medlineplus.gov/contactdermatitis.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Eczema in Babies and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx',
    },
  ],
};

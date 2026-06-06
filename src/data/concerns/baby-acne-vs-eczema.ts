import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-acne-vs-eczema',
  title: 'Baby Acne vs Eczema: How to Tell the Difference',
  category: 'skin',
  searchTerms: [
    'baby acne vs eczema',
    'difference between baby acne and eczema',
    'is it baby acne or eczema',
    'baby acne or eczema on face',
    'baby face rash acne or eczema',
    'newborn acne vs atopic dermatitis',
    'baby cheek rash acne eczema',
    'how to tell baby acne from eczema',
    'baby red bumps face acne eczema',
    'infant facial rash diagnosis',
  ],
  quickAnswer:
    'Baby acne and eczema can both cause facial rashes, but they look and feel different. Baby acne appears as small red or white bumps, similar to teenage acne, usually on the cheeks, nose, and forehead. Eczema causes dry, rough, red, itchy patches. Baby acne resolves on its own by 3 to 4 months, while eczema may need ongoing management.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This is when distinguishing between the two is most challenging. Baby acne typically appears around 2 to 4 weeks of age as small bumps and pimples on the face. It is not itchy and does not bother the baby. Eczema tends to appear slightly later, around 2 to 3 months, and causes dry, rough patches that may be itchy. If the skin feels rough and dry, it is more likely eczema.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Baby acne usually resolves by 3 to 4 months. If the facial rash persists beyond this point, it is more likely eczema or another condition. Eczema at this age often affects the cheeks and can spread to other areas. Unlike acne, eczema responds to moisturizers and may worsen with certain triggers.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Any persistent facial rash at this age is unlikely to be baby acne and more likely eczema, seborrheic dermatitis, or contact dermatitis. Eczema may start to shift from the face to the body and limbs. Consistent moisturizing and identifying triggers are key management strategies.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Infantile acne (different from neonatal acne) can rarely occur in this age group and looks more like true acne with deeper bumps. This is uncommon and should be evaluated by your pediatrician, as it may need treatment. Eczema continues to be the more common cause of facial rashes in toddlers.',
    },
  ],
  whenNormal: [
    'Small pimple-like bumps on a newborn\'s face that are not itchy and appear between 2 and 6 weeks of age',
    'Mild dry patches on the cheeks that respond to fragrance-free moisturizer',
    'A facial rash in a newborn that does not bother the baby and is gradually improving',
  ],
  whenToMention: [
    'You cannot tell whether the facial rash is acne or eczema and want guidance on treatment',
    'A facial rash is persisting beyond 4 months of age',
    'The rash is itchy, cracking, or spreading to the body',
  ],
  whenToActNow: [
    'The facial rash becomes infected with oozing, crusting, or pus',
    'Deep, cystic acne-like bumps appear on the face of a baby older than 6 months, which is unusual and may need workup',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby Acne. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Baby-Acne.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eczema in Babies and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Baby Acne: What Parents Need to Know.',
      url: 'https://www.aad.org/public/diseases/a-z/acne-baby',
    },
  ],
  relatedConcernSlugs: ['baby-acne', 'eczema', 'baby-eczema-vs-dry-skin'],
};

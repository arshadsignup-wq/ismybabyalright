import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'fabric-detergent-skin-reactions',
  title: 'Skin Reactions to Fabrics and Detergents',
  category: 'skin',
  searchTerms: [
    'baby rash from detergent',
    'baby skin reaction laundry detergent',
    'contact dermatitis baby clothes',
    'baby rash from fabric',
    'sensitive skin baby detergent',
    'baby rash where clothes touch',
    'fabric softener rash baby',
    'baby allergic to laundry soap',
    'irritant dermatitis baby clothing',
  ],
  quickAnswer:
    'Baby skin is thinner and more sensitive than adult skin, making it more prone to irritation from fragrances, dyes, and chemicals in laundry detergents, fabric softeners, and certain fabrics. Contact dermatitis from these irritants typically appears as a red, bumpy, or dry rash in areas where clothing or bedding touches the skin. Switching to fragrance-free, dye-free detergent and using soft, natural fabrics usually resolves the issue.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn skin is especially thin and permeable, making it highly susceptible to irritants. A rash that appears in areas covered by clothing or where elastic bands press against the skin is a classic sign of contact irritation. Using a fragrance-free, dye-free detergent for all items that touch your baby\'s skin, including your own clothing if you hold your baby close, can make a significant difference.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies become more active and sweat slightly more, irritants trapped against the skin by clothing can cause more noticeable reactions. Synthetic fabrics that do not breathe well may worsen the problem. Soft, loose-fitting cotton clothing is generally best tolerated. Avoid fabric softeners and dryer sheets, which leave chemical residues on fabric that can irritate sensitive skin.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Crawling babies may develop irritation on their knees, elbows, and belly where clothing rubs against the skin repeatedly. Wool, polyester, and rough textures can cause mechanical irritation even without a chemical sensitivity. If rashes appear specifically in friction areas, consider softer fabrics and ensure clothing seams are not rubbing directly on the skin.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with sensitive skin or a history of eczema may be more prone to reactions from detergents and fabrics. If switching products resolves the rash, there is no need for further testing. If rashes persist despite using gentle products and soft fabrics, your pediatrician may recommend a dermatology referral to rule out other skin conditions like eczema or allergic contact dermatitis.',
    },
  ],
  whenNormal: [
    'A mild red or bumpy rash in areas where clothing sits snugly against the skin, such as the waistband, neckline, or diaper edges',
    'The rash improves when you switch to a fragrance-free, dye-free detergent or remove the offending fabric',
    'Your baby\'s skin is slightly dry or rough in areas covered by clothing but is not oozing or cracked',
    'Redness appears after wearing a new outfit and resolves after the outfit is washed or removed',
  ],
  whenToMention: [
    'The rash persists despite switching to gentle, fragrance-free detergent and soft cotton clothing',
    'Your baby\'s skin is very dry, cracked, or oozing, which could suggest eczema rather than simple contact irritation',
    'The rash is spreading to areas not in contact with clothing, suggesting a different cause',
    'Your baby seems significantly uncomfortable, scratching constantly, or having trouble sleeping due to skin irritation',
  ],
  whenToActNow: [
    'The rash develops blisters, open sores, or signs of infection such as pus, increasing redness, warmth, or fever',
    'Your baby develops sudden widespread hives or swelling after contact with a new fabric or product, suggesting an allergic reaction',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eczema and Your Child: Tips for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Arthritis and Musculoskeletal and Skin Diseases. Atopic Dermatitis (Eczema).',
      url: 'https://www.niams.nih.gov/health-topics/atopic-dermatitis',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sensitive Skin Care for Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Sensitive-Skin-Care.aspx',
    },
  ],
};

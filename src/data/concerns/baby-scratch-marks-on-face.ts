import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-scratch-marks-on-face',
  title: 'Baby Scratch Marks on Face',
  category: 'skin',
  searchTerms: [
    'baby scratch marks on face',
    'baby scratching face',
    'newborn scratching face',
    'baby nail scratches',
    'baby scratching cheeks',
    'how to stop baby scratching face',
    'baby mittens for scratching',
    'baby scratches own face',
    'infant face scratches',
    'baby clawing at face',
  ],
  quickAnswer:
    'Baby scratch marks on the face are very common because babies have sharp, thin nails and limited control over their hand movements. These superficial scratches heal quickly, usually within a day or two. Keeping nails trimmed short is the best prevention. Scratching is normal, but frequent face scratching can sometimes indicate itchy skin from eczema or dryness.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have a startle reflex that causes their arms to flail, and their nails are razor-sharp despite being soft. Face scratches are extremely common at this age. Keep nails filed or trimmed (try while baby sleeps), and consider mittens for short periods if scratching is severe. The scratches are superficial and heal quickly without scarring.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As hand control improves, random scratching decreases, but babies at this age often grab at their faces when tired, hungry, or overstimulated. If your baby is scratching their cheeks frequently, check for dry patches or eczema, which may be itchy. Moisturize the face regularly and keep nails short.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Better hand coordination means fewer accidental scratches, but purposeful scratching may increase if your baby has itchy skin. Babies with eczema often scratch their faces and ears. If scratching seems targeted to specific areas, look for signs of dryness, rash, or irritation and address the underlying itch.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers may scratch their face during tantrums or when frustrated. They may also scratch itchy skin from eczema, insect bites, or allergic reactions. If face scratching is persistent and targeted, look for an underlying cause. Keep nails short and smooth.',
    },
  ],
  whenNormal: [
    'Superficial scratch marks that heal within 1-2 days',
    'Scratches from a newborn\'s startle reflex or random hand movements',
    'Occasional scratches when baby is tired, feeding, or fussy',
    'Scratch marks decrease as your baby gains better hand control',
  ],
  whenToMention: [
    'Your baby frequently scratches the same area, suggesting persistent itchiness from eczema or another skin condition',
    'Scratch marks are deep, numerous, or do not heal well',
    'Your baby is scratching their ears along with their face, which could indicate ear discomfort',
  ],
  whenToActNow: [
    'A scratch becomes red, swollen, warm, or has pus, indicating a possible infection',
    'Your baby scratches near the eyes and you notice eye redness, swelling, or discharge',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Nail Care for Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Nail-Care.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eczema in Babies and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx',
    },
  ],
};

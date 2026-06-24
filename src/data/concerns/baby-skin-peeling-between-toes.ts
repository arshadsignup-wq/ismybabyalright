import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-skin-peeling-between-toes',
  title: 'Baby\'s Skin Peeling Between Toes',
  category: 'skin',
  searchTerms: [
    'baby skin peeling between toes',
    'baby peeling toes',
    'infant skin peeling feet',
    'baby athlete\'s foot',
    'baby toe skin cracking',
    'newborn peeling skin toes',
    'baby foot skin flaking',
    'baby dry skin between toes',
    'toddler skin peeling toes',
    'baby eczema toes',
  ],
  quickAnswer:
    'Peeling skin between a baby\'s toes is usually caused by moisture, friction from shoes or socks, eczema, or normal newborn skin shedding. True athlete\'s foot (tinea pedis) is rare in babies and toddlers. In newborns, widespread skin peeling in the first few weeks is completely normal as the skin adjusts from the fluid environment of the womb. For persistent peeling, keep the area dry, use gentle moisturizer, and consult your pediatrician if it worsens or appears infected.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn skin peeling is very common and expected, especially in babies born past their due date. The skin is transitioning from being surrounded by amniotic fluid to the drier outside environment. Peeling can occur anywhere, including between the toes. This is normal and does not require treatment. Simply keep the skin clean and avoid over-bathing, which can worsen dryness. Gentle fragrance-free moisturizer can be applied if the skin looks very dry.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Peeling between toes at this age is more likely caused by moisture trapped from socks and shoes, mild eczema, or contact irritation. Keep the area dry and change socks if they get damp. Let your baby go barefoot when safe to air out the feet. If the peeling is red, itchy, or spreading, it could be eczema, which is common in infants. Apply a gentle, fragrance-free moisturizer or barrier cream. True fungal infections between the toes are very uncommon at this age.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers who wear shoes regularly may develop peeling between toes from moisture and friction. Ensure shoes fit properly and feet can breathe. Cotton socks help absorb moisture. If peeling is accompanied by redness, scaling, and itching, a mild fungal infection is possible (though still uncommon in this age group). Your pediatrician can examine the area and recommend treatment if needed. Eczema-related peeling may flare with seasonal changes, particularly in winter.',
    },
  ],
  whenNormal: [
    'Your newborn has peeling skin all over, including the toes, in the first few weeks of life.',
    'Mild peeling between toes that resolves with keeping the area dry and moisturized.',
    'Seasonal dry skin causing mild flaking on the feet and toes.',
  ],
  whenToMention: [
    'Peeling is persistent, worsening, or not responding to basic moisturizing.',
    'The skin between toes is red, cracked, or very itchy.',
    'Peeling is spreading to other areas of the feet or body.',
  ],
  whenToActNow: [
    'The area between the toes is red, swollen, warm, and oozing pus - signs of a bacterial infection.',
    'Your baby has widespread severe skin peeling with open raw areas, especially in a newborn.',
    'Your baby has a fever along with worsening skin breakdown on the feet.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-winter-dry-skin-cracking', 'baby-ring-worm-daycare', 'baby-rash-from-new-detergent'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Newborn Skin: Common Conditions. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Peeling Skin in Newborns. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001458.htm',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Eczema in Babies and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx',
    },
  ],
};

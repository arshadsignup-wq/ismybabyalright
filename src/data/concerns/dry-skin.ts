import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dry-skin',
  title: 'Baby Dry Skin & Peeling Skin',
  category: 'skin',
  searchTerms: [
    'baby dry skin',
    'newborn peeling skin',
    'baby skin flaking',
    'baby dry patches on skin',
    'baby skin peeling off',
    'baby rough skin',
    'dry cracked skin baby',
    'baby lotion for dry skin',
    'newborn skin peeling normal',
    'baby dry skin on legs',
  ],
  quickAnswer:
    'Dry and peeling skin in newborns is completely normal, especially in the first few weeks after birth. Your baby spent nine months floating in amniotic fluid, so some peeling as they adjust to the outside world is expected. Gentle, fragrance-free moisturizers applied after baths are usually all that is needed.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'Nearly all newborns experience some degree of skin peeling in the first week or two. Babies born past their due date often peel more dramatically. This peeling is a completely normal transition and does not indicate any skin problem. Avoid the temptation to peel flaking skin off; let it come away naturally.',
    },
    {
      ageRange: '2 weeks - 3 months',
      context:
        'After the initial newborn peeling resolves, your baby\'s skin is still adjusting. You may notice dry patches, especially on the hands, feet, and ankles. Short, lukewarm baths (no longer than 5-10 minutes) followed immediately by a fragrance-free moisturizer or ointment help seal in moisture. Bathing too frequently can actually worsen dryness.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Dry skin during these months is often related to environmental factors: dry winter air, heating systems, wind, and cold weather. A humidifier in the nursery and regular moisturizing after baths can make a big difference. If dry patches are persistently red, itchy, or rough, eczema may be developing and is worth mentioning to your pediatrician.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers may develop dry, rough patches, particularly in winter. Water play and frequent handwashing for toddlers in daycare can contribute. Using a thick cream or ointment-based moisturizer rather than a light lotion provides better protection. Persistent, worsening, or itchy dry patches may be eczema.',
    },
  ],
  whenNormal: [
    'Newborn skin peeling in the first 1-3 weeks of life, especially on hands, feet, and ankles',
    'Mild dryness that responds to moisturizer, especially during winter months',
    'Post-due-date babies who peel more extensively in the first few weeks',
    'Slight roughness on cheeks or arms that improves with regular emollient use',
  ],
  whenToMention: [
    'Dry patches are becoming red, rough, and itchy, which may suggest eczema developing',
    'Skin is cracking or developing fissures, especially on hands or feet',
    'Dryness is widespread and not responding to regular fragrance-free moisturizing',
    'The skin appears unusually thick, scaly, or has a different texture than surrounding skin',
  ],
  whenToActNow: [
    'Cracked skin is bleeding, weeping, or showing signs of infection such as pus or spreading redness',
    'Your baby has widespread skin peeling with blistering or raw areas and seems unwell',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bathing Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Bathing-Your-Newborn.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Your Newborn\'s Skin and Rashes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Newborn Skin Characteristics. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/002301.htm',
    },
  ],
};

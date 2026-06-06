import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-dry-peeling-lips',
  title: 'Dry, Cracked Lips in Newborns',
  category: 'skin',
  searchTerms: [
    'newborn dry lips',
    'baby cracked lips',
    'newborn peeling lips',
    'baby chapped lips',
    'newborn lips flaking',
    'baby lip skin peeling',
    'infant dry cracked lips',
    'newborn lip care',
    'baby lips peeling from sucking',
    'newborn lip blisters peeling',
  ],
  quickAnswer:
    'Dry, peeling, or cracked lips in newborns are very common and usually harmless. They can result from the transition to a drier environment outside the womb, frequent sucking during feeding, or mild dehydration. Applying a small amount of breast milk or lanolin to the lips can help. Persistent dryness with other symptoms like decreased wet diapers may indicate dehydration.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns often develop dry or peeling lips as their skin adjusts to life outside the womb. Frequent sucking during breastfeeding or bottle-feeding can also cause the lip skin to peel or develop a callus-like blister (sucking blister), which is harmless. You can apply a small amount of breast milk, lanolin, or a gentle lip balm to help moisturize. Avoid lip balms with fragrances, dyes, or potential allergens. Ensure your baby is feeding well and producing adequate wet diapers.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Lip dryness and peeling from sucking may continue but is typically harmless. A sucking callus or blister on the upper lip is common in breastfed babies and resolves on its own. If lips appear very dry, cracked, or bleeding, ensure your baby is well-hydrated by monitoring wet diapers and feeding frequency.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Lip dryness related to the newborn period should have resolved. Persistent dry, cracked lips may be related to environmental factors (dry air, wind) or could be an early sign of eczema around the mouth. Use a gentle moisturizer and consider a humidifier if the air is dry.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Dry lips at this age may be related to drooling, teething, or environmental factors. As babies start solid foods, food irritation around the mouth can also cause dryness and redness. Applying a barrier cream before meals can help protect the skin.',
    },
  ],
  whenNormal: [
    'Mild peeling or dryness of the lips in the first few weeks of life',
    'A small blister or callus on the upper lip from sucking (nursing blister)',
    'Lip dryness that improves with gentle moisturizing',
    'Baby is feeding well and producing adequate wet diapers',
  ],
  whenToMention: [
    'Lips are persistently cracked, bleeding, or not improving with moisturizing',
    'Dry lips accompanied by dry skin elsewhere on the body',
    'You are concerned about your baby\'s hydration status',
  ],
  whenToActNow: [
    'Severely cracked lips along with decreased wet diapers, sunken fontanelle, or lethargy, which could indicate dehydration',
    'Lips or mouth area with sores, blisters, or signs of infection (pus, spreading redness)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Skin Care for Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Newborn Skin Care. Patient Care and Health Information.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/healthy-baby/art-20047438',
    },
  ],
  relatedConcernSlugs: ['newborn-skin-peeling-normal', 'newborn-sucking-blisters', 'newborn-adequate-wet-diapers'],
};

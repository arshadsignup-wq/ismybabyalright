import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'insect-repellent-safety-baby',
  title: 'Insect Repellent Safety for Babies',
  category: 'medical',
  searchTerms: [
    'DEET safe for babies',
    'insect repellent baby what age',
    'mosquito repellent for infants',
    'bug spray safe for baby',
    'natural insect repellent baby',
    'picaridin safe for babies',
    'how to protect baby from mosquitoes',
    'baby mosquito bites prevention',
    'tick repellent safe for toddler',
  ],
  quickAnswer:
    'The AAP and EPA recommend against using any insect repellent on babies under 2 months of age. For babies 2 months and older, products containing up to 30% DEET or 20% picaridin are considered safe and effective. Oil of lemon eucalyptus should not be used on children under 3 years. For young babies, physical barriers (mosquito nets, long sleeves, screens) are the safest option. Apply repellent to clothing rather than skin when possible, and never apply to hands, eyes, or mouth.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Do not use chemical insect repellents on babies under 2 months. Protect young babies with physical barriers: mosquito netting over carriers and strollers, long lightweight clothing, and staying indoors during peak mosquito hours (dawn and dusk). If you are in an area with mosquito-borne diseases, discuss additional precautions with your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'DEET (up to 30%) or picaridin (up to 20%) can be used on exposed skin. Apply sparingly and avoid hands and face. Spray on your own hands first and then apply to the baby\'s skin. Do not use combination sunscreen-repellent products. Remove repellent when you come indoors by bathing the baby.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continue using DEET or picaridin as needed. Apply once — repellent does not need to be reapplied as frequently as sunscreen. For tick prevention, treat clothing with permethrin if you are in tick-prone areas (do not apply permethrin directly to skin). Check for ticks after outdoor play.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers who play in grass and wooded areas need both mosquito and tick protection. Teach your toddler not to touch their face after repellent application. Continue avoiding oil of lemon eucalyptus until age 3. After outdoor play, check for ticks in hair, skin folds, behind ears, and diaper area.',
    },
  ],
  whenNormal: [
    'Your baby has a few mosquito bites despite your best prevention efforts — some bites are inevitable',
    'Mosquito bites cause localized redness and swelling that resolves within a few days',
    'Your baby is fussy or scratches at bug bites — apply calamine lotion or a cool compress',
    'You are using an EPA-registered repellent as directed on the label for your child\'s age',
  ],
  whenToMention: [
    'Your baby has a large, swollen reaction to a bug bite that spreads or does not improve after several days',
    'Your child develops a fever, rash, or body aches after multiple insect bites, especially if you are in an area with mosquito-borne diseases',
    'You found a tick on your baby and are unsure whether additional monitoring or testing is needed',
  ],
  whenToActNow: [
    'Your baby shows signs of an allergic reaction to a bite — difficulty breathing, facial swelling, widespread hives — call 911 immediately',
    'Your child develops a bull\'s-eye rash after a tick bite, which may indicate Lyme disease and requires prompt antibiotic treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sunscreen-for-babies-under-6-months',
    'travel-vaccinations-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing an Insect Repellent for Your Child. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Insect-Repellents.aspx',
    },
    {
      org: 'EPA',
      citation:
        'Environmental Protection Agency. Using Insect Repellents Safely and Effectively.',
      url: 'https://www.epa.gov/insect-repellents/using-insect-repellents-safely-and-effectively',
    },
  ],
};

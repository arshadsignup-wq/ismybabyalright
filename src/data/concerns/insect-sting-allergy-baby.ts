import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'insect-sting-allergy-baby',
  title: 'Insect Sting Allergy in Babies',
  category: 'medical',
  searchTerms: [
    'insect sting allergy baby',
    'baby bee sting reaction',
    'baby wasp sting allergic reaction',
    'baby swelling after bug bite',
    'baby stung by bee what to do',
    'insect bite allergy infant',
    'baby mosquito bite large swelling',
    'anaphylaxis insect sting baby',
  ],
  quickAnswer:
    'Most insect stings in babies cause localized pain, redness, and swelling that resolve on their own within a few days. True allergic reactions to insect stings are uncommon in babies and young children, but they can occur. A large local reaction (significant swelling beyond the sting site) is more common than a systemic allergic reaction. Any signs of anaphylaxis (difficulty breathing, widespread hives, facial swelling) require immediate emergency care.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Insect stings are uncommon in very young babies. If a newborn is stung, expect localized redness and swelling. Young babies cannot tell you about pain, so watch for increased crying, fussiness, and refusal to feed. Clean the area, apply a cold compress, and contact your pediatrician for guidance, especially if this is your baby\'s first sting or if significant swelling develops.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, allergic reactions to a first sting are rare because sensitization typically requires prior exposure. Normal reactions include a raised red bump with pain and swelling at the sting site. Remove any visible stinger by scraping it with a credit card edge (do not squeeze with tweezers). A cold compress and age-appropriate pain management as advised by your pediatrician can help.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become mobile and spend more time outdoors, sting risk increases. Large local reactions -- significant swelling extending well beyond the sting site -- can occur and may take several days to resolve. While alarming, large local reactions are generally not dangerous. However, if your baby has hives away from the sting site, facial swelling, or any breathing difficulty, seek emergency care immediately.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers are at increased risk of stings due to curiosity and outdoor play. If your child has had a systemic reaction (hives all over, vomiting, or breathing difficulty) to a previous sting, your pediatrician should refer you to an allergist. An epinephrine auto-injector may be prescribed, and venom immunotherapy (allergy shots) may be considered. Always have a sting action plan if your child has a known venom allergy.',
    },
  ],
  whenNormal: [
    'Small area of redness, swelling, and pain at the sting site that improves over 1-2 days',
    'Mild itching at the sting site for a few days after the sting',
    'Slightly larger area of swelling (up to a few inches) that peaks at 24-48 hours and then resolves',
    'Baby is fussy for a short time after the sting but returns to normal behavior',
  ],
  whenToMention: [
    'Swelling extends significantly beyond the sting site or an entire limb becomes swollen',
    'Your baby has been stung multiple times or was stung inside the mouth',
    'Your baby had a previous reaction to a sting and you want to discuss allergy testing and an action plan',
  ],
  whenToActNow: [
    'Baby develops hives or welts on areas of the body away from the sting site',
    'Baby has any swelling of the face, lips, tongue, or throat, or has difficulty breathing -- call 911 immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma & Immunology. Insect Sting Allergies. ACAAI.',
      url: 'https://acaai.org/allergies/allergic-conditions/insect-allergy/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Insect Bites and Stings: First Aid. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Insect-Bites-and-Stings.aspx',
    },
  ],
};

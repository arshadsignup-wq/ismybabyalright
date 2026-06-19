import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pediatrician-vs-family-medicine-for-baby',
  title: 'Pediatrician vs Family Medicine Doctor for Your Baby',
  category: 'medical',
  searchTerms: [
    'pediatrician vs family doctor for baby',
    'family medicine doctor for newborn',
    'should baby see pediatrician or family doctor',
    'difference between pediatrician and family doctor',
    'family practice doctor for infant',
    'do I need a pediatrician for my baby',
    'family medicine vs pediatrics training',
    'can family doctor be baby doctor',
    'pediatrician vs general practitioner for baby',
    'family physician for children',
  ],
  quickAnswer:
    'Both pediatricians and family medicine doctors can provide excellent primary care for infants and children. Pediatricians complete a 3-year residency focused exclusively on children (birth through age 21), giving them deeper training in pediatric-specific conditions, developmental screening, and childhood behavioral health. Family medicine doctors complete a 3-year residency covering all ages, including pediatrics rotations, and can treat the entire family. The AAP notes that the choice depends on your family\'s needs and local availability. Pediatricians may offer advantages for complex pediatric conditions, premature infants, or developmental concerns due to their specialized training. Family medicine doctors offer the convenience of a single practice for the whole family and may be the only option in rural areas where pediatricians are scarce.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The newborn period involves the most intensive pediatric-specific care: jaundice management, feeding support, newborn metabolic screening follow-up, and frequent weight checks. Pediatricians typically have more training in these areas. If your baby is premature, has a birth complication, or has a known medical condition, a pediatrician may be the better choice. For a healthy full-term newborn, a well-trained family medicine doctor can provide excellent care.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Both provider types are well-equipped for routine well-child visits, vaccinations, and common infant illnesses during this period. The main differentiator is access to pediatric-specific developmental screening tools and familiarity with subtle developmental variations. If your family medicine doctor uses standardized screening tools (ASQ-3, M-CHAT) at recommended intervals, the quality of care should be comparable.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Developmental and behavioral concerns become more prominent in the toddler years. Pediatricians may have more experience identifying early signs of autism, speech delays, and behavioral variations due to higher volume of pediatric patients. However, many family medicine doctors are skilled in these areas as well. The key is whether your provider follows AAP screening guidelines regardless of their specialty.',
    },
    {
      ageRange: 'All ages',
      context:
        'A significant advantage of family medicine is continuity — the same doctor can see you, your partner, and your children, which provides valuable family context. Some families start with a pediatrician for the first 2-3 years when pediatric-specific needs are highest, then transition to family medicine. Either way, ensure your provider follows current evidence-based guidelines and refers to specialists when needed.',
    },
  ],
  whenNormal: [
    'Choosing a family medicine doctor for your baby if they follow AAP guidelines and have experience with infants',
    'Your family doctor recommending a pediatric specialist consultation for a complex issue',
    'Feeling torn between the two options — both can provide quality infant care',
    'Different family members seeing different providers based on needs and preferences',
  ],
  whenToMention: [
    'Your baby has a chronic condition or developmental concern that may benefit from pediatric subspecialty coordination',
    'You feel your current provider lacks experience with a specific pediatric issue',
    'You are considering switching from one type of provider to the other',
  ],
  whenToActNow: [
    'Your provider is not following established screening guidelines (developmental screening, autism screening, lead testing) regardless of their specialty',
    'Your baby has a complex medical condition and your current provider does not have adequate pediatric support resources',
    'You have raised a concern multiple times and feel it is not being appropriately evaluated or referred',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'choosing-a-pediatrician',
    'well-child-visit-schedule-guide',
    'when-to-call-pediatrician',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. What is a Pediatrician? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/health-management/pediatric-specialists/Pages/What-is-a-Pediatrician.aspx',
    },
    {
      org: 'AAFP',
      citation:
        'American Academy of Family Physicians. Family Medicine: Caring for the Whole Family.',
      url: 'https://www.aafp.org/about/policies/all/family-medicine-definition.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Primary Care for Children: The Role of the Pediatrician. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/135/3/e803/33208/The-Pediatrician-s-Role-in-Family-Support-and',
    },
  ],
};

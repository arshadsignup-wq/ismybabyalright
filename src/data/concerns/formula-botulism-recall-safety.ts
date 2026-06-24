import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-botulism-recall-safety',
  title: 'Baby Formula Botulism Recall - What Parents Need to Know',
  category: 'feeding',
  searchTerms: [
    'formula botulism recall',
    'byheart formula recall',
    'nara organics formula recall',
    'baby formula contamination',
    'infant botulism formula',
    'formula recall 2025',
    'formula recall 2026',
    'is my formula safe',
    'baby formula botulism symptoms',
    'recalled formula what to do',
    'powdered formula botulism risk',
    'formula contamination signs baby',
    'how to check formula recall',
    'FDA formula recall list',
    'formula botulism how common',
  ],
  quickAnswer:
    'Several major infant formula recalls in 2025-2026 were linked to botulism contamination, including ByHeart (48 illnesses, all hospitalized) and Nara Organics. If you have recalled formula, stop using it immediately and contact your pediatrician. Infant botulism from contaminated formula is rare but serious. Check the FDA recall database for current alerts.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies under 6 months are at the highest risk for infant botulism because their gut flora is not yet mature enough to fight off Clostridium botulinum spores. If your baby has been consuming a recalled formula, watch closely for constipation (often the first sign), weak cry, poor feeding, droopy eyelids, difficulty sucking or swallowing, and floppy muscle tone. These symptoms can appear 12 hours to several days after exposure. Contact your pediatrician right away if you notice any of these signs, even if they seem mild.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies 6-12 months still have some vulnerability to infant botulism, though the risk decreases as gut bacteria mature. If your baby is on formula and you learn of a recall, switch to a safe alternative and monitor for symptoms including constipation, lethargy, weak feeding, and decreased muscle tone. Most babies who receive prompt medical treatment for botulism recover fully, though hospitalization is typically required.',
    },
    {
      ageRange: '12+ months',
      context:
        'Children over 12 months have much more mature intestinal flora and are significantly less vulnerable to infant botulism from contaminated food. However, if your toddler consumes any recalled product, contact your pediatrician. The risk is primarily concentrated in the first year of life.',
    },
  ],
  whenNormal: [
    'Your baby is not consuming any recalled formula products and is feeding, pooping, and behaving normally.',
    'You checked the FDA recall list and your formula lot numbers are not affected.',
    'Your baby had one feeding from a recalled lot but is showing no symptoms after 72 hours and your pediatrician has been notified.',
  ],
  whenToMention: [
    'Your baby consumed a recalled formula and you want guidance on switching brands safely.',
    'You are unsure whether your specific formula lot is affected by a recall.',
    'Your baby had mild constipation after consuming a product that was later recalled.',
  ],
  whenToActNow: [
    'Your baby has been consuming a recalled formula and develops constipation, weak cry, poor feeding, floppy muscle tone, or difficulty swallowing - these are signs of infant botulism and require immediate medical evaluation.',
    'Your baby suddenly becomes very lethargic, has droopy eyelids, or loses the ability to hold their head up after consuming formula.',
    'Your baby shows any difficulty breathing or has a very weak cry that is different from normal.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'formula-storage-guidelines',
    'breastfeeding-to-formula-transition',
    'baby-product-recalls-safety-checking',
  ],
  sources: [
    {
      org: 'FDA',
      citation: 'FDA - Outbreak Investigation of Infant Botulism and Powdered Infant Formula (2025-2026)',
      url: 'https://www.fda.gov/food/outbreaks-foodborne-illness/outbreak-investigation-infant-botulism-powdered-infant-formula-june-2026',
    },
    {
      org: 'CDC',
      citation: 'CDC - Infant Botulism: Causes, Symptoms, and Treatment',
      url: 'https://www.cdc.gov/botulism/about/infant-botulism.html',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - Infant Botulism Clinical Report',
      url: 'https://publications.aap.org/redbook/resources/latest-news',
    },
  ],
};

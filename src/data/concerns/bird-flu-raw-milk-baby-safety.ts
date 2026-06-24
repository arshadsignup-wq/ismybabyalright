import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bird-flu-raw-milk-baby-safety',
  title: 'Bird Flu (H5N1) and Raw Milk - Is My Baby Safe?',
  category: 'feeding',
  searchTerms: [
    'bird flu baby safety',
    'H5N1 baby risk',
    'raw milk safe for baby',
    'raw milk baby danger',
    'bird flu in milk',
    'avian flu infant risk',
    'unpasteurized milk baby',
    'raw milk benefits baby myth',
    'bird flu dairy cattle baby formula',
    'is pasteurized milk safe bird flu',
    'raw milk trend baby',
    'can babies drink raw milk',
    'listeria raw milk baby',
    'bird flu breastfeeding',
  ],
  quickAnswer:
    'Pasteurized milk and commercial infant formula are safe - pasteurization kills H5N1 and other harmful pathogens. Raw (unpasteurized) milk is never safe for babies or young children. With H5N1 bird flu detected in dairy cattle across 17+ US states, the risk from raw milk is even higher than usual. Despite social media claims about raw milk "benefits," the AAP, CDC, and FDA all strongly advise against giving raw milk to children of any age.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies under 6 months should only receive breast milk or commercial infant formula. Never give raw milk to an infant. If you are breastfeeding, pasteurized dairy in your own diet poses no risk to your baby. Commercial infant formula undergoes rigorous safety testing and pasteurization that eliminates H5N1 and other pathogens. If you see social media posts claiming raw milk boosts infant immunity, this is false and dangerous.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies begin solids, you may introduce pasteurized dairy products like yogurt and cheese. Do not use raw milk, raw cheese, or any unpasteurized dairy product. Babies have immature immune systems and are especially vulnerable to Listeria, Salmonella, E. coli, and Campylobacter found in raw dairy - all of which can cause life-threatening illness in infants.',
    },
    {
      ageRange: '12-36 months',
      context:
        'When your child transitions to whole milk around 12 months, always use pasteurized milk. The same applies to cheese, yogurt, and butter. Some wellness influencers promote raw milk for toddlers, claiming it is more nutritious or easier to digest. These claims are not supported by evidence. Pasteurization does not meaningfully reduce the nutritional value of milk but does eliminate dangerous pathogens including H5N1 bird flu virus.',
    },
  ],
  whenNormal: [
    'You are feeding your baby pasteurized formula, pasteurized milk products, or breast milk - these are all safe regardless of bird flu concerns.',
    'You feel anxious about dairy safety after seeing news about H5N1 in cattle - pasteurized products remain safe.',
    'You live near dairy farms with confirmed H5N1 cases but your family consumes only pasteurized dairy.',
  ],
  whenToMention: [
    'A family member or caregiver has been giving your baby or toddler raw milk without your knowledge.',
    'You are considering raw milk for your child based on recommendations from a non-medical practitioner.',
    'You live or work on a farm with poultry or dairy cattle and want to understand exposure risks for your baby.',
  ],
  whenToActNow: [
    'Your baby or toddler consumed raw milk and is now showing symptoms: fever, diarrhea, vomiting, lethargy, or stiff neck - seek immediate medical attention.',
    'Your baby was fed raw milk and develops any signs of illness within 1-4 weeks afterward.',
    'Your baby had direct contact with sick or dead poultry or visited a farm with confirmed H5N1 cases.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'formula-storage-guidelines',
    'baby-water-when-to-introduce',
    'milk-protein-allergy',
  ],
  sources: [
    {
      org: 'CDC',
      citation: 'CDC - H5N1 Bird Flu and Unpasteurized (Raw) Milk',
      url: 'https://www.cdc.gov/bird-flu/hcp/unpasteurized-raw-milk/index.html',
    },
    {
      org: 'AAP',
      citation: 'AAP HealthyChildren.org - Raw Milk Dangers: What Parents Need to Know',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Raw-Milk-Dangers-What-Parents-Need-to-Know.aspx',
    },
    {
      org: 'FDA',
      citation: 'FDA - The Dangers of Raw Milk: Unpasteurized Milk Can Pose a Serious Health Risk',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/dangers-raw-milk-unpasteurized-milk-can-pose-serious-health-risk',
    },
  ],
};

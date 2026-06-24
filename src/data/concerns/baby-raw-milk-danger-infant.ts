import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-raw-milk-danger-infant',
  title: 'Dangers of Raw Milk for Babies and Infants',
  category: 'feeding',
  searchTerms: [
    'raw milk baby danger',
    'unpasteurized milk infant',
    'raw milk safe for babies',
    'baby raw milk risk',
    'raw milk bacteria baby',
    'raw milk vs pasteurized baby',
    'can babies drink raw milk',
    'raw milk E. coli baby',
    'unpasteurized dairy infant',
    'raw milk listeria baby',
  ],
  quickAnswer:
    'Raw (unpasteurized) milk is dangerous for babies and young children. It can contain harmful bacteria including E. coli, Salmonella, Listeria, and Campylobacter that can cause severe illness, hospitalization, and even death in infants. The FDA, AAP, and CDC all strongly recommend against giving raw milk or raw milk products to babies and children. Pasteurized whole milk can be introduced after 12 months of age.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies under 6 months should receive only breast milk, formula, or both. No type of animal milk, pasteurized or raw, is appropriate for this age group. Raw milk is especially dangerous for young infants because their immune systems are immature and cannot fight off the bacteria commonly found in unpasteurized dairy. Even small amounts of contaminated raw milk can cause life-threatening infections like hemolytic uremic syndrome (HUS) from E. coli.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Between 6-12 months, breast milk or formula should remain the primary drink. Small amounts of pasteurized dairy (like yogurt or cheese) can be introduced as complementary foods. Raw milk and raw dairy products should never be given. Babies at this age are still developing their gut barrier and immune defenses, making them highly vulnerable to foodborne pathogens. Raw milk cheeses and raw milk yogurt are also unsafe.',
    },
    {
      ageRange: '12-36 months',
      context:
        'After 12 months, pasteurized whole cow\'s milk can be introduced as a drink (16-24 ounces per day maximum). Raw milk remains unsafe for toddlers. While toddlers have more developed immune systems than infants, they are still at significantly higher risk than adults for serious complications from foodborne illness. All dairy products given to toddlers should be made from pasteurized milk.',
    },
  ],
  whenNormal: [
    'Your baby is drinking pasteurized whole milk after 12 months of age as part of a balanced diet.',
    'You are offering age-appropriate pasteurized dairy products like yogurt and cheese after 6 months.',
    'Your baby is thriving on breast milk or formula before 12 months with no need for animal milk.',
  ],
  whenToMention: [
    'Family members or caregivers want to give your baby raw milk and you need guidance on explaining the risks.',
    'You are considering alternative milks and want to discuss safe options with your pediatrician.',
    'Your older baby has been accidentally given a small amount of raw milk and seems fine but you want advice.',
  ],
  whenToActNow: [
    'Your baby has consumed raw milk and develops diarrhea (especially bloody diarrhea), vomiting, or fever.',
    'Your infant shows signs of dehydration after consuming raw milk: fewer wet diapers, sunken fontanelle, no tears.',
    'Your baby develops abdominal pain, lethargy, or decreased urine output after raw milk exposure - these could indicate hemolytic uremic syndrome.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-soy-formula-concerns', 'baby-refusing-solids', 'baby-choking-on-food'],
  sources: [
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration - The Dangers of Raw Milk: Unpasteurized Milk Can Pose a Serious Health Risk.',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/dangers-raw-milk-unpasteurized-milk-can-pose-serious-health-risk',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Raw Milk Questions and Answers.',
      url: 'https://www.cdc.gov/foodsafety/rawmilk/raw-milk-questions-and-answers.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Policy Statement: Consumption of Raw or Unpasteurized Milk and Milk Products by Pregnant Women and Children. Pediatrics, 2014.',
      url: 'https://publications.aap.org/pediatrics/article/133/1/175/32089/Consumption-of-Raw-or-Unpasteurized-Milk-and-Milk',
    },
  ],
};

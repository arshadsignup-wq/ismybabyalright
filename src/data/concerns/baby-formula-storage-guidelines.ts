import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-formula-storage-guidelines',
  title: 'How Long Can Baby Formula Be Stored Safely?',
  category: 'feeding',
  searchTerms: [
    'baby formula storage time',
    'how long can formula sit out',
    'formula storage guidelines',
    'prepared formula refrigerator time',
    'formula left out too long',
    'baby formula expiration',
    'how to store baby formula',
    'formula storage temperature',
    'can formula go bad',
    'prepared bottle how long good for',
  ],
  quickAnswer:
    'Prepared infant formula should be used within 2 hours at room temperature or stored in the refrigerator and used within 24 hours. Once your baby has started drinking from a bottle, any remaining formula must be discarded within 1 hour because bacteria from saliva can multiply rapidly. Unopened powdered formula should be used within 30 days after opening the container, and always before the expiration date on the package.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young infants are particularly susceptible to bacterial contamination in formula. Follow strict storage timelines: prepared formula left at room temperature for more than 2 hours must be discarded. When refrigerating prepared bottles, store them in the back of the refrigerator where the temperature is most consistent (not in the door). Label bottles with the date and time of preparation. Powdered formula is not sterile — the CDC recommends preparing fresh bottles for each feeding when possible, especially for preterm or immunocompromised infants. Ready-to-feed formula is the safest option for high-risk newborns.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The same storage rules apply as your baby grows. If you prepare multiple bottles in advance for convenience, store them immediately in the refrigerator and use within 24 hours. When traveling, transport bottles in an insulated cooler bag with ice packs and use within 2 hours of removing from cold storage. Do not reheat formula more than once. If your baby does not finish a bottle within 1 hour, discard the remaining formula. Concentrated liquid formula must be mixed exactly as directed and follows the same storage rules as prepared powdered formula.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby eats more solids, formula portions may change but storage rules remain the same. When using formula at daycare or with caregivers, clearly label each bottle with your baby\'s name, date, and time prepared. Provide written storage instructions. Leftover formula from a feeding should never be saved for the next feeding. Opened cans of ready-to-feed or concentrated formula should be covered, refrigerated, and used within 48 hours. When preparing to transition off formula around 12 months, do not mix formula with cow\'s milk in the same bottle without your pediatrician\'s guidance.',
    },
  ],
  whenNormal: [
    'You follow the 2-hour room temperature rule and 24-hour refrigeration rule for prepared formula.',
    'You discard leftover formula from partially finished bottles within 1 hour.',
    'You use opened powdered formula within 30 days and before the printed expiration date.',
  ],
  whenToMention: [
    'You are unsure about proper formula storage for your specific brand or type of formula.',
    'Your baby frequently does not finish bottles and you are discarding a lot of formula — your pediatrician can help adjust portions.',
    'You need guidance on formula storage for travel, daycare, or extended outings.',
  ],
  whenToActNow: [
    'Your baby has consumed formula that has been left out for more than 2 hours and develops vomiting, diarrhea, fever, or signs of foodborne illness — contact your pediatrician or seek medical care.',
    'Your baby shows signs of dehydration after a gastrointestinal illness from contaminated formula: no wet diapers for 6+ hours, sunken fontanelle, dry mouth, no tears — seek emergency care.',
    'You discover that your formula has been recalled or has an unusual smell, color, or texture — stop using it immediately and contact the manufacturer and your pediatrician.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-formula-preparation-safety', 'baby-food-preparation-hygiene', 'baby-microwave-heating-danger'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Infant Formula Preparation and Storage',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/infant-formula-preparation-and-storage.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Amount and Schedule of Baby Formula Feedings',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Amount-and-Schedule-of-Formula-Feedings.aspx',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration — Once Baby Arrives: Storage and Preparation of Formula',
      url: 'https://www.fda.gov/food/resources-you-food/once-baby-arrives-food-safety-moms-be',
    },
  ],
};

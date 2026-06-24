import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'infant-formula-safety-contamination-concerns',
  title: 'Infant Formula Safety and Contamination Concerns',
  category: 'feeding',
  searchTerms: [
    'infant formula safety',
    'formula contamination recall',
    'is formula safe for baby',
    'formula recall baby',
    'cronobacter sakazakii formula',
    'powdered formula bacteria risk',
    'formula preparation safety',
    'heavy metals baby formula',
    'formula mixing instructions',
    'how to make formula safely',
    'formula water temperature',
    'contaminated baby formula',
  ],
  quickAnswer:
    'Commercially manufactured infant formula in the United States is strictly regulated by the FDA and is a safe, nutritionally complete option for feeding babies. However, proper preparation, storage, and handling are essential to prevent bacterial contamination. Powdered formula is not sterile, and in rare cases can harbor bacteria such as Cronobacter sakazakii, which can cause serious infections in young infants. Following preparation guidelines, staying aware of recalls, and proper storage are the most important safety measures parents can take.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young infants, especially those born premature or with immune system vulnerabilities, are at highest risk from formula contamination. For high-risk infants, the CDC and WHO recommend using ready-to-feed liquid formula (which is commercially sterile) rather than powdered formula. If using powdered formula, prepare with water heated to at least 158 degrees F (70 degrees C) to kill potential bacteria, then cool before feeding. Always wash hands and sterilize bottles and nipples before preparation. Discard any formula that has been at room temperature for more than 2 hours or has been partially consumed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your baby\'s immune system matures, the risk from Cronobacter decreases but proper preparation remains important. Always follow the manufacturer\'s instructions for water-to-powder ratios, as incorrect dilution can cause serious electrolyte imbalances. Do not use a microwave to warm formula, as it creates hot spots that can burn your baby. Check the FDA recall database regularly for any formula recalls. Store unmixed powdered formula in a cool, dry place, and use within one month of opening.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, many babies are also eating solid foods, but formula remains a primary nutrition source until 12 months. Continue proper preparation practices. When traveling, ready-to-feed formula is the safest option since it does not require mixing with water. Do not use well water unless it has been tested for contaminants, and do not use water with fluoride levels above 0.7 ppm for mixing formula (ask your dentist or check your local water report). Transition to whole cow\'s milk should not occur before 12 months.',
    },
  ],
  whenNormal: [
    'You are using a commercially manufactured formula that is not subject to any current recalls and following preparation instructions.',
    'Your baby tolerates the formula well with normal stools and adequate weight gain.',
    'You are storing and handling formula according to manufacturer and CDC guidelines.',
  ],
  whenToMention: [
    'You have questions about which formula is best for your baby or want to switch formulas.',
    'You are concerned about heavy metals in formula and want guidance on what levels are considered safe.',
    'Your baby is having persistent digestive issues on formula that might be related to the specific product.',
  ],
  whenToActNow: [
    'Your baby develops fever, irritability, poor feeding, or lethargy after consuming formula from a recalled lot - seek medical care immediately.',
    'You notice the formula smells unusual, is discolored, or the packaging is damaged or swollen.',
    'Your baby shows signs of a serious reaction to formula: vomiting blood, blood in stool, rash with breathing difficulty, or severe lethargy.',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'how-much-should-baby-eat',
    'infant-feeding-habits-obesity-prevention',
    'nipple-confusion-bottle-breast',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC. Cronobacter and Powdered Infant Formula.',
      url: 'https://www.cdc.gov/cronobacter/prevention.html',
    },
    {
      org: 'FDA',
      citation:
        'FDA. Infant Formula Safety and Quality.',
      url: 'https://www.fda.gov/food/resources-you-food/infant-formula',
    },
    {
      org: 'WHO',
      citation:
        'WHO. Safe Preparation, Storage and Handling of Powdered Infant Formula: Guidelines.',
      url: 'https://www.who.int/publications/i/item/9789241595414',
    },
  ],
};

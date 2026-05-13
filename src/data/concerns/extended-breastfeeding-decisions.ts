import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'extended-breastfeeding-decisions',
  title: 'Extended Breastfeeding Decisions',
  category: 'feeding',
  searchTerms: [
    'extended breastfeeding',
    'breastfeeding past 1 year',
    'breastfeeding toddler benefits',
    'is it okay to breastfeed past 2',
    'breastfeeding older child',
    'still breastfeeding at 2 years',
    'natural term breastfeeding',
    'breastfeeding beyond infancy',
  ],
  quickAnswer:
    'Extended breastfeeding, meaning breastfeeding beyond 12 months, is supported by both the AAP and the WHO. The WHO recommends breastfeeding up to 2 years or beyond, and the AAP supports continued breastfeeding for as long as mutually desired by mother and child. Extended breastfeeding continues to provide nutritional, immunological, and emotional benefits for toddlers and is a normal biological practice worldwide.',
  byAge: [
    {
      ageRange: '12-24 months',
      context:
        'Breast milk continues to provide valuable nutrients, antibodies, and immune factors during the second year. Toddlers who breastfeed benefit from the comfort and security it provides during a period of rapid development and growing independence. Nursing at this age is typically less frequent and often happens around nap time, bedtime, or when your child needs comfort.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Breastfeeding a child over 2 years is less common in many Western cultures but is the biological norm globally. If you and your child are happy with the arrangement, there is no medical reason to stop. You may face social pressure or questions from others. Having a confident response prepared, such as citing the WHO recommendation, can help. The decision to continue or stop is entirely yours and your child\'s.',
    },
  ],
  whenNormal: [
    'Your toddler nurses one to three times per day, primarily for comfort around sleep times or after a fall',
    'Your child eats a full range of solid foods and drinks other fluids while also breastfeeding',
    'Breastfeeding feels like a positive part of your relationship with your child',
    'Your child occasionally goes a day or more without nursing and then resumes, especially during illness',
  ],
  whenToMention: [
    'You are facing significant social pressure or relationship conflict about your decision to continue breastfeeding',
    'Your toddler is nursing so frequently that it interferes with eating adequate solid foods',
    'You want to continue breastfeeding but are struggling with breastfeeding aversion or feeling touched out',
    'You are considering weaning and want to discuss the best approach for your child\'s age',
  ],
  whenToActNow: [
    'You are experiencing breastfeeding-related pain that could indicate an infection or other medical issue',
    'Your toddler is exclusively breastfeeding and refusing all solid foods, which could indicate an underlying feeding or developmental concern',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infant and Young Child Feeding.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Breastfeeding Beyond Infancy. NCBI.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK153487/',
    },
  ],
};

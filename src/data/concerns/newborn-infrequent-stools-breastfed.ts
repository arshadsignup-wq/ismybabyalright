import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-infrequent-stools-breastfed',
  title: 'Going Days Without Pooping (Breastfed Baby)',
  category: 'digestive',
  searchTerms: ['breastfed baby not pooping', 'baby going days without poop', 'breastfed baby infrequent stools', 'baby hasn\'t pooped in 3 days', 'breastfed baby no poop 5 days', 'is it normal baby not pooping', 'breastfed baby constipation', 'baby poop every few days', 'infrequent bowel movements breastfed', 'baby not pooping but passing gas'],
  quickAnswer: 'After the first month or so, it is completely normal for breastfed babies to go several days (sometimes up to 7-10 days) between bowel movements. This is because breast milk is so efficiently absorbed that there is little waste. This is NOT constipation as long as the stool is soft when it does come. Formula-fed babies, however, should have more regular stools.',
  byAge: [
    { ageRange: '0-1 month', context: 'In the first month, breastfed babies should have at least 3-4 stools per day. Frequent stools during this period indicate adequate milk intake. If a breastfed baby under 1 month is not stooling at least once per day, it may indicate insufficient milk intake and should be evaluated. This is different from the normal pattern that develops after the first month.' },
    { ageRange: '1-3 months', context: 'After 4-6 weeks, many breastfed babies dramatically decrease stool frequency. Some go from several stools per day to one every few days or even once a week. This is normal as long as the stool is soft when it comes, the baby is comfortable, and weight gain is good. The baby is not constipated. Breast milk is so well absorbed that there may simply be very little waste to eliminate.' },
    { ageRange: '3-6 months', context: 'Infrequent stools in breastfed babies may continue. Some babies go 7-10 days between stools and this remains normal as long as the stool is soft. If your baby seems uncomfortable or the stool is hard when it comes, discuss with your pediatrician.' },
    { ageRange: '6-12 months', context: 'With the introduction of solid foods, stool frequency typically increases again. If stools become hard, infrequent, or painful, this is actual constipation and may need dietary adjustments.' },
  ],
  whenNormal: ['A breastfed baby over 1 month going several days between soft stools', 'Baby is comfortable, not straining excessively, and has a soft abdomen', 'When stool does come, it is soft and normal in consistency', 'Baby is gaining weight well'],
  whenToMention: ['A breastfed baby under 1 month who is not stooling at least once daily', 'Stools are hard or pellet-like when they do come', 'Baby seems very uncomfortable or distended before finally stooling'],
  whenToActNow: ['No stool for over 7 days in a baby under 1 month (could indicate insufficient feeding)', 'Hard stools with blood, or abdominal distension with vomiting'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Stool Frequency in Breastfed Infants. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Breastfed Infant Bowel Patterns. Pediatrics.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
  relatedConcernSlugs: ['newborn-straining-grunting-poop', 'newborn-watery-stools-breastfed', 'newborn-gas-pain-signs'],
};

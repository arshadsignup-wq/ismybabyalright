import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-supplementing-guilt',
  title: 'I Feel Guilty About Supplementing with Formula',
  category: 'feeding',
  searchTerms: ['formula supplementing guilt', 'guilt about formula', 'supplementing breastfeeding guilt', 'formula shame', 'not enough breast milk formula', 'guilty using formula', 'combo feeding guilt', 'formula feeding judgment', 'supplementing breast milk formula', 'formula mom guilt'],
  quickAnswer: 'Supplementing with formula is an appropriate and evidence-based choice that helps ensure your baby is well-nourished. There is no reason to feel guilty about using formula. Any amount of breast milk is beneficial, and formula is a safe, nutritious alternative. The most important thing is that your baby is fed, growing, and thriving. How you feed is far less important than the love and care you provide.',
  byAge: [
    { ageRange: '0-3 months', context: 'Supplementing may be medically necessary due to low supply, tongue tie, latch issues, or baby\'s weight concerns. Your pediatrician recommended it because it is what is best for your baby right now. Supplementing does not mean breastfeeding has failed.' },
    { ageRange: '4-6 months', context: 'If you are supplementing because of return to work, supply changes, or choice, that is valid. Combo feeding (breast and formula) gives baby benefits of both. Many families find a rhythm that works well.' },
    { ageRange: '6-9 months', context: 'As solids are introduced, supplementing with formula can help ensure baby gets adequate nutrition during this transition. This is a practical choice, not a failure.' },
    { ageRange: '9-12 months', context: 'Any combination of breast milk and formula that meets your baby\'s nutritional needs is perfectly fine. You are doing a great job providing for your baby.' },
    { ageRange: '12-24 months', context: 'If your toddler is transitioning from breastfeeding to other milks, any combination that works for your family is appropriate. The feeding relationship you built matters more than the specific source of milk.' },
  ],
  whenNormal: ['You have mixed feelings about supplementing but your baby is thriving', 'You supplement for practical reasons and baby is healthy', 'You feel some sadness but also relief that baby is getting enough to eat'],
  whenToMention: ['Guilt about formula is causing significant anxiety or depression', 'Pressure from others is making you feel shame about your feeding choices', 'You want support or reassurance about your feeding plan'],
  whenToActNow: ['You are withholding necessary formula supplementation due to guilt and baby is not gaining weight', 'You are experiencing severe depression or anxiety related to feeding that affects your ability to care for your baby'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['formula-feeding-guilt', 'combo-feeding-breast-and-formula', 'baby-supplementing-with-formula'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Supplementing with Formula. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Maternal Mental Health and Infant Feeding. Journal of Human Lactation, 2021.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};

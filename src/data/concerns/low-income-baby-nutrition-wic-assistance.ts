import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'low-income-baby-nutrition-wic-assistance',
  title: 'WIC and Nutrition Assistance for Low-Income Families with Babies',
  category: 'feeding',
  searchTerms: [
    'WIC program baby',
    'WIC benefits formula',
    'free formula assistance',
    'food assistance baby',
    'low income baby nutrition help',
    'WIC eligibility requirements',
    'SNAP benefits baby food',
    'free baby food program',
    'can\'t afford formula help',
    'WIC breastfeeding support',
    'food insecurity baby',
  ],
  quickAnswer:
    'The Special Supplemental Nutrition Program for Women, Infants, and Children (WIC) provides free nutritious food, nutrition education, breastfeeding support, and healthcare referrals to low-income pregnant and postpartum women, infants, and children up to age 5. WIC serves approximately 6.2 million participants monthly. Eligibility is based on income (at or below 185% of the federal poverty level), nutritional risk, and state residency. You do not need to be a U.S. citizen to qualify. WIC provides formula, infant cereal, baby food, fruits, vegetables, milk, eggs, and whole grains.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'WIC provides different food packages depending on whether you are breastfeeding, formula-feeding, or doing a combination. Fully breastfeeding mothers receive the most generous food package for themselves (including additional fruits, vegetables, fish, and whole grains). Formula-feeding mothers receive infant formula. WIC also provides breastfeeding support through certified lactation consultants and peer counselors at no cost. If you need formula urgently and are not yet enrolled in WIC, many community organizations and food banks provide emergency formula supplies. Apply as soon as possible after birth, or even during pregnancy.',
    },
    {
      ageRange: '6-12 months',
      context:
        'At 6 months, WIC food packages expand to include infant cereal and baby food (fruits and vegetables, then meats at 8 months). WIC nutritionists can help you learn about introducing solid foods, food safety, and age-appropriate nutrition. If your baby has special dietary needs or food allergies, WIC can provide alternative formulas with a doctor\'s prescription. Many WIC offices now use electronic benefit cards instead of paper vouchers, making benefits easier to use at participating grocery stores.',
    },
    {
      ageRange: '12-36 months',
      context:
        'WIC benefits continue until age 5 and provide whole milk (reduced fat after age 2), cheese, eggs, cereal, fruits, vegetables, whole grains, and legumes. WIC nutritionists offer guidance on toddler nutrition, picky eating, appropriate portion sizes, and transitioning from formula. Additionally, WIC provides screening and referrals for health conditions, immunizations, and developmental concerns. If you are also eligible for SNAP (food stamps), you can receive both programs simultaneously. Contact your local WIC office or call 1-800-WIC-1007 to apply.',
    },
  ],
  whenNormal: [
    'You are enrolled in WIC and receiving food benefits that meet your baby\'s nutritional needs.',
    'You are using WIC nutritionist guidance and your baby is growing and developing well.',
    'You have connected with other assistance programs (SNAP, Medicaid) to supplement WIC benefits.',
  ],
  whenToMention: [
    'You are having difficulty accessing WIC benefits or finding a WIC office near you.',
    'Your baby has special nutritional needs or food allergies and you need formula alternatives covered by WIC.',
    'You are concerned about your baby\'s growth or nutrition despite receiving food assistance.',
    'You need referrals to other support programs such as food banks, housing assistance, or healthcare.',
  ],
  whenToActNow: [
    'You have run out of formula or food for your baby and cannot afford more - call your local WIC office, 211, or visit a food bank immediately.',
    'Your baby is showing signs of malnutrition: poor weight gain, lethargy, developmental regression, or frequent illness.',
    'You are diluting formula to make it last longer, which is dangerous and can cause serious electrolyte imbalances in infants.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'how-much-should-baby-eat',
    'infant-feeding-habits-obesity-prevention',
    'infant-formula-safety-contamination-concerns',
  ],
  sources: [
    {
      org: 'USDA',
      citation:
        'USDA Food and Nutrition Service. WIC: Women, Infants, and Children Program.',
      url: 'https://www.fns.usda.gov/wic',
    },
    {
      org: 'CDC',
      citation:
        'CDC. WIC - Breastfeeding Support.',
      url: 'https://www.cdc.gov/breastfeeding/pdf/breastfeeding_interventions.pdf',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Promoting Food Security for All Children. Pediatrics, 2015.',
      url: 'https://publications.aap.org/pediatrics/article/136/5/e1431/33864/Promoting-Food-Security-for-All-Children',
    },
  ],
};

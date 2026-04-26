import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'switching-formula-brands',
  title: 'Switching Formula Brands',
  category: 'feeding',
  searchTerms: [
    'switching formula brands',
    'changing baby formula',
    'can I switch formula brands',
    'baby transition to new formula',
    'how to switch baby formula',
    'mixing formula brands',
    'baby upset stomach after switching formula',
    'is it safe to switch formula',
    'formula brand change side effects',
    'generic vs name brand formula',
  ],
  quickAnswer:
    'Switching formula brands is generally safe and does not require a gradual transition. All standard infant formulas sold in the United States must meet the same FDA nutritional requirements, so your baby is getting comparable nutrition regardless of brand. Some babies adjust immediately, while others may have a few days of slightly different stools or minor fussiness. If your pediatrician has recommended a specialty formula, follow their specific guidance on switching.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies have the most sensitive digestive systems, so you may notice minor changes in stool color, consistency, or gas when switching formulas. These changes are usually temporary and resolve within a few days. You do not need to gradually mix old and new formulas together, though some parents prefer this approach for peace of mind. If your baby has no issues with their current formula, there is no medical reason to switch, but cost or availability may make switching practical.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, most babies handle formula switches well. If your pediatrician has recommended switching from a standard formula to a specialty type (such as sensitive, gentle, or hypoallergenic), they may advise a specific transition plan. Store brand and generic formulas are nutritionally equivalent to name brands and can save significant money. The FDA requires all infant formulas to meet the same strict nutritional standards.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Switching formulas at this age is very straightforward, as your baby\'s digestive system is more mature. If you are introducing solid foods alongside formula, keep in mind that changes in stool may be related to new foods rather than the formula switch. Continue formula or breast milk as the primary nutrition source until 12 months.',
    },
    {
      ageRange: '1-2 years',
      context:
        'After 12 months, most babies can transition from formula to whole cow\'s milk. This is a bigger change than switching between formula brands. Your pediatrician will guide you on this transition. Toddler formulas are generally not necessary for healthy children who eat a varied diet.',
    },
  ],
  whenNormal: [
    'Your baby has slightly different colored or textured stools for a few days after the switch',
    'Your baby is a bit gassier or fussier for one to three days after changing formulas',
    'Your baby takes a feed or two to adjust but then drinks the new formula without issue',
    'Your baby shows no change at all when switching between standard formulas',
  ],
  whenToMention: [
    'Your baby consistently vomits, has diarrhea, or refuses to eat for more than a few days after switching',
    'You are unsure whether to switch to a specialty formula and want guidance on which type might help your baby',
    'Your baby seems to have worsening symptoms on the new formula that do not resolve within a week',
  ],
  whenToActNow: [
    'Your baby has signs of an allergic reaction after switching formulas, such as hives, facial swelling, or difficulty breathing',
    'Your baby is refusing all feeds and showing signs of dehydration after the switch',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing a Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Choosing-a-Formula.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Choosing an Infant Formula.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/choosing-an-infant-formula.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Why Formula Instead of Cow\'s Milk? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Why-Formula-Instead-of-Cows-Milk.aspx',
    },
  ],
};

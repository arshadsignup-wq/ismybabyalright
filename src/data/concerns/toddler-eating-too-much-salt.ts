import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-eating-too-much-salt',
  title: 'Toddler Eating Too Much Salt or Sodium',
  category: 'feeding',
  searchTerms: ['toddler too much salt', 'baby sodium intake', 'toddler salt limit', 'baby eating salty food', 'toddler craving salt', 'how much salt for toddler', 'baby food sodium', 'toddler processed food', 'salt intake baby', 'toddler eating chips'],
  quickAnswer: 'Babies and toddlers need very little sodium in their diet, and their kidneys are less efficient at processing excess salt. Babies under 1 year should have less than 400mg of sodium per day (about 1g of salt), and toddlers ages 1-3 should have less than 800mg per day. Most salt in children\'s diets comes from processed foods, restaurant meals, bread, cheese, and deli meats - not from the salt shaker. You do not need to add salt to homemade baby food. While occasional salty snacks are not harmful, consistently high sodium intake can affect developing kidneys and establish unhealthy taste preferences.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies under 1 year should not have salt added to their food. Breast milk and formula contain adequate sodium for infant needs. When introducing solids, use no added salt. Avoid giving babies processed adult foods, pickles, chips, or salty snacks. A baby\'s kidneys cannot efficiently process large amounts of sodium. Read labels on commercial baby foods - most are appropriately low in sodium. If cooking family meals for your baby, set aside a portion before adding salt.' },
    { ageRange: '1-3 years', context: 'Toddlers often end up eating more sodium than recommended because they start eating family foods and processed snacks. The AAP recommends less than 800mg of sodium per day for children aged 1-3. High-sodium foods to limit include: chicken nuggets, hot dogs, deli meats, cheese, canned soups, crackers, bread, and fast food. Instead, offer fresh fruits and vegetables, unsalted snacks, and home-cooked meals with minimal added salt. A toddler who craves salty foods has likely developed a preference - you can gradually reduce salt in their diet to reset their taste preferences.' },
  ],
  whenNormal: ['Your toddler occasionally eats a salty snack like crackers or cheese', 'Your toddler prefers some salty flavors - this is a common taste preference', 'You are offering a varied diet with mostly fresh, minimally processed foods'],
  whenToMention: ['Your toddler seems to crave salt excessively or licks salt off food', 'Your child\'s diet is heavily reliant on processed, high-sodium foods', 'You want guidance on appropriate sodium limits for your child', 'Your child is drinking excessive amounts of water along with craving salt'],
  whenToActNow: ['Your child accidentally consumed a large amount of salt (salt poisoning is a medical emergency)', 'Signs of dehydration or excessive thirst after eating very salty food', 'Excessive salt craving combined with excessive thirst and urination (rare but may indicate an underlying condition)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['picky-eating', 'toddler-eating-too-much-sugar', 'baby-starting-solids-when-ready', 'toddler-drinking-too-much-water'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sodium Intake in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Sodium-Intake-in-Children.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Sodium and Children.', url: 'https://www.cdc.gov/salt/children-sodium.html' },
    { org: 'WHO', citation: 'World Health Organization. Sodium Intake Guidelines.', url: 'https://www.who.int/news-room/fact-sheets/detail/salt-reduction' },
  ],
};

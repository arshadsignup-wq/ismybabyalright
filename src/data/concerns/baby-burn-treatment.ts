import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-burn-treatment',
  title: 'Burns and Scalds in Baby or Toddler',
  category: 'medical',
  searchTerms: ['baby burn', 'toddler burn treatment', 'baby scalded', 'baby touched hot stove', 'toddler burn first aid', 'baby hot water burn', 'baby burn blister', 'toddler scald', 'baby sunburn treatment', 'baby burn care'],
  quickAnswer: 'Burns are one of the most common injuries in children under 5, with scalds from hot liquids being the leading cause. For minor burns (small area, redness without blistering): immediately cool the burn under cool (not cold or ice) running water for 10-20 minutes, then cover loosely with a clean bandage. Do NOT apply butter, toothpaste, or home remedies. Do NOT pop blisters. Any burn on a baby under 1 year, any burn larger than the child\'s palm, burns on the face, hands, feet, or genitals, and any burn with blistering should be evaluated by a doctor.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies can be burned by hot liquids (bath water, spilled drinks, formula), contact with hot surfaces, and sun exposure. Baby skin is thinner than adult skin and burns more easily and deeply. ALL burns in babies under 1 year should be evaluated by a pediatrician, even if they appear minor, because baby skin is more vulnerable. Immediate first aid: cool the burn under lukewarm running water for 20 minutes (do not use ice or very cold water). Remove clothing from the burned area unless it is stuck to the skin. Cover loosely with a clean, non-stick bandage.' },
    { ageRange: '1-3 years', context: 'Toddlers are at high risk for burns from reaching up and pulling down hot drinks, touching stoves and ovens, grabbing curling irons, and contact with hot car surfaces in summer. Scald burns from hot liquids are the most common type. First aid: cool the burn under cool running water for 10-20 minutes immediately. Do not apply ice, butter, toothpaste, or other home remedies. Do not pop blisters. Cover with a clean bandage. Give acetaminophen or ibuprofen for pain. Seek medical attention for any burn with blistering, any burn larger than your child\'s palm, or burns on the face, hands, feet, joints, or genitals.' },
  ],
  whenNormal: ['Mild redness (like a minor sunburn) that improves over 1-2 days with cool water and moisturizer', 'A tiny superficial burn from brief contact that heals within a week'],
  whenToMention: ['Any burn on a baby under 1 year old', 'A small blister from a minor burn that you are managing at home', 'A burn that is not healing well after a few days', 'You want guidance on wound care for a healing burn'],
  whenToActNow: ['Any burn with blistering (second-degree burn)', 'Burns larger than your child\'s palm', 'Burns on the face, hands, feet, joints, or genitals', 'Burns that look white, brown, or leathery (third-degree - call 911)', 'Electrical burns or chemical burns - go to the emergency room immediately', 'Any burn in a baby under 12 months'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sunburn', 'baby-cut-bleeding-wound', 'baby-first-aid-kit-essentials'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Treating Burns. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Treating-Burns.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Burn Prevention.', url: 'https://www.cdc.gov/fire-prevention/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Burn Prevention Tips. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Burn-Prevention-and-Treatment.aspx' },
  ],
};

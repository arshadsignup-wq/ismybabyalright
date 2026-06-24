import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-highchair-safety-tips',
  title: 'Highchair Safety Tips for My Baby',
  category: 'feeding',
  searchTerms: [
    'highchair safety tips baby',
    'baby highchair fall prevention',
    'when to use highchair baby',
    'highchair safety guidelines',
    'baby highchair harness',
    'highchair choking prevention',
    'safe highchair for baby',
    'highchair recall check',
    'baby slipping in highchair',
    'highchair safety checklist',
  ],
  quickAnswer:
    'Highchairs are essential for safe feeding but are associated with thousands of injuries annually in children. Always use the full safety harness (not just the tray), never leave your baby unattended in a highchair, ensure the highchair is on a flat surface away from tables or counters the baby could push off from, and check for recalls before purchase and periodically. Most babies are ready for a highchair when they can sit upright with minimal support, typically around 6 months.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'Most babies begin using highchairs around 6 months when they start solids, though some are ready slightly earlier. Your baby should be able to sit with minimal support and have good head and neck control before using a highchair. Choose a highchair with a wide base for stability, a 5-point harness (straps at shoulders, waist, and crotch), and a crotch post to prevent sliding. Reclinable highchairs may help babies who are not yet sitting fully independently. Always secure the safety straps even when your baby seems too small to climb out — it takes only a moment for a fall to occur.',
    },
    {
      ageRange: '6-12 months',
      context:
        'During this active period, highchair safety becomes critical as babies gain strength and mobility. Always use all harness straps — the tray alone is not sufficient to restrain your baby. Position the highchair away from walls, tables, and counters that your baby could use to push off and tip the chair. Ensure the tray locks securely. Check that fingers and hands are clear when attaching or removing the tray. Never place the highchair near stove tops, hot liquids, or sharp objects within reaching distance. Clean the highchair regularly, paying attention to crevices where food and bacteria can accumulate.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are at the highest risk for highchair injuries because they are strong, curious, and may try to climb in and out independently. Continue using the safety harness at every meal — standing in a highchair is a leading cause of highchair-related injuries. Lock folding mechanisms securely. If transitioning to a booster seat, ensure it attaches firmly to the chair and has its own restraint system. Portable clip-on chairs should only be used on suitable tables (not glass, not a table with a pedestal base) and must be rated for your child\'s weight. Check the CPSC website periodically for highchair recalls.',
    },
  ],
  whenNormal: [
    'Your baby is secured with the full harness system at every meal and is comfortable and upright in the highchair.',
    'Your baby can sit with good head control and is eating solids while supervised in the highchair.',
    'Your highchair is stable, on a flat surface, and positioned away from hazards.',
  ],
  whenToMention: [
    'Your baby resists being strapped into the highchair and you want strategies for making mealtimes smoother.',
    'Your baby has poor sitting balance and you are unsure if they are ready for a highchair.',
    'You want guidance on when and how to transition from a highchair to a booster or regular chair.',
  ],
  whenToActNow: [
    'Your baby has fallen from a highchair and hit their head — watch for signs of concussion (vomiting, excessive sleepiness, unequal pupils, loss of consciousness) and seek emergency care if any are present.',
    'Your baby is choking on food while in the highchair — follow infant choking first aid (5 back blows and 5 chest thrusts for infants, or abdominal thrusts for children over 1) and call 911 if the airway is not cleared.',
    'You discover your highchair model has been recalled due to a safety defect — stop using it immediately and contact the manufacturer.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-choking-on-food', 'not-sitting-up', 'throwing-food'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Highchair Safety Tips',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/High-Chair-Safety.aspx',
    },
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission — Highchair Safety',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Guides/Kids-and-Babies/High-Chairs',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Child Injury Prevention',
      url: 'https://www.cdc.gov/injury/features/child-injury/index.html',
    },
  ],
};

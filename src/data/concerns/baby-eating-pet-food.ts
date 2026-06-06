import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eating-pet-food',
  title: 'My Baby Ate Dog or Cat Food',
  category: 'feeding',
  searchTerms: ['baby ate dog food', 'baby ate cat food', 'baby eating pet food', 'toddler ate pet food', 'is pet food harmful baby', 'baby dog food danger', 'baby keeps eating pet food', 'toddler in dog bowl', 'baby cat food kibble', 'pet food choking baby'],
  quickAnswer: 'A small amount of dry pet food is generally not toxic but is not safe for babies due to choking risk and potential bacterial contamination. Dry kibble is a choking hazard for babies. Wet pet food may contain bacteria like Salmonella. Keep pet bowls out of reach and supervise closely. If baby has eaten a small amount and is not choking, they will likely be fine.',
  byAge: [
    { ageRange: '0-3 months', context: 'Babies this age are not mobile enough to access pet food, but keep pet bowls elevated as a proactive measure.' },
    { ageRange: '4-6 months', context: 'As babies become more mobile, ensure pet food bowls are not at floor level where baby can reach them.' },
    { ageRange: '6-9 months', context: 'Crawling babies are drawn to pet food bowls. Move bowls to elevated surfaces, behind pet gates, or feed pets at specific times and remove bowls after.' },
    { ageRange: '9-12 months', context: 'Babies may actively seek out pet food bowls. Consider feeding pets in a separate room or during baby\'s nap time. Pet water bowls are also a concern for both hygiene and drowning risk.' },
    { ageRange: '12-24 months', context: 'Toddlers may think pet food is a snack. Teach them that pet food is for the pet, not people. Continue keeping pet food out of reach. If your toddler repeatedly seeks out pet food, it could indicate a need for more snack opportunities.' },
  ],
  whenNormal: ['Baby tasted a single piece of dry pet food and you removed the rest', 'Baby is showing no symptoms after accidentally eating a small amount', 'Baby was curious about the pet\'s bowl and took a taste'],
  whenToMention: ['Baby eats pet food regularly despite your efforts to prevent it', 'Baby has developed a preference for pet food over their own food', 'Baby had digestive upset after eating pet food'],
  whenToActNow: ['Baby is choking on a piece of dry pet food', 'Baby has eaten raw pet food that may contain Salmonella or other bacteria and shows illness symptoms', 'Baby has eaten pet food that was recalled or known to be contaminated'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-eating-non-food-pica', 'baby-choking-on-food', 'baby-eating-dirt-sand'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Childproofing Your Home. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Pet Food Safety. 2023.', url: 'https://www.cdc.gov/foodsafety/communication/pet-food-safety.html' },
  ],
};

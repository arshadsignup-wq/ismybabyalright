import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-bed-bug-bites',
  title: 'Bed Bug Bites on Baby',
  category: 'skin',
  searchTerms: ['baby bed bug bites', 'bed bugs baby', 'baby bites in line bed', 'bed bug bite baby treatment', 'baby bed bug bites what to do', 'bed bug rash baby', 'toddler bed bug bites', 'baby bites waking up', 'bed bug bite reaction baby', 'baby new bites every morning'],
  quickAnswer: 'Bed bug bites on babies appear as small, red, itchy welts often in lines or clusters, typically noticed in the morning. Bed bugs are not known to transmit diseases, but the bites can cause significant itching and discomfort. Treatment focuses on managing itch with cool compresses and anti-itch cream while eliminating the bed bug infestation from the home.',
  byAge: [
    { ageRange: '0-3 months', context: 'Bed bug bites on young infants may cause larger, more inflamed reactions. If you notice new red bumps appearing on your baby each morning, especially in lines or clusters on exposed skin, inspect the crib mattress seams and surrounding areas for bed bugs. Professional pest control is the most effective treatment.' },
    { ageRange: '3-6 months', context: 'Bites typically appear on areas not covered by clothing, such as the face, arms, and hands. Cool compresses can soothe itching. Do not use topical steroid creams on a baby without your pediatrician\'s guidance. Focus on eliminating the bugs from the sleeping environment.' },
    { ageRange: '6-12 months', context: 'Babies may scratch bed bug bites and develop secondary skin infections. Keep nails short and the bite areas clean. Wash all bedding in hot water and dry on high heat. Encase the mattress in a bed bug-proof cover. Professional extermination is usually necessary to fully eliminate an infestation.' },
    { ageRange: '12-24 months', context: 'Toddlers may have bed bug bites that look like mosquito bites or hives. If your child wakes with new welts each morning, bed bugs should be considered. Check mattress seams, headboard crevices, and nearby furniture for signs of bugs. There is no health risk beyond the skin reaction, but prompt elimination of the infestation is important.' },
  ],
  whenNormal: ['Small itchy bumps in a linear pattern that resolve within a week once the infestation is treated', 'Bites that are mildly uncomfortable but not infected'],
  whenToMention: ['You suspect bed bug bites and want guidance on managing your baby\'s skin reactions', 'Bites are becoming infected from scratching', 'The bites are causing significant discomfort affecting your baby\'s sleep'],
  whenToActNow: ['A severe allergic reaction with widespread hives or swelling', 'Signs of significant skin infection from scratched bites with fever'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Bed Bugs.', url: 'https://www.cdc.gov/bed-bugs/index.html' },
    { org: 'AAD', citation: 'American Academy of Dermatology. Bed Bugs: Overview.', url: 'https://www.aad.org/public/diseases/a-z/bed-bugs-overview' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Bed Bugs. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Bed-Bugs.aspx' },
  ],
  relatedConcernSlugs: ['baby-flea-bites-pattern', 'baby-insect-bite-swelling-large', 'hives'],
};

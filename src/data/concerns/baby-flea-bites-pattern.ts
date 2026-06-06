import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-flea-bites-pattern',
  title: 'Flea Bite Clusters on Baby',
  category: 'skin',
  searchTerms: ['baby flea bites', 'flea bites baby', 'baby bites in clusters', 'baby flea bite rash', 'flea bites toddler', 'baby red dots in line', 'baby bites in groups', 'flea bite pattern baby', 'baby bites from pet fleas', 'flea bite treatment baby'],
  quickAnswer: 'Flea bites on babies appear as small, red, itchy bumps often in clusters or lines of 3, commonly called "breakfast, lunch, and dinner." They are most common on the legs and ankles. If you have pets, treating the pet and the home environment for fleas is essential to stop recurrent bites.',
  byAge: [
    { ageRange: '0-3 months', context: 'Flea bites on young infants may cause larger reactions due to their sensitive skin. The bites appear as small red bumps often in groups of 2 to 3. If your home has pets, check them for fleas. Treating the environment and the pet is the most effective way to protect your baby.' },
    { ageRange: '3-6 months', context: 'Babies spending time on the floor on blankets or play mats may be bitten by fleas living in carpets. The bites are typically on exposed skin of the legs, arms, and trunk. Cool compresses and keeping nails short to prevent scratching help manage symptoms.' },
    { ageRange: '6-12 months', context: 'As babies crawl, they are at higher risk for flea bites on the legs and lower body. Some babies develop significant allergic reactions to flea saliva with large, itchy welts. Regular vacuuming, washing pet bedding, and treating pets with veterinary flea prevention are essential steps.' },
    { ageRange: '12-24 months', context: 'Toddlers playing on the floor or in yards with flea-infested animals may develop widespread bites. The bites should be kept clean to prevent secondary infection from scratching. Persistent flea bite reactions may benefit from antihistamine treatment. Address the flea infestation at its source to resolve the problem.' },
  ],
  whenNormal: ['Small itchy bumps in clusters that match a flea bite pattern and improve when the flea source is treated', 'Mild redness that resolves over a few days'],
  whenToMention: ['Flea bites are numerous and causing significant discomfort', 'Bites are becoming infected from scratching', 'You need help identifying whether the bites are from fleas or another source'],
  whenToActNow: ['Signs of a severe allergic reaction like widespread hives or swelling after flea bites', 'Bites becoming very swollen, warm, and showing spreading redness indicating infection'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Insect Bites. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Insect-Bites-and-Stings.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Fleas.', url: 'https://www.cdc.gov/fleas/index.html' },
    { org: 'AAD', citation: 'American Academy of Dermatology. Bug Bites and Stings.', url: 'https://www.aad.org/public/everyday-care/injured-skin/bites/bug-bites-stings' },
  ],
  relatedConcernSlugs: ['baby-insect-bite-swelling-large', 'baby-mosquito-bite-reaction', 'baby-bed-bug-bites'],
};

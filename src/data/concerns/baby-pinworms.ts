import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-pinworms',
  title: 'Pinworms in Baby or Toddler',
  category: 'medical',
  searchTerms: ['baby pinworms', 'toddler pinworms', 'baby worms in poop', 'toddler itchy bottom at night', 'pinworm treatment baby', 'baby threadworms', 'toddler scratching bottom', 'baby worms treatment', 'pinworm test baby', 'toddler pinworm symptoms'],
  quickAnswer: 'Pinworms (Enterobius vermicularis) are the most common worm infection in children in the United States. They cause intense itching around the anus, especially at night, when the female worm lays eggs. Pinworms are not a sign of poor hygiene - they spread easily among children through microscopic eggs on surfaces, toys, and bedding. The worms are tiny (about 1/4 to 1/2 inch), thin, and white, and may be visible around the anus at night or in the stool. Treatment is a single dose of anti-worm medication (repeated after 2 weeks), and the entire household should be treated simultaneously.',
  byAge: [
    { ageRange: '0-12 months', context: 'Pinworms are uncommon in babies under 1 year but can occur if an older sibling has them. Signs in a baby include: fussiness (especially at night), scratching or rubbing the diaper area, and visible small white worms in the diaper or around the anus. If you suspect pinworms, check around your baby\'s anus 2-3 hours after they fall asleep using a flashlight - the worms are most active at night. Your pediatrician may recommend the "tape test" (pressing clear tape against the anal area in the morning to collect eggs for microscopic examination).' },
    { ageRange: '1-3 years', context: 'Pinworms are common in toddlers, especially those in daycare. The hallmark symptom is intense anal itching, particularly at night. Your toddler may be restless during sleep, scratch their bottom, or have difficulty settling at bedtime. You may see tiny white worms in the stool or around the anus at night. Treatment is typically mebendazole or pyrantel pamoate (available over the counter), given as a single dose and repeated in 2 weeks. All household members should be treated at the same time. Wash bedding and towels in hot water and maintain careful hand hygiene, especially after toileting and before meals.' },
  ],
  whenNormal: ['Anal itching that resolves after treatment', 'Seeing small white worms in the stool (while alarming, this confirms the diagnosis and is easily treated)', 'Mild sleep disruption during the itching phase'],
  whenToMention: ['You suspect pinworms and want a diagnosis confirmed', 'Your toddler has persistent anal itching', 'You need guidance on medication dosing for a young child', 'Pinworms keep recurring despite treatment'],
  whenToActNow: ['Intense scratching has led to skin breakdown or infection around the anus', 'Your child has abdominal pain along with the itching', 'You see worms that are not consistent with pinworms (longer, different color) - other worm types may need different treatment'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['diaper-rash', 'baby-sleep-disruption', 'baby-rash-wont-go-away'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Pinworms. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Pinworms.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Pinworm Infection.', url: 'https://www.cdc.gov/pinworm/' },
    { org: 'NIH', citation: 'National Library of Medicine. Enterobius vermicularis. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK536974/' },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-tick-bite',
  title: 'Tick Bite on Baby or Toddler',
  category: 'medical',
  searchTerms: ['baby tick bite', 'toddler tick', 'baby tick removal', 'toddler Lyme disease', 'baby tick on head', 'tick bite baby what to do', 'baby tick embedded', 'toddler tick bite rash', 'baby deer tick', 'baby tick bite bullseye rash'],
  quickAnswer: 'If you find a tick on your baby or toddler, remove it promptly using fine-tipped tweezers. Grasp the tick as close to the skin as possible and pull straight up with steady, even pressure. Do NOT twist, squeeze the body, or use vaseline, nail polish, or heat to remove the tick. After removal, clean the bite area with rubbing alcohol or soap and water. Save the tick in a sealed bag in case identification is needed later. Most tick bites do not transmit disease, especially if the tick is removed within 24-36 hours. Watch the bite area for 30 days for the appearance of a bull\'s-eye rash (sign of Lyme disease).',
  byAge: [
    { ageRange: '0-12 months', context: 'Tick bites in babies are uncommon but can occur during outdoor activities or if pets bring ticks indoors. Check your baby\'s entire body after spending time in wooded or grassy areas, paying special attention to the scalp, behind ears, neck folds, armpits, and diaper area. If you find a tick on a baby, remove it using fine-tipped tweezers and contact your pediatrician. Some doctors may recommend a preventive dose of antibiotic (doxycycline) after a deer tick bite in certain high-risk situations, though this requires special consideration in young infants.' },
    { ageRange: '1-3 years', context: 'Toddlers who play outdoors in tick-prone areas should be checked for ticks daily. Focus on the scalp (especially along the hairline), behind ears, neck, armpits, groin, and between toes. Use insect repellent with DEET (20-30%) on exposed skin for children over 2 months. After tick removal, monitor the bite for 30 days for: an expanding red ring or bull\'s-eye rash (possible Lyme disease), fever, body aches, or joint pain. Not all tick-borne illnesses cause a rash, so contact your doctor if your child develops a fever within 2 weeks of a tick bite.' },
  ],
  whenNormal: ['A small red bump at the bite site that resolves within 1-2 days (normal reaction to the bite, not Lyme disease)', 'Mild redness immediately around the tick bite that does not expand'],
  whenToMention: ['You found a tick on your baby or toddler and want guidance', 'The tick was engorged (full of blood, suggesting it was attached for a long time)', 'You are in an area with known Lyme disease risk and want to discuss preventive antibiotics', 'A rash is developing around the bite area'],
  whenToActNow: ['An expanding red ring or bull\'s-eye rash around the bite (possible Lyme disease - needs antibiotics)', 'Fever, body aches, headache, or joint pain within 2 weeks of a tick bite', 'Sudden facial weakness or paralysis (Bell\'s palsy - can be a sign of Lyme disease)', 'You cannot fully remove the tick (parts of the mouth are still embedded in the skin)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['insect-bites-baby', 'baby-bee-wasp-sting', 'baby-rash-wont-go-away', 'baby-first-aid-kit-essentials'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Tick Bites. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Tick-Bites.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Tick Bite Prevention.', url: 'https://www.cdc.gov/ticks/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Lyme Disease. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Lyme-Disease.aspx' },
  ],
};

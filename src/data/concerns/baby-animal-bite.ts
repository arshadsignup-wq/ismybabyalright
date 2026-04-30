import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-animal-bite',
  title: 'Baby or Toddler Bitten by an Animal',
  category: 'medical',
  searchTerms: ['baby animal bite', 'toddler dog bite', 'baby cat bite', 'toddler bitten by pet', 'baby dog bite treatment', 'toddler animal scratch', 'baby bitten by dog', 'toddler cat scratch', 'baby animal bite infection', 'toddler pet bite what to do'],
  quickAnswer: 'Animal bites in children should always be taken seriously because of the risk of infection and, in some cases, rabies. Dog bites are the most common animal bite in children, followed by cat bites. For any animal bite: wash the wound immediately with soap and running water for at least 5 minutes, then seek medical attention. Cat bites are more likely to become infected than dog bites because cat teeth are thin and create deep puncture wounds. Your pediatrician will determine if antibiotics, a tetanus booster, or rabies prophylaxis is needed based on the type of animal and circumstances of the bite.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies should never be left unsupervised with any animal, even a trusted family pet. Dog bites in babies often occur on the face and head because babies are at the dog\'s level. Any animal bite on a baby should receive prompt medical attention. Wash the wound immediately with soap and warm water for 5 minutes, apply gentle pressure to stop bleeding, and go to the emergency room or call your pediatrician. Bites on the face may need careful wound repair by a specialist.' },
    { ageRange: '1-3 years', context: 'Toddlers are at high risk for animal bites because they approach animals unpredictably, grab tails and ears, and do not recognize warning signs. Most dog bites in toddlers are from familiar dogs. After a bite: wash thoroughly with soap and water, apply pressure for bleeding, and seek medical attention. Your doctor will assess the wound and determine if antibiotics are needed (cat bites almost always require antibiotics). Ensure your child\'s tetanus is up to date. If bitten by a wild animal, stray, or animal acting unusually, rabies prophylaxis may be necessary - the animal should be identified and reported to animal control.' },
  ],
  whenNormal: ['A very minor scratch from a pet that breaks the skin minimally and is cleaned immediately'],
  whenToMention: ['Any animal bite that breaks the skin, even if it seems minor', 'A cat scratch or bite (high infection risk)', 'You are unsure if your child needs antibiotics or a tetanus update', 'A pet scratch that is becoming red or swollen'],
  whenToActNow: ['A deep bite, especially on the face, hands, or near a joint', 'A bite from a wild animal, stray, or bat (rabies risk)', 'A bite that is bleeding heavily and will not stop with pressure', 'Signs of infection developing: increasing redness, warmth, swelling, pus, fever, or red streaks', 'A bite from an animal that was acting strangely or may have rabies', 'Any bite on a baby under 1 year old'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-cut-bleeding-wound', 'baby-tick-bite', 'baby-bee-wasp-sting', 'baby-first-aid-kit-essentials'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Animal Bites. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Animal-Bites.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Dog Bite Prevention.', url: 'https://www.cdc.gov/dog-bites/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Rabies. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Rabies.aspx' },
  ],
};

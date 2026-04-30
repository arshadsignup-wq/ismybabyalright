import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-bruise-that-wont-go-away',
  title: 'Baby Has a Bruise That Won\'t Go Away',
  category: 'skin',
  searchTerms: ['baby bruise won\'t go away', 'toddler bruise lasting weeks', 'baby easy bruising', 'baby bruise not healing', 'toddler unexplained bruises', 'baby bruise changing color', 'toddler bruises on legs', 'baby bruises easily', 'baby bruise on forehead lasting', 'toddler bruise still there after 2 weeks'],
  quickAnswer: 'Most bruises in toddlers are completely normal and result from the bumps and tumbles of learning to walk and play. A typical bruise goes through a color cycle (red to blue/purple to green/yellow) and resolves within 2-3 weeks. Bruises on the shins, knees, and forehead are very common in active toddlers. However, bruises in unusual locations (torso, back, ears, neck), bruises in pre-mobile babies, or easy/excessive bruising may need medical evaluation to rule out bleeding disorders or other concerns.',
  byAge: [
    { ageRange: '0-12 months', context: 'Bruises in non-mobile babies (those who are not yet pulling up, cruising, or walking) are unusual and should always be evaluated by a pediatrician. Pre-mobile babies simply do not have the opportunity to bruise themselves through normal activity. Any bruise in a baby under 6 months, or in an older baby who is not yet moving independently, should be discussed with your doctor promptly.' },
    { ageRange: '1-3 years', context: 'Bruises on the shins, knees, forehead, and elbows are extremely common in active toddlers and are a normal part of development. These typically resolve within 2-3 weeks. However, consult your pediatrician if your toddler seems to bruise very easily or excessively, if bruises appear in unusual locations (torso, back, buttocks, ears, neck), if bruises are very large for the injury, or if your child has other signs like frequent nosebleeds or bleeding gums, which could suggest a bleeding disorder.' },
  ],
  whenNormal: ['Bruises on shins, knees, and forehead in an active toddler', 'A bruise that changes color from blue/purple to green to yellow over 1-3 weeks', 'A bruise after a witnessed fall or bump', 'Multiple small shin bruises in a walking toddler'],
  whenToMention: ['A bruise that has not resolved after 3 weeks', 'Your child seems to bruise more easily than other children', 'Bruises are appearing with minimal or no known trauma', 'Multiple bruises in various stages of healing without clear cause'],
  whenToActNow: ['Any bruise in a non-mobile baby (not yet pulling up or cruising)', 'Bruises in unusual locations: torso, back, buttocks, ears, neck, or genitals', 'Bruising accompanied by petechiae (tiny red/purple dots that do not blanch)', 'Easy bruising plus frequent nosebleeds, bleeding gums, or blood in stool (possible bleeding disorder)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-fell-off-bed', 'baby-bump-on-head', 'petechiae-baby', 'baby-fell-down-stairs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Bruises in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Bruises.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Bleeding Disorders. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/chronic/Pages/Bleeding-Disorders.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Bruising in Children.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};

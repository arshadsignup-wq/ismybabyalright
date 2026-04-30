import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-lice-treatment',
  title: 'Head Lice in Baby or Toddler',
  category: 'skin',
  searchTerms: ['baby lice', 'toddler head lice', 'lice treatment baby', 'head lice toddler', 'nits in baby hair', 'lice under 2 years', 'lice treatment safe for babies', 'baby itchy scalp', 'head lice daycare toddler', 'lice shampoo safe for toddler'],
  quickAnswer: 'Head lice are tiny insects that live on the scalp and are spread through head-to-head contact. While uncommon in babies under 1, lice can affect toddlers, especially those in daycare. Most over-the-counter lice treatments are only approved for children 2 and older, so treating a baby or young toddler requires pediatrician guidance. Lice do not spread disease and are not a sign of poor hygiene. Manual removal with a fine-toothed nit comb is the safest approach for very young children.',
  byAge: [
    { ageRange: '0-12 months', context: 'Head lice are rare in babies under 1 year because they have less hair and less head-to-head contact with other children. If your baby does get lice (usually from an older sibling), do not use over-the-counter lice shampoos, as they are not approved for infants. Manual removal with a fine-toothed nit comb on wet, conditioned hair is the safest method. Consult your pediatrician for guidance.' },
    { ageRange: '1-3 years', context: 'Toddlers in daycare can get head lice through head-to-head play and shared items. Look for small white or yellow eggs (nits) attached firmly to hair shafts near the scalp, and tiny moving bugs. Itching is the main symptom but may not appear for weeks after infestation. For children under 2, wet-combing with conditioner every 3-4 days for 2 weeks is the recommended first-line treatment. For children over 2, OTC permethrin products are an option. Treat all infested family members simultaneously.' },
  ],
  whenNormal: ['Itchy scalp during the first week of treatment as lice are being removed', 'Finding dead lice and old nits after treatment', 'Nits that remain attached to hair shafts for weeks after successful treatment (dead nits do not need removal but can be combed out)'],
  whenToMention: ['Your child under 2 has lice and you need safe treatment guidance', 'Lice have not cleared after 2 weeks of wet-combing', 'Your child has a secondary scalp infection from scratching', 'You are unsure whether what you see are lice or dandruff'],
  whenToActNow: ['The scalp has become infected with redness, swelling, oozing, or pus from scratching', 'Your baby has a fever along with an infected-looking scalp', 'You accidentally used a lice product not approved for your child\'s age and they are having a reaction'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-dry-scalp-flakes', 'cradle-cap', 'scabies-baby', 'impetigo-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Head Lice. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Head-Lice.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Head Lice Treatment.', url: 'https://www.cdc.gov/lice/head-lice/treatment.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Head Lice. Pediatrics.', url: 'https://publications.aap.org/pediatrics/article/135/5/e1355/33271/Head-Lice' },
  ],
};

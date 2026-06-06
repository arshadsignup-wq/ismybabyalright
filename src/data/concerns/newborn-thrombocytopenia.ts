import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-thrombocytopenia',
  title: 'Low Platelet Count in Newborns (Thrombocytopenia)',
  category: 'medical',
  searchTerms: [
    'newborn low platelets',
    'baby thrombocytopenia',
    'low platelet count baby',
    'neonatal thrombocytopenia',
    'newborn bruising easily platelets',
    'baby petechiae platelets',
    'newborn platelet disorder',
    'low platelets NICU baby',
    'thrombocytopenia premature baby',
    'newborn bleeding disorder',
  ],
  quickAnswer:
    'Thrombocytopenia (low platelet count) in newborns can be caused by infections, immune conditions, or other medical issues. Platelets are blood cells that help with clotting. Depending on the severity and cause, treatment may range from monitoring to platelet transfusions. Many cases resolve as the underlying cause is treated.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Neonatal thrombocytopenia is usually detected through routine blood work or when signs of bleeding are noticed. It is categorized as early-onset (first 72 hours, often related to placental insufficiency, maternal conditions, or infection) or late-onset (after 72 hours, often infection-related). Signs can include petechiae (tiny red or purple spots on the skin), excessive bruising, or bleeding. Mild thrombocytopenia may require only monitoring, while severe cases may need platelet transfusions. The underlying cause determines the specific treatment approach.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Many cases of neonatal thrombocytopenia resolve as the underlying cause is treated or resolves on its own. Immune-mediated thrombocytopenia (such as neonatal alloimmune thrombocytopenia or NAIT) may take longer to resolve. Your baby will have blood counts monitored until platelet levels have normalized.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most neonatal thrombocytopenia has resolved by this time. If platelet counts remain low, further evaluation for inherited platelet disorders or chronic conditions may be warranted.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Persistent thrombocytopenia at this age is unusual and requires specialist evaluation. Most babies who had neonatal thrombocytopenia have normal platelet counts and no lasting effects.',
    },
  ],
  whenNormal: [
    'Platelet count is within normal range for newborns',
    'Mild thrombocytopenia that is improving with treatment of the underlying cause',
    'No signs of active bleeding or bruising',
  ],
  whenToMention: [
    'You notice tiny red or purple dots on your baby\'s skin (petechiae)',
    'Your baby bruises very easily or in unusual locations',
    'Your baby had thrombocytopenia in the NICU and you want to understand the follow-up plan',
  ],
  whenToActNow: [
    'New or spreading petechiae, excessive bruising, or any unexplained bleeding in your newborn',
    'Bloody stool, bloody urine, or bleeding from any site that does not stop with gentle pressure',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Neonatal Thrombocytopenia. NeoReviews.',
      url: 'https://publications.aap.org/neoreviews',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Neonatal Thrombocytopenia. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK557755/',
    },
  ],
  relatedConcernSlugs: ['newborn-anemia-signs', 'newborn-infection-signs-sepsis', 'newborn-vitamin-k-refusal-risks'],
};

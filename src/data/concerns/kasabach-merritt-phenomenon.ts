import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'kasabach-merritt-phenomenon',
  title: 'My Baby\'s Vascular Tumor Is Causing Blood Clotting Problems (Kasabach-Merritt)',
  category: 'medical',
  searchTerms: [
    'Kasabach Merritt phenomenon baby',
    'Kasabach Merritt syndrome',
    'vascular tumor low platelets baby',
    'kaposiform hemangioendothelioma',
    'tufted angioma baby',
    'baby bruising vascular tumor',
    'KMP baby treatment',
    'large vascular mass low platelets',
    'consumptive coagulopathy vascular tumor baby',
    'vascular tumor platelet trapping',
  ],
  quickAnswer:
    'Kasabach-Merritt phenomenon (KMP) is a rare but serious complication where certain vascular tumors (kaposiform hemangioendothelioma or tufted angioma — not common infantile hemangiomas) trap platelets and clotting factors, leading to dangerously low platelet counts and a bleeding disorder. KMP is a medical emergency that requires hospitalization and specialized treatment. Despite being frightening, modern treatment with sirolimus and other medications has significantly improved outcomes. Most children respond well to treatment, though the vascular tumor may not fully resolve.',
  byAge: [
    {
      ageRange: '0-3 months (acute presentation)',
      context:
        'KMP typically presents in infancy with a rapidly enlarging, firm, purple vascular mass that becomes painful and tense. The baby may develop bruising, petechiae (tiny red dots on the skin), and signs of bleeding due to severely low platelets. Blood tests show very low platelet counts (often below 10,000) and elevated D-dimer. This is a medical emergency requiring immediate hospitalization. Treatment typically begins with sirolimus and sometimes corticosteroids.',
    },
    {
      ageRange: '3-12 months (treatment phase)',
      context:
        'Treatment with sirolimus (and sometimes vincristine for resistant cases) usually leads to gradual improvement in platelet counts and shrinkage of the tumor over weeks to months. Blood work is monitored closely. The tumor may change from purple and tense to softer and lighter as it responds to treatment. Side effects of medications are monitored. Most infants respond within 2-4 weeks, though treatment may continue for months to years.',
    },
    {
      ageRange: '1-3 years (ongoing management)',
      context:
        'Even after the KMP resolves (platelets normalize), the underlying vascular tumor often persists as a residual mass. Treatment with sirolimus may continue for an extended period. The vascular anomalies team will determine when it is safe to wean medication. Some residual mass may be managed with compression garments or additional interventions.',
    },
    {
      ageRange: '3 years+',
      context:
        'Long-term follow-up is important. The residual vascular tumor may cause chronic pain, limb length discrepancy, or cosmetic concerns. Physical therapy may be needed if a limb is affected. Most children who survive the acute KMP episode do well long-term, though they need continued monitoring by a vascular anomalies center.',
    },
  ],
  whenNormal: [
    'Your baby is being treated for KMP and platelet counts are improving with medication',
    'The vascular mass is shrinking and becoming softer on treatment',
    'Your child has a residual vascular tumor after KMP resolution and it is being monitored',
  ],
  whenToMention: [
    'The vascular mass seems to be growing or becoming more purple and tense again',
    'Your baby is developing new bruises or petechiae while on treatment',
    'The mass is causing your baby pain or discomfort',
    'You have questions about how long treatment needs to continue',
  ],
  whenToActNow: [
    'Your baby is bleeding (from nose, mouth, or a wound) that does not stop — call 911 or go to the emergency room immediately',
    'Your baby has a rapidly expanding vascular mass with new bruising — this is a medical emergency',
    'Your baby develops a high fever while on immunosuppressive medication — seek immediate medical evaluation',
    'Your baby seems very lethargic, pale, or is breathing rapidly — these may be signs of anemia from blood loss and need urgent care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'vascular-malformations-baby',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Kasabach-Merritt Phenomenon: Pathogenesis and Management. Blood, 2022.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/35167657/',
    },
    {
      org: 'CHOP',
      citation:
        'Children\'s Hospital of Philadelphia. Kaposiform Hemangioendothelioma.',
      url: 'https://www.chop.edu/conditions-diseases/kaposiform-hemangioendothelioma',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Kasabach-Merritt Syndrome.',
      url: 'https://rarediseases.org/rare-diseases/kasabach-merritt-syndrome/',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-vitamin-k-refusal-risks',
  title: 'Risks of Declining Vitamin K Shot',
  category: 'medical',
  searchTerms: ['vitamin K shot refusal', 'declining vitamin K newborn', 'vitamin K injection risks benefits', 'newborn vitamin K necessary', 'VKDB bleeding disorder baby', 'vitamin K shot safety', 'oral vs injection vitamin K', 'why does baby need vitamin K', 'vitamin K deficiency bleeding', 'refusing vitamin K newborn risks'],
  quickAnswer: 'The vitamin K injection given at birth prevents vitamin K deficiency bleeding (VKDB), a potentially life-threatening condition. Newborns are born with very low vitamin K levels and cannot make enough on their own. Without the shot, babies are at risk of serious, sometimes fatal bleeding into the brain or other organs. The injection is safe and highly effective.',
  byAge: [
    { ageRange: '0-1 month', context: 'Vitamin K is essential for blood clotting. Newborns are born with very low levels because vitamin K does not cross the placenta well and their gut bacteria (which produce vitamin K) are not yet established. Without supplementation, about 1 in 60-250 babies will develop some form of VKDB. Early VKDB (first week) can cause bleeding from the umbilical stump, gastrointestinal tract, or circumcision site. Late VKDB (2-12 weeks) is more dangerous and can cause sudden bleeding into the brain, which can be fatal or cause permanent brain damage. A single intramuscular injection of vitamin K at birth is 100% effective at preventing VKDB.' },
    { ageRange: '1-3 months', context: 'Late VKDB occurs primarily between 2-12 weeks of age and almost exclusively in babies who did not receive the vitamin K injection. Breastfed babies are at higher risk because breast milk contains very little vitamin K. Signs include unexpected bruising, bleeding from the nose or mouth, blood in stools, or sudden lethargy (brain bleeding). Late VKDB is a medical emergency.' },
    { ageRange: '3-6 months', context: 'Risk of VKDB decreases after 12 weeks as the baby\'s gut microbiome matures and dietary vitamin K increases with solid food introduction later. If vitamin K was declined at birth, discuss with your pediatrician about monitoring and supplementation options.' },
    { ageRange: '6-12 months', context: 'VKDB risk is minimal by this age. Babies who received the injection at birth have no ongoing concerns related to vitamin K.' },
  ],
  whenNormal: ['Baby received vitamin K injection at birth - no risk of VKDB', 'No bleeding concerns in a baby who received the injection'],
  whenToMention: ['You are considering declining the vitamin K injection and want to understand the risks', 'You declined the injection and want to discuss monitoring or alternative supplementation', 'Your baby did not receive vitamin K and you notice any unusual bleeding or bruising'],
  whenToActNow: ['Any unexplained bleeding, bruising, or sudden lethargy in a baby who did not receive vitamin K at birth - this is a medical emergency', 'Bloody stool, bloody nose, or excessive bleeding from any site in the first 3 months'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Vitamin K and the Newborn Infant. Pediatrics. 2022;149(3):e2021056036.', url: 'https://publications.aap.org/pediatrics/article/149/3/e2021056036/185178/Vitamin-K-and-the-Newborn-Infant' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Vitamin K Deficiency Bleeding.', url: 'https://www.cdc.gov/ncbddd/vitamink/facts.html' },
  ],
  relatedConcernSlugs: ['newborn-thrombocytopenia', 'newborn-hepatitis-b-vaccine-timing'],
};

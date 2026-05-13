import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vitamin-k-shot-newborn',
  title: 'The Vitamin K Shot for Newborns',
  category: 'medical',
  searchTerms: [
    'vitamin k shot newborn',
    'why do newborns need vitamin k',
    'vitamin k injection baby',
    'is vitamin k shot necessary',
    'vitamin k deficiency bleeding baby',
    'VKDB newborn',
    'refusing vitamin k shot',
    'vitamin k shot side effects baby',
  ],
  quickAnswer:
    'The vitamin K shot is given at birth to prevent a rare but potentially fatal bleeding disorder called Vitamin K Deficiency Bleeding (VKDB). All babies are born with very low levels of vitamin K, which is essential for blood clotting. Without the shot, babies are at risk for sudden, uncontrolled bleeding that can occur in the brain and other organs during the first six months of life.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Vitamin K does not cross the placenta well, so all newborns have very low stores regardless of the mother\'s diet. Breast milk contains only small amounts of vitamin K. Without the injection, babies are most vulnerable to VKDB in the first weeks of life (early-onset) and between 2-12 weeks (classical onset). The single intramuscular injection given at birth provides enough vitamin K to prevent bleeding until the baby\'s own stores build up through diet.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Late-onset VKDB can occur between 2 weeks and 6 months of age, primarily in exclusively breastfed infants who did not receive the vitamin K shot. This form often presents as sudden bleeding into the brain, which can cause permanent brain damage or death. The vitamin K injection given at birth provides protection through this entire vulnerable period.',
    },
  ],
  whenNormal: [
    'A small bruise or minor bleeding at the injection site on the thigh, which resolves quickly',
    'Brief crying during the injection, similar to any other shot',
    'The injection site looks slightly red or swollen for a day or two',
  ],
  whenToMention: [
    'You have questions about why the vitamin K shot is recommended and want to discuss it with your healthcare provider before delivery',
    'You are considering declining the vitamin K shot and want to understand the specific risks of VKDB',
    'You are interested in oral vitamin K as an alternative and want to understand the differences in effectiveness',
    'Your baby did not receive the vitamin K shot at birth and you want to discuss options',
  ],
  whenToActNow: [
    'Your baby who did not receive the vitamin K shot develops unexpected bruising, blood in the stool or urine, prolonged bleeding from minor cuts, or bleeding from the umbilical cord stump -- seek emergency care immediately',
    'Your newborn (whether or not they received the shot) appears unusually sleepy, is vomiting, or has a bulging soft spot, which could indicate intracranial bleeding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Policy Statement: Controversies Concerning Vitamin K and the Newborn. Pediatrics, 2003.',
      url: 'https://publications.aap.org/pediatrics/article/112/1/191/28848/Controversies-Concerning-Vitamin-K-and-the-Newborn',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Vitamin K Deficiency Bleeding (VKDB).',
      url: 'https://www.cdc.gov/ncbddd/vitamink/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Vitamin K: Fact Sheet for Health Professionals.',
      url: 'https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/',
    },
  ],
};

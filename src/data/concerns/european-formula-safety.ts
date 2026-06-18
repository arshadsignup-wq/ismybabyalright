import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'european-formula-safety',
  title: 'Is European Baby Formula (HiPP, Holle) Safer Than US Formula?',
  category: 'feeding',
  searchTerms: [
    'European formula vs American formula',
    'HiPP formula safety',
    'Holle formula safe',
    'European baby formula USA',
    'is European formula better',
    'importing baby formula',
    'HiPP vs Enfamil',
    'organic European formula',
    'European formula regulations',
    'buying formula from Germany',
  ],
  quickAnswer:
    'European formulas like HiPP and Holle are popular among US parents who believe they are higher quality. European formulas are regulated by the EU and do meet strict safety standards — but they are not FDA-regulated for the US market, meaning there is no US oversight of storage, transport, or labeling accuracy when purchased through third-party importers. Both US and European formulas are nutritionally complete and safe when used as directed. The main differences are in ingredient sourcing (European formulas tend to use organic ingredients and avoid corn syrup) and specific nutrient levels. Neither system is inherently safer than the other.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'If you choose to use European formula, be aware of the risks: imported formulas may not have been stored at proper temperatures during shipping, labeling is often not in English (risking preparation errors), and there is no FDA recall system for these products. If you decide to import, use only well-established importers with transparent supply chains. US formulas (Enfamil, Similac, Burt\'s Bees, Bobbie, etc.) are rigorously tested by the FDA and are nutritionally complete.',
    },
    {
      ageRange: '6-12 months',
      context:
        'European formula systems use stages (Pre, 1, 2, 3) corresponding to age, while US formulas generally use a single formula for the first year. If using European formula, ensure you are using the correct stage. As solid foods are introduced, formula remains the primary nutrition source. Whether US or European, follow preparation instructions exactly — European formulas may require different water temperatures.',
    },
    {
      ageRange: '12 months+',
      context:
        'At 12 months, most babies can transition to whole cow\'s milk and no longer need formula. European "growing-up milks" (stage 3+) are not necessary and not recommended by the AAP or most European pediatric societies. If your child needs a specialized formula beyond 12 months for medical reasons, work with your pediatrician to select one with appropriate regulatory oversight.',
    },
  ],
  whenNormal: [
    'You are using any FDA-regulated US formula and your baby is growing well — your baby is getting complete nutrition',
    'You have researched European formula, understand the risks of importation, and are using it successfully with your baby thriving',
    'Your baby tolerates their formula well regardless of brand and is gaining weight appropriately',
  ],
  whenToMention: [
    'You are considering switching to European formula and want your pediatrician\'s input',
    'Your baby is not tolerating their current formula (excessive spit-up, blood in stool, rash, poor weight gain)',
    'You received European formula with damaged packaging, unusual appearance, or unclear labeling',
    'You are unsure about proper preparation of a formula with non-English instructions',
  ],
  whenToActNow: [
    'Your baby shows signs of an allergic reaction to any formula — hives, facial swelling, difficulty breathing, persistent vomiting — call 911',
    'Your baby is refusing all formula and showing signs of dehydration — sunken fontanelle, no wet diapers, dry mouth — seek immediate care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'high-lipase-breast-milk',
    'paced-bottle-feeding-guide',
    'fpies-grain-reactions',
  ],
  sources: [
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration. Infant Formula.',
      url: 'https://www.fda.gov/food/resources-you-food/infant-formula',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing an Infant Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Choosing-an-Infant-Formula.aspx',
    },
    {
      org: 'EFSA',
      citation:
        'European Food Safety Authority. Scientific Opinion on Infant Formulae.',
      url: 'https://www.efsa.europa.eu/en/efsajournal/pub/3760',
    },
  ],
};

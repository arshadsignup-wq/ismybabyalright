import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-introducing-fish-seafood',
  title: 'How to Introduce Fish and Seafood to My Baby',
  category: 'feeding',
  searchTerms: [
    'when can baby eat fish',
    'introducing fish to baby',
    'baby seafood introduction',
    'baby fish allergy risk',
    'salmon for baby first food',
    'mercury in fish baby concern',
    'shellfish baby when safe',
    'best fish for baby',
    'baby fish bones safety',
    'omega 3 fish baby brain',
  ],
  quickAnswer:
    'Fish can be introduced to babies starting around 6 months of age and is highly recommended as one of the first foods due to its excellent nutritional profile — it is rich in omega-3 fatty acids (DHA), protein, vitamin D, and iron. Choose low-mercury fish such as salmon, cod, tilapia, or sardines. Avoid high-mercury fish like shark, swordfish, king mackerel, and tilefish. Ensure all fish is well-cooked and carefully deboned before serving.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Fish should not be introduced before your baby is ready for solid foods. However, if you are breastfeeding, eating low-mercury fish yourself provides DHA to your baby through breast milk, which supports brain and eye development. The FDA and EPA recommend that breastfeeding women eat 2-3 servings of low-mercury fish per week. If your baby has severe eczema or a family history of fish or shellfish allergy, discuss the timing of introduction with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Fish is one of the best first foods for babies due to its nutritional density. Offer well-cooked, flaked, and carefully deboned fish. Good first options include salmon, cod, pollock, tilapia, sole, and canned light tuna (limit canned albacore/white tuna due to higher mercury). For baby-led weaning, a salmon fillet can be offered in a large strip that the baby can grab and gnaw. Shellfish (shrimp, crab, lobster) can also be introduced at 6 months in small, well-cooked pieces. Watch for allergic reactions — fish allergy symptoms include hives, vomiting, facial swelling, and difficulty breathing.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Continue offering 2-3 servings of low-mercury fish per week. The FDA recommends that children ages 1-3 eat 1-ounce servings. Fish sticks, fish cakes, and canned fish (sardines, salmon) are convenient options. Avoid raw or undercooked fish (sushi, sashimi, ceviche) for young children due to the risk of parasites and bacterial contamination. If your child is allergic to fish, they are not necessarily allergic to all types — some children tolerate certain fish species but not others. An allergist can help determine safe options. Fish allergy, unlike milk and egg allergy, is less commonly outgrown.',
    },
  ],
  whenNormal: [
    'Your baby eats well-cooked, low-mercury fish without any allergic reaction.',
    'Your baby initially rejects the taste or texture of fish but accepts it after several exposures — this is normal.',
    'Your baby enjoys some types of fish but not others — offering variety over time expands preferences.',
  ],
  whenToMention: [
    'There is a family history of fish or shellfish allergy and you want guidance on safe introduction.',
    'Your baby has had a mild reaction to fish and you want to determine if they have a true allergy.',
    'You are concerned about mercury levels and want specific guidance on which fish to serve and how often.',
  ],
  whenToActNow: [
    'Your baby develops hives, facial or tongue swelling, difficulty breathing, vomiting, or becomes limp after eating fish — this may be anaphylaxis. Call 911 and administer epinephrine if prescribed.',
    'Your baby is choking on a fish bone — follow infant choking first aid procedures (back blows and chest thrusts) and call 911 if the airway is not cleared.',
    'Your baby has a known fish allergy and accidentally consumed fish and is showing allergic symptoms — follow your emergency action plan immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-introducing-meat-first-foods', 'baby-food-allergen-ladder-approach', 'baby-introducing-eggs-safely'],
  sources: [
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration — Advice About Eating Fish for Children',
      url: 'https://www.fda.gov/food/consumers/advice-about-eating-fish',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Starting Solid Foods',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization — Complementary Feeding',
      url: 'https://www.who.int/health-topics/complementary-feeding',
    },
  ],
};

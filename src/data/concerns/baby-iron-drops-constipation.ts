import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-iron-drops-constipation',
  title: 'My Baby Gets Constipated from Iron Drops',
  category: 'digestive',
  searchTerms: [
    'baby iron drops constipation',
    'iron supplement constipation baby',
    'baby iron drops hard poop',
    'iron drops side effects baby',
    'baby iron supplement stool changes',
    'baby constipated from iron',
    'dark stool iron drops baby',
    'iron drops stomach pain baby',
    'how to give baby iron without constipation',
    'baby iron drops alternatives',
  ],
  quickAnswer:
    'Constipation is the most common side effect of iron drops in babies. Iron supplements can harden stools and cause darker stool color (dark green or black), which is normal. Strategies to manage constipation include giving iron with vitamin C-rich foods to improve absorption (allowing for a lower effective dose), offering prune or pear juice (for babies over 6 months), increasing fluid intake, and discussing alternative iron formulations with your pediatrician.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'The AAP recommends iron supplementation (1 mg/kg/day) for exclusively breastfed infants starting at 4 months. If your young baby develops constipation from iron drops, try giving them at a different time of day, with or between feedings — some babies tolerate iron better with milk, others on a more empty stomach. Dark green or black stools are normal and expected with iron supplementation. If your baby is straining, grunting, or producing hard pellet stools, contact your pediatrician. They may adjust the dose, recommend a different iron formulation (such as iron polysaccharide, which may cause fewer GI side effects), or suggest gentle constipation remedies like bicycle leg movements.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Once your baby is eating solids, you can pair iron drops with vitamin C-rich foods (mashed strawberries, orange segments, bell peppers) to enhance iron absorption. This may allow your pediatrician to use a lower dose. Iron-rich solid foods (meat, fortified cereals, beans) can also supplement or replace drops. For constipation relief, offer 1-2 ounces of prune, pear, or apple juice (100% juice), increase water intake, and offer high-fiber foods like prunes, pears, peas, and oatmeal. Avoid banana and rice cereal, which can worsen constipation.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers who need iron supplementation for iron deficiency anemia should continue with their prescribed dose even if constipation occurs. Work with your pediatrician on management rather than stopping the supplement, as untreated iron deficiency can affect cognitive development. Strategies include: offering iron with citrus juice, splitting the dose into two smaller doses during the day, trying a different formulation, and maintaining a high-fiber diet with adequate fluids. Iron-rich foods (red meat, fortified cereals, beans, spinach) can reduce the need for supplemental drops over time.',
    },
  ],
  whenNormal: [
    'Your baby\'s stools are darker (green or black) while on iron drops — this is a harmless color change from unabsorbed iron.',
    'Your baby has slightly firmer stools but still passes them without excessive straining or distress.',
    'Constipation is mild and responds to dietary adjustments like prune juice, extra water, or high-fiber foods.',
  ],
  whenToMention: [
    'Your baby is consistently constipated since starting iron drops and dietary measures are not helping.',
    'Your baby seems to have significant stomach pain or distress when taking iron drops.',
    'You are considering stopping iron supplementation due to side effects and want to discuss alternatives.',
  ],
  whenToActNow: [
    'Your baby has not had a bowel movement in 5 or more days and is showing signs of distress: abdominal bloating, vomiting, refusing to eat, or extreme fussiness — seek medical evaluation.',
    'There is blood in your baby\'s stool (bright red or maroon, not the dark color from iron) — contact your pediatrician.',
    'Your baby has accidentally ingested a large amount of iron supplement — call Poison Control (1-800-222-1222) immediately, as iron overdose can be very dangerous in children.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['hard-pebble-poop', 'straining-to-poop', 'baby-introducing-meat-first-foods'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Iron Supplementation for Infants',
      url: 'https://publications.aap.org/pediatrics/article/126/5/1040/65340/Diagnosis-and-Prevention-of-Iron-Deficiency-and',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Iron Deficiency in Children',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/vitamins-minerals/iron.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health — Iron: Fact Sheet for Health Professionals',
      url: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    },
  ],
};

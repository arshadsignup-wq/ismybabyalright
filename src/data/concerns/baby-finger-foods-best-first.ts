import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-finger-foods-best-first',
  title: 'Best First Finger Foods for Baby',
  category: 'feeding',
  searchTerms: [
    'first finger foods baby',
    'best finger foods for baby',
    'when to start finger foods',
    'baby led weaning foods',
    'finger food ideas 6 months',
    'safe finger foods baby',
    'soft foods for baby',
    'choking safe finger foods',
    'baby self feeding first foods',
    'finger food size guide baby',
  ],
  quickAnswer:
    'Finger foods can be introduced when your baby can sit upright with minimal support, has good head control, and shows interest in food - typically around 6-9 months. The best first finger foods are soft enough to mash between your fingers, cut into safe shapes (long strips for younger babies, small pieces for babies with pincer grasp), and include a variety of nutrients. Good options include ripe banana, avocado, soft-cooked sweet potato, and steamed broccoli florets.',
  byAge: [
    {
      ageRange: '6-8 months',
      context:
        'When starting finger foods, offer pieces that are the size and shape of your finger (long strips or sticks) so your baby can grasp them with their whole hand (palmar grasp). Foods should be soft enough to mash easily between your thumb and forefinger. Great first options include: ripe banana or avocado strips, steamed sweet potato or carrot sticks, soft-cooked broccoli florets, well-cooked pasta, strips of toast with nut butter, and soft fruit like mango or peach. Avoid hard, round foods that are choking hazards (grapes, cherry tomatoes, hot dog rounds, hard raw vegetables).',
    },
    {
      ageRange: '8-12 months',
      context:
        'As your baby develops the pincer grasp (around 8-10 months), you can offer smaller pieces of soft food (pea-sized). This is a great time to introduce more textures and variety. Options include: small pieces of soft cheese, diced cooked vegetables, scrambled eggs, shredded chicken or flaked fish (check carefully for bones), small pieces of ripe fruit, cooked beans, and O-shaped cereal. Continue to avoid choking hazards. Introduce common allergens (eggs, peanut butter, tree nuts, fish, wheat) during this period as current guidelines recommend early introduction.',
    },
    {
      ageRange: '12-24 months',
      context:
        'By 12 months, most babies are eating a wide variety of finger foods as a major part of their diet. They should be practicing with a spoon and fork (with supervision). You can offer most family foods cut into safe sizes. Continue to cut round foods (grapes, cherry tomatoes) lengthwise into quarters. Cut meat into thin strips or small shreds. By 18-24 months, many toddlers can manage most table foods with appropriate size modifications. Continue to supervise all eating and ensure your child is seated and not running or playing while eating.',
    },
  ],
  whenNormal: [
    'Your baby gags occasionally when trying new textures - gagging is a safety reflex and is different from choking.',
    'Your baby drops most of the food or squishes it rather than eating it at first - this is normal sensory exploration.',
    'Your baby prefers some foods over others and goes through phases of liking and rejecting certain foods.',
  ],
  whenToMention: [
    'Your baby gags excessively with any textured food and this is not improving over time.',
    'Your baby refuses all finger foods and only accepts purees past 10-12 months.',
    'You are unsure about how to safely introduce common allergens like peanut, egg, or fish.',
  ],
  whenToActNow: [
    'Your baby is choking - unable to breathe, cry, or cough, turning blue or going silent. Perform infant back blows and chest thrusts immediately.',
    'Your baby has an allergic reaction to a new food - hives, swelling, vomiting, or difficulty breathing. Call 911 for severe reactions.',
    'Your baby has swallowed a non-food object that could cause obstruction.',
  ],
  relatedMilestones: [
    'fine-motor-pincer-grasp',
    'fine-motor-self-feeding',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-choking-on-food',
    'baby-cup-drinking-when-to-start',
    'baby-bottle-to-cup-transition',
    'throwing-food',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Foods and Drinks for 6 to 24 Months Old.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/when-to-introduce-solid-foods.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choking Prevention for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx',
    },
  ],
};

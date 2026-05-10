import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'choking-hazard-foods-list',
  title: 'Choking Hazard Foods Comprehensive List',
  category: 'feeding',
  searchTerms: [
    'choking hazard foods baby',
    'foods to avoid baby choking',
    'toddler choking risk foods',
    'safe food sizes for baby',
    'how to cut food for baby',
    'grapes choking hazard baby',
    'hot dog choking risk',
    'popcorn safe for toddler',
    'nuts choking baby',
    'food choking prevention infant',
  ],
  quickAnswer:
    'Choking is a leading cause of injury and death in children under 5. The most dangerous foods are those that are round, firm, small, slippery, or sticky. High-risk foods include whole grapes, hot dogs, whole nuts, popcorn, hard candy, chunks of raw vegetables, large pieces of meat, marshmallows, and thick globs of nut butter. Many of these foods can be made safer by cutting, cooking, or modifying the texture appropriately.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies this age should only receive breast milk or formula. No solid foods of any kind are appropriate. Even liquids can be a choking risk if bottle flow is too fast or if babies are fed in a poor position. Always hold your baby semi-upright during feeds and never prop a bottle.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most babies are not ready for solids until around 6 months. If starting purees around 4-6 months under pediatric guidance, ensure foods are completely smooth with no lumps. Signs of readiness for solids include good head control, sitting with support, and showing interest in food. Stick to thin, smooth purees and watch for signs of gagging, which is distinct from choking.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As textures advance, be aware of the most common choking hazards: whole grapes (cut lengthwise into quarters), cherry tomatoes (quartered), blueberries (smashed or halved), hot dogs (never serve round slices; cut lengthwise then into small pieces or avoid entirely), raw apple and carrot (cook until soft), nuts (serve only as smooth nut butter spread thinly), popcorn (avoid entirely), and thick chunks of cheese or meat (shred or cut very small). Always supervise eating and ensure your baby is seated upright.',
    },
    {
      ageRange: '12 months+',
      context:
        'Continue to modify high-risk foods: quarter grapes and cherry tomatoes lengthwise, avoid whole nuts until age 4-5, skip popcorn until age 4, avoid hard candy, cut hot dogs lengthwise then into small pieces (or better yet, avoid them), thinly spread nut butters rather than serving globs, cook hard raw vegetables until soft, cut meat into very small pieces, and avoid sticky foods like large marshmallows and large spoonfuls of peanut butter. Teach your toddler to sit while eating and take small bites.',
    },
  ],
  whenNormal: [
    'Your baby occasionally gags on new textures but recovers quickly on their own, as gagging is a protective reflex',
    'Your toddler coughs briefly during a meal and clears the food independently',
    'You are cutting food into age-appropriate sizes and your child is eating without distress',
    'Your child is learning to chew and sometimes spits out food that is too challenging',
  ],
  whenToMention: [
    'Your baby or toddler has frequent gagging episodes that seem excessive even with properly prepared foods',
    'Your child has had a choking event that required back blows or the Heimlich maneuver and you want to discuss prevention strategies',
    'You are unsure how to safely prepare specific foods for your baby\'s current developmental stage',
  ],
  whenToActNow: [
    'Your baby or toddler cannot breathe, cry, cough, or make any sound and food may be lodged in the airway; call 911 immediately and begin infant or child choking rescue (back blows and chest thrusts for infants, abdominal thrusts for children over 1)',
    'Your child turns blue, loses consciousness, or becomes limp during a choking episode',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choking Prevention for Children. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Choking Hazards. Injury Prevention and Control.',
      url: 'https://www.cdc.gov/choking/prevention/index.html',
    },
    {
      org: 'AAP',
      citation:
        'Committee on Injury, Violence, and Poison Prevention. Prevention of Choking Among Children. Pediatrics. 2010;125(3):601-607.',
      url: 'https://publications.aap.org/pediatrics/article/125/3/601/72519/Prevention-of-Choking-Among-Children',
    },
  ],
};

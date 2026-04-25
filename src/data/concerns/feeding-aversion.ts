import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'feeding-aversion',
  title: 'My Baby Has a Feeding Aversion',
  category: 'feeding',
  searchTerms: [
    'baby feeding aversion',
    'baby refuses all food',
    'baby cries at feeding time',
    'baby turns away from bottle',
    'feeding aversion symptoms',
    'how to fix feeding aversion',
    'baby scared of feeding',
    'baby arches back during feeding',
    'baby fights every feeding',
    'traumatic feeding experience',
  ],
  quickAnswer:
    'Feeding aversion occurs when a baby develops anxiety or fear around feeding, often following a negative experience like choking, reflux pain, or pressure to eat. Unlike normal pickiness, babies with feeding aversion may cry, turn away, or arch their back at the sight of a bottle or food. The key to resolving feeding aversion is to remove all pressure, follow your baby\'s cues, and rebuild positive associations with feeding. This often requires patience and sometimes professional support.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In very young babies, feeding aversion is often linked to undiagnosed reflux, a fast-flow bottle nipple causing gagging, or being pushed to finish bottles. Babies may associate feeding with discomfort and begin refusing even when hungry. Signs include arching away from the bottle, crying when seeing the bottle, or only feeding when drowsy. Work with your pediatrician to rule out medical causes like reflux or tongue tie before addressing behavioral components.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, feeding aversion can develop from repeated negative experiences or from well-meaning attempts to "get more into them" by distracting, restraining, or forcing feeds. Babies are surprisingly perceptive and will resist feeding if they sense anxiety or pressure. The most effective approach is counterintuitive: offer the bottle calmly, watch for turning away or fussing, and immediately stop when your baby shows disinterest. Trust that hunger will motivate them.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Feeding aversion can extend to solid foods, especially if the transition to solids involved pressure or negative experiences like choking. Babies may clamp their mouths shut, cry at the sight of the highchair, or refuse to open their mouths for a spoon. Create positive, low-pressure mealtimes: let your baby explore food, eat together as a family, and never force, bribe, or punish around food. Consider a feeding therapist if aversion persists.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddler feeding aversion often has deep behavioral roots and may require more intensive intervention. Children remember negative feeding experiences and can develop strong anxiety around meals. A responsive feeding approach - offering food without pressure, allowing autonomy, modeling eating, and staying calm - is essential. If your toddler is not consuming enough for adequate growth, work closely with a pediatric feeding team (pediatrician, dietitian, occupational or speech therapist).',
    },
  ],
  whenNormal: [
    'Your baby occasionally refuses a feeding because they are not hungry or are distracted',
    'Your baby shows preferences for certain foods or feeding positions but still eats willingly',
    'Your baby slows down or turns away when full, signaling healthy appetite regulation',
    'Your baby refuses food during illness or teething but returns to normal within a few days',
  ],
  whenToMention: [
    'Your baby consistently cries, arches, or turns away at every feeding attempt for more than a few days',
    'Your baby will only eat when asleep or very drowsy',
    'You have to use distraction (screens, toys) or restraint to get your baby to eat',
    'Mealtimes have become a source of stress and anxiety for you and your baby',
    'Your baby\'s weight gain has slowed or they have lost weight',
  ],
  whenToActNow: [
    'Your baby is losing weight, severely dehydrated, or has not had a wet diaper in 8+ hours',
    'Your baby refuses all food and liquids for more than 12 hours and is lethargic',
    'Your baby was recently hospitalized or had a choking/aspiration event and now refuses all oral intake',
  ],
  relatedMilestones: [
    'feeding',
    'emotional-regulation',
    'sensory-processing',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Responsive Feeding: Promoting Healthy Weight. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Responsive-Feeding.aspx',
    },
    {
      org: 'Feeding Matters',
      citation:
        'Feeding Matters. Pediatric Feeding Disorder: Recognition and Treatment.',
      url: 'https://www.feedingmatters.org/',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Pediatric Feeding and Swallowing Disorders.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/pediatric-feeding-and-swallowing/',
    },
  ],
};

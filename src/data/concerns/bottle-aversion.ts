import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bottle-aversion',
  title: 'My Baby Won\'t Take a Bottle (Bottle Aversion)',
  category: 'feeding',
  searchTerms: [
    'bottle aversion',
    'baby screams at bottle',
    'baby arches back when bottle offered',
    'baby refuses all bottles',
    'baby afraid of bottle',
    'bottle feeding aversion',
    'baby won\'t eat from bottle anymore',
    'baby traumatized by bottle',
    'baby cries hysterically at bottle',
    'how to fix bottle aversion',
  ],
  quickAnswer:
    'Bottle aversion is different from simple bottle refusal. A baby with a true aversion may become distressed at the sight of a bottle, arching away, crying, or clamping their mouth shut. This often develops after negative feeding experiences such as being forced to finish a bottle or feeding during illness. With patience and a pressure-free approach, most babies can overcome bottle aversion.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Bottle aversion in very young babies can develop if they have been pressured to eat more than they want, if feeding has been associated with pain such as undiagnosed reflux, or after a medical procedure involving their mouth or throat. The most important first step is to identify and address the underlying cause. If reflux is involved, treating it can make feeds more comfortable. Once the cause is addressed, offer the bottle without pressure and let your baby decide how much to take. Never force a nipple into a resisting baby\'s mouth.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is a common age for bottle aversion to emerge, especially in babies who have been given bottles by well-meaning caregivers who push them to finish a certain amount. Babies at this age are becoming more aware and may begin to associate the bottle with stress. To overcome this, follow your baby\'s cues strictly. Offer the bottle, and if they turn away, respect that signal. Never wiggle, jiggle, or force the nipple. It may take days or weeks of pressure-free offerings before your baby begins to relax around the bottle.',
    },
    {
      ageRange: '6-9 months',
      context:
        'If your baby has developed a bottle aversion at this age, you may be able to offer milk through alternative methods such as a sippy cup, straw cup, or open cup while you work on the bottle aversion. This reduces pressure around the bottle while ensuring your baby continues to get adequate fluids and nutrition. Some families find that offering the bottle in a completely new environment, such as outdoors or in a different room, can help break the negative association.',
    },
    {
      ageRange: '9-12 months',
      context:
        'At this age, babies with a bottle aversion can often transition directly to a cup, which may be the easiest solution. The AAP recommends weaning off bottles by 12 months anyway. If your baby will drink from a cup, there may be no need to work on bottle acceptance at all. Focus on ensuring adequate fluid and caloric intake through cups, solid foods, and continued breastfeeding if applicable.',
    },
  ],
  whenNormal: [
    'Your baby turns away from the bottle when full but is otherwise calm and happy',
    'Your baby has a temporary reduction in bottle intake during illness or teething',
    'Your breastfed baby initially resists the bottle but gradually accepts it with patience',
  ],
  whenToMention: [
    'Your baby becomes visibly distressed at the sight of a bottle, crying or arching away before the nipple even touches their lips',
    'Your baby consistently takes much less than expected at each bottle feed and is not making up the difference with breastfeeding',
    'Your baby\'s weight gain has slowed or you are concerned they are not getting enough to eat',
  ],
  whenToActNow: [
    'Your baby is showing signs of dehydration such as fewer than six wet diapers per day, dry mouth, or sunken fontanelle',
    'Your baby refuses all feeding methods including breast, bottle, cup, and syringe and has not eaten for an extended period',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bottle Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Bottle-Feeding.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Amount and Schedule of Baby Formula Feedings. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Amount-and-Schedule-of-Formula-Feedings.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Feeding From a Bottle.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/bottle-feeding/index.html',
    },
  ],
};

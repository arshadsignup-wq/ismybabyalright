import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-chewing',
  title: 'Baby Not Chewing Food',
  category: 'feeding',
  searchTerms: [
    'baby not chewing food',
    'baby swallows food whole',
    'toddler not chewing',
    'baby won\'t chew just swallows',
    'when do babies learn to chew',
    'baby only eats purees won\'t chew',
    'baby pockets food in cheeks',
    'baby can\'t chew food',
    'baby refuses lumpy food',
    'how to teach baby to chew',
  ],
  quickAnswer:
    'Learning to chew is a developmental skill that babies build gradually over several months. Babies do not need teeth to chew; their gums are remarkably strong and effective at mashing soft foods. Most babies begin making chewing motions around 6 to 7 months and become more proficient by 9 to 12 months. If your baby seems to swallow food without chewing, it is usually a sign they need more practice with textured foods.',
  byAge: [
    {
      ageRange: '6-7 months',
      context:
        'Babies at this age are just beginning to develop munching patterns, which is an up-and-down jaw movement rather than the rotary chewing adults use. Offering soft, dissolvable foods like puffs or very soft cooked vegetables helps them practice. It is completely normal for them to gum food and swallow pieces that are soft enough without much actual chewing.',
    },
    {
      ageRange: '7-9 months',
      context:
        'You should see a progression from simple munching to more sophisticated jaw movements. Babies start moving food from side to side with their tongue, which is essential for chewing. Offering foods with varied textures, such as soft lumps in purees, soft finger foods, and meltable solids, helps develop these skills. Babies who are kept on only smooth purees too long may have more difficulty progressing.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By this age most babies can handle soft table foods and are developing a rotary chewing pattern. If your baby is still only accepting smooth purees and refusing or gagging on any texture, it is a good idea to talk to your pediatrician. An occupational therapist or speech-language pathologist specializing in feeding can assess oral motor development and provide targeted strategies.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Toddlers should be managing a wide variety of textures by this age, though they may still prefer softer foods. Some toddlers "pocket" food in their cheeks rather than chewing and swallowing it, which can indicate oral motor weakness or sensory issues. If your toddler is not progressing in texture acceptance, a feeding evaluation is recommended.',
    },
  ],
  whenNormal: [
    'Your baby under 9 months gums soft food and swallows without visible chewing motions',
    'Your baby chews some foods but swallows others whole if they are small and soft enough',
    'Your baby has only been eating solids for a few weeks and is still learning',
    'Your baby chews well with finger foods but does not chew purees, which is expected since purees do not require chewing',
  ],
  whenToMention: [
    'Your baby is over 9 months and still gags on anything thicker than smooth puree',
    'Your toddler consistently pockets food in their cheeks without swallowing',
    'Your baby seems unable to move food from the front to the back of their mouth',
    'Your baby is falling behind in other oral motor skills like babbling or drinking from a cup',
  ],
  whenToActNow: [
    'Your baby frequently chokes on foods that are appropriate for their age and texture level',
    'Your baby has difficulty swallowing liquids and seems to aspirate or cough during drinking',
    'Your child is over 18 months and cannot manage any textured foods beyond purees',
  ],
  relatedMilestones: [
    'fine-motor',
    'feeding',
    'oral-motor',
  ],
  showSelfReferral: false,
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
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Foods and Drinks for 6 to 24 Month Olds.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/foods-and-drinks-6-to-24-months.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choking Prevention. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'refusing-bottle',
  title: 'Baby Refusing Bottle',
  category: 'feeding',
  searchTerms: [
    'baby refusing bottle',
    'baby won\'t take bottle',
    'breastfed baby refuses bottle',
    'baby suddenly won\'t take bottle',
    'how to get baby to take bottle',
    'baby fights bottle',
    'baby cries when given bottle',
    'baby won\'t drink from bottle',
    'going back to work baby won\'t take bottle',
    'baby rejecting bottle nipple',
  ],
  quickAnswer:
    'Bottle refusal is a very common challenge, especially in breastfed babies who are accustomed to nursing. It does not mean something is wrong with your baby or your milk. Many babies need time, patience, and sometimes a different bottle or nipple to accept a bottle. Most babies will eventually take a bottle, especially when offered by someone other than the breastfeeding parent.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'If you plan to bottle-feed at some point, introducing a bottle between 3 and 6 weeks is often recommended by lactation consultants. Before 3 weeks, it is generally best to establish breastfeeding first. Babies who have only breastfed may resist the bottle because the sucking technique and flow are different from the breast. Try paced bottle feeding, where the bottle is held more horizontally and the baby controls the flow.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is a common age for bottle refusal, especially if a bottle was not introduced earlier. Babies at this age are more aware and may have a strong preference for the breast. Try having someone other than the breastfeeding parent offer the bottle, use a slow-flow nipple, warm the milk to body temperature, and try different positions. Some babies prefer to take a bottle while being walked around rather than held in a feeding position.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Babies who refuse bottles at this age can sometimes bypass the bottle entirely and learn to use a sippy cup or straw cup for expressed milk or formula. This is a perfectly acceptable alternative. If your baby is also eating some solids, their overall nutrition needs can be met through a combination of breast, cup, and solid foods.',
    },
    {
      ageRange: '9-12 months',
      context:
        'If your baby has never taken a bottle, a transition to an open cup or straw cup is a reasonable approach at this age. The AAP recommends transitioning off bottles by 12 months anyway, so going straight to a cup is actually advantageous. Offer expressed milk or formula in a cup throughout the day.',
    },
  ],
  whenNormal: [
    'Your breastfed baby pushes the bottle away but nurses happily at the breast',
    'Your baby takes the bottle from other caregivers but refuses it from the breastfeeding parent',
    'Your baby needs several attempts over days or weeks before accepting a bottle',
    'Your baby takes small amounts from a bottle initially and gradually increases',
  ],
  whenToMention: [
    'Your baby refuses all feeding methods including breast, bottle, and cup, and seems uninterested in eating',
    'Your baby is not producing enough wet diapers, which may suggest they are not getting enough to eat',
    'You need to return to work and your baby will not accept any alternative feeding method from a caregiver',
    'Your baby seems to be in pain or discomfort with any feeding method, not just the bottle',
  ],
  whenToActNow: [
    'Your baby is showing signs of dehydration such as very few wet diapers, dry mouth, sunken fontanelle, or lethargy',
    'Your baby has completely stopped eating from any source for more than 8 to 12 hours in newborns or 24 hours in older babies',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
    'fine-motor',
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
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Proper Storage and Preparation of Breast Milk.',
      url: 'https://www.cdc.gov/breastfeeding/recommendations/handling_breastmilk.htm',
    },
  ],
};

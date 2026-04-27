import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-still-breastfeeding',
  title: 'Toddler Still Breastfeeding - Is Extended Breastfeeding Normal?',
  category: 'feeding',
  searchTerms: ['toddler still breastfeeding','extended breastfeeding toddler','breastfeeding past 1 year','breastfeeding 2 year old','when to stop breastfeeding','breastfeeding older child','extended nursing normal','toddler nursing all night','still breastfeeding at 18 months','breastfeeding beyond infancy','WHO breastfeeding recommendations','is it weird to breastfeed a toddler'],
  quickAnswer: 'Extended breastfeeding (beyond 12 months) is biologically normal and supported by every major health organization. The WHO recommends breastfeeding until at least age 2 and beyond. The AAP recommends breastfeeding for 2 years or longer as mutually desired. Breast milk continues to provide nutrition, immune protection, and comfort well into toddlerhood. The decision of when to wean is a personal one between you and your child.',
  byAge: [
    { ageRange: '12-18 months', context: 'Breastfeeding at this age provides significant nutritional and immunological benefits. Breast milk still contains protein, fat, vitamins, and antibodies that support your toddler\'s immune system. Many toddlers nurse 3-6 times per day at this age, often around sleep times and for comfort. Solid foods are becoming the primary source of nutrition, but breast milk remains a valuable supplement. You may face social pressure to wean, but every major health organization supports continued breastfeeding.' },
    { ageRange: '18-24 months', context: 'Your toddler may nurse less frequently as their diet expands, or they may increase nursing during illness, teething, or developmental leaps. Night nursing may still be happening and is biologically normal, though you can gently night wean if it is affecting your sleep and wellbeing. The comfort and security of breastfeeding helps toddlers navigate the emotional challenges of this age. Research shows extended breastfeeding is associated with better immune function and fewer illnesses.' },
    { ageRange: '2-3 years', context: 'Globally, the average age of weaning is between 2.5 and 7 years. If your child is still nursing at this age, they are within the biological norm for humans, even if it feels uncommon in your culture. Nursing sessions are usually brief and tied to specific times (wake-up, bedtime, comfort). Child-led weaning at this age often happens gradually. If you want to actively wean, gentle approaches like "don\'t offer, don\'t refuse" and shortening sessions work better than abrupt stopping.' },
    { ageRange: '3+ years', context: 'Some children continue nursing past age 3. Research does not show any psychological or developmental harm from extended breastfeeding. If both you and your child are happy with the arrangement, there is no medical reason to stop. If you are ready to wean but your child is not, work with gentle boundaries - designated nursing times, shorter sessions, and offering alternatives for comfort. Abrupt weaning can be distressing for both of you.' },
  ],
  whenNormal: ['Your toddler nurses a few times a day and is also eating a varied solid food diet','Your toddler uses nursing for comfort during illness, injury, or emotional overwhelm','Nursing frequency increases temporarily during illness or developmental changes','Your toddler is growing well and meeting developmental milestones while continuing to breastfeed'],
  whenToMention: ['Your toddler is nursing so frequently that they are refusing solid foods and not getting adequate nutrition from their diet','You want to wean but are struggling and need strategies or support','Extended night nursing is significantly impacting your mental health or ability to function','You are pregnant and having painful nursing sessions or contractions while breastfeeding'],
  whenToActNow: ['Your toddler is losing weight or showing signs of nutritional deficiency despite breastfeeding','You are experiencing severe breast pain, mastitis, or other complications','You feel pressured or coerced into continuing breastfeeding against your wishes - your bodily autonomy matters'],
  relatedMilestones: ['feeding-solids-introduction'],
  showSelfReferral: false,
  relatedConcernSlugs: ['breastfeeding-to-formula-transition','toddler-wont-eat-vegetables','toddler-nutritional-deficiency-signs'],
  sources: [
    { org: 'WHO', citation: 'World Health Organization. Breastfeeding. Fact Sheet.', url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding' },
    { org: 'AAP', citation: 'Meek JY, Noble L, et al. Policy Statement: Breastfeeding and the Use of Human Milk. Pediatrics. 2022.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Policy-Statement-Breastfeeding-and-the-Use-of' },
    { org: 'NIH', citation: 'Dewey KG. Nutrition, Growth, and Complementary Feeding of the Breastfed Infant. Pediatric Clinics of North America. 2001.', url: 'https://pubmed.ncbi.nlm.nih.gov/11236733/' },
  ],
};

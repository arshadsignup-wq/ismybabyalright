import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-eating-after-illness',
  title: 'Baby Not Eating After Being Sick',
  category: 'feeding',
  searchTerms: ['baby not eating after illness','baby appetite loss after being sick','toddler won\'t eat after stomach bug','baby refusing food after cold','how long before appetite returns after illness baby','baby not eating after vomiting','toddler eating less after fever','baby food refusal after sick','when to worry about baby not eating after illness','appetite recovery baby'],
  quickAnswer: 'It is very common for babies and toddlers to eat less during and after an illness. Appetite typically returns within a few days to two weeks after recovery. During illness, the body redirects energy from digestion to fighting infection, which naturally decreases hunger. Focus on hydration first - breast milk, formula, or small sips of water and electrolyte solution. Offer favorite foods in small amounts without pressure. Most children will self-regulate and make up for lost intake once they feel better.',
  byAge: [
    { ageRange: '0-6 months', context: 'Breastfed babies may nurse more frequently but for shorter periods during illness. Formula-fed babies may take smaller bottles. This is normal. The priority is maintaining hydration - wet diapers are the best indicator. If your baby is under 3 months and refusing feeds, contact your pediatrician sooner rather than later, as young babies can become dehydrated quickly. Breast milk provides antibodies that help fight the illness, so continue nursing on demand.' },
    { ageRange: '6-12 months', context: 'Babies on solids often refuse solid foods during illness and revert to wanting only breast milk or formula. This is appropriate - liquids are easier to digest and more important for hydration. After illness, reintroduce solids gradually with bland, easy-to-digest foods. Do not force feed. Appetite typically returns within 3-7 days of recovery. If your baby was eating well before illness, they will return to that pattern.' },
    { ageRange: '12-24 months', context: 'Toddlers can be dramatically picky after illness. They may want only one or two foods, refuse previously accepted foods, or eat very small amounts. After a stomach bug, dairy and high-fat foods may cause temporary digestive discomfort. Start with bland options - crackers, toast, banana, rice, applesauce. Small frequent offerings work better than large meals. Full appetite usually returns within 1-2 weeks of recovery.' },
    { ageRange: '2-3 years', context: 'Older toddlers may develop temporary food aversions after illness, especially if they vomited a particular food. This is a learned protective response and usually resolves on its own. Do not make mealtimes stressful by pressuring them to eat. Offer a variety of accepted foods and let them choose how much to eat. If appetite has not returned to normal within 2-3 weeks, or if weight loss is significant, talk to your pediatrician.' },
  ],
  whenNormal: ['Your baby or toddler eats less for a few days to a week after being sick but is still drinking fluids','Your child wants only breast milk, formula, or a few comfort foods during recovery','Appetite gradually improves over several days as energy returns','Your toddler is drinking well and having normal wet diapers even though solid food intake is reduced'],
  whenToMention: ['Appetite has not returned after 2 weeks of being well again','Your baby is losing weight or not regaining weight lost during illness','Your child is refusing both food and fluids','Your baby seems to have developed a persistent aversion to eating or swallowing after illness'],
  whenToActNow: ['Your baby is showing signs of dehydration - no wet diapers for 6+ hours, no tears when crying, sunken fontanelle, very dry mouth','Your baby is under 3 months and refusing to eat or drink','Your child is lethargic, unresponsive, or unable to keep any fluids down for more than 12 hours'],
  relatedMilestones: ['feeding-solids-introduction'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-vomiting-no-fever','toddler-wont-eat-vegetables','toddler-nutritional-deficiency-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Feeding During Illness. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/treatments/Pages/Vomiting.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Signs of Dehydration in Infants and Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Signs-of-Dehydration-in-Infants-Children.aspx' },
    { org: 'WHO', citation: 'World Health Organization. Feeding the Sick Child. Pocket Book of Hospital Care for Children. 2013.', url: 'https://www.who.int/publications/i/item/978-92-4-154837-3' },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eating-non-food-pica',
  title: 'My Baby Eats Non-Food Items (Pica)',
  category: 'digestive',
  searchTerms: [
    'baby eating dirt',
    'baby eating non food items',
    'toddler pica',
    'baby eating paper',
    'baby putting everything in mouth',
    'baby eating paint chips',
    'toddler eating chalk',
    'baby eating sand',
    'pica in toddlers',
    'baby eating things off the floor',
  ],
  quickAnswer:
    'It is completely normal for babies and young toddlers to explore by putting objects in their mouths. True pica, which is the persistent eating of non-food substances, is uncommon before age two and may be linked to iron deficiency or developmental factors. If your child repeatedly seeks out and eats non-food items past the typical mouthing stage, it is worth discussing with your pediatrician.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies in this age range begin to explore the world through their mouths as part of normal oral-motor development. They will mouth toys, blankets, and anything within reach. This is not pica. However, always ensure small objects and toxic substances are kept out of reach, as choking and poisoning are the primary dangers at this age.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become mobile through crawling and cruising, they gain access to more objects on the floor and within reach. Mouthing intensifies during this period and is a healthy part of sensory exploration. Eating small amounts of dirt, paper, or similar items occasionally is normal and not typically harmful. Focus on babyproofing and removing hazardous items from the environment.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Most toddlers begin to distinguish between food and non-food items by about 18 months. Some continued mouthing is normal, but deliberately and repeatedly eating non-food substances like dirt, clay, paint chips, or chalk could indicate pica. This behavior is sometimes associated with iron-deficiency anemia or zinc deficiency, and your pediatrician may recommend a blood test to check.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By age two, most children have moved past the mouthing stage. If your child persistently seeks out and consumes non-food items at this age, it warrants medical evaluation. Pica in this age group can be associated with nutritional deficiencies, developmental differences, or sensory processing needs. Lead exposure is a particular concern if your child eats paint chips or soil near older buildings.',
    },
  ],
  whenNormal: [
    'Your baby under 18 months puts objects in their mouth to explore them but does not consistently swallow non-food items',
    'Your baby occasionally tastes dirt, sand, or paper during outdoor play but is easily redirected',
    'Your toddler mouths toys or household objects but spits them out rather than eating them',
  ],
  whenToMention: [
    'Your child over 18 months repeatedly and deliberately eats non-food substances like dirt, clay, or paper despite redirection',
    'You suspect your child may have been eating paint chips, especially in homes built before 1978',
    'Your child seems to crave specific non-food items and becomes upset when prevented from eating them',
  ],
  whenToActNow: [
    'Your child has eaten something potentially toxic such as batteries, magnets, cleaning products, or lead-based paint chips',
    'Your child is showing signs of a bowel obstruction including vomiting, abdominal distension, refusal to eat, or inability to pass stool after ingesting non-food material',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pica: Why Kids Eat Non-Food Items. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Pica.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Pica - Symptoms and causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/pica/symptoms-causes/syc-20376132',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Lead Poisoning Prevention.',
      url: 'https://www.cdc.gov/lead-prevention/index.html',
    },
  ],
};

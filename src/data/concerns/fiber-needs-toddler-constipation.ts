import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'fiber-needs-toddler-constipation',
  title: 'Fiber Needs for Toddlers',
  category: 'feeding',
  searchTerms: [
    'fiber for toddler constipation',
    'how much fiber does toddler need',
    'high fiber foods for baby',
    'toddler constipation diet',
    'fiber rich foods for kids',
    'toddler hard poop fiber',
    'baby not enough fiber',
    'toddler pooping difficulty fiber',
    'fiber supplement toddler',
  ],
  quickAnswer:
    'Adequate fiber intake helps prevent constipation and supports a healthy gut. The general guideline for children is their age in years plus 5 grams of fiber per day (so a 2-year-old needs about 7 grams daily). Good sources include fruits, vegetables, whole grains, beans, and lentils. Increasing fiber gradually and ensuring adequate fluid intake is important to avoid worsening constipation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Breast milk and formula are easily digestible and contain no dietary fiber. Fiber is not necessary at this age. Stool patterns in young infants vary widely: breastfed babies may poop after every feeding or go up to a week without a bowel movement, and both can be normal. Formula-fed babies typically have firmer, more regular stools. Do not add fiber or any other supplements to bottles.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue exclusive breast milk or formula feeding. There is no need for fiber supplementation. If your baby seems constipated, discuss with your pediatrician before making any dietary changes. Some formula-fed infants may benefit from a different formula if constipation is persistent, but this should be guided by your doctor.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, fiber naturally enters the diet through fruits, vegetables, and whole grains. Good early fiber sources include pureed prunes, pears, peas, sweet potatoes, and oatmeal. If constipation develops as solids are introduced (very common), increase the proportion of fruits and vegetables relative to binding foods like rice cereal and bananas. Offer small sips of water with meals to help fiber work effectively.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers should aim for about 19 grams of fiber per day according to the Institute of Medicine, or use the age-plus-5 rule (age in years + 5 grams). Practical high-fiber foods for toddlers include raspberries, pears, prunes, avocado, peas, broccoli, whole-wheat bread, oatmeal, beans, and lentils. Introduce fiber gradually to prevent gas and bloating. Always pair increased fiber with adequate fluid intake. Avoid relying on fiber supplements without pediatrician guidance.',
    },
  ],
  whenNormal: [
    'Your toddler has soft, easy-to-pass stools at least every 2-3 days with a diet that includes fruits and vegetables',
    'Your baby experiences temporary constipation when starting solids, which improves with dietary adjustments',
    'Your toddler has occasional harder stools after eating more starchy or dairy-heavy foods',
    'Your toddler is growing well and has regular bowel movements even if they do not eat a lot of fiber-rich foods',
  ],
  whenToMention: [
    'Your toddler consistently has hard, painful stools despite eating fruits, vegetables, and drinking adequate fluids',
    'Your toddler avoids or refuses all fruits and vegetables and is frequently constipated',
    'Your toddler has blood on the stool surface or complains of pain during bowel movements',
  ],
  whenToActNow: [
    'Your toddler has not had a bowel movement in over a week and has abdominal distension, vomiting, or severe pain',
    'Your toddler has large amounts of blood in the stool, a distended and rigid abdomen, or is refusing all food and drink',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fiber: An Important Part of Your Teen\'s Diet. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/teen/nutrition/Pages/Fiber-An-Important-Part-of-Your-Teens-Diet.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Constipation in Children. Diagnosis and Treatment.',
      url: 'https://www.mayoclinic.org/diseases-conditions/constipation-in-children/symptoms-causes/syc-20354242',
    },
  ],
};

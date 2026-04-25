import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'milk-protein-allergy',
  title: 'Could My Baby Have a Milk Protein Allergy?',
  category: 'feeding',
  searchTerms: [
    'milk protein allergy symptoms',
    'CMPA symptoms baby',
    'cow\'s milk protein allergy',
    'baby allergic to formula',
    'dairy allergy in breastfed baby',
    'milk allergy vs lactose intolerance',
    'baby fussy after eating dairy',
    'blood in stool milk allergy',
    'baby eczema and dairy',
    'dairy free formula options',
  ],
  quickAnswer:
    'Cow\'s milk protein allergy (CMPA) affects about 2-3% of infants and can occur in both formula-fed and breastfed babies. Common signs include persistent fussiness, eczema, blood or mucus in stool, vomiting, or slow weight gain. If you suspect CMPA, talk to your pediatrician before making dietary changes - they can guide you through an elimination trial and recommend appropriate formula or dietary modifications for nursing parents.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'CMPA symptoms often appear in the first weeks of life, though it may take several weeks to recognize the pattern. In formula-fed babies, symptoms may appear shortly after introduction. In breastfed babies, proteins from dairy in the mother\'s diet pass through breast milk. Early signs include excessive crying, reflux, refusing feeds, skin rashes, or blood-streaked stools. True CMPA is less common than normal newborn fussiness, so work with your pediatrician to distinguish between the two.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, CMPA symptoms may become more obvious, particularly eczema or persistent digestive issues. Some babies show delayed reactions (non-IgE mediated allergy), making the connection to dairy less obvious. If your baby has eczema that does not respond to moisturizers, persistent diarrhea or constipation, or is not gaining weight well despite feeding frequently, discuss CMPA with your doctor.',
    },
    {
      ageRange: '6-12 months',
      context:
        'When starting solids, be cautious about introducing dairy products if you suspect CMPA. Most babies with CMPA diagnosed in infancy will outgrow it by age 1-3, but introduction of dairy should be done under medical supervision. Your pediatrician may recommend skin testing or an oral food challenge before reintroducing dairy. Continue with hypoallergenic formula or dairy-free diet if breastfeeding until cleared by your doctor.',
    },
    {
      ageRange: '12 months+',
      context:
        'Many children outgrow CMPA by their first birthday, but some continue to be allergic into toddlerhood. If your child was diagnosed with CMPA as an infant, your allergist will likely recommend a supervised dairy challenge around 12-18 months. Some children may tolerate baked milk products before tolerating fresh dairy. Never reintroduce dairy at home without medical guidance if your child had severe reactions previously.',
    },
  ],
  whenNormal: [
    'Your baby occasionally spits up after feeding but is otherwise happy and gaining weight well',
    'Your baby has mild cradle cap or baby acne, which is not the same as allergy-related eczema',
    'Your baby is fussy in the evening but settles with comfort measures and has no other symptoms',
    'Your baby has one or two green poops, which can be normal and is not necessarily a sign of allergy',
  ],
  whenToMention: [
    'Your baby has persistent eczema that does not improve with moisturizers and gentle skin care',
    'You notice small amounts of blood or mucus in your baby\'s stool on multiple occasions',
    'Your baby is frequently fussy or crying for hours after feeds despite trying different feeding positions and pacing',
    'Your baby is gaining weight slowly or has dropped percentiles on their growth chart',
    'Your baby has a family history of food allergies or eczema and is showing possible allergy symptoms',
  ],
  whenToActNow: [
    'Your baby has hives, swelling of the face or lips, or difficulty breathing after consuming dairy (call 911)',
    'Your baby has projectile vomiting after every feed and shows signs of dehydration',
    'You see large amounts of bright red blood in your baby\'s diaper',
  ],
  relatedMilestones: [
    'feeding',
    'digestive-health',
    'skin-health',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cow\'s Milk Protein Allergy in Infants. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Food-Allergies-in-Children.aspx',
    },
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma & Immunology. Milk & Dairy Allergy: Symptoms & Management.',
      url: 'https://acaai.org/allergies/allergic-conditions/food/milk-dairy/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Guidelines for the Diagnosis and Management of Food Allergy. 2023.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy',
    },
  ],
};

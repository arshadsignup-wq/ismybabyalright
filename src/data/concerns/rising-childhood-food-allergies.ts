import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rising-childhood-food-allergies',
  title: 'Rising Food Allergies in Children: What Parents Should Know',
  category: 'medical',
  searchTerms: [
    'childhood food allergies increasing',
    'why are food allergies rising',
    'food allergies kids getting worse',
    'baby food allergy epidemic',
    'infant food allergy prevention',
    'early allergen introduction',
    'peanut allergy prevention baby',
    'food allergy in children statistics',
    'preventing food allergies babies',
    'food allergy risk factors',
  ],
  quickAnswer:
    'Food allergies in children have increased significantly over the past few decades, now affecting approximately 8% of US children. The landmark LEAP study demonstrated that early introduction of allergenic foods (particularly peanuts) between 4 and 6 months of age can reduce the risk of developing food allergies by up to 80%. Current AAP and NIAID guidelines recommend early introduction of common allergens rather than delaying them, which is a reversal of previous recommendations.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Before your baby starts solids, you can assess their allergy risk. High-risk babies include those with severe eczema, an existing food allergy, or a first-degree relative (parent or sibling) with food allergies. For high-risk babies, the NIAID guidelines recommend introducing peanut-containing foods as early as 4-6 months, after evaluation by an allergist if the baby has severe eczema or existing egg allergy. Breastfeeding during the period of allergen introduction may offer additional protection, though research is still evolving.',
    },
    {
      ageRange: '4-6 months',
      context:
        'This is the critical window for early allergen introduction. Once your baby is showing readiness for solids (sitting with support, good head control, interest in food), you can begin introducing common allergens one at a time, every few days. The major allergens include peanut, egg, cow\'s milk products, tree nuts, wheat, soy, sesame, fish, and shellfish. Start with small amounts mixed into foods your baby is already eating. Peanut powder or peanut butter thinned with breast milk or formula is an easy way to introduce peanut. There is no benefit to delaying these foods.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continue offering a variety of allergenic foods regularly (two to three times per week) to maintain tolerance. The key is not just introducing allergens once but keeping them in the diet consistently. Studies show that sustained, regular exposure is important for developing tolerance. Common allergic reactions to watch for include hives, swelling (particularly of the face, lips, or tongue), vomiting, and in severe cases, difficulty breathing. Most reactions occur within minutes to two hours of eating the food.',
    },
    {
      ageRange: '12+ months',
      context:
        'By the first birthday, ideally all major allergens have been introduced and are part of your child\'s regular diet. If your child has been eating these foods without problems, they are very unlikely to develop an allergy to them later. If a food allergy has been diagnosed, work with an allergist to develop a management plan including an emergency action plan and epinephrine auto-injector (EpiPen) if indicated. New treatments like oral immunotherapy (OIT) are becoming more widely available for children with confirmed food allergies.',
    },
  ],
  whenNormal: [
    'Your baby tolerates small amounts of allergenic foods without any reaction',
    'Minor skin redness around the mouth from direct contact with food (contact irritation, not an allergy)',
    'Mild changes in stool after introducing new foods',
  ],
  whenToMention: [
    'Your baby has severe eczema and you want guidance on when and how to introduce allergens',
    'You have a strong family history of food allergies and want a plan for introduction',
    'Your child had a mild reaction (a few hives, mild vomiting) to a food and you are unsure whether it was an allergy',
    'You are confused about current allergen introduction guidelines',
  ],
  whenToActNow: [
    'Your child develops widespread hives, facial swelling, or difficulty breathing after eating a food - call 911 and administer epinephrine if available',
    'Your child vomits repeatedly and becomes pale or limp after eating a new food',
    'Your child has had a known allergic reaction and is accidentally exposed to the allergen',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'allergen-introduction-timing',
    'anaphylaxis-signs-in-baby',
    'hives',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Addendum Guidelines for the Prevention of Peanut Allergy in the United States. NIAID, 2017.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Early Introduction of Allergenic Foods. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Food-Allergy-Reactions.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Food Allergies in Schools. CDC, 2024.',
      url: 'https://www.cdc.gov/healthyschools/foodallergies/index.htm',
    },
  ],
};

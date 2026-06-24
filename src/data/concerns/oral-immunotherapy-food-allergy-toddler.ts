import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'oral-immunotherapy-food-allergy-toddler',
  title: 'Oral Immunotherapy (OIT) for Food Allergies in Toddlers',
  category: 'medical',
  searchTerms: [
    'oral immunotherapy toddler food allergy',
    'OIT peanut allergy child',
    'food allergy desensitization baby',
    'Palforzia peanut allergy',
    'oral immunotherapy safe toddler',
    'food allergy treatment toddler',
    'peanut allergy OIT risks benefits',
    'egg allergy OIT child',
    'milk allergy desensitization',
    'food allergy immunotherapy how it works',
  ],
  quickAnswer:
    'Oral immunotherapy (OIT) is a treatment that gradually introduces small, increasing doses of a food allergen to raise the threshold of tolerance and reduce the risk of severe reactions from accidental exposure. Palforzia (peanut allergen powder) is FDA-approved for peanut allergy in children 4-17 years old, but many allergists offer OIT off-label for younger children and other allergens. OIT does not cure food allergies but can provide significant protection. Success rates for desensitization range from 60-85%, though the maintenance dose must be continued indefinitely. OIT carries risks, including allergic reactions during treatment, and should only be conducted under the supervision of an experienced allergist.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'At this age, the focus should be on early allergen introduction rather than OIT treatment. The LEAP study demonstrated that introducing peanut products early (between 4-6 months) in high-risk infants reduced peanut allergy development by 81%. If your baby has been diagnosed with a food allergy, work with a pediatric allergist to determine whether OIT might be considered at a later age. For infants with egg or milk allergies, some allergists begin baked-allergen laddering (introducing the allergen in baked forms first) as an early desensitization approach.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Some allergists begin OIT in this age range, particularly for peanut, milk, and egg allergies. Evidence suggests that starting OIT earlier may lead to better outcomes because the immune system is more malleable in young children. The process involves a supervised initial dose escalation in the allergist\'s office, followed by daily home dosing with gradual increases every 1-2 weeks. Treatment takes 6-12 months to reach maintenance dose. Common side effects include mild oral itching, abdominal pain, and nausea. Anaphylaxis can occur but is uncommon (1-5% of patients).',
    },
    {
      ageRange: '3-5 years',
      context:
        'This age range has the most data supporting OIT safety and efficacy. Palforzia (FDA-approved peanut OIT) is approved for ages 4-17. For other allergens (milk, egg, tree nuts, sesame), OIT is available off-label through experienced allergists. Factors affecting success include the severity of the allergy, the specific allergen, adherence to daily dosing, and avoidance of exercise and hot showers after dosing (which can increase reaction risk). OIT requires a significant time commitment and ongoing engagement with your allergist. Discuss whether OIT, omalizumab, or a combination approach is best for your child.',
    },
  ],
  whenNormal: [
    'Your child\'s food allergy is well-managed with avoidance and you carry epinephrine as prescribed.',
    'Your child is undergoing OIT under allergist supervision and is tolerating the doses as expected.',
    'Your child had mild oral itching or stomach discomfort after an OIT dose, which resolved on its own.',
  ],
  whenToMention: [
    'Your child has been diagnosed with a food allergy and you want to discuss OIT as a treatment option.',
    'You are interested in the differences between OIT, sublingual immunotherapy (SLIT), and omalizumab.',
    'Your child is having frequent mild reactions during OIT and you want to adjust the protocol.',
    'Your child\'s food allergy is significantly affecting their quality of life and you want to explore all options.',
  ],
  whenToActNow: [
    'Your child has a severe allergic reaction during OIT (difficulty breathing, widespread hives, vomiting, dizziness) - use epinephrine and call 911.',
    'Your child accidentally received a double dose of OIT allergen.',
    'Your child is having symptoms of anaphylaxis at any time: throat tightening, difficulty breathing, fainting, or widespread hives with vomiting.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'omalizumab-biologic-food-allergy-children',
    'hives',
    'baby-choking-on-food',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'NIH/NIAID - LEAP Study: Randomized Trial of Peanut Consumption in Infants at Risk for Peanut Allergy. New England Journal of Medicine, 2015.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25705822/',
    },
    {
      org: 'FDA',
      citation:
        'FDA. FDA Approves First Drug for Treatment of Peanut Allergy for Children (Palforzia), 2020.',
      url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-drug-treatment-peanut-allergy-children',
    },
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma and Immunology. Oral Immunotherapy for Food Allergy.',
      url: 'https://acaai.org/allergies/management-and-treatment/oral-immunotherapy/',
    },
  ],
};

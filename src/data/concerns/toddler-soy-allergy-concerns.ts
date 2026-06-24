import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-soy-allergy-concerns',
  title: 'Soy Allergy in My Toddler',
  category: 'feeding',
  searchTerms: [
    'toddler soy allergy',
    'baby allergic to soy',
    'soy allergy symptoms toddler',
    'soy allergy management child',
    'toddler soy intolerance',
    'soy free diet toddler',
    'soy allergy and milk allergy toddler',
    'can toddler outgrow soy allergy',
    'soy allergy alternatives',
    'hidden soy in foods toddler',
  ],
  quickAnswer:
    'Soy allergy affects about 0.4% of children and is one of the more common food allergies in infancy and early childhood. The good news is that most children outgrow soy allergy by age 10, with many outgrowing it by age 3. About 10-15% of children with cow\'s milk allergy also have soy allergy. Management involves avoiding soy-containing foods, reading labels carefully, and having an allergy action plan. Many soy-allergic children can tolerate highly processed soy products like soy oil and soy lecithin.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Soy allergy in infants is often discovered when soy-based formula is introduced. Symptoms can include hives, vomiting, diarrhea, eczema flares, and in rare cases, anaphylaxis. Some infants with cow\'s milk protein allergy are also allergic to soy (about 10-15%), so soy formula may not be a suitable alternative. If your baby is diagnosed with soy allergy while breastfeeding, your doctor may advise you to eliminate soy from your own diet. Extensively hydrolyzed or amino acid-based formulas are alternatives when both soy and dairy must be avoided.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Managing soy allergy requires careful label reading because soy is found in many processed foods. By U.S. law, soy must be clearly declared on food labels. Common sources include soy sauce, tofu, edamame, soy milk, and miso. Soy is also hidden in many baked goods, cereals, crackers, and processed meats. However, many soy-allergic children can tolerate soy lecithin (an emulsifier) and highly refined soy oil, as these contain minimal soy protein. Discuss with your allergist which soy-derived ingredients your child needs to avoid.',
    },
    {
      ageRange: '2-5 years',
      context:
        'Your allergist will periodically retest your child to check if they are outgrowing the allergy. Most children with soy allergy outgrow it by school age. If your child has both soy and milk allergy, work closely with a pediatric dietitian to ensure adequate protein, calcium, and calorie intake from other sources. Pea protein milk, oat milk (fortified), and other alternatives can help fill nutritional gaps. If your child is attending preschool or daycare, ensure the school has an allergy action plan and epinephrine auto-injectors available.',
    },
  ],
  whenNormal: [
    'Your toddler has been diagnosed with soy allergy and is well-managed on a soy-free diet',
    'Your toddler tolerates soy lecithin and soy oil but reacts to whole soy products',
    'Your toddler\'s allergy test levels are declining, suggesting they may be outgrowing the allergy',
  ],
  whenToMention: [
    'Your toddler had a reaction and you suspect soy allergy but have not had formal testing',
    'Your toddler has both soy and milk allergy and you are struggling to ensure adequate nutrition',
    'Your toddler is having accidental exposures frequently and you need help identifying hidden soy in foods',
  ],
  whenToActNow: [
    'Your toddler has signs of anaphylaxis after eating soy: difficulty breathing, widespread hives, facial swelling, vomiting, or becoming limp — administer epinephrine and call 911',
    'Your toddler is having a reaction and you are unsure whether to use the epinephrine auto-injector — when in doubt, use it and call 911',
    'Your toddler has blood in their stool or severe vomiting after ingesting soy products',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-milk-allergy-alternatives',
    'toddler-egg-allergy-management',
    'toddler-tree-nut-allergy-management',
    'hives',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Soy Allergy. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Soy-Allergy.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Food Allergy.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy',
    },
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma and Immunology. Soy Allergy.',
      url: 'https://acaai.org/allergies/allergic-conditions/food/soy/',
    },
  ],
};

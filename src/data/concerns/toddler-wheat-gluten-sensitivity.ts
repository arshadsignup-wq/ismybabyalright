import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-wheat-gluten-sensitivity',
  title: 'Wheat and Gluten Sensitivity in My Toddler',
  category: 'digestive',
  searchTerms: [
    'toddler wheat allergy',
    'toddler gluten sensitivity',
    'celiac disease toddler symptoms',
    'toddler gluten intolerance',
    'toddler wheat sensitivity signs',
    'gluten free diet toddler',
    'toddler bloating after wheat',
    'toddler diarrhea after bread',
    'celiac disease diagnosis toddler',
    'wheat allergy vs celiac disease toddler',
  ],
  quickAnswer:
    'Wheat allergy, celiac disease, and non-celiac gluten sensitivity are three different conditions that are sometimes confused. Wheat allergy is an immune reaction to wheat proteins (affects about 0.4% of children and is often outgrown). Celiac disease is an autoimmune condition triggered by gluten (affects about 1% of the population and is lifelong). Non-celiac gluten sensitivity is controversial and uncommon in toddlers. Proper diagnosis requires specific testing, so do not remove gluten from your child\'s diet before testing, as this makes diagnosis more difficult.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Wheat and gluten-containing grains are typically introduced during the starting-solids period around 6 months. Current guidelines do not recommend delaying introduction, even in families with celiac disease. If your baby develops symptoms after eating wheat or gluten-containing foods (diarrhea, vomiting, skin rash, or hives), note the reaction and discuss with your pediatrician. Wheat allergy can cause immediate reactions (hives, vomiting within minutes to hours), while celiac disease symptoms develop more gradually over weeks to months.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Celiac disease often becomes apparent during this period as toddlers eat increasing amounts of gluten-containing foods. Symptoms may include chronic diarrhea or constipation, bloating, poor weight gain or failure to thrive, irritability, and a distended belly. Some toddlers develop dermatitis herpetiformis (itchy, blistering skin rash). If celiac disease is suspected, your pediatrician will order blood tests (tissue transglutaminase IgA antibody). It is important that your child continues eating gluten-containing foods until testing is complete, as a gluten-free diet can cause false-negative results.',
    },
    {
      ageRange: '2-5 years',
      context:
        'If celiac disease is diagnosed, your child will need a strict lifelong gluten-free diet. This means avoiding all wheat, barley, and rye products. Work with a pediatric dietitian to ensure nutritional adequacy, as many gluten-free products are lower in fiber, iron, and B vitamins. If wheat allergy (not celiac) is diagnosed, your child may outgrow it — about 65% of wheat-allergic children outgrow the allergy by age 12. Your allergist will guide periodic retesting. Do not put your child on a gluten-free diet without medical diagnosis, as unnecessary restriction can affect nutrition and growth.',
    },
  ],
  whenNormal: [
    'Your toddler tolerates wheat and gluten without any symptoms',
    'Your toddler has occasional loose stools that are not consistently related to gluten intake',
    'Your toddler has a family member with celiac disease but is growing well and has no symptoms — your pediatrician can discuss screening',
  ],
  whenToMention: [
    'Your toddler has chronic diarrhea, constipation, or bloating that seems related to eating wheat or gluten',
    'Your toddler is not gaining weight or growing as expected despite eating well',
    'There is a family history of celiac disease and you want to discuss screening',
  ],
  whenToActNow: [
    'Your toddler has signs of anaphylaxis after eating wheat: difficulty breathing, widespread hives, swelling, or vomiting — give epinephrine and call 911',
    'Your toddler is losing weight rapidly, has bloody stools, or is severely dehydrated from diarrhea',
    'Your toddler appears malnourished with a distended belly, extreme irritability, and failure to thrive',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-food-texture-sensitivity',
    'toddler-picky-eater-strategies',
    'toddler-egg-allergy-management',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Celiac Disease in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Celiac-Disease.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Celiac Disease.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease',
    },
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma and Immunology. Wheat Allergy.',
      url: 'https://acaai.org/allergies/allergic-conditions/food/wheat-gluten/',
    },
  ],
};
